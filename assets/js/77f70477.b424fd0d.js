"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[6861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l="JS Accordion",o={unversionedId:"challenges/js-accordion",id:"challenges/js-accordion",title:"JS Accordion",description:"Overview",source:"@site/docs/challenges/js-accordion.md",sourceDirName:"challenges",slug:"/challenges/js-accordion",permalink:"/docs/challenges/js-accordion",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/challenges/js-accordion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"idfive Drupal site/theme challenge",permalink:"/docs/challenges/drupal-theme"},next:{title:"Vue.js News App",permalink:"/docs/challenges/vue-challenge"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Deliverables",id:"deliverables",level:2},{value:"Code review criteria",id:"code-review-criteria",level:2},{value:"Time",id:"time",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"js-accordion"},"JS Accordion"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A challenge for current, and potential idfive Frontend developers, this assesses basic knowledge of JS fundamentals like scope and closures, design patterns, etc to create reusable, modular JS components. Also assess basic HTML/CSS, as well as baseline .git habits."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Create a simple, reusable accordion component that matches the style shown, accomplishes the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(1577).Z,title:"Accordion Styles",width:"899",height:"510"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manages its own internal state to demonstrate understanding of scope/closures."),(0,r.kt)("li",{parentName:"ul"},"Use any pattern you'd like (constructor, module, etc) but structure the component in a way that you can easily instantiate multiple accordions on a single page, each with their own contained internal state."),(0,r.kt)("li",{parentName:"ul"},"Uses plain JavaScript (I.E. no frameworks/libraries like React, Vue, etc) to demonstrate foundational understanding of JavaScript as a language as well as the underlying dynamics of modern libraries/frameworks."),(0,r.kt)("li",{parentName:"ul"},"Uses semantic HTML and accounts for general accessibility requirements (keyboard navigability, ARIA functionality, etc)."),(0,r.kt)("li",{parentName:"ul"},"Uses modular CSS (I.E. BEM, SMACSS, etc) and includes animations for sections expanding and collapsing (bonus points if you use transforms)."),(0,r.kt)("li",{parentName:"ul"},"Uses modern ES6 syntax and is transpiled to ES5 code that works down to IE11."),(0,r.kt)("li",{parentName:"ul"},"Provides fallback of full content for non JS users."),(0,r.kt)("li",{parentName:"ul"},"Passes ",(0,r.kt)("a",{parentName:"li",href:"http://wave.webaim.org/"},"WAVE")," AA level testing."),(0,r.kt)("li",{parentName:"ul"},"Passes ",(0,r.kt)("a",{parentName:"li",href:"https://validator.w3.org/"},"W3C Validator")," testing.")),(0,r.kt)("h2",{id:"deliverables"},"Deliverables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Link to git repository containing the custom module only. Full commit history desired."),(0,r.kt)("li",{parentName:"ul"},"Link to a working example on GitHub Pages showcasing multiple instances of the component on a single page to verify state is encapsulated on a per-component basis.")),(0,r.kt)("h2",{id:"code-review-criteria"},"Code review criteria"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All custom code, no NPM modules aside from build tools like Babel, Webpack, etc."),(0,r.kt)("li",{parentName:"ul"},"Meets all above requirements."),(0,r.kt)("li",{parentName:"ul"},"Passes ",(0,r.kt)("a",{parentName:"li",href:"http://wave.webaim.org/"},"WAVE")," AA level testing."),(0,r.kt)("li",{parentName:"ul"},"Passes ",(0,r.kt)("a",{parentName:"li",href:"https://validator.w3.org/"},"W3C Validator")," testing.")),(0,r.kt)("h2",{id:"time"},"Time"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We estimate this would likely take somewhere between 2-3 hours depending on styling and microinteractions.")))}p.isMDXComponent=!0},1577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accordion-6498c7bdf72fbc6e9c1987df2a62b0ea.png"}}]);