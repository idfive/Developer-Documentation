---
description: Stock options of idfive Accelerator client projects
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Site Options

The global site options control many sitewide features of your Accelerator project. All of the below are accessed via the Options menu in the dashboard sidebar.

<Tabs groupId="accelerator-versions">
  <TabItem value="drupal" label="Drupal" default>

    - Viewable in [Theme Settings](https://dev-idfive-drupal-accelerator.pantheonsite.io/admin/appearance/settings/idfive_accelerator).

  </TabItem>

  <TabItem value="wp" label="WordPress">

    - Viewable in [Options](https://dev-idfive-accelerator.pantheonsite.io/wp-admin/admin.php?page=acf-options).

  </TabItem>

</Tabs>

## Site Header

- Desktop Logo: This will allow you to upload the desktop version of the logo that will appear in the main navigation.
- Mobile Logo: This will allow you to upload the mobile version of the logo that will appear in the main navigation.
- Header Type: Full, or Hybrid. Corresponds to ICL Header Type.
- Show Utility Menu: Hides or shows utility menu.
- Show "Info For" Menu: Hides or shows audience dropdown menu.
- Search Location: Defines where search shoews in header, either main nav, utility nav, or hidden.
- Hybrid menu, show additional links: Only shows if "Hybrid Menu".
- Additional Links: If hybrid menu, and "show additional links" both chosen, individual links can be set here.

## Navigation Management

<Tabs groupId="accelerator-versions-nav">
  <TabItem value="drupal-nav" label="Drupal" default>

    ### Menu Configuration
    
    - **Hide Top Level Pages**: Configure main navigation to hide specific top-level pages from appearing in the primary navigation menu while keeping them accessible via direct URLs.
    - **Menu Structure**: Organize hierarchical menu items and manage their visibility in the main navigation.

  </TabItem>

  <TabItem value="wp-nav" label="WordPress">

    ### Menu Configuration
    
    - **Hide Top Level Pages**: Configure main navigation to hide specific top-level pages from appearing in the primary navigation menu while keeping them accessible via direct URLs.
    - **Menu Structure**: Organize hierarchical menu items through the WordPress menu system and manage their visibility.

  </TabItem>

</Tabs>

## Site Footer

- Footer Logo: This will allow you to upload the logo that will appear in the footer.
- Copyright Text: You can also assign the copyright name which will appear in the bottom right corner. As noted in the description, the copyright symbol will automatically be prepended.
- Social Settings: Add links to youtube/facebook/etc.
- Location and Contact: Allows you to set address, email, contacts, etc.

## Media Inquiry Settings

These settings show up on individual article pages. It is a way to have universal notes and contact, for all articles, if desired.

- Label: Title of block on articles.
- Content: descriptive text.
- Email
- Phone

## CMS Specific Settings

<Tabs groupId="accelerator-versions-cms">
  <TabItem value="drupal-cms" label="Drupal" default>

    - No drupal specific settngs currently present.

  </TabItem>

  <TabItem value="wp-cms" label="WordPress">

    ### Person

    - Archive Page: Choose the page that displays all people in the site. This is used to set the “back link” on people detail pages.

    ### News

    - Archive Page: Choose the page that displays all news in the site. This is used to set the “back link” on news detail pages.

  </TabItem>

</Tabs>
