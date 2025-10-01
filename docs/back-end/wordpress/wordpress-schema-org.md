---
description: Implementation guide for Schema.org structured data in WordPress for improved SEO and search engine visibility
---

# Schema.org Implementation in WordPress

Schema.org structured data helps search engines understand your content better, leading to improved search visibility and rich snippets in search results. This guide covers implementation strategies and best practices specifically for WordPress sites using the idfive Rapid Starter theme approach.

## Overview

Schema.org provides a vocabulary for structured data that can be embedded in web pages using JSON-LD, Microdata, or RDFa formats. For WordPress, JSON-LD is the recommended approach as it's easier to implement and maintain, aligning with Google's preferred format.

### Benefits

- Enhanced search engine visibility
- Rich snippets in search results
- Better content understanding by search engines
- Improved click-through rates
- Support for voice search optimization
- Enhanced social media sharing

## Hybrid Implementation Strategy

This implementation combines WordPress SEO plugins (primarily Yoast SEO) with custom JSON-LD templates to provide comprehensive structured data coverage across the site.

### 1. Yoast SEO Plugin for Core Content

- Handles site-level and post-level structured data through WordPress's meta system
- Uses WordPress field mapping for dynamic content population
- Configured through administrative interface for content types
- Provides consistent schema markup for standard WordPress content (posts, pages, authors)

### 2. Custom JSON-LD in Twig Templates

- Manual implementation of JSON-LD structured data in Twig templates and ACF block components
- Used for complex components and dynamic data sources
- Allows for advanced schema properties not covered by standard plugins
- Required for ACF block components that appear multiple times on a single page

## Plugin Recommendations

### Yoast SEO Plugin

The primary recommended approach for implementing core Schema.org markup in WordPress.

```bash
# Install via WordPress admin or WP-CLI
wp plugin install wordpress-seo --activate
```

Key schema types automatically handled:

- `Organization` - Site organization information
- `WebSite` - Website-level markup
- `WebPage` - Individual page markup
- `Article`/`BlogPosting` - Blog posts and articles
- `Person` - Author profiles
- `BreadcrumbList` - Navigation breadcrumbs

### Advanced Custom Fields (ACF) Pro

Essential for custom block development with schema integration:

```bash
# Required for custom block schema implementation
# Install ACF Pro through WordPress admin
```

## Basic Implementation

### Site-wide Organization Schema

Yoast SEO automatically generates organization schema that appears on every page:

1. Navigate to **SEO → Search Appearance → General**
2. Configure Organization details:
   - **Organization Name**: Your organization name
   - **Organization Logo**: Upload your logo
   - **Social Profiles**: Add social media URLs

Example JSON-LD output (automatically generated):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Organization Name",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "sameAs": [
    "https://facebook.com/yourorg",
    "https://twitter.com/yourorg",
    "https://linkedin.com/company/yourorg"
  ]
}
```

### Content Type Configuration

Standard WordPress content types (Posts, Pages, Custom Post Types) use Yoast SEO's automatic schema generation. This approach provides field-based mapping for dynamic content population.

#### Post/Article Schema Setup

Yoast automatically generates Article or BlogPosting schema for posts:

- **Article Author**: Automatically mapped from post author
- **Article Publisher**: Uses site organization information
- **Article Headline**: Post title
- **Article Description**: Post excerpt or meta description
- **Article Image**: Featured image
- **Article Date Published**: Post publication date
- **Article Date Modified**: Post modification date

#### Custom Post Type Schema

For custom post types like `idfive_person`:

```php
// In theme functions.php or plugin
add_filter('wpseo_schema_article_post_types', function($post_types) {
    $post_types[] = 'idfive_person';
    return $post_types;
});
```

## ACF Block Component Schema Implementation

### Why Custom JSON-LD is Required for ACF Blocks

ACF block components require custom template-level schema implementation because multiple block instances can appear on a single page. Each block component (video embeds, image galleries, card collections, etc.) needs its own structured data block to properly describe its content to search engines. Yoast SEO operates at the post/page level and cannot handle the granular, multi-instance nature of ACF block components.

### Template-Level Schema Generation with Twig

#### Video Block Template Example

```twig
{# Video block with dynamic ACF field data #}
{% if fields.full_width_video %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": {{ fields.full_width_video.title|default('Video')|json_encode|raw }},
  {% if fields.media_caption %}
  "description": {{ fields.media_caption|json_encode|raw }},
  {% endif %}
  {% if fields.full_width_video.poster_image.url %}
  "thumbnailUrl": {{ fields.full_width_video.poster_image.url|json_encode|raw }},
  {% elseif fields.full_width_video.video_source == 'youtube' %}
  "thumbnailUrl": "https://img.youtube.com/vi/{{ youTubeID }}/maxresdefault.jpg",
  {% elseif fields.full_width_video.video_source == 'vimeo' %}
  "thumbnailUrl": "https://vumbnail.com/{{ vimeoID }}.jpg",
  {% endif %}
  {% if fields.full_width_video.video_source == 'youtube' %}
  "embedUrl": "https://www.youtube.com/embed/{{ youTubeID }}"
  {% elseif fields.full_width_video.video_source == 'vimeo' %}
  "embedUrl": "https://player.vimeo.com/video/{{ vimeoID }}"
  {% elseif fields.full_width_video.video_source == 'media' %}
  "contentUrl": {{ fields.full_width_video.media_gallery|json_encode|raw }}
  {% endif %}
}
</script>
{% endif %}
```

#### Image Gallery Block Template Example

```twig
{# Gallery block with carousel functionality #}
{% if fields.images %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": {{ fields.gallery_title|default('Image Gallery')|json_encode|raw }},
  "numberOfItems": {{ fields.images|length }},
  "itemListElement": [
    {% for slide in fields.images %}
      {
        "@type": "ImageObject",
        "position": {{ loop.index }},
        "contentUrl": {{ slide.slide_image.url|json_encode|raw }},
        {% if slide.slide_caption %}
        "caption": {{ slide.slide_caption|json_encode|raw }},
        {% endif %}
        {% if slide.slide_image.alt %}
        "description": {{ slide.slide_image.alt|json_encode|raw }}
        {% endif %}
      }{{ not loop.last ? ',' }}
    {% endfor %}
  ]
}
</script>
{% endif %}
```

#### Featured People Block Template Example

```twig
{# Featured people block #}
{% if fields.featured_people %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": {{ fields.title|default('Featured People')|json_encode|raw }},
  "itemListElement": [
    {% for item in fields.featured_people %}
      {% set post = get_posts(item) %}
      {% set ip_title = post.meta('title') %}
      {
        "@type": "Person",
        "position": {{ loop.index }},
        "name": {{ post.post_title|json_encode|raw }},
        {% if ip_title %}
        "jobTitle": {{ ip_title|json_encode|raw }},
        {% endif %}
        {% if post.thumbNail.src %}
        "image": {{ post.thumbNail.src|json_encode|raw }},
        {% endif %}
        "url": {{ post.link|json_encode|raw }}
      }{{ not loop.last ? ',' }}
    {% endfor %}
  ]
}
</script>
{% endif %}
```

#### Featured Quote Block Template Example

```twig
{# Blockquote/Featured Quote block #}
{% if fields.blockquote_copy.quote %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Quotation",
  "text": {{ fields.blockquote_copy.quote|json_encode|raw }},
  {% if fields.blockquote_copy.attribution %}
  "author": {
    "@type": "Person",
    "name": {{ fields.blockquote_copy.attribution|json_encode|raw }}{% if fields.blockquote_copy.title %},
    "jobTitle": {{ fields.blockquote_copy.title|json_encode|raw }}{% endif %}
  },
  {% endif %}
  {% if fields.blockquote_image.url %}
  "image": {
    "@type": "ImageObject",
    "url": {{ fields.blockquote_image.url|json_encode|raw }},
    "description": {{ fields.blockquote_image.alt|json_encode|raw }}
  }
  {% endif %}
}
</script>
{% endif %}
```

#### News/Article Featured Block Template Example

```twig
{# Featured news articles block #}
{% if fields.featured_stories %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": {{ fields.section_title|default('Featured News')|json_encode|raw }},
  "itemListElement": [
    {% for story in fields.featured_stories %}
      {
        "@type": "NewsArticle",
        "position": {{ loop.index }},
        "headline": {{ story.post_title|json_encode|raw }},
        "url": {{ story.link|json_encode|raw }},
        "datePublished": {{ story.post_date|date('c')|json_encode|raw }},
        {% if story.post_excerpt %}
        "description": {{ story.post_excerpt|striptags|json_encode|raw }},
        {% endif %}
        {% if story.thumbnail.src %}
        "image": {
          "@type": "ImageObject",
          "url": {{ story.thumbnail.src|json_encode|raw }},
          {% if story.thumbnail.alt %}
          "description": {{ story.thumbnail.alt|json_encode|raw }}
          {% endif %}
        }
        {% endif %}
      }{{ not loop.last ? ',' }}
    {% endfor %}
  ]
}
</script>
{% endif %}
```

### ACF Block Registration with Schema Support

#### Block Registration Pattern

```php
// In theme's inc/blocks.php
function idf_acf_block_render_video($block, $content = '', $is_preview = false) {
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;
    
    // Add video-specific schema preparation if needed
    $context['youTubeID'] = extract_youtube_id($context['fields']['full_width_video']['youtube_video_id']);
    $context['vimeoID'] = extract_vimeo_id($context['fields']['full_width_video']['vimeo_video_id']);
    
    Timber::render('templates/blocks/video.twig', $context);
}

// Register the block
acf_register_block_type(array(
    'name' => 'full_width_video',
    'title' => __('Video'),
    'description' => __('Video with optional caption and schema markup'),
    'render_callback' => 'idf_acf_block_render_video',
    'category' => 'custom',
    'align' => 'wide',
    'icon' => 'format-image',
    'mode' => 'edit',
    'keywords' => array('Video', 'Media', 'Schema'),
));
```

## Implementation Decision Matrix

### When to Use Yoast SEO

- Standard WordPress content types (posts, pages, custom post types)
- Site-wide organization and website markup
- Author and taxonomy pages
- Single-instance content per page
- Standard WordPress queries and loops

### When to Use Custom JSON-LD in ACF Block Templates

- Multiple instances of the same component type on a page
- Complex ACF block components with specialized schema requirements
- Dynamic content from custom fields or external sources
- Components requiring multiple schema types or advanced properties
- Rich media components (videos, galleries, carousels)

### Twig Template Best Practices

1. **Always use `json_encode|raw` filter** for proper JSON formatting
2. **Include conditional checks** for optional fields using `{% if %}`
3. **Use `striptags` filter** to clean HTML from text fields
4. **Implement proper null checks** before outputting schema
5. **Test schema output** with Google's Rich Results Test
6. **Handle empty fields gracefully** with default values where appropriate
7. **Follow WordPress coding standards** in PHP render callbacks
8. **Use Timber context properly** for data preparation

## Testing and Validation

### Google's Rich Results Test

Test your structured data implementation:

1. Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your page URL or paste the schema markup
3. Review any errors or warnings
4. Test different content types and ACF blocks

### Schema.org Validator

For comprehensive validation:

1. Visit [Schema.org Validator](https://validator.schema.org/)
2. Paste your JSON-LD markup
3. Review validation results
4. Fix any syntax errors or missing required properties

### WordPress-Specific Testing

- **Yoast SEO Schema Tab**: Check the schema output in Yoast's meta box
- **View Page Source**: Verify JSON-LD appears correctly in HTML
- **ACF Block Preview**: Test schema generation in block preview mode
- **Multiple Blocks**: Ensure multiple instances generate valid schema

### Common Validation Issues

- **Missing required properties**: Ensure all required schema properties are included
- **Invalid date formats**: Use ISO 8601 format via Twig's `date('c')` filter
- **Broken image URLs**: Verify ACF image URLs are absolute and accessible
- **Inconsistent data**: Ensure schema data matches visible page content
- **Twig syntax errors**: Validate Twig template syntax and filters

## Best Practices

### Content Guidelines

- **Match visible content**: Schema data should reflect what users see on the page
- **Use specific types**: Choose the most specific schema type available (NewsArticle vs Article)
- **Include all relevant properties**: Add optional properties when ACF data is available
- **Keep data current**: Ensure schema reflects current page content and ACF field values

### Performance Considerations

- **Leverage WordPress caching**: Use WordPress object cache for complex schema generation
- **Optimize Twig rendering**: Minimize complex logic in templates
- **Conditional loading**: Only generate schema for blocks with sufficient data
- **ACF field efficiency**: Structure ACF fields to minimize template complexity

### Implementation Guidelines

#### Yoast SEO Usage

- Use for standard WordPress content with straightforward field mapping
- Leverage when administrative control over schema is needed
- Best for single-instance content per page
- Configure using WordPress hooks and filters for customization

#### Custom ACF Block Implementation

- Required for ACF block components with multiple instances per page
- Use for complex components with specialized schema requirements
- Necessary for dynamic content from ACF fields
- Implement when multiple schema types are needed for one component

### Maintenance

- **Regular testing**: Periodically test schema markup with validation tools
- **Monitor Search Console**: Check Google Search Console for structured data errors
- **Update schemas**: Keep schema types current with Schema.org updates
- **Document implementations**: Maintain documentation of custom schema implementations
- **Template updates**: Keep Twig templates in sync with ACF field changes
- **Plugin compatibility**: Test schema output when updating Yoast SEO or ACF Pro

## WordPress-Specific Considerations

### Theme Integration

- **Template Hierarchy**: Respect WordPress template hierarchy for schema placement
- **Child Theme Support**: Ensure schema implementations work in child themes
- **Timber Integration**: Leverage Timber's context system for clean data preparation
- **Hook Integration**: Use WordPress hooks for extending schema functionality

### Security

- **Output Sanitization**: Always use `json_encode|raw` for safe JSON output
- **Input Validation**: Validate ACF field data before schema generation
- **XSS Prevention**: Ensure user-generated content is properly escaped

### Multisite Considerations

- **Network Activation**: Consider schema implications across multisite networks
- **Site-Specific Config**: Allow site-specific schema customization
- **Shared Components**: Reuse schema implementations across network sites

## Related Documentation

- [WordPress Overview](./wordpress.md) - Core WordPress development practices
- [WordPress Plugins](./wordpress-plugins.md) - Commonly used and maintained plugins
- [WordPress CLI](./wordpress-cli.md) - Command line interface usage

## External Resources

- [Schema.org Official Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)
- [JSON-LD Specification](https://json-ld.org/)
