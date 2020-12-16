# Drupal Social Share

## The Need

Clients often require that pages on their sites can be easily and attractively shared on social media. Developers direct the format of the shared post through the use of metatags in the code of the webpage being shared. Social media services scrape the code of the page for information to display in the share.

Each social media platform has its own way of scraping/previewing, which may potentially change at any time in the future. In general, we can simply ensure that metatags, particularly OG metatags are as optimized as possible.

## Metatags

Metatags in the page source code directs social media services how to render the shared page on social media. Facebook and LinkedIn use the [Open Graph Protocol](https://ogp.me/). Open Graph metatags have the prefix 'og.' Twitter uses it's own proprietary set of tags with the prefix 'twitter.' Twitter specifically calls shared content formats 'cards.' Open Graph prefers to say that og metatags turns webpages into open graph objects that can be used by social media services.

Common service sharing guides for developers:

- [Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)
- [Facebook](https://developers.facebook.com/docs/sharing/webmasters/)
- [LinkedIn](https://www.linkedin.com/help/linkedin/answer/46687/making-your-website-shareable-on-linkedin?lang=en)

Open Graph only requires the following tags for sharing:

- `og:title`
- `og:image`
- `og:description`
- `og:url`

Twitter cards work similarly, with the following as the suggested minimum tags:

- `twitter:card`
- `twitter:site`
- `twitter:description`
- `twitter:image`
- `twitter:image:alt`

The Twitter card tags are self explanatory, save for twitter:card tag and the twitter:site. Twitter:card identifies the card type to use. Twitter provides four formats to choose from for shares: [summary](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary), [summary card with large image](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image), [app card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/app-card), and [player card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/player-card). Twitter:site contains the Twitter username the card should be attributed to.

### Examples

#### Open Graph

```html
<meta property="og:site_name" content="Site Name Here" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Page Title Here" />
<meta property="og:url" content="https://MY_AWESOME_SITE/page_title_here" />
<meta property="og:description" content="Short description of page content goes here." />
<meta property="og:updated_time" content="2020-02-03T10:44:48-05:00" />
<meta property="og:image" content="https://MY_AWESOME_SITE/files/field/image/SOCIAL_IMAGE.jpg" />
```

#### Twitter

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:creator" content="@CLIENTS_TWITTER_HANDLE" />
<meta name="twitter:url" content="https://MY_AWESOME_SITE/page_title_here" />
<meta name="twitter:title" content="Page Title Here" />
<meta name="twitter:description" content="Short description of page content goes here." />
<meta name="twitter:image" content="https://MY_AWESOME_SITE/files/field/image/SOCIAL_IMAGE.jpg" />
```

## Image standards

[Facebook](https://developers.facebook.com/docs/sharing/webmasters/images/):

- The minimum allowed image dimension is 200 x 200 pixels.
- The size of the image file must not exceed 8 MB.
- Use images that are at least 1200 x 630 pixels for the best display on high resolution devices. At the minimum, you should use images that are 600 x 315 pixels to display link page posts with larger images.

[Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image):

- Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels.
- Images must be less than 5MB in size.
- JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.

[LinkedIn](https://www.linkedin.com/help/linkedin/answer/70781/image-specifications-for-your-linkedin-pages-and-career-pages?lang=en):

- Use a 1.91:1 ratio (1200x627 px).
- Image must be more than 200px wide.
- If your image width is less than 200px, it will appear as a thumbnail on the left side of the post.
- Images on mobile won’t be cropped. Images of other ratios will show in full with subtle white padding.

Generally, this means that images with a 1.91:1 to a 2:1 ratio will look fine shared. Images should be between 600 and 2000 pixels wide. When defining the image in Drupal, set the maximum and minimum dimensions with explicit instructions for sizing for best use by social media platforms.

## Drupal modules

For drupal projects, the first step is to figure out the desired level of customization and control needed. Some options:

- Simply provide a default image/images for the entire site.
- Provide a default image for all, and use an existing field to customize a single content type, like articles/etc.
- Add a specific field to some/all content types, just for the social share image.

Once you figure out the approach, metatags can be added to webpages using the [metatag module](https://www.drupal.org/project/metatag). Versions are available for both Drupal 7 and Drupal 8. The basic process for both versions is the same: entity fields are associated with tags in the metatags.

The configuration for the metatag module in Drupal 8 is at: /admin/config/search/metatag. If a media or image field (media field preferred) is to be added to "all" content types, the standard content entry can be used.

To add a new configuration for an entity type, either to override the "content" metatags, or do something special per content type:

- Click on the "Add Default Metatags" button.
- Configure the Open Graph or Twitter Card sharing format by associating tags with tokens representing entity fields.
- [Drupal online documentation](https://www.drupal.org/docs/8/modules/metatag/features-of-metatag-for-drupal-8) includes a full description of the module's features.
- Media Field token example: `[node:FIELD_MY_MEDIA_FIELD:entity:field_media_image:large:url]`. Notice the "large" which is an image style. This can be left out if wanted, or custom image style created.
- Image Field token example: `[node:FIELD_MY_IMAGE_FIELD:entity:url]`.

### The default idfive D8 metatag setup

The following metatags usually does the trick quite well, for most sites. At the outset, it is helpful to narrow down:

- Which content types require custom sharing images/etc
- What media/image field on each content type will be used.

Once you have that, using the metatags module:

- Under site default, set an og:image to be the standard sharing image, ie: `/sites/default/themes/custom/MY_THEME/images/social_share.png`
- For each content type you wish to use a field present on the content, add an override for the og:image that provides both the field image, and the default (Give it two): `[node:FIELD_MY_MEDIA_FIELD:entity:field_media_image:large:url], /sites/default/themes/custom/MY_THEME/images/social_share.png`

This tends to work well generally, however the caveat is that the "platform" chooses which one to use ultimately. Tricks to "persuade it to choose the custom one" include:

- Add it as the first one in the list
- Make it larger than the standard default, can even create a custom image style if needed.

### Adding default images (programmatically)

Default share images can be added in a preprocess function. We find this to be the best way to "only add a default if a field is empty/etc". The stock way to do this, would be to provide 2 images in the metatag module, but we find this to be less than ideal sometimes, when further control is needed. Add a new metatag by adding to the `$variables['page']['#attached']['html_head']` array in the `hook_preprocess_html` function. The metatag is an array containing a tag type and an array of attributes containing the name and content attributes of the tag.

For example:

```php
$metatag = [
  '#tag' => 'meta',
  '#attributes' => [
      'name' => 'og:image',
      'content' => 'https://path/to/desired/image.jpg'
  ],
];
$variables['page']['#attached']['html_head'][] = [$metatag, "twitter:image"];
```

Unfortunately, `hook_preprocess_html` does not provide the node entity, so it has to be fetched. Then, it can be checked for type, or simply make sure that the image field is empty before adding the meta tag. For example:

```php
// Get the node
$node = \Drupal::request()->attributes->get('node');
if ($node) {
  // Get content type
  $type = $node->getType();
  // If is desired content type, and field holding media/image is empty
  if ($type == "CONTENT_TYPE" && $node->FIELD_MY_IMAGE_OR_MEDIA_FIELD->isEmpty()) {
    $metatag = [
      '#tag' => 'meta',
      '#attributes' => [
          'name' => 'twitter:image',
          'content' => 'https://path/to/desired/image.jpg'
      ],
    ]
    $variables['page']['#attached']['html_head'][] = [$metatag, "twitter:image"];
  }
}
```

## Linters

Each service provides a page for checking and debugging shared posts.

- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### _Note on current use for clients using MVC Apps_

(As of 2/20) Howard University, and several other clients rely heavily on the use of REST APIs to distribute information across associated sites. Some of these subsequent sites rely on MVC's (like angular). For Howard, for example, The newsroom, people profile, and calendar are angular apps. Articles posted on the newsroom site, for example, have an "article" URL which, through use of a rewrite rule in an .htaccess file, displays content from a "static" URL. Debugging any issues where posts seem to not display correctly should begin with looking at the .htaccess file. This isn a typical issue for MVC apps, which traditionally have required a static, or server side redirect for both search and share.
