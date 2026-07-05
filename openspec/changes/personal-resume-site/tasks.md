## 1. Content Preparation

- [x] 1.1 Collect existing resume text: name, tagline, work experience, projects, skills, education, contact links
- [x] 1.2 Decide which contact information to make public (email, GitHub, LinkedIn, etc.)
- [x] 1.3 Prepare or choose a profile photo/avatar placeholder
- [x] 1.4 Gather or create placeholder project screenshots/images
- [x] 1.5 Prepare a PDF version of the resume for the download CTA

## 2. Project Setup

- [x] 2.1 Choose a visual style from `design.md` (Minimalist Pro / Cyberpunk Neon / Terminal Hacker / Brutalist Engineer / Warm Craftsman)
- [x] 2.2 Create repository root files: `index.html`, `styles/main.css`, `scripts/main.js`
- [x] 2.3 Create `styles/themes/` directory for the five theme CSS files
- [x] 2.4 Add Tailwind CSS CDN and base meta tags to `index.html`
- [x] 2.5 Create `assets/` directory for images, PDF, and favicon
- [x] 2.6 Add `.gitignore` if needed (e.g., ignore editor files)
- [x] 2.7 Link the default theme CSS in `index.html`

## 3. Page Structure

- [x] 3.1 Build sticky top navigation with anchor links and theme switcher
- [x] 3.2 Build Hero section: name, tagline, primary CTAs
- [x] 3.3 Build About section
- [x] 3.4 Build Experience section with timeline/card layout
- [x] 3.5 Build Projects section with cards and links
- [x] 3.6 Build Skills section grouped by proficiency
- [x] 3.7 Build Education/Certifications section
- [x] 3.8 Build Footer/Contact section with download and social links

## 4. Theme Styles

- [x] 4.1 Create `styles/main.css` with shared structural helpers and reset
- [x] 4.2 Create `styles/themes/minimalist-pro.css` (clean, navy + amber)
- [x] 4.3 Create `styles/themes/cyberpunk-neon.css` (dark, neon cyan + magenta)
- [x] 4.4 Create `styles/themes/terminal-hacker.css` (dark, terminal green + amber)
- [x] 4.5 Create `styles/themes/brutalist-engineer.css` (high contrast, bold accent)
- [x] 4.6 Create `styles/themes/warm-craftsman.css` (cream, warm brown + sage)
- [x] 4.7 Add print-friendly `@media print` styles to each theme
- [x] 4.8 Verify each theme renders correctly on 375px, 768px, and 1280px viewports

## 5. Interactivity

- [x] 5.1 Implement theme switcher dropdown with `localStorage` persistence
- [x] 5.2 Implement mobile hamburger menu toggle
- [x] 5.3 Add smooth scrolling for anchor navigation
- [x] 5.4 Wire up "Download PDF" button to the prepared PDF file
- [x] 5.5 Ensure external links open in a new tab and have `rel="noopener"`

## 6. Assets and Polish

- [x] 6.1 Add favicon
- [x] 6.2 Add Open Graph / Twitter Card meta tags for link previews
- [x] 6.3 Add accessible labels and focus styles
- [x] 6.4 Replace placeholder content with real resume content
- [x] 6.5 Run Lighthouse audit on the default theme and address any critical issues

## 7. Deployment

- [x] 7.1 Push all files to the `main` branch of the GitHub repository
- [x] 7.2 Enable GitHub Pages in repository settings (source: default branch root)
- [x] 7.3 Verify the site loads at `https://liqingshang.github.io/personal-info/`
- [x] 7.4 Test the live site with each theme on mobile and desktop
- [ ] 7.5 Share the link with a friend or recruiter for feedback

## 8. Follow-up Improvements

- [ ] 8.1 Iterate on wording and project descriptions based on feedback
- [ ] 8.2 Decide on a final default theme after real-world testing
- [ ] 8.3 Consider adding a custom domain (optional)
- [ ] 8.4 Consider adding a simple visitor counter or analytics (optional)
