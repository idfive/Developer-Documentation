# Drupal

## idfive base theme

## idfive paragraphs module

## Recomended contrib modules

## Prefered site spinup workflow

### Pantheon
Pantheon is the prefered platform to spin up DEV sites. Since lots of times, pantheon is only the temporary home of projects while in development, we have not yet created a custom idfive upstream, though that is not out of the question. Utilize the following workflow, assuming you have been assigned to the idfive team on pantheon:

  -  Create a new sandbox in pantheon. Be sure this is assigned to the idfive team, not your personal account, so all Devs may access.
  - Go ahead and set up that site on the DEV URL, ie install the site.
  - Change pantheon from SFTP mode to GIT mode for the new site in the pantheon dashboard.
  - If you have not already, set up [lando](https://docs.lando.dev/) locally, and set it up for use with [pantheon](https://docs.lando.dev/config/pantheon.html). It will require a machine token and a few other things.
  - `cd ~/Sites`
  - `mkdir MY-LOCAL-SITE-lando` (use the -lando at the end so you know this repo is served by lando)
  - `cd MY-LOCAL-SITE-lando`
  - `lando init --source pantheon` and go through the prompts to select the site you created in step one.
  - `lando start` starts the app. It will also list the URL to access this locally.
  - `lando pull` will pull DB/code/files from chosen environment through prompts.

At this point, you have a local version of the blank site that is up on pantheon. Begin setting up themes/modules/etc as needed.

### Acquia

### idfive DEV server
If possible, all DEV site sandboxes should use pantheon. This frees up our DEV server for other things we are doing there. If not possible, utilize the following: