# Accessibility for CMS Editors

## Overview

Content managers and CMS editors play a crucial role in maintaining website accessibility. While developers handle the technical infrastructure, content creators directly impact three key areas that affect accessibility compliance:

1. **Alternative Text** for images
2. **Content Structure and Organization** - including headings, link text, tables, lists, and formatting
3. **Document** accessibility and usage

The technical aspects of accessibility—like keyboard navigation, color contrast, and semantic markup—are handled through the website's code and design. However, the content you create and how you structure it has a direct impact on whether users with disabilities can effectively access and navigate your site.

## Images and Alternative Text (Alt Text)

### What is Alt Text?

Alternative text (alt text) is descriptive text associated with images that provides essential information to users who cannot see the image. This includes people using screen readers, those with slow internet connections where images may not load, and situations where images fail to display.

### How Alt Text Supports Accessibility

Screen readers—assistive technology used by people with visual impairments—read alt text aloud when they encounter images. Without proper alt text, users miss important visual information and may not understand the full context of your content.

### Writing Effective Alt Text

Good alt text follows these principles:

- **Be concise**: Aim for 125-150 characters or less
- **Be descriptive**: Explain what the image shows and its purpose
- **Be contextual**: Consider how the image relates to surrounding content
- **Avoid redundancy**: Don't start with "image of" or "picture of"
- **Focus on function**: Describe what the image accomplishes, not just what it depicts

#### Examples:

**Poor alt text:** "Image of students"

**Better alt text:** "Three students collaborating on laptops in the library"

**Best alt text:** "Students working together on a group project, demonstrating collaborative learning spaces available on campus"

### Decorative Images

Some images are purely decorative and don't convey important information. These should be marked as decorative or given empty alt text so screen readers skip them entirely.

**Use decorative marking for:**
- Background patterns or textures
- Divider lines or design elements
- Images that are purely aesthetic and don't add content value

### Adding Alt Text in Your CMS

The specific process varies by CMS, but generally:

1. **During upload**: Most modern CMS platforms prompt for alt text when you add images to the media library
2. **Use AI assistance**: Many systems offer AI-generated alt text suggestions as a starting point
3. **Review and customize**: Always review automatically generated alt text and revise for accuracy and context
4. **Persistent alt text**: Once added to an image in the media library, alt text typically stays with that image wherever it's used

### Image Best Practices for Accessibility

**Avoid these common mistakes:**

- **Text in images**: Don't embed important text directly into images unless that text is repeated elsewhere on the page or fully described in the alt text
- **Event posters as content**: Using poster images for events without providing the same information in text format creates accessibility barriers
- **Images as links**: If an image serves as a link, the alt text should describe the link destination, not just the image content

## Heading Structure

### Why Heading Structure Matters

Proper heading structure creates a logical outline for your content, similar to how you might organize a document in Word or Google Docs. Screen reader users rely on this structure to navigate efficiently through content, often jumping from heading to heading to find specific information.

### Correct Heading Hierarchy

Headings should follow a logical numerical sequence:

- **Heading 1 (H1)**: Page title (should appear only once per page)
- **Heading 2 (H2)**: Main sections
- **Heading 3 (H3)**: Subsections under H2
- **Heading 4 (H4)**: Subsections under H3
- And so on...

#### Example Structure:

```
H1: Annual Report 2024
  H2: Executive Summary
  H2: Financial Performance
    H3: Revenue Analysis
    H3: Expense Overview
      H4: Operating Expenses
      H4: Capital Investments
  H2: Looking Forward
    H3: Strategic Goals
    H3: Budget Projections
```

### Creating Headings in Your CMS

Most CMS editors include a format dropdown menu (often set to "Paragraph" by default):

1. **Select your text**: Highlight the text that should become a heading
2. **Choose heading level**: Use the format dropdown to select the appropriate heading level (H2, H3, etc.)
3. **Don't add additional styling**: Avoid making headings bold or italic—proper styling is handled automatically by your site's design

### Common Heading Mistakes to Avoid

**Don't:**
- Skip heading levels (jumping from H2 to H4)
- Use headings to make text larger or more prominent if it's not actually a heading
- Use multiple H1 tags on a single page
- Choose headings based on visual appearance rather than content hierarchy

## Content Structure and Organization

Beyond images and documents, how you structure and organize your content has a major impact on accessibility. This includes headings, links, tables, lists, formatting, and writing style.

### Heading Structure

#### Why Heading Structure Matters

Proper heading structure creates a logical outline for your content, similar to how you might organize a document in Word or Google Docs. Screen reader users rely on this structure to navigate efficiently through content, often jumping from heading to heading to find specific information.

#### Correct Heading Hierarchy

Headings should follow a logical numerical sequence:

- **Heading 1 (H1)**: Page title (should appear only once per page)
- **Heading 2 (H2)**: Main sections
- **Heading 3 (H3)**: Subsections under H2
- **Heading 4 (H4)**: Subsections under H3
- And so on...

##### Example Structure:

```
H1: Annual Report 2024
  H2: Executive Summary
  H2: Financial Performance
    H3: Revenue Analysis
    H3: Expense Overview
      H4: Operating Expenses
      H4: Capital Investments
  H2: Looking Forward
    H3: Strategic Goals
    H3: Budget Projections
```

#### Creating Headings in Your CMS

Most CMS editors include a format dropdown menu (often set to "Paragraph" by default):

1. **Select your text**: Highlight the text that should become a heading
2. **Choose heading level**: Use the format dropdown to select the appropriate heading level (H2, H3, etc.)
3. **Don't add additional styling**: Avoid making headings bold or italic—proper styling is handled automatically by your site's design

#### Common Heading Mistakes to Avoid

**Don't:**
- Skip heading levels (jumping from H2 to H4)
- Use headings to make text larger or more prominent if it's not actually a heading
- Use multiple H1 tags on a single page
- Choose headings based on visual appearance rather than content hierarchy

### Link Accessibility

#### Writing Effective Link Text

Link text is crucial for accessibility because screen reader users often navigate by jumping from link to link. They need to understand where each link leads without relying on surrounding context.

##### Link Text Best Practices:

- **Be descriptive**: Link text should clearly indicate the destination or action
- **Make sense out of context**: Users should understand the link's purpose even when read alone
- **Keep it concise**: Aim for clear, brief descriptions that don't overwhelm
- **Avoid generic phrases**: Never use "click here," "read more," "learn more," or "here"

##### Examples:

**Poor link text:**
- "Click here for more information about our programs"
- "To learn about financial aid, click here"
- "Read more"

**Better link text:**
- "View our academic programs"
- "Financial aid information"
- "Read more about student life"

**Best link text:**
- "Academic Programs: Bachelor's and Master's Degrees"
- "Financial Aid: Scholarships, Grants, and Loan Information"
- "Student Life: Campus Activities and Housing Options"

#### Link Context and Clarity

##### When Generic Text Is Necessary

Sometimes design or space constraints require generic link text. In these cases, work with your development team to provide additional context for screen readers.

##### External Links

Clearly indicate when links lead to external websites:

- **Good**: "U.S. Department of Education website"
- **Better**: "Apply for federal student aid (external site)"

#### Links in Lists and Navigation

When creating navigation menus or lists of links:

- Ensure each link is unique and descriptive
- Avoid repetitive link text like multiple "Learn more" links
- Consider the reading order when links are accessed sequentially

##### Example of Improved Link List:

**Before:**
- Undergraduate Programs - Learn more
- Graduate Programs - Learn more  
- Online Programs - Learn more

**After:**
- Undergraduate degree programs
- Graduate degree programs
- Online degree programs

### Color and Visual Information

#### Don't Rely on Color Alone

Never use color as the only way to convey important information. Users who are colorblind or using screen readers won't receive information communicated through color alone.

##### Examples:

**Poor practice:**
- "Items in red are required fields"
- "Green text indicates approved applications"
- Using only red/green indicators for pass/fail status

**Better practice:**
- "Required fields are marked with an asterisk (*) and shown in red"
- "Approved applications are marked 'APPROVED' and highlighted in green"
- Use icons, text labels, or formatting along with color

### Text Formatting and Writing

#### Emphasis and Important Information

**Use semantic formatting appropriately:**

- **Bold text**: For strong emphasis or key terms
- *Italic text*: For mild emphasis, foreign words, or titles
- Avoid using all caps for emphasis (screen readers may spell out each letter)

**Avoid using formatting solely for visual appeal:**
- Don't make text bold just to make it look bigger
- Don't use italic text as a substitute for proper heading structure
- Use proper heading styles instead of bold text for section headers

#### Plain Language and Clarity

##### Writing Accessible Content

- **Use simple sentence structures**: Avoid overly complex sentences
- **Define acronyms and abbreviations**: Spell out terms on first use
- **Be consistent with terminology**: Use the same terms throughout your content
- **Provide context**: Help users understand where they are and what they're reading

##### Content Organization

- **Use descriptive page titles**: Help users understand what each page contains
- **Include summary information**: Provide overviews for complex topics
- **Break up long content**: Use subheadings and shorter sections
- **Logical reading order**: Ensure content flows naturally from beginning to end

#### Text Length and Readability

- **Keep paragraphs reasonably short**: Large blocks of text can be overwhelming
- **Use bullet points and lists**: Break up dense information
- **Write in plain language**: Avoid jargon when possible
- **Provide definitions**: Explain technical terms when they're necessary

### Tables and Data

#### When to Use Tables

Use tables only for tabular data, not for layout purposes. Tables should present information that has a logical relationship between rows and columns.

**Appropriate table uses:**
- Comparing data across categories
- Showing schedules or timetables  
- Displaying financial information
- Course listings with credits, prerequisites, etc.

#### Creating Accessible Tables

##### Table Headers

Always include header rows and/or columns that describe the data. Most CMS platforms provide options to designate header rows when creating tables.

##### Table Captions and Context

- **Add table captions**: Briefly describe what the table contains
- **Provide context**: Explain complex data relationships when necessary
- **Keep it simple**: Avoid overly complex table structures when possible

**Example caption:** "Course Requirements: Shows required courses, credit hours, prerequisites, and semester availability"

### Lists and Organization

#### Using Lists Effectively

Lists help organize information and make it easier for screen readers to navigate.

##### When to Use Different List Types:

**Bulleted lists (unordered):** For items where order doesn't matter
- Course features
- Available amenities  
- Program benefits

**Numbered lists (ordered):** For sequential steps or ranked items
1. Application process steps
2. Priority registration order
3. Graduation requirements

#### List Best Practices

- **Keep list items parallel**: Use consistent grammar and structure
- **Avoid single-item lists**: If there's only one item, consider using regular paragraph text
- **Break up very long lists**: Consider organizing into categories or multiple shorter lists

### Video and Media Content

#### Video Accessibility Requirements

When embedding videos on your website, ensure they include accessibility features:

##### Captions and Transcripts

**Captions** (synchronized text overlays):
- Required for all video content with audio
- Should include not just speech, but also important sound effects
- Auto-generated captions often contain errors and should be reviewed and corrected

**Transcripts** (full text versions):
- Provide complete text of all spoken content
- Include descriptions of important visual elements
- Should be available on the same page or easily accessible from the video

#### Embedding Media Responsibly

##### Video Controls

- Ensure videos don't auto-play with sound
- Provide clear play/pause controls
- Allow users to adjust volume

##### Alternative Formats

Consider providing multiple ways to access the same information:
- Video + transcript
- Audio podcast + transcript  
- Written summary of video content

## Document Accessibility

### Why Document Accessibility Matters

Documents linked from your website—PDFs, Word documents, spreadsheets—must meet the same accessibility standards as web pages. Since these files exist outside your CMS, you have complete control over their accessibility compliance.

### Key Document Accessibility Requirements

#### 1. Proper Structure
- **Heading hierarchy**: Use the same logical heading structure described above
- **Reading order**: Ensure content flows logically from beginning to end
- **Lists and tables**: Use proper formatting for lists and include table headers

#### 2. Alternative Text
- All images within documents need descriptive alt text
- Charts and graphs require detailed descriptions of the data they present

#### 3. Interactive Elements
- **Forms**: Must be "fillable" using only keyboard navigation
- **Links**: Should have descriptive text that makes sense out of context
- **Tables**: Require proper header rows to describe content

#### 4. Technical Requirements
- **Language**: Specify the document's primary language
- **Title**: Include a meaningful title in the document properties
- **File naming**: Use descriptive, accessible file names

### Creating Accessible Documents

**Best practices for document creation:**

1. **Start with structure**: Use proper headings and formatting in your source document (Word, Google Docs, etc.)
2. **Add alt text**: Include alternative text for all images and graphics
3. **Use built-in tools**: Take advantage of accessibility checkers in your document software
4. **Convert properly**: When creating PDFs, use "Export" or "Save as PDF" rather than printing to PDF

### PDF Accessibility Checking and Remediation

If you have Adobe Acrobat Pro, you can check and fix many accessibility issues:

1. **Open your PDF** in Adobe Acrobat Pro
2. **Find the Accessibility tool** (often under "Tools" menu)
3. **Run accessibility checker**: Look for "Check for Accessibility"
4. **Review results**: The tool will identify specific issues
5. **Fix common problems**: Many issues can be resolved directly in the interface:
   - Add missing titles
   - Include alt text for images
   - Fix heading structure
   - Correct table headers

### When to Use Documents vs. Web Pages

#### Best Use Cases for Documents:
- Content intended for printing
- Forms requiring signatures
- Large reference materials (policies, contracts, extensive data sheets)
- Content that users need to download and save

#### Better as Web Pages:
- Information meant to be read on electronic devices
- Content consisting mainly of text and simple images
- Shorter content that fits well on a webpage
- Forms that don't require signatures
- Information you want to be easily searchable

**Remember**: Content formatted as web pages is generally more accessible and mobile-friendly than documents. When possible, prioritize web page content over downloadable documents.

## Link Accessibility

### Writing Effective Link Text

Link text is crucial for accessibility because screen reader users often navigate by jumping from link to link. They need to understand where each link leads without relying on surrounding context.

#### Link Text Best Practices:

- **Be descriptive**: Link text should clearly indicate the destination or action
- **Make sense out of context**: Users should understand the link's purpose even when read alone
- **Keep it concise**: Aim for clear, brief descriptions that don't overwhelm
- **Avoid generic phrases**: Never use "click here," "read more," "learn more," or "here"

#### Examples:

**Poor link text:**
- "Click here for more information about our programs"
- "To learn about financial aid, click here"
- "Read more"

**Better link text:**
- "View our academic programs"
- "Financial aid information"
- "Read more about student life"

**Best link text:**
- "Academic Programs: Bachelor's and Master's Degrees"
- "Financial Aid: Scholarships, Grants, and Loan Information"
- "Student Life: Campus Activities and Housing Options"

### Link Context and Clarity

#### When Generic Text Is Necessary

Sometimes design or space constraints require generic link text. In these cases, provide additional context:

```html
<!-- Add context for screen readers -->
<a href="programs.html">Learn more<span class="visually-hidden"> about academic programs</span></a>

<!-- Or use the title attribute as a last resort -->
<a href="programs.html" title="Learn more about academic programs">Learn more</a>
```

#### External Links

Clearly indicate when links lead to external websites:

- **Good**: "U.S. Department of Education website"
- **Better**: "Apply for federal student aid (external site)"

### Links in Lists and Navigation

When creating navigation menus or lists of links:

- Ensure each link is unique and descriptive
- Avoid repetitive link text like multiple "Learn more" links
- Consider the reading order when links are accessed sequentially

#### Example of Improved Link List:

**Before:**
- Undergraduate Programs - Learn more
- Graduate Programs - Learn more  
- Online Programs - Learn more

**After:**
- Undergraduate degree programs
- Graduate degree programs
- Online degree programs

## CMS-Specific Accessibility Features

### Modern CMS Accessibility Tools

Most contemporary content management systems include accessibility features to help content creators:

- **Alt text prompts**: Required fields for image alternative text
- **AI alt text suggestions**: Automated descriptions that can be reviewed and edited
- **Heading style options**: Clear formatting choices for proper heading hierarchy
- **Accessibility checkers**: Built-in tools that scan for common accessibility issues
- **Preview modes**: Options to see how content appears to screen readers

### Working with Your Development Team

While content creators handle much of the day-to-day accessibility work, some issues require developer intervention:

- **Complex interactive elements**: Custom widgets or advanced functionality
- **Template modifications**: Changes to page layouts or component structures  
- **Third-party integrations**: External tools or plugins that may have accessibility issues
- **Technical auditing**: Comprehensive accessibility testing and remediation

Don't hesitate to communicate with your development team when you encounter:
- Accessibility barriers you can't resolve
- Requests for new content types or layouts
- Questions about best practices for complex content

## Testing Your Content for Accessibility

### Quick Self-Checks

Before publishing content, consider these simple tests:

1. **Tab through your page**: Can you navigate all interactive elements using only the Tab key?
2. **Review your headings**: Do they create a logical outline when viewed as a list?
3. **Check your images**: Does each image have appropriate alt text that serves its purpose?
4. **Test your links**: Do link descriptions make sense when read out of context?
5. **Review use of color**: Is important information conveyed through more than just color?
6. **Check your tables**: Do tables have clear headers and logical structure?
7. **Consider mobile users**: Does your content work well on smaller screens?
8. **Read your content aloud**: Does it flow naturally and make sense?

### Browser Extensions for Content Creators

Several free browser extensions can help identify accessibility issues:

- **WAVE**: Highlights accessibility issues directly on your page
- **Lighthouse**: Provides accessibility scores and specific recommendations  
- **Axe DevTools**: Identifies common accessibility problems with detailed explanations

### When to Seek Help

Content accessibility can be complex. Reach out to your accessibility team or developers when you encounter:
- Contradictory accessibility requirements
- Complex data presentations (charts, graphs, tables)
- Interactive content beyond basic text and images
- Questions about compliance requirements

## Conclusion

Accessibility in content creation is about ensuring everyone can access and benefit from the information you provide. By focusing on clear image descriptions, logical heading structure, and accessible document creation, you're making a significant contribution to an inclusive web experience.

Remember that accessibility is an ongoing process, not a one-time checklist. As you create content, keep these principles in mind:

- **Every image should tell its story** through alt text
- **Every page should have a clear structure** through proper headings
- **Every link should be self-explanatory** and avoid generic text like "click here"
- **Every document should be accessible** to all users
- **Information should never rely on color alone** to convey meaning
- **Content should be written in clear, plain language** when possible
- **When in doubt, ask for help** from your accessibility team or developers

Your role as a content creator is essential to making the web accessible for everyone. These practices not only support users with disabilities but often improve the experience for all users by creating clearer, more organized, and more findable content.

---

_This guide complements the broader [Accessibility Overview](/docs/accessibility/overview). For technical implementation details, developers can reference the [Developer Guidelines](/docs/accessibility/developers)._