## Why

I was recently laid off and need a polished online presence to support my job search. A PDF resume is still required by many recruiters, but a dedicated website can show more context, link to projects, and demonstrate engineering taste. This change creates a fast, mobile-first, static resume site that can eventually replace or supplement the PDF.

## What Changes

- Create a single-page static resume website in the repository root (`index.html`, `styles/`, `assets/`).
- Use plain HTML5, Tailwind CSS, and minimal vanilla JavaScript — no build step required.
- Implement sections: Hero, About, Experience, Projects, Skills, Education/Certifications, Contact/CTA.
- Provide a "Download PDF" link and direct contact links (email, GitHub, LinkedIn if available).
- Design and ship **five complete visual themes**: Minimalist Pro, Cyberpunk Neon, Terminal Hacker, Brutalist Engineer, and Warm Craftsman.
- Store each theme as an independent CSS file under `styles/themes/` so switching styles only requires changing one `<link>` in `index.html`.
- Include a tiny theme preview switcher in the page so the author (and visitors) can quickly compare themes.
- Deploy the site to GitHub Pages at `https://liqingshang.github.io`.
- Seed the site with placeholder/initial content that I can refine later.

## Capabilities

### New Capabilities

- `resume-site`: A static, responsive, single-page personal resume website with multiple swappable visual themes, PDF download, and GitHub Pages deployment.

### Modified Capabilities

- None.

## Impact

- Adds new static files to the repository root and `assets/`.
- No backend, no database, no runtime dependencies.
- GitHub Pages will serve the repository root as a public website.
