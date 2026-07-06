## Context

This change builds a personal resume website to replace or supplement a PDF resume. The site must be fast, easy to maintain, and deployable for free to GitHub Pages. The author is a Java backend developer with limited frontend tooling experience, so the stack is intentionally simple: plain HTML, Tailwind CSS, and a small amount of vanilla JavaScript.

## Goals / Non-Goals

**Goals:**

- Produce a single-page, responsive resume site that looks good on desktop and mobile.
- Keep the implementation dependency-free and build-step-free so it can be edited with any text editor.
- Support dark mode, smooth scrolling, and print-friendly output.
- Deploy automatically to GitHub Pages from the repository root.
- Seed the site with initial content that can be refined later without touching code structure.

**Non-Goals:**

- A backend, database, or dynamic content management system.
- Complex animations or a single-page application (SPA) architecture.
- Custom domain setup (can be added later).
- Blog, analytics, or contact form backend.

## Decisions

### 1. Use plain HTML5 + Tailwind CSS via CDN

- **Rationale**: No build step, no Node.js tooling to install, and the class-based utility approach makes it easy to tweak layout without writing custom CSS. Tailwind’s CDN is sufficient for a single-page site.
- **Alternative considered**: Astro/Next.js static export. Rejected because the user wants the simplest possible stack and the fastest path to a live page.

### 2. Single-page layout with anchor navigation

- **Rationale**: A resume is read linearly. One page keeps navigation trivial and avoids loading delays.
- **Structure**:

```
index.html
├── <nav> sticky top navigation
├── <header> hero (name + tagline + CTAs)
├── <section id="about">
├── <section id="experience">
├── <section id="projects">
├── <section id="skills">
├── <section id="education">
└── <footer> contact / download / social links
```

### 3. Theme-per-CSS approach with a theme switcher

- **Rationale**: Instead of one style with a light/dark toggle, the user wants five distinct visual themes that can be swapped by linking a different CSS file. Each theme is self-contained: it defines its own palette, typography, spacing, and print styles. This makes experimentation and future redesigns trivial—just change the `<link>` href or use the in-page switcher.
- **Structure**:

```
styles/
├── themes/
│   ├── minimalist-pro.css
│   ├── cyberpunk-neon.css
│   ├── terminal-hacker.css
│   ├── brutalist-engineer.css
│   └── warm-craftsman.css
└── main.css          /* shared structural helpers (optional) */
```

### 4. Print-friendly styles per theme

- **Rationale**: Recruiters may still want to print or save as PDF. Each theme CSS includes a `@media print` block that hides the navigation and theme switcher, expands sections, and produces a clean black-on-white layout.

### 5. Deploy from repository root to GitHub Pages

- **Rationale**: GitHub Pages can serve static files directly from the default branch root. No generator or `docs/` folder is required.
- **Expected URL**: `https://liqingshang.github.io/personal-info/`

### 6. Minimal vanilla JavaScript

- **Rationale**: Three small behaviors are needed: mobile menu toggle, theme switcher dropdown, and smooth-scroll offset for the sticky header. Keeping JS in a single `scripts/main.js` file avoids bundlers. The theme switcher changes the active stylesheet `href` and persists the choice in `localStorage`.

## Visual Style Options

The following five style variants will all be implemented as independent theme CSS files. The author can switch between them by changing the linked stylesheet in `index.html` or by using the in-page theme switcher.

### A. Minimalist Pro（默认）

- **Vibe**: Clean, trustworthy, recruiter-safe.
- **Palette**: White background, slate gray text, navy/indigo primary, amber accent.
- **Typography**: System sans-serif, medium weight headings, generous line height.
- **Key visuals**: Subtle shadows, rounded cards, plenty of whitespace.
- **Best for**: Traditional tech job hunting; reads like a polished PDF.
- **Trade-off**: Safe but not memorable.

```
┌────────────────────────────────────────────┐
│  张三 · Java 后端工程师        [关于][经历]  │
│                                            │
│        你好，我是张三                        │
│        专注高并发后端系统                    │
│                                            │
│     [下载简历]  [GitHub]                    │
│                                            │
│  关于我     工作经历     项目               │
│  ────────────────────────────────────────  │
│  白色背景 · 深蓝标题 · 卡片式布局            │
└────────────────────────────────────────────┘
```

### B. Cyberpunk Neon

- **Vibe**: Futuristic, energetic, stands out in a sea of beige resumes.
- **Palette**: Near-black background, neon cyan (`#00f3ff`), hot magenta (`#ff00ff`), electric purple.
- **Typography**: Bold sans-serif headings, mono-spaced accents, uppercase labels.
- **Key visuals**: Glowing borders, grid/perspective background, subtle glitch hover effects, "system boot" hero text.
- **Best for**: Startups, game dev, Web3, or companies that value personality.
- **Trade-off**: Can feel unprofessional for conservative enterprises; must keep readability high.

```
┌────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  > 张三 // JAVA_BACKEND_ENG               │
│                                            │
│     █ 你好，我是张三                        │
│     █ 专注高并发后端系统                    │
│                                            │
│  [ 下 载 简 历 ]  [ GITHUB ]              │
│                                            │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  霓虹边框 · 网格背景 · 赛博文字              │
└────────────────────────────────────────────┘
```

### C. Terminal Hacker

- **Vibe**: Raw, technical, "I live in the shell."
- **Palette**: Black or deep charcoal background, terminal green (`#33ff00`), dim gray, amber warnings.
- **Typography**: Monospace everywhere, command-prompt prefixes (`$`, `>`).
- **Key visuals**: Blinking cursor, "typing" intro animation, ASCII dividers, file-tree style skill list.
- **Best for**: DevOps, SRE, security, backend infrastructure roles.
- **Trade-off**: Very niche; can tire the eye if overdone.

```
┌────────────────────────────────────────────┐
│ $ whoami                                   │
│ > zhangsan.java_backend                    │
│                                            │
│ $ cat about.txt                            │
│ 专注高并发后端系统设计与稳定性建设          │
│                                            │
│ $ ./contact.sh                             │
│ [email] [github] [download_cv.pdf]        │
│                                            │
│ 绿色等宽字体 · 命令行提示符 · 打字机效果      │
└────────────────────────────────────────────┘
```

### D. Brutalist Engineer

- **Vibe**: Bold, confident, no fluff.
- **Palette**: White/black base, one loud accent (red, orange, or royal blue), high contrast.
- **Typography**: Oversized headings, tight leading, asymmetric layouts.
- **Key visuals**: Thick borders, exposed grid, rectangular blocks, no rounded corners, no gradients.
- **Best for**: Design-conscious tech firms, product engineers, creative roles.
- **Trade-off**: Strong visual opinion; not every recruiter will love it.

```
┌────────────────────────────────────────────┐
│                                            │
│  张三                                      │
│  ───────────────────────────────────────  │
│  JAVA 后端工程师                           │
│                                            │
│  ┌─────────────┐  ┌────────────────────┐  │
│  │ 关于        │  │ 经历               │  │
│  └─────────────┘  └────────────────────┘  │
│                                            │
│  粗边框 · 大字号 · 高对比度                 │
└────────────────────────────────────────────┘
```

### E. Warm Craftsman

- **Vibe**: Approachable, human, crafted.
- **Palette**: Cream/paper background, warm brown/terracotta accents, soft sage or teal.
- **Typography**: Serif or slab-serif headings, warm sans-serif body, slightly larger body text.
- **Key visuals**: Subtle paper texture, hand-drawn dividers, rounded corners, warm photography.
- **Best for**: Teams that value communication, mentorship, or product craft.
- **Trade-off**: Less "tech-y"; might not signal hardcore engineering to some readers.

```
┌────────────────────────────────────────────┐
│  ~ 张三 ~                                  │
│     Java 后端工程师                         │
│                                            │
│  “专注把复杂系统做得稳一点、快一点。”        │
│                                            │
│  关于我 · 经历 · 项目 · 联系               │
│  ────────────────────────────────────────  │
│  暖米色背景 · 衬线标题 · 手写感分隔线        │
└────────────────────────────────────────────┘
```

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| Tailwind CDN is slightly slower than a self-hosted build and has a small FOUC (flash of unstyled content) | Acceptable for a personal site; if it becomes an issue later, migrate to a Tailwind CLI build step |
| No component reuse means repeated markup | Single page with few sections; duplication is minimal and easy to manage |
| Harder to add i18n later | Initial site is Chinese-first with optional English snippets; refactor to a template system only if needed |
| GitHub Pages build can take a minute to propagate | Document in tasks; verify deployment after enabling Pages |

## Migration Plan

1. Create `index.html`, `styles/themes/*.css`, `styles/main.css`, and `scripts/main.js` in the repository root.
2. Build the shared HTML structure and content once.
3. Implement each visual theme as a separate CSS file that overrides the shared structure.
4. Add a small theme switcher so the author can preview themes without editing `index.html`.
5. Add placeholder content and initial assets (avatar placeholder, project screenshots as placeholders).
6. Enable GitHub Pages in repository settings, source = default branch root.
7. Visit `https://liqingshang.github.io/personal-info/`, switch themes, and verify layout on mobile and desktop.
8. Iterate on content and replace placeholders with real information.

## Open Questions

- Should the hero include a professional photo or a generated avatar/illustration?
- Which contact links should be public (email, GitHub, LinkedIn, WeChat?) Keep privacy in mind.
- Should the downloadable PDF be generated from the same HTML (via browser print) or a separate pre-built file?
