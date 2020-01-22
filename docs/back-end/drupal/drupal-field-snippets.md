# Drupal Field Snippets

Helpful snippets for displaying different fields.

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

- If 1 value: My first term
- If 2 values: My first term and My second term
- If 3+ values: My first term, My second term, My third term and My fourth term

```twig
{% if content.field_hc_resource_category %}
  <div class="hc-article--categories">
    <h3>Categories</h3>
    {%- for item in content.field_hc_resource_category['#items'] -%}
      {%- if loop.first -%}
        {{- item.entity.name.value -}}
      {%- elseif loop.last -%}
        {{- ' and ' ~ item.entity.name.value -}}
      {%- else -%}
        {{- ', ' ~ item.entity.name.value -}}
      {%- endif -%}
    {%- endfor -%}
  </div>
{% endif %}
```

## Link

### With attributes, in node.html.twig

- For "Link with target" form field

```twig
{% if content.field_hc_resource_cta_link %}
  {% for key, item in content.field_hc_resource_cta_link if key|first != '#' %}
    <a href="{{ item['#url'] }}" class="btn" {% if item['#options'].attributes.target %} target="{{ item['#options'].attributes.target }}" {% endif %}>
      {{ item['#title'] }}
    </a>
  {% endfor %}
{% endif %}
```
