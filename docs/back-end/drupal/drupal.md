# Drupal 8
Unless specifically directed, all new D8 sites should attempt to use a composer based workflow for updates, and the [idfive Component Libray](https://bitbucket.org/idfivellc/idfive-component-library) for the frontend.

## Prefered site spinup workflow

### Pantheon
Pantheon is the prefered platform to spin up DEV sites. Since lots of times, pantheon is only the temporary home of projects while in development, we have not yet created a custom idfive upstream, though that is not out of the question. Utilize the following workflow, assuming you have been assigned to the idfive team on pantheon:

#### Standard (via pantheon dashboard)

  -  Create a new sandbox in pantheon. Be sure this is assigned to the idfive team, not your personal account, so all Devs may access.
  - Go ahead and set up that site on the DEV URL, ie install the site.
  - Change pantheon from SFTP mode to GIT mode for the new site in the pantheon dashboard.
  - If you have not already, set up [lando](https://docs.lando.dev/) locally, and set it up for use with [pantheon](https://docs.lando.dev/config/pantheon.html). It will require a [machine token](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus) and a few other things.
  - `cd ~/Sites`
  - `mkdir MY-LOCAL-SITE-lando` (use the -lando at the end so you know this repo is served by lando)
  - `cd MY-LOCAL-SITE-lando`
  - `lando init --source pantheon` and go through the prompts to select the site you created in step one.
  - `lando start` starts the app. It will also list the URL to access this locally.
  - `lando pull` will pull DB/code/files from chosen environment through prompts.

At this point, you have a local version of the blank site that is up on pantheon. Begin setting up themes/modules/etc as needed.

#### Command line (via terminus)
Uses pantheons command line tool, [terminus](https://pantheon.io/docs/terminus). Coming soon. See [Composer non CI](https://pantheon.io/docs/guides/drupal-8-composer-no-ci) for overview.

### Acquia
coming soon...

### idfive DEV server
If possible, all DEV site sandboxes should use pantheon. If the project absolutely requires that it be on an idfive DEV server, see Nick, or a senior developer for access/etc.

## Composer
D8 core uses composer, but depending on the environment this is going to, slightly different setups must be enacted.

### Pantheon

#### Non CI
Mostly, we work without a CI at the moment, as most clients do not opt for the extra expense. See [Composer non CI](https://pantheon.io/docs/guides/drupal-8-composer-no-ci) docs for further information on setting up a pantheon repo for composer. This uses composer to manage updates, but commits these files to the codebase, rather than relying on a CI or build tool.

#### CI
coming soon...

### Acquia

#### Non CI
Mostly, we work without a CI at the moment, as most clients do not opt for the extra expense. See [Composer non CI](https://support.acquia.com/hc/en-us/articles/360004451293-Migrate-an-existing-D8-site-into-a-Composer-managed-build) docs for further information on setting up an acquia repo for composer. This uses composer to manage updates, but commits these files to the codebase, rather than relying on a CI or build tool.

#### CI
coming soon...

### Others
See [Using composer with drupal](https://www.drupal.org/docs/develop/using-composer/using-composer-with-drupal) for specifics.

## idfive base theme
The idfive base theme is intetionally pretty bare bones, but provides us with lots of behind the scenes functions we need. This theme is designed to act as a parent theme, and should never be enabled directly. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for how to best use this theme, and how to quickly and efficiently spin up a child theme for this project.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive base theme, and creating your custom child theme will look like:
  - `composer require idfive/idfive`
  - `cd docroot/themes/custom/idfive/starterkits`
  - `sudo bash generate_kit.sh` This will run a bash script, that prompts you for a human readable name, and a machine name for your custom child theme. From that, the script will generate a child theme, and install a fresh copy of the [idfive Component Libray](https://bitbucket.org/idfivellc/idfive-component-library) which is the prefered framework for all idfive projects. 
  - enable your new child theme.

You may need to adjust folders/etc as stated above, depending on the projects composer setup. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for more information.

## idfive ICL paragraphs module

## Recomended contrib modules


# Drupal 7
All D7 work is limited to maintenence on existing sites. Since the existing repos vary far and wide as to how and where they are set up, its best to consult the documentation on each specific project.