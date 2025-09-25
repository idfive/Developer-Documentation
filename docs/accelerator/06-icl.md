---
description: idfive Component Library (ICL) - Wireframe and component library for Accelerator projects
---

# idfive Component Library (ICL)

The idfive Component Library (ICL) is a comprehensive wireframe and component library that serves as the foundation for Accelerator projects. It provides standardized design patterns, components, and layouts that ensure consistency across all idfive projects.

For complete technical documentation on ICL implementation, build process, and development workflow, see the **[ICL Technical Documentation](/docs/front-end/idfive-component-library)**.

## Design Resources

- **[ICL Figma File](https://www.figma.com/design/eu9mNNW1mG6veuPWCwua8H/%F0%9F%93%92-idfive-Wireframe-Library-v8?m=auto&t=PnhZtJzrKXWlxv2m-1)** - Complete idfive wireframe library with reusable components and patterns

## ICL in Accelerator Context

The ICL directly influences Accelerator project structure and provides the foundation for all components used in both Drupal and WordPress Accelerator sites.

### Integration Points

- **Header Configuration**: Site Options reference ICL Header Types (Full vs Hybrid)
- **Component Sync**: ICL components are manually synced to both [Drupal Accelerator](https://dev-idfive-drupal-accelerator.pantheonsite.io/) and [WordPress Accelerator](https://dev-idfive-accelerator.pantheonsite.io/) sites
- **Pattern Library**: All Accelerator components follow ICL design markup
- **Consistency Standards**: Ensures all projects maintain idfive design standards

## Updating the ICL in Accelerator Projects
To update an Accelerator Project to the latest version of the ICL:
- [Download the latest tagged version as a zip file](https://bitbucket.org/idfivellc/idfive-component-library/downloads/?tab=tags) from Bitbucket and unzip
- Replace the current ICL in Accelerator with this download:
  - In Drupal, this is at `/idfive-drupal-accelerator/web/themes/custom/idfive_accelerator/idfive-component-library`
  - In WordPress, this is at `/idfive-accelerator/wp-content/themes/idfive-rapid-starter/idfive-component-library`
- Update the `package.json` file to add in the CMS being used in `"front-end-usage-intent": "",`
  - In Drupal
    - `package.json` is at `/idfive-drupal-accelerator/web/themes/custom/idfive_accelerator/idfive-component-library/package.json`
    - Update `front-end-usage-intent` to `"front-end-usage-intent": "drupal",` (case-sensitive, should be all lower case)
    - Open terminal at `/idfive-drupal-accelerator/web/themes/custom/idfive_accelerator/idfive-component-library/`
    - Run `nvm use`
    - Run `npm install`
    - Run `npm run build`
  - In Wordpress
    - `package.json` is at `/idfive-accelerator/wp-content/themes/idfive-rapid-starter/idfive-component-library/package.json`
    - Update `front-end-usage-intent` to `"front-end-usage-intent": "wordpress",` (case-sensitive, should be all lower case)
    - Open terminal at `/idfive-accelerator/wp-content/themes/idfive-rapid-starter/idfive-component-library/`
    - Run `nvm use`
    - Run `npm install`
    - Run `npm run build`

## Key Components in Accelerator

### Header Types

- **Full Header**: Complete navigation with all elements visible
- **Hybrid Header**: Streamlined navigation with selective element display
- **Mobile Navigation**: Responsive navigation patterns for mobile devices

### Content Components

- **Page Templates**: Standardized layouts for different content types
- **Navigation Patterns**: Consistent navigation structures and behaviors
- **Alert Systems**: Site-wide notification and alert components
- **Footer Structures**: Standardized footer layouts and information architecture

### Design System Elements

- **Typography Systems**: Consistent text styling and hierarchy
- **Color Schemes**: Brand-compliant color palettes and usage guidelines
- **Spacing and Layout**: Grid systems and spacing standards
- **Interactive Elements**: Button styles, form elements, and user interface components

## Technical Implementation

The ICL is built using the [Astro](https://astro.build/) static site generator framework. For developers working with Accelerator projects:

- **ICL Pages and Component list Interface**: View all components in isolation and in page context
- **Build System**: Uses Astro
- **Component Library**: Modular components
- **Demo Site**: Available at the [netlify ICL site](https://idfive-component-library.netlify.app/) (password: `guest`)

For complete setup instructions, build process, and component documentation, see **[ICL Technical Documentation](/docs/front-end/idfive-component-library)**.

## Usage Guidelines

When working with Accelerator projects:

1. **Reference ICL First**: Always check the ICL for existing patterns before creating new components
2. **Follow Established Patterns**: Use ICL components as the starting point for customizations
3. **Maintain Consistency**: Ensure any custom components align with ICL design principles
4. **Document Variations**: If deviating from ICL patterns, document the reasoning and approach

## Related Resources

- **[ICL Technical Documentation](/docs/front-end/idfive-component-library)** - Complete setup, build process, and component development guide
- [Accelerator Overview](/docs/accelerator/overview) - Project overview and design resources
- [Site Options](/docs/accelerator/site-options) - Configuration options that reference ICL header types
- [Customization Guidelines](/docs/accelerator/customization) - How to customize while maintaining ICL consistency
