{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE QuasiQuotes #-}

module Wasp.Cli.Command.AI.New
  ( newForHuman,
    newForMachine,
  )
where

import Control.Arrow ()
import Control.Monad.Except (MonadError (throwError), MonadIO (liftIO))
import qualified Data.Text as T
import qualified Data.Text.IO as T.IO
import StrongPath (fromAbsDir)
import StrongPath.Operations ()
import System.Directory (createDirectoryIfMissing, setCurrentDirectory)
import System.Environment (lookupEnv)
import System.FilePath (takeDirectory)
import System.IO (hFlush, stdout)
import Wasp.Cli.Command (Command, CommandError (CommandError))
import qualified Wasp.Cli.Command.AI.CodeAgent as CA
import qualified Wasp.Cli.Command.AI.GenerateNewProject as GNP
import Wasp.Cli.Command.AI.GenerateNewProject.Common (AuthProvider (..), NewProjectDetails (..))
import qualified Wasp.Cli.Command.CreateNewProject as CNP
import Wasp.OpenAI (OpenAIApiKey)

newForHuman :: Command ()
newForHuman = do
  openAIApiKey <- getOpenAIApiKey

  -- TODO: Use new fancy logic we have for interactive stuff like this! We need to merge with main though first.
  (webAppName, webAppDescription) <- liftIO $ do
    putStrLn "App name (e.g. MyFirstApp):"
    appName <- getLine
    putStrLn "Describe your app in a couple of sentences:"
    desc <- getLine
    return (appName, desc)

  projectInfo <- CNP.parseProjectInfo webAppName

  absWaspProjectDir <- CNP.createEmptyWaspProjectDir projectInfo
  liftIO $ setCurrentDirectory $ fromAbsDir absWaspProjectDir

  let codeAgentConfig =
        CA.CodeAgentConfig
          { CA._openAIApiKey = openAIApiKey,
            CA._writeFile = writeFileToDisk,
            CA._writeLog = forwardLogToStdout
          }

  liftIO $
    CA.runCodeAgent codeAgentConfig $
      GNP.generateNewProject $ newProjectDetails webAppName webAppDescription
  where
    writeFileToDisk path content = do
      createDirectoryIfMissing True (takeDirectory path)
      T.IO.writeFile path content
      putStrLn $ "[info] Wrote file at " <> path
      hFlush stdout

    forwardLogToStdout msg = do
      putStrLn . T.unpack $ msg
      hFlush stdout

newForMachine :: String -> String -> Command ()
newForMachine webAppName webAppDescription = do
  openAIApiKey <- getOpenAIApiKey

  _projectInfo <- CNP.parseProjectInfo webAppName

  let codeAgentConfig =
        CA.CodeAgentConfig
          { CA._openAIApiKey = openAIApiKey,
            CA._writeFile = writeFileToStdoutWithDelimiters,
            CA._writeLog = writeLogToStdoutWithDelimiters
          }

  liftIO $
    CA.runCodeAgent codeAgentConfig $
      GNP.generateNewProject $ newProjectDetails webAppName webAppDescription
  where
    writeFileToStdoutWithDelimiters path content =
      writeToStdoutWithDelimiters "WRITE FILE" [T.pack path, content]

    writeLogToStdoutWithDelimiters msg =
      writeToStdoutWithDelimiters "LOG" [msg]

    writeToStdoutWithDelimiters delimiterTitle paragraphs = do
      T.IO.putStrLn . ("\n" <>) $
        withDelimiter delimiterTitle $
          T.intercalate "\n" $
            paragraphs
      hFlush stdout

    withDelimiter title content =
      T.intercalate "\n" $
        [ "==== WASP AI: " <> title <> " ====",
          content,
          "===/ WASP AI: " <> title <> " ===="
        ]

getOpenAIApiKey :: Command OpenAIApiKey
getOpenAIApiKey =
  liftIO (lookupEnv "OPENAI_API_KEY")
    >>= maybe throwMissingOpenAIApiKeyEnvVarError pure
  where
    throwMissingOpenAIApiKeyEnvVarError =
      throwError $
        CommandError
          "Missing OPENAI_API_KEY env var"
          "You can obtain this key from your OpenAI profile."

newProjectDetails :: String -> String -> NewProjectDetails
newProjectDetails webAppName webAppDescription =
  NewProjectDetails
    { _projectAppName = webAppName,
      _projectDescription = webAppDescription,
      _projectAuth = UsernameAndPassword
    }
