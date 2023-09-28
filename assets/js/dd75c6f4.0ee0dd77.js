"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),i=a(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),i=a(67294),r=a(86010),s=a(12466),o=a(16550),l=a(91980),p=a(67392),d=a(50012);function m(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function u(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,p]=h({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=l??m;return c({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),k(e)}),[p,k,r]),tabValues:r}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==o&&(m(t),l(n))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:u},s,{className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(b,(0,n.Z)({},e,t)),i.createElement(w,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return i.createElement(v,(0,n.Z)({key:String(t)},e))}},94304:(e,t,a)=>{a.d(t,{a:()=>r});var n=a(67294);const i="#f59e0b";function r(){return n.createElement("span",{style:{border:`2px solid ${i}`,display:"inline-block",padding:"0.2em 0.4em",color:i,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},"required")}},55863:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),r=a(85162),s=a(74866),o=a(94304);const l={title:"Databases"},p=void 0,d={unversionedId:"data-model/backends",id:"data-model/backends",title:"Databases",description:"Entities, Operations and Automatic CRUD together make a high-level interface for working with your app's data. Still, all that data has to live somewhere, so let's see how Wasp deals with databases.",source:"@site/docs/data-model/backends.md",sourceDirName:"data-model",slug:"/data-model/backends",permalink:"/docs/data-model/backends",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/data-model/backends.md",tags:[],version:"current",frontMatter:{title:"Databases"},sidebar:"docs",previous:{title:"Automatic CRUD",permalink:"/docs/data-model/crud"},next:{title:"Using Auth",permalink:"/docs/auth/overview"}},m={},u=[{value:"Supported Database Backends",id:"supported-database-backends",level:2},{value:"SQLite",id:"sqlite",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Migrating from SQLite to PostgreSQL",id:"migrating-from-sqlite-to-postgresql",level:3},{value:"Connecting to a Database",id:"connecting-to-a-database",level:2},{value:"Using the Dev Database Provided by Wasp",id:"using-the-dev-database-provided-by-wasp",level:3},{value:"Connecting to an existing database",id:"connecting-to-an-existing-database",level:3},{value:"Seeding the Database",id:"seeding-the-database",level:2},{value:"Writing a Seed Function",id:"writing-a-seed-function",level:3},{value:"Running seed functions",id:"running-seed-functions",level:3},{value:"Prisma Configuration",id:"prisma-configuration",level:2},{value:"Prisma Preview Features",id:"prisma-preview-features",level:3},{value:"PostgreSQL Extensions",id:"postgresql-extensions",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"The <code>app.db</code> Field",id:"the-appdb-field",level:3},{value:"CLI Commands for Seeding the Database",id:"cli-commands-for-seeding-the-database",level:3}],c={toc:u},h="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/data-model/entities"},"Entities"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/data-model/operations/overview"},"Operations")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/data-model/crud"},"Automatic CRUD")," together make a high-level interface for working with your app's data. Still, all that data has to live somewhere, so let's see how Wasp deals with databases."),(0,i.kt)("h2",{id:"supported-database-backends"},"Supported Database Backends"),(0,i.kt)("p",null,"Wasp supports multiple database backends. We'll list and explain each one."),(0,i.kt)("h3",{id:"sqlite"},"SQLite"),(0,i.kt)("p",null,"The default database Wasp uses is ",(0,i.kt)("a",{parentName:"p",href:"https://www.sqlite.org/index.html"},"SQLite"),"."),(0,i.kt)("p",null,"SQLite is a great way for getting started with a new project because it doesn't require any configuration, but Wasp can only use it in development. Once you want to deploy your Wasp app to production, you'll need to switch to PostgreSQL and stick with it."),(0,i.kt)("p",null,"Fortunately, migrating from SQLite to PostgreSQL is pretty simple, and we have ",(0,i.kt)("a",{parentName:"p",href:"#migrating-from-sqlite-to-postgresql"},"a guide")," to help you."),(0,i.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," is the most advanced open source database and the fourth most popular database overall.\nIt's been in active development for 20 years.\nTherefore, if you're looking for a battle-tested database, look no further."),(0,i.kt)("p",null,"To use Wasp with PostgreSQL, you'll have to ensure a database instance is running during development. Wasp needs access to your database for commands such as ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp start")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db migrate-dev")," and expects to find a connection string in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable."),(0,i.kt)("p",null,"We cover all supported ways of connecting to a database in ",(0,i.kt)("a",{parentName:"p",href:"#connecting-to-a-database"},"the next section"),"."),(0,i.kt)("h3",{id:"migrating-from-sqlite-to-postgresql"},"Migrating from SQLite to PostgreSQL"),(0,i.kt)("p",null,"To run your Wasp app in production, you'll need to switch from SQLite to PostgreSQL."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"app.db.system")," field to PostgreSQL.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app MyApp {\n  title: "My app",\n  // ...\n  db: {\n    system: PostgreSQL,\n    // ...\n  }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete all the old migrations, since they are SQLite migrations and can't be used with PostgreSQL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r migrations/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure your new database is running (check the ",(0,i.kt)("a",{parentName:"p",href:"#connecting-to-a-database"},"section on connecing to a database")," to see how). Leave it running, since we need it for the next step.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In a different terminal, run ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db migrate-dev")," to apply the changes and create a new initial migration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"That is it, you are all done!"))),(0,i.kt)("h2",{id:"connecting-to-a-database"},"Connecting to a Database"),(0,i.kt)("p",null,"Assuming you're not using SQLite, Wasp offers two ways of connecting your app to a database instance:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ready-made dev database that requires minimal setup and is great for quick prototyping."),(0,i.kt)("li",{parentName:"ol"},'A "real" database Wasp can connect to and use in production.')),(0,i.kt)("h3",{id:"using-the-dev-database-provided-by-wasp"},"Using the Dev Database Provided by Wasp"),(0,i.kt)("p",null,"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp start db")," will start a default PostgreSQL dev database for you."),(0,i.kt)("p",null,"Your Wasp app will automatically connect to it, just keep ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp start db")," running in the background.\nAlso, make sure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have ",(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started/"},"Docker installed")," and in ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH"),"."),(0,i.kt)("li",{parentName:"ul"},"The port ",(0,i.kt)("inlineCode",{parentName:"li"},"5432")," isn't taken.")),(0,i.kt)("h3",{id:"connecting-to-an-existing-database"},"Connecting to an existing database"),(0,i.kt)("p",null,"If you want to spin up your own dev database (or connect to an external one), you can tell Wasp about it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable. Wasp will use the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," as a connection string."),(0,i.kt)("p",null,"The easiest way to set the necessary ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable is by adding it to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/project/env-vars"},".env.server")," file in the root dir of your Wasp project (if that file doesn't yet exist, create it)."),(0,i.kt)("p",null,"Alternatively, you can set it inline when running ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp")," (this applies to all environment variables):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"DATABASE_URL=<my-db-url> wasp ...\n")),(0,i.kt)("p",null,"This trick is useful for running a certain ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp")," command on a specific database.\nFor example, you could do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"DATABASE_URL=<production-db-url> wasp db seed myProductionSeed\n")),(0,i.kt)("p",null,"This command seeds the data for a fresh staging or production database.\nTo more precisely understand how seeding works, keep reading."),(0,i.kt)("h2",{id:"seeding-the-database"},"Seeding the Database"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Database seeding")," is a term used for populating the database with some initial data."),(0,i.kt)("p",null,"Seeding is most commonly used for two following scenarios:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To put the development database into a state convenient for working and testing."),(0,i.kt)("li",{parentName:"ol"},"To initialize any database (",(0,i.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"staging"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"prod"),") with essential data it requires to operate.\nFor example, populating the Currency table with default currencies, or the Country table with all available countries.")),(0,i.kt)("h3",{id:"writing-a-seed-function"},"Writing a Seed Function"),(0,i.kt)("p",null,"You can define as many ",(0,i.kt)("strong",{parentName:"p"},"seed functions")," as you want in an array under the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.db.seeds")," field:"),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app MyApp {\n  // ...\n  db: {\n    // ...\n    seeds: [\n      import { devSeedSimple } from "@server/dbSeeds.js",\n      import { prodSeed } from "@server/dbSeeds.js"\n    ]\n  }\n}\n'))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app MyApp {\n  // ...\n  db: {\n    // ...\n    seeds: [\n      import { devSeedSimple } from "@server/dbSeeds.js",\n      import { prodSeed } from "@server/dbSeeds.js"\n    ]\n  }\n}\n')))),(0,i.kt)("p",null,"Each seed function must be an async function that takes one argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"prismaClient"),", which is a ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-client/crud"},"Prisma Client")," instance used to interact with the database.\nThis is the same Prisma Client instance that Wasp uses internally and thus includes all of the usual features (e.g., password hashing)."),(0,i.kt)("p",null,"Since a seed function falls under server-side code, it can import other server-side functions. This is convenient because you might want to seed the database using Actions."),(0,i.kt)("p",null,"Here's an example of a seed function that imports an Action:"),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createTask } from "./actions.js";\n\nexport const devSeedSimple = async (prismaClient) => {\n  const user = await createUser(prismaClient, {\n    username: "RiuTheDog",\n    password: "bark1234",\n  });\n\n  await createTask(\n    { description: "Chase the cat" },\n    { user, entities: { Task: prismaClient.task } }\n  );\n};\n\nasync function createUser(prismaClient, data) {\n  const { password, ...newUser } = await prismaClient.user.create({ data });\n  return newUser;\n}\n'))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { createTask } from "./actions.js";\nimport { User } from "@wasp/entities";\nimport { PrismaClient } from "@prisma/client";\n\ntype SanitizedUser = Omit<User, "password">;\n\nexport const devSeedSimple = async (prismaClient: PrismaClient) => {\n  const user = await createUser(prismaClient, {\n    username: "RiuTheDog",\n    password: "bark1234",\n  });\n\n  await createTask(\n    { description: "Chase the cat", isDone: false },\n    { user, entities: { Task: prismaClient.task } }\n  );\n};\n\nasync function createUser(\n  prismaClient: PrismaClient,\n  data: Pick<User, "username" | "password">\n): Promise<SanitizedUser> {\n  const { password, ...newUser } = await prismaClient.user.create({ data });\n  return newUser;\n}\n')))),(0,i.kt)("h3",{id:"running-seed-functions"},"Running seed functions"),(0,i.kt)("p",null,"Run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db seed")," and Wasp will ask you which seed function you'd like to run (if you've defined more than one)."),(0,i.kt)("p",null,"Alternatively, run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db seed <seed-name>")," to choose a specific seed function right away, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wasp db seed devSeedSimple\n")),(0,i.kt)("p",null,"Check the ",(0,i.kt)("a",{parentName:"p",href:"#cli-commands-for-seeding-the-database"},"API Reference")," for more details on these commands."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You'll often want to call ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db seed")," right after you run ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db reset"),", as it makes sense to fill the database with initial data after clearing it.")),(0,i.kt)("h2",{id:"prisma-configuration"},"Prisma Configuration"),(0,i.kt)("p",null,"Wasp uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma"),' to interact with the database. Prisma is a "Next-generation Node.js and TypeScript ORM" that provides a type-safe API for working with your database.'),(0,i.kt)("h3",{id:"prisma-preview-features"},"Prisma Preview Features"),(0,i.kt)("p",null,"Prisma is still in active development and some of its features are not yet stable. To use them, you have to enable them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.db.prisma.clientPreviewFeatures")," field: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  // ...\n  db: {\n    system: PostgreSQL,\n    prisma: {\n      clientPreviewFeatures: ["postgresqlExtensions"]\n    }\n  }\n}\n')),(0,i.kt)("small",null,(0,i.kt)("p",null,"Read more about Prisma preview features in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/preview-features/client-preview-features"},"Prisma docs"),".")),(0,i.kt)("h3",{id:"postgresql-extensions"},"PostgreSQL Extensions"),(0,i.kt)("p",null,"PostgreSQL supports ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/contrib.html"},"extensions")," that add additional functionality to the database. For example, the ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/13/hstore.html"},"hstore")," extension adds support for storing key-value pairs in a single column."),(0,i.kt)("p",null,"To use PostgreSQL extensions with Prisma, you have to enable them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.db.prisma.dbExtensions")," field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  // ...\n  db: {\n    system: PostgreSQL,\n    prisma: {\n      clientPreviewFeatures: ["postgresqlExtensions"]\n      dbExtensions: [\n        { name: "hstore", schema: "myHstoreSchema" },\n        { name: "pg_trgm" },\n        { name: "postgis", version: "2.1" },\n      ]\n    }\n  }\n}\n')),(0,i.kt)("small",null,(0,i.kt)("p",null,"Read more about PostgreSQL configuration in Wasp in the ",(0,i.kt)("a",{parentName:"p",href:"#the-appdb-field"},"API Reference"),".")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"You can tell Wasp which database to use in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," declaration's ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," field:"),(0,i.kt)("h3",{id:"the-appdb-field"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"app.db")," Field"),(0,i.kt)("p",null,"Here's an example that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.db")," field to its full potential:"),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app MyApp {\n  title: "My app",\n  // ...\n  db: {\n    system: PostgreSQL,\n    seeds: [\n      import devSeed from "@server/dbSeeds.js"\n    ],\n    prisma: {\n      clientPreviewFeatures: ["extendedWhereUnique"]\n    }\n  }\n}\n'))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app MyApp {\n  title: "My app",\n  // ...\n  db: {\n    system: PostgreSQL,\n    seeds: [\n      import devSeed from "@server/dbSeeds.js"\n    ],\n    prisma: {\n      clientPreviewFeatures: ["extendedWhereUnique"]\n    }\n  }\n}\n')))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app.db")," is a dictionary with the following fields (all fields are optional):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"system: DbSystem")),(0,i.kt)("p",{parentName:"li"},"The database system Wasp should use. It can be either PostgreSQL or SQLite.\nThe default value for the field is SQLite (this default value also applies if the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," field is left unset).\nWhenever you modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"db.system")," field, make sure to run ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db migrate-dev")," to apply the changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"seeds: [ServerImport]")),(0,i.kt)("p",{parentName:"li"},"Defines the seed functions you can use with the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db seed")," command to seed your database with initial data.\nRead the ",(0,i.kt)("a",{parentName:"p",href:"#seeding-the-database"},"Seeding section")," for more details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"prisma: PrismaOptions")),(0,i.kt)("p",{parentName:"li"},"Additional configuration for Prisma. "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  // ...\n  db: {\n    // ...\n    prisma: {\n      clientPreviewFeatures: ["postgresqlExtensions"],\n      dbExtensions: [\n        { name: "hstore", schema: "myHstoreSchema" },\n        { name: "pg_trgm" },\n        { name: "postgis", version: "2.1" },\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"It's a dictionary with the following fields:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"clientPreviewFeatures : [string]")),(0,i.kt)("p",{parentName:"li"},"Allows you to define ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/preview-features/client-preview-features"},"Prisma client preview features"),", like for example, ",(0,i.kt)("inlineCode",{parentName:"p"},'"postgresqlExtensions"'),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dbExtensions: DbExtension[]")),(0,i.kt)("p",{parentName:"li"},"It allows you to define PostgreSQL extensions that should be enabled for your database. Read more about ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/components/prisma-schema/postgresql-extensions"},"PostgreSQL extensions in Prisma"),"."),(0,i.kt)("p",{parentName:"li"},"For each extension you define a dict with the following fields:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name: string")," ",(0,i.kt)(o.a,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The name of the extension you would normally put in the Prisma file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'extensions = [hstore(schema: "myHstoreSchema"), pg_trgm, postgis(version: "2.1")]\n//              \ud83d\udc46 Extension name\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"map: string")),(0,i.kt)("p",{parentName:"li"},"It sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," argument of the extension. Explanation for the field from the Prisma docs:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This is the database name of the extension. If this argument is not specified, the name of the extension in the Prisma schema must match the database name."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"schema: string")),(0,i.kt)("p",{parentName:"li"},"It sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," argument of the extension. Explanation for the field from the Prisma docs:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This is the name of the schema in which to activate the extension's objects. If this argument is not specified, the current default object creation schema is used."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"version: string")),(0,i.kt)("p",{parentName:"li"},"It sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," argument of the extension. Explanation for the field from the Prisma docs:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This is the version of the extension to activate. If this argument is not specified, the value given in the extension's control file is used.")))))))),(0,i.kt)("h3",{id:"cli-commands-for-seeding-the-database"},"CLI Commands for Seeding the Database"),(0,i.kt)("p",null,"Use one of the following commands to run the seed functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp db seed")),(0,i.kt)("p",{parentName:"li"},"If you've only defined a single seed function, this command runs it. If you've defined multiple seed functions, it asks you to choose one interactively.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp db seed <seed-name>")),(0,i.kt)("p",{parentName:"li"},"This command runs the seed function with the specified name. The name is the identifier used in its ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," expression in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.db.seeds")," list.\nFor example, to run the seed function ",(0,i.kt)("inlineCode",{parentName:"p"},"devSeedSimple")," which was defined like this:"),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app MyApp {\n  // ...\n  db: {\n    // ...\n    seeds: [\n      // ...\n      import { devSeedSimple } from "@server/dbSeeds.js",\n    ]\n  }\n}\n'))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app MyApp {\n  // ...\n  db: {\n    // ...\n    seeds: [\n      // ...\n      import { devSeedSimple } from "@server/dbSeeds.js",\n    ]\n  }\n}\n')))),(0,i.kt)("p",{parentName:"li"},"Use the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"wasp db seed devSeedSimple\n")))))}k.isMDXComponent=!0}}]);