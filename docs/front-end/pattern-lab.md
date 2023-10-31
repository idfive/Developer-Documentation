# Pattern Lab Starter

## Introduction
The Pattern Lab Starter (formerly ICL) is a collection of components to be used to begin new front-end development projects.

### Staging Site
The Pattern Lab Starter can be viewed on our staging site at [this link](https://staging2.idfive.com/idfive-pattern-lab-starter/public/?p=pages-welcome)

### Download

To download the starter [visit the Bitbucket Repo Downloads - Tags](https://bitbucket.org/idfivellc/idfive-pattern-lab-starter/downloads/?tab=tags) and under "Download", select a zip file of the latest tag. Downloading this way as opposed to cloning the repo will remove the git tracking (so it can be connected to the new project) and ensure that the latest intended version is pulled (new versions tagged when ready for production).

### Interface

Official Pattern Lab documentation can be [found here](https://patternlab.io/). The site navigation is typically on the left side of the page (it can be moved to the top by selecting "switch layout", but the left side is the default). There are three main (iinitially collapsed) sections:
- **Components** is a list of all available components - not in a page context
- **Core** contains misc site elements such as colors in use (this is optional, would need manually updated per site), and an invisible section called the iconset, which contains a sprite sheet for all of the svg icons
- **Pages** contains fully built out pages, this is typically where review occurs

### Installation
In a terminal window at the root of the pattern lab starter - run the followiing commands:
- `nvm use`
- `npm install`
- `npm run develop`

This will open the "Welcome page", changes made in code will automatically be refreshed/reflected in the browser.

## Folder Structure
The source directory contains the main working areas for the library. More information can be found [here](https://patternlab.io/docs/editing-pattern-lab-source-files/).
- **Annotations** is not in use, but can be used as an alternate way of documenting components (insead of placing the documentation in the respective component folder)
- **Data** contains global data, currently the starter library consists of `data.json` which holds data for global components such as the site-header and site-footer (this prevents the data from needing to be repeated for multiple instances). This can be re-organized/customized to suit developer needs
- **Meta** contains the header and footer code that gets applied to all patterns and pages. `_head.twig` contains all of the html and header starting code and `_foot.twig` for footer and ending html code/tags - more info can be found [here](https://patternlab.io/docs/modifying-the-pattern-header-and-footer/)
- **Patterns** contains the bulk of the code in use (components, core & pages). The three directories in here correlate to what is seen in the browser interface and are documented [above](pattern-lab#interface)
- **css** contains the scss partial files, compiled into `index.scss`. 
  - **components** contain a scss partial corresponding to each individual compoennt
  - **core** contains base, layout, functions, mixins, variables, placeholder-seclectors and typography scss partials
  - **index.scss** pulls all partial files in, as well as linking to third-party library css if needed (node_module directories)
  - **pattern-scaffolding.css** is only in use for the pattern lab directory if custom styles are needed (namely the color palettes in core > colors)
  - **print.css** is called solely for print media, the starter can be used as a base - to be customized for each site
- **Fonts** is empty by default (Google Fonts are linked to in `_head.twig` for the sarter version), but local fonts can be added to this directory
- **Images** contains all starter images, as well as icons and svgs
- **js** contains all typescript modules:
  - **components** contains individual modules for respective components (when required for functionality)
  - **utilities** contains helpful accessibility functions that can be used to simply certain tasks
  - **maint.ts** imports all functions and calls init functions for each (this file gets compiled into one on build)

## Site Header

![Site Header](_media/site-header-desktop.jpg)
The site header supports dropdown menus, a utility nav and a pop-up search form.
