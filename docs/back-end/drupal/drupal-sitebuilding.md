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

```php
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
```

By loading in this way (globally for all local sites), all local dev sites get the more "dev env" settings, and you can still use settings.local.php for any actual local settings chages needed.

#### Example settings.local.php, or development.settings.php

```php
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
```

### services.yml

When possible, always add a development services.yml to the codebase. This will set up the local dev env to show twig templates/etc, and make it easier to develop.

- Be sure it is in the '/docroot/sites/development.services.yml' or similar, so it may be used acccross multisites.
- Be sure `$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';`, with the proper path, is set in the settings.local.php. For multisites, especially on acquia, this can also be set in development.settings.php.

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

## idfive base theme

The idfive base theme is intetionally pretty bare bones, but provides us with lots of behind the scenes functions we need. This theme is designed to act as a parent theme, and should never be enabled directly. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for how to best use this theme, and how to quickly and efficiently spin up a child theme for this project.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive base theme, and creating your custom child theme will look like:

- `composer require idfive/idfive`
- `cd docroot/themes/custom/idfive/starterkits`
- `sudo bash generate_kit.sh` This will run a bash script, that prompts you for a human readable name, and a machine name for your custom child theme. From that, the script will generate a child theme, and install a fresh copy of the [idfive Component Libray](https://bitbucket.org/idfivellc/idfive-component-library) which is the prefered framework for all idfive projects.
- enable your new child theme.
- You will need to adjust .gitignore in the idfive-component-library to track the "build" folder if no CI is used.

You may need to adjust folders/etc as stated above, depending on the projects composer setup. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for more information.

### idfive base theme via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Add ICL Theme](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_theme.sh) script.

- `sh ~/Sites/_ial/drupal/general/partials/add_icl_theme.sh "YOUR CHILD THEME HR NAME" YOUR_CHILD_THEME_MACHINE_NAME`

## idfive ICL paragraphs module

The [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs) module, provides several common idfive ICL patterns as premade widgets, to add to a Kitchen Sink page.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive ICL Paragraphs widget is best done via composer:

- `composer require idfive/idfive_paragraphs`
- Add a paragraphs field to desired content, be sure the widget is "Paragraphs Experimental" in the form display.
- Be sure to exclude certain ICL widget types so marked in their descriptions, from this field.

This is intentially bare bones, and simply designed to save time by adding a suite of common KS widgets from the ICL, such as tables accordions/etc.

## Recomended contrib modules

See the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) script, [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_modules.sh) for an up to date list of what idfive reccomends as a baseline.

### Recomended contrib modules via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/enable_icl_modules.sh) script.

- `ssh ~/Sites/_ial/drupal/general/partials/add_icl_modules.sh`
- You may also then enable via `sh ~/Sites/_ial/drupal/general/partials/enable_icl_modules.sh`

## Custom Module/Theme Development

### Theme/Module best practices

#### Images

##### Media

Core media module shopuld be used for all D8 projects, unless there is a good reason not to.

- The [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs) module ships with several entity browsers. These should be used as the form display choice for media fields, as it narrows down by type, as well as adds an upload option.

##### Image Optimize

Use [ImageAPI Optimize](https://www.drupal.org/project/imageapi_optimize) ([re.Smush.it](https://www.drupal.org/project/imageapi_optimize_resmushit), [TinyPNG](https://www.drupal.org/project/imageapi_optimize_tinypng) or other services) to optimize images as they are uploaded and used in image styles. It is important that these be set up/enabled early so that all images uploaded can benefit from optimization throughout the build proccess.

##### Responsive Images

The core responsive images module helps us to define different image styles for different breakpoints. This does require custom config setup of breakpoints. See [Working with Breakpoints](https://www.drupal.org/docs/8/theming-drupal-8/working-with-breakpoints-in-drupal-8). This requires a bit of setup so should be difined/used for the larger hero images/etc, but may not make sense for "All Images".

- Enable responsive image module.
- Compile a list of breakpoints, usually by looking at the static frontend.
- Create YOUR_THEME_OR_MODULE.breakpoints.yml utilizing the above, located in the root of the custom module or themes root folder, and clear cache.
- Add a new desired responsive image style
- Add new view mode for Image Media Type, as "Responsive Image", using added breakpoints.
- Set up display for image field in "Responsive Image" display to be Responsive Image, and the responsive image style you created.
- Add media field of type image to content, under Manage display, choose Rendered entity > Render as Responsive Image.

###### Example theme_name.breakpoints.yml

```yml
theme_name.imagesize.mobile:
  label: Mobile
  mediaQuery: ''
  weight: 0
  multipliers:
    - 1x
  group: THEME NAME Image Sizes
theme_name.imagesize.tablet:
  label: Tablet
  mediaQuery: 'all and (min-width: 560px) and (max-width: 900px)'
  weight: 1
  multipliers:
    - 1x
  group: THEME NAME Image Sizes
theme_name.imagesize.desktop:
  label: Desktop
  mediaQuery: 'all and (min-width: 901px)'
  weight: 2
  multipliers:
    - 1x
  group: THEME NAME Image Sizes
```

#### View Modes

#### Scoping

In general, we want to scope most custom elements to the parent theme/module/etc, to include, but not limited to:

- Fields
- Functions
- Variables

##### Fields

Fields should be scoped to the controlling entity. Fields can be shared in certain instances (like between submodules), but in that instance would be scoped to the parent module.
For example, a text field used by the "CLIENT Paragrahs" module, could be scoped as machine names:

- `field_cp_text`
- `cp_text`
- `client_paragraphs_text`

##### Functions

Custom functions belonging to modules or themes should be scoped as "underscore + module/theme name + description".
For example, custom functions in the "CLIENT Paragrahs" module, could be scoped as:

- `_client_paragraphs_format_into_list`
- `_client_paragraphs_get_external_news`
- `_client_paragraphs_get_external_events`

##### Variables

Custom variables should be scoped to the module/theme that creates them, and the entity that uses them.
For example, if I were getting a list of events for the homepage, my variable for that could be scoped as:

- `cp_homepage_events`
- `client_paragraphs_events_for_homepage`

#### Views/Lists

Preferably, all "lists of content" should use a view mode to display them. Ie, "show me all content of type X, displayed as view mode 'search result'"

##### If the view content is local and requires filters

- Consider using core views module, with an exposed form.
- If more complex, consider using core views along with [Search API module](https://www.drupal.org/project/search_api).
- For smaller, custom sortable views, consider a vue.js app, that interacts with the jsonapi endpoint or similar.

If core views is used as a standalone, or with search API, be sure to crate the display type as "block" or similar (not page), so that these views can be insterted into standard KS pages using the ip_views_embed widget, thus allowing for custom text, headers, content, etc as well as the listing.

##### If the view content is local does not require filters

- Consider using core views module.
- Consider a custom EntityQuery (with caching).
- Consider using the hook_preproccess for the entity in question to add these programatiaclly rather than using something like blocks.

###### Views example

This shows a simple example of adding a created view to a page, after conditionally checking if it has results.
Since views are already cached, there is no reason to add additional caching here. In this example,
we pass along the NID of the node as an additional var to the view, which is set up as a conditional filter in the view.

```php
// From within hook_preproccess of choice
$variables['MY_VARIABLE'] = _MY_MODULE_test_view_for_results($variables, 'VIEW_MACHINE_NAME', 'VIEW_DISPLAY_MACHINE_NAME', $nid);

// Function to test views to see if they have results before displaying
function _MY_MODULE_test_view_for_results($variables, $view, $tab, $var1 = null, $var2 = null) {
  $test = views_get_view_result($view, $tab, $var1, $var2);
  if(count($test) > 0) {
    return views_embed_view($view, $tab, $var1, $var2);
  }
  return null;
}

// Then in twig template
{% if MY_VARIABLE %}
  {{ MY_VARIABLE }}
{% endif %}
```

###### Custom cached node query

```php
// From within hook_preproccess of choice
$variables['MY_VARIABLES'] = _MY_MODULE_get_things();

// Function to get nodes of type CONTENT_TYPE and sort by title
function _MY_MODULE_get_things() {
  if ($cache = \Drupal::cache()->get('my_module_get_things')) {
    return $cache->data;
  }
  else {
    $storage = Drupal::getContainer()->get('entity_type.manager')->getStorage('node');
    $nids = $storage->getQuery();
    $nids = $nids->condition('type', 'CONTENT_TYPE')
      ->condition('status', 1)
      ->sort('title')
      ->execute();
    $result = $storage->loadMultiple($nids);
    if ($result) {
      \Drupal::cache()->set('my_module_get_things', $result, time() + 7200);
      return $result;
    }
    else {
      return NULL;
    }
  }
}
```

##### If the content is NOT local

- A custom call to an API/etc will be needed.
- Consider leveraging relevant composer based PHP libraries if possible
- Consider caching all results.

###### Custom API Call example

This example passses a unique ID for the feed, but you would also likely pass parameters from custom fields/etc, to be able to reuse calls to the endpoint from multiple places.

```php
// From within hook_preproccess of choice
$variables['MY_VARIABLES'] = _MY_MODULE_get_stuff('UNIQUE_ID_FOR_THIS_CALL');

// Function to test views to see if they have results before displaying
function _MY_MODULE_get_stuff($id) {
  if ($cache = \Drupal::cache()->get('my_module_get_stuff--' . $id)) {
    return $cache->data;
  }
  else {
    $url = "https://stuffendpoint/that/i/want";
    $result = file_get_contents($url);
    $result = json_decode($result, TRUE);
    $result = $result['data'];
    if ($result) {
      \Drupal::cache()->set('my_module_get_stuff--' . $id, $result, time() + 7200);
      return $result;
    }
    else {
      return NULL;
    }
  }
}

// Then in twig template
{% if MY_VARIABLES %}
  {% for stuff in MY_VARIABLES %}
    <h3>{{ stuff.title }}</h3>
    {{ stuff.text }}
  {% endfor %}
{% endif %}
```

### Prepping to ship/launch

Run through the entire idfive launch checklist for any site being launcehed by us. Additionally, consider the following:

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

#### ESLint

Generally speaking we do not usually care about using ESLint for most JS files, as we normally have these going into a theme based JS file, which has its own linters/builds/etc. If you do need to write vanilla D8 JS for a module though, this can be a very useful tool to help get JS files to drupal standards. ESLint is in core, you just need to install it in order to run it against specified files.

- `cd core && yarn install`
- `core/node_modules/.bin/eslint PATH_TO_YOUR_CUSTOM_JS.js`
- `core/node_modules/.bin/eslint PATH_TO_YOUR_CUSTOM_JS.js --fix`
