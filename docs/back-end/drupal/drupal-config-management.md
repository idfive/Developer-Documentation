# Configuration Management

It is important to remember that, in D8, all configuration, once imported, is owned by the DB/site. The configuration system is simply a way to set or update configuration on a site. By default, the config management of D8 assumes that it is managing config per instances of the "same site", ie dev/stg/prod. If you are doing things other than that, you will need to make some changes, as well as be wary of things like UUID's.

It is important before beginning a full site build project to identify how/where site config will be managed. It is not always necessary to set up configuration sync folders, just be sure to think of the following if you do.

- By default this directory lives in DRUPALROOT/sites/default/files.
- The location folder sometimes depends on the host, and following their best practices.
- Configuration Manager module may be enabled, or it could all happen via drush.
- Be sure all developers on the project know the plan, regardless of which route is chosen.

## Checking status

As part of a CI process, or just before updating a feature/etc, you should see if new config is available, or if things have been changed. This can be done via:

- `drush config:status` (drush 9 and above)
- Navigating to the config management UI page, and visually checking for differences in yml vs DB config.

## Overriding config in settings.php

Sometimes it is desireable to override some config via settings.php. Usually, this is when you require different values for dev/stg/prod/etc. For example, to turn a SAML module off for local development. It is important to wrap these in a check for which environment is being targeted.

It is important to note, until core is patched (if it is patched), these override values WILL NOT show in the configuration forms of the site. These will need to be viewed/confirmed using `drush config:get DESIRED.CONFIG --include-overridden`.

### Example env check, and config override on acquia

```php
// Check/modify any acquia environment specific modifications needed.
if (isset($_ENV['AH_SITE_ENVIRONMENT'])) {
  switch ($_ENV['AH_SITE_ENVIRONMENT']) {
    case 'dev':
      // Config changes on DEV here.
      break;
    case 'test':
      // Config changes on STG here.
      break;
    case 'prod':
      // Config changes on PROD here.
      break;
} else {
  // Config changes on LOCAL here.
  $config['simplesamlphp_auth.settings'] = ['activate' => FALSE];
}
```

### Finding config variables to override

You may either scour the config sync directory, or look via drush:

- `drush config:list`
- Choose the desired config item
- `drush config:get CHOSEN_CONFIG`

So for example, overriding the Site Name and front page path in settings.php could look like:

```php
$config['system.site']['name'] = "MYSITE DEV";
$config['system.site']['page']['front'] = "/node/NID";
```

## Config management and acquia

Acquia recommends that the config folder be moved to be a sibling of docroot. Acquia config folder changes need to be loaded AFTER default settings in settings.php for acquia sites, for example:

```php
// Acquias default settings for a site
if (file_exists('/var/www/site-php')) {
  require '/var/www/site-php/hud8/MYSITE-settings.inc';
}
// Keep config/sync settings after acquia loads defaults.
// Otherwise it ignores them and uses loaded defaults.
$config_directories['vcs'] = $app_root . '/../config/MYSITE';
$config_directories['sync'] = $app_root . '/../config/MYSITE';
```

## One time config overrides via drush

You can use [drush config:set](https://drushcommands.com/drush-8x/config/config-set/) to run one time updates on sites if needed. Note that booleans will need to be set as 1/0.

- See all config: `drush config:list`
- Narrow down: `drush config:list simplesamlphp_auth.settings`
- See Items (if needed): `drush config:get simplesamlphp_auth.settings`
- Set (string/num): `drush config:set simplesamlphp_auth.settings role.eval_every_time 0`
- Set (array): `drush config:set antibot.settings form_ids.5 'webform_*'` This sets the 5th array item as a single new value.



## Config management and modules

If a more module based workflow is being employed, any config related to that module should be stored in the module itself. This is so that when users enable the module, all config that is relevant (fields/etc) are added.

Once that configuration has been imported into the site's active configuration, however, it is owned by the site and not the module. This means that the module can provide default configuration which is provided to the site, but once installed, the site--not the module--owns the configuration and can make changes to it without interference from the module.

```
MY_MODULE
  config
    install
      ALL CONFIG YML FILES FOR MODULE HERE
  MY_MODULE.module
  MY_MODULE.info.yml
```

### Config export for the module

Normally, it is easiest to:

- Export a full site export.
- Move all needed config YML's for the module from that export to the relevant modules config/install folder.
- Remove the UUID from each YML file in that folder.
- Test on a new install.

### Config updates in modules

Updates to a module's default configuration need to include changes to the YAML files in config/install and/or config/optional for new users of the module, but the module also must implement an update hook for existing users in order for the configuration changes to be loaded. This is because config/install is not read again after installation and configuration in config/optional may also already be active if dependencies on the site were installed.

To update a module that is used on multiple sites, you must:

- Update all config YML files.This is so that any "new" install of the module gets the correct config.
- Utilize hook_update in order to modify config on "existing" sites.
- Be sure to add any dependencies in the modules MY_MODULE.info.yml, that the config needs, ie a field type created by a contrib module.

#### Update specific config via an update hook

Normal single value field:

```php
/**
 * Updates to something like a single value.
 */
function MY_MODULE_update_8001() {
  $config = \Drupal::service('config.factory')->getEditable('CONFIG.TO_LOAD');
  $config->set('VALUE.TO_SET', 'bar');
  $config->save();
}
```

Multivalue settings:

```php
/**
 * Updates to something like a media browser.
 */
function MY_MODULE_update_8001() {
  $config = \Drupal::service('config.factory')->getEditable('CONFIG.TO_LOAD');
  $data = ['VALUE', 'ANOTHER VALUE'];
  $config->set('VALUE.TO_SET', $data);
  $config->save();
}
```

Removing config:

```php
Drupal::configFactory()->getEditable('CONFIG.TO_REMOVE')->delete();
```

This can be added to a hook_uninstall, or run via drush as below, by temporarily creating a function in an in-use module:

```php
/**
 * Function added to an in-use module temporarily.
 */
function tempDropEntity() {
  Drupal::configFactory()->getEditable('CONFIG.TO_REMOVE')->delete();
}
```

Then running drush command `drush php-eval "tempDropEntity();"`.

#### Update all config

An example hook_update to simply "reinstall all config for a GIVEN module".
This assumes all YML files have been added/updated. You can also programmatically add fields/etc, this is simply a quick way to update all config for a module.

```php
/**
 * DESCRIPTIVE UPDATE TEXT HERE.
 */
function MY_MODULE_update_8001() {
  \Drupal::service('config.installer')->installDefaultConfig('module', 'MY_MODULE');
}
```

#### Programmatically remove fields

"Update all config" as shown above, has the caveat tht it will not REMOVE fields, it simply leaves them in place.

```php
use Drupal\field\Entity\FieldConfig;

 /**
 * DESCRIPTIVE UPDATE TEXT HERE.
 */
function MY_MODULE_update_8001() {
  // Deleting old field.
  if (FieldConfig::loadByName('ENTITY_TYPE', 'BUNDLE', 'MY_FIELD') !== NULL ) {
    FieldConfig::loadByName('ENTITY_TYPE', 'BUNDLE', 'MY_FIELD')->delete();
  }
}
```

#### Programmatically remove all content and entity

Removes all content of a bundle, and the bundle, then re-installs fresh.

```php
use Drupal\field\Entity\FieldConfig;

 /**
 * DESCRIPTIVE UPDATE TEXT HERE.
 */
function MY_MODULE_update_8001() {
  // Delete existing paragraphs content
  $paragraphs = \Drupal::entityTypeManager()
    ->getStorage('paragraph')
    ->loadByProperties(array('type' => 'MY_PARAGRAPH_BUNDLE'));

  foreach ($paragraphs as $paragraph) {
      $paragraph->delete();
  }

  // Delete entire paragraph type bundle
  $para_type = \Drupal::entityTypeManager()->getStorage('paragraphs_type')->load('MY_PARAGRAPH_BUNDLE');
  if($para_type !== NULL) {
    $para_type->delete();
  }

  // Re-install fresh config
  \Drupal::service('config.installer')->installDefaultConfig('module', 'MY_MODULE');
}
```

#### Programmatically change plain text field to WYSIWYG

Makes a copy of data before removing the old field, adding new field, and repopulating.

```php
use \Drupal\field\Entity\FieldStorageConfig;
use \Drupal\field\Entity\FieldConfig;

/**
  * Change FIELD_MY_FIELD field from string (plain text) to text(formatted).
  */
function MY_MODULE_update_8001() {

  $fields = [
    'FIELD_MY_FIELD' => [
      'table' => 'paragraph__FIELD_MY_FIELD',
      'revision_table' => 'paragraph_revision__FIELD_MY_FIELD',
      'format_col' => 'FIELD_MY_FIELD_format',
    ],
  ];

  $database = \Drupal::database();

  foreach ($fields as $field_name => $f) {
    $table = $f['table'];
    $revision_table = $f['revision_table'];
    $entity_type = 'paragraph';

    // Get field storage.
    $field_storage = FieldStorageConfig::loadByName($entity_type, $field_name);

    // Check if field exist.
    if (is_null($field_storage)) {
      continue;
    }

    // Store data to an array so that we can restore it once the update is complete.
    $rows = NULL;
    $revision_rows = NULL;
    if ($database->schema()->tableExists($table)) {
      $rows = $database->select($table, 'n')->fields('n')->execute()
        ->fetchAll();
      $revision_rows = $database->select($revision_table, 'n')->fields('n')->execute()
        ->fetchAll();
    }

    // Save new field configs & delete existing fields.
    $new_fields = array();
    foreach ($field_storage->getBundles() as $bundle => $label) {
      $field = FieldConfig::loadByName($entity_type, $bundle, $field_name);
      $new_field = $field->toArray();
      $new_field['field_type'] = 'text_long';
      $new_fields[] = $new_field;
      // Delete field.
      $field->delete();
    }

    // Create new storage configs from existing.
    $new_field_storage = $field_storage->toArray();
    $new_field_storage['type'] = 'text_long';
    $new_field_storage['module'] = 'text_long';

    // Purge deleted fields data to create new fields.
    field_purge_batch(250);

    // Create new fieldstorage.
    FieldStorageConfig::create($new_field_storage)->save();

    // Create new fields for all bundles.
    foreach ($new_fields as $new_field) {
      $new_field = FieldConfig::create($new_field);
      $new_field->save();
    }
    // Restore existing data in fields & revision tables.
    if (!is_null($rows)) {
      foreach ($rows as $row) {
        $row = (array) $row;
        $row[$f['format_col']] = 'full_html';
        $database->insert($table)->fields($row)->execute();
      }
    }
    if (!is_null($revision_rows)) {
      foreach ($revision_rows as $row) {
        $row = (array) $row;
        $row[$f['format_col']] = 'full_html';
        $database->insert($revision_table)->fields($row)->execute();
      }
    }
  }
}
```

## Advanced config setups

More advanced config setups should consider using the [config split](https://www.drupal.org/project/config_split) module.
