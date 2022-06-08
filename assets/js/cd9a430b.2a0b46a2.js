"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3252],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9555:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Telemetry"},l=void 0,p={unversionedId:"telemetry",id:"telemetry",isDocsHomePage:!1,title:"Telemetry",description:"Overview",source:"@site/docs/telemetry.md",sourceDirName:".",slug:"/telemetry",permalink:"/docs/telemetry",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/telemetry.md",tags:[],version:"current",frontMatter:{title:"Telemetry"},sidebar:"docs",previous:{title:"Vision",permalink:"/docs/vision"},next:{title:"Contact",permalink:"/docs/contact"}},u=[{value:"Overview",id:"overview",children:[]},{value:"When and what is sent?",id:"when-and-what-is-sent",children:[]},{value:"Opting out",id:"opting-out",children:[]},{value:"Future plans",id:"future-plans",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The term ",(0,i.kt)("strong",{parentName:"p"},"telemetry")," refers to the collection of certain usage data to help improve the quality of a piece of software (in this case, Wasp)."),(0,i.kt)("p",null,"Our telemetry implementation is anonymized and very limited in its scope, focused on answering following questions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How many people and how often: tried to install Wasp, use Wasp, or have built a Wasp app?"),(0,i.kt)("li",{parentName:"ul"},"How many projects are created with Wasp?")),(0,i.kt)("h2",{id:"when-and-what-is-sent"},"When and what is sent?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Information is sent via HTTPS request when ",(0,i.kt)("inlineCode",{parentName:"li"},"wasp")," CLI command is invoked.\nInformation is sent no more than twice in a period of 12 hours (sending is paused for 12 hours after last invocation, separately for ",(0,i.kt)("inlineCode",{parentName:"li"},"wasp build")," command and for all other commands). Exact information as it is sent:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Randomly generated, non-identifiable UUID representing a user.\n  "distinct_id": "bf3fa7a8-1c11-4f82-9542-ec1a2d28786b",\n  // Non-identifiable hash representing a project.\n  "project_hash": "6d7e561d62b955d1",\n  // True if command was `wasp build`, false otherwise.\n  "is_build": true,\n  "wasp_version": "0.1.9.1",\n  "os": "linux"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},"Information is also sent once via HTTPS request when wasp is installed via ",(0,i.kt)("inlineCode",{parentName:"li"},"install.sh")," script. Exact information as it is sent:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Randomly generated id.\n  "distinct_id": "274701613078193779564259",\n  "os": "linux"\n}\n')))),(0,i.kt)("h2",{id:"opting-out"},"Opting out"),(0,i.kt)("p",null,"You can opt-out of telemetry by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"WASP_TELEMETRY_DISABLE")," environment variable to any value, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export WASP_TELEMETRY_DISABLE=1\n")),(0,i.kt)("h2",{id:"future-plans"},"Future plans"),(0,i.kt)("p",null,"We don't have this implemented yet, but the next step will be to make telemetry go in two directions -> instead of just sending usage data to us, it will also at the same time check for any messages from our side (e.g. notification about new version of Wasp, or a security notice). ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/163"},"Link to corresponding github issue"),"."))}d.isMDXComponent=!0}}]);