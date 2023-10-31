"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[8286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Pattern Lab Starter",l={unversionedId:"front-end/pattern-lab",id:"front-end/pattern-lab",title:"Pattern Lab Starter",description:"Introduction",source:"@site/docs/front-end/pattern-lab.md",sourceDirName:"front-end",slug:"/front-end/pattern-lab",permalink:"/docs/front-end/pattern-lab",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/pattern-lab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/docs/front-end/node"},next:{title:"RAMP",permalink:"/docs/front-end/ramp"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Staging Site",id:"staging-site",level:3},{value:"Download",id:"download",level:3},{value:"Interface",id:"interface",level:3},{value:"Installation",id:"installation",level:3},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Site Header",id:"site-header",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pattern-lab-starter"},"Pattern Lab Starter"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Pattern Lab Starter (formerly ICL) is a collection of components to be used to begin new front-end development projects."),(0,r.kt)("h3",{id:"staging-site"},"Staging Site"),(0,r.kt)("p",null,"The Pattern Lab Starter can be viewed on our staging site at ",(0,r.kt)("a",{parentName:"p",href:"https://staging2.idfive.com/idfive-pattern-lab-starter/public/?p=pages-welcome"},"this link")),(0,r.kt)("h3",{id:"download"},"Download"),(0,r.kt)("p",null,"To download the starter ",(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.org/idfivellc/idfive-pattern-lab-starter/downloads/?tab=tags"},"visit the Bitbucket Repo Downloads - Tags"),' and under "Download", select a zip file of the latest tag. Downloading this way as opposed to cloning the repo will remove the git tracking (so it can be connected to the new project) and ensure that the latest intended version is pulled (new versions tagged when ready for production).'),(0,r.kt)("h3",{id:"interface"},"Interface"),(0,r.kt)("p",null,"Official Pattern Lab documentation can be ",(0,r.kt)("a",{parentName:"p",href:"https://patternlab.io/"},"found here"),'. The site navigation is typically on the left side of the page (it can be moved to the top by selecting "switch layout", but the left side is the default). There are three main (iinitially collapsed) sections:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Components")," is a list of all available components - not in a page context"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Core")," contains misc site elements such as colors in use (this is optional, would need manually updated per site), and an invisible section called the iconset, which contains a sprite sheet for all of the svg icons"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pages")," contains fully built out pages, this is typically where review occurs")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"In a terminal window at the root of the pattern lab starter - run the followiing commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nvm use")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm install")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run develop"))),(0,r.kt)("p",null,'This will open the "Welcome page", changes made in code will automatically be refreshed/reflected in the browser.'),(0,r.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("p",null,"The source directory contains the main working areas for the library. More information can be found ",(0,r.kt)("a",{parentName:"p",href:"https://patternlab.io/docs/editing-pattern-lab-source-files/"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Annotations")," is not in use, but can be used as an alternate way of documenting components (insead of placing the documentation in the respective component folder)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data")," contains global data, currently the starter library consists of ",(0,r.kt)("inlineCode",{parentName:"li"},"data.json")," which holds data for global components such as the site-header and site-footer (this prevents the data from needing to be repeated for multiple instances). This can be re-organized/customized to suit developer needs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Meta")," contains the header and footer code that gets applied to all patterns and pages. ",(0,r.kt)("inlineCode",{parentName:"li"},"_head.twig")," contains all of the html and header starting code and ",(0,r.kt)("inlineCode",{parentName:"li"},"_foot.twig")," for footer and ending html code/tags - more info can be found ",(0,r.kt)("a",{parentName:"li",href:"https://patternlab.io/docs/modifying-the-pattern-header-and-footer/"},"here")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Patterns")," contains the bulk of the code in use (components, core & pages). The three directories in here correlate to what is seen in the browser interface and are documented ",(0,r.kt)("a",{parentName:"li",href:"pattern-lab#interface"},"above")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"css")," contains the scss partial files, compiled into ",(0,r.kt)("inlineCode",{parentName:"li"},"index.scss"),". ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"components")," contain a scss partial corresponding to each individual compoennt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"core")," contains base, layout, functions, mixins, variables, placeholder-seclectors and typography scss partials"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index.scss")," pulls all partial files in, as well as linking to third-party library css if needed (node_module directories)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pattern-scaffolding.css")," is only in use for the pattern lab directory if custom styles are needed (namely the color palettes in core > colors)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"print.css")," is called solely for print media, the starter can be used as a base - to be customized for each site"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fonts")," is empty by default (Google Fonts are linked to in ",(0,r.kt)("inlineCode",{parentName:"li"},"_head.twig")," for the sarter version), but local fonts can be added to this directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Images")," contains all starter images, as well as icons and svgs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"js")," contains all typescript modules:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"components")," contains individual modules for respective components (when required for functionality)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"utilities")," contains helpful accessibility functions that can be used to simply certain tasks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maint.ts")," imports all functions and calls init functions for each (this file gets compiled into one on build)")))),(0,r.kt)("h2",{id:"site-header"},"Site Header"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Site Header",src:n(6567).Z,width:"1796",height:"597"}),"\nThe site header supports dropdown menus, a utility nav and a pop-up search form."))}u.isMDXComponent=!0},6567:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/site-header-desktop-4197c9cab893c0b6866a444207d00d31.jpg"}}]);