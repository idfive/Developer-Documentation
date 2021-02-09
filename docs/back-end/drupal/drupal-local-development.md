# Local Development With Drupal

## Lando with Custom Sites

For sites not hosted on Pantheon or a similar provider, the following steps are required.

### Initialization

Begin by creating an empty directory, then within this directory run `lando init`. When asked to provide the location of the app's codebase, select the "remote git repo or archive" option (the option is named this as of v3.0.23 but it may be slightly different in future versions). Then, when prompted provide the repo URL (you'll want to use the SSH URL here as opposed to the HTTPS URL). Once that's been provided, select the version of Drupal that corresponds to the current project from the supplied list of recipes. For the webroot path relative to the init destination, the default `.` should be fine. Finally, give the app a meaningful name (this will be used for the local domain name I.E. https://<app-name>.lndo.site).

Once the git clone has completed, run `lando start`.

### Database Setup

Once the git clone has completed, pull a database backup and then run `lando info`. Using the `external_connection` and `creds` properties in the `database` service object returned by `lando info`, connect to the database using your preferred DB client. The connection should be as follows:

host: `external_connection.host`
port: `external_connection.port`
database: `creds.database`
username: `creds.user`
password: `creds.password`

After successfully connecting to the database, import your backup.

### Drupal Settings

If a `sites/default/settings.local.php` file does not exist yet, create one and set the `$databases` variable as follows:

```
$databases = array (
  'default' =>
    array (
      'default' =>
        array (
          'database' => '<creds.database>',
          'username' => '<creds.user>',
          'password' => '<creds.password>',
          'host' => 'database',
          'port' => '<internal_connection.port>',
          'driver' => 'mysql',
          'prefix' => '',
        ),
    ),
);
```

Following this step, you may need to run `lando drush cr` or `lando drush cc` to clear the site's cache before accessing it in the browser.
