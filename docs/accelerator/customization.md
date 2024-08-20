Adding/removing Content Types

Events/calendar. This is controlled by the “The Events Calendar” plugin. Simply disable plugin.
Forms. This is gravity forms plugin. Simply disable plugin, and add any form plugin desired.
People:
Remove any existing content.
Remove custom post type: wp-content/themes/idfive-rapid-starter/inc/custom-post-type.php
Remove the include: `include(‘inc/custom-post-type.php’); ` from functions.php if needed.
Remove any blocks in use that reference people, or adjust them.
Adding Custom Post Types:
Add CPT to: wp-content/themes/idfive-rapid-starter/inc/custom-post-type.php
Create any widgets and templates desired.
Some Accelerator projects will require some additional functionality to add to the project. Examples:

Developing upcoming events and past events shortcode.
Adding pagination to the news feed at the threshold of 9+ posts
Adding fields/post types
Etc.
This will probably be unique from project to project. Each Project will be slightly different and come with its own challenges. If you discover anything that is wrong with the core of Accelerator, add it as a trello ticket in the Accelerator Trello board. Or, if proposed new functionality would benefit future Accelerator sites, notify accelerator team for consideration.