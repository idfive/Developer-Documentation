# Drupal 8 Site Building

## General Requirements/Best practices

### settings.php

- Always remove commented out example code when possible. This example code is always still available at default.settings.php, but removing it from settings.php makes the file more condense, and it is easier to see what is actually being used.
- Always, if needed, include a settings.local.php, so that your local dev env can run differently: `if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}`
- Be sure `docroot/sites/*/settings.local.php` is in the .gitignore.
- Mostly, this will allow caches/aggregation/etc to be disabled for easier developing.
- For things like acquia multisites, this can also be set in settings.php in a conditional block, as an include to development.settings.php, so that all local sites get it.

#### Example settings.php acquia multisite conditional

`
// Check/modify any acquia environment specific modifications needed.
if (isset($_ENV['AH_SITE_ENVIRONMENT'])) {
  // Acquia specific stuff
}
else {
  // Do something for a non-Acquia-hosted application, ie, load local dev settings.
  if (file_exists($app_root . '/sites/development.settings.php')) {
    include $app_root . '/sites/development.settings.php';
  }
}
`

By loading in this way (globally for all local sites), all local dev sites get the more "dev env" settings, and you can still use settings.local.php for any actual local settings chages needed.

#### Example settings.local.php, or development.settings.php

`
<?php

// @codingStandardsIgnoreFile

/**
 * @file
 * Local development override configuration feature.
 */

assert_options(ASSERT_ACTIVE, TRUE);
\Drupal\Component\Assertion\Handle::register();

$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
$config['system.logging']['error_level'] = 'verbose';
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['page'] = 'cache.backend.null';
$settings['rebuild_access'] = TRUE;
$settings['skip_permissions_hardening'] = TRUE;
`

### services.yml

When possible, always add a development services.yml to the codebase. This will set up the local dev env to show twig templates/etc, and make it easier to develop.

- Be sure it is in the '/docroot/sites/development.services.yml' or similar, so it may be used acccross multisites.
- Be sure `$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';`, with the proper path, is set in the settings.local.php. For multisites, especially on acquia, this can also be set in development.settings.php.

#### Example development.services.yml

`
# Local development services.
#
# To activate this feature, follow the instructions at the top of the
# 'example.settings.local.php' file, which sits next to this file.
parameters:
  http.response.debug_cacheability_headers: true
  twig.config:
    debug: true
    auto_reload: true
    cache: false
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory
`

## idfive base theme

The idfive base theme is intetionally pretty bare bones, but provides us with lots of behind the scenes functions we need. This theme is designed to act as a parent theme, and should never be enabled directly. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for how to best use this theme, and how to quickly and efficiently spin up a child theme for this project.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive base theme, and creating your custom child theme will look like:

- `composer require idfive/idfive`
- `cd docroot/themes/custom/idfive/starterkits`
- `sudo bash generate_kit.sh` This will run a bash script, that prompts you for a human readable name, and a machine name for your custom child theme. From that, the script will generate a child theme, and install a fresh copy of the [idfive Component Libray](https://bitbucket.org/idfivellc/idfive-component-library) which is the prefered framework for all idfive projects.
- enable your new child theme.

You may need to adjust folders/etc as stated above, depending on the projects composer setup. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for more information.

### via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Add ICL Theme](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_theme.sh) script.

- `sh ~/Sites/_ial/drupal/general/partials/add_icl_theme.sh "YOUR CHILD THEME HR NAME" YOUR_CHILD_THEME_MACHINE_NAME`

## idfive ICL paragraphs module

The [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs) module, provides several common idfive ICL patterns as premade widgets, to add to a Kitchen Sink page.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive ICL Paragraphs widget is best done via composer:

- `composer require idfive/idfive_paragraphs`

## Recomended contrib modules

See the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) script, [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_modules.sh) for an up to date list of what idfive reccomends as a baseline.

### via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/enable_icl_modules.sh) script.

- `ssh ~/Sites/_ial/drupal/general/partials/add_icl_modules.sh`
- You may also then enable via `sh ~/Sites/_ial/drupal/general/partials/enable_icl_modules.sh`

## Custom Module/Theme Development

### Theme/Module best practices

#### Image Styles

#### View Modes

#### Field Scoping

#### Views/Lists


### Prepping to ship/launch

#### Versioning

If commiting custom modules/themes for eventual composer builds, versioning must be enacted on the repo that deploys to composer. When ready to deploy, create a tag in github up one version from previous, with the starting version being 8.1.0:

- Minor versions (non breaking changes): 8.1.1, 8.1.2, etc.
- Major versions (breaking changes): 8.2.0, 8.3.0, etc.

#### Packagist

If this module/theme is to be controlled via composer:

- Create a package for it on packagist.org
- Be sure a client contact/it dept/etc has access to the packagist repo as well
- Set webhook to deploy to packagist on push, wherever the repo is located.

#### PHP CodeSniffer/Drupal Coder

Before shipping custom themes and modules, run [drupal coder](https://www.drupal.org/node/1587138) in order to fix formatting issues/etc, and to ensure we ship code that matches the drupal coding standard.

- Install [drupal coder](https://www.drupal.org/node/1419988) globally
- See [coder example usage](https://www.drupal.org/node/1587138) for ideas on how to format/check custom code.
- Use phpcs: `phpcs --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,css,info,txt,md MY_CUSTOM_MODULE` to check
- And then automated fixes via phpcbf: `phpcbf --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,css,info,txt,md MY_CUSTOM_MODULE`
- Be sure to double check code valitity/etc.
- Use `--ignore=static` to ignore front end code/etc in a themes static folder.
- See [Advanced Usage](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage) for ignoring directories/etc.

#### Drupal Check

Install [drupal-check](https://github.com/mglaman/drupal-check), which will give you the ability to run checks on custom modules/code, to ensure you are not using any depreciated D8 functions that will be removed in D9/etc.

- Install globally via composer.
- Ensure the path or an alias is .bash_profile, ie `export PATH="$HOME/.composer/vendor/bin:$PATH"`
- Then run via `drupal-check PATH/TO/YOUR/CUSTOM/CODE`. To note, you may need to run this from outside a lando or other folders in order for the paths to not get wonky.
