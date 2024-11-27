---
description: Overview of Front-end Library
---
# ICL / Pattern Lab Starter

**A collection of components to be used to begin new front-end development projects.** This library is synced-up manually to the [Drupal Accelerator Site](https://dev-idfive-drupal-accelerator.pantheonsite.io/).

## Staging Site

The library can be viewed on our [staging site](https://staging2.idfive.com/idfive-pattern-lab-starter/public/?p=pages-welcome) — **username and password are both `guest`**.

## Download/Getting Started

To download the starter [visit the Bitbucket Repo Downloads - Tags](https://bitbucket.org/idfivellc/idfive-pattern-lab-starter/downloads/?tab=tags) and under "Download", select a zip file of the latest tag. Downloading this way as opposed to cloning the repo will remove the git tracking (so it can be connected to the new project) and ensure that the latest intended version is pulled (new versions tagged when ready for production).

- [Official Pattern Lab documentation](https://patternlab.io/)
- Using the Node version of pattern lab - [github](https://github.com/pattern-lab/

## Interface

patternlab-node). The site navigation is typically on the left side of the page (it can be moved to the top by selecting "switch layout", but the left side is the default). There are three main (iinitially collapsed) sections:

- **Components** is a list of all available components - not in a page context
- **Pages** contains fully built out pages, this is typically where review occurs

## Installation

In a terminal window at the root of the pattern lab starter - run the following commands:

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
- **CSS** contains the scss partial files, compiled into `index.scss`.
  - **components** contain a scss partial corresponding to each individual compoennt
  - **core** contains base, layout, functions, mixins, variables, placeholder-seclectors and typography scss partials
  - **index.scss** pulls all partial files in, as well as linking to third-party library css if needed (node_module directories)
  - **pattern-scaffolding.css** is only in use for the pattern lab directory if custom styles are needed (namely the color palettes in core > colors)
  - **print.css** is called solely for print media, the starter can be used as a base - to be customized for each site
- **Fonts** is empty by default (Google Fonts are linked to in `_head.twig` for the sarter version), but local fonts can be added to this directory
- **Images** contains all starter images, as well as icons and svgs
- **JS** contains all typescript modules:
  - **components** contains individual modules for respective components (when required for functionality)
  - **utilities** contains helpful accessibility functions that can be used to simply certain tasks
  - **main.ts** imports all functions and calls init functions for each (this file gets compiled into one on build)


## Data

### Component Data

Data on the component level is structured in stored in the same directory as the component's `twig` file. For example, the button-set component's twig template (at `source/_patterns/components/buttons-links/button-set.twig`):

```html
<div class="button-set">
  <ul>
    {% for button in button_set.buttons %}
    <li>{% include "@components/buttons-links/button.twig" with button %}</li>
    {% endfor %}
  </ul>
</div>
```

**Note:** as seen in the example, components can be nested within other components

The corresponding component data can be found in json file in the same directory at `source/_patterns/components/buttons-links/button-set.json`:

```json
{
  "button_set": {
    "buttons": [
      {
        "button": {
          "text": "Button One",
          "url": "https://idfive.com/"
        }
      }
      // rest of json data
    ]
  }
}
```

The json data object should be giving a name similar to the component ("button-set" in this case), in order to call it properly when included on a page.

### Page Data

#### General Page Data

Each page also similarly a corresponding json file. The Kitchen Sink page (`source/_patterns/pages/kitchen-sink.twig`) data is in the same directory (`source/_patterns/pages/kitchen-sink.json`). The json file starts with:

```json
{
  "title": "Kitchen Sink",
// rest of json data
```

- The title corresponds to the `<title>` attribute
- The body class will get applied so that custom template/page styling can be accomplished.

#### Including Components on a Page With Unique Data

- To include a component on a page the syntax is `{% include "@path-to-component" with name_of_data %}`
- For example - calling the button-set component:

```html
{% include "@components/buttons-links/button-set.twig" with
kitchen_sink_button_set %}
```

- The `with` portion allows for a unique instances of the data (so that multiple instances can be called with different data), give it a logical name (it can be the same name as the component itself - but depending on the context can be confusing)
- In the Kitchen Sink json file, this would appear as:

```json
{
  "title": "Kitchen Sink",
  //  other json data
  "kitchen_sink_button_set": {
    "button_set": {
      "buttons": [
        {
          "button": {
            "text": "Button One",
            "url": "https://idfive.com/"
          }
        },
        {
          "button": {
            "text": "Button Two",
            "url": "https://idfive.com/"
          }
        }
      ]
    }
  }
  // rest of json data
}
```

## Variants (Page & Component)

Pages and components can have variants displayed without duplicating the twig file. This concept is referred to as a psuedo-pattern in the [Pattern Lab documentation](https://patternlab.io/docs/using-pseudo-patterns/). The syntax is:

```html
patternName~pseudo-pattern-name.json
```

An example in our library is the hero at `source/_patterns/components/hero/hero.twig`, which has variations (with and without image, with and without subnav, and all combinations). The hero json file outputs a subnav if it is present - so to output this in Pattern Lab a json file called `hero~no-subnav.json` is created in the same directory at `source/_patterns/components/hero/hero~no-subnav.json`, with an empty subnav:

```json
{
  "hero": {
    "title": "Hero Title - No Subnav",
    "subnav": {
      "subnav": {
        "items": []
      }
    }
  }
}
```

This can also be replicated at the page level - the Kitchen Sink pages are set up to display these hero variations using the same concept. The file `kitchen-sink~hero-no-image.json` contains:

```json
{
  "kitchen_sink_hero": {
    "hero": {
      "title": "Hero Title - No Image",
      "image": {
        "desktop_src": "",
        "mobile_src": "",
        "alt": ""
      }
    }
  }
}
```