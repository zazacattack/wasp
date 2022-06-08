"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7629],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(o),d=a,w=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return o?n.createElement(w,r(r({ref:t},u),{},{components:o})):n.createElement(w,r({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6624:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],s={title:"Hello Wasp!",authors:["martinsos"],tags:["wasp"]},l=void 0,p={permalink:"/blog/2019/09/01/hello-wasp",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2019-09-01-hello-wasp.md",source:"@site/blog/2019-09-01-hello-wasp.md",title:"Hello Wasp!",description:"About a year or so ago, brother and I started discussing how awesome it would be to have a programming language that would understand what \u201cweb app\u201d means. Such language would, on one hand, serve as an expressive specification of the web app, while on the other hand, it would take care of \u201cboring\u201d work for us, while we could focus on the business logic specific for our web app.",date:"2019-09-01T00:00:00.000Z",formattedDate:"September 1, 2019",tags:[{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:5.335,truncated:!0,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],prevItem:{title:"Journey to YCombinator",permalink:"/blog/2021/02/23/journey-to-ycombinator"}},u={authorsImageUrls:[void 0]},c=[{value:"More specification, less implementation",id:"more-specification-less-implementation",children:[]},{value:"Wasp!",id:"wasp",children:[]},{value:"What\u2019s up?",id:"whats-up",children:[]},{value:"Moar",id:"moar",children:[]}],h={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"About a year or so ago, brother and I started discussing how awesome it would be to have a programming language that would understand what \u201cweb app\u201d means. Such language would, on one hand, serve as an expressive specification of the web app, while on the other hand, it would take care of \u201cboring\u201d work for us, while we could focus on the business logic specific for our web app."),(0,i.kt)("p",null,"Step by step, the idea has started to take a more concrete shape, and Wasp (Web Application SPecification language) came to life! While still very early, we are writing this blog post to explain why are we building Wasp, what is the current status and what the future may hold."),(0,i.kt)("h2",{id:"more-specification-less-implementation"},"More specification, less implementation"),(0,i.kt)("p",null,"Imagine you want to create a simple Todo web app."),(0,i.kt)("p",null,"You would explain it like this to your best buddy web developer: \u201cI want to create a web app with the title \u2018Todo App\u2019 that has a single page with a list of tasks. Each task has a description and can be either marked as done or not done. The list starts as empty and tasks can be added, deleted or marked as done. I will send you designs for this. Also, I want a user to be required to register/log in.\u201d"),(0,i.kt)("p",null,"Now, let\u2019s take a look at what needs to be done to implement such an app. We need to choose technologies we are going to use (frontend, backend, database, \u2026), figure out the project file structure, set up the build toolchain, configure linting/auto-formatting/style-guide, set up tests (unit/integration, e2e), set up deployment (production, staging), set up code sharing between frontend and backend, \u2026 . Then, once everything is set up, we need to implement basic CRUD functionality (components on frontend and API on the backend), user management, probably some kind of menu on the frontend, \u2026"),(0,i.kt)("p",null,"We can easily see that explanation to web developer (specification) is short and concise because many details are implicit or assumed to be handled in a reasonable default way. On the other hand, implementation is complicated since it has to take care of all the details, many of them not unique for the web app we are building but common for most of the web apps. Also, if we consider the specification through time, it would look the same now and 5 years ago. On the other hand, implementation would be different, due to the new technologies that have emerged in the meantime."),(0,i.kt)("p",null,"So if the specification is time-resilient, short and relatively simple to describe, while implementation is complex, volatile and requires a lot of expert knowledge, how great would it be to write more of specification and less of implementation when building a web app? For that, we need more powerful languages, that will be able to express more in less code. This is where Wasp comes in."),(0,i.kt)("h2",{id:"wasp"},"Wasp!"),(0,i.kt)("p",null,"The idea behind Wasp is to take everything repetitive and common in the development of a typical web app and have Wasp take care of those parts for us. Ideally, programming in Wasp would very much look like describing the specification to the web developer, therefore writing more specification and less implementation. Wasp is the one who will keep evolving and making sure your specification is implemented in the best possible technology using the industry best practices."),(0,i.kt)("p",null,"To achieve that, we made Wasp as a DSL (domain-specific language) that understands common concepts of a web app like pages, routes, frontend and backend and their relationship, entities, user and roles/permissions, etc. Other parts, those that are specific for our web app (business logic), we can still write in html/css/js/\u2026, and then plug them into Wasp, combining the power of Wasp with the flexibility of existing technologies."),(0,i.kt)("h2",{id:"whats-up"},"What\u2019s up?"),(0,i.kt)("p",null,"We are currently working on the first version of Wasp compiler, and are planning to soon have very first, MVP version ready. It will be just the first step of our vision of what Wasp could be, but the sooner we get it out there, the sooner we can start collecting feedback and further shaping Wasp together with the community."),(0,i.kt)("p",null,"We believe it will take significant effort to bring Wasp to the level where a big portion of developers will be able to build the whole app with Wasp without feeling restrained by missing flexibility or options, while on the other hand, we don\u2019t want to wait too long until people can start using Wasp. Therefore, we decided to build it from start in such a way that a developer can at any moment \u201ceject\u201d from Wasp and continue on their own, where \u201cejecting\u201d would mean that Wasp would generate the source code of web app that you can continue working on. That is why compiler for Wasp that we are building is actually a transpiler whose output is web app written with best practices, that you can at any moment take and continue from there if you feel too limited by Wasp. It is like having a senior developer guide you through writing a web app!"),(0,i.kt)("p",null,"This poses the following question: \u201cIn which technologies will web app that Wasp transpiler produces be implemented?\u201d. Well, while our vision is to offer multiple flavors here, so that you can choose the combination of technologies that you want to use, for a start we are going with one fixed technology stack, based on most popular technologies: React, Redux, NodeJS, and Mongo."),(0,i.kt)("h2",{id:"moar"},"Moar"),(0,i.kt)("p",null,"One thing that we are very excited about regarding Wasp is that Wasp understands the way web app is built. So, once you describe it in Wasp, there are many things we could be able to do with it. We could automatically generate tests since we understand the requirements. We could suggest solutions on how to improve the design of the web app. Also, since Wasp should make building web apps easier, we could build solutions on top of it, for example, a visual builder that generates Wasp code, that in turn generates a web app."),(0,i.kt)("p",null,"We are still very early in the Wasp journey but we are very excited about the opportunities that we imagine it could bring and about the possibilities it could unlock. We hope that this blog post will inspire others to discuss this concept and that together we will create something amazing and learn a lot on the way!"))}d.isMDXComponent=!0}}]);