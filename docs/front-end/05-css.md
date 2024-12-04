---
description: Style Guide, Pointers & Architecture
---

# CSS / SCSS

## Responsive

Using the "mobile first" methodology, where default CSS rules apply to the smallest screen size and are then progressively enhanced using media queries. Screen sizes are not an absolute, so responsiveness should be tested by resizing the browser vs. checking "standard" breakpoints (e.g. iPhone, iPad etc.).

## Architecture

The Sass setup uses `@use` [(official documentation)](https://sass-lang.com/documentation/at-rules/use/) and `@forward` [(official documentation)](https://sass-lang.com/documentation/at-rules/forward/) rules to load Sass stylesheet partials.

- The **entrypoint file** is `index.scss` (located at `source/scss/index.scss`), which uses `@use` to combine the partials.
- Partials within the **abstracts directory** are using `@forward` to ensure all of the (typically not output) rules are available accross all stylesheets:

  - **abstracts/functions.scss** - sass math functions, currently contains the function to convert `rem(pixel-value)` to correct rem value
  - **abstracts/media-queries.scss** - sass mixins, currently contains the media query mixin
  - **abstracts/placeholder-selectors.scss** - contains repeated patterns used globally, a few examples:
    - `%visible-for-screen-readers` - hide content and only output for screenreaders
    - `%responsive-img` - use this in conjunction with CSS `aspect-ratio` to size images accordingly. Wrap images in a div (except WYSIWYG images) and apply `@extend %responsive-img` to the div, as well as the aspect-ratio, which can be found by dividing the image width by the height. For example a 16 by 9 image (1600px by 900 for simplicity) would be `aspect-ratio: 1.78`
    - `%negate-outer-pad-x` this can be used to negate the outer-padding used on a page wrapper to make a component full-width (values/variables need updated to reflect outer-padding values/variables)
    - `%caption` used for text styles on captions in various components (WYSIWYG images, videos, etc)

- The **core directory** contains root styles, layout and typography related partials:
  - **core/base.scss** - root styling:
    - Custom properties/variables (under `:root` to be globally accessible)
    - `html`, `body`, `img`, etc
    - Helper classes (`.skip-link`, `.visible-for-screen-readers`, WYSIWYG image styles, etc)
  - **core/layout.scss** - main section, off-canvas, max-bound, and outer-padding
  - **core/typography.scss** - set the `body` base style, as well as `a`, `p`, `ul` & `ol`, as well as heading type styles
- The **admin directory** contains just one file (**admin/admin.scss**) - intended for admin/back-end styles. It's currently setup for Drupal, but can be adapated for other content management systems
- The **pages directory** - is for pages which require particular stylesheets (home, search, etc)
- The **components directory** - contains all component stylesheets (accordion, image gallery, etc)

## Print Styles

A print-specific stylesheet is in use at `source/scss/print.css` to disable page elements irrelevant for printing (site header, site footer, subnav, etc) and to output the url of links within page body text.

## Custom Properties (Native CSS Variables)

### How To Use

Globally scoped custom properties (aka variables) are added to the `:root` element in **core/base.scss**. For example, a color variable can be added with `--color-white: #fff;`. Then to apply the variable:

```scss
.element-with-color-white {
  color: var(--color-white);
}
```

### Changing Value with Media Queries

Custom properties allow for value changes with media queries. For example, transition duration has been set to 0.3 seconds:

```scss
:root {
  --transition-duration: 0.3s;
}
```

and reduced for users who have set a preference of reduced motion:

```scss
@media (prefers-reduced-motion) {
  --transition-duration: 0.1s;
}
```

## Transitions

Always be specific about which properties are going to transition, and **never transition on "all" properties**, which puts unnecessary strain on the browser. Note that the custom property for transition duration mentioned above is used in these examples:

```scss
transition: var(--transition-duration) ease-in; /* Bad */
transition: var(--transition-duration) all ease-in; /* Bad */
transition: var(--transition-duration) opacity ease-in; /* Good */
transition: var(--transition-duration) opacity ease-in, 1s color ease-in-out; /* Good */
```

## Hover & Focus States

All interactive elements need a hover and focus state and should all be transitioned. The hover and focus state should be identical - use the following (note the use of `focus-visible` - which will only show on keyboard usage as opposed to the mouse, to prevent issues of unwanted persistent hover states):

```scss
&:hover,
&:focus-visible {
  // hover styles
}
```

## General Styling Guidelines

### Using REMs

**All pixel (or fixed) values should be set in rems**, except for media query values. The partial file **functions.scss** provides a helpful way to simplify this process - if a value of `8px` needs to be set, `rem(8)` can be used. Placing the desired pixel value in between the parentheses in `rem()` will transpile the value to rems, in this example to `0.5rem`. _The formula is to divide the pixel value by 16 (the base font size)_.

### Redundant code

#### Units on 0 values

Specifying a unit value on zero values is unnecessary.

```scss
padding: 0px; /* Bad */
padding: 0; /* Good */
```

### Specificity

The key to clean CSS is for selectors to have as little classes as possible.

#### Unnecessary chaining

Avoid unnecessary chaining of selectors.

```scss
body .content .nav {
} /* Bad */
.nav {
} /* Good */
```

**Note:** There are some cases where chaining is necessary, particularly within nested lists.

#### Don't use `id` for styles

Using the `id` attribute for attaching styles adds unnecessary specificity, and limits those styles to only one element per page.

```scss
#nav {
} /* Bad */
.nav {
} /* Good */
```

### Non-percentage padding/margin

To keep margin and padding consistent across devices avoid using percentage based padding and margins.

```scss
margin: 10%; /* Bad */
margin: 3rem; /* Good */
```

## BEM Classes

To encapsulate/isolate component-specific styles and prevent unintended cascading, the [BEM](http://getbem.com/introduction/) methodology can be utilized. This allows nesting to be defined within class names and allows specificity to remain as low as possible. In general, **BEM classes should be used on all elements** within a component and element styles should be avoided as it requires extra work if/when the tag being styled changes.

### Blocks and Elements

BEM's blocks use a base block class on the root element of the component, with child elements of the block using the base block class with a secondary identifier appended to it following two underscores. For example:

```scss
.foo {
}

.foo__child {
}

.foo__child-grandchild {
}
```

Note that the double underscores only need to be used once, for nested elements a hyphen can be used to append extra identifiers to the class name.

### Modifiers

BEM's modifier classes use two hyphens after the base block class followed by an identifier for the unique styles to be applied to this variant of the default block. For example:

```scss
// Default block styles
.foo {
  background-color: #000;
}

// Blue variant styles
.foo--blue {
  background-color: blue;
}
```

Note that variant styles should be included after the default block styles to ensure that the variant's styles correctly override the default styles. Chaining (I.E. `.foo.foo--blue`) can also be used but it increases specificity and can lead to issues that would otherwise be avoided.

### Sass Nesting With BEM

Because BEM simulates nesting via class naming, actual nesting should hardly ever be necessary.

```scss
// Bad, unnecessarily increases specificity causing overriding later to be difficult
.foo {
  .foo__child {
    .foo__child-grandchild {
    }
  }
}

// Good, all blocks and elements are the same level of specificity
.foo {
}

.foo__child {
}

.foo__child-grandchild {
}
```

Another option using Sass would be to utilize its `&` operator to create child element classes within the base block's brackets without increasing specificity. However, this should be avoided as it makes tracking down styles based on the class name more difficult.

```scss
// Bad, searching for the child classes can be confusing using this syntax
.foo {
  &__child {
  }

  &__child-grandchild {
  }
}
```

### Overriding Default Element Styles With Modifier Classes

When using a modifier class on the base block, child elements can have their default styles overridden by using the modifier class to increase specificity. Using Sass's nesting here makes sense as it allows each element's styles to be defined in a single place.

```scss
.foo {
  background-color: #000;
}

.foo--blue {
  background-color: blue;
}

.foo__child {
  color: #fff;
  .foo--blue & {
    color: yellow;
  }
}
```

## Grid & Flexbox

These css tools can be used freely to create layouts. Flexbox is useful when the number of elements in a container is unknown and wrapping is desired or the content width is dyanmic or uknown. **Grid is preferable if possible** as it only requires styling the parent grid item as opposed to flexbox, which requires children to have properties set to achieve the layout. Useful link for grid syntax: [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Example grid layout with 2 even columns (`minmax(0, 1fr)` can be used to ensure that longer pieces of content do not cause columns to grow or shrink disproportionately):

```scss
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: rem(20);
align-items: start;
```

### Shorthand for Centering

A shorthand for `align-items` and `justify-items` is `place-items`. One value sets both properties, if two values are set the first is for `align-items` and the second for `justify-items`. For example - a quick way to center vertically and horizontally would be:

```scss
display: grid; // or flex
place-items: center;
```

### Flexbox properties for children

Reference for child properties for sizing flex items:

```scss
flex: 0 0 auto; // Fixed width or max-width that shouldn't grow or shrink
flex: 1 1 0px; // Fluid width that will fill the remainder of its container, becomes the same width as sibling elements with same flex rules (two sibling elements with flex: 1 1 0px; will be 50% each)
flex: 0 1 auto; // Has a percentage width, scales responsively
```

## Media & Container Queries

### Media Queries

Media queries can make use of a mixin in `source/scss/abstracts/_media-queries.scss` that comes with established breakpoint variable values, the most commonly used being:

- $tablet: 768px;
- $desktop: 1024px;
- $lg_desktop: 1200px;
- $xl_desktop: 1440px;

The mixin can be called using the syntax: `@include mq($min, $tablet) {}`, which would translate to: `@media only screen and (min-width: 768px) {}`. The values can be updated as needed, or a standard media query can be used for one-off instances.

### Container Queries

Container queries can be used to establish a layout change on the basis of a components rendered width, as opposed to the entire viewport width. This can be useful on pages with variable widths, for example the content area on the kitchen sink varies when a subnav is visible vs hidden. Using these is not tied into the media query mixin as mentioned above, as the value of the component width depends and needs adjusted on a per-component/per-context basis.

To use a container query, the root of the component needs `container-type: inline-size;` to be set.

The syntxa to use the container query is as follows:

```scss
@container (min-width: 700px) {
  // Styles for component when it's width reaches 700px and greater
}
```

## Site Scaling

When the browser reaches a width of 1800px and larger - site scaling will kick in to incrementally scale everything on the page as the width increases — there is no max-width for the site. In **base.scss**, this is controlled on the `html` tag by increasing the font size with a viewport unit:.

```scss
html {
  font-size: 16px;
  @include mq($min, $max_desktop) {
    font-size: calc(100% + 0.2vw);
  }
}
```

`$max_desktop` corresponds to 1800px in **media-queries.scss**

For this scaling to work, all pixel values should be set in rems ([see above section regarding REMs](#using-rems))
