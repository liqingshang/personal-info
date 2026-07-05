## ADDED Requirements

### Requirement: Static resume page is served from the repository root
The system SHALL serve a valid HTML5 page at the repository root (`index.html`) that renders without a backend or build step.

#### Scenario: Direct visit to the site
- **WHEN** a visitor opens `https://liqingshang.github.io`
- **THEN** the browser renders the resume page with no 5xx or 4xx errors

### Requirement: Page contains all expected resume sections
The system SHALL render the following sections in order: Hero, About, Experience, Projects, Skills, Education, and Contact/CTA.

#### Scenario: Full resume content is visible
- **WHEN** a visitor scrolls through the page
- **THEN** each section is reachable via the page navigation and displays its heading and placeholder content

### Requirement: Layout is responsive on common screen sizes
The system SHALL adapt the layout for mobile, tablet, and desktop viewports using a mobile-first CSS approach.

#### Scenario: Mobile viewport
- **WHEN** the page is viewed on a viewport width of 375px
- **THEN** content is readable without horizontal scrolling and navigation collapses into a hamburger menu

#### Scenario: Desktop viewport
- **WHEN** the page is viewed on a viewport width of 1280px or greater
- **THEN** content is centered with a readable maximum width and the full navigation is visible

### Requirement: Five visual themes are provided as separate CSS files
The system SHALL ship five complete visual themes, each in its own CSS file under `styles/themes/`: `minimalist-pro.css`, `cyberpunk-neon.css`, `terminal-hacker.css`, `brutalist-engineer.css`, and `warm-craftsman.css`.

#### Scenario: Theme files exist
- **WHEN** the repository is inspected
- **THEN** each theme has a dedicated CSS file that defines the full color, typography, spacing, and print styles for the page

#### Scenario: Theme can be changed by editing one line
- **WHEN** the author changes the `href` of the theme `<link>` in `index.html`
- **THEN** the page renders with the selected visual theme after reload

### Requirement: Theme can be switched via an in-page control
The system SHALL provide a theme switcher control that changes the active stylesheet and remembers the visitor’s choice across reloads.

#### Scenario: Switch theme via dropdown
- **WHEN** a visitor selects a different theme from the theme switcher
- **THEN** the page appearance changes to the selected theme and the choice is saved to `localStorage`

#### Scenario: Revisit with saved theme
- **WHEN** a visitor returns to the page after previously selecting a theme
- **THEN** the page initially renders with the saved theme

### Requirement: Contact and PDF download CTAs are present
The system SHALL display clear calls-to-action for contacting the author and downloading a PDF version of the resume.

#### Scenario: Download PDF
- **WHEN** a visitor clicks the "Download PDF" button
- **THEN** the browser initiates a download of the provided resume PDF file or opens the browser print dialog configured for PDF

#### Scenario: Contact via GitHub
- **WHEN** a visitor clicks the GitHub link
- **THEN** the browser navigates to `https://github.com/liqingshang` in a new tab

### Requirement: Site is deployed to GitHub Pages
The system SHALL be deployable to GitHub Pages from the default branch of the repository.

#### Scenario: Enable GitHub Pages
- **WHEN** GitHub Pages is enabled with source set to the default branch root
- **THEN** the site is publicly accessible at `https://liqingshang.github.io`

### Requirement: Content is seeded for later refinement
The system SHALL include placeholder or initial draft content in every section so the author can replace text and links without restructuring the page.

#### Scenario: Author edits content
- **WHEN** the author edits the text inside `index.html`
- **THEN** the changes are reflected on the next page reload without requiring new dependencies or build steps

## MODIFIED Requirements

### Requirement: Page is print-friendly
The system SHALL provide styles within each theme CSS file that produce a clean, single-column, black-on-white layout when printed or saved as PDF.

#### Scenario: Browser print preview
- **WHEN** a visitor opens the browser print dialog
- **THEN** the navigation, theme switcher, and decorative backgrounds are hidden and all sections are visible on the printed page

## REMOVED Requirements

### Requirement: Dark mode is available and persisted
**Reason**: Replaced by the multi-theme system. Each theme defines its own complete color scheme (light or dark), so a global dark mode toggle is no longer needed.
**Migration**: Use the theme switcher or change the linked theme CSS file in `index.html` to select a dark-style theme such as Cyberpunk Neon or Terminal Hacker.
