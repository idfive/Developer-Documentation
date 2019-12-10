# Helpfull Drupal Commands

## Patching

### Apply a patch

- `cd THE_MODULE_TO_PATCH`
- `curl -O https://drupal.org/files/THE_PATCH.patch`
- `git apply -v THE_PATCH.patch`
- if the git apply doesnt work, use `patch -p1 < THE_PATCH.patch`

### Create a patch

See more detailed information on [Making a Drupal patch with Git](https://www.drupal.org/node/707484).

- `git diff > DRUPAL.ORG_ISSUE_NUMBER-descriptive-text-here.patch`

## Drush

### Show available aliases

- `drush sa`
- Update acquia aliases: `drush acquia-update`

### @sites

The `@sites` command is especially useful on acquia multisites, as it targets "All Sites" on the install. This command needs to be run directly on the desired server however, as it does not play nice with drush aliases.

- `drush @DESIRED_DRUSH_ALIAS ssh`
- `drush @sites cr`

### Upload a DB

- `drush @DESIRED_DRUSH_ALIAS sql-drop`
- `drush @DESIRED_DRUSH_ALIAS < sppnew8t_dev_2019-01-31.sql`

### Create a user and assign as admin

This is extremely helpful if admin account credentials are lost or unavailable, but server/codebase access is present.

- `drush @DESIRED_DRUSH_ALIAS user-create USERNAME`
- `drush @DESIRED_DRUSH_ALIAS user-password USERNAME --password=PASSWORD`
- `drush @DESIRED_DRUSH_ALIAS user-add-role "administrator" --name=USERNAME`

### Partial configuration installs

This is helpful in certain instances to update a sincle config accross all sites in say a multisite. In acquia/others, needs to be run directly on server, not via drush aliases, as the @sites does not play nice with aliases.

- `drush @DESIRED_DRUSH_ALIAS ssh`
- `drush @sites cim --partial --source=modules/contrib/PATH/TO/YOUR/CONFIG_FILE.yml`
- `drush @sites updb`
