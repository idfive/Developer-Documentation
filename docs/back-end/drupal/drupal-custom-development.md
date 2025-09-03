---
description: Custom module and theme development patterns and best practices for Drupal
---

# Drupal Custom Development

## Theme/Module Best Practices

### Admin UX

When adding/arranging fields on entities and forms, give careful consideration to how things are ordered/labeled/layed out. It is extremely important that the admin UX be as clean, and straightforward as possible for admins to use the site effectively.

- Consider using field groups in display to group fields into collapsed details/fieldsets.
- Consider setting up tabs for large, complex entities, with the tabs corresponding to naming seen on frontend sections.

### Help Text

Help text is normally aimed at admins and site builders, and is necessary to provide a great admin experience. It is easy to overlook this, but it is the key to providing a great admin experience, and sometimes even for developers to more readily understand what is going on when revisiting older projects.

- All custom modules should, at a minimum utilize a `hook_help()` to show the modules (properly formatted) README.md.
- Consider adding help text/etc to entity add/edit forms to explain how things work, and best practices.
- Consider adding markup fields to entities (like a homepage) to explain how things "not controlled within the form" work, like feeds from views and external API's. For example: "The blogs feed displays the 3 most recent blog posts tagged with X".
- [drupal help text standards](https://www.drupal.org/docs/develop/documenting-your-project/help-text-standards)

#### Hook_help example

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

#### Hook_field_WIDGET_TYPE_paragraphs_form_alter

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

## Libraries

Most times, any custom css/js should be attached globally. There are a few instances where this may not be desirable, for instance if there were extremely large css/js files that only ran one specific function on specific pages, like a homepage.

### Global, via a .info.yml

```yml
name: MY_THEME
type: theme
description: An amazingly awesome theme I just built.
core: 8.x
libraries:
  - MY_THEME/something-homepage-specific
```

### Via a hook_preprocess

Choose this if you want to add to pages of multiple, types, maybe based on a URL path or the like.

```php
function MY_THEME_preprocess_page(&$variables) {
  // Example of a check here, for front page, but could be anything.
  if ($variables['is_front'] == TRUE) {
    $variables['#attached']['library'][] = 'MY_THEME/something-homepage-specific';
  }
}
```

### In twig template

Use this if the library in question is only needed on this particular template, and no others. Specifically helpful for things like custom paragraphs.

```twig
{# only attach our library if this is node 1 #}
{% if node.id == 1 %}
  {{ attach_library('MY_THEME/something-homepage-specific') }}
{% endif %}
```

## JavaScript Variables from the Server

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

## View Modes

How an entity (such as content, a user , etc) is displayed, depends on the context in which it is shown. This context is known as a view mode. Examples of view modes for one content type (article) is:

- Full article
- Teaser article view
- Card article view

The main idea being, in combined views of content, you can now say "show me 3 articles that match XYZ, and display as cards". Now, when using  things like views, we don't need to customize the output, we simply tell it which view mode to display.

### Adding view modes

- View modes can be added `/admin/structure/display-modes/view`. Ideally, the names should span content types, so that something like a "card view" can be used for articles, events, etc.
- On `/admin/structure/types/manage/MY_ENTITY/display`, under "custom display settings", choose the desired view modes.
- Configure the display of each view mode, for each desired entity.

### View mode templates

Each view mode can get its own template within the theme. Generally, we prefer to group them by entity and bundle, so that all view modes for a particular entity/bundle are in the same folder within the theme. The naming convention is `ENTITY--BUNDLE--VIEW-MODE.html.twig`.

```text
templates
  node
    NODE-TYPE
      node--NODE-TYPE--card.html.twig
      node--NODE-TYPE--teaser.html.twig
      node--NODE-TYPE.html.twig
```

## Regions and Blocks

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

## Scoping

In general, we want to scope most custom elements to the parent theme/module/etc, to include, but not limited to:

- Fields
- Functions
- Variables

### Fields

Fields should be scoped to the controlling entity. Fields can be shared in certain instances (like between sub-modules), but in that instance would be scoped to the parent module.
For example, a text field used by the "CLIENT Paragraphs" module, could be scoped as machine names:

- `field_cp_text`
- `cp_text`
- `client_paragraphs_text`

### Functions

Custom functions belonging to modules or themes should be scoped as "underscore + module/theme name + description".
For example, custom functions in the "CLIENT Paragraphs" module, could be scoped as:

- `_client_paragraphs_format_into_list`
- `_client_paragraphs_get_external_news`
- `_client_paragraphs_get_external_events`

### Variables

Custom variables should be scoped to the module/theme that creates them, and the entity that uses them.
For example, if I were getting a list of events for the homepage, my variable for that could be scoped as:

- `cp_homepage_events`
- `client_paragraphs_events_for_homepage`

## Metatags

Default metatags (from the metatags module) are usually fine. One caveat is the og:image tag.

- Consider adding a default social share image for the entire site.
- Consider overriding that, or adding to, for content like news and events.
- Since we use media module, utilize a token within the og:image metatag, like: `[node:MEDIA_FIELD_ON_NODE:entity:field_media_image:DESIRED_IMAGE_STYLE:url]`
- Multiple images may be added in this field, and the particular service (twitter/facebook/etc) will choose the one it wants, usually the largest. For this reason, be sure the chosen image style of the media field is physically larger than the site default share image.
- A complete example for the og:image metatag field, could look like: `/themes/custom/MY_AWESOME_THEME/social/MY_AWESOME_SOCIAL_SHARE_DEFAULT.jpg, [node:field_featured_image:entity:field_media_image:large:url]`.

## Related Documentation

- [Drupal Site Building](./drupal-sitebuilding.md) - Core site building practices
- [Drupal Content Architecture](./drupal-content-architecture.md) - Views, queries, and content patterns
- [Drupal Media & Images](./drupal-media-images.md) - Media handling and image optimization
- [Drupal Deployment Standards](./drupal-deployment-standards.md) - Launch preparation and code quality
