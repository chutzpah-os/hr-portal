import type { PortfolioData } from './portfolio.types'

export const portfolioDataCa: PortfolioData = {
  personal: {
    name: 'Haniel Rolemberg',
    title: 'Enginyer d\'IA i Investigador',
    about: [
      'Soc un Solucionador de Problemes — algú que transforma reptes en oportunitats a través de la tecnologia, l\'estratègia i la intenció.',
      'Amb una base sòlida en Ciberseguretat (Zero Trust, NIST CSF, AppSec, SIEM/SOAR, Proves d\'Intrusió), Machine Learning (MLOps, Visió per Computador) i Enginyeria de Dades (Apache Spark, Airflow), destaco construint productes segurs, escalables i orientats a dades que generen un impacte real.',
      'La meva missió és clara: impactar 1.000 milions de vides per al 2035 (1b2035) a través de la innovació, l\'educació i la resolució intel·ligent de problemes. Aquesta és la força motora darrere de la Problem Solver Foundation, una iniciativa que capacita les persones per afrontar la complexitat, pensar críticament i actuar amb intenció.',
    ],
  },

  experience: [
    {
      id: 'exp1',
      title: 'Machine Learning Engineer',
      company: 'Stealth',
      period: 'Jul 2025 - Present',
      description:
        'Desenvolupament de sistemes impulsats per IA per a la detecció d\'incidents urbans i monitoratge en temps real, integrant visió per computador amb anàlisi de dades històriques per optimitzar l\'assignació de recursos.',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision'],
      cvAreas: ['aiml'],
      details: {
        overview:
          'Desenvolupament de sistemes impulsats per IA per detectar i analitzar incidents urbans, millorant la consciència situacional en els sectors de la mobilitat, la seguretat i la gestió urbana.',
        keyAreas: [
          'Construcció de sistemes d\'IA per a la detecció d\'incidents urbans i consciència situacional',
          'Integració de visió per computador amb pipelines de monitoratge en temps real',
          'Combinació de fluxos de dades en viu amb dades històriques per optimitzar l\'assignació de recursos',
          'Millora dels resultats de seguretat als sectors de la mobilitat, la seguretat i la gestió urbana',
        ],
        technologies: 'Python, TensorFlow, OpenCV, Computer Vision, MLOps',
      },
    },
    {
      id: 'exp2',
      title: 'Cyber Security Engineer',
      company: 'Stealth',
      period: 'Apr 2022 - Present',
      description:
        'Disseny i protecció d\'infraestructures de xarxa corporatives a la seu i en més de 30 unitats regionals, amb gestió avançada de tallafocs, polítiques zero-trust, proves d\'intrusió i automatització de ciberseguretat.',
      tags: ['SIEM/SOAR', 'FortiGate', 'Penetration Testing', 'VMware vSphere', 'Hyper-V'],
      cvAreas: ['cyber'],
      details: {
        overview:
          'Planificació, desplegament i protecció d\'infraestructures de xarxa corporatives a la seu i en més de 30 unitats regionals, aplicant controls de seguretat avançats i automatització.',
        keyAreas: [
          'Planificació i gestió d\'infraestructures de xarxa corporatives amb Active Directory (Windows Server) en més de 30 llocs',
          'Desplegament de solucions FortiGate, FortiSwitch i FortiAP, augmentant l\'escalabilitat i la visibilitat de la xarxa',
          'Execució de proves d\'intrusió i avaluacions de vulnerabilitats, identificant i mitigant riscos de seguretat crítics',
          'Desplegament de solucions SIEM/SOAR per a la detecció d\'amenaces i la resposta automatitzada a incidents',
          'Gestió de NGFW Cisco, HP i Fortinet, SD-WAN, VLAN, VoIP, VPN, VPS i components d\'infraestructura Oracle',
          'Virtualització amb VMware vSphere i Hyper-V en entorns on-premises',
          'Desplegament de clústers de commutació per error Hyper-V amb Cluster Shared Volumes (CSV) per a alta disponibilitat',
          'Gestió de servidors Windows/Linux amb enduriment de seguretat i solucions de còpia de seguretat (Veeam)',
          'Lideratge de migracions de centres de dades',
        ],
        technologies:
          'FortiGate, FortiSwitch, FortiAP, Cisco, HP, Fortinet NGFW, SD-WAN, VLAN, VoIP, VPN, VMware vSphere, Hyper-V, Veeam, Active Directory, Windows/Linux Servers, SIEM/SOAR, Penetration Testing, Oracle Cloud',
      },
    },
    {
      id: 'exp3',
      title: 'Software Engineer',
      company: 'Stealth',
      period: 'Jan 2021 - Present',
      description: 'Desenvolupament d\'aplicacions web i mòbils full-stack amb frameworks moderns, APIs RESTful i metodologies àgils.',
      tags: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'REST APIs'],
      cvAreas: ['software'],
      details: {
        overview: 'Desenvolupament d\'aplicacions web i mòbils full-stack, millorant l\'experiència d\'usuari i la funcionalitat en diversos projectes de clients.',
        keyAreas: [
          'Construcció d\'aplicacions web modernes amb JavaScript i React, garantint un disseny responsiu',
          'Creació de serveis de backend amb Node.js i integració d\'APIs RESTful per a una interacció fluida amb tercers',
          'Desenvolupament d\'aplicacions web i mòbils full-stack amb Expo i React Native',
          'Participació en processos de desenvolupament àgil, contribuint a l\'entrega eficient de projectes',
        ],
        technologies: 'JavaScript, TypeScript, React, React Native, Expo, Node.js, NestJS, Express, FastAPI, Python, Go',
      },
    },
    {
      id: 'exp4',
      title: 'Data Analyst',
      company: 'Stealth',
      period: 'Sep 2024 - Sep 2025',
      description:
        'Transformació de dades brutes en coneixements de negoci accionables, automatització de fluxos de treball complexos i construcció de pipelines de dades per donar suport a la presa de decisions estratègiques.',
      tags: ['Python', 'SQL', 'Power BI', 'Tableau'],
      cvAreas: ['data'],
      details: {
        overview:
          'Transformació de dades brutes en coneixements de negoci accionables per impulsar la presa de decisions estratègiques i el creixement a través de l\'anàlisi avançada i l\'automatització.',
        keyAreas: [
          'Transformació de dades brutes en coneixements de negoci accionables per impulsar la presa de decisions estratègiques',
          'Ús de Python, SQL, Tableau i Power BI per a anàlisi i visualització avançades',
          'Automatització de fluxos de treball complexos i pipelines de dades per augmentar l\'eficiència operacional',
          'Suport a solucions orientades a dades en múltiples dominis de negoci',
        ],
        technologies: 'Python, SQL, Tableau, Power BI, Pandas, NumPy, Apache Airflow',
      },
    },
    {
      id: 'exp5',
      title: 'Sales Representative',
      company: 'Family Business',
      period: '2011 - 2017',
      description:
        'Va començar a vendre als 7 anys, passant de B2C a B2B al nord-est del Brasil. Va assolir aproximadament 1 milió USD en vendes i va atendre més de 700 clients mitjançant prospecció porta a porta.',
      tags: ['B2B', 'B2C', 'Negotiation', 'CRM'],
      cvAreas: [],
      details: {
        overview:
          'Un recorregut emprenedor iniciat als 7 anys, escalant de vendes artesanals B2C a prospecció B2B porta a porta a Sergipe, Bahia i Alagoas.',
        keyAreas: [
          'Realització del contacte inicial, presentació de productes, qualificació de leads i gestió de contractes i tancaments',
          'Assoliment de gairebé 1 milió USD en vendes i més de 700 clients mitjançant prospecció porta a porta tradicional',
          'Organització d\'esdeveniments amb institucions locals per reduir el Cost d\'Adquisició de Client (CAC)',
          'Actuació al nord-est del Brasil (Sergipe, Bahia i Alagoas)',
          'Cultiu de relacions a llarg termini amb clients per augmentar el Valor de Vida del Client (LTV)',
        ],
        technologies: 'B2B Sales, B2C Sales, Negotiation, CRM, Lead Generation, Event Organizing',
      },
    },
  ],

  education: [
    {
      id: 'edu1',
      type: 'degree',
      title: 'Grau en Ciències de la Computació',
      institution: 'Estácio',
      period: '2022 - Present',
      description:
        'IA, sistemes computacionals, xarxes, seguretat, bases de dades, IHC, llenguatges de programació, enginyeria de programari, ciberseguretat, bioinformàtica i teoria de la computació.',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview: 'Formació integral en ciències de la computació cobrint tot l\'espectre de la informàtica moderna, des de sistemes i xarxes fins a IA, seguretat i enginyeria de programari.',
        keyAreas: [
          'Intel·ligència Artificial i Machine Learning',
          'Sistemes Computacionals i Xarxes',
          'Seguretat i Ciberseguretat',
          'Sistemes de Bases de Dades',
          'Interacció Persona-Ordinador',
          'Visió per Computador i Computació Gràfica',
          'Enginyeria de Programari i Llenguatges de Programació',
          'Bioinformàtica i Teoria de la Computació',
        ],
      },
    },
    {
      id: 'edu2',
      type: 'degree',
      title: 'Grau en Administració Pública',
      institution: 'Estácio',
      period: '2017 - 2019 • GPA: 4.97/5',
      description:
        'Teoria Democràtica, Economia, Política Internacional, Governança, Finances Públiques, Dret Constitucional, Planificació Estratègica i Canvi Social.',
      cvAreas: [],
      details: {
        overview:
          'Sòlida base en governança, polítiques públiques i gestió estratègica amb excel·lent rendiment acadèmic (GPA 4,97/5). Completat en 4 a 5 semestres.',
        gpa: '4.97/5.0',
        keyCourses: [
          'Teoria Democràtica i Governança',
          'Diners, Mercats i Polítiques Econòmiques',
          'Política Internacional',
          'Finances Públiques i Dret Constitucional',
          'Política Comparada',
          'Comptabilitat General i Pública',
          'Planificació Estratègica i Canvi Social',
        ],
      },
    },
    {
      id: 'edu3',
      type: 'course',
      title: 'Junior Cybersecurity Analyst Career Path',
      institution: 'Cisco Networking Academy',
      period: '2024 - 2025',
      description:
        'Monitoratge de xarxes, detecció d\'amenaces, SIEM, IDS, proves d\'intrusió, resposta a incidents, forense i governança de ciberseguretat.',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Formació integral en ciberseguretat cobrint defensa de xarxes, detecció d\'amenaces, resposta a incidents i investigacions forenses. Credencial emesa per Cisco.',
        skillsDeveloped: [
          'Gestió d\'Esdeveniments i Informació de Seguretat (SIEM)',
          'Sistemes de Detecció d\'Intrusions (IDS)',
          'Proves d\'Intrusió i Avaluació de Vulnerabilitats',
          'Resposta a Incidents i Anàlisi de Programari Maliciós',
          'Seguretat de Xarxes, Enduriment i WLAN',
          'Tallafocs, Seguretat al Núvol i Criptografia',
          'Investigacions Forenses i Gestió de Riscos',
          'Governança de Ciberseguretat i Defensa en Profunditat',
        ],
      },
    },
    {
      id: 'edu4',
      type: 'course',
      title: 'Ethical Hacker',
      institution: 'Cisco Networking Academy',
      period: '2023',
      description:
        'Hacking ètic, proves d\'intrusió i avaluació de vulnerabilitats en aplicacions, xarxes i dispositius IoT amb Kali Linux i eines de pentest.',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Experiència pràctica en hacking ètic, proves d\'intrusió i avaluació de vulnerabilitats. Credencial emesa per Cisco a Haniel Rolemberg.',
        skillsDeveloped: [
          'Monitoratge de Seguretat i Proves d\'Intrusió',
          'Metodologies de Hacking Ètic',
          'Kali Linux i Eines WebSploit',
          'Avaluació de Vulnerabilitats (Aplicacions, Xarxes, IoT)',
          'Detecció d\'Enginyeria Social i Informes de Seguretat',
          'Bones Pràctiques Legals i de Compliment en Seguretat',
          'Python i Bash per a Automatització de Seguretat',
        ],
      },
    },
    {
      id: 'edu5',
      type: 'course',
      title: 'Network Technician Career Path',
      institution: 'Cisco Networking Academy',
      period: '2023',
      description:
        'Dispositius Cisco i IOS, adreçament IPv4/IPv6, protocols de xarxa, resolució de problemes, serveis al núvol i accés sense fils.',
      cvAreas: ['cyber'],
      details: {
        overview: 'Habilitats integrals de xarxa per al disseny, la resolució de problemes i el suport de xarxes. Credencial emesa per Cisco a Haniel Rolemberg.',
        skillsDeveloped: [
          'Dispositius Cisco, IOS, Encaminadors i Commutadors',
          'Adreçament IPv4 i IPv6',
          'Protocols de Capa de Xarxa i Transport',
          'Cablejat de Coure i Fibra',
          'Resolució de Problemes de Xarxa, Help Desk i Suport a l\'Usuari',
          'Disseny Jeràrquic de Xarxes',
          'Serveis al Núvol i Accés Sense Fils',
        ],
      },
    },
    {
      id: 'edu6',
      type: 'course',
      title: 'CS50 — Computer Science from Harvard',
      institution: 'Fundação Estudar',
      period: 'Completed',
      description:
        'Algorismes, estructures de dades, C, Python, SQL i desenvolupament web — el programa CS50 de Harvard al Brasil.',
      cvAreas: ['software', 'data'],
      details: {
        overview:
          'Curs CS50 de Harvard completat al Brasil a través de la Fundação Estudar, cobrint els fonaments intel·lectuals de les ciències de la computació i la programació.',
        skillsDeveloped: [
          'Algorismes i Estructures de Dades',
          'Llenguatge de Programació C',
          'Python i SQL',
          'Desenvolupament Web (HTML, CSS, JavaScript)',
          'Descomposició de problemes i pensament computacional',
        ],
      },
    },
  ],

  volunteering: [
    {
      id: 'vol1',
      title: 'Community Organizer',
      organization: 'Problem Solvers Foundation',
      period: 'Jan 2026 - Present',
      image: '/images/psff.jpg',
      description: 'Construcció d\'una comunitat amb la missió d\'impactar 1.000 milions de vides per al 2035.',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview:
          'Som la Problem Solvers Foundation — una comunitat amb la missió d\'impactar 1.000 milions de vides per al 2035. Capacitem les persones per afrontar la complexitat, pensar críticament i actuar amb intenció.',
        focusAreas: [
          'Educació en Innovació i Tecnologia',
          'Formació en Pensament Crític i Resolució de Problemes',
          'Construcció de Comunitat i Col·laboració Internacional',
          'Capacitació de Persones per Afrontar la Complexitat amb Intenció',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol2',
      title: 'Strategic Alliances | IT',
      organization: 'Project Management Institute (PMI)',
      period: 'Apr 2024 - Present',
      image: '/images/pmi.jpg',
      description: 'Suport a aliances estratègiques, operacions de TI i iniciatives conjuntes, incloent-hi Agile Brazil i Produte-SE.',
      cvAreas: ['software'],
      details: {
        overview:
          'Suport a l\'àrea d\'Aliances Estratègiques, ajudant a coordinar col·laboracions i iniciatives conjuntes. Contribució a l\'estratègia de TI i operacions digitals.',
        responsibilities: [
          'Coordinació d\'aliances estratègiques i iniciatives conjuntes de la comunitat',
          'Representació del PMI en esdeveniments com Agile Brazil',
          'Suport a les operacions de TI per reforçar l\'estratègia digital',
          'Col·laboració amb Produte-SE i GDG Aracaju en esdeveniments intercomunitaris',
        ],
        category: 'Economic Empowerment',
      },
    },
    {
      id: 'vol3',
      title: 'Tech Advocate',
      organization: 'Tech Brazil Advocates',
      period: 'Jan 2024 - Present',
      image: '/images/advoctech.png',
      description: 'Mapeig de l\'ecosistema local d\'innovació tecnològica a Sergipe, Brasil.',
      cvAreas: ['software'],
      details: {
        overview:
          'Responsable de mapejar tot l\'ecosistema local d\'innovació aplicada a la tecnologia a Sergipe, connectant startups, institucions i professionals de tecnologia.',
        focusAreas: [
          'Mapeig i documentació de l\'ecosistema tecnològic local',
          'Connexió entre innovadors, startups i institucions a Sergipe',
          'Promoció de la consciència i adopció tecnològica',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol4',
      title: 'Community Leader',
      organization: 'GDG Aracaju (Google Developer Group)',
      period: 'Oct 2023 - Nov 2024',
      image: '/images/gdgaracaju.jpg',
      description: 'Va liderar més de 25 voluntaris per capacitar més de 300 professionals de tecnologia a través d\'esdeveniments, tallers i mentoria.',
      cvAreas: ['software'],
      details: {
        overview:
          'El Google Developer Group Aracaju és una comunitat independent i sense ànim de lucre amb el suport de Google. Va actuar com a gestor de projectes i processos, organitzant esdeveniments tècnics a la Universitat Federal de Sergipe i més enllà.',
        responsibilities: [
          'Gestió de projectes i processos per a totes les activitats de la comunitat',
          'Lideratge d\'un equip dedicat de més de 25 voluntaris',
          'Compromís comunitari amb més de 300 membres actius',
          'Organització de tallers tècnics (ex: Go/Golang a la UFS per a sistemes de cues)',
          'Realització d\'esdeveniments de mercat laboral universitari amb empreses i equips de RRHH',
          'Representació del GDG Aracaju en esdeveniments d\'Agile Brazil i Produte-SE',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol5',
      title: 'Volunteer Staff',
      organization: 'Rotary International / Rotaract',
      period: 'Oct 2022 - Sep 2023',
      image: '/images/rotary.jpg',
      description: 'Contribució a iniciatives de protecció ambiental, salut, educació i pau.',
      cvAreas: [],
      details: {
        overview:
          'Contribució a la missió del Rotary International de generar canvis duradors en comunitats de tot el món en sis àrees d\'enfocament.',
        focusAreas: [
          'Protecció del Medi Ambient',
          'Salut Maternoinfantil',
          'Suport a l\'Educació',
          'Desenvolupament Econòmic',
          'Promoció de la Pau',
          'Lluita contra Malalties i Aigua Potable i Sanejament',
        ],
        category: 'Social Services',
      },
    },
    {
      id: 'vol6',
      title: 'Board Member / Volunteer',
      organization: 'Clube Poliglota Brasil',
      period: 'Jan 2021 - Sep 2023',
      image: '/images/cpbb.png',
      description: 'Va gestionar un equip de creadors de contingut, va implementar estratègies de SEO i growth hacking, va millorar el rendiment del blog amb PHP i va ser coautor d\'un llibre sobre aprenentatge d\'idiomes.',
      cvAreas: ['software'],
      details: {
        overview:
          'Es va unir com a membre de la junta per garantir una planificació organitzacional efectiva. Va gestionar un equip de 5 creadors de contingut i 2 editors, augmentant el trànsit del blog a través de SEO i growth hacking. També va desenvolupar millores en PHP per reduir colls d\'ampolla en la càrrega de pàgines.',
        responsibilities: [
          'Planificació i execució organitzacional a nivell de junta',
          'Gestió d\'un equip de 5 creadors de contingut i 2 editors',
          'Desenvolupament i execució d\'estratègies de SEO i growth hacking',
          'Desenvolupament en PHP per reduir colls d\'ampolla i millorar la velocitat de la pàgina',
          'Redacció d\'articles sobre el procés d\'aprenentatge d\'idiomes',
          'Coautoria d\'un llibre sobre aprenentatge d\'idiomes durant aquesta experiència',
        ],
        category: 'Education',
      },
    },
  ],

  skills: [
    {
      name: 'Llenguatges de Programació',
      items: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'C', 'SQL', 'PHP'],
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
    },
    {
      name: 'Desenvolupament Web/Mòbil',
      items: ['React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'NestJS', 'Express', 'FastAPI', 'Spring Boot'],
      cvAreas: ['software'],
    },
    {
      name: 'IA / ML',
      items: ['TensorFlow', 'OpenCV', 'Computer Vision', 'CrewAI', 'Autonomous Agents', 'MLOps', 'PyTorch', 'Pandas', 'NumPy'],
      cvAreas: ['aiml'],
    },
    {
      name: 'Enginyeria de Dades',
      items: ['Apache Spark', 'Apache Airflow', 'Databricks', 'ETL', 'BigQuery', 'Power BI', 'Tableau'],
      cvAreas: ['data'],
    },
    {
      name: 'Bases de Dades',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase / Firestore', 'AWS S3', 'Supabase'],
      cvAreas: ['data', 'software'],
    },
    {
      name: 'Ciberseguretat i Xarxes',
      items: ['SIEM/SOAR', 'Penetration Testing', 'FortiGate', 'Zero Trust', 'NIST CSF', 'AppSec', 'OSINT', 'DFIR', 'Kali Linux', 'Active Directory', 'VMware vSphere', 'Hyper-V', 'SD-WAN', 'VPN'],
      cvAreas: ['cyber'],
    },
    {
      name: 'Cloud i DevOps',
      items: ['AWS', 'GCP', 'Oracle Cloud', 'Firebase', 'Docker', 'Kubernetes', 'CI/CD'],
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
    },
  ],

  languages: [
    {
      id: 'lang1',
      language: 'Portuguès',
      level: 'Natiu',
      proficiency: 100,
      details: {
        description: 'Parlant natiu amb plena competència professional en portuguès brasiler.',
        certifications: [
          'Llengua Nativa — Nascut i criat al Brasil',
          'Comunicació professional en contextos de negocis i tècnics',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang2',
      language: 'Anglès',
      level: 'Competència Professional de Treball',
      proficiency: 85,
      details: {
        description: 'Anglès avançat amb sòlides habilitats de comunicació professional i tècnica.',
        certifications: [
          'Competència Professional de Treball',
          'Documentació tècnica i presentacions',
          'Negocis internacionals i lideratge comunitari',
        ],
        verificationLink: 'https://youtu.be/P24KDOH8mNI?si=esDMWjFPKW4xFDqs',
      },
    },
    {
      id: 'lang3',
      language: 'Espanyol',
      level: 'Competència Professional de Treball',
      proficiency: 75,
      details: {
        description: 'Competència professional en espanyol amb èmfasi en contextos de negocis i tècnics.',
        certifications: [
          'Competència Professional de Treball',
          'Competència en espanyol de negocis',
          'Lectura i escriptura de documentació tècnica',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang4',
      language: 'Hebreu',
      level: 'Competència Elemental',
      proficiency: 40,
      details: {
        description: 'Competència elemental amb èmfasi en lectura i comunicació bàsica.',
        certifications: [
          'Competència Elemental',
          'Hebreu conversacional bàsic',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang5',
      language: 'Francès',
      level: 'Competència Elemental',
      proficiency: 35,
      details: {
        description: 'Francès elemental amb comprensió lectora i comunicació professional bàsica.',
        certifications: [
          'Competència Elemental',
          'Comprensió de documentació tècnica',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang6',
      language: 'Italià',
      level: 'Competència Elemental',
      proficiency: 35,
      details: {
        description: 'Italià elemental amb èmfasi en comprensió lectora.',
        certifications: [
          'Competència Elemental',
          'Comprensió lectora',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang7',
      language: 'Català',
      level: 'Competència Elemental',
      proficiency: 30,
      details: {
        description: 'Català elemental amb lectura i comprensió bàsiques.',
        certifications: [
          'Competència Elemental',
          'Comprensió bàsica de lectura',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang8',
      language: 'Rus',
      level: 'Principiant',
      proficiency: 20,
      details: {
        description: 'Rus bàsic amb èmfasi en terminologia tècnica i lectura.',
        certifications: [
          'Nivell Elemental (A1)',
          'Familiaritat amb terminologia tècnica',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
  ],

  // Certifications are not translated — official credential names kept as-is
  certifications: [
    { id: 'cert1', title: 'OWASP API Security', issuer: 'APIsec University', date: 'Feb 2026', category: 'security', cvAreas: ['cyber', 'software'], tags: ['API Security', 'OWASP', 'AppSec'] },
    { id: 'cert2', title: 'Intro to Splunk', issuer: 'Splunk', date: 'Jan 2026', category: 'security', cvAreas: ['cyber'], tags: ['Splunk', 'SIEM', 'Security Monitoring'] },
    { id: 'cert3', title: 'Introduction to Technological Maturity (TRL)', issuer: 'Agência Espacial Brasileira', date: 'Jan 2026', category: 'development', cvAreas: ['aiml', 'software'], tags: ['TRL', 'Technology Readiness', 'Research'] },
    { id: 'cert4', title: 'Creating Your First Agent with CrewAI', issuer: 'DIO', date: '2025', category: 'development', cvAreas: ['aiml'], tags: ['CrewAI', 'Autonomous Agents', 'AI'] },
    { id: 'cert5', title: 'Building AI Applications with Autonomous Agents', issuer: 'DIO', date: '2025', category: 'development', cvAreas: ['aiml'], tags: ['AI Agents', 'LLM', 'AI Engineering'] },
    { id: 'cert6', title: 'Certified Phishing Prevention Specialist (CPPS)', issuer: 'Hack & Fix', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], credentialId: '3648-2721-6004-1331', tags: ['Phishing', 'Social Engineering', 'Security Awareness'] },
    { id: 'cert7', title: 'Cyber Threat Management', issuer: 'Cisco', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], tags: ['Threat Intelligence', 'CTI', 'Disaster Recovery'] },
    { id: 'cert8', title: 'Databricks Fundamentals Accreditation', issuer: 'Databricks', date: 'Jan 2025', category: 'data', cvAreas: ['data'], tags: ['Databricks', 'ETL', 'Data Engineering'] },
    { id: 'cert9', title: 'Cybersecurity Fundamentals', issuer: 'IBM', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], tags: ['Vulnerability Management', 'Incident Response', 'IBM Security'] },
    { id: 'cert10', title: 'Chronicle Security Operations Platform Fundamentals', issuer: 'Google Cloud Security', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], credentialId: '12557310', tags: ['SIEM', 'SOAR', 'Google Chronicle'] },
    { id: 'cert11', title: 'Digital Forensics & Incident Response', issuer: 'Mente Binária (ONG)', date: '2025', category: 'security', cvAreas: ['cyber'], tags: ['DFIR', 'Forensics', 'Incident Response'] },
    { id: 'cert12', title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', date: '2025', category: 'security', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/f9c6cba8-0a9a-4231-ad09-0bfcdc4107ca', tags: ['SIEM', 'IDS', 'Incident Response'] },
    { id: 'cert13', title: 'Ethical Hacker', issuer: 'Cisco Networking Academy', date: '2023', category: 'security', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/a4689f6b-ca66-4e41-801d-49f592df2914', tags: ['Penetration Testing', 'Kali Linux', 'Vulnerability Assessment'] },
    { id: 'cert14', title: 'Network Technician Career Path', issuer: 'Cisco Networking Academy', date: '2023', category: 'networking', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/53706149-3c66-49d2-9e13-d8e5c0bfbe03', tags: ['Cisco', 'IPv4/IPv6', 'Network Troubleshooting'] },
    { id: 'cert15', title: 'Cyber Academy 2024', issuer: 'FEBRABAN', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['ISO 27005', 'NIST', 'Data Governance (DAMA)', 'IAM', 'Cloud Security'] },
    { id: 'cert16', title: 'API Security for PCI Compliance', issuer: 'APIsec University', date: 'May 2024', category: 'security', cvAreas: ['cyber', 'software'], tags: ['API Security', 'PCI DSS', 'AppSec'] },
    { id: 'cert17', title: 'JavaScript Specialist Certification', issuer: 'DIO', date: '2024', category: 'development', cvAreas: ['software'], tags: ['JavaScript', 'Frontend', 'Web Development'] },
    { id: 'cert18', title: 'Inteligencia de Fuentes Abiertas (OSINT)', issuer: 'Basel Institute on Governance', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['OSINT', 'Open Source Intelligence', 'Investigations'] },
    { id: 'cert19', title: 'Network Defense', issuer: 'Cisco', date: '2024', category: 'networking', cvAreas: ['cyber'], tags: ['Network Defense', 'System Security', 'Cisco'] },
    { id: 'cert20', title: 'Endpoint Security', issuer: 'Cisco', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['Endpoint Security', 'Cisco', 'Device Hardening'] },
    { id: 'cert21', title: 'Introduction to Data Science', issuer: 'Cisco', date: '2024', category: 'data', cvAreas: ['data', 'aiml'], tags: ['Data Science', 'Cisco', 'Analytics'] },
    { id: 'cert22', title: 'High Performance Execution', issuer: 'Fundação Estudar', date: 'Jan 2025', category: 'development', cvAreas: [], tags: ['Leadership', 'High Performance', 'Personal Development'] },
  ],

  projects: {
    softwareDevelopment: [
      {
        id: 'proj-sw2',
        gradient: 'from-purple-900 to-blue-900',
        title: 'Cherut — Plataforma de Vida d\'Alt Rendiment',
        description: 'Plataforma SaaS que connecta intenció, disciplina i resultats — OKRs, hàbits, tasques i anàlisi de creixement per a individus enfocats.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'NestJS', 'Expo', 'Go', 'Python'],
        cvAreas: ['software'],
        details: {
          overview: 'Cherut (hebreu per a "llibertat") és una plataforma SaaS d\'alt rendiment per a emprenedors, creadors i professionals. Construïda amb una arquitectura de Monòlit Modular + Serveis Especialitzats Externs.',
          features: [
            'Seguiment i gestió d\'OKRs (Objectius i Resultats Clau)',
            'Constructor d\'hàbits i rutines amb seguiment de ratxes',
            'Gestió de tasques i prioritats amb taulers Kanban',
            'Tauler d\'anàlisi de creixement i coneixements de rendiment',
            'Arquitectura de Monòlit Modular amb serveis especialitzats externs',
          ],
          techStack: 'Next.js, NestJS, Expo (React Native), Python, Go, PostgreSQL, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    cybersecurity: [
      {
        id: 'proj-cy3',
        gradient: 'from-zinc-900 to-slate-900',
        title: 'Programa de Proves d\'Intrusió i Avaluació de Vulnerabilitats',
        description: 'Compromisos estructurats de hacking ètic amb Kali Linux, escaneig de vulnerabilitats, OSINT i informes de seguretat per a entorns corporatius.',
        category: 'cybersecurity',
        tags: ['Kali Linux', 'OSINT', 'Penetration Testing', 'Python'],
        cvAreas: ['cyber'],
        details: {
          overview: 'Execució de programes estructurats de proves d\'intrusió i avaluació de vulnerabilitats per a entorns corporatius, utilitzant metodologies de hacking ètic i tècniques d\'OSINT.',
          features: [
            'Reconeixement amb recollida d\'OSINT (certificat per el Basel Institute)',
            'Escaneig de xarxes, enumeració de serveis i mapeig de CVEs',
            'Proves de seguretat d\'aplicacions web (OWASP Top 10)',
            'Conscienciació sobre enginyeria social i simulació de phishing (certificat CPPS)',
            'Informes de seguretat complets i recomanacions de remediació',
          ],
          techStack: 'Kali Linux, Nmap, Metasploit, Burp Suite, WebSploit, Python, Bash, OSINT tools',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    dataEngineering: [
      {
        id: 'proj-sw1',
        gradient: 'from-blue-900 to-indigo-900',
        title: 'Plataforma Problem Solver Foundation',
        description: 'Sistema de mineria de dades que rastreja internet a la recerca de problemes reals no resolts — impulsant la missió 1b2035 de connectar solucionadors amb reptes d\'alt impacte arreu del món.',
        category: 'dataEngineering',
        tags: ['Python', 'Web Scraping', 'NLP', 'BigQuery', 'ETL'],
        cvAreas: ['data'],
        details: {
          overview: 'Un sistema de mineria de dades que rastreja i extreu internet a la recerca de problemes reals no resolts — impulsant la missió 1b2035 de connectar solucionadors amb reptes d\'alt impacte arreu del món.',
          features: [
            'Pipeline de web scraping recollint senyals de problemes de fòrums, notícies, Reddit i fonts de recerca',
            'Capa de classificació NLP per extreure, deduplicar i categoritzar problemes per domini i gravetat',
            'Pipeline ETL carregant dades estructurades de problemes a BigQuery per a anàlisi i detecció de patrons',
            'Anàlisi de tendències identificant problemes no resolts d\'alta freqüència en diferents geografies i sectors',
            'Model de puntuació automatitzat classificant problemes per potencial d\'impacte i disponibilitat de solucionadors',
            'Firestore servint conjunts de dades de problemes curats a la plataforma comunitària en temps real',
          ],
          techStack: 'Python, BeautifulSoup, Scrapy, NLP, BigQuery, Firestore, ETL, JavaScript',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    aiml: [
      {
        id: 'proj-cy1',
        gradient: 'from-red-900 to-orange-900',
        title: 'Sistema de Detecció de Personal per Visió per Computador',
        description: 'Sistema de monitoratge automatitzat 24/7 per a entorns controlats, activat per detecció de moviment/persones i alertant les autoritats en temps real.',
        category: 'aiml',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Un sistema de monitoratge automatitzat de baix consum que opera contínuament o en intervals programats, activat per detecció de moviment o de persones i enviant dades de detecció enriquides en temps real a través d\'aplicacions de missatgeria.',
          features: [
            'Monitoratge automatitzat 24/7 amb mode d\'espera de baix consum',
            'Detecció de moviment i de persones amb visualització de caixa delimitadora verda',
            'Mode d\'interval programat per a optimització d\'energia',
            'Dades de detecció enriquides enviades en temps real a les autoritats via aplicacions de missatgeria',
            'Llindars d\'alerta i zones de detecció configurables',
          ],
          techStack: 'Python, OpenCV, TensorFlow, Computer Vision, MQTT/messaging integration',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ai1',
        gradient: 'from-violet-900 to-purple-900',
        title: 'Sistema de Detecció d\'Incidents Urbans (ML)',
        description: 'Sistema impulsat per IA que integra visió per computador i monitoratge en temps real per detectar i analitzar incidents urbans amb l\'objectiu d\'optimitzar la seguretat.',
        category: 'aiml',
        tags: ['TensorFlow', 'OpenCV', 'Python', 'Computer Vision'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Desenvolupament d\'un sistema impulsat per IA per detectar i analitzar incidents urbans, millorant la consciència situacional i la seguretat en els sectors de la mobilitat, la seguretat i la gestió urbana.',
          features: [
            'Detecció de persones i objectes en temps real amb visualització de caixa delimitadora',
            'Pipeline de visió per computador amb TensorFlow i OpenCV',
            'Integració amb dades històriques per optimitzar l\'assignació de recursos',
            'Alertes automatitzades a les autoritats responsables via aplicacions de missatgeria',
            'Operació de baix consum 24/7 amb suport a intervals programats',
          ],
          techStack: 'Python, TensorFlow, OpenCV, Computer Vision, MLOps, MQTT',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ai3',
        gradient: 'from-cyan-900 to-blue-900',
        title: 'IA per a la Recerca en Oncologia (Sèrie)',
        description: 'Sèrie de revisions sistemàtiques i metaanàlisis que avaluen models d\'IA i deep learning per a la detecció primerenca del càncer en múltiples tipus de la malaltia.',
        category: 'aiml',
        tags: ['Medical AI', 'Deep Learning', 'Computer Vision', 'Research'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Una sèrie d\'investigacions que apliquen IA i deep learning a la detecció primerenca del càncer, cobrint càncer ossi, hematològic, de pròstata, de pell, de mama i colorectal, utilitzant imatges mèdiques i dades genòmiques.',
          features: [
            'Revisions sistemàtiques sobre models d\'IA per a la detecció de càncer ossi (TC, RM, raigs X)',
            'Enfocaments de ML per a la detecció de neoplàsies hematològiques via dades clíniques i genòmiques',
            'Detecció de càncer de pròstata assistida per IA amb integració d\'imatge i biomarcadors',
            'Deep learning per a la classificació de càncer de pell (èmfasi en melanoma)',
            'Arquitectures CNN per a la detecció mamogràfica de càncer de mama',
            'Detecció de càncer colorectal impulsada per IA via imatges endoscòpiques',
          ],
          techStack: 'Python, TensorFlow, PyTorch, Medical Imaging Libraries, Systematic Review Methodology',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    challenges: [
      {
        id: 'proj-ch1',
        gradient: 'from-red-900 to-rose-900',
        title: 'Corrent per l\'Esperança — Repte de les 1.000 Milles',
        description: 'Un repte de cursa de resistència de 1.000 milles per recaptar finançament continu per a la recerca del càncer, documentat a les xarxes socials, en un llibre i un documental.',
        category: 'challenges',
        tags: ['Social Impact', 'Fundraising', 'Health', 'Media'],
        cvAreas: ['software'],
        details: {
          overview: 'Un ecosistema de recaptació de fons multicanal que converteix la resistència física i l\'storytelling en suport financer continu per a la recerca del càncer.',
          features: [
            'Repte de cursa de 1.000 milles com a motor central de recaptació de fons',
            'Transmissió en temps real a les xarxes socials de l\'entrenament i el progrés',
            'Llibre que documenta el viatge, la missió i les històries humanes darrere de la recerca del càncer',
            'Documental que amplia l\'abast a audiències globals',
            'Embut de donació multicanal que connecta esport de resistència, edició i cinema',
          ],
          techStack: 'Social Media, Content Production, Fundraising Platforms',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
  },

  researches: [
    {
      id: 'res1',
      title: 'IA per a la Detecció Primerenca de Càncer Ossi',
      description: 'Revisió sistemàtica i metaanàlisi que avalua el rendiment de models d\'IA aplicats a imatges mèdiques per a la detecció de càncer ossi en estadi inicial, cobrint les modalitats de TC, RM i raigs X.',
      field: 'Oncologia · Imatge Mèdica · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res2',
      title: 'ML per a la Detecció de Neoplàsies Hematològiques',
      description: 'Revisió sistemàtica d\'enfocaments de machine learning per a la identificació primerenca de càncers de la sang utilitzant dades clíniques i marcadors genòmics.',
      field: 'Oncologia · Genòmica · ML',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res3',
      title: 'Detecció de Càncer de Pròstata Assistida per IA',
      description: 'Metaanàlisi que examina eines diagnòstiques assistides per IA per al càncer de pròstata, integrant dades d\'imatge (RM, ecografia) i biomarcadors per avaluar la precisió de detecció.',
      field: 'Oncologia · Biomarcadors · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res4',
      title: 'Deep Learning per a la Detecció de Càncer de Pell',
      description: 'Revisió sistemàtica de models de deep learning entrenats en imatges dermatoscòpiques per a la classificació de càncer de pell en estadi inicial, amb èmfasi en la precisió de detecció del melanoma.',
      field: 'Oncologia · Dermatologia · Deep Learning',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res5',
      title: 'Deep Learning per a la Detecció de Càncer de Mama',
      description: 'Metaanàlisi d\'arquitectures de xarxes neuronals convolucionals aplicades a imatges mamogràfiques per a la detecció primerenca de càncer de mama.',
      field: 'Oncologia · Radiologia · Deep Learning',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res6',
      title: 'Detecció Primerenca de Càncer Colorectal',
      description: 'Investigació que explora enfocaments impulsats per IA per a la detecció primerenca del càncer colorectal, combinant anàlisi d\'imatges endoscòpiques, perfil de biomarcadors i dades clíniques de pacients.',
      field: 'Oncologia · Gastroenterologia · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
  ],

  awards: [
    {
      id: 'award1',
      title: 'Top 1,2 % — Examen de Selecció Competitiu',
      issuer: 'Stealth Selection Process',
      year: '2018',
      description:
        'Als 18 anys, va superar amb èxit un examen altament competitiu de quatre fases, incloent proves escrites i d\'aptitud física, classificant-se entre el 1,2 % superior.',
    },
  ],
}
