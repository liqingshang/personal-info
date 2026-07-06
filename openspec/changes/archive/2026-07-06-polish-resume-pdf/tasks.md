## 1. Setup

- [x] 1.1 Create `resume.html` in the repository root
- [x] 1.2 Create `scripts/generate-pdf.js` to wrap the Chrome headless print command

## 2. Build the Print-Optimized Resume Page

- [x] 2.1 Copy current resume content from `index.html` into `resume.html`
- [x] 2.2 Add `@page` CSS for A4 size and consistent margins
- [x] 2.3 Style the PDF layout with clean typography, section hierarchy, and whitespace
- [x] 2.4 Add print-safe styles (hide interactive elements, force background colors if needed)
- [x] 2.5 Add page-break controls to avoid splitting headings and entries

## 3. Generate and Verify PDF

- [x] 3.1 Run `scripts/generate-pdf.js` to produce `assets/resume.pdf`
- [x] 3.2 Open the generated PDF and verify layout, margins, and page breaks
- [x] 3.3 Fix any visual issues found in the PDF

## 4. Integrate with Homepage

- [x] 4.1 Ensure the "Download PDF" button in `index.html` links to `assets/resume.pdf`
- [x] 4.2 Add a comment in `index.html` and `resume.html` noting which sections must stay in sync

## 5. Deployment

- [x] 5.1 Commit `resume.html`, `scripts/generate-pdf.js`, and the new `assets/resume.pdf`
- [x] 5.2 Push to `main`
- [x] 5.3 Verify the live site still downloads the polished PDF
