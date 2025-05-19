---
description: Initialization of idfive Accelerator
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Initialization

For new accelerator based sites, we will loosely follow these general steps:

- Create new Client Sandbox in Pantheon
- Clone the Accelerator Pantheon Repo (WP or Drupal specific) to New Client Sandbox
- Ensure that work gets pushed to Dev
- Make any known changes to site settings, such as:
 - Site Name
 - Site Emails
 - Address/info in footer (where built into theme)
 - Etc.
- Add any users defined by Project AE.
- Remove sample content and pages
 - Be sure to leave [Example KS page](https://dev-idfive-accelerator.pantheonsite.io/kitchen-sink/), for future QC.
 - Ensure specialty pages like events, people, and news, if present in wires/designs, remain and are put in proper location. Note that events/calendar will need to live at toop level. More notes on calendar page itself.
- If IA exists, can assist in “Initial Site Stubout”, ensuring things like main pages get to correct places in main menu/etc, and changing/adding links in correct places to match design/ia.
- Change social media links to go to correct client locations.

## Setup and clone in Pantheon steps

The first step is to create a new wordpress or drupal website in pantheon. In the example below your project’s label will be “Your New idfive Project” with a machine name of “your-new-idfive-project”. Important to remember to make it controlled by the idfive team, not a personal account.

<Tabs groupId="accelerator-versions">
  <TabItem value="drupal" label="Drupal" default>
    - Make sure you have Terminus installed. Installation instructions are [found here](https://docs.pantheon.io/terminus/install).
    - Install terminus site clone plugin. The following code will use terminus itself to install the plugin. There are alternative install methods [listed here](https://github.com/pantheon-systems/terminus-site-clone-plugin/blob/master/README.md).
    - `terminus self:plugin:install pantheon-systems/terminus-site-clone-plugin`
    - Make sure you are logged in to Pantheon on your machine via terminus with: `terminus auth:login --machine-token=yourreallylongmachinetokenstring`
    - Use the terminus site clone to copy the Accelerator projects’s dev environment to your new projects dev environment.
    - `terminus site:clone idfive-drupal-accelerator.dev your-new-idfive-project.dev`
    - It may take a few minutes before you’re able to see it after it is done.
    - The cloned site’s lando.yml site will be identical to the original site. So be sure to change it, manually, to a new name as this can cause many issues both locally and remotely.
  </TabItem>

  <TabItem value="wp" label="WordPress)">
   - Make sure you have Terminus installed. Installation instructions are [found here](https://docs.pantheon.io/terminus/install).
    - Install terminus site clone plugin. The following code will use terminus itself to install the plugin. There are alternative install methods [listed here](https://github.com/pantheon-systems/terminus-site-clone-plugin/blob/master/README.md).
    - `terminus self:plugin:install pantheon-systems/terminus-site-clone-plugin`
    - Make sure you are logged in to Pantheon on your machine via terminus with: `terminus auth:login --machine-token=yourreallylongmachinetokenstring`
    - Use the terminus site clone to copy the Accelerator projects’s dev environment to your new projects dev environment.
    - `terminus site:clone idfive-accelerator.dev your-new-idfive-project.dev`
    - It may take a few minutes before you’re able to see it after it is done.
    - The cloned site’s lando.yml site will be identical to the original site. So be sure to change it, manually, to a new name as this can cause many issues both locally and remotely.
  </TabItem>
</Tabs>

## IMPORTANT.

If you use `lando init` to copy the project from pantheon to your local machine, lando will automatically update your lando.yml to an updated machine site name and id. However if you clone the site to your machine using git, the cloned site’s lando.yml site will be identical to the original site. So be sure to change it, manually, to a new name as this can cause many issues both locally and remotely.