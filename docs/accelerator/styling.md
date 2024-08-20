## Styling

On your new Accelerator Project you will have a bit of sample content with pages explaining all the different components. For now, leave this in place as it will help with Quality Control. But Now your goal is to get your new project to be more inline with its design.

One thing that will do a lot of the heavy lifting of getting your colors in order. In the `wp-content/themes/idfive-rapid-starter/icl/source/css/core/_variables.scss`, you will find colors listed and variables $primary, $secondary and $tertiary. These are calling other colors and most if not all of the components are calling these variables, so changing which colors these call will change most of the site at once. Though you will still have to adjust as needed.

![Default color variables](_media/default-u50project-variables.jpg)
![Default site colors](_media/default-u50project-color.jpg)
![New color variables](_media/new-u50project-variables.jpg)
![New site colors](_media/new-u50project-color.jpg)

Things to check for:

- Max page content width
- Fonts
- Margins
- Header styles
- Breadcrumbs
- Event page formatting (i.e. the calendar for the date picker)

To upload the new website’s logo can be found by logging into the wordpress website and using the options menu. These global options include options for the logo and mobile logo, The CTA links above the main navigation. And the footer content.

