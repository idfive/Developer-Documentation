# Drupal 8 General Codebase

Unless specifically directed, all new D8 sites should attempt to use a composer based workflow for updates, and the [idfive Component Libray](https://bitbucket.org/idfivellc/idfive-component-library) for the frontend. Some sites for specific clients, require different, specific workflows. This is not a substitute for that, rather, simply defines our "standard go tos".

## Local ENV Setup, and coding standards

### Preferred local VS Code setup

- Please follow the [following drupal.org article](https://www.drupal.org/docs/develop/development-tools/configuring-visual-studio-code) to set up VS Code for better drupal development locally.
- Additionally, consider installing a spell checker plugin for VS Code.

### Preferred general site scaffolding

Although exact setup will vary by client and environment, the ideal idfive d8 scaffolding resembles the following:

```
  Site Root
    composer.json | that wiill not be overwritten, where custom modules/etc can be added
    web/docroot | where all core and custom code lives
      modules
        contrib | Where all contrib/composer based modules go
        custom | Where any custom modules for client/project go
          CLIENT_BASE_MODULE | One overarching module for any customizations that generally go with the custom client theme, but need to be in a module.
            modules | Submodules. Mainly, this will be Kitchen Sink widgets and the like. They should get their own sub-modules so updates can potentially happen in the future.
      themes
        contrib
          idfive
        custom
          CLIENT_BASE_THEME | child theme of idfive
```

## Preferred general site spin-up workflow

Regardless of platform, the general SOP for idfive drupal sites is:

- Create local and remote core installs.
- Add standard idfive ICL Base theme.
- Create custom child theme for client. All custom front end/etc go here.
- Create a custom module/module suite for the client. All module related development and possibly config will go here.
- Add core suite of idfive approved contrib modules.
- Add other contrib modules as needed, but don't go overboard.

### Pantheon

Pantheon is the preferred platform to spin up DEV sites. Since lots of times, pantheon is only the temporary home of projects while in development, we have not yet created a custom idfive upstream, though that is not out of the question. For pantheon based sites, we utilize [lando](https://docs.lando.dev/) for local development, and to help keep sites in sync between local/remote/etc. Utilize the following workflow, assuming you have been assigned to the idfive team on pantheon.

One issue with pantheon is that we don't get a true composer based workflow out of the box.

- Standard, non composer: This is a bit of a misnomer, as you can use composer to install modules and libraries, but they may be lost upon core updates/etc. Client receives core upstream updates from pantheon.
- Composer based: This is a little more tricky as there is currently not a "one click" solution for this, however, we have created some helper scripts below. Client does not receive core upstream updates from pantheon, it has to update via composer manually.
- Also consider installing [terminus Site Clone](https://github.com/pantheon-systems/terminus-site-clone-plugin) which can quickly clone sites for a starter.

For this reason, we as of now, normally spin up a standard install if a client will be continuing on with pantheon, as the updates happening automatically are extremely important.

#### Standard, non composer (via pantheon dashboard and lando)

- Create a new sandbox in pantheon. Be sure this is assigned to the idfive team, not your personal account, so all Devs may access.
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

#### Standard, non composer (via terminus and lando)

Uses pantheons command line tool, [terminus](https://pantheon.io/docs/terminus). Allows command line creation and install of pantheon site, then pulls down locally and runs via lando.

- Be sure [terminus](https://pantheon.io/docs/terminus) is installed and running locally. If the bin directory is unavailable on install, Terminus cannot be automatically set up as a command. A symlink or an alias to the Terminus executable must be made in either the ~/.bashrc or ~/.bash_profile files, a la `alias terminus="/usr/local/bin/terminus"`
- If you have not already, set up [lando](https://docs.lando.dev/) locally, and set it up for use with [pantheon](https://docs.lando.dev/config/pantheon.html). It will require a [machine token](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus) and a few other things.
- `terminus site:create SITE-MACHINE-NAME 'SITE HUMAN NAME' drupal8 --org=idfive-llc` This will create a new site on pantheon, as drupal 8, under the idfive team.
- `terminus drush SITE-MACHINE-NAME.dev -- site:install --site-name=SITE-MACHINE-NAME --account-name=USERNAME --account-mail=EMAIL --account-pass=PASSWORD` run site install on site you just created, on dev environment of pantheon. You will receive the message "You are about to DROP all tables in your 'pantheon' database", this is normal, continue. Note there is an open bug against a password containing certain chars, like [!%&'](https://github.com/drush-ops/drush/issues/125).
- `terminus connection:set SITE-MACHINE-NAME.dev git` set connection to git
- `cd ~/Sites`
- `mkdir SITE-MACHINE-NAME-lando` (use the -lando at the end so you know this repo is served by lando)
- `cd SITE-MACHINE-NAME-lando`
- `lando init --source pantheon --pantheon-site "SITE-MACHINE-NAME"` and go through the prompts to select the site you created.
- `lando start` starts the app. It will also list the URL to access this locally.
- `lando pull` will pull DB/code/files from chosen environment through prompts.

At this point, you have a local version of the blank site that is up on pantheon. Begin setting up themes/modules/etc as needed.

#### Standard, via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Create new site on pantheon, and spin up locally](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/pantheon/create_new_pantheon_site.sh) script. Adds all above lando/terminus commands into one file, that asks for machine name, theme name and human name, then runs all above scripts as well as installs common modules, and creates a client sub-theme.

- `sh ~/Sites/_ial/drupal/pantheon/create_new_pantheon_site.sh`

#### Composer based, manually

Follow the steps outlined for [composer based, non CI](https://pantheon.io/docs/guides/drupal-8-composer-no-ci) site setup. Or alternatively, [convert an existing site](https://pantheon.io/docs/guides/composer-convert) to a composer based build.

### Acquia

For acquia based sites, we utilize [Acquia Dev Desktop](https://www.acquia.com/drupal/acquia-dev-desktop) for local development, and to help keep sites in sync between local/remote/etc. Since acquia based sites are normally created, and controlled by our clients, it is best to look at project specific documentation for any acquia based site. For acquia in particular, "spinning up a new site" often means adding a site to a multi-site setup.

### idfive DEV server

If possible, all DEV site sandboxes should use pantheon. If the project absolutely requires that it be on an idfive DEV server, see Nick, or a senior developer for access/etc. All deployments to the idfive server should have a repo setup on the [idfive bitbucket](https://bitbucket.org/), and CI deployments set up through [buddy](https://app.buddy.works/idfive). Be sure that someone has given you access to both accounts.

## Composer Based D8 Cores

D8 core uses composer, but depending on the environment this is going to, slightly different setups must be enacted.

### Pantheon composer Based D8 Cores

#### Pantheon Non CI

Mostly, we work without a CI at the moment, as most clients do not opt for the extra expense. See [Composer non CI](https://pantheon.io/docs/guides/drupal-8-composer-no-ci) docs for further information on setting up a pantheon repo for composer. This uses composer to manage updates, but commits these files to the codebase, rather than relying on a CI or build tool.

### Acquia composer Based D8 Cores

#### Acquia Non CI

Mostly, we work without a CI at the moment, as most clients do not opt for the extra expense. See [Composer non CI](https://support.acquia.com/hc/en-us/articles/360004451293-Migrate-an-existing-D8-site-into-a-Composer-managed-build) docs for further information on setting up an acquia repo for composer. This uses composer to manage updates, but commits these files to the codebase, rather than relying on a CI or build tool.

### Others

See [Using composer with drupal](https://www.drupal.org/docs/develop/using-composer/using-composer-with-drupal) for specifics.
