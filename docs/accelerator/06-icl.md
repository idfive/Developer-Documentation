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
- **Pattern Library**: All Accelerator components follow ICL design patterns established in the [Pattern Lab environment](/docs/front-end/idfive-component-library)
- **Wireframe Foundation**: Project wireframes are built using ICL components
- **Consistency Standards**: Ensures all projects maintain idfive design standards

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

The ICL is built using modern frontend tools and is available as a Pattern Lab environment. For developers working with Accelerator projects:

- **Pattern Lab Interface**: View all components in isolation and in page context
- **Build System**: Uses Vite/PostCSS (v2+) or SCSS (v1) depending on version
- **Component Library**: TypeScript modules with accessibility utilities
- **Staging Environment**: Available at [staging site](https://staging2.idfive.com/idfive-pattern-lab-starter/public/?p=pages-welcome) (username/password: `guest`)

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
