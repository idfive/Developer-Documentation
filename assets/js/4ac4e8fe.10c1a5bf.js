"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),u=o,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={description:"Using Third-Party & Local Fonts"},i="Fonts",l={unversionedId:"front-end/fonts",id:"front-end/fonts",title:"Fonts",description:"Using Third-Party & Local Fonts",source:"@site/docs/front-end/fonts.md",sourceDirName:"front-end",slug:"/front-end/fonts",permalink:"/docs/front-end/fonts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/fonts.md",tags:[],version:"current",frontMatter:{description:"Using Third-Party & Local Fonts"},sidebar:"tutorialSidebar",previous:{title:"CSS / SCSS",permalink:"/docs/front-end/css"},next:{title:"Images & SVG Icons",permalink:"/docs/front-end/images-svg-icons"}},s={},c=[{value:"Third-Party (ie, Typekit, Google, etc.)",id:"third-party-ie-typekit-google-etc",level:2},{value:"Local Fonts",id:"local-fonts",level:2}],p={toc:c},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fonts"},"Fonts"),(0,o.kt)("h2",{id:"third-party-ie-typekit-google-etc"},"Third-Party (ie, Typekit, Google, etc.)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fonts being hosted by a third-party can be added to the ",(0,o.kt)("inlineCode",{parentName:"li"},"<head>")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"source/_meta/_head.twig"),", for example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n<link\n  href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"\n  rel="stylesheet"\n/>\n')),(0,o.kt)("h2",{id:"local-fonts"},"Local Fonts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fonts being served locally can be placed in ",(0,o.kt)("inlineCode",{parentName:"li"},"source/fonts"),"."),(0,o.kt)("li",{parentName:"ul"},"Font files need to be referenced in ",(0,o.kt)("inlineCode",{parentName:"li"},"source/css/core/_typography.scss")," using ",(0,o.kt)("inlineCode",{parentName:"li"},"@font-face"),". For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'@font-face {\n  font-family: "Font Name";\n  src: url("path-to-font.woff") format("woff"), url("path-to-font.woff.ttf")\n      format("truetype");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"font-display: swap;")," on all for performance reasons")))}d.isMDXComponent=!0}}]);