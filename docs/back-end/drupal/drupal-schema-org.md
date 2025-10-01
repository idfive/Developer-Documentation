---
description: Implementation guide for Schema.org structured data in Drupal for improved SEO and search engine visibility
---

# Schema.org Implementation in Drupal

Schema.org structured data helps search engines understand your content better, leading to improved search visibility and rich snippets in search results. This guide covers implementation strategies and best practices for Drupal sites.

## Overview

Schema.org provides a vocabulary for structured data that can be embedded in web pages using JSON-LD, Microdata, or RDFa formats. For Drupal, JSON-LD is the recommended approach as it's easier to implement and maintain.

### Benefits

- Enhanced search engine visibility
- Rich snippets in search results
- Better content understanding by search engines
- Improved click-through rates
- Support for voice search optimization

## Hybrid Implementation Strategy

This implementation combines Drupal's Schema Metatag module with custom JSON-LD templates to provide comprehensive structured data coverage across the site.

### 1. Schema Metatag Module for Content Types

- Handles node-level structured data through Drupal's metatag system
- Uses token-based field mapping for dynamic content population
- Configured through administrative interface for each content type
- Provides consistent schema markup for standard content

### 2. Custom JSON-LD in Templates

- Manual implementation of JSON-LD structured data in Twig templates and theme components
- Used for complex components and dynamic data sources
- Allows for advanced schema properties not covered by standard modules
- Required for paragraph components that appear multiple times on a single page

## Module Recommendations

### Schema.org Metatag Module

The primary recommended approach for implementing Schema.org in Drupal.

```bash
composer require drupal/schema_metatag
drush en schema_metatag -y
```

Key sub-modules to enable:

- `schema_article` - For articles and blog posts
- `schema_organization` - For organization/company information
- `schema_person` - For person/author profiles
- `schema_web_page` - For general page markup
- `schema_event` - For events

## Basic Implementation

### Site-wide Organization Schema

Set up basic organization schema that appears on every page:

1. Navigate to `/admin/config/search/metatags/global`
2. Add Schema.org Organization fields:
   - **Organization Name**: Your organization name
   - **Organization Logo**: URL to your logo
   - **Organization URL**: Your website URL
   - **Organization Same As**: Social media profiles (one per line)

Example JSON-LD output:

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

Content types like Articles, Pages, and Events use the Schema Metatag module configuration through the administrative interface. This approach provides token-based field mapping for dynamic content population.

#### Article Schema Setup

For news articles and blog posts:

1. Go to `/admin/structure/types/manage/article/fields`
2. Configure Schema.org Article metatags at `/admin/structure/types/manage/article/display/metatags`

Key fields to configure using Drupal tokens:

- **Article Author**: `[node:author:display-name]`
- **Article Publisher**: Use organization name
- **Article Headline**: `[node:title]`
- **Article Description**: `[node:field_summary]` or `[node:body:summary]`
- **Article Image**: `[node:field_featured_image:entity:field_media_image:large:url]`
- **Article Date Published**: `[node:created:custom:c]`
- **Article Date Modified**: `[node:changed:custom:c]`

#### Person Content Type

For person/author profiles:

- **Person Name**: `[node:title]`
- **Person Job Title**: `[node:field_job_title]`
- **Person Affiliation**: `[node:field_organization]`
- **Person Image**: `[node:field_profile_image:entity:field_media_image:large:url]`
- **Person Email**: `[node:field_email]`

#### Basic Page Content Type

For general pages using WebPage schema:

- **WebPage Name**: `[node:title]`
- **WebPage Description**: `[node:field_meta_description]`
- **WebPage URL**: `[node:url:absolute]`
- **WebPage Breadcrumb**: Handled separately via breadcrumb implementation

## Paragraph Component Schema Implementation

### Why Custom JSON-LD is Required for Paragraphs

Paragraph components require custom template-level schema implementation because multiple paragraph instances can appear on a single page. Each paragraph component (video embeds, image galleries, card collections, etc.) needs its own structured data block to properly describe its content to search engines. The Schema Metatag module operates at the node level and cannot handle the granular, multi-instance nature of paragraph components.

### Template-Level Schema Generation with Twig

#### Video Embed Paragraph Template Example

```twig
{# Video paragraph with dynamic field data #}
{% if paragraph.field_video_url.value %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": {{ paragraph.field_video_title.value|default('Video')|json_encode|raw }},
  {% if paragraph.field_video_thumbnail.entity.field_media_image.entity.fileuri %}
  "thumbnailUrl": {{ file_url(paragraph.field_video_thumbnail.entity.field_media_image.entity.fileuri)|json_encode|raw }},
  {% endif %}
  "embedUrl": {{ paragraph.field_video_url.value|json_encode|raw }},
  {% if paragraph.field_video_description.value %}
  "description": {{ paragraph.field_video_description.value|striptags|json_encode|raw }}
  {% endif %}
}
</script>
{% endif %}
```

#### Image Gallery Paragraph Template Example

```twig
{# Image gallery with multiple images #}
{% if paragraph.field_gallery_images %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": {{ paragraph.field_gallery_title.value|default('Image Gallery')|json_encode|raw }},
  "numberOfItems": {{ paragraph.field_gallery_images|length }},
  "itemListElement": [
    {% for key, image in paragraph.field_gallery_images %}
      {
        "@type": "ImageObject",
        "position": {{ key + 1 }},
        "url": {{ file_url(image.entity.field_media_image.entity.fileuri)|json_encode|raw }},
        {% if image.entity.field_media_image.alt %}
        "caption": {{ image.entity.field_media_image.alt|json_encode|raw }}
        {% endif %}
      }{{ not loop.last ? ',' }}
    {% endfor %}
  ]
}
</script>
{% endif %}
```

#### Card Collection Paragraph Template Example

```twig
{# Card collection paragraph #}
{% if paragraph.field_cards %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": {{ paragraph.field_section_title.value|default('Card Collection')|json_encode|raw }},
  "itemListElement": [
    {% for key, card in paragraph.field_cards %}
      {
        "@type": "Article",
        "position": {{ key + 1 }},
        "headline": {{ card.entity.field_card_title.value|json_encode|raw }},
        {% if card.entity.field_card_summary.value %}
        "description": {{ card.entity.field_card_summary.value|striptags|json_encode|raw }},
        {% endif %}
        {% if card.entity.field_card_link.uri %}
        "url": {{ card.entity.field_card_link.uri|json_encode|raw }},
        {% endif %}
        {% if card.entity.field_card_image.entity.field_media_image.entity.fileuri %}
        "image": {
          "@type": "ImageObject",
          "url": {{ file_url(card.entity.field_card_image.entity.field_media_image.entity.fileuri)|json_encode|raw }}
        }
        {% endif %}
      }{{ not loop.last ? ',' }}
    {% endfor %}
  ]
}
</script>
{% endif %}
```

#### Testimonial/Review Paragraph Template Example

```twig
{# Testimonial/Review paragraph #}
{% if paragraph.field_testimonial_text.value %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewBody": {{ paragraph.field_testimonial_text.value|striptags|json_encode|raw }},
  {% if paragraph.field_testimonial_author.value %}
  "author": {
    "@type": "Person",
    "name": {{ paragraph.field_testimonial_author.value|json_encode|raw }}
    {% if paragraph.field_author_title.value %},
    "jobTitle": {{ paragraph.field_author_title.value|json_encode|raw }}
    {% endif %}
  },
  {% endif %}
  {% if paragraph.field_rating.value %}
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": {{ paragraph.field_rating.value }},
    "bestRating": "5"
  }
  {% endif %}
}
</script>
{% endif %}
```

### Special Case: Events Integration

Events require custom JSON-LD implementation due to the complexity of handling multiple event dates, external calendar data, and real-time feed updates that cannot be effectively managed through standard Drupal content fields.

#### Event Calendar Feed Implementation

```twig
{% if event_feed_data|length %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": {{ content.field_events_title.0['#markup']|default('Events')|json_encode|raw }},
  "itemListElement": [
    {% for event in event_feed_data %}
      {
        "@type": "ListItem",
        "position": {{ loop.index }},
        "item": {
          "@type": "Event",
          "name": {{ event.title|json_encode|raw }},
          "url": {{ event.url|json_encode|raw }},
          "startDate": {{ event.date.start.iso|json_encode|raw }},
          {% if event.date.end.iso %}
          "endDate": {{ event.date.end.iso|json_encode|raw }},
          {% endif %}
          {% if event.image %}
          "image": {{ event.image.large_url|json_encode|raw }},
          {% endif %}
          {% if event.description %}
          "description": {{ event.description|striptags|truncate(200)|json_encode|raw }},
          {% endif %}
          {% if event.location %}
          "location": {
            "@type": "Place",
            "name": {{ event.location|json_encode|raw }}
          },
          {% endif %}
          "eventStatus": "https://schema.org/EventScheduled"
        }
      }{{ not loop.last ? ',' }}
    {% endfor %}
  ]
}
</script>
{% endif %}
```

## Implementation Decision Matrix

### When to Use Schema Metatag Module

- Standard content types with straightforward field mapping
- Content that fits well within predefined schema templates
- When administrative control over schema is needed
- Single-instance content per page

### When to Use Custom JSON-LD in Paragraph Templates

- Multiple instances of the same component type on a page
- Complex components with specialized schema requirements
- Dynamic content from external sources
- Components requiring multiple schema types or advanced properties

### Twig Template Best Practices

1. **Always use `json_encode|raw` filter** for proper JSON formatting
2. **Include conditional checks** for optional fields using `{% if %}`
3. **Use `striptags` filter** to clean HTML from text fields
4. **Implement proper null checks** before outputting schema
5. **Test schema output** with Google's Structured Data Testing Tool
6. **Use `file_url()` function** for generating absolute URLs to media files
7. **Handle empty fields gracefully** with default values where appropriate

## Testing and Validation

### Google's Rich Results Test

Test your structured data implementation:

1. Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your page URL or paste the schema markup
3. Review any errors or warnings
4. Test different content types and pages

### Schema.org Validator

For comprehensive validation:

1. Visit [Schema.org Validator](https://validator.schema.org/)
2. Paste your JSON-LD markup
3. Review validation results
4. Fix any syntax errors or missing required properties

### Common Validation Issues

- **Missing required properties**: Ensure all required schema properties are included
- **Invalid date formats**: Use ISO 8601 format (YYYY-MM-DDTHH:MM:SS)
- **Broken image URLs**: Verify image URLs are absolute and accessible
- **Inconsistent data**: Ensure schema data matches visible page content

## Best Practices

### Content Guidelines

- **Match visible content**: Schema data should reflect what users see on the page
- **Use specific types**: Choose the most specific schema type available
- **Include all relevant properties**: Add optional properties when available
- **Keep data current**: Ensure schema reflects current page content

### Performance Considerations

- **Cache schema generation**: Use Drupal's cache system for complex schema generation
- **Limit schema size**: Avoid overly large schema objects
- **Conditional loading**: Only generate schema for relevant content types
- **Template-level caching**: Consider fragment caching for paragraph templates with heavy processing

### Implementation Guidelines

#### Schema Metatag Module Usage

- Use for standard content types with straightforward field mapping
- Leverage when administrative control over schema is needed
- Best for single-instance content per page
- Configure using Drupal tokens for dynamic content

#### Custom Template Implementation

- Required for paragraph components with multiple instances per page
- Use for complex components with specialized schema requirements
- Necessary for dynamic content from external sources
- Implement when multiple schema types are needed for one component

### Maintenance

- **Regular testing**: Periodically test schema markup with validation tools
- **Monitor search console**: Check Google Search Console for structured data errors
- **Update schemas**: Keep schema types current with Schema.org updates
- **Document implementations**: Maintain documentation of custom schema implementations
- **Template updates**: Keep Twig templates in sync with field changes

## Related Documentation

- [Drupal Custom Development](./drupal-custom-development.md) - Development patterns and best practices
- [Drupal Content Architecture](./drupal-content-architecture.md) - Content structure and organization
- [Drupal Site Building](./drupal-sitebuilding.md) - Core site building practices

## External Resources

- [Schema.org Official Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)
- [Schema Metatag Module Documentation](https://www.drupal.org/project/schema_metatag)
- [JSON-LD Specification](https://json-ld.org/)
