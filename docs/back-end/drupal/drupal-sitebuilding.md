# Drupal Site Building

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

## Custom Module/Theme Development

### Theme/Module best practices

#### Admin UX

When adding/arranging fields on entities and forms, give careful consideration to how things are ordered/labeled/layed out. It is extremely important that the admin UX be as clean, and straightforward as possible for admins to use the site effectively.

- Consider using field groups in display to group fields into collapsed details/fieldsets.
- Consider setting up tabs for large, complex entities, with the tabs corresponding to naming seen on frontend sections.

#### Help Text

Help text is normally aimed at admins and site builders, and is necessary to provide a great admin experience. It is easy to overlook this, but it is the key to providing a great admin experience, and sometimes even for developers to more readily understand what is going on when revisiting older projects.

- All custom modules should, at a minimum utilize a `hook_help()` to show the modules (properly formatted) README.md.
- Consider adding help text/etc to entity add/edit forms to explain how things work, and best practices.
- Consider adding markup fields to entities (like a homepage) to explain how things "not controlled within the form" work, like feeds from views and external API's. For example: "The blogs feed displays the 3 most recent blog posts tagged with X".
- [drupal help text standards](https://www.drupal.org/docs/develop/documenting-your-project/help-text-standards)

##### Hook_help example

Displays the README.md as for the help page of a module. Loads markdown module for better formatting if present.

```php
<?php

/**
 * @file
 * My custom module file.
 */

use Drupal\Core\Routing\RouteMatchInterface;

/**
 * Implements hook_help().
 *
 * @inheritdoc
 */
function MY_MODULE_help($route_name, RouteMatchInterface $route_match) {
  switch ($route_name) {
    case 'help.page.MY_MODULE':
      $text = file_get_contents(dirname(__FILE__) . "/README.md");
      if (!\Drupal::moduleHandler()->moduleExists('markdown')) {
        return '<pre>' . $text . '</pre>';
      }
      else {
        // Use the Markdown filter to render the README.
        $filter_manager = \Drupal::service('plugin.manager.filter');
        $settings = \Drupal::configFactory()->get('markdown.settings')->getRawData();
        $config = ['settings' => $settings];
        $filter = $filter_manager->createInstance('markdown', $config);
        return $filter->process($text, 'en');
      }
  }
  return NULL;
}
```

##### Hook_field_WIDGET_TYPE_paragraphs_form_alter

Provides customized help text for a custom paragraphs module, so that you may point clients in the right direction and provide tips, best practices, and context. To note the following only works with the new paragraphs display, if using legacy, you will need to change to the appropriate widget type in the following hook.

```php
/**
 * Implements hook_field_WIDGET_TYPE_paragraphs_form_alter().
 *
 * Adds helper text to the paragraph.
 */
function MY_MODULE_field_widget_paragraphs_form_alter(&$element, &$form_state, $context) {
  if ($element['#paragraph_type'] == 'MY_PARAGRAPH') {
    // Tips text from idfive.
    $markup = '<h3>Do:</h3><ul>';
    $markup .= '<li><strong>Use blockquotes to break up long copy.</strong> A brief quote can provide visual interest and offset larger text blocks.</li>';
    $markup .= '<li><strong>Use plain text.</strong> Avoid including links or other styled elements.</li>';
    $markup .= '</ul>';
    $markup .= '<h3>Do Not:</h3><ul>';
    $markup .= '<li><strong>Use an overly long quote.</strong> Often block quotes use font sizes/weights that can be overwhelming if used for copy that is very long.</li>';
    $markup .= '<li><strong>Place a blockquote as the last element on the page.</strong></li>';
    $markup .= '</ul>';
    $markup .= '<p><a target="_blank" href="/admin/help/MY_MODULE">My Module Help</a></p>';
    $element['MY_PARAGRAPH_tips'] = [
      '#type' => 'details',
      '#title' => t('MY_PARAGRAPH Content Tips'),
      '#weight' => -1000,
    ];
    $element['MY_PARAGRAPH_tips']['#markup'] = $markup;
  }
}
```

#### Libraries

Most times, any custom css/js should be attached globally. There are a few instances where this may not be desireable, for instance if there were extremely large css/js files that only ran one specific function on specific pages, like a homepage.

##### Global, via a .info.yml

```yml
name: MY_THEME
type: theme
description: An amazingly awesome theme I just built.
core: 8.x
libraries:
  - MY_THEME/something-homepage-specific
```

##### Via a hook_preprocess

Choose this if you want to add to pages of multiple, types, maybe based on a URL path or the like.

```php
function MY_THEME_preprocess_page(&$variables) {
  // Example of a check here, for front page, but could be anything.
  if ($variables['is_front'] == TRUE) {
    $variables['#attached']['library'][] = 'MY_THEME/something-homepage-specific';
  }
}
```

##### In twig template

Use this if the library in question is only needed on this particular template, and no others. Specifically helpful for things like custom paragraphs.

```twig
{# only attach our library if this is node 1 #}
{% if node.id == 1 %}
  {{ attach_library('MY_THEME/something-homepage-specific') }}
{% endif %}
```

#### Javascript variables from the server

Pass a dynamic value from the server (PHP) to client-side JavaScript using the drupalSettings library. Sometimes this is needed in order for some custom JS to run, but in general, shy away if possible.

```php
function MY_THEME_page_attachments_alter(array &$page) {
  // We're going to pass along the user's display name to our front-end code.
  $account = \Drupal::currentUser();
  if ($account->isAuthenticated()) {
    $page['#attached']['library'][] = 'MY_THEME/my-custom-js';
    // We pass along our dynamic value.
    // This will then be available in our JavaScript as drupalSettings.friendly.name.
    $page['#attached']['drupalSettings']['MY_THEME']['name'] = $account->getDisplayName();
  }
}
```

In this case `drupalSettings.MY_THEME.name` will now be available to the JavaScript file in our asset library.

```js
(function (Drupal) {
  if (drupalSettings.MY_THEME.name) {
    var siteName = document.getElementsByClassName('site-branding__name')[0];
    siteName.getElementsByTagName('a')[0].innerHTML = '<h1>Howdy, ' + drupalSettings.MY_THEME.name + '!</h1>';
  }
})(Drupal);
```

#### Images

##### Media Module

Core media module should be used for all D8 projects, unless there is a good reason not to.

- The [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs) module ships with several entity browsers. These should be used as the form display choice for media fields, as it narrows down by type, as well as adds an upload option.

##### Image Optimize

Use [ImageAPI Optimize](https://www.drupal.org/project/imageapi_optimize) ([re.Smush.it](https://www.drupal.org/project/imageapi_optimize_resmushit), [TinyPNG](https://www.drupal.org/project/imageapi_optimize_tinypng) or other services) to optimize images as they are uploaded and used in image styles. It is important that these be set up/enabled early so that all images uploaded can benefit from optimization throughout the build process.

##### Focal Point

Use the [Focal Point](https://www.drupal.org/project/focal_point) module on projects when a single image may be used across multiple image styles/crops. Once installed:

- Change the widget of the media:image entity form display (`/admin/structure/media/manage/image/form-display`) to "Image (Focal Point)".
- For any image style you wish to use this feature on, adjust the effects to use either "Focal Point Crop" or "Focal Point Scale and Crop".
- Now when adding a media:image entity, you will be presented with the focal point thumbnail where you may define a focal point, and any image styles throughout the site that use a focal point effect, should be available via the "preview" link.

##### Lazy Loading

If the build uses the ICL, consider enabling the [idfive Lazyload](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs/src/8.x-2.x/modules/idfive_lazyload/) module. Note: The lazyload JS must be in the theme for this to wok.

##### Image Styles

Image styles should be utilized for all images being output in a template. This allows us to set parameters for size/etc, as well as ImageApi Optimize.

##### Responsive Images

The core responsive images module helps us to define different image styles for different breakpoints. This does require custom config setup of breakpoints. See [Working with Breakpoints](https://www.drupal.org/docs/8/theming-drupal-8/working-with-breakpoints-in-drupal-8). This requires a bit of setup so should be defined/used for the larger hero images/etc, but may not make sense for "All Images".

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

#### Metatags

Default metatags (from the metatags module) are usually fine. One caveat is the og:image tag.

- Consider adding a default social share image for the entire site.
- Consider overriding that, or adding to, for content like news and events.
- Since we use media module, utilize a token within the og:image metatag, like: `[node:MEDIA_FIELD_ON_NODE:entity:field_media_image:DESIRED_IMAGE_STYLE:url]`
- Multiple images may be added in this field, and the particular service (twitter/facebook/etc) will choose the one it wants, usually the largest. For this reason, be sure the chosen image style of the media field is physically larger than the site default share image.
- A complete example for the og:image metatag field, could look like: `/themes/custom/MY_AWESOME_THEME/social/MY_AWESOME_SOCIAL_SHARE_DEFAULT.jpg, [node:field_featured_image:entity:field_media_image:large:url]`.

#### View Modes

How an entity (such as content, a user , etc) is displayed, depends on the context in which it is shown. This context is known as a view mode. Examples of view modes for one content type (article) is:

- Full article
- Teaser article view
- Card article view

The main idea being, in combined views of content, you can now say "show me 3 articles that match XYZ, and display as cards". Now, when using  things like views, we don't need to customize the output, we simply tell it which view mode to display.

##### Adding view modes

- View modes can be added `/admin/structure/display-modes/view`. Ideally, the names should span content types, so that something like a "card view" can be used for articles, events, etc.
- On `/admin/structure/types/manage/MY_ENTITY/display`, under "custom display settings", choose the desired view modes.
- Configure the display of each view mode, for each desired entity.

##### View mode templates

Each view mode can get its own template within the theme. Generally, we prefer to group them by entity and bundle, so that all view modes for a particular entity/bundle are in the same folder within the theme. The naming convention is `ENTITY--BUNDLE--VIEW-MODE.html.twig`.

```
templates
  node
    NODE-TYPE
      node--NODE-TYPE--card.html.twig
      node--NODE-TYPE--teaser.html.twig
      node--NODE-TYPE.html.twig
```

#### Regions and blocks

In general, we prefer not to use blocks excessively in drupal sites. The blocks we generally use, are limited mainly to:

- Menu Blocks
- Breadcrumbs
- Main Content
- Messages
- Admin tabs (though the admin menu edit tab mods in the idfive theme mainly eliminate this need)

We find that setting custom content (views/lists/related articles/etc) is better accomplished at the entity_preprocess level, and added to the templates, per entity type, where needed, rather than relying on lots of blocks.

With that in mind, since regions are mainly to hold blocks, regions within the theme are usually created in regards to where breadcrumbs, or menus need to be. As an example, the following regions are set in the [idfive base theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme), and are a good example:

- primary_menu: 'Primary menu'
- secondary_menu: 'Secondary menu'
- utility_menu: 'Utility menu'
- breadcrumbs: 'Breadcrumbs'
- page_sidebar: 'Page Sidebar'
- content: 'Content'
- footer_menu: 'Footer menu'

It is also worth noting, that the [idfive base theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) includes preprocess functions to make these regions available to the node template as well, so things like the sidebar, can be added in the node template, rather than page template, to simplify design ingestion.

#### Scoping

In general, we want to scope most custom elements to the parent theme/module/etc, to include, but not limited to:

- Fields
- Functions
- Variables

##### Fields

Fields should be scoped to the controlling entity. Fields can be shared in certain instances (like between sub-modules), but in that instance would be scoped to the parent module.
For example, a text field used by the "CLIENT Paragraphs" module, could be scoped as machine names:

- `field_cp_text`
- `cp_text`
- `client_paragraphs_text`

##### Functions

Custom functions belonging to modules or themes should be scoped as "underscore + module/theme name + description".
For example, custom functions in the "CLIENT Paragraphs" module, could be scoped as:

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

If core views is used as a standalone, or with search API, be sure to crate the display type as "block" or similar (not page), so that these views can be inserted into standard KS pages using the ip_views_embed widget, thus allowing for custom text, headers, content, etc as well as the listing.

##### If the view content is local does not require filters

- Consider using core views module.
- Consider a custom EntityQuery (with caching).
- Consider using the hook_preprocess for the entity in question to add these programmatically rather than using something like blocks.

###### Views example

This shows a simple example of adding a created view to a page, after conditionally checking if it has results. Since views are already cached, there is no reason to add additional caching here. In this example,
we pass along the NID of the node as an additional var to the view, which is set up as a conditional filter in the view.

This then makes the variable  MY_VARIABLE  available in the node--bundle-name.html.twig template, or similar, which is the rendered view.

```php
// From within hook_preprocess of choice
$variables['MY_VARIABLE'] = _MY_MODULE_test_view_for_results($variables, 'VIEW_MACHINE_NAME', 'VIEW_DISPLAY_MACHINE_NAME', $nid);

/**
 * Test views to see if they have results before displaying.
 * Function takes the variables array, the name of the view, the display machine name (ie. 'page_1' or 'block_1') and
 * any arguments to pass to the view (contextual filters/etc).
 */
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
// From within hook_preprocess of choice
$variables['MY_VARIABLES'] = _MY_MODULE_get_things();

// Function to get nodes of type CONTENT_TYPE and sort by title
function _MY_MODULE_get_things() {
  if ($cache = \Drupal::cache()->get('MY_MODULE:get_things')) {
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
      \Drupal::cache()->set('MY_MODULE:get_things', $result, time() + 7200);
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

This example passes a unique ID for the feed, but you would also likely pass parameters from custom fields/etc, to be able to reuse calls to the endpoint from multiple places. To note, external API calls may better be accomplished by writing a service, but the example below also works.

```php
// From within hook_preprocess of choice
$variables['MY_VARIABLES'] = _MY_MODULE_get_stuff('UNIQUE_ID_FOR_THIS_CALL');

// Function to test views to see if they have results before displaying
function _MY_MODULE_get_stuff($id) {
  if ($cache = \Drupal::cache()->get('MY_MODULE:get_stuff--' . $id)) {
    return $cache->data;
  }
  else {
    $url = "https://stuffendpoint/that/i/want";
    $result = file_get_contents($url);
    $result = json_decode($result, TRUE);
    $result = $result['data'];
    if ($result) {
      \Drupal::cache()->set('MY_MODULE:get_stuff--' . $id, $result, time() + 7200);
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

#### Pathauto

When setting up aliases, it is sometimes required to check the "generate alias" box on existinng content. The easiest way to do so is via a DB update.

```
 use Drupal\pathauto\PathautoState;

 /**
 * Update pathauto aliases for all Blog Posts.
 */
function MY_MODULE_update_8001() {

    $entity_type = 'node';
    $entity_storage = \Drupal::entityTypeManager()->getStorage($entity_type);
    $nodes = $entity_storage->loadMultiple();

    foreach($nodes as $node) {
        if($node->bundle() == 'MY_BUNDLE') {
            $node->path->pathauto = PathautoState::CREATE;
            $node->save();
        }
    }

}
```

### Prepping to ship/launch

Run through the entire idfive launch checklist for any site being launched by us. Additionally, consider the following:

#### Dependencies

Does your custom module rely on other custom or contrib modules?

```yml
dependencies:
  - paragraphs
  - SOME_OTHER_CUSTOM_MODULE
  - link_attributes
```

#### Versioning

If committing custom modules/themes for eventual composer builds, versioning must be enacted on the repo that deploys to composer. When ready to deploy, create a tag in github up one version from previous, with the starting version being 8.1.0:

- Minor versions (non breaking changes): 8.1.1, 8.1.2, etc.
- Major versions (breaking changes): 8.2.0, 8.3.0, etc.

#### Packagist

If this module/theme is to be controlled via composer/packagist:

- Ensure a proper composer.json is created in the repo.
- Create a package for it on packagist.org
- Be sure a client contact/it dept/etc has access to the packagist repo as well
- Set webhook to deploy to packagist on push, wherever the repo is located.
- Note any required drupal modules in the "require" section so they also get added via composer.
- Be sure to tag a version number when ready to deploy or update, see versioning notes, but for D8 we prefer 8.1.0, 8.1.1, etc.

##### Example composer.json

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

#### PHP CodeSniffer/Drupal Coder

Before shipping custom themes and modules, run [drupal coder](https://www.drupal.org/node/1587138) in order to fix formatting issues/etc, and to ensure we ship code that matches the drupal coding standard.

- Install [drupal coder](https://www.drupal.org/node/1419988) globally
- See [coder example usage](https://www.drupal.org/node/1587138) for ideas on how to format/check custom code.
- Use phpcs: `phpcs --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,css,info,txt,md MY_CUSTOM_MODULE` to check
- And then automated fixes via phpcbf: `phpcbf --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,css,info,txt,md MY_CUSTOM_MODULE`
- Be sure to double check code valitity/etc.
- Use `--ignore=static` to ignore front end code/etc in a theme's static folder.
- See [Advanced Usage](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage) for ignoring directories/etc.

#### Drupal Check

Install [drupal-check](https://github.com/mglaman/drupal-check), which will give you the ability to run checks on custom modules/code to ensure you are not using any depreciated D8 functions that will be removed/etc. This static analysis tool will check for correctness (e.g. using a class that doesn't exist), deprecation errors, and more.

- Install locally in lando via composer. `lando composer require mglaman/drupal-check --dev`
- Then run via `lando php vendor/bin/drupal-check PATH/TO/YOUR/CUSTOM/CODE`.

##### Examples

- `lando php vendor/bin/drupal-check -d web/modules/custom/umd_terp_base` Check for depreciations in custom module
- `lando php vendor/bin/drupal-check -d web/themes/custom/umd_terp` Check for depreciations in custom theme

#### ESLint

Generally speaking, we do not usually care about using ESLint for most JS files, as we normally have these going into a theme-based JS file, which has its own linters/builds/etc. If you do need to write vanilla D8 JS for a module, though, this can be a very useful tool to help get JS files to Drupal standards. ESLint is in core, you just need to install it in order to run it against specified files.

- `cd core && yarn install`
- `core/node_modules/.bin/eslint PATH_TO_YOUR_CUSTOM_JS.js`
- `core/node_modules/.bin/eslint PATH_TO_YOUR_CUSTOM_JS.js --fix`
