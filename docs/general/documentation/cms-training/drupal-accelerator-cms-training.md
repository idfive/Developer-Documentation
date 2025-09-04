# idfive Drupal Accelerator CMS Training Overview

This document provides a comprehensive training outline for the **idfive Drupal Accelerator** website. This training is designed to help content managers and administrators effectively use the CMS for day-to-day content management tasks.

---

## idfive Drupal Accelerator

**Website CMS Training - [TRAINING DATE]**  
**Screen Share:** [MEETING URL]

**IDFIVE ATTENDEES:**
- [LIST IDFIVE TEAM MEMBERS]

**CLIENT ATTENDEES:** (ensure logins created for all attendees)
- [LIST CLIENT TEAM MEMBERS]

---

## Getting Started

### URLs & Access
- **Development URL:** https://idfive-drupal-accelerator.lndo.site
- **Production URL:** [PRODUCTION URL HERE]
- **Admin Login:** `/user/login`
- **Content Management:** `/admin/content`

### Initial Questions for Tailored Training
1. **Who are we training?** (Roles: Content managers, administrators, editors, etc.)
2. **What is their current skillset** in Drupal or other CMS platforms?
3. **What are their day-to-day roles** in the site? (What content will they manage most frequently?)

---

## Overview of Site and Content Types

### User Roles & Responsibilities
- **Administrator:** Full site access, configuration, user management
- **Content Manager:** Create and edit content, manage media
- **Editor:** Edit existing content, limited publishing permissions

### Menu Structure
The site uses several menus for navigation and functionality:

- **Main Navigation** (`main`) - Primary site navigation
- **Header Audience Links** (`header-audience-links`) - Targeted audience navigation
- **Header CTA Links** (`header-cta-links`) - Call-to-action buttons in header
- **Header Utility Links** (`header-utility`) - Utility links (search, login, etc.)
- **Footer Primary Links** (`footer`) - Main footer navigation
- **Footer Secondary Links** (`footer-secondary-links`) - Secondary footer navigation
- **Footer Disclaimer Links** (`footer-disclaimer-links`) - Legal/disclaimer links

### Content Type Overview

#### 1. Home Page (`idfive_home_page`)
- **Purpose:** Site homepage with dynamic content areas
- **Key Features:** Hero sections, content blocks, featured content
- **Typical Use:** Updated periodically for announcements, featured content

#### 2. Basic Page (`idfive_page`)
- **Purpose:** Standard content pages (About, Services, etc.)
- **Key Features:** Rich text content, media integration, sidebar options
- **Typical Use:** Static informational content, policy pages

#### 3. Landing Page (`idfive_landing_page`)
- **Purpose:** Campaign-specific or targeted content pages
- **Key Features:** Flexible layout options, call-to-action components
- **Typical Use:** Marketing campaigns, event promotion, targeted messaging

#### 4. Article (`idfive_article`)
- **Purpose:** Blog posts, news articles, timely content
- **Key Features:** Author attribution, publication date, categories, tags
- **Typical Use:** Regular content updates, news, insights, thought leadership

#### 5. Event (`idfive_event`)
- **Purpose:** Event listings and detail pages
- **Key Features:** Date/time fields, location, registration information
- **Typical Use:** Upcoming events, webinars, conferences

#### 6. Person (`idfive_person`)
- **Purpose:** Staff profiles, team member pages
- **Key Features:** Biography, contact information, photo, role
- **Typical Use:** Team directories, staff spotlights

#### 7. Alert (`idfive_alert`)
- **Purpose:** Site-wide notifications and important messages
- **Key Features:** Priority levels, expiration dates, display options
- **Typical Use:** Emergency notifications, maintenance notices, announcements

### Special Integrations
- **idfive Component Library (ICL):** Powers the visual components and design system
- **Brand Assistant Module:** Provides content analysis and brand compliance checking
- **Custom Theme Integration:** Seamless integration with idfive design standards

---

## Content Type Detailed Training

### Home Page Management
**Frontend Review:**
- Navigate to the homepage to see current layout and content
- Identify editable regions and dynamic content areas

**Backend Management:**
- Access: `Content > Add content > Home Page`
- Review all available fields and their frontend correlation
- Practice editing hero sections, content blocks, and featured areas
- Understand how changes affect the frontend display

**Special Considerations:**
- Homepage often feeds from other content types
- Layout changes may require administrator permissions
- Consider site performance when adding large media files

### Basic Page & Landing Page Management
**Frontend Review:**
- Compare Basic Page vs. Landing Page layouts
- Understand when to use each content type

**Backend Management:**
- Access: `Content > Add content > Basic Page` or `Landing Page`
- Review field mapping between backend and frontend
- Practice with rich text editor and media embedding
- Understand sidebar and layout options

**Available Components:**
- [LIST SPECIFIC WIDGETS/COMPONENTS AVAILABLE]
- Text blocks, image galleries, call-to-action buttons
- Embedded forms, video players, quote blocks

### Article Management
**Frontend Review:**
- Browse existing articles to understand structure
- Note categorization and tagging systems

**Backend Management:**
- Access: `Content > Add content > Article`
- Practice creating articles with proper metadata
- Understand publication workflows and scheduling
- Review SEO fields and social media integration

### Event Management
**Frontend Review:**
- Browse event listings and detail pages
- Understand how events display in calendars/listings

**Backend Management:**
- Access: `Content > Add content > Event`
- Practice adding events with dates, times, locations
- Understand registration integration (if applicable)
- Review recurring event options

### Person Profile Management
**Frontend Review:**
- Browse team directory or staff pages
- Understand how profiles integrate with other content

**Backend Management:**
- Access: `Content > Add content > Person`
- Practice adding staff profiles with photos and information
- Understand departmental organization
- Review contact information integration

### Alert Management
**Frontend Review:**
- See how alerts display site-wide
- Understand different alert priority levels

**Backend Management:**
- Access: `Content > Add content > Alert`
- Practice creating time-sensitive alerts
- Understand expiration and scheduling options
- Review display location settings

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
  - SVG for icons and simple graphics
- **File sizes:** Keep under 1MB when possible for web performance

### Alt Text Requirements
- **Required for accessibility:** Every image must have alt text
- **Descriptive:** Describe what the image shows, not just what it is
- **Context-appropriate:** Consider how the image relates to surrounding content
- **Screen reader friendly:** Write for users who cannot see the image

### Media Library
- Access: `Content > Media`
- Organize media using folders when available
- Reuse existing media when appropriate
- Delete unused media to keep library clean

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

### Accessible PDFs
- Use proper heading structure in source documents
- Include alt text for images in PDFs
- Ensure sufficient color contrast
- Test with screen readers when possible

---

## Brand Compliance & Content Quality

### Brand Assistant Integration
This site includes the **idfive Brand Assistant** module for content quality:

- **Real-time Analysis:** Content is checked against brand guidelines as you type
- **Terminology Consistency:** Helps maintain consistent language across the site
- **Accessibility Compliance:** Flags potential accessibility issues
- **Style Guidelines:** Ensures content follows established brand voice

### Content Best Practices
- Write in active voice when possible
- Use clear, concise language
- Follow established terminology and style guides
- Consider your audience when writing
- Proofread before publishing

---

## Administrative Notes

### Content Workflow
1. **Draft:** Create content in draft status
2. **Review:** Have content reviewed by appropriate team members
3. **Publish:** Publish content when ready for public viewing
4. **Update:** Regular review and updates as needed

### User Management
- Administrators can create and manage user accounts
- Assign appropriate roles based on user responsibilities
- Regular audit of user access and permissions

### Maintenance & Support
- **Ongoing Maintenance Contract:** [IF APPLICABLE - LIST TICKETING SYSTEM PROCESS]
- **Technical Support:** Contact idfive for technical issues
- **Content Support:** [LIST INTERNAL PROCESSES FOR CONTENT QUESTIONS]

### Regular Maintenance Tasks
- Review and update outdated content
- Check for broken links regularly
- Archive expired events and time-sensitive content
- Monitor site performance and loading times

---

## Quick Reference Links

### Common Admin Paths
- **Content Overview:** `/admin/content`
- **Add New Content:** `/node/add`
- **Media Library:** `/admin/content/media`
- **Menu Management:** `/admin/structure/menu`
- **User Management:** `/admin/people`

### Theme-Specific Features
- **Component Library Integration:** Powered by idfive Component Library (ICL)
- **Custom Templates:** Located in `/themes/custom/idfive_accelerator/templates/`
- **Theme Settings:** Access via `Appearance > Settings > idfive Accelerator`

### Helpful Drupal Shortcuts
- **Clear Cache:** May be needed after major changes
- **Content Scheduling:** Use publication date fields for future publishing
- **Bulk Operations:** Use content overview page for bulk actions

---

## Training Completion Checklist

By the end of this training, users should be able to:

- [ ] Log in to the admin interface successfully
- [ ] Navigate the content management interface
- [ ] Create and edit each content type relevant to their role
- [ ] Upload and manage media files properly
- [ ] Understand menu structure and navigation
- [ ] Apply accessibility best practices
- [ ] Use the Brand Assistant for content quality
- [ ] Understand basic workflow and publishing process
- [ ] Know where to get help and support

---

## Additional Resources

- [Drupal User Guide](https://www.drupal.org/docs/user_guide/en/index.html)
- [idfive Component Library Documentation](https://bitbucket.org/idfivellc/idfive-component-library/src/master/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Content Strategy Best Practices](https://gathercontent.com/blog/content-strategy-best-practices)

---

*This training overview should be customized based on specific client needs, user roles, and site functionality. Update sections as needed to reflect the actual site configuration and client requirements.*
