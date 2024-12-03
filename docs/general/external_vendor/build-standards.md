# idfive General Standards for Vendors and Freelancers

For external vendors building projects for idfive, this page overviews our general build standards, libraries and best practices. Some standards may be flexible per project, but any deviations from this overall guideline will need to be discussed with the idfive dev team.

## Project Management

### General

- Resource will be expected to make project checkin meetings, normally once per week at .5 - 1 hour, during business hours.
- Resource will be expected to provide daily progress updates to the idfive project Management team, via slack, email or trello.
- Resource will be expected to utilize the idfive Trello board to manage component delivery, and QC proccess.
- Resource will be expected to enter timesheets daily on idfive defined platform, with comments outlining a summary of work completed that day.

## Frontend

### General

- Use the [idfive Component Library Pattern Lab Starter](https://bitbucket.org/idfivellc/idfive-pattern-lab-starter/src/master/) as a starter for all frontend projects. This repo should be cloned, and used as the starter for all frontend components of a build. More information on this starter is [oulined in the FE section if these docs](/docs/front-end/pattern-lab).
- This library utilizes the [Idfive Component Library](https://staging2.idfive.com/idfive-pattern-lab-starter/public/?p=pages-welcome), (user: guest, password: guest) to create a whitelabel starter framework for common components. Many components can be seen by looking at the [Kitchen Sink](https://staging2.idfive.com/idfive-pattern-lab-starter/public/?p=pages-kitchen-sink) example, as well as interacting with Pattern Lab menu at the top of the page, to see individual components/etc.
- idfive utilizes [Pattern Lab](https://patternlab.io/) to stage static pages and components for QC/review. All functionality, components, and pages should be atomic as much as possible, for reuse as needed.
- All dependencies to be tracked in package.json, and included via NPM. More notes on [Node.js preferences](/docs/front-end/node).
- A [.nvmrc](https://github.com/nvm-sh/nvm#nvmrc) file is present in the root ICL directory with the necessary version of Node.js to be used when working on the project.
- Code should be well-documented/commented.
- All code follows [Best Practices](/docs/general/best-practices).

### Interactions

- Whenever possible, we prefer CSS transforms, transitions, etc, be used rather than JS, for things like micro-interactions.

### HTML

- HTML should be [W3C-validated](https://validator.w3.org/) and use proper semantics where applicable.
- Templates are written in [Twig](https://twig.symfony.com/) and compiled to standard HTML.
- Proper ARIA functionality is used to meet WCAG accessibility guidelines (see [Accessibility Requirements page](https://developers.idfive.com/docs/front-end/accessibility)).
- Components should include `component-name.json` data files to allow them to be easily imported and shared across other templates.

### JS

- All theme JS should be written as [TypeScript](https://www.typescriptlang.org/), and compiled to stable, browser-compliant JS.
- For any complex filtering/SPA like functionality, we request to use [Vue.js](https://vuejs.org/), over other frameworks.
- We prefer to keep other libraries to an absolute minimum, unless there are specific needs for one.
- All JS written with atomic principles in mind.
- Code samples of [idfive JS Preferences](/docs/front-end/javascript-typescript).

### CSS

- All CSS to be written as SCSS, and compiled to a single CSS file.
- All SCSS to be written using the [BEM methodology](http://getbem.com/introduction/).
- All SCSS written with atomic principles in mind.
- Code samples of [idfive CSS Preferences](/docs/front-end/css).

### Acceptance standards

- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.
- Browser tested in latest versions of Chrome, Safari, Firefox and Edge, as well as on a mobile device (iOS or Android)

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
- Accessibility requirements met (see [Accessibility page](https://developers.idfive.com/docs/front-end/accessibility))
- Code meets all functionality requirements outlined in wireframes.
- Code free (or as free as can be) of proprietary, or paid modules/plugins.
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.
