# idfive General Standards for Vendors and Freelancers

For external vendors building projects for idfive, this page overviews our general build standards, libraries and best practices. Some standards may be flexible per project, but any deviations from this overall guideline will need to be discussed with the idfive dev team.

## Project Management

### General

- Resource will be expected to make project checkin meetings, normally once per week at .5 - 1 hour, during business hours.
- Resource will be expected to provide daily progress updates to the idfive project Management team, via slack, email or trello.
- Resource will be expected to utilize the idfive Trello board to manage component delivery, and QC proccess.

## Frontend

### General

- Use the [idfive Component Library Pattern Lab Starter](https://bitbucket.org/idfivellc/idfive-pattern-lab-starter/src/master/) as a starter for all frontend projects. This repo should be cloned, and used as the starter for all frontend components of a build. More information on this starter is [oulined in the FE section if these docs](/docs/front-end/pattern-lab).
- This library utilizes the [Idfive Component Library](https://staging2.idfive.com/idfive-pattern-lab-starter/public/?p=pages-welcome), (user: guest, password: guest) to create a whitelabel starter framework for common components. Many components can be seen by looking at the [Kitchen Sink](https://staging2.idfive.com/idfive-pattern-lab-starter/public/?p=pages-kitchen-sink) example, as well as interacting with Pattern Lab menu at the top of the page, to see individual components/etc.
- idfive utilizes [Pattern Lab](https://patternlab.io/) to stage static pages and components for QC/review. All functionality, components, and pages should be atomic as much as possible, for reuse as needed.
- Webpack, included in the ICL, to be used for all code compiling.
- All dependencies to be tracked in package.json, and included via NPM. More notes on [Node.js preferences](/docs/front-end/node).
- A [.nvmrc](https://github.com/nvm-sh/nvm#nvmrc) file is present in the root ICL directory with the necessary version of Node.js to be used when working on the project.
- Code should be well-documented/commented.
- All code follows [RAMP](/docs/front-end/ramp).

### Interactions

- Whenever possible, we prefer CSS transforms, transitions, etc, be used rather than JS, for things like micro-interactions.

### HTML

- HTML should be [W3C-validated](https://validator.w3.org/) and use proper semantics where applicable.
- Templates are written in [Twig](https://twig.symfony.com/) and compiled to standard HTML via Webpack.
- Proper ARIA functionality is used to meet WCAG accessibility guidelines.
- Components should include [config.json](https://fractal.build/guide/core-concepts/context-data.html) files to allow them to be easily imported and shared across other templates.

### JS

- All theme JS should be written as [TypeScript](https://www.typescriptlang.org/), and compiled to stable, browser-compliant JS via Webpack.
- For any complex filtering/SPA like functionality, we request to use [Vue.js](https://vuejs.org/), over other frameworks.
- We prefer to keep other libraries to an absolute minimum, unless there are specific needs for one.
- All JS written with atomic principles in mind.
- Code samples of [idfive JS Preferences](/docs/front-end/js).

### CSS

- All CSS to be written as SCSS, and compiled via Webpack.
- All SCSS to be written using the [BEM methodology](http://getbem.com/introduction/).
- All SCSS written with atomic principles in mind.
- Code samples of [idfive CSS Preferences](/docs/front-end/css).

### Acceptance standards

- Provides fallback of full content for non-JS users.
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.
- Browser tested in latest 2 versions of Chrome, Safari and Edge, on both Mac and PC. IE11 fallback considerations a huge plus.

## Backend

### Wordpress

- More detail on [idfive's preferred Wordpress approach](/docs/back-end/wordpress/wordpress.md).
- More detail on [idfive's preferred Wordpress Plugins](/docs/back-end/wordpress/wordpress-plugins.md).
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
