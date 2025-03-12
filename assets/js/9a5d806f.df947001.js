"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[4742],{7657:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"front-end/css","title":"CSS / SCSS","description":"Style Guide, Pointers & Architecture","source":"@site/docs/front-end/05-css.md","sourceDirName":"front-end","slug":"/front-end/css","permalink":"/docs/front-end/css","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/05-css.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"description":"Style Guide, Pointers & Architecture"},"sidebar":"tutorialSidebar","previous":{"title":"Twig Templating","permalink":"/docs/front-end/twig-templating"},"next":{"title":"JavaScript / TypeScript","permalink":"/docs/front-end/javascript-typescript"}}');var t=n(4848),r=n(8453);const l={description:"Style Guide, Pointers & Architecture"},a="CSS / SCSS",o={},d=[{value:"Responsive",id:"responsive",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Print Styles",id:"print-styles",level:2},{value:"Custom Properties (Native CSS Variables)",id:"custom-properties-native-css-variables",level:2},{value:"How To Use",id:"how-to-use",level:3},{value:"Changing Value with Media Queries",id:"changing-value-with-media-queries",level:3},{value:"Transitions",id:"transitions",level:2},{value:"Hover &amp; Focus States",id:"hover--focus-states",level:2},{value:"General Styling Guidelines",id:"general-styling-guidelines",level:2},{value:"Using REMs",id:"using-rems",level:3},{value:"Redundant code",id:"redundant-code",level:3},{value:"Units on 0 values",id:"units-on-0-values",level:4},{value:"Specificity",id:"specificity",level:3},{value:"Unnecessary chaining",id:"unnecessary-chaining",level:4},{value:"Don&#39;t use <code>id</code> for styles",id:"dont-use-id-for-styles",level:4},{value:"Non-percentage padding/margin",id:"non-percentage-paddingmargin",level:3},{value:"BEM Classes",id:"bem-classes",level:2},{value:"Blocks and Elements",id:"blocks-and-elements",level:3},{value:"Modifiers",id:"modifiers",level:3},{value:"Sass Nesting With BEM",id:"sass-nesting-with-bem",level:3},{value:"Overriding Default Element Styles With Modifier Classes",id:"overriding-default-element-styles-with-modifier-classes",level:3},{value:"Grid &amp; Flexbox",id:"grid--flexbox",level:2},{value:"Shorthand for Centering",id:"shorthand-for-centering",level:3},{value:"Flexbox properties for children",id:"flexbox-properties-for-children",level:3},{value:"Media &amp; Container Queries",id:"media--container-queries",level:2},{value:"Media Queries",id:"media-queries",level:3},{value:"Container Queries",id:"container-queries",level:3},{value:"Site Scaling",id:"site-scaling",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"css--scss",children:"CSS / SCSS"})}),"\n",(0,t.jsx)(s.h2,{id:"responsive",children:"Responsive"}),"\n",(0,t.jsx)(s.p,{children:'Using the "mobile first" methodology, where default CSS rules apply to the smallest screen size and are then progressively enhanced using media queries. Screen sizes are not an absolute, so responsiveness should be tested by resizing the browser vs. checking "standard" breakpoints (e.g. iPhone, iPad etc.).'}),"\n",(0,t.jsx)(s.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsxs)(s.p,{children:["The Sass setup uses ",(0,t.jsx)(s.code,{children:"@use"})," ",(0,t.jsx)(s.a,{href:"https://sass-lang.com/documentation/at-rules/use/",children:"(official documentation)"})," and ",(0,t.jsx)(s.code,{children:"@forward"})," ",(0,t.jsx)(s.a,{href:"https://sass-lang.com/documentation/at-rules/forward/",children:"(official documentation)"})," rules to load Sass stylesheet partials."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"entrypoint file"})," is ",(0,t.jsx)(s.code,{children:"index.scss"})," (located at ",(0,t.jsx)(s.code,{children:"source/scss/index.scss"}),"), which uses ",(0,t.jsx)(s.code,{children:"@use"})," to combine the partials."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Partials within the ",(0,t.jsx)(s.strong,{children:"abstracts directory"})," are using ",(0,t.jsx)(s.code,{children:"@forward"})," to ensure all of the (typically not output) rules are available accross all stylesheets:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"abstracts/functions.scss"})," - sass math functions, currently contains the function to convert ",(0,t.jsx)(s.code,{children:"rem(pixel-value)"})," to correct rem value"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"abstracts/media-queries.scss"})," - sass mixins, currently contains the media query mixin"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"abstracts/placeholder-selectors.scss"})," - contains repeated patterns used globally, a few examples:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"%visible-for-screen-readers"})," - hide content and only output for screenreaders"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"%responsive-img"})," - use this in conjunction with CSS ",(0,t.jsx)(s.code,{children:"aspect-ratio"})," to size images accordingly. Wrap images in a div (except WYSIWYG images) and apply ",(0,t.jsx)(s.code,{children:"@extend %responsive-img"})," to the div, as well as the aspect-ratio, which can be found by dividing the image width by the height. For example a 16 by 9 image (1600px by 900 for simplicity) would be ",(0,t.jsx)(s.code,{children:"aspect-ratio: 1.78"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"%negate-outer-pad-x"})," this can be used to negate the outer-padding used on a page wrapper to make a component full-width (values/variables need updated to reflect outer-padding values/variables)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"%caption"})," used for text styles on captions in various components (WYSIWYG images, videos, etc)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"core directory"})," contains root styles, layout and typography related partials:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"core/base.scss"})," - root styling:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Custom properties/variables (under ",(0,t.jsx)(s.code,{children:":root"})," to be globally accessible)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"html"}),", ",(0,t.jsx)(s.code,{children:"body"}),", ",(0,t.jsx)(s.code,{children:"img"}),", etc"]}),"\n",(0,t.jsxs)(s.li,{children:["Helper classes (",(0,t.jsx)(s.code,{children:".skip-link"}),", ",(0,t.jsx)(s.code,{children:".visible-for-screen-readers"}),", WYSIWYG image styles, etc)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"core/layout.scss"})," - main section, off-canvas, max-bound, and outer-padding"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"core/typography.scss"})," - set the ",(0,t.jsx)(s.code,{children:"body"})," base style, as well as ",(0,t.jsx)(s.code,{children:"a"}),", ",(0,t.jsx)(s.code,{children:"p"}),", ",(0,t.jsx)(s.code,{children:"ul"})," & ",(0,t.jsx)(s.code,{children:"ol"}),", as well as heading type styles"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"admin directory"})," contains just one file (",(0,t.jsx)(s.strong,{children:"admin/admin.scss"}),") - intended for admin/back-end styles. It's currently setup for Drupal, but can be adapated for other content management systems"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"pages directory"})," - is for pages which require particular stylesheets (home, search, etc)"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"components directory"})," - contains all component stylesheets (accordion, image gallery, etc)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"print-styles",children:"Print Styles"}),"\n",(0,t.jsxs)(s.p,{children:["A print-specific stylesheet is in use at ",(0,t.jsx)(s.code,{children:"source/scss/print.css"})," to disable page elements irrelevant for printing (site header, site footer, subnav, etc) and to output the url of links within page body text."]}),"\n",(0,t.jsx)(s.h2,{id:"custom-properties-native-css-variables",children:"Custom Properties (Native CSS Variables)"}),"\n",(0,t.jsx)(s.h3,{id:"how-to-use",children:"How To Use"}),"\n",(0,t.jsxs)(s.p,{children:["Globally scoped custom properties (aka variables) are added to the ",(0,t.jsx)(s.code,{children:":root"})," element in ",(0,t.jsx)(s.strong,{children:"core/base.scss"}),". For example, a color variable can be added with ",(0,t.jsx)(s.code,{children:"--color-white: #fff;"}),". Then to apply the variable:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:".element-with-color-white {\n  color: var(--color-white);\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"changing-value-with-media-queries",children:"Changing Value with Media Queries"}),"\n",(0,t.jsx)(s.p,{children:"Custom properties allow for value changes with media queries. For example, transition duration has been set to 0.3 seconds:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:":root {\n  --transition-duration: 0.3s;\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"and reduced for users who have set a preference of reduced motion:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"@media (prefers-reduced-motion) {\n  --transition-duration: 0.1s;\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"transitions",children:"Transitions"}),"\n",(0,t.jsxs)(s.p,{children:["Always be specific about which properties are going to transition, and ",(0,t.jsx)(s.strong,{children:'never transition on "all" properties'}),", which puts unnecessary strain on the browser. Note that the custom property for transition duration mentioned above is used in these examples:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"transition: var(--transition-duration) ease-in; /* Bad */\ntransition: var(--transition-duration) all ease-in; /* Bad */\ntransition: var(--transition-duration) opacity ease-in; /* Good */\ntransition: var(--transition-duration) opacity ease-in, 1s color ease-in-out; /* Good */\n"})}),"\n",(0,t.jsx)(s.h2,{id:"hover--focus-states",children:"Hover & Focus States"}),"\n",(0,t.jsxs)(s.p,{children:["All interactive elements need a hover and focus state and should all be transitioned. The hover and focus state should be identical - use the following (note the use of ",(0,t.jsx)(s.code,{children:"focus-visible"})," - which will only show on keyboard usage as opposed to the mouse, to prevent issues of unwanted persistent hover states):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"&:hover,\n&:focus-visible {\n  // hover styles\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"general-styling-guidelines",children:"General Styling Guidelines"}),"\n",(0,t.jsx)(s.h3,{id:"using-rems",children:"Using REMs"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"All pixel (or fixed) values should be set in rems"}),", except for media query values. The partial file ",(0,t.jsx)(s.strong,{children:"functions.scss"})," provides a helpful way to simplify this process - if a value of ",(0,t.jsx)(s.code,{children:"8px"})," needs to be set, ",(0,t.jsx)(s.code,{children:"rem(8)"})," can be used. Placing the desired pixel value in between the parentheses in ",(0,t.jsx)(s.code,{children:"rem()"})," will transpile the value to rems, in this example to ",(0,t.jsx)(s.code,{children:"0.5rem"}),". ",(0,t.jsx)(s.em,{children:"The formula is to divide the pixel value by 16 (the base font size)"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"redundant-code",children:"Redundant code"}),"\n",(0,t.jsx)(s.h4,{id:"units-on-0-values",children:"Units on 0 values"}),"\n",(0,t.jsx)(s.p,{children:"Specifying a unit value on zero values is unnecessary."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"padding: 0px; /* Bad */\npadding: 0; /* Good */\n"})}),"\n",(0,t.jsx)(s.h3,{id:"specificity",children:"Specificity"}),"\n",(0,t.jsx)(s.p,{children:"The key to clean CSS is for selectors to have as little classes as possible."}),"\n",(0,t.jsx)(s.h4,{id:"unnecessary-chaining",children:"Unnecessary chaining"}),"\n",(0,t.jsx)(s.p,{children:"Avoid unnecessary chaining of selectors."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"body .content .nav {\n} /* Bad */\n.nav {\n} /* Good */\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," There are some cases where chaining is necessary, particularly within nested lists."]}),"\n",(0,t.jsxs)(s.h4,{id:"dont-use-id-for-styles",children:["Don't use ",(0,t.jsx)(s.code,{children:"id"})," for styles"]}),"\n",(0,t.jsxs)(s.p,{children:["Using the ",(0,t.jsx)(s.code,{children:"id"})," attribute for attaching styles adds unnecessary specificity, and limits those styles to only one element per page."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"#nav {\n} /* Bad */\n.nav {\n} /* Good */\n"})}),"\n",(0,t.jsx)(s.h3,{id:"non-percentage-paddingmargin",children:"Non-percentage padding/margin"}),"\n",(0,t.jsx)(s.p,{children:"To keep margin and padding consistent across devices avoid using percentage based padding and margins."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"margin: 10%; /* Bad */\nmargin: 3rem; /* Good */\n"})}),"\n",(0,t.jsx)(s.h2,{id:"bem-classes",children:"BEM Classes"}),"\n",(0,t.jsxs)(s.p,{children:["To encapsulate/isolate component-specific styles and prevent unintended cascading, the ",(0,t.jsx)(s.a,{href:"http://getbem.com/introduction/",children:"BEM"})," methodology can be utilized. This allows nesting to be defined within class names and allows specificity to remain as low as possible. In general, ",(0,t.jsx)(s.strong,{children:"BEM classes should be used on all elements"})," within a component and element styles should be avoided as it requires extra work if/when the tag being styled changes."]}),"\n",(0,t.jsx)(s.h3,{id:"blocks-and-elements",children:"Blocks and Elements"}),"\n",(0,t.jsx)(s.p,{children:"BEM's blocks use a base block class on the root element of the component, with child elements of the block using the base block class with a secondary identifier appended to it following two underscores. For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:".foo {\n}\n\n.foo__child {\n}\n\n.foo__child-grandchild {\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"Note that the double underscores only need to be used once, for nested elements a hyphen can be used to append extra identifiers to the class name."}),"\n",(0,t.jsx)(s.h3,{id:"modifiers",children:"Modifiers"}),"\n",(0,t.jsx)(s.p,{children:"BEM's modifier classes use two hyphens after the base block class followed by an identifier for the unique styles to be applied to this variant of the default block. For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"// Default block styles\n.foo {\n  background-color: #000;\n}\n\n// Blue variant styles\n.foo--blue {\n  background-color: blue;\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Note that variant styles should be included after the default block styles to ensure that the variant's styles correctly override the default styles. Chaining (I.E. ",(0,t.jsx)(s.code,{children:".foo.foo--blue"}),") can also be used but it increases specificity and can lead to issues that would otherwise be avoided."]}),"\n",(0,t.jsx)(s.h3,{id:"sass-nesting-with-bem",children:"Sass Nesting With BEM"}),"\n",(0,t.jsx)(s.p,{children:"Because BEM simulates nesting via class naming, actual nesting should hardly ever be necessary."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"// Bad, unnecessarily increases specificity causing overriding later to be difficult\n.foo {\n  .foo__child {\n    .foo__child-grandchild {\n    }\n  }\n}\n\n// Good, all blocks and elements are the same level of specificity\n.foo {\n}\n\n.foo__child {\n}\n\n.foo__child-grandchild {\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Another option using Sass would be to utilize its ",(0,t.jsx)(s.code,{children:"&"})," operator to create child element classes within the base block's brackets without increasing specificity. However, this should be avoided as it makes tracking down styles based on the class name more difficult."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"// Bad, searching for the child classes can be confusing using this syntax\n.foo {\n  &__child {\n  }\n\n  &__child-grandchild {\n  }\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"overriding-default-element-styles-with-modifier-classes",children:"Overriding Default Element Styles With Modifier Classes"}),"\n",(0,t.jsx)(s.p,{children:"When using a modifier class on the base block, child elements can have their default styles overridden by using the modifier class to increase specificity. Using Sass's nesting here makes sense as it allows each element's styles to be defined in a single place."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:".foo {\n  background-color: #000;\n}\n\n.foo--blue {\n  background-color: blue;\n}\n\n.foo__child {\n  color: #fff;\n  .foo--blue & {\n    color: yellow;\n  }\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"grid--flexbox",children:"Grid & Flexbox"}),"\n",(0,t.jsxs)(s.p,{children:["These css tools can be used freely to create layouts. Flexbox is useful when the number of elements in a container is unknown and wrapping is desired or the content width is dyanmic or uknown. ",(0,t.jsx)(s.strong,{children:"Grid is preferable if possible"})," as it only requires styling the parent grid item as opposed to flexbox, which requires children to have properties set to achieve the layout. Useful link for grid syntax: ",(0,t.jsx)(s.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",children:"A Complete Guide to Flexbox | CSS-Tricks"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Example grid layout with 2 even columns (",(0,t.jsx)(s.code,{children:"minmax(0, 1fr)"})," can be used to ensure that longer pieces of content do not cause columns to grow or shrink disproportionately):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"display: grid;\ngrid-template-columns: repeat(2, minmax(0, 1fr));\ngap: rem(20);\nalign-items: start;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"shorthand-for-centering",children:"Shorthand for Centering"}),"\n",(0,t.jsxs)(s.p,{children:["A shorthand for ",(0,t.jsx)(s.code,{children:"align-items"})," and ",(0,t.jsx)(s.code,{children:"justify-items"})," is ",(0,t.jsx)(s.code,{children:"place-items"}),". One value sets both properties, if two values are set the first is for ",(0,t.jsx)(s.code,{children:"align-items"})," and the second for ",(0,t.jsx)(s.code,{children:"justify-items"}),". For example - a quick way to center vertically and horizontally would be:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"display: grid; // or flex\nplace-items: center;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"flexbox-properties-for-children",children:"Flexbox properties for children"}),"\n",(0,t.jsx)(s.p,{children:"Reference for child properties for sizing flex items:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"flex: 0 0 auto; // Fixed width or max-width that shouldn't grow or shrink\nflex: 1 1 0px; // Fluid width that will fill the remainder of its container, becomes the same width as sibling elements with same flex rules (two sibling elements with flex: 1 1 0px; will be 50% each)\nflex: 0 1 auto; // Has a percentage width, scales responsively\n"})}),"\n",(0,t.jsx)(s.h2,{id:"media--container-queries",children:"Media & Container Queries"}),"\n",(0,t.jsx)(s.h3,{id:"media-queries",children:"Media Queries"}),"\n",(0,t.jsxs)(s.p,{children:["Media queries can make use of a mixin in ",(0,t.jsx)(s.code,{children:"source/scss/abstracts/_media-queries.scss"})," that comes with established breakpoint variable values, the most commonly used being:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"$tablet: 768px;"}),"\n",(0,t.jsx)(s.li,{children:"$desktop: 1024px;"}),"\n",(0,t.jsx)(s.li,{children:"$lg_desktop: 1200px;"}),"\n",(0,t.jsx)(s.li,{children:"$xl_desktop: 1440px;"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The mixin can be called using the syntax: ",(0,t.jsx)(s.code,{children:"@include mq($min, $tablet) {}"}),", which would translate to: ",(0,t.jsx)(s.code,{children:"@media only screen and (min-width: 768px) {}"}),". The values can be updated as needed, or a standard media query can be used for one-off instances."]}),"\n",(0,t.jsx)(s.h3,{id:"container-queries",children:"Container Queries"}),"\n",(0,t.jsx)(s.p,{children:"Container queries can be used to establish a layout change on the basis of a components rendered width, as opposed to the entire viewport width. This can be useful on pages with variable widths, for example the content area on the kitchen sink varies when a subnav is visible vs hidden. Using these is not tied into the media query mixin as mentioned above, as the value of the component width depends and needs adjusted on a per-component/per-context basis."}),"\n",(0,t.jsxs)(s.p,{children:["To use a container query, the root of the component needs ",(0,t.jsx)(s.code,{children:"container-type: inline-size;"})," to be set."]}),"\n",(0,t.jsx)(s.p,{children:"The syntxa to use the container query is as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"@container (min-width: 700px) {\n  // Styles for component when it's width reaches 700px and greater\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"site-scaling",children:"Site Scaling"}),"\n",(0,t.jsxs)(s.p,{children:["When the browser reaches a width of 1800px and larger - site scaling will kick in to incrementally scale everything on the page as the width increases \u2014 there is no max-width for the site. In ",(0,t.jsx)(s.strong,{children:"base.scss"}),", this is controlled on the ",(0,t.jsx)(s.code,{children:"html"})," tag by increasing the font size with a viewport unit:."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:"html {\n  font-size: 16px;\n  @include mq($min, $max_desktop) {\n    font-size: calc(100% + 0.2vw);\n  }\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$max_desktop"})," corresponds to 1800px in ",(0,t.jsx)(s.strong,{children:"media-queries.scss"})]}),"\n",(0,t.jsxs)(s.p,{children:["For this scaling to work, all pixel values should be set in rems (",(0,t.jsx)(s.a,{href:"#using-rems",children:"see above section regarding REMs"}),")"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var i=n(6540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);