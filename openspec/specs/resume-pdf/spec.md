## ADDED Requirements

### Requirement: Dedicated print-only resume page exists
The system SHALL provide a `resume.html` page that is optimized solely for generating a PDF and is not linked from the public navigation.

#### Scenario: Author opens resume.html in a browser
- **WHEN** the author opens `resume.html`
- **THEN** the page renders a single-page or multi-page A4 resume with no interactive website chrome

### Requirement: Print styles define A4 page geometry and margins
The system SHALL use CSS `@page` rules to set the page size to A4 and define consistent margins.

#### Scenario: Print to PDF
- **WHEN** the browser print dialog is opened on `resume.html`
- **THEN** the preview shows an A4 page with uniform margins and no browser headers/footers

### Requirement: Page breaks are controlled to avoid awkward splits
The system SHALL prevent important blocks (section headings, experience entries, project cards) from being split across pages.

#### Scenario: Multi-page PDF
- **WHEN** the resume content spans more than one page
- **THEN** no section heading appears alone at the bottom of a page and no experience entry is cut in half

### Requirement: PDF is generated via a repeatable script
The system SHALL provide a script that uses Chrome headless to convert `resume.html` into `assets/resume.pdf`.

#### Scenario: Regenerate PDF after content change
- **WHEN** the author runs the generation script
- **THEN** `assets/resume.pdf` is overwritten with a new PDF reflecting the current `resume.html`

### Requirement: Download button serves the generated PDF
The system SHALL keep the homepage "Download PDF" button linked to `assets/resume.pdf`.

#### Scenario: Visitor downloads PDF
- **WHEN** a visitor clicks the "Download PDF" button on the homepage
- **THEN** the browser downloads the polished `assets/resume.pdf`

### Requirement: PDF layout is visually professional
The system SHALL use a clean, print-safe color scheme, readable typography, clear hierarchy, and appropriate whitespace.

#### Scenario: View generated PDF
- **WHEN** the generated PDF is opened
- **THEN** the layout appears polished, with consistent spacing, aligned columns, and no clipped text
