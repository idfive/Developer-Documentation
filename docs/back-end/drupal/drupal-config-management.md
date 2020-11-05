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

- `drush config-list`
- Choose the desired config item
- `drush config-get CHOSEN_CONFIG`

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

You can use [drush cset](https://drushcommands.com/drush-8x/config/config-set/) to run one time updates on sites if needed. Note that booleans will need to be set as 1/0.

- See all config: `drush config-list`
- Narrow down: `drush config-list simplesamlphp_auth.settings`
- And set: `drush config-set simplesamlphp_auth.settings role.eval_every_time 0`
- For acquia multi-sites, from ssh on server: `drush @sites config-set simplesamlphp_auth.settings role.eval_every_time 0`

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

## Advanced config setups

More advanced config setups should consider using the [config split](https://www.drupal.org/project/config_split) module.
