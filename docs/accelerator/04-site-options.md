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
    
    Drupal provides individual menu item configuration through the menu editing interface:

    #### Individual Menu Item Settings
    - **Enabled Checkbox**: Each menu item has an "Enabled" checkbox that controls whether the item appears in the navigation
    - **Hide from Navigation**: Uncheck "Enabled" to hide specific top-level pages from appearing in the primary navigation menu while keeping them accessible via direct URLs
    
    #### Advanced Top Level Main Navigation
    
    **Secondary Dropdown Button Label**
    - **Purpose**: If added, and this is top-level navigation, this text will display as the text of the second button in the dropdown
    - **Use Case**: Useful if the text of the Main dropdown and the secondary button need to be different
    - **Application**: This setting ONLY applies if this is a level one page in the main navigation
    - **Field**: "Optional Different Text for Link" - Enter custom text for the secondary dropdown button
    
    **Hide from Main Navigation**
    - **Purpose**: Useful for top-level landing pages and their children that need to be in the main menu for breadcrumbs and sidebar navigation, but should not be visible as a main dropdown
    - **Application**: This setting ONLY applies if this is a level one page in the main navigation
    - **Checkbox**: "Hide this item, and any children, in Top Main Navigation Bar" - Check to hide the item and its children from the top navigation while maintaining them in other navigation contexts

  </TabItem>

  <TabItem value="wp-nav" label="WordPress">

    ### Menu Configuration
    
    WordPress provides menu configuration through the **Appearance > Menus** interface:

    #### Menu Management Interface
    - **Menu Location**: Configure which menu appears in "Main Menu" location
    - **Drag and Drop**: Reorder menu items by dragging them into preferred order
    - **Page Selection**: Add pages from the left panel using checkboxes and "Add to Menu" button

    #### Individual Menu Item Settings
    - **Navigation Label**: Customize the text that appears in the navigation (can differ from page title)
    - **Menu Parent**: Set hierarchical relationships using "No Parent" dropdown
    - **Menu Order**: Control positioning with order numbers (e.g., "1 of 4")

    #### Advanced Top Level Main Navigation
    
    **Secondary Dropdown Button Label**
    - **Purpose**: If added, and this is top level navigation, this text will display as the text of the second button in the dropdown
    - **Use Case**: Useful if the text of the Main dropdown and the secondary button need to be different
    - **Field**: "Optional Different Text for Link" - Enter custom text for the secondary dropdown button
    
    **Hide in Top Main Navigation Bar**
    - **Purpose**: Useful for Top Level landing pages and their children that need to be in the main menu for breadcrumbs and sidebar navigation, but should not be visible as a main dropdown
    - **Application**: This setting ONLY applies if this is a level one page in the main navigation
    - **Checkbox**: "If chosen, this will hide this item, and its children will not display when in the Top Main Navigation" - Check to hide from top navigation while maintaining in other contexts

    #### Menu Actions
    - **Save Menu**: Save all menu configuration changes
    - **Delete Menu**: Remove the current menu configuration

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
