# Drupal Site Building

This document covers the core site building practices and setup for Drupal projects. For more specialized topics, see the related documentation at the bottom of this page.

## General Requirements/Best Practices

### settings.php

- A more advanced and awesome way of setting up settings.php can be seen in [Multisite Config 201](https://vimeo.com/840496602/994689054a?share=copy).
- Always remove commented-out example code when possible. This example code is always still available at default.settings.php, but removing it from settings.php makes the file more condensed, and it is easier to see what is actually being used.
- Always, if needed, include a settings.local.php, so that your local dev env can run differently: `if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}`
- Be sure `docroot/sites/*/settings.local.php` is in the .gitignore.
- Mostly, this will allow caches/aggregation/etc to be disabled for easier developing.
- For things like acquia multi-sites, this can also be set in settings.php in a conditional block, as an include to development.settings.php, so that all local sites get it.

#### Example settings.php acquia multi-site conditional

```php
  // Check/modify any acquia environment-specific modifications needed.
  if (isset($_ENV['AH_SITE_ENVIRONMENT'])) {
    // Acquia specific stuff
  }
  else {
    // Do something for a non-Acquia-hosted application, ie, load local dev settings.
    if (file_exists($app_root . '/sites/development.settings.php')) {
      include $app_root . '/sites/development.settings.php';
    }
  }
```

By loading in this way (globally for all local sites), all local dev sites get more "dev env" settings, and you can still use settings.local.php for any changes needed to the local settings.

#### Example settings.local.php, or development.settings.php

```php
  <?php

  // @codingStandardsIgnoreFile

  /**
  * @file
  * Local development override configuration feature.
  */

  $settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
  $config['system.logging']['error_level'] = 'verbose';
  $config['system.performance']['css']['preprocess'] = FALSE;
  $config['system.performance']['js']['preprocess'] = FALSE;
  $settings['cache']['bins']['render'] = 'cache.backend.null';
  $settings['cache']['bins']['page'] = 'cache.backend.null';
  $settings['rebuild_access'] = TRUE;
  $settings['skip_permissions_hardening'] = TRUE;
```

### services.yml

When possible, always add a development services.yml to the codebase. This will set up the local dev env to show twig templates/etc, and make it easier to develop.

- Be sure it is in the '/docroot/sites/development.services.yml' or similar, so it may be used across multi-sites.
- Be sure `$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';`, with the proper path, is set in the settings.local.php. For multi-sites, especially on acquia, this can also be set in development.settings.php.

#### Example development.services.yml

```php
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
```

#### Redirects

If possible, high-level URL redirects should be performed via settings.php, not in .htaccess. This is because .htaccess has the potential to be overridden during core updates.

- All minor "old page to new page" redirects should be done via the redirect module.
- This is for high-level changes, like "x.mysite.edu and y.mysite.edu should all redirect to z.mysite.edu".
- Be sure to wrap in a check for drush, so that drush requests are not redirected, via `if (!function_exists('drush_main')) {}`.

##### Example on acquia

```php
// Check/modify any acquia environment-specific modifications needed.
if (isset($_ENV['AH_SITE_ENVIRONMENT'])) {
  switch ($_ENV['AH_SITE_ENVIRONMENT']) {
    case 'prod':
      if (!function_exists('drush_main')) {
        if ($_SERVER['HTTP_HOST'] != 'MYSITE.com') {
          header('HTTP/1.0 301 Moved Permanently');
          header('Location: https://' . 'MYSITE.com' . $_SERVER['REQUEST_URI']);
          exit();
        }
      }
      break;
  }
}
```

## idfive base theme

The idfive base theme is intentionally pretty bare bones, but provides us with lots of behind the scenes functions we need. This theme is designed to act as a parent theme and should never be enabled directly. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for how to best use this theme and how to quickly and efficiently spin up a child theme for any client project.

It uses the core stable theme as a base (Drupal assigns this automatically to all themes that do not specify a base). This is to ensure some level of backwards template compatibility throughout the Drupal life cycle.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive base theme, and creating your custom child theme will look like:

- `composer require idfive/idfive`
- `cd docroot/themes/custom/idfive/starterkits`
- `sudo bash generate_kit.sh` This will run a bash script that prompts you for a human-readable name and a machine name for your custom child theme. From that, the script will generate a child theme and install a fresh copy of the [idfive Component Libray](https://bitbucket.org/idfivellc/idfive-component-library), which is the preferred framework for all idfive projects.
- Enable your new child theme.
- You will need to adjust .gitignore in the idfive-component-library to track the "build" folder if no CI is used.

You may need to adjust folders/etc as stated above, depending on the project's composer setup. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for more information.

### idfive base theme via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Add ICL Theme](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_theme.sh) script.

- `sh ~/Sites/_ial/drupal/general/partials/add_icl_theme.sh "YOUR CHILD THEME HR NAME" YOUR_CHILD_THEME_MACHINE_NAME`

## idfive ICL paragraphs module

The [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs) module, provides several common idfive ICL patterns as pre-made widgets to add to a Kitchen Sink page.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive ICL Paragraphs widget is best done via composer:

- `composer require idfive/idfive_paragraphs`
- Add a paragraphs field to desired content, be sure the widget is "Paragraphs Experimental" in the form display.
- Be sure to exclude certain ICL widget types so marked in their descriptions from this field.

This is intentionally bare bones and simply designed to save time by adding a suite of common KS widgets from the ICL, such as tables accordions/etc.

### Extending ICL paragraphs

#### Section/widget wrappers

The preferred method for adding wrappers, ie, sections, or whatever, to ICL widgets, is with a field template override of the field used to add the widgets. This lets us change per content type/etc if needed.

For example, if KS widgets are being added via `field_basic_page_ks_widgets`, field--node--field_basic_page_ks_widgets.html.twig could have the following:

```php
{% for item in items %}
  {%
    set classes = [
      'section',
      'section-' ~ element['#bundle'],
      'section-' ~ item.content['#paragraph'].getType()
    ]
  %}
  <div class="{{ classes|join(' ') }}">
    {{ item.content }}
  </div>
{% endfor %}
```

This would result in an output of `<div class="section section-basic_page section-PARAGRAPH_TYPE">` as a wrapper for each widget.

## Recommended contrib modules

See the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) script, [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_modules.sh) for an up to date list of what idfive recommends as a baseline.

### Recommended contrib modules via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/enable_icl_modules.sh) script.

- `ssh ~/Sites/_ial/drupal/general/partials/add_icl_modules.sh`
- You may also then enable via `sh ~/Sites/_ial/drupal/general/partials/enable_icl_modules.sh`

## Related Documentation

For more specialized Drupal development topics, see these dedicated guides:

- **[Drupal Custom Development](./drupal-custom-development.md)** - Development patterns, best practices, libraries, view modes, regions, and scoping conventions
- **[Drupal Content Architecture](./drupal-content-architecture.md)** - Views, entity queries, custom API calls, caching strategies, and pathauto configuration  
- **[Drupal Media & Images](./drupal-media-images.md)** - Media module setup, image optimization, focal point, lazy loading, and responsive images
- **[Drupal Deployment Standards](./drupal-deployment-standards.md)** - Launch preparation, code quality tools (CodeSniffer, Drupal Check, ESLint), versioning, and Packagist setup
- **[Drupal Helpful Commands](./drupal-helpful-commands.md)** - Drush commands, patching, composer, and debugging techniques
