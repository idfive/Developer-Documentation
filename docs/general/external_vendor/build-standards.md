# idfive General Coding and Build Standards for Vendors and Freelancers

For external vendors building projects for idfive, this page overviews our general build standards, libraries and best practices. Some standards may be flexible per project, but any deviations from this overall guideline will need to be discussed with the idfive dev team.

## Frontend

### General

- Use the [idfive Component Library](https://bitbucket.org/idfivellc/idfive-component-library/src/master/) as a starter for all frontend projects. This repo should be cloned, and used as the starter for all frontend components of a build.
- This library utilizes [silc](https://silc.io/), the "Simple Intuitative Libray of Components" for [grids](https://github.com/nickrigby/silc-grid), [accordions](https://github.com/nickrigby/silc-accordion), [offcanvas elements](https://github.com/nickrigby/silc-offcanvas), [navigation](https://github.com/nickrigby/silc-nav) and a few other common items. It is specifically a very bare bones framework, so that styles/etc do not need to be overridden.
- idfive utilizes [fractal](https://fractal.build/) to stage static pages and components for QC/review. All functionality, components, and pages should be atomic as much as possible, for reuse as needed.
- Webpack, included in the ICL, to be used for all code compiling.
- All dependencies to be tracked in package.json, and included via NPM. More notes on [node.js preferences](/front-end/node).
- All code follows [RAMP](/front-end/ramp).

### Interactions

- Whenever possible, we prefer CSS transforms, transitions, etc, be used rather than JS, for things like micro-interactions.

### JS

- All theme JS should be written as Typescript, and compiled to es6 via webpack.
- For any complex filtering/SPA like functionality, we request to use [vue.js](https://vuejs.org/), over other frameworks.
- We prefer to keep other libraries to an absolute minimum, unless there are specific needs for one.
- All JS written with atomic principles in mind.
- Code samples of [idfive JS Preferences](/front-end/js).

### CSS

- All CSS to be written as SCSS, and compiled via webpack.
- All SCSS to be written using the [BEM methodology](http://getbem.com/introduction/).
- All SCSS written with atomic principles in mind.
- Code samples of [idfive CSS Preferences](/front-end/css).

### Acceptance standards

- Provides fallback of full content for non JS users.
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.
- Browser tested in latest 2 versions of chrome, safari and edge, on both mac and PC. ie11 fallback considerations a huge plus.

## Backend

### Wordpress

- More detail on [idfive's preferred Wordpress approach](/back-end/wordpress/wordpress).
- More detail on [idfive's preferred Wordpress Plugins](/back-end/wordpress/wordpress-plugins).
- idfive prefers to utilize the [Timber](https://upstatement.com/timber/) library for themes, in order to use modern twig templating.
- idfive prefers that templates use ACF or Gutenburg blocks for certain more robust page builder functionality.

### Drupal

- idfive prefers to utilize [paragraphs](https://www.drupal.org/project/paragraphs) to build highly customizable pages.
- idfive maintains a module, [idfive_paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs) that provides several basic paragraphs widgets, that is compatible with the ICL markup.
- idfive maintains a base theme, [idfive](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) that is to be used as the parent theme for all client theme work. More information on how specifically to generate that child theme, is in the readme of that repo.

### Acceptance standards

- Code meets best practice/coding standards for particular CMS.
- Code meets all functionality requirements outlined in wireframes.
- Code free (or as free as can be) of proprietary, or paid modules/plugins.
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.
