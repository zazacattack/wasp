(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6635],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},2840:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=(n(4996),["components"]),c={title:"Dependencies"},l=void 0,s={unversionedId:"tutorials/todo-app/dependencies",id:"tutorials/todo-app/dependencies",isDocsHomePage:!1,title:"Dependencies",description:"What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with the clocks!",source:"@site/docs/tutorials/todo-app/dependencies.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/dependencies",permalink:"/docs/tutorials/todo-app/dependencies",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/docs/tutorials/todo-app/dependencies.md",version:"current",frontMatter:{title:"Dependencies"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/tutorials/todo-app/auth"},next:{title:"The End",permalink:"/docs/tutorials/todo-app/the-end"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with the clocks!"),(0,a.kt)("p",null,"So, let's add a couple of clocks to our app, to help us track time while we perform our tasks (and to demonstrate ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," feature)."),(0,a.kt)("p",null,"For this, we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"react-clock")," library from NPM. We can add it to our project as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/language/basic-elements#dependencies"},"dependency")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\ndependencies {=json\n  "react-clock": "3.0.0"\njson=}\n')),(0,a.kt)("p",null,"Run (if it is already running, stop it first and then run it again)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ wasp start\n")),(0,a.kt)("p",null,"to have Wasp download and install new dependency (that happens on start of ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start"),")."),(0,a.kt)("p",null,"Next, let's create a new component ",(0,a.kt)("inlineCode",{parentName:"p"},"Clocks")," where we can play with the clocks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ext/Clocks.js"',title:'"ext/Clocks.js"'},"import React, { useEffect, useState } from 'react'\nimport Clock from 'react-clock'\nimport 'react-clock/dist/Clock.css'\n\nexport default () => {\n  const [time, setTime] = useState(new Date())\n  \n  useEffect(() => {\n    const interval = setInterval(() => setTime(new Date()), 1000)\n    return () => clearInterval(interval)\n  }, [])\n  \n  return (\n    <div style={{ display: 'flex' }}>\n      <Clock value={time} />\n      <Clock value={new Date(time.getTime() + 60 * 60000)} />\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"And let's import it in our main React component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,11} title="ext/MainPage.js"',"{2,11}":!0,title:'"ext/MainPage.js"'},"// ...\nimport Clocks from './Clocks'\n\nconst MainPage = () => {\n  // ...\n\n  return (\n    <div>\n      // ...\n\n      <div> <Clocks /> </div>\n\n      // ...\n    </div>\n  )\n}\n// ...\n")),(0,a.kt)("p",null,"As you can see, importing other files from ",(0,a.kt)("inlineCode",{parentName:"p"},"/ext")," is completely normal, just use the relative path."),(0,a.kt)("p",null,"That is it! We added a dependency and used it in our project."))}d.isMDXComponent=!0}}]);