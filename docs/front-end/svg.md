# SVG

Our SVG workflow uses an SVG sprite sheet to allow icons to be included anywhere while only specifying each icon's code in a single place. An example of this is as follows:

```
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <symbol id="icon-email" viewBox="0 0 48 32">
      <path d="M0 30.643v-27.296l22.912 15.52 25.088-15.667v27.443z"></path>
      <path d="M48 0l-24.954 16-23.046-16z"></path>
    </symbol>
  </defs>
</svg>
```

The way this works is that each individual icon is declared as a `symbol` within the `defs` tag in the sprite sheet. In order to convert a standard `svg` element to a `symbol`, a few steps should be taken:

- Optimize the `svg` by running it through [SVGOMG](https://jakearchibald.github.io/svgomg/). Make sure that the "Prefer viewBox over width/height" option is checked in the Global Settings panel. This will replace any usages of `width` and `height` attributes with `viewBox` which allows icons to be responsively scaled on a case-by-case basis.
- Copy the optimized `svg` from SVGOMG and paste it into the `defs` tag in the sprite sheet.
- Convert the tag from `svg` to `symbol` and give it a unique `id`. This `id` will then be used as the value of the `xlink:href` attribute of a `use` element inside an inline `svg` element.

This sheet should be included as close to the opening `body` tag as possible. Generally it's easiest to create a template that contains the sprite sheet that you can then include in your base layout.

Once the sprite sheet is included in your template, you can reference the icons in the sprite sheet anywhere in the project by using the following syntax:

```
<svg aria-hidden="true" class="icon icon-email">
  <use xlink:href="#icon-email"></use>
</svg>
```