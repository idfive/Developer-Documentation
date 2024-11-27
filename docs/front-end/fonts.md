---
description: Using Third-Party & Local Fonts
---

# Fonts

## Third-Party (ie, Typekit, Google, etc.)

- Fonts being hosted by a third-party can be added to the `<head>` in `source/_meta/_head.twig`, for example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
```

## Local Fonts

- Fonts being served locally can be placed in `source/fonts`.
- Font files need to be referenced in `source/css/core/_typography.scss` using `@font-face`. For example:

```scss
@font-face {
  font-family: "Font Name";
  src: url("path-to-font.woff") format("woff"), url("path-to-font.woff.ttf")
      format("truetype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
```

- Set `font-display: swap;` on all for performance reasons
