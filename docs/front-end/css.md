---
description: Style Guide, Pointers & Architecture
---

# CSS / SCSS
## Architecture
An explanation/use-case for all of the partials in the "core" directory, to be updated these files as needed per project.

- **base.scss** - root styling (html, body, etc) as well as containing skip link and WYSIWYG image styles
- **functions.scss** - sass math functions, currently contains the function to convert `rem(pixel-value)` to correct rem value
- **layout.scss** - main section, off-canvas, max-bound, and outer-padding
- **mixins.scss** - sass mixins, currently contains the media query mixin
- **placeholder-selectors.scss** - contains repeated patterns used globally, currently contains:
  - `%visible-for-screen-readers` - hide content and only output for screenreaders
  - `%responsive-img` - use this in conjunction with CSS `aspect-ratio` to size images accordingly. Wrap images in a div (except WYSIWYG images) and apply `@extend %responsive-img` to the div, as well as the aspect-ratio, which can be found by dividing the image width by the height. For example a 16 by 9 image (1600px by 900 for simplicity) would be `aspect-ratio: 1.78`
  - `%negate-outer-pad-x` this can be used to negate the outer-padding used on a page wrapper to make a component full-width (values/variables need updated to reflect outer-padding values/variables)
  - `%caption` used for text styles on captions in various components (WYSIWYG images, videos, etc)
- **typography.scss** - set the `body` base style, as well as `a`, `p`, `ul` & `ol`, as well as heading type styles
- **variables.scss** - currently contains colors, outer-padding, and font-family variables


## Transitions

### Be Specific

Always be specific about which properties are going to transition, and **never transition on "all" properties**, which puts unnecessary strain on the browser.

```scss
transition: 0.5s ease-in; /* Bad */
transition: all 0.5s ease-in; /* Bad */
transition: opacity 0.5s ease-in; /* Good */
transition: opacity 0.5s ease-in, color 1s ease-in-out; /* Good */
```

### Hardware acceleration (subject to change as browsers advance)

Prefer `opacity` and `transform` as properties to be animated/transitioned as they support hardware acceleration, providing jank-free animations. For more information on this topic, see [this article](https://web.dev/animations-and-performance/).

```scss
transition: opacity 0.5s ease-in;
```

#### Using `will-change` to Force Hardware Acceleration (subject to change as browsers advance)

In certain cases, `will-change` can be used to provide hints to the browser as to what changes an element will potentially undergo, allowing the browser to make necessary optimizations behind the scenes. **This should be used sparingly though and is only necessary when there are existing performance problems that need to be addressed**. See [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change) for more information.

#### Avoid Transitioning Properties That Cause Layout Changes/Repaint (subject to change as browsers advance)

Properties like `width` and `height` should ideally never be transitioned with CSS as they cause layout/reflow to occur which is expensive and can introduce jank. In these cases, if `transform` can't be used, `requestAnimationFrame` should be used in JavaScript to incrementally update the property value and simulate a transition. Using `requestAnimationFrame` allows the browser to update layout at 60fps or whatever the refresh rate of the user's display is. See [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) for more information and examples.

## Redundant code

### Units on 0 values

Specifying a unit value on zero values is unnecessary.

```scss
padding: 0px; /* Bad */
padding: 0; /* Good */
```

## Specificity

The key to clean CSS is for selectors to have as little classes as possible.

### Unnecessary chaining

Avoid unnecessary chaining of selectors.

```scss
body .content .nav {
} /* Bad */
.nav {
} /* Good */
```

**Note:** There are some cases where chaining is necessary, particularly within nested lists.

### Don't use `id` for styles

Using the `id` attribute for attaching styles adds unnecessary specificity, and limits those styles to only one element per page.

```scss
#nav {
} /* Bad */
.nav {
} /* Good */
```

## Non-percentage padding/margin

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

## Images

- Use the `object-fit` property as much as possible to maintain aspect ratios for images
- A placeholder selector exists called `%responsive-img` in most projects and should be used for all images

```scss
%responsive-img,
.responsive-img {
  width: 100%;
  iframe,
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}
```

- To use this - wrap your image in a `div` and apply, updating the aspect-ratio to your needs:

```scss
.element {
  aspect-ratio: 16/9;
  @extend %responsive-img;
}
```

## Flexbox & Grid

Flexbox & Grid have enough support to be used in production: [Caniuse for Flexbox](https://caniuse.com/flexbox) & [Caniuse for Grid](https://caniuse.com/css-grid).
[A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[A Complete Guide to Grid | CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Shorthand for Centering (Flex & Grid)

A shorthand for `align-items` and `justify-items` is `place-items`. One value sets both properties, if two values are set the first is for `align-items` and the second for `justify-items`. For example - a quick way to center vertically and horizontally would be:

```scss
display: grid; // or flex
place-items: center;
```

### Flexbox properties for children

```scss
flex: 0 0 auto; // Fixed width or max-width that shouldn't grow or shrink
flex: 1 1 0px; // Fluid width that will fill the remainder of its container, becomes the same width as sibling elements with same flex rules (two sibling elements with flex: 1 1 0px; will be 50% each)
flex: 0 1 auto; // Has a percentage width, scales responsively
```
