# idfive Drupal site/theme challenge

## Overview

A challenge for current, and potential idfive Backend developers, to assess knowledge and skills in Drupal custom theme creation, as well as working with configuration, modules, and PaaS platforms, to have a working shell site spun up. Use both this documentation site of idfive preferences, and examples, as well as any relevant drupal documentation desired to enact this theme. Note that this will be as of yet unstyled, as that is the next task, and will be somewhat ugly and broken-ish looking untill we do, this is fine.

## Requirements

Create a composer based, D9 site on Pantheon that accomplishes the following:

- Create a new D9 sandbox site in Pantheon, under the idfive team. Please name this "YOUR-NAME-drupal-sandbox".
- Create and install a new theme, that uses the [idfive component Library D8 theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme/src/8.x-1.x/) as a base theme. See the "Sub-Theming" section of the above repo for directions on the best way to create a client sub theme. Please name this sub theme "YOUR_NAME_sandbox".
- Install and enable the [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs/src/8.x-2.x/) module.
- Create a field on the default page content type that allows admins to add all the Paragrpahs added by the above module.
- Create a test page, and add all the above widgets to it, and set as the homepage.
- Create a seperate page for each widget, and add that page to the main navigation.

## Deliverables

- Link to pantheon site, as well as admin login credentials.

## Code review criteria

- All code should conform to [Drupal coding standards](https://www.drupal.org/docs/develop/standards/coding-standards).
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.
- Module should be able to be enabled on any D8 site, by downloading module, enabling, and assigning the block to a region.
- No frontend styles needed, but bonus points if you do.

## Time

We estimate this would likely take somewhere between 3-8 hours, skills dependant.
