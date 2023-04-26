"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[1416],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||l;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9847:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={},i="idfive Drupal site/theme challenge",o={unversionedId:"challenges/drupal-theme",id:"challenges/drupal-theme",title:"idfive Drupal site/theme challenge",description:"Overview",source:"@site/docs/challenges/drupal-theme.md",sourceDirName:"challenges",slug:"/challenges/drupal-theme",permalink:"/docs/challenges/drupal-theme",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/challenges/drupal-theme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"idfive Drupal custom paragraph module challenge",permalink:"/docs/challenges/drupal-paragraph-module"},next:{title:"JS Accordion",permalink:"/docs/challenges/js-accordion"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Deliverables",id:"deliverables",level:2},{value:"Code review criteria",id:"code-review-criteria",level:2},{value:"Time",id:"time",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"idfive-drupal-sitetheme-challenge"},"idfive Drupal site/theme challenge"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"A challenge for current, and potential idfive Backend developers, to assess knowledge and skills in Drupal custom theme creation, as well as working with configuration, modules, and PaaS platforms, to have a working shell site spun up. Use both this documentation site of idfive preferences, and examples, as well as any relevant drupal documentation desired to enact this theme. Note that this will be as of yet unstyled, as that is the next task, and will be somewhat ugly and broken-ish looking untill we do, this is fine."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Create a composer based, D9 site on Pantheon that accomplishes the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Create a new D9 sandbox site in Pantheon, under the idfive team. Please name this "YOUR-NAME-drupal-sandbox".'),(0,n.kt)("li",{parentName:"ul"},"Create and install a new theme, that uses the ",(0,n.kt)("a",{parentName:"li",href:"https://bitbucket.org/idfivellc/idfive-component-library-d8-theme/src/8.x-1.x/"},"idfive component Library D8 theme"),' as a base theme. See the "Sub-Theming" section of the above repo for directions on the best way to create a client sub theme. Please name this sub theme "YOUR_NAME_sandbox".'),(0,n.kt)("li",{parentName:"ul"},"Install and enable the ",(0,n.kt)("a",{parentName:"li",href:"https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs/src/8.x-2.x/"},"idfive Component Library D8 Paragraphs")," module."),(0,n.kt)("li",{parentName:"ul"},"Create a field on the default page content type that allows admins to add all the Paragraphs added by the above module."),(0,n.kt)("li",{parentName:"ul"},"Create a test page, and add all the above widgets to it, and set as the homepage."),(0,n.kt)("li",{parentName:"ul"},"Create a seperate page for each widget, and add that page to the main navigation.")),(0,n.kt)("h2",{id:"deliverables"},"Deliverables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Link to pantheon site, as well as admin login credentials.")),(0,n.kt)("h2",{id:"code-review-criteria"},"Code review criteria"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All code should conform to ",(0,n.kt)("a",{parentName:"li",href:"https://www.drupal.org/docs/develop/standards/coding-standards"},"Drupal coding standards"),"."),(0,n.kt)("li",{parentName:"ul"},"Passes ",(0,n.kt)("a",{parentName:"li",href:"http://wave.webaim.org/"},"WAVE")," AA level testing."),(0,n.kt)("li",{parentName:"ul"},"Passes ",(0,n.kt)("a",{parentName:"li",href:"https://validator.w3.org/"},"W3C Validator")," testing."),(0,n.kt)("li",{parentName:"ul"},"Module should be able to be enabled on any D8 site, by downloading module, enabling, and assigning the block to a region."),(0,n.kt)("li",{parentName:"ul"},"No frontend styles needed, but bonus points if you do.")),(0,n.kt)("h2",{id:"time"},"Time"),(0,n.kt)("p",null,"We estimate this would likely take somewhere between 3-8 hours, skills dependant."))}p.isMDXComponent=!0}}]);