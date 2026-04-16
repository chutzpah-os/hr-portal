import { portfolioData, type Experience, type Education, type Volunteering, type Project, type Certification, type SkillCategory } from '@/data/portfolio'
import { type CVArea, type CVAreaOrAll, ALL_AREAS, AREA_LABELS } from './cvAreaMap'

// ─── Filtered data shape ──────────────────────────────────────────────────────

interface FilteredCV {
  area: CVArea
  experience: Experience[]
  education: Education[]
  skills: SkillCategory[]
  projects: Project[]
  certifications: Certification[]
  volunteering: Volunteering[]
}

function filterForArea(area: CVArea): FilteredCV {
  const experience = portfolioData.experience.filter((e) => e.cvAreas.includes(area))

  const education = portfolioData.education.filter((e) => e.cvAreas.includes(area))

  const skills = portfolioData.skills.filter((s) => s.cvAreas.includes(area))

  const projects = Object.values(portfolioData.projects)
    .flat()
    .filter((p) => p.cvAreas.includes(area))

  const certifications = portfolioData.certifications.filter((c) => c.cvAreas.includes(area))

  const volunteering = portfolioData.volunteering.filter((v) => v.cvAreas.includes(area))

  return { area, experience, education, skills, projects, certifications, volunteering }
}

// ─── LaTeX generation ─────────────────────────────────────────────────────────

function escapeLatex(str: string): string {
  return str
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/\$/g, '\\$')
    .replace(/#/g, '\\#')
    .replace(/_/g, '\\_')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}')
}

function e(str: string): string {
  return escapeLatex(str)
}

function buildLatexForArea(cv: FilteredCV): string {
  const { area, experience, education, skills, projects, certifications, volunteering } = cv
  const areaLabel = AREA_LABELS[area]

  const lines: string[] = []

  // Heading
  lines.push(`% ── ${areaLabel} ──────────────────────────────────────`)
  lines.push('\\begin{center}')
  lines.push(`  {\\small ${e(areaLabel)}} \\\\[2pt]`)
  lines.push(`  {\\Large\\scshape ${e(portfolioData.personal.name)}} \\\\[4pt]`)
  lines.push(`  \\href{mailto:contact@hanielrolemberg.com}{contact@hanielrolemberg.com} $|$`)
  lines.push(`  \\href{https://hanielrolemberg.com}{hanielrolemberg.com} $|$`)
  lines.push(`  +55 (79) 99999-9999`)
  lines.push('\\end{center}')
  lines.push('\\vspace{-6pt}')

  // Education
  if (education.length > 0) {
    lines.push('\\section{Education}')
    lines.push('\\resumeSubHeadingListStart')
    for (const edu of education) {
      lines.push(`  \\resumeSubheading`)
      lines.push(`    {${e(edu.institution)}}{Brazil}`)
      lines.push(`    {${e(edu.title)}}{${e(edu.period)}}`)
      if (edu.details.gpa) {
        lines.push(`    \\resumeItemListStart`)
        lines.push(`      \\resumeItem{GPA: ${e(edu.details.gpa)}}`)
        lines.push(`    \\resumeItemListEnd`)
      }
    }
    lines.push('\\resumeSubHeadingListEnd')
  }

  // Skills Summary
  if (skills.length > 0) {
    lines.push('\\section{Skills Summary}')
    lines.push('\\begin{itemize}[leftmargin=*, label={}]')
    lines.push('  \\small{\\item{')
    for (const { name, items } of skills) {
      lines.push(`    \\textbf{${e(name)}}: ${items.map(e).join(', ')} \\\\`)
    }
    lines.push('  }}')
    lines.push('\\end{itemize}')
  }

  // Experience
  if (experience.length > 0) {
    lines.push('\\section{Experience}')
    lines.push('\\resumeSubHeadingListStart')
    for (const exp of experience) {
      lines.push(`  \\resumeSubheading`)
      lines.push(`    {${e(exp.company)}}{Brazil}`)
      lines.push(`    {${e(exp.title)}}{${e(exp.period)}}`)
      lines.push(`    \\resumeItemListStart`)
      for (const area of exp.details.keyAreas) {
        lines.push(`      \\resumeItem{${e(area)}}`)
      }
      if (exp.details.technologies) {
        lines.push(`      \\resumeItem{\\textbf{Technologies:} ${e(exp.details.technologies)}}`)
      }
      lines.push(`    \\resumeItemListEnd`)
    }
    lines.push('\\resumeSubHeadingListEnd')
  }

  // Projects
  if (projects.length > 0) {
    lines.push('\\section{Projects}')
    lines.push('\\resumeSubHeadingListStart')
    for (const proj of projects) {
      lines.push(`  \\resumeProjectHeading`)
      lines.push(`    {\\textbf{${e(proj.title)}} $|$ \\emph{${e(proj.tags.slice(0, 3).join(', '))}}}{}`)
      lines.push(`    \\resumeItemListStart`)
      lines.push(`      \\resumeItem{${e(proj.description)}}`)
      for (const feat of proj.details.features.slice(0, 2)) {
        lines.push(`      \\resumeItem{${e(feat)}}`)
      }
      lines.push(`    \\resumeItemListEnd`)
    }
    lines.push('\\resumeSubHeadingListEnd')
  }

  // Volunteering
  if (volunteering.length > 0) {
    lines.push('\\section{Volunteer Experience}')
    lines.push('\\resumeSubHeadingListStart')
    for (const vol of volunteering) {
      lines.push(`  \\resumeSubheading`)
      lines.push(`    {${e(vol.organization)}}{Brazil}`)
      lines.push(`    {${e(vol.title)}}{${e(vol.period)}}`)
      lines.push(`    \\resumeItemListStart`)
      lines.push(`      \\resumeItem{${e(vol.description)}}`)
      lines.push(`    \\resumeItemListEnd`)
    }
    lines.push('\\resumeSubHeadingListEnd')
  }

  // Certifications
  if (certifications.length > 0) {
    lines.push('\\section{Certifications}')
    lines.push('\\resumeItemListStart')
    for (const cert of certifications) {
      lines.push(`  \\resumeItem{${e(cert.title)} -- ${e(cert.issuer)} (${e(cert.date)})}`)
    }
    lines.push('\\resumeItemListEnd')
  }

  return lines.join('\n')
}

const LATEX_PREAMBLE = `\\documentclass[a4paper,20pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.530in}
\\addtolength{\\evensidemargin}{-0.375in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-0.45in}
\\addtolength{\\textheight}{1in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{
  \\vspace{-10pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\vspace{6pt}\\titlerule \\vspace{-6pt}]

% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{#1 \\vspace{-2pt}}
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-5pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}[leftmargin=*, label={}]}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}
`

export function generateLatex(areaOrAll: CVAreaOrAll): string {
  const areas = areaOrAll === 'all' ? ALL_AREAS : [areaOrAll]
  const bodies = areas.map((a) => buildLatexForArea(filterForArea(a)))

  const body = bodies.join('\n\n\\newpage\n\n')

  return `${LATEX_PREAMBLE}
\\begin{document}

${body}

\\end{document}
`
}

// ─── HTML generation (for PDF via html2pdf) ───────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function h(str: string): string {
  return escapeHtml(str)
}

function buildHtmlForArea(cv: FilteredCV): string {
  const { area, experience, education, skills, projects, certifications, volunteering } = cv
  const areaLabel = AREA_LABELS[area]

  const section = (title: string, content: string) => `
    <div class="section">
      <div class="section-title">${title}</div>
      ${content}
    </div>`

  const subheading = (title: string, sub: string, right: string, rightSub: string) => `
    <div class="subheading">
      <div class="subheading-left">
        <span class="sh-title">${title}</span>
        <span class="sh-sub">${sub}</span>
      </div>
      <div class="subheading-right">
        <span class="sh-title">${right}</span>
        <span class="sh-sub">${rightSub}</span>
      </div>
    </div>`

  const items = (list: string[]) =>
    list.length === 0 ? '' : `<ul>${list.map((i) => `<li>${i}</li>`).join('')}</ul>`

  let html = `<div class="page">`

  // Heading
  html += `
    <div class="heading">
      <div class="heading-area">${h(areaLabel)}</div>
      <div class="heading-name">${h(portfolioData.personal.name)}</div>
      <div class="heading-contact">
        <a href="mailto:contact@hanielrolemberg.com">contact@hanielrolemberg.com</a>
        &nbsp;|&nbsp;
        <a href="https://hanielrolemberg.com">hanielrolemberg.com</a>
      </div>
    </div>`

  // Education
  if (education.length > 0) {
    const eduHtml = education.map((edu) => `
      ${subheading(h(edu.institution), h(edu.title), 'Brazil', h(edu.period))}
      ${edu.details.gpa ? `<div class="gpa">GPA: ${h(edu.details.gpa)}</div>` : ''}
    `).join('')
    html += section('Education', eduHtml)
  }

  // Skills
  if (skills.length > 0) {
    const skillsHtml = `<div class="skills-list">${skills.map(({ name, items: skillItems }) =>
      `<div><strong>${h(name)}:</strong> ${skillItems.map(h).join(', ')}</div>`
    ).join('')}</div>`
    html += section('Skills Summary', skillsHtml)
  }

  // Experience
  if (experience.length > 0) {
    const expHtml = experience.map((exp) => `
      ${subheading(h(exp.company), h(exp.title), 'Brazil', h(exp.period))}
      ${items([...exp.details.keyAreas.map(h), `Technologies: ${h(exp.details.technologies)}`])}
    `).join('')
    html += section('Experience', expHtml)
  }

  // Projects
  if (projects.length > 0) {
    const projHtml = projects.map((proj) => `
      <div class="project-heading">
        <strong>${h(proj.title)}</strong> &mdash; <em>${proj.tags.slice(0, 3).map(h).join(', ')}</em>
      </div>
      ${items([h(proj.description), ...proj.details.features.slice(0, 2).map(h)])}
    `).join('')
    html += section('Projects', projHtml)
  }

  // Volunteering
  if (volunteering.length > 0) {
    const volHtml = volunteering.map((vol) => `
      ${subheading(h(vol.organization), h(vol.title), 'Brazil', h(vol.period))}
      ${items([h(vol.description)])}
    `).join('')
    html += section('Volunteer Experience', volHtml)
  }

  // Certifications
  if (certifications.length > 0) {
    const certHtml = items(certifications.map((c) => `${h(c.title)} &mdash; ${h(c.issuer)} (${h(c.date)})`))
    html += section('Certifications', certHtml)
  }

  html += `</div>` // .page
  return html
}

const HTML_STYLES = `
  @page { size: A4; margin: 15mm 14mm; }
  html, body { margin: 0; padding: 0; background: #d0d0d0; }
  body { padding: 24px 0; }
  .cv-wrapper {
    font-family: 'Times New Roman', Times, serif;
    font-size: 9.5pt;
    color: #000;
    box-sizing: border-box;
    width: 210mm;
    max-width: 100%;
    margin: 0 auto;
    padding: 15mm 14mm;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  @media print {
    html, body { background: #fff; padding: 0; margin: 0; }
    .cv-wrapper {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      box-shadow: none !important;
    }
  }
  * { box-sizing: border-box; }
  a, a:visited, a:hover, a:active { color: #000 !important; text-decoration: none !important; }
  .area-break { page-break-after: always; height: 0; }
  .heading { text-align: center; margin: 0 0 6pt 0; padding: 0; }
  .heading-area { font-size: 7.5pt; text-transform: uppercase; letter-spacing: 2px; color: #555; margin: 0 0 2pt 0; }
  .heading-name { font-size: 18pt; font-variant: small-caps; font-weight: bold; margin: 0 0 3pt 0; }
  .heading-contact { font-size: 8.5pt; margin: 0; }
  .section { margin: 6pt 0 0 0; }
  .section-title { font-size: 10.5pt; font-variant: small-caps; border-bottom: 1px solid #000; padding-bottom: 7pt; margin: 0 0 3pt 0; text-transform: uppercase; page-break-after: avoid; }
  .subheading { display: flex; justify-content: space-between; align-items: flex-start; margin: 3pt 0 1pt 0; page-break-inside: avoid; }
  .subheading-left { display: flex; flex-direction: column; margin: 0; padding: 0; }
  .subheading-right { display: flex; flex-direction: column; text-align: right; margin: 0; padding: 0; }
  .sh-title { font-weight: bold; font-size: 9pt; display: block; }
  .sh-sub { font-style: italic; font-size: 8pt; display: block; }
  .gpa { font-size: 8pt; color: #333; margin: 1pt 0 0 0; }
  .skills-list { font-size: 8pt; line-height: 1.5; margin: 0; padding: 0; }
  .skills-list div { margin: 0; padding: 0; }
  .project-heading { font-size: 8.5pt; margin: 3pt 0 1pt 0; page-break-inside: avoid; }
  ul { list-style-type: none; padding: 0; margin: 2pt 0 2pt 0; }
  li { font-size: 8pt; line-height: 1.4; margin: 0 0 1pt 0; padding: 0; page-break-inside: avoid; }
`

export function generateHtml(areaOrAll: CVAreaOrAll): string {
  const areas = areaOrAll === 'all' ? ALL_AREAS : [areaOrAll]
  const areaPages = areas.map((a) => buildHtmlForArea(filterForArea(a)))
  const pages = areaPages.join('\n<div class="area-break"></div>\n')

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>${HTML_STYLES}</style>
</head>
<body>
<div class="cv-wrapper">
${pages}
</div>
</body>
</html>`
}

// ─── Download triggers ────────────────────────────────────────────────────────

function areaSlug(area: CVAreaOrAll): string {
  return area === 'all' ? 'all_areas' : area
}

export function downloadTex(area: CVAreaOrAll): void {
  const content = generateLatex(area)
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `haniel_rolemberg_cv_${areaSlug(area)}.tex`
  a.click()
  URL.revokeObjectURL(url)
}

export function downloadPdf(area: CVAreaOrAll): void {
  const html = generateHtml(area)
  const slug = areaSlug(area)

  // Inject auto-print + suggested filename via <title> (browsers use it as default save name)
  const printHtml = html.replace(
    '<head>',
    `<head><title>haniel_rolemberg_cv_${slug}</title>`
  ).replace(
    '</body>',
    `<script>window.onload = function() { window.print(); }<\/script></body>`
  )

  const blob = new Blob([printHtml], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const win = window.open(url, '_blank')
  if (win) win.onafterprint = () => URL.revokeObjectURL(url)
}
