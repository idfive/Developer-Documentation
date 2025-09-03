---
description: Media module setup, image optimization, and responsive image handling in Drupal
---

# Drupal Media & Images

## Media Module

Core media module should be used for all D8 projects, unless there is a good reason not to.

- The [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs) module ships with several entity browsers. These should be used as the form display choice for media fields, as it narrows down by type, as well as adds an upload option.

## Image Optimize

Use [ImageAPI Optimize](https://www.drupal.org/project/imageapi_optimize) ([re.Smush.it](https://www.drupal.org/project/imageapi_optimize_resmushit), [TinyPNG](https://www.drupal.org/project/imageapi_optimize_tinypng) or other services) to optimize images as they are uploaded and used in image styles. It is important that these be set up/enabled early so that all images uploaded can benefit from optimization throughout the build process.

## Focal Point

Use the [Focal Point](https://www.drupal.org/project/focal_point) module on projects when a single image may be used across multiple image styles/crops. Once installed:

- Change the widget of the media:image entity form display (`/admin/structure/media/manage/image/form-display`) to "Image (Focal Point)".
- For any image style you wish to use this feature on, adjust the effects to use either "Focal Point Crop" or "Focal Point Scale and Crop".
- Now when adding a media:image entity, you will be presented with the focal point thumbnail where you may define a focal point, and any image styles throughout the site that use a focal point effect, should be available via the "preview" link.

## Lazy Loading

If the build uses the ICL, consider enabling the [idfive Lazyload](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs/src/8.x-2.x/modules/idfive_lazyload/) module. Note: The lazyload JS must be in the theme for this to work.

## Image Styles

Image styles should be utilized for all images being output in a template. This allows us to set parameters for size/etc, as well as ImageApi Optimize.

## Responsive Images

The core responsive images module helps us to define different image styles for different breakpoints. This does require custom config setup of breakpoints. See [Working with Breakpoints](https://www.drupal.org/docs/8/theming-drupal-8/working-with-breakpoints-in-drupal-8). This requires a bit of setup so should be defined/used for the larger hero images/etc, but may not make sense for "All Images".

- Enable responsive image module.
- Compile a list of breakpoints, usually by looking at the static frontend.
- Create YOUR_THEME_OR_MODULE.breakpoints.yml utilizing the above, located in the root of the custom module or themes root folder, and clear cache.
- Add a new desired responsive image style
- Add new view mode for Image Media Type, as "Responsive Image", using added breakpoints.
- Set up display for image field in "Responsive Image" display to be Responsive Image, and the responsive image style you created.
- Add media field of type image to content, under Manage display, choose Rendered entity > Render as Responsive Image.

### Example theme_name.breakpoints.yml

```yml
theme_name.imagesize.mobile:
  label: Mobile
  mediaQuery: ''
  weight: 0
  multipliers:
    - 1x
  group: THEME NAME Image Sizes
theme_name.imagesize.tablet:
  label: Tablet
  mediaQuery: 'all and (min-width: 560px) and (max-width: 900px)'
  weight: 1
  multipliers:
    - 1x
  group: THEME NAME Image Sizes
theme_name.imagesize.desktop:
  label: Desktop
  mediaQuery: 'all and (min-width: 901px)'
  weight: 2
  multipliers:
    - 1x
  group: THEME NAME Image Sizes
```

## Related Documentation

- [Drupal Site Building](./drupal-sitebuilding.md) - Core site building practices
- [Drupal Custom Development](./drupal-custom-development.md) - Development patterns and best practices
- [Drupal Content Architecture](./drupal-content-architecture.md) - Views, queries, and content patterns
