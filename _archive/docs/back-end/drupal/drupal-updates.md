# Drupal Updates

## Core Updates

Core updates are to be enacted with composer. Though some scaffolding systems may vary, `composer update drupal/core --with-dependencies` is normally what is called for.

### Sample core update workflow

- Backup Database/etc as needed.
- `composer outdated "drupal/*"` Shows if core/contrib is out of date.
- `composer update drupal/core --with-dependencies`
- `drush updb` Update local DB, if required.
- `drush cr` Clear caches.
- Test locally
- If using config sync, run `drush cex sync`.
- Commit, deploy, test on dev/stg/prod, as needed, per client specs.

### General things to look at when performing core updates

In general, minor core updates are usually not an issue. Most often, these are changes to underlying libraries like Symphony, or security updates, or bug fixes to existing functionality.

- Look at your composer.json. Are their any patches active for core? Do they still apply?
- Look at the release notes for the new core version. Any red flags? Any open issues?
- Do the release notes mention changes to specific functionality? If so, flag for testing.
- Does the new release require updates to the database?

### Scaffolding tips for core composer.json, for easier updates

#### Exclude .htaccess changes

The following, when added to to the core scaffold, ignores .htaccess changes, where we often store global redirects/etc.

```json
"extra": {
  "drupal-scaffold": {
    "file-mapping": {
      "[web-root]/.htaccess": false
    }
  }
}
```

## Contrib Updates

Contrib updates are to be enacted with composer. Though some scaffolding systems may vary, `composer update drupal/MODULE_NAME --with-dependencies` is normally what is called for.

### Sample contrib update workflow

- Backup Database/etc as needed.
- `composer outdated "drupal/*"` Shows if core/contrib is out of date.
- `composer update drupal/* --with-dependencies` Will update all (including core if it needs it).
- `composer update drupal/MODULE_NAME` will do a specific module.
- `drush updb` Update local DB, if required.
- `drush cr` Clear caches.
- Test locally
- If using config sync, run `drush cex sync`.
- Commit, deploy, test on dev/stg/prod, as needed, per client specs.

### General things to look at when performing contrib updates

In general, contrib updates are "less trustworthy" than core updates. They are sometimes best done, and tested one at a time for significant updates, especially if jumping several versions, or major versions.

- Is this a minor, or major update?
- If major, any release notes regarding an upgrade path?
- Does this module rely on any libraries that also need updating?
- Does this have any conflicts with current core version. (shouldn't, if done via composer)

## A @sites alias replacement for drush 9 and above

Since drush 9 and above does away with the @sites alias, we needed to create a script on the server that essentially loops through all sites on a multi-site install, and runs drush commands/etc. This script is located in each codebase, under `scripts/idfive_sites.sh`. It is interacted with, both through command line/etc, and via CRON scheduled jobs on acquia/similar. For scheduled jobs, see the [acquia documentation](https://docs.acquia.com/cloud-platform/manage/cron/#cloud-execute-shell-script). At its essence, it provides a way to run the same drush command on all multi-sites within an environment.

Note below scripts run on acquia:

- Therefore use one of their vars, `${AH_SITE_NAME}`, which would need to be modified if used elesewhere.
- includes `awk '{print "["strftime("\%Y-\%m-\%d \%H:\%M:\%S \%Z")"] "$0}' &>> /var/log/sites/${AH_SITE_NAME}/logs/$(hostname -s)/drush-cron.log` only because acquia requires logging for scripts. This can easily be removed elsewhere.

### Example script on a server, scripts/idfive_sites.sh

```sh
  #!/bin/bash

  # Provide the absolute path to the sites directory.
  SITES="/var/www/html/${AH_SITE_NAME}/docroot/sites"

  # Validate and hint if no argument provided.
  if [ "${#}" -eq 0 ]; then
    echo "drush: missing argument(s). Please add the drush command you wish to run on all sites."
    echo "The 'drush' will be added automatically, please only add the actual command desired. EXAMPLE: cex -y"
  else
    cd "${SITES}"
    # Loop:
    for SITE in $(ls -d */ | cut -f1 -d'/'); do
      # Skip default sites, only run for howard url's.
      if [[ "${SITE}" == *".howard.edu"* ]]; then
        echo "======================================"
        echo "Running command: drush -l ${SITE} ${@} -y"
        echo "======================================"
        drush -l "${SITE}" "${@}" -y | awk '{print "["strftime("\%Y-\%m-\%d \%H:\%M:\%S \%Z")"] "$0}' &>> /var/log/sites/${AH_SITE_NAME}/logs/$(hostname -s)/drush-cron.log
      fi
    done
  fi
```

### Usage of idfive_sites.sh directly

When running this script, 'drush' and the '-y' flag, are automatically added to the drush command you wish to run. It is quite important to "not use command aliases" with this script. Ie, use "pm:enable" not "en". Related too [this issue](https://github.com/drush-ops/drush/issues/3025) if curious as to why.

- From root folder on acquia server, check status: `bash scripts/idfive_sites.sh status`. In this instance, 'status' is the drush command to run.
- From root folder on acquia server, clear cache: `bash scripts/idfive_sites.sh cr`. In this instance, 'cr' is the drush command to run.
- From scheduled task runner on acquia: `bash /var/www/html/${AH_SITE_NAME}/scripts/idfive_sites.sh cr`. Clears caches on all sites in install, to run hourly or whatever desired.

### Usage of idfive_sites.sh from a scripting library

An example local script from the [Howard Automation Library](https://github.com/howard-university-web-services/Howard-Automation-Library), to interact with a few acquia multisites, and run drush commands for each:

```sh
#!/bin/bash
#
# Update specific config on all howard D8 Sites.
#
# $ sh ~/Sites/_hal/drupal/acquia/update_via_drush.sh
#
# Notes:
# - See README.md for detailed instructions.
# - Allows drush commands to be run on all sites and environments.
#
# Dependencies:
# - drush
#
# Parameters:
# - Drush command | ie, pm-uninstall page_cache
#

echo "Updating custom config for Howard D8 sites."

source ~/Sites/_hal/hal_config.txt

# Choose acquia env for drush aliases
echo "Please choose which acquia env to run this on:"
ENVS=(".dev.dev" ".test.test" ".prod.prod")
select ENV in "${ENVS[@]}"
do
  echo "$ENV selected"
  break
done

# Config Name, use as $DRUSH_COMMAND
echo "Enter the drush command. (e.g. pm:enable page_cache):"
read DRUSH_COMMAND

# Check Config Name is not empty
if [ -z "$DRUSH_COMMAND" ]; then
  echo "The drush command cannot be empty!"
  exit 2
fi

# Foreach drush alias, go on the server and set.
for APP in ${LOCAL_HOWARD_D8_DRUSH_ALIAS[@]}; do
  echo "Running config updates for $APP$ENV"
  drush $APP$ENV ssh "bash /var/www/html/"\${AH_SITE_NAME}"/scripts/hal_sites.sh $DRUSH_COMMAND"
done

echo "drush updates complete on $APP$ENV."

exit 0
```
