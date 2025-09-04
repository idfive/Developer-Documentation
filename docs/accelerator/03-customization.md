---
description: Customization    ## Adding/removing Content Types

    The WordPress Accelerator includes these content types by default:
    - Pages (`page`) - Static content with hierarchical structure
    - Posts (`post`) - Blog posts and news articles  
    - People (`idfive_person`) - Staff profiles and team member pages
    - Alerts (`alert`) - Site-wide notifications and important messages

    ### Removing Content Types

    - **Events/calendar**: This is controlled by "The Events Calendar" plugin. Simply disable plugin.
    - **Forms**: This is gravity forms plugin. Simply disable plugin, and add any form plugin desired.
    - **People**:
      - Remove any existing content.
      - Remove custom post type: wp-content/themes/idfive-rapid-starter/inc/custom-post-type.php
      - Remove the include: `include('inc/custom-post-type.php');` from functions.php if needed.
      - Remove any blocks in use that reference people, or adjust them.
    
    ### Adding Custom Post Types
    - Add CPT to: wp-content/themes/idfive-rapid-starter/inc/custom-post-type.php
    - Create any widgets and templates desired.
    - See [WordPress Accelerator CMS Training](/docs/general/documentation/cms-training/wordpress-accelerator-cms-training) for detailed content type documentationccelerator client projects
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Customization

<Tabs groupId="accelerator-versions">
  <TabItem value="drupal" label="Drupal" default>

    ## Adding/removing Content Types

    - Follow all drupal best practices.
    - The Drupal Accelerator includes these content types by default:
      - Home Page (`idfive_home_page`)
      - Basic Page (`idfive_page`) 
      - Landing Page (`idfive_landing_page`)
      - Article (`idfive_article`)
      - Event (`idfive_event`)
      - Person (`idfive_person`)
      - Alert (`idfive_alert`)
    - Each content type has specific field configurations and templates
    - See [Drupal Accelerator CMS Training](/docs/general/documentation/cms-training/drupal-accelerator-cms-training) for detailed content type documentation

  </TabItem>

  <TabItem value="wp" label="WordPress">

    ## Adding/removing Content Types

    - Events/calendar. This is controlled by the “The Events Calendar” plugin. Simply disable plugin.
    - Forms. This is gravity forms plugin. Simply disable plugin, and add any form plugin desired.
    - People:
    - Remove any existing content.
    - Remove custom post type: wp-content/themes/idfive-rapid-starter/inc/custom-post-type.php
    - Remove the include: `include(‘inc/custom-post-type.php’);` from functions.php if needed.
    - Remove any blocks in use that reference people, or adjust them.
    - Adding Custom Post Types:
    Add CPT to: wp-content/themes/idfive-rapid-starter/inc/custom-post-type.php
    - Create any widgets and templates desired.

    ## Creating a new ACF custom block

    - Create a new block in the ACF Dashboard. Sidebar > ACF.
    - Callbacks/controllers need to be added here for your new block: `wp-content/themes/idfive-rapid-starter/inc/blocks.php` You will need to add your new block to the idf_acf_init() function, as well as define a callback, where you will do any preprocessing/etc. Also see bottom of this page where blocks are whitelisted. **You will need to add new blocks here in order for them to show up!!**
    - Create your template in wp-content/themes/idfive-rapid-starter/templates/blocks.

  </TabItem>

</Tabs>

## Some Accelerator projects will require some additional functionality to add to the project

Examples:

- Developing upcoming events and past events shortcode/paragraphs.
- Adding pagination to the news feed at the threshold of 9+ posts
- Adding fields/post types
- Etc.

This will probably be unique from project to project. Each Project will be slightly different and come with its own challenges. If you discover anything that is wrong with the core of Accelerator, add it as a trello ticket in the [Accelerator Trello board](https://trello.com/b/VwWXAr21/under-50-project). Or, if proposed new functionality would benefit future Accelerator sites, notify accelerator team for consideration.

## Related Training Resources

For comprehensive client training materials and content management guidance:

- **[Drupal Accelerator CMS Training](/docs/general/documentation/cms-training/drupal-accelerator-cms-training)** - Complete training guide for Drupal Accelerator projects
- **[WordPress Accelerator CMS Training](/docs/general/documentation/cms-training/wordpress-accelerator-cms-training)** - Complete training guide for WordPress Accelerator projects
- **[General CMS Training Guidelines](/docs/general/documentation/cms-training/client-cms-training)** - Framework for conducting client training sessions

These resources include detailed content type documentation, accessibility guidelines, workflow instructions, and training checklists that complement the technical customization information in this document.
