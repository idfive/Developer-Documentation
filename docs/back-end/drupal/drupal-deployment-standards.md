---
description: Launch preparation, code quality tools, and deployment standards for Drupal projects
---

# Drupal Deployment Standards

## Prepping to Ship/Launch

Run through the entire idfive launch checklist for any site being launched by us. Additionally, consider the following:

## Dependencies

Does your custom module rely on other custom or contrib modules?

```yml
dependencies:
  - paragraphs
  - SOME_OTHER_CUSTOM_MODULE
  - link_attributes
```

## Versioning

If committing custom modules/themes for eventual composer builds, versioning must be enacted on the repo that deploys to composer. When ready to deploy, create a tag in github up one version from previous, with the starting version being 8.1.0:

- Minor versions (non breaking changes): 8.1.1, 8.1.2, etc.
- Major versions (breaking changes): 8.2.0, 8.3.0, etc.

## Packagist

If this module/theme is to be controlled via composer/packagist:

- Ensure a proper composer.json is created in the repo.
- Create a package for it on packagist.org
- Be sure a client contact/it dept/etc has access to the packagist repo as well
- Set webhook to deploy to packagist on push, wherever the repo is located.
- Note any required drupal modules in the "require" section so they also get added via composer.
- Be sure to tag a version number when ready to deploy or update, see versioning notes, but for D8 we prefer 8.1.0, 8.1.1, etc.

### Example composer.json

```json
{
  "name": "idfive/idfive_paragraphs",
  "type": "drupal-module",
  "description": "This module is designed to provide base idfive kitchen sink widgets.",
  "keywords": ["Drupal"],
  "homepage": "https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs",
  "license": "GPL-2.0+",
  "authors": [
    {
      "name": "Dan Rogers",
      "homepage": "https://www.drupal.org/u/dan_rogers",
      "role": "Maintainer"
    }
  ],
  "require": {
    "drupal/external_data_source": "*",
    "drupal/link_attributes": "*",
    "drupal/paragraphs": "*",
    "drupal/tablefield": "*",
    "drupal/viewsreference": "*",
    "drupal/webform": "*"
  },
  "support": {
    "issues": "https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs/issues",
    "source": "https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs"
  }
}
```

## Code Quality Tools

### PHP CodeSniffer/Drupal Coder

Before shipping custom themes and modules, run [drupal coder](https://www.drupal.org/node/1587138) in order to fix formatting issues/etc, and to ensure we ship code that matches the drupal coding standard.

- Install [drupal coder](https://www.drupal.org/node/1419988) globally
- See [coder example usage](https://www.drupal.org/node/1587138) for ideas on how to format/check custom code.
- Use phpcs: `phpcs --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,css,info,txt,md MY_CUSTOM_MODULE` to check
- And then automated fixes via phpcbf: `phpcbf --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,css,info,txt,md MY_CUSTOM_MODULE`
- Be sure to double check code validity/etc.
- Use `--ignore=static` to ignore front end code/etc in a theme's static folder.
- See [Advanced Usage](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage) for ignoring directories/etc.

### Drupal Check

Install [drupal-check](https://github.com/mglaman/drupal-check), which will give you the ability to run checks on custom modules/code to ensure you are not using any deprecated D8 functions that will be removed/etc. This static analysis tool will check for correctness (e.g. using a class that doesn't exist), deprecation errors, and more.

- Install locally in lando via composer. `lando composer require mglaman/drupal-check --dev`
- Then run via `lando php vendor/bin/drupal-check PATH/TO/YOUR/CUSTOM/CODE`.

#### Examples

- `lando php vendor/bin/drupal-check -d web/modules/custom/umd_terp_base` Check for deprecations in custom module
- `lando php vendor/bin/drupal-check -d web/themes/custom/umd_terp` Check for deprecations in custom theme

### ESLint

Generally speaking, we do not usually care about using ESLint for most JS files, as we normally have these going into a theme-based JS file, which has its own linters/builds/etc. If you do need to write vanilla D8 JS for a module, though, this can be a very useful tool to help get JS files to Drupal standards. ESLint is in core, you just need to install it in order to run it against specified files.

- `cd core && yarn install`
- `core/node_modules/.bin/eslint PATH_TO_YOUR_CUSTOM_JS.js`
- `core/node_modules/.bin/eslint PATH_TO_YOUR_CUSTOM_JS.js --fix`

## Related Documentation

- [Drupal Site Building](./drupal-sitebuilding.md) - Core site building practices
- [Drupal Custom Development](./drupal-custom-development.md) - Development patterns and best practices
- [Drupal Content Architecture](./drupal-content-architecture.md) - Views, queries, and content patterns
- [Drupal Media & Images](./drupal-media-images.md) - Media handling and image optimization
