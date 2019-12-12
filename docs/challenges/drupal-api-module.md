# idfive Drupal custom API endpoint list module challenge

## Overview

A challenge for current, and potential idfive Backend developers, to assess knowledge and skills in Drupal custom module creation, as well as working with third party API's, and coding, formatting, and documenting to standard. Use both this documentation site of idfive preferences, and examples, as well as any relevant Drupal documentation desired to enact this module.

## Requirements

Create a custom Drupal 8 module that accomplishes the following:

- Interacts with [The Star Wars API](https://swapi.co/), to show a listing of 3 Star Wars films from `https://swapi.co/api/films` in any order you desire.
- These films should display in a block, that could be enabled on any region in a stock or custom theme.
- Each individual film view should include: title, episode_id, director, producer, and release_date fields at a minimum.
- release_date field to be formatted in F j, Y format (ie "January 1, 1977") on frontend.
- Conforms to current Drupal coding standards.
- Includes a Unit test for all custom functions.
- Includes all needed documentation per Drupal and idfive standards.
- Includes a composer.json, as if ready to deploy to packagist.
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.

## Deliverables

- Link to git repository containing the custom module only. Full commit history desired.
- Link to D8 site showing finished product. This can be a pantheon sandbox, or really anywhere else, just need to see your block in place.

## Code review criteria

- Any/All needed config should be within the module itself. You may manually assign the block to a region in your test site, but any field config/etc will need to be included.
- release_date field to be formatted in F j, Y format.
- All code should conform to [Drupal coding standards](https://www.drupal.org/docs/develop/standards/coding-standards).
- All custom functions should get a Unit test, at minimum.
- All custom code, and the module itself should be documented to standard.
- Includes a composer.json, so that this module could be deployed to packagist.
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.
- Module should be able to be enabled on any D8 site, by downloading module, enabling, and assigning the block to a region.
- No frontend styles needed, but bonus points if you do.
- Bonus points for Behavioral, or Functional tests.

## Time

We estimate this would likely take somewhere between 4-8 hours, skills dependant.
