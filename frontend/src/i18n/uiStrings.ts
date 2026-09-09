export type LocaleKey = 'en' | 'pt' | 'es' | 'fr' | 'ca'

export function resolveLocale(locale: string): LocaleKey {
  if (locale === 'pt') return 'pt'
  if (locale === 'es') return 'es'
  if (locale === 'fr') return 'fr'
  if (locale === 'ca') return 'ca'
  return 'en'
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
  statsResearchValue: string
  statsProjects: string
  // ── cv modal ──────────────────────────────────────────────────────────────
  cvSelectArea: string
  cvOnePagePerArea: string
  cvDownloadTex: string
  cvDownloadPdf: string
  cvGenerating: string
  // ── lp (post-modal qualification flow) ───────────────────────────────────
  lp: {
    introTitle: (name: string) => string
    introBody: string
    introCta: string
    back: string
    next: string
    submit: string
    videoWaiting: (secondsLeft: number) => string
    thankYou: string
    redirecting: string
  }
}

const UI: Record<LocaleKey, UiStrings> = {
  ca: {
    close: 'Tancar',
    viewDetails: 'Veure detalls →',
    showLess: 'Veure menys',
    showAll: (n) => `Veure els ${n}`,
    workHistory: 'Historial Professional',
    keyFocusAreas: 'Àrees Clau de Competència',
    technologies: 'Tecnologies',
    certifications: 'Certificacions',
    certCategoryLabel: {
      cloud: 'Cloud', security: 'Seguretat', networking: 'Xarxes',
      data: 'Dades', development: 'Desenvolupament',
    },
    issuer: 'Emissor',
    date: 'Data',
    credentialId: 'ID de Credencial',
    verifyCredential: 'Verificar Credencial →',
    showAllCerts: (n) => `Veure totes les ${n} certificacions`,
    volunteering: 'Voluntariat',
    focusAreas: 'Àrees d\'Acció',
    responsibilities: 'Responsabilitats',
    category: 'Categoria',
    projects: 'Projectes',
    projectFilters: [
      { key: 'all',                 label: 'Tots'         },
      { key: 'aiml',                label: 'IA / ML'      },
      { key: 'softwareDevelopment', label: 'Programari'   },
      { key: 'dataEngineering',     label: 'Dades'        },
      { key: 'cybersecurity',       label: 'Ciber'        },
    ],
    projectCategoryLabel: {
      aiml: 'IA / ML', softwareDevelopment: 'Programari',
      dataEngineering: 'Dades', cybersecurity: 'Ciber', challenges: 'Reptes',
    },
    features: 'Funcionalitats',
    techStack: 'Stack Tecnològic',
    viewOnGitHub: 'Veure a GitHub →',
    showAllProjects: (n) => `Veure tots els ${n} projectes`,
    researches: 'Recerca',
    researchStatusLabel: {
      'in development': 'en desenvolupament',
      'published': 'publicat',
      'under review': 'en revisió',
    },
    viewPublication: 'Veure Publicació →',
    showAllResearches: (n) => `Veure totes les ${n} recerques`,
    education: 'Formació',
    academicBackground: 'Formació Acadèmica',
    degrees: 'Titulacions',
    coursesPrograms: 'Cursos i Programes',
    keyCourses: 'Assignatures Clau',
    skillsDeveloped: 'Habilitats Desenvolupades',
    languages: 'Idiomes',
    certificationsNotes: 'Certificacions i Notes',
    verification: 'Verificació',
    verifyProficiency: 'Verificar Competència →',
    skills: 'Habilitats',
    awards: 'Premis',
    noAwards: 'Encara sense premis',
    portfolio: 'Portfolio',
    expand: 'Expandir',
    collapse: 'Col·lapsar',
    recommendations: 'Recomanacions',
    readMore: 'Llegir més ↓',
    seeMoreLinkedIn: 'Veure +10 a LinkedIn',
    prevRecommendation: 'Recomanació anterior',
    nextRecommendation: 'Recomanació següent',
    goToRecommendation: (n) => `Anar a la recomanació ${n}`,
    downloadCv: 'Descarregar CV',
    bookCall: 'Reservar un 1:1',
    heroDescription: 'Programari. IA. Dades. Seguretat. R+D. Problemes difícils en múltiples disciplines — construeixo i mantinc solucions robustes.',
    heroHeadline: ['Investigar.', 'Construir.', 'Protegir.'],
    marqueeItems: [
      'Proves d\'Intrusió', 'Zero Trust', 'Modelat d\'Amenaces', 'SIEM',
      'Seguretat de Xarxes', 'IA / ML', 'Enginyeria de Dades', 'Seguretat al Núvol',
      'Python', 'Kubernetes', 'Ciberseguretat', 'BigQuery', 'TensorFlow',
    ],
    statsYears: 'Anys',
    statsResearch: 'Recerca',
    statsResearchValue: 'En curs',
    statsProjects: 'Projectes',
    cvSelectArea: 'Selecciona una àrea de focus i tria el format.',
    cvOnePagePerArea: 'Una pàgina per àrea',
    cvDownloadTex: 'Descarregar .tex',
    cvDownloadPdf: 'Descarregar .pdf',
    cvGenerating: 'Generant...',
    lp: {
      introTitle: (name) => name ? `Gràcies, ${name} — ja tenim les teves dades.` : 'Gràcies — ja tenim les teves dades.',
      introBody: 'Abans de la nostra trucada 1:1, unes preguntes ràpides perquè hi entrem ja sabent de què vols parlar.',
      introCta: 'Anem-hi',
      back: 'Enrere',
      next: 'Següent',
      submit: 'Enviar',
      videoWaiting: (s) => `Falten ${s}s…`,
      thankYou: 'Gràcies! Ja tinc el que necessitava.',
      redirecting: "Et torno a portar on eres…",
    },
  },
  fr: {
    close: 'Fermer',
    viewDetails: 'Voir les détails →',
    showLess: 'Voir moins',
    showAll: (n) => `Voir les ${n}`,
    workHistory: 'Parcours Professionnel',
    keyFocusAreas: 'Domaines Clés de Compétence',
    technologies: 'Technologies',
    certifications: 'Certifications',
    certCategoryLabel: {
      cloud: 'Cloud', security: 'Sécurité', networking: 'Réseaux',
      data: 'Données', development: 'Développement',
    },
    issuer: 'Émetteur',
    date: 'Date',
    credentialId: 'ID de Certification',
    verifyCredential: 'Vérifier la Certification →',
    showAllCerts: (n) => `Voir les ${n} certifications`,
    volunteering: 'Bénévolat',
    focusAreas: 'Domaines d\'Action',
    responsibilities: 'Responsabilités',
    category: 'Catégorie',
    projects: 'Projets',
    projectFilters: [
      { key: 'all',                 label: 'Tous'      },
      { key: 'aiml',                label: 'IA / ML'   },
      { key: 'softwareDevelopment', label: 'Logiciel'  },
      { key: 'dataEngineering',     label: 'Données'   },
      { key: 'cybersecurity',       label: 'Cyber'     },
    ],
    projectCategoryLabel: {
      aiml: 'IA / ML', softwareDevelopment: 'Logiciel',
      dataEngineering: 'Données', cybersecurity: 'Cyber', challenges: 'Défis',
    },
    features: 'Fonctionnalités',
    techStack: 'Stack Technique',
    viewOnGitHub: 'Voir sur GitHub →',
    showAllProjects: (n) => `Voir les ${n} projets`,
    researches: 'Recherches',
    researchStatusLabel: {
      'in development': 'en développement',
      'published': 'publié',
      'under review': 'en révision',
    },
    viewPublication: 'Voir la Publication →',
    showAllResearches: (n) => `Voir les ${n} recherches`,
    education: 'Formation',
    academicBackground: 'Parcours Académique',
    degrees: 'Diplômes',
    coursesPrograms: 'Cours & Programmes',
    keyCourses: 'Cours Principaux',
    skillsDeveloped: 'Compétences Développées',
    languages: 'Langues',
    certificationsNotes: 'Certifications & Notes',
    verification: 'Vérification',
    verifyProficiency: 'Vérifier le Niveau →',
    skills: 'Compétences',
    awards: 'Prix',
    noAwards: 'Pas encore de prix',
    portfolio: 'Portfolio',
    expand: 'Développer',
    collapse: 'Réduire',
    recommendations: 'Recommandations',
    readMore: 'Lire la suite ↓',
    seeMoreLinkedIn: 'Voir +10 sur LinkedIn',
    prevRecommendation: 'Recommandation précédente',
    nextRecommendation: 'Recommandation suivante',
    goToRecommendation: (n) => `Aller à la recommandation ${n}`,
    downloadCv: 'Télécharger le CV',
    bookCall: 'Réserver un 1:1',
    heroDescription: 'Logiciel. IA. Données. Sécurité. R&D. Des problèmes difficiles à travers les disciplines — je construis et maintiens des solutions robustes.',
    heroHeadline: ['Rechercher.', 'Construire.', 'Sécuriser.'],
    marqueeItems: [
      'Tests d\'Intrusion', 'Zero Trust', 'Modélisation des Menaces', 'SIEM',
      'Sécurité Réseau', 'IA / ML', 'Ingénierie des Données', 'Sécurité Cloud',
      'Python', 'Kubernetes', 'Cybersécurité', 'BigQuery', 'TensorFlow',
    ],
    statsYears: 'Années',
    statsResearch: 'Recherches',
    statsResearchValue: 'En cours',
    statsProjects: 'Projets',
    cvSelectArea: 'Sélectionnez un domaine de focus, puis choisissez votre format.',
    cvOnePagePerArea: 'Une page par domaine',
    cvDownloadTex: 'Télécharger .tex',
    cvDownloadPdf: 'Télécharger .pdf',
    cvGenerating: 'Génération...',
    lp: {
      introTitle: (name) => name ? `Merci, ${name} — vos informations sont bien arrivées.` : 'Merci — vos informations sont bien arrivées.',
      introBody: "Avant notre appel en tête-à-tête, quelques questions rapides pour qu'on sache déjà de quoi vous voulez parler.",
      introCta: "C'est parti",
      back: 'Retour',
      next: 'Suivant',
      submit: 'Envoyer',
      videoWaiting: (s) => `${s}s restantes…`,
      thankYou: "Merci ! J'ai ce qu'il me faut.",
      redirecting: 'Je vous ramène là où vous étiez…',
    },
  },

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
    bookCall: 'Book a 1:1',
    heroDescription: 'Software. AI. Data. Security. R&D. Hard problems across disciplines — I build and maintain robust solutions.',
    heroHeadline: ['Research.', 'Build.', 'Secure.'],
    marqueeItems: [
      'Penetration Testing', 'Zero Trust', 'Threat Modeling', 'SIEM',
      'Network Security', 'AI / ML', 'Data Engineering', 'Cloud Security',
      'Python', 'Kubernetes', 'Cybersecurity', 'BigQuery', 'TensorFlow',
    ],
    statsYears: 'Years',
    statsResearch: 'Research',
    statsResearchValue: 'Ongoing',
    statsProjects: 'Projects',
    cvSelectArea: 'Select a focus area, then choose your format.',
    cvOnePagePerArea: 'One page per area',
    cvDownloadTex: 'Download .tex',
    cvDownloadPdf: 'Download .pdf',
    cvGenerating: 'Generating...',
    lp: {
      introTitle: (name) => name ? `Thanks, ${name} — your info already came through.` : 'Thanks — your info already came through.',
      introBody: "Before our 1:1, a few quick questions so we go in already knowing what you want to talk about.",
      introCta: "Let's go",
      back: 'Back',
      next: 'Next',
      submit: 'Submit',
      videoWaiting: (s) => `${s}s remaining…`,
      thankYou: "Thank you! That's everything I needed.",
      redirecting: 'Taking you back to where you were…',
    },
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
    bookCall: 'Agendar 1:1',
    heroDescription: 'Software. IA. Dados. Segurança. P&D. Problemas difíceis em várias disciplinas — construo e mantenho soluções robustas.',
    heroHeadline: ['Pesquisar.', 'Construir.', 'Proteger.'],
    marqueeItems: [
      'Testes de Intrusão', 'Zero Trust', 'Modelagem de Ameaças', 'SIEM',
      'Segurança de Redes', 'IA / ML', 'Engenharia de Dados', 'Segurança em Nuvem',
      'Python', 'Kubernetes', 'Cibersegurança', 'BigQuery', 'TensorFlow',
    ],
    statsYears: 'Anos',
    statsResearch: 'Pesquisas',
    statsResearchValue: 'Em curso',
    statsProjects: 'Projetos',
    cvSelectArea: 'Selecione uma área de foco e escolha o formato.',
    cvOnePagePerArea: 'Uma página por área',
    cvDownloadTex: 'Baixar .tex',
    cvDownloadPdf: 'Baixar .pdf',
    cvGenerating: 'Gerando...',
    lp: {
      introTitle: (name) => name ? `Obrigado, ${name} — seus dados já chegaram.` : 'Obrigado — seus dados já chegaram.',
      introBody: 'Antes da nossa reunião 1:1, algumas perguntas rápidas pra já entrarmos sabendo sobre o que você quer falar.',
      introCta: 'Vamos lá',
      back: 'Voltar',
      next: 'Próxima',
      submit: 'Enviar',
      videoWaiting: (s) => `Faltam ${s}s…`,
      thankYou: 'Obrigado! Já tenho o que eu precisava.',
      redirecting: 'Te levando de volta pra onde você estava…',
    },
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
    bookCall: 'Agendar 1:1',
    heroDescription: 'Software. IA. Datos. Seguridad. I+D. Problemas difíciles en múltiples disciplinas — construyo y mantengo soluciones robustas.',
    heroHeadline: ['Investigar.', 'Construir.', 'Proteger.'],
    marqueeItems: [
      'Pruebas de Intrusión', 'Zero Trust', 'Modelado de Amenazas', 'SIEM',
      'Seguridad de Redes', 'IA / ML', 'Ingeniería de Datos', 'Seguridad en la Nube',
      'Python', 'Kubernetes', 'Ciberseguridad', 'BigQuery', 'TensorFlow',
    ],
    statsYears: 'Años',
    statsResearch: 'Investigación',
    statsResearchValue: 'En curso',
    statsProjects: 'Proyectos',
    cvSelectArea: 'Selecciona un área de enfoque y elige tu formato.',
    cvOnePagePerArea: 'Una página por área',
    cvDownloadTex: 'Descargar .tex',
    cvDownloadPdf: 'Descargar .pdf',
    cvGenerating: 'Generando...',
    lp: {
      introTitle: (name) => name ? `Gracias, ${name} — tus datos ya llegaron.` : 'Gracias — tus datos ya llegaron.',
      introBody: 'Antes de nuestra reunión 1:1, unas preguntas rápidas para llegar ya sabiendo de qué quieres hablar.',
      introCta: 'Vamos',
      back: 'Atrás',
      next: 'Siguiente',
      submit: 'Enviar',
      videoWaiting: (s) => `Quedan ${s}s…`,
      thankYou: '¡Gracias! Ya tengo lo que necesitaba.',
      redirecting: 'Te llevo de vuelta a donde estabas…',
    },
  },
}

export function getUiStrings(locale: string): UiStrings {
  return UI[resolveLocale(locale)]
}
