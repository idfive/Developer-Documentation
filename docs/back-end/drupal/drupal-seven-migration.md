# Seven to 9 migration locally via lando

See https://www.drupal.org/docs/upgrading-drupal/upgrade-using-drush. These are notes to be more sussed out on next run.

This approach uses lando to create a seperate DB locally.

- `lando composer require drupal/migrate_plus`
- `lando composer require drupal/migrate_tools`
- `lando composer require drupal/migrate_file`

Eaxmple lando.yml:

```yml
name: mywebsite
recipe: drupal8
config:
  webroot: web

# Create Drupal 7 database service, for migration
services:
  d7db:
    type: mariadb
    creds:
      user: drupal7db
      password: drupal7db
      database: drupal7db
    portforward: true
```

example setings.php:

```php
$databases['migrate']['default'] = [
  'database' => 'drupal7db',
  'username' => 'drupal7db',
  'password' => 'drupal7db',
  'prefix' => '',
  'host' => 'd7db',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
];
```

- Download the D7 DB, and install into lando locally via `lando db-import --host=d7db --user=drupal7db MY_DB.sql`.
- View the available migrations to later run: `lando drush migrate:upgrade --legacy-db-key=migrate --legacy-root=https://MY-SITE.com --configure-only`.
- `lando drush migrate:status`
- `lando drush migrate:import --all`
- Import all d7 `lando drush migrate:import --tag="Drupal 7"`
- Reset `lando drush migrate-rollback --all`

## Troubleshooting

- See why a migration failed: `lando drush mmsg MIGRATION_NAME`
- "Migration MIGRATION_NAME is busy with another operation: Importing": `lando drush migrate-reset-status MIGRATION_NAME`, resets that operation to idle in order to rerun.
- "The "ENTITY" entity type does not exist": See if modules enabled
- Files not Importing: run `lando drush migrate-import upgrade_d7_file` directly