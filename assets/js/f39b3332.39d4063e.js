"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[7314],{1425:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/icomoon-new-project-edb70b7ce50411efabd50e9a159762f5.jpg"},2290:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/icomoon-main-interface-e62354bf9bd2d6a865a9e5f8c8847933.jpg"},2311:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/xd-svg-b5e12b514acd240612665a723593e25c.jpg"},2424:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"front-end/images-svg-icons","title":"Images & SVG Icons","description":"Guidelines & Icomoon How-To","source":"@site/docs/front-end/images-svg-icons.md","sourceDirName":"front-end","slug":"/front-end/images-svg-icons","permalink":"/docs/front-end/images-svg-icons","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/images-svg-icons.md","tags":[],"version":"current","frontMatter":{"description":"Guidelines & Icomoon How-To"},"sidebar":"tutorialSidebar","previous":{"title":"Fonts","permalink":"/docs/front-end/fonts"},"next":{"title":"Performance","permalink":"/docs/front-end/performance"}}');var o=s(4848),t=s(8453);const c={description:"Guidelines & Icomoon How-To"},r="Images & SVG Icons",d={},l=[{value:"Images",id:"images",level:2},{value:"Markup",id:"markup",level:3},{value:"Styling",id:"styling",level:3},{value:"Icons (SVGs)",id:"icons-svgs",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Using IcoMoon",id:"using-icomoon",level:3},{value:"Adding to Your Project",id:"adding-to-your-project",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"images--svg-icons",children:"Images & SVG Icons"})}),"\n",(0,o.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,o.jsx)(n.h3,{id:"markup",children:"Markup"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Images should be placed in the ",(0,o.jsx)(n.code,{children:"source/images"})," directory. To reference an image in a component or page in json use ",(0,o.jsx)(n.code,{children:'"../../images/image-name.jpg",'})]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"width"})," and ",(0,o.jsx)(n.code,{children:"height"})," attributes for all images"]}),"\n",(0,o.jsxs)(n.li,{children:["Provide alt tags when appropriate - ",(0,o.jsx)(n.a,{href:"/docs/front-end/accessibility#images",children:"see the accessibility page image section for more info"})]}),"\n",(0,o.jsxs)(n.li,{children:["Use the native lazy loading attribute of ",(0,o.jsx)(n.code,{children:'loading="lazy"'})," except for usage in sections that will appear at the top of the page (ie, Site Header or Heroes)"]}),"\n",(0,o.jsxs)(n.li,{children:["If different assets are needed depending on viewport width, a ",(0,o.jsx)(n.code,{children:"<picture>"})," tag can be used. Here's an example that can be seen in the hero component at ",(0,o.jsx)(n.code,{children:"source/_patterns/components/hero/hero.twig"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<div class="hero__media">\n  <picture>\n    <source srcset="{{ hero.image.desktop_src }}" media="(min-width: 768px)" />\n    <img\n      src="{{ hero.image.mobile_src }}"\n      alt=""\n      loading="lazy"\n      width="1434"\n      height="502"\n    />\n  </picture>\n</div>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"styling",children:"Styling"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use the ",(0,o.jsx)(n.code,{children:"object-fit"})," property as much as possible to maintain aspect ratios for images"]}),"\n",(0,o.jsxs)(n.li,{children:["A placeholder selector exists called ",(0,o.jsx)(n.code,{children:"%responsive-img"})," in most projects and should be used for all images"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scss",children:"%responsive-img {\n  width: 100%;\n  iframe,\n  img {\n    display: block;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To use this - apply to the ",(0,o.jsx)(n.code,{children:".hero__media"})," div and update the aspect-ratio to your needs:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scss",children:".hero__media {\n  aspect-ratio: 1.78 // 16/9;\n  @extend %responsive-img;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"icons-svgs",children:"Icons (SVGs)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://icomoon.io/",children:"IcoMoon"})," is used to create a sprite sheet to reference all icons"]}),"\n",(0,o.jsxs)(n.li,{children:["Also place a copy of the source svg icons in ",(0,o.jsx)(n.code,{children:"source/images/icons"})," in case they need to be referenced/modified later"]}),"\n",(0,o.jsxs)(n.li,{children:["Modified files from IcoMoon will come in the form of a file called ",(0,o.jsx)(n.code,{children:"symbol-defs.svg"})," stored/replaced-on-update at ",(0,o.jsx)(n.code,{children:"source/images/icons/icomoon/symbol-defs.svg"})," and copied into a ",(0,o.jsx)(n.code,{children:"iconset.svg"})," at ",(0,o.jsx)(n.code,{children:"source/_patterns/core/iconset/iconset.svg"}),", which is included on all pages of the site in order to be referenced"]}),"\n",(0,o.jsxs)(n.li,{children:["Place (or replace if it already exists) a copy of the ",(0,o.jsx)(n.code,{children:"selection.json"})," file from IcoMoon at ",(0,o.jsx)(n.code,{children:"source/images/icons/icomoon/selection.json"}),", this will allow future developers to modify/update the iconset in IcoMoon"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Ensure with the designer of the project that all strokes in svgs have been outlined. Having one single path is the ideal configuration for an svg. If you have Adobe XD and access to the project source files and need to outline a stroke: select the svg and go to ",(0,o.jsx)(n.code,{children:"Object - Path - Outline Stroke"}),"\n",(0,o.jsx)(n.img,{alt:"XD SVG",src:s(2311).A+"",width:"550",height:"657"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Remove any fill colors on elements in the svg, this will default colors to black so they can have color applied with css."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Provide a meaningful name for the icon (no need to include the word "icon" as it will be automatically added when using IcoMoon)'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Optimize the ",(0,o.jsx)(n.code,{children:"svg"})," by running it through ",(0,o.jsx)(n.a,{href:"https://jakearchibald.github.io/svgomg/",children:"SVGOMG"}),'. Make sure that the "Prefer viewBox over width/height" option is checked in the Global Settings panel. This will replace any usages of ',(0,o.jsx)(n.code,{children:"width"})," and ",(0,o.jsx)(n.code,{children:"height"})," attributes with ",(0,o.jsx)(n.code,{children:"viewBox"})," which allows icons to be responsively scaled on a case-by-case basis.\n",(0,o.jsx)(n.img,{alt:"XD SVG",src:s(5283).A+"",width:"550",height:"338"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a sub-directory in your projects ",(0,o.jsx)(n.code,{children:"images"})," directory called ",(0,o.jsx)(n.code,{children:"icons"}),": ",(0,o.jsx)(n.code,{children:"your-project/source/images/icons"}),"., then create another sub-directory in ",(0,o.jsx)(n.code,{children:"icons"})," called ",(0,o.jsx)(n.code,{children:"icomoon"})," (",(0,o.jsx)(n.code,{children:"your-project/source/images/icons/icomoon"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add your icon svgs here (not the sprite at this point, simply the source svgs if needed again later)"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a sub folder called ",(0,o.jsx)(n.code,{children:"icomoon"})," where the files ",(0,o.jsx)(n.code,{children:"selection.json"})," and ",(0,o.jsx)(n.code,{children:"symbol-defs.svg"})," will be placed and updated each time your icon set is updated through IcoMoon - this will allow for future usage and changes from other developers"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The contents of the ",(0,o.jsx)(n.code,{children:"symbol-defs.svg"})," will get copied into the file called ",(0,o.jsx)(n.code,{children:"iconset.twig"})," (each time an update is made)"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This sheet should be included as close to the opening ",(0,o.jsx)(n.code,{children:"body"})," tag as possible. Generally it's easiest to create a template that contains the sprite sheet that you can then include in your base layout."]}),"\n",(0,o.jsx)(n.h3,{id:"using-icomoon",children:"Using IcoMoon"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.a,{href:"https://icomoon.io/",children:"icomoon.io"})," and click IcoMoon App in the top-right corner\n",(0,o.jsx)(n.img,{alt:"IcoMoon App",src:s(6807).A+"",width:"550",height:"371"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['If starting a new project, click the hamburger menu in the top left and select "New Empty Set"\n',(0,o.jsx)(n.img,{alt:"IcoMoon New Set",src:s(1425).A+"",width:"300",height:"409"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Click the hamburger menu that appears near the top right."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Choose "Properties" to update the set name'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['Choose "Import to Set" to import svgs from your machine\n',(0,o.jsx)(n.img,{alt:"IcoMoon Main Interface",src:s(2290).A+"",width:"700",height:"251"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['Once the icons are in the set and ready to be downloaded, choose "Generate SVG & More" from the bottom left\n',(0,o.jsx)(n.img,{alt:"IcoMoon Generate",src:s(8567).A+"",width:"450",height:"274"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Your downloaded package will contain two files that you will need to pull into your project (or replace if you're updating your project as opposed to starting), these files are ",(0,o.jsx)(n.code,{children:"selection.json"})," and ",(0,o.jsx)(n.code,{children:"symbol-defs.svg"}),". Tracking these files in your repo ensures that you or another developer will be able to re-import into IcoMoon in the future (no login needed for IcoMoon - it uses local storage). The other files in the package can be deleted.\n",(0,o.jsx)(n.img,{alt:"IcoMoon Download",src:s(9311).A+"",width:"400",height:"424"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Place (or replace) the ",(0,o.jsx)(n.code,{children:"selection.json"})," and ",(0,o.jsx)(n.code,{children:"symbol-defs.svg"})," files into the directory created earlier at ",(0,o.jsx)(n.code,{children:"your-project/source/images/icons"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"adding-to-your-project",children:"Adding to Your Project"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Copy the contents of the ",(0,o.jsx)(n.code,{children:"symbol-defs.svg"})," into a new file called ",(0,o.jsx)(n.code,{children:"iconset.svg"}),". This ideally should exist (in Pattern Lab) at ",(0,o.jsx)(n.code,{children:"your-project/source/_patterns/core/iconset/iconset.svg"}),". Each time you update and re-download from IcoMoon, update the contents of this file to match. Older projects (including fractal) may not have this directory or file, so create to match as needed."]}),"\n",(0,o.jsxs)(n.li,{children:["Ensure that ",(0,o.jsx)(n.code,{children:"symbol-defs.svg"})," is included on each page. In Pattern Lab in the ",(0,o.jsx)(n.code,{children:"head.twig"})," file this is included after the ",(0,o.jsx)(n.code,{children:"skip-link"})," after the opening ",(0,o.jsx)(n.code,{children:"<body>"})," tag as ",(0,o.jsx)(n.code,{children:'{% include "@core/iconset/iconset.svg"%}'}),". This allows usage of the sprites."]}),"\n",(0,o.jsxs)(n.li,{children:["An example of using a sprite (note the use a ",(0,o.jsx)(n.code,{children:"visible-for-screen-readers"})," class here in use if the icon is more than directory [i.e. if it's button to click, indicate what it does here]):"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<span class="visible-for-screen-readers"\n  >Name of icon for screen readers (if applicable)</span\n>\n<svg aria-hidden="true" width="20" height="20">\n  <use xlink:href="#icon-id"></use>\n</svg>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},5283:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/svgomg-60b30c449643e27eb474a4864a70718e.jpg"},6807:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/icomoon-open-0c227b2e91553823cbfb42dd5927d04c.jpg"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var i=s(6540);const o={},t=i.createContext(o);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(t.Provider,{value:n},e.children)}},8567:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/icomoon-select-generate-497472b505ed97cec9f2f42a517d6e7c.jpg"},9311:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/icomoon-download-1d4fce33008301b734180d3f9446f983.jpg"}}]);