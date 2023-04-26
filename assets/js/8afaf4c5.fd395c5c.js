"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[6723],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),h=s,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),s=(t(7294),t(3905));const i={},r="CSS/SCSS",o={unversionedId:"front-end/css",id:"front-end/css",title:"CSS/SCSS",description:"Transitions",source:"@site/docs/front-end/css.md",sourceDirName:"front-end",slug:"/front-end/css",permalink:"/docs/front-end/css",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/css.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accessibility",permalink:"/docs/front-end/accessibility"},next:{title:"JavaScript/TypeScript",permalink:"/docs/front-end/js"}},l={},c=[{value:"Transitions",id:"transitions",level:2},{value:"Be Specific",id:"be-specific",level:3},{value:"Hardware acceleration (subject to change as browsers advance)",id:"hardware-acceleration-subject-to-change-as-browsers-advance",level:3},{value:"Using <code>will-change</code> to Force Hardware Acceleration (subject to change as browsers advance)",id:"using-will-change-to-force-hardware-acceleration-subject-to-change-as-browsers-advance",level:4},{value:"Avoid Transitioning Properties That Cause Layout Changes/Repaint (subject to change as browsers advance)",id:"avoid-transitioning-properties-that-cause-layout-changesrepaint-subject-to-change-as-browsers-advance",level:4},{value:"Browser Prefixes (subject to change as browsers advance)",id:"browser-prefixes-subject-to-change-as-browsers-advance",level:2},{value:"Redundant code",id:"redundant-code",level:2},{value:"Units on 0 values",id:"units-on-0-values",level:3},{value:"Specificity",id:"specificity",level:2},{value:"Unnecessary chaining",id:"unnecessary-chaining",level:3},{value:"Don&#39;t use <code>id</code> for styles",id:"dont-use-id-for-styles",level:3},{value:"Non-percentage padding/margin",id:"non-percentage-paddingmargin",level:2},{value:"BEM Classes",id:"bem-classes",level:2},{value:"Blocks and Elements",id:"blocks-and-elements",level:3},{value:"Modifiers",id:"modifiers",level:3},{value:"Sass Nesting With BEM",id:"sass-nesting-with-bem",level:3},{value:"Overriding Default Element Styles With Modifier Classes",id:"overriding-default-element-styles-with-modifier-classes",level:3},{value:"Flexbox &amp; Grid",id:"flexbox--grid",level:2},{value:"Shorthand for Centering (Flex &amp; Grid)",id:"shorthand-for-centering-flex--grid",level:3},{value:"Flexbox properties for children",id:"flexbox-properties-for-children",level:3},{value:"Images",id:"images",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cssscss"},"CSS/SCSS"),(0,s.kt)("h2",{id:"transitions"},"Transitions"),(0,s.kt)("h3",{id:"be-specific"},"Be Specific"),(0,s.kt)("p",null,"Always be specific about which properties are going to transition, and ",(0,s.kt)("strong",{parentName:"p"},'never transition on "all" properties'),", which puts unnecessary strain on the browser."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"transition: .5s ease-in; /* Bad */\ntransition: all .5s ease-in; /* Bad */\ntransition: opacity .5s ease-in; /* Good */\ntransition: opacity .5s ease-in, color 1s ease-in-out; /* Good */\n")),(0,s.kt)("h3",{id:"hardware-acceleration-subject-to-change-as-browsers-advance"},"Hardware acceleration (subject to change as browsers advance)"),(0,s.kt)("p",null,"Prefer ",(0,s.kt)("inlineCode",{parentName:"p"},"opacity")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"transform")," as properties to be animated/transitioned as they support hardware acceleration, providing jank-free animations. For more information on this topic, see ",(0,s.kt)("a",{parentName:"p",href:"https://web.dev/animations-and-performance/"},"this article"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"transition: opacity .5s ease-in;\n")),(0,s.kt)("h4",{id:"using-will-change-to-force-hardware-acceleration-subject-to-change-as-browsers-advance"},"Using ",(0,s.kt)("inlineCode",{parentName:"h4"},"will-change")," to Force Hardware Acceleration (subject to change as browsers advance)"),(0,s.kt)("p",null,"In certain cases, ",(0,s.kt)("inlineCode",{parentName:"p"},"will-change")," can be used to provide hints to the browser as to what changes an element will potentially undergo, allowing the browser to make necessary optimizations behind the scenes. This should be used sparingly though and is only necessary when there are existing performance problems that need to be addressed. See ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/will-change"},"MDN's documentation")," for more information."),(0,s.kt)("h4",{id:"avoid-transitioning-properties-that-cause-layout-changesrepaint-subject-to-change-as-browsers-advance"},"Avoid Transitioning Properties That Cause Layout Changes/Repaint (subject to change as browsers advance)"),(0,s.kt)("p",null,"Properties like ",(0,s.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"height")," should ideally never be transitioned with CSS as they cause layout/reflow to occur which is expensive and can introduce jank. In these cases, if ",(0,s.kt)("inlineCode",{parentName:"p"},"transform")," can't be used, ",(0,s.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," should be used in JavaScript to incrementally update the property value and simulate a transition. Using ",(0,s.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," allows the browser to update layout at 60fps or whatever the refresh rate of the user's display is. See ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"},"MDN's documentation")," for more information and examples."),(0,s.kt)("h2",{id:"browser-prefixes-subject-to-change-as-browsers-advance"},"Browser Prefixes (subject to change as browsers advance)"),(0,s.kt)("p",null,"Browser prefixes for standard properties should ",(0,s.kt)("strong",{parentName:"p"},"never be included in source code"),". Prefixes are added during the build process and account for the browsers we support as well as feature adoption to make sure that only necessary prefixes are being added."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"-moz-transition: opacity .5s ease-in; /* Bad */\n-webkit-transition: opacity .5s ease-in; /* Bad */\ntransition: opacity .5s ease-in; /* Good */\n")),(0,s.kt)("h2",{id:"redundant-code"},"Redundant code"),(0,s.kt)("h3",{id:"units-on-0-values"},"Units on 0 values"),(0,s.kt)("p",null,"Specifying a unit value on zero values is unnecessary."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"padding: 0px; /* Bad */\npadding: 0; /* Good */\n")),(0,s.kt)("h2",{id:"specificity"},"Specificity"),(0,s.kt)("p",null,"The key to clean CSS is for selectors to have as little classes as possible."),(0,s.kt)("h3",{id:"unnecessary-chaining"},"Unnecessary chaining"),(0,s.kt)("p",null,"Avoid unnecessary chaining of selectors."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"body .content .nav {} /* Bad */\n.nav {} /* Good */\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," There are some cases where chaining is necessary, particularly within nested lists."),(0,s.kt)("h3",{id:"dont-use-id-for-styles"},"Don't use ",(0,s.kt)("inlineCode",{parentName:"h3"},"id")," for styles"),(0,s.kt)("p",null,"Using the ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," attribute for attaching styles adds unnecessary specificity, and limits those styles to only one element per page."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"#nav {} /* Bad */\n.nav {} /* Good */\n")),(0,s.kt)("h2",{id:"non-percentage-paddingmargin"},"Non-percentage padding/margin"),(0,s.kt)("p",null,"To keep margin and padding consistent across devices avoid using percentage based padding and margins."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"margin: 10%; /* Bad */\nmargin: 3rem; /* Good */\n")),(0,s.kt)("h2",{id:"bem-classes"},"BEM Classes"),(0,s.kt)("p",null,"To encapsulate/isolate component-specific styles and prevent unintended cascading, the ",(0,s.kt)("a",{parentName:"p",href:"http://getbem.com/introduction/"},"BEM")," methodology can be utilized. This allows nesting to be defined within class names and allows specificity to remain as low as possible. In general, ",(0,s.kt)("strong",{parentName:"p"},"BEM classes should be used on all elements")," within a component and element styles should be avoided as it requires extra work if/when the tag being styled changes."),(0,s.kt)("h3",{id:"blocks-and-elements"},"Blocks and Elements"),(0,s.kt)("p",null,"BEM's blocks use a base block class on the root element of the component, with child elements of the block using the base block class with a secondary identifier appended to it following two underscores. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".foo {}\n\n.foo__child {}\n\n.foo__child-grandchild {}\n")),(0,s.kt)("p",null,"Note that the double underscores only need to be used once, for nested elements a hyphen can be used to append extra identifiers to the class name."),(0,s.kt)("h3",{id:"modifiers"},"Modifiers"),(0,s.kt)("p",null,"BEM's modifier classes use two hyphens after the base block class followed by an identifier for the unique styles to be applied to this variant of the default block. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"// Default block styles\n.foo {\n  background-color: #000;\n}\n\n// Blue variant styles\n.foo--blue {\n  background-color: blue;\n}\n")),(0,s.kt)("p",null,"Note that variant styles should be included after the default block styles to ensure that the variant's styles correctly override the default styles. Chaining (I.E. ",(0,s.kt)("inlineCode",{parentName:"p"},".foo.foo--blue"),") can also be used but it increases specificity and can lead to issues that would otherwise be avoided."),(0,s.kt)("h3",{id:"sass-nesting-with-bem"},"Sass Nesting With BEM"),(0,s.kt)("p",null,"Because BEM simulates nesting via class naming, actual nesting should hardly ever be necessary."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"// Bad, unnecessarily increases specificity causing overriding later to be difficult\n.foo {\n  .foo__child {\n    .foo__child-grandchild {}\n  }\n}\n\n// Good, all blocks and elements are the same level of specificity\n.foo {}\n\n.foo__child {}\n\n.foo__child-grandchild {}\n")),(0,s.kt)("p",null,"Another option using Sass would be to utilize its ",(0,s.kt)("inlineCode",{parentName:"p"},"&")," operator to create child element classes within the base block's brackets without increasing specificity. However, this should be avoided as it makes tracking down styles based on the class name more difficult."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"// Bad, searching for the child classes can be confusing using this syntax\n.foo {\n  &__child {}\n\n  &__child-grandchild {}\n}\n")),(0,s.kt)("h3",{id:"overriding-default-element-styles-with-modifier-classes"},"Overriding Default Element Styles With Modifier Classes"),(0,s.kt)("p",null,"When using a modifier class on the base block, child elements can have their default styles overridden by using the modifier class to increase specificity. Using Sass's nesting here makes sense as it allows each element's styles to be defined in a single place."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".foo {\n  background-color: #000;\n}\n\n.foo--blue {\n  background-color: blue;\n}\n\n.foo__child {\n  color: #fff;\n  .foo--blue & {\n    color: yellow;\n  }\n}\n")),(0,s.kt)("h2",{id:"flexbox--grid"},"Flexbox & Grid"),(0,s.kt)("p",null,"Flexbox & Grid have enough support to be used in production: ",(0,s.kt)("a",{parentName:"p",href:"https://caniuse.com/flexbox"},"Caniuse for Flexbox")," & ",(0,s.kt)("a",{parentName:"p",href:"https://caniuse.com/css-grid"},"Caniuse for Grid"),".\n",(0,s.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},"A Complete Guide to Flexbox | CSS-Tricks"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/complete-guide-grid/"},"A Complete Guide to Grid | CSS-Tricks")),(0,s.kt)("h3",{id:"shorthand-for-centering-flex--grid"},"Shorthand for Centering (Flex & Grid)"),(0,s.kt)("p",null,"A shorthand for ",(0,s.kt)("inlineCode",{parentName:"p"},"align-items")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"justify-items")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"place-items"),". One value sets both properties, if two values are set the first is for ",(0,s.kt)("inlineCode",{parentName:"p"},"align-items")," and the second for ",(0,s.kt)("inlineCode",{parentName:"p"},"justify-items"),". For example - a quick way to center vertically and horizontally would be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"  display: grid; // or flex\n  place-items: center;\n")),(0,s.kt)("h3",{id:"flexbox-properties-for-children"},"Flexbox properties for children"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"flex: 0 0 auto; // Fixed width or max-width that shouldn't grow or shrink\nflex: 1 1 0px; // Fluid width that will fill the remainder of its container, becomes the same width as sibling elements with same flex rules (two sibling elements with flex: 1 1 0px; will be 50% each)\nflex: 0 1 auto; // Has a percentage width, scales responsively\n")),(0,s.kt)("h3",{id:"images"},"Images"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use the ",(0,s.kt)("inlineCode",{parentName:"li"},"object-fit")," property as much as possible to maintain aspect ratios for images"),(0,s.kt)("li",{parentName:"ul"},"A placeholder selector exists called ",(0,s.kt)("inlineCode",{parentName:"li"},"%responsive-img")," in most projects and should be used for all images")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},'%responsive-img,\n.responsive-img {\n  position: relative;\n  &:before {\n    content: "";\n    display: block;\n  }\n  img {\n    display: block;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To use this - wrap your image in a ",(0,s.kt)("inlineCode",{parentName:"li"},"div")," and apply:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n  @extend %responsive-img;\n  &:before {\n    // the aspect ratio is added below\n    // for a 16:9 example, divide 9/16 and multiply by 100 = 56.25\n    padding-top: 56.25%;\n  }\n}\n")))}u.isMDXComponent=!0}}]);