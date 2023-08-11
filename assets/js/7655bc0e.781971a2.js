"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5898],{85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),s=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),s=n(67294),r=n(86010),i=n(12466),o=n(16550),l=n(91980),u=n(67392),p=n(50012);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}function c(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=k({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var y=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},s.createElement(g,(0,a.Z)({},e,t)),s.createElement(v,(0,a.Z)({},e,t)))}function b(e){const t=(0,y.Z)();return s.createElement(w,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),s=n(50012);function r(e){let{path:t}=e;const[n]=(0,s.Nk)("docusaurus.tab.js-ts"),r=t.lastIndexOf("{"),i=t.slice(r+1,t.length-1),[o,l]=i.split(","),u=t.slice(0,r);return a.createElement("code",null,u+("js"===n?o:l))}},48863:(e,t,n)=>{n.d(t,{A:()=>i,v:()=>o});var a=n(67294),s=n(50012),r=n(51397);function i(e){let{children:t}=e;const[n]=(0,s.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(r.Z,null,t)}function o(e){let{children:t}=e;const[n]=(0,s.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(r.Z,null,t)}},12799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>k});var a=n(87462),s=(n(67294),n(3905)),r=n(46300),i=n(85162),o=n(74866),l=n(44996),u=n(48863);const p={title:"5. Querying the Database"},d=void 0,c={unversionedId:"tutorial/queries",id:"tutorial/queries",title:"5. Querying the Database",description:"We want to know which tasks we need to do, so let's list them! The primary way of interacting with entities in Wasp is by using queries and actions, collectively known as operations.",source:"@site/docs/tutorial/05-queries.md",sourceDirName:"tutorial",slug:"/tutorial/queries",permalink:"/docs/tutorial/queries",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/tutorial/05-queries.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Querying the Database"},sidebar:"docs",previous:{title:"4. Database Entities",permalink:"/docs/tutorial/entities"},next:{title:"6. Modifying Data",permalink:"/docs/tutorial/actions"}},m={},k=[{value:"Defining the Query",id:"defining-the-query",level:2},{value:"Declaring a Query",id:"declaring-a-query",level:3},{value:"Implementing a Query",id:"implementing-a-query",level:3},{value:"Invoking the Query On the Frontend",id:"invoking-the-query-on-the-frontend",level:2}],h={toc:k},y="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(y,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We want to know which tasks we need to do, so let's list them! The primary way of interacting with entities in Wasp is by using ",(0,s.kt)("a",{parentName:"p",href:"/docs/data-model/operations/overview"},"queries and actions"),", collectively known as ",(0,s.kt)("em",{parentName:"p"},"operations"),"."),(0,s.kt)("p",null,"Queries are used to read an entity, while actions are used to create, modify, and delete entities. Since we want to list the tasks, we'll want to use a query."),(0,s.kt)("p",null,"To list tasks we have to:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a query that fetches tasks from the database."),(0,s.kt)("li",{parentName:"ol"},"Update the ",(0,s.kt)(r.Z,{path:"MainPage.{jsx,tsx}",mdxType:"FileExtSwitcher"})," to use that query and display the results.")),(0,s.kt)("h2",{id:"defining-the-query"},"Defining the Query"),(0,s.kt)("p",null,"We'll create a new query called ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks"),". We'll need to declare the query in the Wasp file and write its implementation in ",(0,s.kt)(u.v,{mdxType:"ShowForJs"},"JS"),(0,s.kt)(u.A,{mdxType:"ShowForTs"},"TS"),"."),(0,s.kt)("h3",{id:"declaring-a-query"},"Declaring a Query"),(0,s.kt)("p",null,"We need to add a ",(0,s.kt)("strong",{parentName:"p"},"query")," declaration to ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp")," so that Wasp knows it exists:"),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nquery getTasks {\n  // Specifies where the implementation for the query function is.\n  // Use `@server` to import files inside the `src/server` folder.\n  fn: import { getTasks } from "@server/queries.js",\n  // Tell Wasp that this query reads from the `Task` entity. By doing this, Wasp\n  // will automatically update the results of this query when tasks are modified.\n  entities: [Task]\n}\n'))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nquery getTasks {\n  // Specifies where the implementation for the query function is.\n  // Use `@server` to import files inside the `src/server` folder.\n  fn: import { getTasks } from "@server/queries.js",\n  // Tell Wasp that this query reads from the `Task` entity. By doing this, Wasp\n  // will automatically update the results of this query when tasks are modified.\n  entities: [Task]\n}\n')),(0,s.kt)("admonition",{title:"Importing Typescript files",type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Even though you are using TypeScript and plan to implement this query in ",(0,s.kt)("inlineCode",{parentName:"p"},"src/server/queries.ts"),", you still need to import it using a ",(0,s.kt)("inlineCode",{parentName:"p"},".js")," extension. Wasp internally uses ",(0,s.kt)("inlineCode",{parentName:"p"},"esnext")," module resolution, which requires importing all files with a ",(0,s.kt)("inlineCode",{parentName:"p"},".js")," extension. This is only needed when importing ",(0,s.kt)("inlineCode",{parentName:"p"},"@server@")," files."),(0,s.kt)("p",{parentName:"admonition"},"Read more about ES modules in TypeScript ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/esm-node.html"},"here"),". If you're interested in the discussion and the reasoning behind this, read about it ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/33588"},"in this GitHub issue"),".")))),(0,s.kt)("h3",{id:"implementing-a-query"},"Implementing a Query"),(0,s.kt)(u.v,{mdxType:"ShowForJs"},(0,s.kt)("p",null,"Next, create a new file ",(0,s.kt)("inlineCode",{parentName:"p"},"src/server/queries.js")," and define the JavaScript function we've just imported in our ",(0,s.kt)("inlineCode",{parentName:"p"},"query")," declaration:")),(0,s.kt)(u.A,{mdxType:"ShowForTs"},(0,s.kt)("p",null,"Next, create a new file ",(0,s.kt)("inlineCode",{parentName:"p"},"src/server/queries.ts")," and define the TypeScript function we've just imported in our ",(0,s.kt)("inlineCode",{parentName:"p"},"query")," declaration:")),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/queries.js"',title:'"src/server/queries.js"'},"export const getTasks = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/queries.ts"',title:'"src/server/queries.ts"'},"import { Task } from '@wasp/entities'\nimport { GetTasks } from '@wasp/queries/types'\n\nexport const getTasks: GetTasks<void, Task[]> = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n")),(0,s.kt)("p",null,"Wasp automatically generates the types ",(0,s.kt)("inlineCode",{parentName:"p"},"GetTasks")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," based the contents of ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Task")," is a type corresponding to the ",(0,s.kt)("inlineCode",{parentName:"li"},"Task")," entity we've defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"main.wasp"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"GetTasks")," is a generic type Wasp automatically generated based the ",(0,s.kt)("inlineCode",{parentName:"li"},"getTasks")," query we've defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"main.wasp"),".")),(0,s.kt)("p",null,"You can use these types to specify the Query's input and output types. This query doesn't expect any arguments (its input type is ",(0,s.kt)("inlineCode",{parentName:"p"},"void"),"), but it does return an array of tasks (its output type is ",(0,s.kt)("inlineCode",{parentName:"p"},"Task[]"),")."),(0,s.kt)("p",null,"Annotating the queries is optional, but highly recommended because doing so enables ",(0,s.kt)("strong",{parentName:"p"},"full-stack type safety"),". We'll see what this means in the next step."))),(0,s.kt)("p",null,"Query function parameters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"args"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"object"),", arguments the query is given by the caller."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"context"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"object"),", information provided by Wasp.")),(0,s.kt)("p",null,"Since we declared in ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp")," that our query uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," entity, Wasp injected a ",(0,s.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud"},"Prisma client")," for the ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," entity as ",(0,s.kt)("inlineCode",{parentName:"p"},"context.entities.Task")," - we used it above to fetch all the tasks from the database."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Queries and actions are NodeJS functions that are executed on the server. Therefore, we put them in the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/server")," folder.")),(0,s.kt)("h2",{id:"invoking-the-query-on-the-frontend"},"Invoking the Query On the Frontend"),(0,s.kt)("p",null,"While we implement queries on the server, Wasp generates client-side functions that automatically takes care of serialization, network calls, and chache invalidation, allowing you to call the server code like it's a regular function. This makes it easy for us to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks")," query we just created in our React component:"),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{1-2,5-14,17-36} title="src/client/MainPage.jsx"',"{1-2,5-14,17-36}":!0,title:'"src/client/MainPage.jsx"'},"import getTasks from '@wasp/queries/getTasks'\nimport { useQuery } from '@wasp/queries'\n\nconst MainPage = () => {\n  const { data: tasks, isLoading, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isLoading && 'Loading...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = ({ task }) => {\n  return (\n    <div>\n      <input type=\"checkbox\" id={String(task.id)} checked={task.isDone} />\n      {task.description}\n    </div>\n  )\n}\n\nconst TasksList = ({ tasks }) => {\n  if (!tasks?.length) return <div>No tasks</div>\n\n  return (\n    <div>\n      {tasks.map((task, idx) => (\n        <Task task={task} key={idx} />\n      ))}\n    </div>\n  )\n}\n\nexport default MainPage\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{1-3,6-15,18-37} title="src/client/MainPage.tsx"',"{1-3,6-15,18-37}":!0,title:'"src/client/MainPage.tsx"'},"import getTasks from '@wasp/queries/getTasks'\nimport { useQuery } from '@wasp/queries'\nimport { Task } from '@wasp/entities'\n\nconst MainPage = () => {\n  const { data: tasks, isLoading, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isLoading && 'Loading...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = ({ task }: { task: Task }) => {\n  return (\n    <div>\n      <input type=\"checkbox\" id={String(task.id)} checked={task.isDone} />\n      {task.description}\n    </div>\n  )\n}\n\nconst TasksList = ({ tasks }: { tasks: Task[] }) => {\n  if (!tasks?.length) return <div>No tasks</div>\n\n  return (\n    <div>\n      {tasks.map((task, idx) => (\n        <Task task={task} key={idx} />\n      ))}\n    </div>\n  )\n}\n\nexport default MainPage\n")))),(0,s.kt)("p",null,"Most of this code is regular React, the only exception being the ",(0,s.kt)(u.v,{mdxType:"ShowForJs"},"two"),(0,s.kt)(u.A,{mdxType:"ShowForTs"},"three")," special ",(0,s.kt)("inlineCode",{parentName:"p"},"@wasp")," imports:"),(0,s.kt)(u.v,{mdxType:"ShowForJs"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"import getTasks from '@wasp/queries/getTasks'")," - Imports the client-side query function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"import { useQuery } from '@wasp/queries'")," - Imports Wasp's ",(0,s.kt)("a",{parentName:"li",href:"/docs/data-model/operations/queries#the-usequery-hook-1"},"useQuery")," React hook, which is based on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query"},"react-query"),"'s hook with the same name."))),(0,s.kt)(u.A,{mdxType:"ShowForTs"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"import getTasks from '@wasp/queries/getTasks'")," - Imports the client-side query function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"import { useQuery } from '@wasp/queries'")," - Imports Wasp's ",(0,s.kt)("a",{parentName:"li",href:"/docs/data-model/operations/queries#the-usequery-hook-1"},"useQuery")," React hook, which is based on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query"},"react-query"),"'s hook with the same name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"import { Task } from '@wasp/entities'")," - The type for the task entity we defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"main.wasp"),".")),(0,s.kt)("p",null,"Notice how you don't need to annotate the type of the query's return value: Wasp uses the types you defined while implementing the query for the generated client-side function. This is ",(0,s.kt)("strong",{parentName:"p"},"full-stack type safety"),": the types on the client always match the types on the server.")),(0,s.kt)("p",null,"We could have called the query directly using ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks()"),", but the ",(0,s.kt)("inlineCode",{parentName:"p"},"useQuery")," hook makes it reactive: React will re-render the component every time the query changes. Remember that Wasp automatically refreshes queries whenever the data is modified."),(0,s.kt)("p",null,'With these changes, you should be seeing the text "No tasks" on the screen:'),(0,s.kt)("img",{alt:"Todo App - No Tasks",src:(0,l.Z)("img/todo-app-no-tasks.png"),style:{border:"1px solid black"}}),(0,s.kt)("p",null,"We'll create a form to add tasks in the next step \ud83e\ude84"))}f.isMDXComponent=!0}}]);