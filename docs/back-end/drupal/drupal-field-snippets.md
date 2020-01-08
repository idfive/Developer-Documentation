# Drupal Field Snippets

Helpful snippets for displaying different fields.

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
