# Embedding Views in Pages

Views can be added to nodes using a preprocess function to add the render array for a view into the variables array.

The following example uses a function to test if the view returns results before setting the render array to a variable for a particular content type:

```php
function THEME_preprocess_node(&$variables)
{
    $node = $variables['elements']['#node'];
    $bundle = $node->bundle();
    $nid = $node->id();
    $variables['nid'] = $nid;
    if ($bundle == 'BUNDLE_NAME') { //Set variable only for this content type.
        // Grab View, passing contextual filter.
        $variables['embedded_view'] = _THEME_test_view_for_results($variables, 'view_machine_name', 'block_1', $nid);
    }
}

/**
 * Test views to see if they have results before displaying.
 */
function _THEME_test_view_for_results($variables, $view, $tab, $var1 = NULL, $var2 = NULL)
{
    $test = views_get_view_result($view, $tab, $var1, $var2);
    if (count($test) > 0) {
        return views_embed_view($view, $tab, $var1, $var2);
    }
    return NULL;
}
```

This makes the variable $embedded_view available in the node--bundle-name.html.twig template.
