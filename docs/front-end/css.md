# CSS

## Transitions

### Be Specific
Always be specific about which properties are going to transition, and __never transition on "all" properties__, which puts unnessary strain on the browser.

```css
transition: .5s ease-in; /* Bad */
transition: all .5s ease-in; /* Bad */
transition: opacity .5s ease-in; /* Good */
transition: opacity .5s ease-in, color 1s ease-in-out; /* Good */
```

### Hardware acceleration
Use the `will-change` property to enable hardware accelaration in the browser for smoother transitions.

```css
will-change: opacity;
transition: opacity .5s ease-in;
```

## Browser Prefixes
Browser prefixes for standard properties should __never be included in source code__. Prefixes are added during the build process and account for the browsers we support as well as feature adoption to make sure that only necessary prefixes are being added.

```css
-moz-transition: opacity .5s ease-in; /* Bad */
-webkit-transition: opacity .5s ease-in; /* Bad */
transition: opacity .5s ease-in; /* Good */
```

## Redundant code

### Units on 0 values
Specifiying a unit value on zero values is unecessary.

```css
padding: 0px; /* Bad */
padding: 0; /* Good */
```

### Leading zeros
Avoid leading zeros on partial values.
```css
padding: 0.5rem; /* Bad */
padding: .5rem; /* Good */
```

## Specificity
The key to clean CSS is for selectors to have as little classes as possible.

### Uneccesary chaining
Avoid uneccesary chaining of selectors.

```css
body .content .nav {} /* Bad */
.nav {} /* Good */
```

__Note:__ There are some cases where chaining is necessary, particularly within nested lists.

### Don't use `id` for styles
Using the `id` attribute for attaching styles adds unecesary specificity, and limits those styles to only one element per page.

```css
#nav {} /* Bad */
.nav {} /* Good */
```

## Non-percentage padding/margin
To keep margin and padding consistent across devices avoid using percentage based padding and margins.

```css
margin: 10%; /* Bad */
margin: 3rem; /* Good */
```
