## ADDED Requirements

### Requirement: Resume pages use the correct personal name
The system SHALL display "藕杰" as the personal name in both `index.html` and `resume.html`.

#### Scenario: Visitor views the homepage
- **WHEN** a visitor opens `index.html`
- **THEN** the hero title, header logo, and footer copyright all show "藕杰"

#### Scenario: Visitor views the PDF source page
- **WHEN** a visitor opens `resume.html`
- **THEN** the header name shows "藕杰"

### Requirement: Contact information is accurate and visible
The system SHALL display the phone number `17375449610` and email `2927472601@qq.com` in the contact sections of both resume pages.

#### Scenario: Visitor checks contact details on homepage
- **WHEN** a visitor opens the contact section of `index.html`
- **THEN** the phone and email match the values above and are clickable (`tel:` and `mailto:`)

#### Scenario: Visitor checks contact details on PDF source page
- **WHEN** a visitor opens `resume.html`
- **THEN** the contact row shows the phone and email

### Requirement: Work experience reflects actual employment history
The system SHALL list the work experience from `personinfo.txt`: 翼支付 (2021.05–2026.07) and 安耐吉化学 (2020.07–2021.05), with responsibilities described in a professional manner.

#### Scenario: Visitor reads experience section
- **WHEN** a visitor views the experience section
- **THEN** only the two actual employers appear, with correct date ranges and duty descriptions

### Requirement: Project section uses business and technical descriptions
The system SHALL replace placeholder project cards with descriptions of 生活缴费系统, 通信缴费系统, and 民生营销系统, emphasizing business context and technical architecture without exposing source code.

#### Scenario: Visitor reads project descriptions
- **WHEN** a visitor views the projects section
- **THEN** three project descriptions appear, each containing business background, tech stack, and responsibilities/outcomes

### Requirement: Education background is accurate
The system SHALL display 安庆师范大学 · 计算机科学与技术 · 本科 · 2016–2020 in both pages.

#### Scenario: Visitor checks education
- **WHEN** a visitor views the education section
- **THEN** the school, major, degree, and years match the values above

### Requirement: Skills are based on the actual tech stack
The system SHALL list skills derived from `personinfo.txt`, categorized by proficiency, and SHALL NOT include skills the author is not familiar with.

#### Scenario: Visitor reviews skills
- **WHEN** a visitor views the skills section
- **THEN** the listed technologies match those used in the projects and no speculative "了解" items remain

### Requirement: Website avatar uses the provided photo
The system SHALL use `me.jpg` as the avatar in `index.html` and SHALL NOT display an avatar in `resume.html`.

#### Scenario: Visitor views homepage hero
- **WHEN** a visitor opens `index.html`
- **THEN** the hero area shows the photo from `me.jpg` instead of the placeholder SVG

### Requirement: PDF source and website content remain synchronized
The system SHALL keep `index.html` and `resume.html` content consistent so that the generated PDF matches the online resume.

#### Scenario: Regenerate PDF after content update
- **WHEN** `scripts/generate-pdf.js` runs successfully
- **THEN** `assets/resume.pdf` reflects the updated `resume.html` content
