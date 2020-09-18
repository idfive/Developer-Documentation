# Drupal Field Snippets

Helpful snippets for displaying different fields.

## Dates

### Format date in preproccess

```php
$variables['created'] = \Drupal::service('date.formatter')->format($variables['node']->getCreatedTime(), 'MY_DATE_FORMAT');
```

## Truncate

Use the built in [Unicode truncate function](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21Unicode.php/function/Unicode%3A%3Atruncate/8.2.x).

```php
use Drupal\Component\Utility\Unicode;

// Truncates a UTF-8-encoded string safely to a number of characters.
$truncate = Unicode::truncate($string, $max_length, $wordsafe, $add_ellipsis, $min_wordsafe_length);

$truncate = Unicode::truncate($MY_STRING, 200, TRUE, TRUE, 5);
```

## Hiding fields/sections/whatever using a boolean field

Sometimes it in necessary to use a boolean to hide/show different parts of a page. This can be accomplished by adding a field check in the proper entity hook (node/paragraph/whatever), and creating a custom variable. In this example we added a boolean that says "Hide something" to a node. In general, we prefer to say "hide something", rather than "show something", that way, all things can be displayed by default, and the feeling is more "this one instance is special and I am taking action to do something unique".

In hook_preprocess_node:

```php
$hide_this_thing_chosen = $variables['elements']['#node']->BOOLEAN_FIELD_ON_NODE_TO_CONTROL_HIDING->value;
$hide_this_thing = FALSE;
if ($hide_this_thing_chosen == TRUE) {
  $hide_this_thing = TRUE;
}
$variables['hide_this_thing'] = $hide_this_thing;
```

Then in twig template:

```twig
{% if not hide_this_thing %}
  Conditional code/etc here...
{% endif %}
```

## Term Reference

### Comma separated fancy, in node.html.twig

If, for whatever reason you do not wish to override a field template, links can be accessed in the entity template.

- If 1 value: My first term
- If 2 values: My first term and My second term
- If 3+ values: My first term, My second term, My third term and My fourth term

```twig
{% if content.MY_TERM_REFERENCE_FIELD %}
  {%- for item in content.MY_TERM_REFERENCE_FIELD['#items'] -%}
    {%- if loop.first -%}
      {{- item.entity.name.value -}}
    {%- elseif loop.last -%}
      {{- ' and ' ~ item.entity.name.value -}}
    {%- else -%}
      {{- ', ' ~ item.entity.name.value -}}
    {%- endif -%}
  {%- endfor -%}
{% endif %}
```

- If 1 value: My first term
- If 2 values: My first term,My second term
- If 3+ values: My first term, My second term, My third term, My fourth term

```twig
{% if content.MY_TERM_REFERENCE_FIELD %}
  {%- for item in content.MY_TERM_REFERENCE_FIELD['#items'] -%}
    {%- if loop.last -%}
      {{- item.entity.name.value -}}
    {%- else -%}
      {{-  item.entity.name.value ~ ', ' -}}
    {%- endif -%}
  {%- endfor -%}
{% endif %}
```

## Link

### With attributes, in node.html.twig

If, for whatever reason you do not wish to override a field template, links can be accessed in the entity template.

- For "Link with target" form field

```twig
{% if content.MY_LINK_FIELD %}
  {% for key, item in content.MY_LINK_FIELD if key|first != '#' %}
    <a href="{{ item['#url'] }}" class="btn" {% if item['#options'].attributes.target %} target="{{ item['#options'].attributes.target }}" {% endif %}>
      {{ item['#title'] }}
    </a>
  {% endfor %}
{% endif %}
```
