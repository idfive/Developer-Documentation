# Local Development With Lando

### Email and lando

To test emails on lando, first enable [MailHog](https://github.com/mailhog/MailHog), by adding the following to .lando.yml:

```cnf
proxy:
  mailhog:
    - mail.MY_SITE.lndo.site
services:
  mailhog:
    type: mailhog
    hogfrom:
      - appserver
```

- Run `lando rebuild`
- Run `lando restart`
- You will then see the mailhog url appear along with the site url, like `http://mail.MY_SITE.lndo.site:8080/`
- From that interface, you may check mail that is being sent.

### Databases and lando

#### Import direct from a dump file

- .zip: `lando db-import MY_DB_DUMP.sql.gz`
- .gz: `lando db-import MY_DB_DUMP.sql.gz`
- raw sql file: `lando db-import MY_DB_DUMP.sql`

### Connect to lando DB via sql pro

Sometimes you need or want to access the DB in order to do some operations. This also helps for some larger DB imports, that may timeout through `lando db-import`.

- `lando info`
- Look for `external_connection` host and port, and add to sql pro
- The port may change, but you can add to .landofile as portforward so it stays the same.
- connect via sql pro, 127.0.0.1, and specify port. db then available as drupal7, drupal8, etc.

#### Example .landofile portforward

Run `lando rebuild` and `lando info` after adding.

```cnf
name: my-lando-app
recipe: drupal8
services:
  database:
    portforward: 37001
```

## Lando with Custom Sites/existing repositories

For sites not hosted on Pantheon, platform.sh, acquia or a similar provider, the following steps are required.

### Initialization

- Begin by creating an empty directory, then within this directory run `lando init`.
- Move desired DB export to root of application, be sure to add `*.sql` to .gitignore, if applicable.
- When asked to provide the location of the app's codebase, select the "remote git repo or archive" option (the option is named this as of v3.0.23 but it may be slightly different in future versions).
- Then, when prompted provide the repo URL (you'll want to use the SSH URL here as opposed to the HTTPS URL). Once that's been provided, select the version of Drupal that corresponds to the current project from the supplied list of recipes.
- For the webroot path relative to the init destination, the default `.` should be fine. Finally, give the app a meaningful name (this will be used for the local domain name I.E. https://<app-name>.lndo.site).
- Once the git clone has completed, run `lando start`.
- Setp database connections via settings.local.php or similar.
- `lando db-import mysql_dump_file.sql` also works for gziped and zipped files.

### Drupal Settings

### Example drupal settings.php for lando

If needed, set up settings.php or settings.local.php with the following. This could also go in as an include/etc if getting committed/etc. Note there is a block checking if this is lando or not, so can be committed to settings.php so all may use.

```php
<?php

$databases = [];
if (getenv('LANDO') === 'ON') {
  $lando_info = json_decode(getenv('LANDO_INFO'), TRUE);
  $settings['trusted_host_patterns'] = ['.*'];
  $settings['hash_salt'] = md5(getenv('LANDO_HOST_IP'));
  $databases['default']['default'] = [
    'driver' => 'mysql',
    'database' => $lando_info['database']['creds']['database'],
    'username' => $lando_info['database']['creds']['user'],
    'password' => $lando_info['database']['creds']['password'],
    'host' => $lando_info['database']['internal_connection']['host'],
    'port' => $lando_info['database']['internal_connection']['port'],
  ];
}
```

This is sometimes best done via a local settings include in settings.php. In this case, above would be added to settings.php:

```php
$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
  include $local_settings;
}
```

Following this step, you may need to run `lando drush cr` or `lando drush cc` to clear the site's cache before accessing it in the browser.

## Lando with Acquia

Lando currently provides alpha support for an Acquia recipe. To get an Acquia site up and running locally, follow these steps:

1. Install the latest release of lando (currently 3.1.0 has alpha support for an Acquia recipe)
2. Enable experimental features in lando by running lando --experimental
3. Create an [Acquia Cloud API Token](https://docs.acquia.com/cloud-platform/develop/api/auth/) and save the token and secret somewhere secure
4. Create your site directory, cd into it and run `lando init --source acquia`
5. Provide your Cloud API key and secret when prompted
7. Run `lando start`
8. Run `lando pull`

For certain sites like Colgate that require Composer version ^1.0, it may be necessary to update the .lando.yml file to include the following to prevent an error during the init step where Lando uses Composer version ^2.0 regardless of the value specified for the `config.composer_version` setting in .lando.yml.

```yml
config:
  build:
    run_scripts: false
```

This will prevent any Composer commands from being run during the `lando init` step and it will complete initialization without any errors.

### Acquia multisites

#### lando.yml additions

- We need to define an appserver, and DB service for all sites in the multisite we wish to use locally. Since this could mean it becomes way more resource intensive, we want to try and limit it to just the ones we need to use/test.
- Notice we are defining a specific port for each DB service.

```yml
proxy:
  appserver:
    - site1.lndo.site
    - site2.lndo.site
services:
  site1:
    type: mysql:5.7
    portforward: 33068
  site2:
    type: mysql:5.7
    portforward: 33069
```

#### sites.php additions

- add the .lndo.site aliases for all needed local sites.

```php
<?php
$sites = array(
    'site1.lando.site' => 'site1',
    'dev.site1.edu' => 'site1',
    'stg.site1.edu' => 'site1',
    'site1.edu' => 'site1',
    'site2.lando.site' => 'site2',
    'dev.site2.edu' => 'site2',
    'stg.site2.edu' => 'site2',
    'site2.edu' => 'site2',
);
```

#### settings.php additions

- Modify the acquia specific includes to also see if "not lando". This is because that file exists if lando is using the acquia environment locally.

```php
if (file_exists('/var/www/site-php') && (getenv('LANDO') !== 'ON')) {
   // Memcached settings for Acquia Hosting
   if (file_exists(DRUPAL_ROOT . '/sites/default/cloud-memcache-d8+.php')) {
      require(DRUPAL_ROOT . '/sites/default/cloud-memcache-d8+.php');
   }
  require '/var/www/site-php/hud8/admission_howard-settings.inc';
}
```

Example database settings to be added: shown is the site1 site.

- Notice the "host" is the sb service we defined for site1.
- Notice the port is 3306, which is for the general database.

```php
if (getenv('LANDO') === 'ON') {
  $lando_info = json_decode(getenv('LANDO_INFO'), TRUE);
  $settings['trusted_host_patterns'] = ['.*'];
  $settings['hash_salt'] = md5(getenv('LANDO_HOST_IP'));
  $databases['default']['default'] = [
    'driver' => 'mysql',
    'database' => $lando_info['database']['creds']['database'],
    'username' => $lando_info['database']['creds']['user'],
    'password' => $lando_info['database']['creds']['password'],
    'host' => 'site1',
    'port' => 3306,
  ];
}
```

#### Sample drush commands with multisites

##### Getting databases

- From within desired multi-site folder
- `drush -Dssh.tty=0 @ALIAS.prod --uri=SITE1.EDU sql:dump > local_dump.sql` sub in desired drush alias and url
- `lando db-import local_dump.sql --host SITE1` the database service desired
- `rm local_dump.sql`
- `lando drush cr`

## Using xdebug with lando

Adjust your .lando.yml to add xdebug, and a reference to a custom php.ini, so it looks similar to the following:

```yml
name: YOUR Site
recipe: pantheon
config:
  framework: drupal8
  site: your_site
  id: your_id
  xdebug: true
  conf:
    php: .vscode/php.ini
```

Then add the following in a .vscode folder in the project root, then run `lando rebuild -y`. This can be committed, or .gitignored, as needed based on project.

### launch.json

```json
{
  "version": "0.2.0",
  "configurations": [

    {
    "name": "Listen for XDebug",
    "type": "php",
    "request": "launch",
    "port": 9000,
    "log": true,
    "pathMappings": {
      "/app/": "${workspaceFolder}/",
    }
  }]
}
```

### php.ini

```ini
xdebug.max_nesting_level = 256
xdebug.show_exception_trace = 0
xdebug.collect_params = 0
xdebug.remote_enable = 1
xdebug.remote_autostart = 1
xdebug.remote_host = ${LANDO_HOST_IP}
xdebug.remote_log = /tmp/xdebug.log
```

## Troubleshooting

### Edge URL's Suddenly Stop Working

If you run into issues where for whatever reason, a local site's Edge URL's (*.lndo.site) suddenly stop working, try adding the following to your `/etc/hosts` file:

`127.0.0.1 <site-name>.lndo.site`

After saving, the Edge URL's should resolve properly.