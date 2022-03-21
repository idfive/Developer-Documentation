# SVG

Our SVG workflow utilizes [IcoMoon](https://icomoon.io/) to create and manage SVG sprite sheets on a per-project basis. The workflow is as follows:

- Optimize all SVG icon's with [SVGOMG](https://jakearchibald.github.io/svgomg/)
- Remove any inline `fill` attributes for icon's where the fill may need to change across use cases on the site
- Name the files using the following pattern `<icon handle>.svg` (don't include `icon` at the beginning of the file name as it will cause IcoMoon to create classes like `icon-icon-foo`)
- Create a new project in IcoMoon (or if there is an existing one for the current project, import the project's selection.json)
- Import any icons to the project and use the "Generate SVG & More" option to download an SVG sprite sheet
- Copy the contents of the `symbol-defs.svg` file from the IcoMoon download and include them as close to the opening body tag as possible. For Fractal projects, it's easiest to create a component that contains the contents of the `symbol-defs.svg` file and then include it at the top of any preview layouts.
- Add/update the project's `selection.json` with the latest version in the download to track the IcoMoon project in Git

Once this is done, you can reference the icons included in the sprite sheet anywhere in the project by using the following syntax:

```
<svg aria-hidden="true" class="icon icon-foo">
  <use xlink:href="#icon-foo"></use>
</svg>
```