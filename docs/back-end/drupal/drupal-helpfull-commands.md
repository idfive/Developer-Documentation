# Helpful Drupal Commands

## Templating

### Reveal all variables in a twig template

#### Dump

- Be sure local development settings are set up, so twig will use dump
- `{{ dump(_context|keys) }}`
- `{{ dump(variable_key_name) }}`

#### Devel

##### In twig template

- Be sure [devel module](https://www.drupal.org/project/devel) is installed and enabled.
- Be sure kint submodule enabled.
- `{{ kint(_context|keys) }}`
- `{{ kint(variable_key_name) }}`

##### In a hook_preprocess

- Be sure [devel module](https://www.drupal.org/project/devel) is installed and enabled.
- `dsm(MY_VAR);` from within the function.

#### Xdebug

If running xdebug, you can use a preprocess function to set a breakpoint:

```php
function MY_THEME_preprocess(&$variables, $hook) {
  if ($hook == 'node') {
    xdebug_break();
  }
}
```

## Patching

### Apply a patch

- `cd THE_MODULE_TO_PATCH`
- `curl -O https://drupal.org/files/THE_PATCH.patch`
- `git apply -v THE_PATCH.patch`
- if the git apply doesn't work, use `patch -p1 < THE_PATCH.patch`

### Create a patch

See more detailed information on [Making a Drupal patch with Git](https://www.drupal.org/node/707484).

- `git diff > DRUPAL.ORG_ISSUE_NUMBER-descriptive-text-here.patch`

## Drush

### Show available aliases

- `drush sa`
- Update acquia aliases: `drush acquia-update`

### @sites

The `@sites` command is especially useful on acquia multi-sites, as it targets "All Sites" on the install. This command needs to be run directly on the desired server however, as it does not play nice with drush aliases.

- `drush @DESIRED_DRUSH_ALIAS ssh`
- `drush @sites cr`

### Upload a DB

- `drush @DESIRED_DRUSH_ALIAS sql-drop`
- `drush @DESIRED_DRUSH_ALIAS < sppnew8t_dev_2019-01-31.sql`

### Create a user and assign as admin

This is extremely helpful if admin account credentials are lost or unavailable, but server/codebase access is present. To note, special chars are not available when setting passwords for tis, due to a [known drush issue](https://github.com/drush-ops/drush/issues/125).

#### Drush 8

- `drush @DESIRED_DRUSH_ALIAS user-create USERNAME`
- `drush @DESIRED_DRUSH_ALIAS user-password USERNAME --password=PASSWORD`
- `drush @DESIRED_DRUSH_ALIAS user-add-role "administrator" --name=USERNAME`

#### Drush 9

- `drush user:create USERNAME --mail="EMAIL" --password="PASSWORD"`
- `drush user:role:add "administrator" USERNAME`

### Partial configuration installs

This is helpful in certain instances to update a single config across all sites in say a multi-site. In acquia/others, needs to be run directly on server, not via drush aliases, as the @sites does not play nice with aliases.

- `drush @DESIRED_DRUSH_ALIAS ssh`
- `drush @sites cim --partial --source=modules/contrib/PATH/TO/YOUR/CONFIG_FILE.yml`
- `drush @sites updb`

## Composer

### Helpful composer commands

- `composer clearcache` clears local composer caches if you just pushed an update to composer repo and need to pull it.
- If you want to know all packages that will be updated by the update command, use the `--dry-run` option first.

### Update drupal core

- `composer update drupal/core --with-dependencies`
- See [Update core via composer](https://www.drupal.org/docs/8/update/update-core-via-composer).
