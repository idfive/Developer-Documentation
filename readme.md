# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Prerequisites

This project requires Node.js 18 or higher. If you have nvm installed, you can use the correct Node version by running:

```bash
nvm use 18
```

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Development Notes

### File Extensions and JSX Components

- **`.mdx` vs `.md`**: Files containing React components (like `<Tabs>` and `<TabItem>`) must use the `.mdx` extension
- **JSX in Markdown**: Docusaurus requires `.mdx` for any file that imports and uses React components
- Example: `docs/front-end/01-pattern-lab.mdx` uses `.mdx` because it contains `<Tabs>` components

### URL Structure and Link Patterns

- **Numeric Prefixes**: Docusaurus automatically strips numeric prefixes from URLs
  - File: `01-overview.md` → URL: `/overview`
  - File: `05-unical.md` → URL: `/unical`
- **Internal Links**: Use full paths for cross-section links
  - ✅ Correct: `/docs/front-end/pattern-lab`
  - ❌ Incorrect: `../front-end/01-pattern-lab`
- **Relative Links**: Within same section, use filename without prefix
  - ✅ Within accelerator folder: `/docs/accelerator/overview`
  - ❌ Avoid: `./01-overview`

### YAML Front Matter

- **Front Matter Corruption**: Be careful when editing files with complex content
- **Proper Structure**: Always ensure YAML front matter is properly closed with `---`
- **Build Errors**: Malformed YAML will cause build failures

### Tabs Component Structure

- **Proper Nesting**: `<TabItem>` components must be nested within `<Tabs>` containers
- **Duplication Issues**: Watch for duplicate tab content during editing
- **Group IDs**: Use consistent `groupId` attributes for related tab sets

### Broken Links and Build Process

- **Link Validation**: Docusaurus validates all internal links during build
- **Build Command**: Use `yarn build` to test for broken links before deployment
- **Error Messages**: Build errors provide specific paths to fix broken links

### Node Version Management

- **Required Version**: Node.js 18+ required for this Docusaurus project
- **NVM Usage**: Use `nvm use 18` to switch to correct version
- **Version Check**: Run `node --version` to verify current version
