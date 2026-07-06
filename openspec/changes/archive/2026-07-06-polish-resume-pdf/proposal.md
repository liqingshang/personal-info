## Why

The current downloadable resume PDF is generated directly from the web page via the browser print dialog. The result is adequate for a placeholder, but the layout is not optimized for an A4 print document: spacing is inconsistent, page breaks are unpredictable, and the visual style does not feel like a polished, standalone resume. This change creates a dedicated, beautifully typeset PDF resume that matches the quality of the website.

## What Changes

- Add a dedicated print-only resume page (`resume.html`) optimized for A4/Letter output.
- Create a clean, professional print stylesheet that controls margins, typography, page breaks, and orphans.
- Update the "Download PDF" button to generate the PDF from `resume.html` instead of the homepage.
- Provide a repeatable script or command to regenerate `assets/resume.pdf` after content changes.
- Keep the PDF content in sync with the main website by sharing the same data/source HTML.

## Capabilities

### New Capabilities

- `resume-pdf`: A dedicated, print-optimized resume page and generated PDF with professional typography and layout.

### Modified Capabilities

- None.

## Impact

- Adds `resume.html` and updates `scripts/main.js` to point the download button to the new PDF source.
- Replaces `assets/resume.pdf` with a better-formatted version.
- No changes to the public website layout or existing themes.
