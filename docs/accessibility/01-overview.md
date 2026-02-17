# Accessibility at idfive

## Our Commitment to Accessibility

At idfive, accessibility isn't an afterthought—it's a foundational principle that guides every project we undertake. We believe the web should be accessible to everyone, regardless of ability, technology, or circumstance. This commitment extends beyond compliance; it's about creating inclusive digital experiences that serve all users effectively.

## Standards We Follow

### WCAG 2.2 AA Compliance

All idfive projects adhere to the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/WAI/WCAG22/quickref/) standards, the most current W3C Recommendation for web accessibility (published October 2023). We implement WCAG 2.2 AA where possible while ensuring full compatibility with WCAG 2.1 AA, as many organizations and regulations still reference 2.1 as their baseline standard. These comprehensive standards ensure our digital products are:

- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive
- **Operable**: User interface components and navigation must be operable by all users
- **Understandable**: Information and the operation of user interface must be understandable
- **Robust**: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies

#### Key WCAG 2.2 Enhancements

WCAG 2.2 includes important new success criteria that address modern accessibility needs:

- **Focus Not Obscured**: Ensures focused elements remain visible and not hidden by other content
- **Target Size**: Requires minimum touch target sizes for mobile and touch interfaces
- **Consistent Help**: Ensures help mechanisms appear in consistent locations across pages
- **Redundant Entry**: Reduces cognitive load by avoiding unnecessary re-entry of information
- **Accessible Authentication**: Provides alternatives to cognitive function tests in authentication processes

### Additional Standards

- **WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)**: We implement ARIA attributes to enhance the accessibility of dynamic content and complex UI components
- **Section 508**: For government and public sector clients, we align with federal accessibility requirements. Note that Section 508 is formally tied to WCAG 2.0 AA, though many agencies informally adopt higher standards
- **ADA (Americans with Disabilities Act)**: Our designs support ADA-related accessibility requirements and align with WCAG standards commonly used in legal contexts. While the ADA doesn't specify digital standards, courts often reference WCAG guidelines as benchmarks

## Our Accessibility Approach

### Semantic HTML Foundation

We build with semantic HTML as the cornerstone of accessibility. This means:

- Using proper heading hierarchy (h1, h2, h3, etc.) to create logical document structure
- Implementing semantic elements like `<nav>`, `<main>`, `<article>`, and `<section>` for clear page structure
- Ensuring all interactive elements are properly marked up with appropriate roles and attributes

### Navigation and User Experience

#### Skip Links

Every site includes skip links that allow keyboard users to bypass repetitive navigation and jump directly to main content. These are typically hidden visually but available to screen readers and keyboard navigation.

#### Keyboard Navigation

All interactive elements are fully accessible via keyboard navigation using standard patterns:

- Tab order follows logical reading sequence
- Focus indicators are clearly visible
- All functionality available via mouse is also available via keyboard
- Custom interactive components include proper focus management

#### Focus Management

We implement comprehensive focus management including:

- Visible focus indicators with sufficient color contrast
- Logical tab order throughout all pages
- Proper focus trapping in modal dialogs and overlays
- Focus restoration when closing modal elements
- Focus indicators that are not obscured by other content (WCAG 2.2)

#### Modern Interaction Patterns

- Consistent help mechanisms positioned in the same relative location across pages
- Alternative methods for drag-and-drop interactions
- Authentication processes that don't rely solely on cognitive function tests

### Visual Design Accessibility

#### Color and Contrast

- All text meets WCAG 2.2 AA color contrast requirements (4.5:1 for normal text, 3:1 for large text)
- Essential non-text elements like focus indicators, form controls, and interactive components meet 3:1 contrast ratio requirements where required for understanding or interaction
- Information is never conveyed through color alone
- Interactive elements have clear visual states (hover, focus, active)

#### Typography and Readability

- Font sizes are scalable and responsive
- Line height and spacing optimized for readability
- Text can be zoomed to 200% without loss of functionality
- Text spacing can be adjusted without loss of content or functionality

#### Touch and Interaction Design

- Touch targets meet minimum size requirements (24x24 CSS pixels for WCAG 2.2, with exceptions for spacing or alternative interaction methods)
- Drag-and-drop functionality includes alternative interaction methods
- Gesture-based controls provide single-pointer alternatives
- Motion-triggered actions can be disabled when not essential

### Images and Media

#### Alternative Text

- All informational images include descriptive alternative text
- Decorative images are properly marked to be ignored by screen readers
- Complex images (charts, graphs) include detailed descriptions when necessary

#### Media Accessibility

- Video content includes accurate captions and transcripts when applicable
- Audio content provides transcripts or alternative formats
- Autoplay media is avoided or includes user controls

## Testing and Quality Assurance

### Automated Testing Tools

We use industry-leading automated testing tools to catch accessibility issues early:

#### Browser Extensions and Dev Tools

- **aXe DevTools**: Chrome extension for comprehensive accessibility auditing
- **WAVE (Web Accessibility Evaluation Tool)**: Real-time accessibility feedback
- **Lighthouse Accessibility Audit**: Built into Chrome DevTools for performance and accessibility scoring

#### Continuous Monitoring

- **SiteImprove**: Enterprise-level accessibility monitoring for potential accessibility issues and regressions
- **W3C Markup Validator**: Ensures semantic HTML compliance

**Important Note**: Automated testing tools typically identify 30-40% of potential accessibility issues. They are essential for catching common problems but cannot replace manual testing and human evaluation for comprehensive accessibility assurance.

### Manual Testing Process

Automated tools catch many issues, but human testing is essential:

#### Screen Reader Testing

- **NVDA (Windows)**: Free, widely-used screen reader for comprehensive testing
- **JAWS**: Industry-standard screen reader for enterprise testing
- **VoiceOver (macOS/iOS)**: Apple's built-in screen reader for cross-platform testing

#### Keyboard Navigation Testing

- Complete site navigation using only keyboard input
- Testing all interactive elements and form controls
- Verifying proper focus management and visual indicators

#### Browser and Device Testing

- Testing across multiple browsers and devices
- Verifying functionality at various zoom levels
- Ensuring responsive design maintains accessibility

## Technical Implementation

### Component Library Accessibility Features

Our [idfive Component Library (ICL)](/docs/front-end/idfive-component-library) includes built-in accessibility features:

#### JavaScript Utilities

The ICL includes accessibility-focused JavaScript utilities:

- **Focus management functions** for modal dialogs and dynamic content
- **ARIA state management** for complex interactive components
- **Keyboard event handlers** for custom interactive elements

#### Component Standards

All ICL components are built with accessibility as a core requirement:

- Proper ARIA roles and attributes
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

### Drupal Accessibility Features

Our Drupal implementations include:

- **idfive ICL Theme**: Base theme with accessibility features built-in
- **Entity browser configurations** optimized for keyboard and screen reader users
- **Custom field templates** that maintain semantic structure
- **View modes** that preserve accessibility across different content displays

### WordPress Accessibility Features

WordPress sites use:

- **Timber templating** with semantic Twig templates
- **ACF (Advanced Custom Fields)** configured with accessibility labels and instructions
- **Component integration** maintaining ICL accessibility standards

## Client Education and Ongoing Support

### Content Management Training

We provide training for content managers on:

- Writing effective alternative text for images
- Creating accessible document structures with proper headings
- Using semantic markup in WYSIWYG editors
- Understanding the importance of meaningful link text

For comprehensive guidance on content accessibility, see our [CMS Editors Guide](/docs/accessibility/cms-editors).

### Client-Specific Requirements

We understand that many organizations have their own accessibility testing protocols and compliance requirements. We work closely with client accessibility teams to ensure our deliverables meet specific organizational standards:

#### In-House Compliance Teams

- **University compliance departments** with specific testing protocols
- **Corporate accessibility teams** with custom evaluation criteria
- **Government agencies** with specialized Section 508 requirements
- **Healthcare organizations** with additional privacy and accessibility considerations

#### Custom Testing Accommodation

We can adapt our development and testing processes to align with client-specific requirements when provided with:

- **Custom accessibility checklists** or evaluation criteria
- **Specific testing tools** preferred by the organization
- **Internal accessibility standards** that exceed or supplement WCAG guidelines
- **Specialized user testing protocols** involving the organization's user base

**Important Note**: To ensure seamless integration with client accessibility requirements, these specifications should be provided during project planning phases. This allows us to incorporate custom testing protocols into our development workflow and avoid remediation delays.

### Accessibility Monitoring

We offer ongoing accessibility monitoring services:

- Regular automated scans for compliance
- Manual testing for complex user interactions
- Quarterly accessibility audits
- Remediation planning and implementation

## Industry Leadership

### Staying Current

Our team stays informed about evolving accessibility standards through:

- Regular training on WCAG updates and best practices
- Participation in accessibility conferences and workshops
- Monitoring assistive technology developments
- Engaging with the accessibility community

### Continuous Improvement

We continuously refine our accessibility practices by:

- Incorporating user feedback from people with disabilities
- Testing with real users of assistive technologies
- Updating our tools and processes as standards evolve
- Sharing knowledge within the broader development community

## Why Accessibility Matters

### Universal Design Benefits

Accessible design creates better experiences for everyone:

- Clear navigation helps all users find information quickly
- Good color contrast improves readability for everyone
- Semantic markup enhances SEO and site performance
- Keyboard accessibility supports power users and alternative input devices

### Legal and Business Compliance

Beyond doing the right thing, accessibility compliance:

- Reduces legal risk and potential ADA litigation
- Expands market reach to include users with disabilities
- Demonstrates commitment to diversity and inclusion
- Often improves overall user experience and satisfaction

### SEO and Performance Benefits

While our primary focus is on providing equitable access for all users, many accessibility practices also contribute to search engine optimization and site performance:

- Semantic HTML structure improves content organization for both users and search engines
- Optimized loading times (required for accessibility) may contribute to better user experience metrics
- Clear heading structures help search engines index content
- Alternative text provides additional content for search indexing

## Getting Started

For organizations looking to improve their digital accessibility, idfive offers:

- **Accessibility audits** of existing websites and applications
- **Remediation planning** with prioritized recommendations
- **Training workshops** for internal teams
- **Ongoing monitoring** and compliance support
- **Custom compliance integration** to meet specific organizational testing requirements

### Working with Your Accessibility Team

If your organization has an in-house accessibility team or specific compliance requirements, we encourage early collaboration:

1. **Share your testing protocols** during project discovery
2. **Provide access to preferred testing tools** or evaluation criteria
3. **Include accessibility team members** in project kickoff meetings
4. **Establish review checkpoints** throughout the development process

This collaborative approach ensures our deliverables align with your internal standards while maintaining our commitment to WCAG 2.2 AA compliance as a baseline.

### Understanding CMS and Platform Limitations

It's important to note that while we follow accessibility best practices in our custom development, some accessibility challenges may arise from:

- **CMS core limitations**: Base functionality in content management systems may have accessibility gaps that require workarounds or alternative approaches
- **Third-party modules/plugins**: Contributed or commercial extensions may not always meet accessibility standards
- **Legacy content and systems**: Existing content or system constraints may require phased accessibility improvements

We work transparently with clients to identify these limitations and develop strategies to address or mitigate accessibility barriers within project constraints.

Our goal is to make the web more accessible, one project at a time. Whether you're starting a new website or improving an existing one, we're here to ensure your digital presence welcomes and serves all users effectively while meeting your organization's specific accessibility standards.

---

_For technical implementation details, developers can reference our [Developer Guidelines](/docs/accessibility/developers) and [Component Library documentation](/docs/front-end/idfive-component-library)._