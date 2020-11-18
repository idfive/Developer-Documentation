# Simple (per page) password protection in drupal

Often, we get requests for simple passwords per node, to limit access. As of the time of writing, no simple solution existed, to allow passwords on a per-node basis. This is a per entity feature, at it's simplest form. This could be adapted to multiple entities/etc however, and also set things like cookies/etc in the future, if needed.

## To enact

- Set a text field on entity toi hold the password entered by an admin.
- Adjust preproccess to check access, including things like role and if password set.
- Adjust twig template to display content if access granted, display password form if not.

### Preproccess the entity

```php
/**
 * Implements hook_preprocess_HOOK() for page templates.
 *
 * @param $variables
 */
function MY_MODULE_preprocess_node(&$variables) {
  $node = $variables['elements']['#node'];
  $view_mode = $variables['view_mode'];
  $bundle = $node->bundle();
  if ($bundle == 'MY_BUNDLE') {
    if ($view_mode == 'full') {
      $variables['view_access'] = _MY_MODULE_test_node_access($node);
    }
  }
}

/**
 * Simple custom function to check node access.
 */
function _MY_MODULE_test_node_access($node) {
  $view_access = TRUE;
  $password = $node->MY_PASSWORD_TEXT_FIELD->value;
  // If password is not set, assume no access restrictions.
  if (isset($password)) {
    // Do not require password for authenticated users.
    if (\Drupal::currentUser()->isAnonymous()) {
      $password_entered = \Drupal::request()->request->get('password');
      if($password !== $password_entered) {
        $view_access = FALSE;
      }
    }
  }
  return $view_access;
}
```

### The entity twig template

- Add an if/else to the entity twig template in order to show/hide general content.
- If denied, provide simple form, that submits to same page, so we can get the post variable in the preproccess on reload.
- Note the `{{ url }}` variable (should be in ICL theme), to resubmit form to the same page.

```twig
{% if view_access %}
  {# Content Here #}
{% else %}
  <h1>Not Authorized</h1>
  <p>Please submit the password you were provided with.</p>
  <form action="{{ url }}" method="POST" accept-charset="utf-8" class="form-inline">
    <input type="password" name="password" value="">
    <button type="submit">Submit</button>
  </form>
{% endif %}
```
