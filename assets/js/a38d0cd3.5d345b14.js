"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84780:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=e=>r.createElement("span",null,r.createElement("a",{href:"https://discord.gg/rzdnErX"}," Discord "))},46300:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(50012);function o(e){let{path:t}=e;const[n]=(0,a.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),i=t.slice(o+1,t.length-1),[l,s]=i.split(","),u=t.slice(0,o);return r.createElement("code",null,u+("js"===n?l:s))}},26214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=(n(46300),n(44996)),i=n(84780);const l={id:"05-perform-migration-and-run",title:"Perform migration and run the app"},s=void 0,u={unversionedId:"tutorials/dev-excuses-app/05-perform-migration-and-run",id:"tutorials/dev-excuses-app/05-perform-migration-and-run",title:"Perform migration and run the app",description:"Before we run our app, we need to execute a database migration. We changed the DB schema by adding new entities. By doing the migration, we sync the database schema with the entities we defined. If you\u2019ve had something running in the terminal \u2013 stop it and run:",source:"@site/docs/tutorials/dev-excuses-app/05-perform-migration-and-run.md",sourceDirName:"tutorials/dev-excuses-app",slug:"/tutorials/dev-excuses-app/05-perform-migration-and-run",permalink:"/docs/tutorials/dev-excuses-app/05-perform-migration-and-run",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/tutorials/dev-excuses-app/05-perform-migration-and-run.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-perform-migration-and-run",title:"Perform migration and run the app"}},p={},c=[],d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before we run our app, we need to execute a database migration. We changed the DB schema by adding new entities. By doing the migration, we sync the database schema with the entities we defined. If you\u2019ve had something running in the terminal \u2013 stop it and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wasp db migrate-dev\n")),(0,a.kt)("p",null,"You\u2019ll be prompted to enter a name for the migration. Something like ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," will be ok. Now we can start the application!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wasp start\n")),(0,a.kt)("img",{alt:"Final empty result",src:(0,o.Z)("img/final-result.png")}),(0,a.kt)("p",null,"Now you can click the \u201cGet excuse\u201d button to receive an excuse. You should also be able to save the ones you like with the \u201cSave excuse\u201d button. Our final project should look like this:"),(0,a.kt)("img",{alt:"Final result",src:(0,o.Z)("img/final-excuse-app.png")}),(0,a.kt)("p",null,"Now we can think of some additional improvements. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a unique constraint to Entity\u2019s ID so we won\u2019t be able to save duplicated excuses. "),(0,a.kt)("li",{parentName:"ul"},"Add exceptions and edge cases handling. "),(0,a.kt)("li",{parentName:"ul"},"Make the markup prettier."),(0,a.kt)("li",{parentName:"ul"},"Optimize and polish the code ")),(0,a.kt)("p",null,"So, we\u2019ve been able to build a full-stack application with a database and external API call in a couple of minutes. And now we have a box full of excuses for all our development needs. "),(0,a.kt)("img",{alt:"Box of excuses for the win!",src:(0,o.Z)("img/accessible-website-excuse.jpg")}),(0,a.kt)("p",null,"P.S: now you're familiar with Wasp and can build full-stack apps, horaay! \ud83c\udf89 How did it go? Was it fun? Drop us a message at our ",(0,a.kt)(i.Z,{mdxType:"DiscordLink"}),". Now it's time to look at ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/create"},"Todo App in Wasp")," if you haven't already. It will introduce some additional concepts so you'd be able to become a true Wasp overlord!"))}f.isMDXComponent=!0}}]);