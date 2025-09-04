# idfive WordPress Accelerator CMS Training Overview

This document provides a comprehensive training outline for the **idfive WordPress Accelerator** website. This training is designed to help content managers and administrators effectively use the CMS for day-to-day content management tasks.

---

## idfive WordPress Accelerator

**Website CMS Training - [TRAINING DATE]**  
**Screen Share:** [MEETING URL]

**IDFIVE ATTENDEES:**
- [LIST IDFIVE TEAM MEMBERS]

**CLIENT ATTENDEES:** (ensure logins created for all attendees)
- [LIST CLIENT TEAM MEMBERS]

---

## Getting Started

### URLs & Access
- **Development URL:** https://idfive-accelerator-lando.lndo.site
- **Production URL:** [PRODUCTION URL HERE]
- **Admin Login:** `/wp-admin` or `/wp-login.php`
- **Content Management:** `/wp-admin/edit.php`

### Initial Questions for Tailored Training
1. **Who are we training?** (Roles: Content managers, administrators, editors, etc.)
2. **What is their current skillset** in WordPress or other CMS platforms?
3. **What are their day-to-day roles** in the site? (What content will they manage most frequently?)

---

## Overview of Site and Content Types

### User Roles & Responsibilities
- **Administrator:** Full site access, configuration, user management, plugin management
- **Editor:** Create and edit all content, manage media, moderate comments
- **Author:** Create and edit own content, upload media
- **Contributor:** Create and edit own content (requires approval for publishing)
- **Subscriber:** Profile management and commenting (if enabled)

### Menu Structure
The site uses several menus for navigation and functionality:

- **Main Menu** (`main-menu`) - Primary site navigation
- **Utility Menu** (`utility-menu`) - Secondary utility links
- **Audience Menu** (`audience-menu`) - Audience-specific navigation  
- **CTA Menu** (`cta-menu`) - Call-to-action menu items
- **Footer Menu** (`footer-menu`) - Primary footer navigation
- **Footer Utility Menu** (`resources-menu`) - Footer utility/resource links
- **Legal Menu** (`footer-bottom-menu`) - Legal and compliance links

### Content Type Overview

#### 1. Pages (`page`)
- **Purpose:** Static informational content (About, Services, Contact, etc.)
- **Key Features:** Hierarchical structure, rich text content, media integration, custom templates
- **Special Templates:** Homepage, Landing Page templates available
- **Typical Use:** Static informational content, policy pages, landing pages

#### 2. Posts (`post`)
- **Purpose:** Blog posts, news articles, timely content
- **Key Features:** Categories, tags, author attribution, publication date, comments
- **Typical Use:** Regular content updates, news, insights, thought leadership

#### 3. People (`idfive_person`)
- **Purpose:** Staff profiles, team member pages, leadership bios
- **Key Features:** Biography, contact information, photo, role, person type taxonomy
- **Template:** Custom single-person template with contact card layout
- **Typical Use:** Team directories, staff spotlights, leadership pages

#### 4. Alerts (`alert`)
- **Purpose:** Site-wide notifications and important messages
- **Key Features:** Alert text, links, REST API endpoint for dynamic display
- **Special Integration:** Custom REST endpoint at `/wp-json/idfive_base/v2/alerts`
- **Typical Use:** Emergency notifications, maintenance notices, announcements

### Special Integrations
- **idfive Component Library (ICL):** Powers the visual components and design system
- **Timber/Twig Templates:** Modern templating system for flexible layouts
- **Advanced Custom Fields (ACF):** Custom field management and block creation
- **Custom REST Endpoints:** For alerts and dynamic content integration

---

## Content Type Detailed Training

### Page Management
**Frontend Review:**
- Navigate to various pages to see different layouts and templates
- Identify homepage vs. standard page vs. landing page layouts

**Backend Management:**
- Access: `Pages > Add New` or `Pages > All Pages`
- Review page attributes: templates, parent pages, page order
- Practice with Gutenberg blocks and custom ACF blocks
- Understand hierarchy and URL structure

**Available Page Templates:**
- Default Page Template
- Homepage Template (page_homepage.php)
- Landing Page Template (page_landing.php)
- All Stories Template (page_allstories.php)

### Post Management
**Frontend Review:**
- Browse existing posts to understand structure
- Note categorization and tagging systems
- Review archive and single post layouts

**Backend Management:**
- Access: `Posts > Add New` or `Posts > All Posts`
- Practice creating posts with proper metadata
- Understand publication workflows and scheduling
- Review categories, tags, and featured images
- Work with Gutenberg editor and custom blocks

### People Profile Management
**Frontend Review:**
- Browse team directory or staff pages
- Understand single person page layout with contact information
- Note person type taxonomy organization

**Backend Management:**
- Access: `People > Add New Person`
- Practice adding staff profiles with photos and information
- Understand person type taxonomy for organization
- Review contact information fields and social media integration
- Work with custom fields for roles, organizations, and contact details

### Alert Management
**Frontend Review:**
- See how alerts display site-wide (if currently active)
- Understand alert integration via REST API

**Backend Management:**
- Access: `Alerts > Add New Alert`
- Practice creating alerts with text and optional links
- Understand how alerts are excluded from search results
- Review REST API integration for dynamic display

---

## Block Editor (Gutenberg) & Custom Blocks

### Standard WordPress Blocks
- **Paragraph, Heading, Image:** Basic content blocks
- **Gallery, Video, Audio:** Media blocks
- **Columns, Group, Cover:** Layout blocks
- **Button, List, Quote:** Content enhancement blocks

### Custom ACF Blocks
The theme includes custom blocks powered by Advanced Custom Fields:

- **Component Library Blocks:** Integrated with idfive Component Library
- **Schema.org Blocks:** For enhanced SEO and structured data
- **Custom Content Blocks:** Tailored to site-specific needs

### Block Patterns and Reusable Blocks
- Create reusable block patterns for consistent layouts
- Save frequently used block combinations
- Manage reusable blocks across the site

---

## Media Management

### File Naming Conventions
- **No spaces:** Use hyphens or underscores (`my-file-name.jpg`)
- **Lowercase:** All file names should be lowercase
- **Descriptive names:** Use meaningful, descriptive file names
- **Avoid special characters:** Stick to letters, numbers, hyphens, and underscores

### Image Optimization
- **Compression:** Use tools like TinyPNG before uploading
- **File formats:** 
  - JPG for photographs
  - PNG for graphics with transparency
  - WebP for modern browsers (automatic conversion may be available)
  - SVG for icons and simple graphics
- **File sizes:** Keep under 1MB when possible for web performance

### Alt Text Requirements
- **Required for accessibility:** Every image must have alt text
- **Descriptive:** Describe what the image shows, not just what it is
- **Context-appropriate:** Consider how the image relates to surrounding content
- **Screen reader friendly:** Write for users who cannot see the image

### Media Library
- Access: `Media > Library`
- Organize media using folders when plugins are available
- Reuse existing media when appropriate
- Delete unused media to keep library clean
- Use featured images for posts and pages

---

## Menu Management

### Accessing Menus
- Navigate to `Appearance > Menus`
- Multiple menu locations are available for different areas of the site

### Menu Locations
1. **Main Menu:** Primary site navigation
2. **Utility Menu:** Secondary utility links in header
3. **Audience Menu:** Audience-specific navigation
4. **CTA Menu:** Call-to-action buttons
5. **Footer Menu:** Primary footer navigation
6. **Footer Utility Menu:** Secondary footer links
7. **Legal Menu:** Legal and disclaimer links

### Menu Management Best Practices
- Keep main navigation concise (5-7 top-level items)
- Use descriptive menu item labels
- Organize with logical hierarchy
- Test navigation on mobile devices
- Consider user experience and accessibility

---

## Accessibility Guidelines

### Descriptive Link Text
- **Avoid:** "Click here," "Read more," "Learn more"
- **Use:** Descriptive text that explains the destination
- **Example:** "Download the 2024 Annual Report (PDF)" instead of "Click here"

### HTML Heading Structure
- Use headings in logical order (H1 → H2 → H3)
- Don't skip heading levels
- Each page should have only one H1 (usually the page title)
- Use headings to structure content, not for styling

### Alternative Text for Images
- Required for all images
- Describe the content and function of the image
- Empty alt text (`alt=""`) for decorative images only
- Keep descriptions concise but informative

### Color and Contrast
- Ensure sufficient color contrast for text readability
- Don't rely solely on color to convey information
- Test with colorblind users in mind

### Accessible PDFs
- Use proper heading structure in source documents
- Include alt text for images in PDFs
- Ensure sufficient color contrast
- Test with screen readers when possible

---

## SEO & Performance

### SEO Best Practices
- **Page Titles:** Unique, descriptive titles for each page
- **Meta Descriptions:** Compelling descriptions that encourage clicks
- **URL Structure:** Clean, descriptive URLs
- **Header Tags:** Proper H1-H6 hierarchy
- **Internal Linking:** Link to related content within your site

### Performance Optimization
- **Image Optimization:** Compress images before uploading
- **Caching:** Utilize caching plugins when available
- **Content Delivery:** Minimize large file uploads
- **Mobile Performance:** Test site speed on mobile devices

### Schema.org Integration
The theme includes built-in schema.org markup for:
- **Person:** For people/staff profiles
- **Organization:** For company information
- **Article:** For blog posts and news
- **VideoObject:** For video content
- **ImageGallery:** For image collections

---

## Customization & Advanced Features

### Timber/Twig Templates
- The theme uses Timber for modern PHP templating
- Twig templates provide separation between logic and presentation
- Custom templates available for different content types and layouts

### Component Library Integration
- Built-in integration with idfive Component Library
- Consistent design system across all components
- Custom blocks that leverage component library elements

### Advanced Custom Fields (ACF)
- Custom field groups for enhanced content management
- Flexible content layouts
- Repeater fields for dynamic content sections
- Field groups automatically sync via JSON files

### REST API Extensions
- Custom endpoints for dynamic content (alerts system)
- Integration capabilities for external applications
- Extensible architecture for additional API endpoints

---

## Workflow & Publishing

### Content Workflow
1. **Draft:** Create content in draft status
2. **Preview:** Use preview function to review content
3. **Review:** Have content reviewed by appropriate team members (if needed)
4. **Publish:** Publish content when ready for public viewing
5. **Update:** Regular review and updates as needed

### Scheduling Content
- Use the scheduling feature to publish content at specific times
- Plan content calendars in advance
- Coordinate time-sensitive announcements

### Revision Management
- WordPress automatically saves revisions
- Compare revisions to see changes
- Restore previous versions when needed

---

## User Management & Permissions

### Adding New Users
- Access: `Users > Add New`
- Assign appropriate user roles based on responsibilities
- Provide strong password guidelines
- Send login credentials securely

### Managing User Roles
- **Administrator:** Full access (limit to 1-2 trusted users)
- **Editor:** Most content managers should be editors
- **Author:** For users who only manage their own content
- **Contributor:** For guest writers or external contributors

### User Security
- Encourage strong passwords
- Regular review of user accounts
- Remove inactive or former employee accounts promptly
- Enable two-factor authentication when available

---

## Maintenance & Support

### Regular Maintenance Tasks
- Review and update outdated content
- Check for broken links regularly
- Archive expired or time-sensitive content
- Monitor site performance and loading times
- Update WordPress core, themes, and plugins

### Content Quality Checks
- Review content for accuracy and relevance
- Ensure all images have proper alt text
- Verify links are working correctly
- Check mobile responsiveness of new content

### Backup and Security
- Regular automated backups (typically handled by hosting provider)
- Keep WordPress and plugins updated
- Monitor for security issues
- Report any suspicious activity immediately

### Support Channels
- **Technical Support:** Contact idfive for technical issues
- **Content Support:** [LIST INTERNAL PROCESSES FOR CONTENT QUESTIONS]
- **Training Resources:** WordPress.org documentation and guides
- **Emergency Contact:** [EMERGENCY CONTACT INFORMATION]

---

## Quick Reference Links

### Common Admin Paths
- **Dashboard:** `/wp-admin/`
- **All Posts:** `/wp-admin/edit.php`
- **All Pages:** `/wp-admin/edit.php?post_type=page`
- **People:** `/wp-admin/edit.php?post_type=idfive_person`
- **Alerts:** `/wp-admin/edit.php?post_type=alert`
- **Media Library:** `/wp-admin/upload.php`
- **Menus:** `/wp-admin/nav-menus.php`
- **Users:** `/wp-admin/users.php`

### Theme-Specific Features
- **Timber Templates:** Located in `/templates/` directory
- **Component Library:** Integrated idfive Component Library (ICL)
- **Custom Post Types:** People and Alerts with custom templates
- **REST API:** Custom alerts endpoint at `/wp-json/idfive_base/v2/alerts`
- **ACF Integration:** Custom blocks and field groups

### Helpful WordPress Features
- **Bulk Actions:** Select multiple items for bulk editing/deletion
- **Quick Edit:** Fast editing of post/page titles and basic fields
- **Screen Options:** Customize admin interface layout
- **WordPress Customizer:** Live preview theme customizations
- **Site Health:** Monitor WordPress installation health

---

## Training Completion Checklist

By the end of this training, users should be able to:

- [ ] Log in to the WordPress admin interface successfully
- [ ] Navigate the WordPress dashboard and menu system
- [ ] Create and edit pages, posts, and people profiles
- [ ] Upload and manage media files with proper alt text
- [ ] Use the Gutenberg block editor effectively
- [ ] Understand and work with custom ACF blocks
- [ ] Manage menus and navigation structure
- [ ] Apply accessibility best practices to content
- [ ] Understand user roles and permissions
- [ ] Use scheduling and revision features
- [ ] Know how to get help and support

---

## Additional Resources

- [WordPress User Documentation](https://wordpress.org/documentation/)
- [Gutenberg Block Editor Guide](https://wordpress.org/gutenberg/)
- [Advanced Custom Fields Documentation](https://www.advancedcustomfields.com/resources/)
- [Timber Documentation](https://timber.github.io/docs/)
- [idfive Component Library Documentation](https://bitbucket.org/idfivellc/idfive-component-library/src/master/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WordPress Security Best Practices](https://wordpress.org/support/article/hardening-wordpress/)

---

*This training overview should be customized based on specific client needs, user roles, and site functionality. Update sections as needed to reflect the actual site configuration and client requirements.*
