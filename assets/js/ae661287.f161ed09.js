"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5160],{85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),s=n(86010),i=n(12466),o=n(16550),l=n(91980),p=n(67392),u=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,p]=k({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=l??d;return c({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,s]),tabValues:s}}var g=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==o&&(d(t),l(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:m},i,{className:(0,s.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",y.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(T,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(50012);function s(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),s=t.lastIndexOf("{"),i=t.slice(s+1,t.length-1),[o,l]=i.split(","),p=t.slice(0,s);return a.createElement("code",null,p+("js"===n?o:l))}},94304:(e,t,n)=>{n.d(t,{a:()=>s});var a=n(67294);const r="#f59e0b";function s(){return a.createElement("span",{style:{border:`2px solid ${r}`,display:"inline-block",padding:"0.2em 0.4em",color:r,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},"required")}},48863:(e,t,n)=>{n.d(t,{A:()=>i,v:()=>o});var a=n(67294),r=n(50012),s=n(51397);function i(e){let{children:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(s.Z,null,t)}function o(e){let{children:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(s.Z,null,t)}},20694:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905)),s=(n(46300),n(48863));const i={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Wasp uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/blitz-js/superjson"},"superjson")," under the hood.\nThis means you're not limited to only sending and receiving JSON payloads."),(0,r.kt)("p",{parentName:"admonition"},"You can send and receive any superjson-compatible payload (like Dates, Sets, Lists, circular references, etc.) and let Wasp handle the (de)serialization."),(0,r.kt)(s.A,{mdxType:"ShowForTs"},(0,r.kt)("p",{parentName:"admonition"},"As long as you're annotating your Queries with the correct automatically generated types, TypeScript ensures your payloads are valid (i.e., Wasp knows how to serialize and deserialize them)."))))}l.isMDXComponent=!0},67198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=n(87462),r=(n(67294),n(3905)),s=n(46300),i=n(85162),o=n(74866),l=n(94304),p=n(48863),u=n(20694);const d={title:"Queries"},m=void 0,c={unversionedId:"data-model/operations/queries",id:"data-model/operations/queries",title:"Queries",description:"We'll explain what Queries are and how to use them. If you're looking for a detailed API specification, skip ahead to the API Reference.",source:"@site/docs/data-model/operations/queries.md",sourceDirName:"data-model/operations",slug:"/data-model/operations/queries",permalink:"/docs/data-model/operations/queries",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/data-model/operations/queries.md",tags:[],version:"current",frontMatter:{title:"Queries"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/data-model/operations/overview"},next:{title:"Actions",permalink:"/docs/data-model/operations/actions"}},k={},h=[{value:"Working with Queries",id:"working-with-queries",level:2},{value:"Declaring Queries",id:"declaring-queries",level:3},{value:"Implementing Queries in Node",id:"implementing-queries-in-node",level:3},{value:"Using Queries",id:"using-queries",level:3},{value:"The <code>useQuery</code> hook",id:"the-usequery-hook",level:4},{value:"Error Handling",id:"error-handling",level:3},{value:"Using Entities in Queries",id:"using-entities-in-queries",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Declaring Queries",id:"declaring-queries-1",level:3},{value:"Example",id:"example",level:4},{value:"Implementing Queries",id:"implementing-queries",level:3},{value:"Example",id:"example-1",level:4},{value:"The <code>useQuery</code> Hook",id:"the-usequery-hook-1",level:3}],g={toc:h},y="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We'll explain what Queries are and how to use them. If you're looking for a detailed API specification, skip ahead to the ",(0,r.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference"),"."),(0,r.kt)("p",null,"You can use Queries to fetch data from the server. They shouldn't modify the server's state.\nFetching all comments on a blog post, a list of users that liked a video, information about a single product based on its ID... All of these are perfect use cases for a Query."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Queries are fairly similar to Actions in terms of their API.\nTherefore, if you're already familiar with Actions, you might find reading the entire guide repetitive."),(0,r.kt)("p",{parentName:"admonition"},"We instead recommend skipping ahead and only reading ",(0,r.kt)("a",{parentName:"p",href:"/docs/data-model/operations/actions#differences-between-queries-and-actions"},"the differences between Queries and Actions"),", and consulting the ",(0,r.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference")," as needed.")),(0,r.kt)("h2",{id:"working-with-queries"},"Working with Queries"),(0,r.kt)("p",null,"You declare queries in the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp")," file and implement them using NodeJS. Wasp not only runs these queries within the server's context but also creates code that enables you to call them from any part of your codebase, whether it's on the client or server side."),(0,r.kt)("p",null,"This means you don't have to build an HTTP API for your query, manage server-side request handling, or even deal with client-side response handling and caching.\nInstead, just concentrate on implementing the business logic inside your query, and let Wasp handle the rest!"),(0,r.kt)("p",null,"To create a Query, you must:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Declare the Query in Wasp using the ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," declaration."),(0,r.kt)("li",{parentName:"ol"},"Define the Query's NodeJS implementation.")),(0,r.kt)("p",null,"After completing these two steps, you'll be able to use the Query from any point in your code."),(0,r.kt)("h3",{id:"declaring-queries"},"Declaring Queries"),(0,r.kt)("p",null,"To create a Query in Wasp, we begin with a ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," declaration."),(0,r.kt)("p",null,"Let's declare two Queries - one to fetch all tasks, and another to fetch tasks based on a filter, such as whether a task is done:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nquery getAllTasks {\n  fn: import { getAllTasks } from "@server/queries.js"\n}\n\nquery getFilteredTasks {\n  fn: import { getFilteredTasks } from "@server/queries.js"\n}\n'))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nquery getAllTasks {\n  fn: import { getAllTasks } from "@server/queries.js"\n}\n\nquery getFilteredTasks {\n  fn: import { getFilteredTasks } from "@server/queries.js"\n}\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Even though you are using TypeScript and plan to implement this Query in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/server/queries.ts"),", you still need to import it using a ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," extension. Wasp internally uses ",(0,r.kt)("inlineCode",{parentName:"p"},"esnext")," module resolution, which requires importing all files with a ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," extension. This is only needed when importing ",(0,r.kt)("inlineCode",{parentName:"p"},"@server")," files."),(0,r.kt)("p",{parentName:"admonition"},"Read more about ES modules in TypeScript ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/esm-node.html"},"here"),". If you're interested in the discussion and the reasoning behind this, read about it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/33588"},"in this GitHub issue"),".")))),(0,r.kt)("small",null,(0,r.kt)("p",null,"If you want to know about all supported options for the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," declaration, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference"),".")),(0,r.kt)("p",null,"The names of Wasp Queries and their implementations don't need to match, but we'll keep them the same to avoid confusion."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You might have noticed that we told Wasp to import Query implementations that don't yet exist. Don't worry about that for now. We'll write the implementations imported from ",(0,r.kt)(s.Z,{path:"queries.{js,ts}",mdxType:"FileExtSwitcher"})," in the next section."),(0,r.kt)("p",{parentName:"admonition"},"It's a good idea to start with the high-level concept (i.e., the Query declaration in the Wasp file) and only then deal with the implementation details (i.e., the Query's implementation in JavaScript).")),(0,r.kt)("p",null,"After declaring a Wasp Query, two important things happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wasp ",(0,r.kt)("strong",{parentName:"p"},"generates a server-side NodeJS function")," that shares its name with the Query.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wasp ",(0,r.kt)("strong",{parentName:"p"},"generates a client-side JavaScript function")," that shares its name with the Query (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"getFilteredTasks"),").\nThis function takes a single optional argument - an object containing any serializable data you wish to use inside the Query.\nWasp will send this object over the network and pass it into the Query's implementation as its first positional argument (more on this when we look at the implementations).\nSuch an abstraction works thanks to an HTTP API route handler Wasp generates on the server, which calls the Query's NodeJS implementation under the hood."))),(0,r.kt)("p",null,"Generating these two functions ensures a uniform calling interface across the entire app (both client and server)."),(0,r.kt)("h3",{id:"implementing-queries-in-node"},"Implementing Queries in Node"),(0,r.kt)("p",null,"Now that we've declared the Query, what remains is to implement it.\nWe've instructed Wasp to look for the Queries' implementations in the file ",(0,r.kt)(s.Z,{path:"src/server/queries.{js,ts}",mdxType:"FileExtSwitcher"}),", so that's where we should export them from."),(0,r.kt)("p",null,"Here's how you might implement the previously declared Queries ",(0,r.kt)("inlineCode",{parentName:"p"},"getAllTasks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getFilteredTasks"),":"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/queries.js"',title:'"src/server/queries.js"'},"// our \"database\"\nconst tasks = [\n  { id: 1, description: 'Buy some eggs', isDone: true },\n  { id: 2, description: 'Make an omelette', isDone: false },\n  { id: 3, description: 'Eat breakfast', isDone: false },\n]\n\n// You don't need to use the arguments if you don't need them\nexport const getAllTasks = () => {\n  return tasks\n}\n\n// The 'args' object is something sent by the caller (most often from the client)\nexport const getFilteredTasks = (args) => {\n  const { isDone } = args\n  return tasks.filter((task) => task.isDone === isDone)\n}\n")),(0,r.kt)(u.ZP,{mdxType:"SuperjsonNote"})),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/queries.ts"',title:'"src/server/queries.ts"'},"import { GetAllTasks, GetFilteredTasks } from '@wasp/queries/types'\n\ntype Task = {\n  id: number\n  description: string\n  isDone: boolean\n}\n\n// our \"database\"\nconst tasks: Task[] = [\n  { id: 1, description: 'Buy some eggs', isDone: true },\n  { id: 2, description: 'Make an omelette', isDone: false },\n  { id: 3, description: 'Eat breakfast', isDone: false },\n]\n\n// You don't need to use the arguments if you don't need them\nexport const getAllTasks: GetAllTasks<void, Task[]> = () => {\n  return tasks\n}\n\n// The 'args' object is something sent by the caller (most often from the client)\nexport const getFilteredTasks: GetFilteredTasks<\n  Pick<Task, 'isDone'>,\n  Task[]\n> = (args) => {\n  const { isDone } = args\n  return tasks.filter((task) => task.isDone === isDone)\n}\n")),(0,r.kt)("p",null,"Wasp automatically generates the types ",(0,r.kt)("inlineCode",{parentName:"p"},"GetTasks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GetFilteredTasks")," based on your Wasp file's declarations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetTasks")," is a generic type automatically generated by Wasp, based on the Query declaration for ",(0,r.kt)("inlineCode",{parentName:"li"},"getTasks"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetFilteredTasks")," is also a generic type automatically generated by Wasp, based on the Query declaration for ",(0,r.kt)("inlineCode",{parentName:"li"},"getFilteredTasks"),".")),(0,r.kt)("p",null,"You can utilize these types to define the input and output types for your Query."),(0,r.kt)("p",null,"For example, the Query ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," doesn't expect any arguments (its input type is ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"), but it does return a list of tasks (its output type is ",(0,r.kt)("inlineCode",{parentName:"p"},"Task[]"),")."),(0,r.kt)("p",null,"On the other hand, the Query ",(0,r.kt)("inlineCode",{parentName:"p"},"getFilteredTasks")," expects an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"{ isDone: boolean }"),". This type is derived from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," type."),(0,r.kt)("p",null,"While annotating the Queries is optional, it's highly recommended. Doing so enables ",(0,r.kt)("strong",{parentName:"p"},"full-stack type safety"),". We'll explore what this means when we discuss calling the Query from the client."),(0,r.kt)(u.ZP,{mdxType:"SuperjsonNote"}))),(0,r.kt)("small",null,(0,r.kt)("p",null,"For a detailed explanation of the Query definition API (i.e., arguments and return values), check the ",(0,r.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference"),".")),(0,r.kt)("h3",{id:"using-queries"},"Using Queries"),(0,r.kt)("p",null,"To use a Query, you can import it from ",(0,r.kt)("inlineCode",{parentName:"p"},"@wasp")," and call it directly. As mentioned, the usage doesn't change depending on whether you're on the server or the client:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import getAllTasks from '@wasp/queries/getAllTasks.js'\nimport getFilteredTasks from '@wasp/queries/getFilteredTasks.js'\n\n// ...\n\nconst allTasks = await getAllTasks()\nconst doneTasks = await getFilteredTasks({ isDone: true })\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import getAllTasks from '@wasp/queries/getAllTasks.js'\nimport getFilteredTasks from '@wasp/queries/getFilteredTasks.js'\n\n// TypeScript automatically infers the return values and type-checks\n// the payloads.\nconst allTasks = await getAllTasks()\nconst doneTasks = await getFilteredTasks({ isDone: true })\n")))),(0,r.kt)("h4",{id:"the-usequery-hook"},"The ",(0,r.kt)("inlineCode",{parentName:"h4"},"useQuery")," hook"),(0,r.kt)("p",null,"When using Queries on the client, you can make them reactive with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook.\nThis hook comes bundled with Wasp and is a thin wrapper around the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-query"},(0,r.kt)("em",{parentName:"a"},"react-query")),". The only difference is that you don't need to supply the key - Wasp handles this for you automatically."),(0,r.kt)("p",null,"Here's an example of calling the Queries using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=src/client/MainPage.jsx",title:"src/client/MainPage.jsx"},"import React from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getAllTasks from '@wasp/queries/getAllTasks'\nimport getFilteredTasks from '@wasp/queries/getFilteredTasks'\n\nconst MainPage = () => {\n  const { data: allTasks, error: error1 } = useQuery(getAllTasks)\n  const { data: doneTasks, error: error2 } = useQuery(getFilteredTasks, {\n    isDone: true,\n  })\n\n  if (error1 !== null || error2 !== null) {\n    return <div>There was an error</div>\n  }\n\n  return (\n    <div>\n      <h2>All Tasks</h2>\n      {allTasks && allTasks.length > 0\n        ? allTasks.map((task) => <Task key={task.id} {...task} />)\n        : 'No tasks'}\n\n      <h2>Finished Tasks</h2>\n      {doneTasks && doneTasks.length > 0\n        ? doneTasks.map((task) => <Task key={task.id} {...task} />)\n        : 'No finished tasks'}\n    </div>\n  )\n}\n\nconst Task = ({ description, isDone }: Task) => {\n  return (\n    <div>\n      <p>\n        <strong>Description: </strong>\n        {description}\n      </p>\n      <p>\n        <strong>Is done: </strong>\n        {isDone ? 'Yes' : 'No'}\n      </p>\n    </div>\n  )\n}\n\nexport default MainPage\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/client/MainPage.tsx",title:"src/client/MainPage.tsx"},"import React from 'react'\nimport { Task } from '@wasp/entities'\nimport { useQuery } from '@wasp/queries'\nimport getAllTasks from '@wasp/queries/getAllTasks'\nimport getFilteredTasks from '@wasp/queries/getFilteredTasks'\n\nconst MainPage = () => {\n  // TypeScript will automatically infer and type-check payload types.\n  const { data: allTasks, error: error1 } = useQuery(getAllTasks)\n  const { data: doneTasks, error: error2 } = useQuery(getFilteredTasks, {\n    isDone: true,\n  })\n\n  if (error1 !== null || error2 !== null) {\n    return <div>There was an error</div>\n  }\n\n  return (\n    <div>\n      <h2>All Tasks</h2>\n      {allTasks && allTasks.length > 0\n        ? allTasks.map((task) => <Task key={task.id} {...task} />)\n        : 'No tasks'}\n\n      <h2>Finished Tasks</h2>\n      {doneTasks && doneTasks.length > 0\n        ? doneTasks.map((task) => <Task key={task.id} {...task} />)\n        : 'No finished tasks'}\n    </div>\n  )\n}\n\nconst Task = ({ description, isDone }: Task) => {\n  return (\n    <div>\n      <p>\n        <strong>Description: </strong>\n        {description}\n      </p>\n      <p>\n        <strong>Is done: </strong>\n        {isDone ? 'Yes' : 'No'}\n      </p>\n    </div>\n  )\n}\n\nexport default MainPage\n")),(0,r.kt)("p",null,"Notice how you don't need to annotate the Query's return value type. Wasp automatically infers the from the Query's backend implementation. This is ",(0,r.kt)("strong",{parentName:"p"},"full-stack type safety"),": the types on the client always match the types on the server."))),(0,r.kt)("small",null,(0,r.kt)("p",null,"For a detailed specification of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook, check the ",(0,r.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference"),".")),(0,r.kt)("h3",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"For security reasons, all exceptions thrown in the Query's NodeJS implementation are sent to the client as responses with the HTTP status code ",(0,r.kt)("inlineCode",{parentName:"p"},"500"),", with all other details removed.\nHiding error details by default helps against accidentally leaking possibly sensitive information over the network."),(0,r.kt)("p",null,"If you do want to pass additional error information to the client, you can construct and throw an appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpError")," in your implementation:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/server/queries.js",title:"src/server/queries.js"},"import HttpError from '@wasp/core/HttpError.js'\n\nexport const getAllTasks = async (args, context) => {\n  throw new HttpError(\n    403, // status code\n    \"You can't do this!\", // message\n    { foo: 'bar' } // data\n  )\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/queries.ts",title:"src/server/queries.ts"},"import { GetAllTasks } from '@wasp/queries/types'\nimport HttpError from '@wasp/core/HttpError.js'\n\nexport const getAllTasks: GetAllTasks = async (args, context) => {\n  throw new HttpError(\n    403, // status code\n    \"You can't do this!\", // message\n    { foo: 'bar' } // data\n  )\n}\n")))),(0,r.kt)("p",null,"If the status code is ",(0,r.kt)("inlineCode",{parentName:"p"},"4xx"),", the client will receive a response object with the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," fields, and it will rethrow the error (including these fields).\nTo prevent information leakage, the server won't forward these fields for any other HTTP status codes."),(0,r.kt)("h3",{id:"using-entities-in-queries"},"Using Entities in Queries"),(0,r.kt)("p",null,"In most cases, resources used in Queries will be ",(0,r.kt)("a",{parentName:"p",href:"/docs/data-model/entities"},"Entities"),".\nTo use an Entity in your Query, add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," declaration in Wasp:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{4,9} title="main.wasp"',"{4,9}":!0,title:'"main.wasp"'},'\nquery getAllTasks {\n  fn: import { getAllTasks } from "@server/queries.js",\n  entities: [Task]\n}\n\nquery getFilteredTasks {\n  fn: import { getFilteredTasks } from "@server/queries.js",\n  entities: [Task]\n}\n'))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{4,9} title="main.wasp"',"{4,9}":!0,title:'"main.wasp"'},'\nquery getAllTasks {\n  fn: import { getAllTasks } from "@server/queries.js",\n  entities: [Task]\n}\n\nquery getFilteredTasks {\n  fn: import { getFilteredTasks } from "@server/queries.js",\n  entities: [Task]\n}\n')))),(0,r.kt)("p",null,"Wasp will inject the specified Entity into the Query's ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," argument, giving you access to the Entity's Prisma API:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/queries.js"',title:'"src/server/queries.js"'},"export const getAllTasks = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n\nexport const getFilteredTasks = async (args, context) => {\n  return context.entities.Task.findMany({\n    where: { isDone: args.isDone },\n  })\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/queries.ts"',title:'"src/server/queries.ts"'},"import { Task } from '@wasp/entities'\nimport { GetAllTasks, GetFilteredTasks } from '@wasp/queries/types'\n\nexport const getAllTasks: GetAllTasks<void, Task[]> = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n\nexport const getFilteredTasks: GetFilteredTasks<\n  Pick<Task, 'isDone'>,\n  Task[]\n> = async (args, context) => {\n  return context.entities.Task.findMany({\n    where: { isDone: args.isDone },\n  })\n}\n")),(0,r.kt)("p",null,"Again, annotating the Queries is optional, but greatly improves ",(0,r.kt)("strong",{parentName:"p"},"full-stack type safety"),"."))),(0,r.kt)("p",null,"The object ",(0,r.kt)("inlineCode",{parentName:"p"},"context.entities.Task")," exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"prisma.task")," from ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud"},"Prisma's CRUD API"),"."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"declaring-queries-1"},"Declaring Queries"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," declaration supports the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fn: ServerImport")," ",(0,r.kt)(l.a,{mdxType:"Required"})),(0,r.kt)("p",{parentName:"li"},"The import statement of the Query's NodeJs implementation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"entities: [Entity]")),(0,r.kt)("p",{parentName:"li"},"A list of entities you wish to use inside your Query.\nFor instructions on using Entities in Queries, take a look at ",(0,r.kt)("a",{parentName:"p",href:"#using-entities-in-queries"},"the guide"),"."))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("p",null,"Declaring the Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp"},'query getFoo {\n    fn: import { getFoo } from "@server/queries.js"\n    entities: [Foo]\n}\n')),(0,r.kt)("p",null,"Enables you to import and use it anywhere in your code (on the server or the client):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import getFoo from '@wasp/queries'\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("p",null,"Declaring the Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp"},'query getFoo {\n    fn: import { getFoo } from "@server/queries.js"\n    entities: [Foo]\n}\n')),(0,r.kt)("p",null,"Enables you to import and use it anywhere in your code (on the server or the client):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import getFoo from '@wasp/queries'\n")),(0,r.kt)("p",null,"And also creates a type you can import on the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { GetFoo } from '@wasp/queries/types'\n")))),(0,r.kt)("h3",{id:"implementing-queries"},"Implementing Queries"),(0,r.kt)("p",null,"The Query's implementation is a NodeJS function that takes two arguments (it can be an ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function if you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," keyword).\nSince both arguments are positional, you can name the parameters however you want, but we'll stick with ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"args")," (type depends on the Query)"),(0,r.kt)("p",{parentName:"li"},"An object containing the data ",(0,r.kt)("strong",{parentName:"p"},"passed in when calling the query")," (e.g., filtering conditions).\nCheck ",(0,r.kt)("a",{parentName:"p",href:"#using-queries"},"the usage examples")," to see how to pass this object to the Query.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"context")," (type depends on the Query)"),(0,r.kt)("p",{parentName:"li"},"An additional context object ",(0,r.kt)("strong",{parentName:"p"},"passed into the Query by Wasp"),". This object contains user session information, as well as information about entities. Check the ",(0,r.kt)("a",{parentName:"p",href:"#using-entities-in-queries"},"section about using entities in Queries")," to see how to use the entities field on the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object, or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/auth/overview#using-the-contextuser-object"},"auth section")," to see how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," object."))),(0,r.kt)(p.A,{mdxType:"ShowForTs"},(0,r.kt)("p",null,"Afer you ",(0,r.kt)("a",{parentName:"p",href:"#declaring-queries"},"declare the query"),", Wasp generates a generic type you can use when defining its implementation.\nFor the Query declared as ",(0,r.kt)("inlineCode",{parentName:"p"},"getSomething"),", the generated type is called ",(0,r.kt)("inlineCode",{parentName:"p"},"GetSomething"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { GetSomething } from '@wasp/queries/types'\n")),(0,r.kt)("p",null,"It expects two (optional) type arguments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Input")),(0,r.kt)("p",{parentName:"li"},"The type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," object (i.e., the Query's input payload). The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"never"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"The type of the Query's return value (i.e., the Query's output payload). The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),"."))),(0,r.kt)("p",null,"The defaults were chosen to make the type signature as permissive as possible. If don't want your Query to take/return anything, use ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," as a type argument.")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("p",null,"The following Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp"},'query getFoo {\n    fn: import { getFoo } from "@server/queries.js"\n    entities: [Foo]\n}\n')),(0,r.kt)("p",null,"Expects to find a named export ",(0,r.kt)("inlineCode",{parentName:"p"},"getFoo")," from the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/server/queries.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=queries.js",title:"queries.js"},"export const getFoo = (args, context) => {\n  // implementation\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("p",null,"The following Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp"},'query getFoo {\n    fn: import { getFoo } from "@server/queries.js"\n    entities: [Foo]\n}\n')),(0,r.kt)("p",null,"Expects to find a named export ",(0,r.kt)("inlineCode",{parentName:"p"},"getFoo")," from the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/server/queries.js")),(0,r.kt)("p",null,"You can use the generated type ",(0,r.kt)("inlineCode",{parentName:"p"},"GetFoo")," and specify the Query's inputs and outputs using its type arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=queries.ts",title:"queries.ts"},'import { GetFoo } from "@wasp/queries/types";\n\ntype Foo = // ...\n\nexport const getFoo: GetFoo<{ id: number }, Foo> = (args, context) => {\n  // implementation\n};\n')),(0,r.kt)("p",null,"In this case, the Query expects to receive an object with an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field of type ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," (this is the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"), and return a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," (this must match the type of the Query's return value)."))),(0,r.kt)("h3",{id:"the-usequery-hook-1"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"useQuery")," Hook"),(0,r.kt)("p",null,"Wasp's ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook is a thin wrapper around the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tannerlinsley/react-query"},(0,r.kt)("em",{parentName:"a"},"react-query")),".\nOne key difference is that Wasp doesn't expect you to supply the cache key - it takes care of it under the hood."),(0,r.kt)("p",null,"Wasp's ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook accepts three arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"queryFn")," ",(0,r.kt)(l.a,{mdxType:"Required"})),(0,r.kt)("p",{parentName:"li"},"The client-side query function generated by Wasp based on a ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," declaration in your ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"queryFnArgs")),(0,r.kt)("p",{parentName:"li"},"The arguments object (payload) you wish to pass into the Query. The Query's NodeJS implementation will receive this object as its first positional argument.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options")),(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("em",{parentName:"p"},"react-query")," ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," object. Use this to change\n",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/important-defaults"},"the default\nbehavior")," for\nthis particular Query. If you want to change the global defaults, you can do\nso in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/project/client-config#overriding-default-behaviour-for-queries"},"client setup function"),"."))),(0,r.kt)("p",null,"For an example of usage, check ",(0,r.kt)("a",{parentName:"p",href:"#the-usequery-hook"},"this section"),"."))}f.isMDXComponent=!0}}]);