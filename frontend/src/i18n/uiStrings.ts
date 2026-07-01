export type LocaleKey = 'en' | 'pt' | 'es'

export function resolveLocale(locale: string): LocaleKey {
  return (locale === 'pt' || locale === 'es') ? locale : 'en'
}

interface UiStrings {
  // ── shared ────────────────────────────────────────────────────────────────
  close: string
  viewDetails: string
  showLess: string
  showAll: (n: number) => string
  // ── experience ────────────────────────────────────────────────────────────
  workHistory: string
  keyFocusAreas: string
  technologies: string
  // ── certifications ────────────────────────────────────────────────────────
  certifications: string
  certCategoryLabel: Record<string, string>
  issuer: string
  date: string
  credentialId: string
  verifyCredential: string
  showAllCerts: (n: number) => string
  // ── volunteering ──────────────────────────────────────────────────────────
  volunteering: string
  focusAreas: string
  responsibilities: string
  category: string
  // ── projects ──────────────────────────────────────────────────────────────
  projects: string
  projectFilters: { key: string; label: string }[]
  projectCategoryLabel: Record<string, string>
  features: string
  techStack: string
  viewOnGitHub: string
  showAllProjects: (n: number) => string
  // ── researches ────────────────────────────────────────────────────────────
  researches: string
  researchStatusLabel: Record<string, string>
  viewPublication: string
  showAllResearches: (n: number) => string
  // ── education ─────────────────────────────────────────────────────────────
  education: string
  academicBackground: string
  degrees: string
  coursesPrograms: string
  keyCourses: string
  skillsDeveloped: string
  // ── languages ─────────────────────────────────────────────────────────────
  languages: string
  certificationsNotes: string
  verification: string
  verifyProficiency: string
  // ── skills ────────────────────────────────────────────────────────────────
  skills: string
  // ── awards ────────────────────────────────────────────────────────────────
  awards: string
  noAwards: string
  // ── portfolio section ─────────────────────────────────────────────────────
  portfolio: string
  expand: string
  collapse: string
  // ── recommendations carousel ──────────────────────────────────────────────
  recommendations: string
  readMore: string
  seeMoreLinkedIn: string
  prevRecommendation: string
  nextRecommendation: string
  goToRecommendation: (n: number) => string
  // ── hero ──────────────────────────────────────────────────────────────────
  downloadCv: string
  bookCall: string
  heroDescription: string
  heroHeadline: [string, string, string]    // [line1, line2 (marked), line3]
  marqueeItems: string[]
  statsYears: string
  statsResearch: string
  statsProjects: string
  // ── cv modal ──────────────────────────────────────────────────────────────
  cvSelectArea: string
  cvOnePagePerArea: string
  cvDownloadTex: string
  cvDownloadPdf: string
  cvGenerating: string
}

const UI: Record<LocaleKey, UiStrings> = {
  en: {
    close: 'Close',
    viewDetails: 'View details →',
    showLess: 'Show less',
    showAll: (n) => `Show all ${n}`,
    workHistory: 'Work History',
    keyFocusAreas: 'Key Focus Areas',
    technologies: 'Technologies',
    certifications: 'Certifications',
    certCategoryLabel: {
      cloud: 'Cloud', security: 'Security', networking: 'Networking',
      data: 'Data', development: 'Development',
    },
    issuer: 'Issuer',
    date: 'Date',
    credentialId: 'Credential ID',
    verifyCredential: 'Verify Credential →',
    showAllCerts: (n) => `Show all ${n} certifications`,
    volunteering: 'Volunteering',
    focusAreas: 'Focus Areas',
    responsibilities: 'Responsibilities',
    category: 'Category',
    projects: 'Projects',
    projectFilters: [
      { key: 'all',                 label: 'All'        },
      { key: 'aiml',                label: 'AI / ML'    },
      { key: 'softwareDevelopment', label: 'Software'   },
      { key: 'dataEngineering',     label: 'Data'       },
      { key: 'cybersecurity',       label: 'Cyber'      },
      { key: 'challenges',          label: 'Challenges' },
    ],
    projectCategoryLabel: {
      aiml: 'AI / ML', softwareDevelopment: 'Software',
      dataEngineering: 'Data', cybersecurity: 'Cyber', challenges: 'Challenges',
    },
    features: 'Features',
    techStack: 'Tech Stack',
    viewOnGitHub: 'View on GitHub →',
    showAllProjects: (n) => `Show all ${n} projects`,
    researches: 'Researches',
    researchStatusLabel: {
      'in development': 'in development',
      'published': 'published',
      'under review': 'under review',
    },
    viewPublication: 'View Publication →',
    showAllResearches: (n) => `Show all ${n} researches`,
    education: 'Education',
    academicBackground: 'Academic Background',
    degrees: 'Degrees',
    coursesPrograms: 'Courses & Programs',
    keyCourses: 'Key Courses',
    skillsDeveloped: 'Skills Developed',
    languages: 'Languages',
    certificationsNotes: 'Certifications & Notes',
    verification: 'Verification',
    verifyProficiency: 'Verify Proficiency →',
    skills: 'Skills',
    awards: 'Awards',
    noAwards: 'No awards yet',
    portfolio: 'Portfolio',
    expand: 'Expand',
    collapse: 'Collapse',
    recommendations: 'Recommendations',
    readMore: 'Read more ↓',
    seeMoreLinkedIn: 'See +10 on LinkedIn',
    prevRecommendation: 'Previous recommendation',
    nextRecommendation: 'Next recommendation',
    goToRecommendation: (n) => `Go to recommendation ${n}`,
    downloadCv: 'Download CV',
    bookCall: 'Book a Call',
    heroDescription: "AI. Data. Security. R&D. Hard problems across disciplines — I find what's broken and build the version that holds.",
    heroHeadline: ['Research.', 'Build.', 'Secure.'],
    marqueeItems: [
      'Penetration Testing', 'Zero Trust', 'Threat Modeling', 'SIEM',
      'Network Security', 'AI / ML', 'Data Engineering', 'Cloud Security',
      'Python', 'Kubernetes', 'Cybersecurity', 'BigQuery', 'TensorFlow',
    ],
    statsYears: 'Years',
    statsResearch: 'Research',
    statsProjects: 'Projects',
    cvSelectArea: 'Select a focus area, then choose your format.',
    cvOnePagePerArea: 'One page per area',
    cvDownloadTex: 'Download .tex',
    cvDownloadPdf: 'Download .pdf',
    cvGenerating: 'Generating...',
  },

  pt: {
    close: 'Fechar',
    viewDetails: 'Ver detalhes →',
    showLess: 'Mostrar menos',
    showAll: (n) => `Mostrar todas as ${n}`,
    workHistory: 'Histórico Profissional',
    keyFocusAreas: 'Principais Áreas de Foco',
    technologies: 'Tecnologias',
    certifications: 'Certificações',
    certCategoryLabel: {
      cloud: 'Cloud', security: 'Segurança', networking: 'Redes',
      data: 'Dados', development: 'Desenvolvimento',
    },
    issuer: 'Emissor',
    date: 'Data',
    credentialId: 'ID da Credencial',
    verifyCredential: 'Verificar Credencial →',
    showAllCerts: (n) => `Mostrar todas as ${n} certificações`,
    volunteering: 'Voluntariado',
    focusAreas: 'Áreas de Foco',
    responsibilities: 'Responsabilidades',
    category: 'Categoria',
    projects: 'Projetos',
    projectFilters: [
      { key: 'all',                 label: 'Todos'    },
      { key: 'aiml',                label: 'IA / ML'  },
      { key: 'softwareDevelopment', label: 'Software' },
      { key: 'dataEngineering',     label: 'Dados'    },
      { key: 'cybersecurity',       label: 'Cyber'    },
      { key: 'challenges',          label: 'Desafios' },
    ],
    projectCategoryLabel: {
      aiml: 'IA / ML', softwareDevelopment: 'Software',
      dataEngineering: 'Dados', cybersecurity: 'Cyber', challenges: 'Desafios',
    },
    features: 'Funcionalidades',
    techStack: 'Stack Tecnológica',
    viewOnGitHub: 'Ver no GitHub →',
    showAllProjects: (n) => `Mostrar todos os ${n} projetos`,
    researches: 'Pesquisas',
    researchStatusLabel: {
      'in development': 'em desenvolvimento',
      'published': 'publicado',
      'under review': 'em revisão',
    },
    viewPublication: 'Ver Publicação →',
    showAllResearches: (n) => `Mostrar todas as ${n} pesquisas`,
    education: 'Educação',
    academicBackground: 'Formação Acadêmica',
    degrees: 'Graduações',
    coursesPrograms: 'Cursos & Programas',
    keyCourses: 'Principais Disciplinas',
    skillsDeveloped: 'Habilidades Desenvolvidas',
    languages: 'Idiomas',
    certificationsNotes: 'Certificações & Notas',
    verification: 'Verificação',
    verifyProficiency: 'Verificar Proficiência →',
    skills: 'Habilidades',
    awards: 'Premiações',
    noAwards: 'Ainda sem premiações',
    portfolio: 'Portfólio',
    expand: 'Expandir',
    collapse: 'Recolher',
    recommendations: 'Recomendações',
    readMore: 'Ler mais ↓',
    seeMoreLinkedIn: 'Ver +10 no LinkedIn',
    prevRecommendation: 'Recomendação anterior',
    nextRecommendation: 'Próxima recomendação',
    goToRecommendation: (n) => `Ir para recomendação ${n}`,
    downloadCv: 'Baixar CV',
    bookCall: 'Agendar Reunião',
    heroDescription: 'IA. Dados. Segurança. P&D. Problemas difíceis em várias disciplinas — eu encontro o que está quebrado e construo a versão que se sustenta.',
    heroHeadline: ['Pesquisar.', 'Construir.', 'Proteger.'],
    marqueeItems: [
      'Testes de Intrusão', 'Zero Trust', 'Modelagem de Ameaças', 'SIEM',
      'Segurança de Redes', 'IA / ML', 'Engenharia de Dados', 'Segurança em Nuvem',
      'Python', 'Kubernetes', 'Cibersegurança', 'BigQuery', 'TensorFlow',
    ],
    statsYears: 'Anos',
    statsResearch: 'Pesquisas',
    statsProjects: 'Projetos',
    cvSelectArea: 'Selecione uma área de foco e escolha o formato.',
    cvOnePagePerArea: 'Uma página por área',
    cvDownloadTex: 'Baixar .tex',
    cvDownloadPdf: 'Baixar .pdf',
    cvGenerating: 'Gerando...',
  },

  es: {
    close: 'Cerrar',
    viewDetails: 'Ver detalles →',
    showLess: 'Mostrar menos',
    showAll: (n) => `Mostrar todas (${n})`,
    workHistory: 'Historial Profesional',
    keyFocusAreas: 'Áreas Clave de Enfoque',
    technologies: 'Tecnologías',
    certifications: 'Certificaciones',
    certCategoryLabel: {
      cloud: 'Cloud', security: 'Seguridad', networking: 'Redes',
      data: 'Datos', development: 'Desarrollo',
    },
    issuer: 'Emisor',
    date: 'Fecha',
    credentialId: 'ID de Credencial',
    verifyCredential: 'Verificar Credencial →',
    showAllCerts: (n) => `Mostrar todas las ${n} certificaciones`,
    volunteering: 'Voluntariado',
    focusAreas: 'Áreas de Enfoque',
    responsibilities: 'Responsabilidades',
    category: 'Categoría',
    projects: 'Proyectos',
    projectFilters: [
      { key: 'all',                 label: 'Todos'    },
      { key: 'aiml',                label: 'IA / ML'  },
      { key: 'softwareDevelopment', label: 'Software' },
      { key: 'dataEngineering',     label: 'Datos'    },
      { key: 'cybersecurity',       label: 'Ciber'    },
      { key: 'challenges',          label: 'Desafíos' },
    ],
    projectCategoryLabel: {
      aiml: 'IA / ML', softwareDevelopment: 'Software',
      dataEngineering: 'Datos', cybersecurity: 'Ciber', challenges: 'Desafíos',
    },
    features: 'Funcionalidades',
    techStack: 'Stack Tecnológico',
    viewOnGitHub: 'Ver en GitHub →',
    showAllProjects: (n) => `Mostrar todos los ${n} proyectos`,
    researches: 'Investigaciones',
    researchStatusLabel: {
      'in development': 'en desarrollo',
      'published': 'publicado',
      'under review': 'en revisión',
    },
    viewPublication: 'Ver Publicación →',
    showAllResearches: (n) => `Mostrar todas las ${n} investigaciones`,
    education: 'Educación',
    academicBackground: 'Formación Académica',
    degrees: 'Títulos',
    coursesPrograms: 'Cursos y Programas',
    keyCourses: 'Cursos Principales',
    skillsDeveloped: 'Habilidades Desarrolladas',
    languages: 'Idiomas',
    certificationsNotes: 'Certificaciones y Notas',
    verification: 'Verificación',
    verifyProficiency: 'Verificar Competencia →',
    skills: 'Habilidades',
    awards: 'Premios',
    noAwards: 'Aún sin premios',
    portfolio: 'Portafolio',
    expand: 'Expandir',
    collapse: 'Contraer',
    recommendations: 'Recomendaciones',
    readMore: 'Leer más ↓',
    seeMoreLinkedIn: 'Ver +10 en LinkedIn',
    prevRecommendation: 'Recomendación anterior',
    nextRecommendation: 'Siguiente recomendación',
    goToRecommendation: (n) => `Ir a la recomendación ${n}`,
    downloadCv: 'Descargar CV',
    bookCall: 'Reservar una Reunión',
    heroDescription: 'IA. Datos. Seguridad. I+D. Problemas difíciles en múltiples disciplinas — encuentro lo que está roto y construyo la versión que funciona.',
    heroHeadline: ['Investigar.', 'Construir.', 'Proteger.'],
    marqueeItems: [
      'Pruebas de Intrusión', 'Zero Trust', 'Modelado de Amenazas', 'SIEM',
      'Seguridad de Redes', 'IA / ML', 'Ingeniería de Datos', 'Seguridad en la Nube',
      'Python', 'Kubernetes', 'Ciberseguridad', 'BigQuery', 'TensorFlow',
    ],
    statsYears: 'Años',
    statsResearch: 'Investigación',
    statsProjects: 'Proyectos',
    cvSelectArea: 'Selecciona un área de enfoque y elige tu formato.',
    cvOnePagePerArea: 'Una página por área',
    cvDownloadTex: 'Descargar .tex',
    cvDownloadPdf: 'Descargar .pdf',
    cvGenerating: 'Generando...',
  },
}

export function getUiStrings(locale: string): UiStrings {
  return UI[resolveLocale(locale)]
}
