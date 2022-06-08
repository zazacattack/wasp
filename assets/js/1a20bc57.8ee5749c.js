"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4468],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7905:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={title:"CLI Reference"},s=void 0,l={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"CLI Reference",description:"This document describes the Wasp CLI commands, arguments, and options.",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/cli.md",tags:[],version:"current",frontMatter:{title:"CLI Reference"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/language/features"},next:{title:"Deploying",permalink:"/docs/deploying"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Commands",id:"commands",children:[{value:"General",id:"general",children:[]},{value:"In project",id:"in-project",children:[]}]}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes the Wasp CLI commands, arguments, and options."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp")," command can be called from command line once ",(0,i.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/#2-installation"},"installed"),".\nWhen called without arguments, it will display its command usage and help document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"USAGE\n  wasp <command> [command-args]\n\nCOMMANDS\n  GENERAL\n    new <project-name>    Creates new Wasp project.\n    version               Prints current version of CLI.\n  IN PROJECT\n    start                 Runs Wasp app in development mode, watching for file changes.\n    db <db-cmd> [args]    Executes a database command. Run 'wasp db' for more info.\n    clean                 Deletes all generated code and other cached artifacts. Wasp equivalent of 'have you tried closing and opening it again?'.\n    build                 Generates full web app code, ready for deployment. Use when deploying or ejecting.\n    telemetry             Prints telemetry status.\n    deps                  Prints the dependencies that Wasp uses in your project.\n    info                  Prints basic information about current Wasp project.\n\nEXAMPLES\n  wasp new MyApp\n  wasp start\n  wasp db migrate-dev\n\nDocs: https://wasp-lang.dev/docs\nDiscord (chat): https://discord.gg/rzdnErX\n\n")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"general"},"General"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp new <project-name>")," creates new Wasp project. A directory with the provided project-name will be created, containing boilerplate code."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ wasp new MyFirstProject\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp version")," prints current version of CLI."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ wasp version\n\n0.2.0.1\n")))),(0,i.kt)("h3",{id:"in-project"},"In project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp start")," runs Wasp app in development mode. It opens a browser tab with your application running, and watches for any changes to .wasp or files in ext/ to automatically reflect in the browser. It also shows messages from web app, server and database on stdout/stderr.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp clean"),' deletes all generated code and other cached artifacts. If using SQlite, it also deletes the SQlite database. It is the Wasp equivalent to "try shutting it down and turning back on".'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ wasp clean\n\nDeleting .wasp/ directory...\nDeleted .wasp/ directory.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp build")," generates full web app code, ready for deployment. Use when deploying or ejecting. Generated code goes in the .wasp/build folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp telemetry")," prints ",(0,i.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/telemetry"},"telemetry")," status."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ wasp telemetry \n\nTelemetry is currently: ENABLED\nTelemetry cache directory: /home/user/.cache/wasp/telemetry/\nLast time telemetry data was sent for this project: 2021-05-27 09:21:16.79537226 UTC\nOur telemetry is anonymized and very limited in its scope: check https://wasp-lang.dev/docs/telemetry for more details.\n\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp deps")," prints the dependencies that Wasp uses in your project.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp info")," prints basic information about current Wasp project."))),(0,i.kt)("h4",{id:"database"},"Database"),(0,i.kt)("p",null,"Wasp has a set of commands for working with the database. They all start with ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," and mostly call prisma commands in the background."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wasp db migrate-dev")," ensures dev database corresponds to the current state of schema (entities): it generates a new migration if there are changes in the schema and it applies any pending migration to the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wasp db studio")," opens the GUI for inspecting your database.")))}m.isMDXComponent=!0}}]);