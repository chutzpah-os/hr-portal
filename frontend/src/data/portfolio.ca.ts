import type { PortfolioData } from './portfolio.types'

export const portfolioDataCa: PortfolioData = {
  personal: {
    name: 'Haniel Rolemberg',
    title: 'Enginyer d\'IA i Investigador',
    about: [
      'Soc un Solucionador de Problemes — algú que transforma els reptes en oportunitats a través de la tecnologia, l\'estratègia i el propòsit.',
      'Amb una sòlida base en Ciberseguretat (Zero Trust, NIST CSF, AppSec, SIEM/SOAR, Proves de Penetració), Machine Learning (MLOps, Visió per Computador, LLMs, Agents d\'IA) i Enginyeria de Dades (Apache Spark, Airflow), excel·leixo en la construcció de productes segurs, escalables i orientats a dades que generen un impacte real.',
      'La meva missió és clara: impactar 1.000 milions de vides fins al 2035 (1b2035) a través de la innovació, l\'educació i la resolució intel·ligent de problemes. Aquesta és la força impulsora darrere de la Problem Solver Foundation, una iniciativa que capacita les persones per fer front a la complexitat, pensar críticament i actuar amb propòsit.',
    ],
  },

  experience: [
    {
      id: 'exp1',
      title: 'Machine Learning Engineer',
      company: 'SSP',
      period: 'Sep 2025 - Present',
      description:
        'Va construir SentinelAI, un sistema impulsat per IA per detectar i analitzar incidents urbans, millorant la consciència situacional als sectors de mobilitat, seguretat i gestió urbana. Operant 24/7, registrant més de 100 persones diàriament i més de 200 objectes rastrejos simultàniament.',
      tags: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'Next.js', 'Supabase', 'WebSocket'],
      cvAreas: ['aiml'],
      details: {
        overview:
          'Va construir SentinelAI — un sistema impulsat per IA per detectar i analitzar incidents urbans, millorant la consciència situacional als sectors de mobilitat, seguretat i gestió urbana. Backend Python (FastAPI) connectat a fluxos de vídeo RTSP/webcam, OpenCV + YOLOv8 per a la detecció d\'objectes/persones en temps real; frontend Next.js + TailwindCSS; Supabase per a autenticació/emmagatzematge; esdeveniments comunicats via WebSocket/REST en JSON (timestamp, camera_id, event_type, confidence, bounding_box). Operant 24 hores al dia des de l\'activació en zones crítiques, sense interrupció no intencional.',
        keyAreas: [
          'Va dissenyar i construir SentinelAI: sistema de detecció d\'incidents urbans en temps real operant 24/7 en zones crítiques',
          'Backend Python (FastAPI) ingerint fluxos de vídeo RTSP/webcam amb OpenCV + YOLOv8 per a la detecció d\'objectes/persones',
          'Esdeveniments comunicats via WebSocket/REST en JSON (timestamp, camera_id, event_type, confidence, bounding_box)',
          'Frontend Next.js + TailwindCSS; Supabase per a autenticació i emmagatzematge',
          'Registrant més de 100 persones diàriament i més de 200 objectes rastrejos simultàniament, sense interrupcions no intencionals',
        ],
        technologies: 'Python, FastAPI, OpenCV, YOLOv8, Next.js, TailwindCSS, Supabase, WebSocket, REST, RTSP, Computer Vision, MLOps',
      },
    },
    {
      id: 'exp4',
      title: 'Data Analyst',
      company: 'SSP',
      period: 'Sep 2024 - Sep 2025',
      description:
        'Va transformar dades brutes en insights de negoci accionables, impactant més de 2.000 empleats en més de 11 unitats i aproximadament 1 milió de persones en la població atesa.',
      tags: ['Python', 'SQL', 'Power BI', 'Tableau'],
      cvAreas: ['data'],
      details: {
        overview:
          'Va transformar dades brutes en insights de negoci accionables per impulsar la presa de decisions estratègiques i el creixement a través d\'anàlisis avançades i automatització. Va impactar més de 2.000 empleats en més de 11 unitats organitzacionals i aproximadament 1 milió de persones en la població atesa.',
        keyAreas: [
          'Transformació de dades brutes en insights de negoci accionables per impulsar la presa de decisions estratègiques',
          'Ús de Python, SQL, Tableau i Power BI per a l\'anàlisi i visualització avançada de dades',
          'Automatització de fluxos de treball complexos i canonades de dades per millorar l\'eficiència operativa',
          'Va impactar més de 2.000 empleats en més de 11 unitats organitzacionals',
          'Va donar suport a solucions orientades a dades que atenen una població d\'aproximadament 1 milió de persones',
        ],
        technologies: 'Python, SQL, Tableau, Power BI, Pandas, NumPy, Apache Airflow',
      },
    },
    {
      id: 'exp2',
      title: 'Cyber Security Engineer',
      company: 'SSP',
      period: 'Apr 2023 - Sep 2024',
      description:
        'Va dissenyar i assegurar la infraestructura de xarxa empresarial a la seu central i més de 30 subunitats regionals. Va donar suport a sistemes de missió crítica per a més de 5.000 usuaris actius diaris com a part d\'un equip reduït de 2 a 3 persones.',
      tags: ['SIEM/SOAR', 'FortiGate', 'Penetration Testing', 'VMware vSphere', 'Hyper-V'],
      cvAreas: ['cyber'],
      details: {
        overview:
          'Va planificar, desplegar i assegurar la infraestructura de xarxa empresarial a la seu central i més de 30 subunitats regionals. Va donar suport a sistemes de missió crítica per a més de 5.000 usuaris actius diaris com a part d\'un equip reduït de 2 a 3 persones.',
        keyAreas: [
          'Planificació i gestió d\'infraestructures de xarxa empresarials amb Active Directory (Windows Server) en més de 30 llocs',
          'Desplegament de solucions FortiGate, FortiSwitch i FortiAP, millorant l\'escalabilitat i la visibilitat de la xarxa',
          'Execució de proves de penetració i avaluacions de vulnerabilitats, identificant i mitigant riscos crítics de seguretat',
          'Implementació de solucions SIEM/SOAR per a la detecció d\'amenaces i la resposta automatitzada a incidents',
          'Gestió de NGFWs Cisco, HP i Fortinet, SD-WAN, VLAN, VoIP, VPN, VPS i components d\'infraestructura Oracle',
          'Virtualització amb VMware vSphere i Hyper-V en entorns on-premises (CentOS, Ubuntu, Debian)',
          'Implementació de Hyper-V Failover Clusters amb Cluster Shared Volumes (CSV) per a l\'alta disponibilitat',
          'Gestió de servidors Windows/Linux amb enduriment de seguretat i solucions de còpia de seguretat (Veeam)',
          'Lideratge de migracions de centres de dades; segmentació VLAN amb monitoratge continu',
        ],
        technologies:
          'FortiGate, FortiSwitch, FortiAP, Cisco, HP, Fortinet NGFW, SD-WAN, VLAN, VoIP, VPN, VMware vSphere, Hyper-V, Veeam, Active Directory, Windows/Linux Servers, SIEM/SOAR, Penetration Testing, Oracle Cloud',
      },
    },
    {
      id: 'exp3',
      title: 'Software Engineer',
      company: 'SSP',
      period: 'Apr 2022 - Apr 2023',
      description:
        'Va desenvolupar aplicacions web i mòbils full-stack. Va lliurar l\'abast de sprint en el 25% del temps assignat de mitjana. Projecte notable: ETZ — plataforma empresarial en monorepo Turborepo + pnpm amb backend Firebase serverless, RBAC, rastre d\'auditoria i infraestructura AWS.',
      tags: ['React', 'Next.js', 'NestJS', 'Node.js', 'TypeScript', 'Java', 'Kotlin'],
      cvAreas: ['software'],
      details: {
        overview:
          'Va desenvolupar aplicacions web full-stack (Java, JavaScript/TypeScript — NestJS, Node, Next) i mòbils (Java, Kotlin, Expo, React Native). Va lliurar l\'abast de sprint en el 25% del temps assignat de mitjana — reducció del 75% en el temps de lliurament. Projecte intern notable: ETZ, una plataforma Next.js 16 (App Router) en monorepo Turborepo + pnpm amb backend Firebase serverless.',
        keyAreas: [
          'Aplicacions web full-stack (Java, JavaScript/TypeScript — NestJS, Node.js, Next.js) i mòbils (Java, Kotlin, Expo, React Native)',
          'DevSecOps, seguretat d\'aplicacions i projectes d\'API',
          'Disseny de bases de dades en PostgreSQL, MySQL, SQLite, MongoDB, Firebase Firestore, Supabase i tecnologies ORM',
          'Reducció de la càrrega de lectura de la base de dades en més del 50% mitjançant l\'optimització de consultes i la memòria cau',
          'Va lliurar l\'abast de sprint en el 25% del temps assignat de mitjana (reducció del 75% en el temps de lliurament)',
          'ETZ: Next.js 16 (App Router) en Turborepo + pnpm, Firebase serverless (Firestore, Auth, Storage), RBAC amb aïllament estricte per unitat, rastre d\'auditoria en cada operació, infraestructura AWS',
        ],
        technologies: 'JavaScript, TypeScript, Java, Kotlin, React, React Native, Expo, Node.js, NestJS, Express, FastAPI, Python, C, C++, PostgreSQL, MySQL, MongoDB, Firebase Firestore, Supabase',
      },
    },
    {
      id: 'exp6',
      title: 'Penetration Tester',
      company: 'ClicKesef',
      period: 'Apr 2019 - Apr 2022',
      description:
        'Va realitzar més de 100 proves de penetració en aplicacions i infraestructura de clients; va identificar més de 100 CVEs, reduint l\'exposició crítica en un 40%. Va donar suport a la resposta a incidents en més de 25 incidents de seguretat.',
      tags: ['Penetration Testing', 'SIEM', 'APT', 'CVE Analysis', 'Incident Response'],
      cvAreas: ['cyber'],
      details: {
        overview:
          'Va realitzar proves de penetració estructurades i avaluacions de vulnerabilitats en entorns de clients, va donar suport a la detecció basada en SIEM, va rastrejar activitat APT i va conduir operacions de resposta a incidents.',
        keyAreas: [
          'Monitoratge d\'esdeveniments de seguretat i suport a la detecció basada en SIEM, contribuint al triatge i els informes d\'incidents',
          'Rastreig i investigació d\'activitat d\'Amenaça Persistent Avançada (APT), correlacionant indicadors de compromís',
          'Realització d\'avaluacions de vulnerabilitats i anàlisi de CVE, identificant més de 100 CVEs en sistemes de clients, reduint l\'exposició crítica en un 40%',
          'Execució de més de 100 proves de penetració en aplicacions i infraestructura de clients, identificant vulnerabilitats crítiques abans de la seva explotació en producció',
          'Suport a operacions de resposta a incidents en més de 25 incidents de seguretat, documentant procediments que van millorar la consistència de la resposta',
        ],
        technologies: 'Kali Linux, Nmap, Metasploit, Burp Suite, SIEM, Penetration Testing tools, Python, Bash, CVE analysis',
      },
    },
    {
      id: 'exp7',
      title: 'Software Engineer',
      company: 'ClicKesef',
      period: 'Aug 2017 - Apr 2019',
      description:
        'Va desenvolupar aplicacions web i mòbils full-stack amb JavaScript, TypeScript, Java i Kotlin. Va construir serveis backend amb Node.js i va integrar APIs RESTful.',
      tags: ['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Node.js', 'React', 'React Native'],
      cvAreas: ['software'],
      details: {
        overview:
          'Va desenvolupar aplicacions web full-stack (JavaScript/TypeScript — NestJS, Next.js) i mòbils (Java, Kotlin, Expo, React Native). Va construir serveis backend amb Node.js i va integrar APIs RESTful per a serveis de tercers. Va participar en processos de desenvolupament àgil en equips multifuncionals.',
        keyAreas: [
          'Desenvolupament web full-stack (JavaScript/TypeScript — NestJS, Next.js) i mòbil (Java, Kotlin, Expo, React Native)',
          'Construcció d\'aplicacions web responsives amb JavaScript i React',
          'Creació de serveis backend amb Node.js i integració d\'APIs RESTful per a la interacció amb serveis de tercers',
          'Participació en processos de desenvolupament àgil contribuint a la lliurament eficient de projectes en equips multifuncionals',
        ],
        technologies: 'JavaScript, TypeScript, Java, Kotlin, React, React Native, Expo, Node.js, NestJS, Next.js, Express, Python, C, C++',
      },
    },
    {
      id: 'exp5',
      title: 'Sales Representative',
      company: 'Family Business',
      period: 'Jul 2011 - Jul 2017',
      description:
        'Vendes porta a porta B2C i després B2B al nord-est del Brasil. Va atendre més de 700 clients, generant gairebé R$1M en vendes abans de dedicar-se a estudis tecnològics.',
      tags: ['B2B', 'B2C', 'Negotiation', 'CRM'],
      cvAreas: [],
      details: {
        overview:
          'Va començar amb vendes B2C, després va fer la transició a vendes B2B porta a porta. Va realitzar el contacte inicial, va presentar productes, va qualificar clients potencials i va gestionar contractes i tancaments. Va cultivar relacions amb clients (augmentant la LTV) i va organitzar esdeveniments amb institucions locals (reduint el CAC). Va atendre més de 700 clients, generant gairebé R$1M en vendes.',
        keyAreas: [
          'Va començar amb B2C, transició a vendes B2B porta a porta a Sergipe, Bahia i Alagoas',
          'Contacte inicial, presentació de productes, qualificació de clients potencials i gestió de contractes i tancaments',
          'Cultiu de relacions amb clients (augmentant la LTV) i organització d\'esdeveniments amb institucions locals (reduint el CAC)',
          'Va atendre més de 700 clients, generant gairebé R$1M en vendes abans de dedicar-se a estudis tecnològics',
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
      period: '2022 - 2026',
      description:
        'IA, sistemes informàtics, xarxes, seguretat, bases de dades, IHM, llenguatges de programació, enginyeria de programari, ciberseguretat, bioinformàtica i teoria de la computació.',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview: 'Formació completa en ciències de la computació que cobreix tot l\'espectre de la informàtica moderna, des de sistemes i xarxes fins a IA, seguretat i enginyeria de programari.',
        keyAreas: [
          'Intel·ligència Artificial i Machine Learning',
          'Sistemes Informàtics i Xarxes',
          'Seguretat i Ciberseguretat',
          'Sistemes de Bases de Dades',
          'Interacció Humà-Ordinador',
          'Visió i Gràfics',
          'Enginyeria de Programari i Llenguatges de Programació',
          'Bioinformàtica i Teoria de la Computació',
        ],
      },
    },
    {
      id: 'edu2',
      type: 'degree',
      title: 'Grau en Gestió Pública',
      institution: 'Estácio',
      period: '2017 - 2019 • GPA: 4.97/5',
      description:
        'Teoria Democràtica, Política Econòmica, Política Internacional, Governança, Finances Públiques, Dret Constitucional, Política Comparada, Comptabilitat, Planificació Estratègica i Canvi Social.',
      cvAreas: [],
      details: {
        overview:
          'Sòlida base en governança, polítiques i gestió estratègica amb excel·lent rendiment acadèmic (GPA 4.97/5). Completat en 4–5 semestres.',
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
        'Gestió d\'amenaces cibernètiques, defensa de xarxes, seguretat d\'endpoints, suport i seguretat de xarxes.',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Formació completa en ciberseguretat que cobreix la defensa de xarxes, la detecció d\'amenaces, la resposta a incidents i les investigacions forenses. Credencial emesa per Cisco.',
        skillsDeveloped: [
          'Gestió d\'Informació i Esdeveniments de Seguretat (SIEM)',
          'Sistemes de Detecció d\'Intrusions (IDS)',
          'Proves de Penetració i Avaluació de Vulnerabilitats',
          'Resposta a Incidents i Anàlisi de Programari Maliciós',
          'Seguretat de Xarxes, Enduriment i WLANs',
          'Tallafoc, Seguretat al Núvol i Criptografia',
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
        'Fonaments de les proves de penetració, metodologies de hacking ètic, avaluació de vulnerabilitats en aplicacions, xarxes i dispositius IoT.',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Experiència pràctica en hacking ètic, proves de penetració i avaluació de vulnerabilitats. Credencial emesa per Cisco.',
        skillsDeveloped: [
          'Monitoratge de Seguretat i Proves de Penetració',
          'Metodologies de Hacking Ètic',
          'Kali Linux i Eines WebSploit',
          'Avaluació de Vulnerabilitats (Aplicacions, Xarxes, IoT)',
          'Detecció d\'Enginyeria Social i Informes de Seguretat',
          'Millors Pràctiques Legals i de Compliment en Seguretat',
          'Python i Bash per a l\'Automatització de la Seguretat',
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
        'Fonaments i resolució de problemes de xarxes — dispositius Cisco i IOS, adreçament IPv4/IPv6, protocols de xarxa, serveis al núvol i accés sense fil.',
      cvAreas: ['cyber'],
      details: {
        overview: 'Habilitats completes de xarxes per al disseny, la resolució de problemes i el suport de xarxes. Credencial emesa per Cisco.',
        skillsDeveloped: [
          'Dispositius Cisco, IOS, Encaminadors i Commutadors',
          'Adreçament IPv4 i IPv6',
          'Protocols de Capa de Xarxa i Capa de Transport',
          'Cablejat de Coure i Fibra',
          'Resolució de Problemes de Xarxes, Servei d\'Assistència i Suport a l\'Usuari',
          'Disseny de Xarxes Jeràrquiques',
          'Serveis al Núvol i Accés Sense Fil',
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
        'Algoritmes, estructures de dades, C, Python, SQL i desenvolupament web — el programa CS50 de Harvard al Brasil.',
      cvAreas: ['software', 'data'],
      details: {
        overview:
          'Curs CS50 de Harvard completat al Brasil a través de Fundação Estudar, cobrint els fonaments intel·lectuals de la informàtica i la programació.',
        skillsDeveloped: [
          'Algoritmes i Estructures de Dades',
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
      title: 'Organitzador Comunitari',
      organization: 'Problem Solvers Foundation',
      period: 'Jan 2026 - Present',
      image: '/images/psff.jpg',
      description: 'Construint una comunitat amb la missió d\'impactar 1.000 milions de vides fins al 2035.',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview:
          'Som la Problem Solvers Foundation — una comunitat amb la missió d\'impactar 1.000 milions de vides fins al 2035. Capacitant les persones per fer front a la complexitat, pensar críticament i actuar amb propòsit.',
        focusAreas: [
          'Educació en Innovació i Tecnologia',
          'Formació en Pensament Crític i Resolució de Problemes',
          'Construcció de Comunitat i Col·laboració Transfronterera',
          'Capacitar les Persones per Fer Front a la Complexitat amb Propòsit',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol2',
      title: 'Voluntari',
      organization: 'Terry Fox Foundation',
      period: '2025 - Present',
      description: 'Recaptant fons per a la recerca del càncer a través del repte de cursa 1K Miles of Hope.',
      cvAreas: [],
      details: {
        overview:
          'Recaptant fons per a la recerca del càncer a través del repte de cursa 1K Miles of Hope — un repte d\'endurance de 1.000 milles en suport a la missió de la Terry Fox Foundation.',
        focusAreas: [
          'Recaptació de fons per a la recerca del càncer',
          '1K Miles of Hope — repte de cursa de 1.000 milles',
          'Sensibilització internacional sobre la Terry Fox Foundation',
        ],
        category: 'Health and Cancer Research',
      },
    },
    {
      id: 'vol3',
      title: 'Aliances Estratègiques | TI',
      organization: 'Project Management Institute (PMI)',
      period: 'Apr 2024 - Present',
      image: '/images/pmi.jpg',
      description: 'Donant suport a associacions estratègiques, operacions de TI i iniciatives conjuntes incloent Agile Brazil i Produte-SE.',
      cvAreas: ['software'],
      details: {
        overview:
          'Donant suport a l\'àrea d\'Associacions Estratègiques, ajudant a coordinar col·laboracions i iniciatives conjuntes. Contribuint a l\'estratègia de TI i les operacions digitals.',
        responsibilities: [
          'Coordinació d\'aliances estratègiques i iniciatives comunitàries conjuntes',
          'Representació del PMI en esdeveniments com Agile Brazil',
          'Suport a les operacions de TI per enfortir l\'estratègia digital',
          'Col·laboració amb Produte-SE i GDG Aracaju en esdeveniments comunitaris creuats',
        ],
        category: 'Economic Empowerment',
      },
    },
    {
      id: 'vol4',
      title: 'Defensor Tecnològic',
      organization: 'Tech Brazil Advocates',
      period: 'Jan 2024 - Present',
      image: '/images/advoctech.png',
      description: 'Cartografiant l\'ecosistema d\'innovació tecnològica local a Sergipe, Brasil.',
      cvAreas: ['software'],
      details: {
        overview:
          'Responsable de cartografiar tot l\'ecosistema d\'innovació local aplicat a la tecnologia a Sergipe, connectant startups, institucions i professionals tecnològics.',
        focusAreas: [
          'Cartografia i documentació de l\'ecosistema tecnològic local',
          'Connexió d\'innovadors, startups i institucions a Sergipe',
          'Promoció de la consciència i l\'adopció de la tecnologia',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol5',
      title: 'Líder Comunitari',
      organization: 'GDG Aracaju (Google Developer Group)',
      period: 'Oct 2023 - Nov 2024',
      image: '/images/gdgaracaju.jpg',
      description: 'Va liderar més de 25 voluntaris per capacitar més de 300 professionals tecnològics a través d\'esdeveniments, tallers i mentoria.',
      cvAreas: ['software'],
      details: {
        overview:
          'El Google Developer Group Aracaju és una comunitat independent i sense ànim de lucre amb el suport de Google. Va liderar com a gestor de projectes i processos, organitzant esdeveniments tècnics a la Universitat Federal de Sergipe i més enllà.',
        responsibilities: [
          'Gestió de projectes i processos per a totes les activitats comunitàries',
          'Lideratge d\'un equip dedicat de més de 25 voluntaris',
          'Participació comunitària amb més de 300 membres actius',
          'Organització de tallers tècnics (p. ex., Go/Golang a la UFS per a sistemes de cues)',
          'Organització d\'esdeveniments del mercat laboral universitari amb empreses i equips de RRHH',
          'Representació del GDG Aracaju en esdeveniments d\'Agile Brazil i Produte-SE',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol6',
      title: 'Personal Voluntari',
      organization: 'Rotary International / Rotaract',
      period: 'Oct 2022 - Sep 2023',
      image: '/images/rotary.jpg',
      description: 'Contribuint a iniciatives de protecció ambiental, salut, educació i pau.',
      cvAreas: [],
      details: {
        overview:
          "Contribuint a la missió de Rotary International de crear un canvi durador en comunitats de tot el món en sis àrees d'actuació.",
        focusAreas: [
          'Protecció Ambiental',
          'Salut Maternoinfantil',
          'Suport a l\'Educació',
          'Desenvolupament Econòmic',
          'Promoció de la Pau',
          'Lluita contra Malalties i Aigua Neta i Sanejament',
        ],
        category: 'Social Services',
      },
    },
    {
      id: 'vol7',
      title: 'Membre del Consell / Voluntari',
      organization: 'Clube Poliglota Brasil',
      period: 'Jan 2021 - Sep 2023',
      image: '/images/cpbb.png',
      description: 'Va gestionar un equip de creadors de contingut, va implementar estratègies de SEO i growth hacking, va millorar el rendiment del bloc amb PHP i va escriure un llibre sobre l\'aprenentatge de llengues.',
      cvAreas: ['software'],
      details: {
        overview:
          'Va unir-se com a membre del consell per garantir una planificació organitzativa eficaç. Va gestionar un equip de 5 creadors de contingut i 2 revisors, augmentant el trànsit del bloc a través del SEO i el growth hacking.',
        responsibilities: [
          'Planificació i execució organitzativa a nivell de consell',
          'Gestió d\'un equip de 5 creadors de contingut i 2 revisors',
          'Desenvolupament i execució d\'estratègies de SEO i growth hacking',
          'Desenvolupament en PHP per reduir colls d\'ampolla i millorar la velocitat de pàgina',
          'Escriptura d\'articles sobre el procés d\'aprenentatge de llengues',
          'Va escriure un llibre sobre l\'aprenentatge de llengues durant aquesta experiència',
        ],
        category: 'Education',
      },
    },
  ],

  skills: [
    {
      name: 'Llenguatges de Programació',
      items: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'Kotlin', 'C', 'SQL', 'Bash'],
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
    },
    {
      name: 'Desenvolupament Web/Mòbil',
      items: ['React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'NestJS', 'Express', 'FastAPI', 'Spring Boot'],
      cvAreas: ['software'],
    },
    {
      name: 'IA / ML',
      items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'XGBoost', 'OpenCV', 'YOLOv8', 'Computer Vision', 'LangChain', 'LangGraph', 'RAG', 'LLMs', 'AI Agents', 'CrewAI', 'ReAct Agents', 'n8n', 'MLflow', 'MLOps'],
      cvAreas: ['aiml'],
    },
    {
      name: 'Enginyeria de Dades',
      items: ['Apache Spark', 'Apache Airflow', 'Databricks', 'ETL', 'BigQuery', 'Power BI', 'Tableau', 'Pandas', 'NumPy'],
      cvAreas: ['data'],
    },
    {
      name: 'Bases de Dades',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase / Firestore', 'Supabase', 'SQLite'],
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
          'Llengua Materna — Nascut i crescut al Brasil',
          'Comunicació professional en contextos empresarials i tècnics',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang2',
      language: 'Anglès',
      level: 'Avançat (C1)',
      proficiency: 90,
      details: {
        description: 'Anglès avançat (C1) amb sòlides habilitats de comunicació professional i tècnica en contextos de negocis internacionals, documentació i lideratge comunitari.',
        certifications: [
          'Competència Avançada (C1)',
          'Documentació tècnica i presentacions',
          'Negocis internacionals i lideratge comunitari',
        ],
        verificationLink: 'https://youtu.be/P24KDOH8mNI?si=esDMWjFPKW4xFDqs',
      },
    },
    {
      id: 'lang3',
      language: 'Espanyol',
      level: 'Intermedi (B1)',
      proficiency: 75,
      details: {
        description: 'Competència intermèdia en espanyol amb focus en contextos empresarials i tècnics.',
        certifications: [
          'Competència Intermèdia (B1)',
          'Competència en espanyol empresarial',
          'Lectura i escriptura de documentació tècnica',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang4',
      language: 'Francès',
      level: 'Intermedi (B1)',
      proficiency: 65,
      details: {
        description: 'Francès intermedi (B1) amb comprensió lectora i comunicació professional.',
        certifications: [
          'Competència Intermèdia (B1)',
          'Comprensió lectora tècnica',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang5',
      language: 'Català',
      level: 'Elemental (A1)',
      proficiency: 30,
      details: {
        description: 'Català elemental amb lectura i comprensió bàsica.',
        certifications: [
          'Competència Elemental (A1)',
          'Comprensió lectora bàsica',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang6',
      language: 'Hebreu',
      level: 'Elemental (A1)',
      proficiency: 20,
      details: {
        description: 'Competència elemental amb focus en lectura i comunicació bàsica.',
        certifications: [
          'Competència Elemental (A1)',
          'Hebreu conversacional bàsic',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang7',
      language: 'Rus',
      level: 'Elemental (A1)',
      proficiency: 20,
      details: {
        description: 'Rus elemental amb focus en terminologia tècnica i lectura.',
        certifications: [
          'Competència Elemental (A1)',
          'Familiaritat amb terminologia tècnica',
          'Educació autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
  ],

  certifications: [
    { id: 'cert1', title: 'Claude Code in Action', issuer: 'Anthropic', date: '2026', category: 'development', cvAreas: ['software', 'aiml'], tags: ['Claude Code', 'AI Agents', 'LLMs', 'Anthropic'] },
    { id: 'cert2', title: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', date: '2026', category: 'development', cvAreas: ['software', 'aiml'], tags: ['MCP', 'AI Agents', 'LLMs', 'Anthropic'] },
    { id: 'cert3', title: 'OWASP API Security', issuer: 'APIsec University', date: 'Feb 2026', category: 'security', cvAreas: ['cyber', 'software'], tags: ['API Security', 'OWASP', 'AppSec'] },
    { id: 'cert4', title: 'Introduction to Technological Maturity (TRL)', issuer: 'Agência Espacial Brasileira', date: 'Jan 2026', category: 'development', cvAreas: ['aiml', 'software'], tags: ['TRL', 'Technology Readiness', 'Research'] },
    { id: 'cert5', title: 'Intro to Splunk', issuer: 'Splunk', date: 'Jan 2026', category: 'security', cvAreas: ['cyber'], tags: ['Splunk', 'SIEM', 'Security Monitoring'] },
    { id: 'cert6', title: 'Creating Your First Agent with CrewAI', issuer: 'DIO', date: '2025', category: 'development', cvAreas: ['aiml'], tags: ['CrewAI', 'Autonomous Agents', 'AI'] },
    { id: 'cert7', title: 'Building AI Applications with Autonomous Agents', issuer: 'DIO', date: '2025', category: 'development', cvAreas: ['aiml'], tags: ['AI Agents', 'LLM', 'AI Engineering'] },
    { id: 'cert8', title: 'DIO Campus Expert — University Ambassador', issuer: 'DIO', date: '2025', category: 'development', cvAreas: [], tags: ['Community', 'University Ambassador', 'Tech Education'] },
    { id: 'cert9', title: 'Certified Phishing Prevention Specialist (CPPS)', issuer: 'Hack & Fix', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], credentialId: '3648-2721-6004-1331', tags: ['Phishing', 'Social Engineering', 'Security Awareness'] },
    { id: 'cert10', title: 'Cyber Threat Management', issuer: 'Cisco', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], tags: ['Threat Intelligence', 'CTI', 'Disaster Recovery'] },
    { id: 'cert11', title: 'Databricks Fundamentals Accreditation', issuer: 'Databricks', date: 'Jan 2025', category: 'data', cvAreas: ['data'], tags: ['Databricks', 'ETL', 'Data Engineering'] },
    { id: 'cert12', title: 'Digital Forensics & Incident Response', issuer: 'Mente Binária', date: '2025', category: 'security', cvAreas: ['cyber'], tags: ['DFIR', 'Forensics', 'Incident Response'] },
    { id: 'cert13', title: 'Cybersecurity Fundamentals', issuer: 'IBM', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], tags: ['Vulnerability Management', 'Incident Response', 'IBM Security'] },
    { id: 'cert14', title: 'Chronicle Security Operations Platform Fundamentals', issuer: 'Google Cloud Security', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], credentialId: '12557310', tags: ['SIEM', 'SOAR', 'Google Chronicle'] },
    { id: 'cert15', title: 'High Performance Execution', issuer: 'Fundação Estudar', date: 'Jan 2025', category: 'development', cvAreas: [], tags: ['Leadership', 'High Performance', 'Personal Development'] },
    { id: 'cert16', title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', date: '2025', category: 'security', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/f9c6cba8-0a9a-4231-ad09-0bfcdc4107ca', tags: ['SIEM', 'IDS', 'Incident Response'] },
    { id: 'cert17', title: 'Cyber Academy 2024', issuer: 'FEBRABAN', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['ISO 27005', 'NIST', 'Data Governance (DAMA)', 'IAM', 'Cloud Security'] },
    { id: 'cert18', title: 'API Security for PCI Compliance', issuer: 'APIsec University', date: 'May 2024', category: 'security', cvAreas: ['cyber', 'software'], tags: ['API Security', 'PCI DSS', 'AppSec'] },
    { id: 'cert19', title: 'JavaScript Specialist Certification', issuer: 'DIO', date: '2024', category: 'development', cvAreas: ['software'], tags: ['JavaScript', 'Frontend', 'Web Development'] },
    { id: 'cert20', title: 'Inteligencia de Fuentes Abiertas (OSINT)', issuer: 'Basel Institute on Governance', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['OSINT', 'Open Source Intelligence', 'Investigations'] },
    { id: 'cert21', title: 'Network Defense', issuer: 'Cisco', date: '2024', category: 'networking', cvAreas: ['cyber'], tags: ['Network Defense', 'System Security', 'Cisco'] },
    { id: 'cert22', title: 'Endpoint Security', issuer: 'Cisco', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['Endpoint Security', 'Cisco', 'Device Hardening'] },
    { id: 'cert23', title: 'Introduction to Data Science', issuer: 'Cisco', date: '2024', category: 'data', cvAreas: ['data', 'aiml'], tags: ['Data Science', 'Cisco', 'Analytics'] },
    { id: 'cert24', title: 'Introduction to Internet of Things (IoT)', issuer: 'Cisco', date: '2024', category: 'networking', cvAreas: ['software'], tags: ['IoT', 'Cisco', 'Embedded Systems'] },
    { id: 'cert25', title: 'Network Support and Security', issuer: 'Cisco', date: '2024', category: 'networking', cvAreas: ['cyber'], tags: ['Network Support', 'Cisco', 'Security'] },
    { id: 'cert26', title: 'Ethical Hacker', issuer: 'Cisco Networking Academy', date: '2023', category: 'security', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/a4689f6b-ca66-4e41-801d-49f592df2914', tags: ['Penetration Testing', 'Kali Linux', 'Vulnerability Assessment'] },
    { id: 'cert27', title: 'Network Technician Career Path', issuer: 'Cisco Networking Academy', date: '2023', category: 'networking', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/53706149-3c66-49d2-9e13-d8e5c0bfbe03', tags: ['Cisco', 'IPv4/IPv6', 'Network Troubleshooting'] },
    { id: 'cert28', title: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco', date: '2023', category: 'networking', cvAreas: ['cyber'], tags: ['Network Addressing', 'Troubleshooting', 'Cisco'] },
    { id: 'cert29', title: 'Networking Devices and Initial Configuration', issuer: 'Cisco', date: '2023', category: 'networking', cvAreas: ['cyber'], tags: ['Networking Devices', 'Cisco', 'Configuration'] },
    { id: 'cert30', title: 'Networking Basics', issuer: 'Cisco', date: '2023', category: 'networking', cvAreas: ['cyber'], tags: ['Networking Basics', 'Cisco', 'Fundamentals'] },
    { id: 'cert31', title: 'Coding Dojo in GoLang', issuer: 'Universidade Federal de Sergipe', date: '2023', category: 'development', cvAreas: ['software'], tags: ['Go', 'Golang', 'Software Development'] },
    { id: 'cert32', title: 'Storytelling', issuer: 'Fundação Estudar', date: '2023', category: 'development', cvAreas: [], tags: ['Storytelling', 'Communication', 'Leadership'] },
    { id: 'cert33', title: 'Public Speaking and Leadership', issuer: 'Brasil Empreende', date: '2022', category: 'development', cvAreas: [], tags: ['Public Speaking', 'Leadership', 'Communication'] },
    { id: 'cert34', title: 'JavaScript, Python and C', issuer: 'Estácio', date: '2022', category: 'development', cvAreas: ['software'], tags: ['JavaScript', 'Python', 'C', 'Programming'] },
    { id: 'cert35', title: 'Management, Organization and Recovery of Information', issuer: 'Estácio', date: '2022', category: 'data', cvAreas: ['data'], tags: ['Information Management', 'Data Organization', 'Knowledge Management'] },
    { id: 'cert36', title: 'Startup Investor', issuer: 'EqSeed', date: '2022', category: 'development', cvAreas: [], tags: ['Startup Investing', 'Venture Capital', 'Entrepreneurship'] },
    { id: 'cert37', title: 'CS50 — Computer Science from Harvard', issuer: 'Fundação Estudar / Harvard', date: '2022', category: 'development', cvAreas: ['software', 'data'], tags: ['CS50', 'Harvard', 'Algorithms', 'Data Structures'] },
  ],

  projects: {
    softwareDevelopment: [
      {
        id: 'proj-sw3',
        gradient: 'from-slate-900 to-zinc-900',
        title: 'Shoresh — Plataforma Empresarial de Governança i Compliment',
        description: 'Plataforma SaaS empresarial de governança i compliment per a organitzacions mitjanes/grans i startups en creixement, amb 8 mòduls integrats.',
        category: 'softwareDevelopment',
        tags: ['NestJS', 'Next.js', 'TypeScript', 'RBAC', 'Encryption'],
        cvAreas: ['software'],
        details: {
          overview: 'Shoresh (hebreu per a "arrel") és una plataforma SaaS empresarial de governança i compliment. Desenvolupament d\'aplicació d\'extrem a extrem en 8 mòduls amb arquitectura segura, xifrat de dades, RBAC i disseny/integració d\'APIs.',
          features: [
            'Desenvolupament d\'aplicació d\'extrem a extrem en 8 mòduls integrats de governança i compliment',
            'RBAC (Control d\'Accés Basat en Rols) amb aïllament organitzacional estricte',
            'Xifrat de dades i arquitectura segura al llarg de tota la plataforma',
            'Disseny d\'API i capa d\'integració amb tercers',
            'Construït per a organitzacions mitjanes/grans i startups en creixement',
          ],
          techStack: 'NestJS, Next.js, TypeScript, PostgreSQL, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw2',
        gradient: 'from-purple-900 to-blue-900',
        title: 'Cherut — Plataforma de Vida d\'Alt Rendiment',
        description: 'Plataforma SaaS que connecta propòsit, disciplina i resultats — OKRs, hàbits, tasques i anàlisi de creixement per a individus motivats i professionals d\'alt rendiment.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'NestJS', 'Expo', 'Go', 'Python'],
        cvAreas: ['software'],
        details: {
          overview: 'Cherut (hebreu per a "llibertat") és una plataforma SaaS d\'alt rendiment per a emprenedors, creadors i professionals. Construïda amb NestJS i arquitectura modular orientada al domini.',
          features: [
            'Seguiment i gestió d\'OKRs (Objectius i Resultats Clau)',
            'Constructor d\'hàbits i rutines amb seguiment de ratxes (streaks)',
            'Gestió de tasques i prioritats amb taulers Kanban',
            'Tauler d\'anàlisi de creixement i insights de rendiment',
            'Arquitectura modular orientada al domini amb NestJS',
          ],
          techStack: 'Next.js, NestJS, Expo (React Native), Python, Go, PostgreSQL, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw4',
        gradient: 'from-green-900 to-emerald-900',
        title: 'RifaGo — Plataforma de Rifa i Recaptació de Fons en Línia',
        description: 'Plataforma full-stack de codi obert per a rifes i recaptació de fons amb pagaments PIX, sistema de reserva transaccional i costos de lectura Firestore optimitzats.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'Firebase', 'Firestore', 'PIX', 'Vercel'],
        cvAreas: ['software'],
        details: {
          overview: 'Plataforma full-stack de rifes/recaptació (Next.js + Firebase, desplegada a Vercel) amb pagaments via PIX. Sistema de reserva transaccional que evita la doble assignació, generació de QR/BR Code PIX al servidor i capa de dades desnormalitzada que va corregir més de 11k lectures Firestore/sessió a un cost constant.',
          features: [
            'Sistema de reserva transaccional que evita la doble assignació',
            'Generació de QR/BR Code PIX al costat del servidor',
            'Capa de dades desnormalitzada: va corregir més de 11k lectures Firestore/sessió a un cost constant',
            'Estat de la rifa en temps real i confirmació de pagament',
            'Codi obert a GitHub',
          ],
          techStack: 'Next.js, Firebase Firestore, Firebase Auth, Vercel, PIX API',
          githubLink: 'https://github.com/chutzpah-os/RifaGo-OSS',
        },
      },
      {
        id: 'proj-sw5',
        gradient: 'from-pink-900 to-rose-900',
        title: 'InstaChat — Automatització de DMs d\'Instagram Auto-Allotjada',
        description: 'Alternativa gratuïta a ManyChat: automatització de DMs d\'Instagram auto-allotjada amb disparadors de comentaris/stories, webhooks verificats per HMAC i processament atòmic de cues.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'Supabase', 'Instagram API', 'Webhooks', 'pg_cron'],
        cvAreas: ['software'],
        details: {
          overview: 'Eina d\'automatització de DMs d\'Instagram auto-allotjada i sense cost mensual. Comentar una paraula clau o respondre a una story dispara un DM automàtic. Construïda amb Next.js 16 + Tailwind a Vercel, Supabase Postgres, Instagram Graph API v25.0.',
          features: [
            'Comentari o resposta a story dispara DMs automàtics d\'Instagram',
            'Webhook verificat per HMAC per al processament segur d\'esdeveniments d\'Instagram',
            'Cua atòmica amb SKIP LOCKED que evita el processament duplicat',
            'Gestió de finestra de 24h, seguiments programats',
            'Supabase pg_cron + pg_net impulsant un worker de fons de nivell minut gratuït',
          ],
          techStack: 'Next.js 16, TailwindCSS, Supabase Postgres, RLS, Instagram Graph API v25.0, pg_cron, pg_net, Vercel',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw6',
        gradient: 'from-amber-900 to-yellow-900',
        title: 'Sistema de Gestió Financera Web',
        description: 'Plataforma full-stack per a particulars i empreses per gestionar les finances amb seguiment en temps real d\'ingressos, despeses, saldos de comptes, inversions i objectius.',
        category: 'softwareDevelopment',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Authentication'],
        cvAreas: ['software'],
        details: {
          overview: 'Plataforma de gestió financera full-stack per a particulars i empreses amb seguiment en temps real d\'ingressos, despeses, saldos de comptes, inversions i objectius financers, amb un sistema d\'autenticació segur.',
          features: [
            'Seguiment en temps real d\'ingressos, despeses, saldos de comptes i inversions',
            'Gestió d\'objectius financers i seguiment del progrés',
            'Sistema segur d\'inici de sessió i autenticació',
            'Suport multi-compte i multi-divisa',
            'Tauler amb anàlisis i visualitzacions',
          ],
          techStack: 'React, Node.js, PostgreSQL, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    cybersecurity: [
      {
        id: 'proj-cy3',
        gradient: 'from-zinc-900 to-slate-900',
        title: 'Programa de Proves de Penetració i Avaluació de Vulnerabilitats',
        description: 'Compromisos de hacking ètic estructurats usant Kali Linux, escaneig de vulnerabilitats, OSINT i informes de seguretat per a entorns empresarials.',
        category: 'cybersecurity',
        tags: ['Kali Linux', 'OSINT', 'Penetration Testing', 'Python'],
        cvAreas: ['cyber'],
        details: {
          overview: 'Va executar programes estructurats de proves de penetració i avaluació de vulnerabilitats per a entorns empresarials, usant metodologies de hacking ètic i tècniques OSINT.',
          features: [
            'Reconeixement amb recollida OSINT (certificat per Basel Institute)',
            'Escaneig de xarxa, enumeració de serveis i cartografia de CVE',
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
        title: 'Plataforma de la Problem Solver Foundation',
        description: 'Sistema de mineria de dades que rastreja internet a la recerca de problemes reals sense resoldre — impulsant la missió 1b2035 per connectar solucionadors de problemes amb reptes d\'alt impacte arreu del món.',
        category: 'dataEngineering',
        tags: ['Python', 'Web Scraping', 'NLP', 'BigQuery', 'ETL'],
        cvAreas: ['data'],
        details: {
          overview: 'Un sistema de mineria de dades que rastreja i indexa internet a la recerca de problemes reals sense resoldre — impulsant la missió 1b2035.',
          features: [
            'Pipeline de web scraping recollint senyals de problemes de fòrums, notícies, Reddit i fonts de recerca',
            'Capa de classificació NLP per extreure, deduplicar i categoritzar problemes per domini i gravetat',
            'Pipeline ETL carregant dades de problemes estructurades a BigQuery per a l\'anàlisi i la detecció de patrons',
            'Anàlisi de tendències identificant problemes sense resoldre d\'alta freqüència en geografies i sectors',
            'Model de puntuació automatitzat classificant problemes per potencial d\'impacte i disponibilitat de solucionadors',
            'Firestore servint conjunts de dades de problemes seleccionats a la plataforma comunitària en temps real',
          ],
          techStack: 'Python, BeautifulSoup, Scrapy, NLP, BigQuery, Firestore, ETL, JavaScript',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    aiml: [
      {
        id: 'proj-ai1',
        gradient: 'from-violet-900 to-purple-900',
        title: 'SentinelAI — Sistema de Detecció d\'Incidents Urbans',
        description: 'Sistema impulsat per IA per a la detecció d\'incidents urbans en temps real, operant 24/7 des de la seva activació amb més de 100 persones registrades diàriament i més de 200 objectes rastrejos simultàniament.',
        category: 'aiml',
        tags: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'WebSocket', 'Supabase'],
        cvAreas: ['aiml'],
        details: {
          overview: 'SentinelAI és un sistema de detecció d\'incidents urbans i consciència situacional impulsat per IA. Backend Python (FastAPI) connectat a fluxos de vídeo RTSP/webcam usant OpenCV + YOLOv8; frontend Next.js + TailwindCSS; Supabase per a auth/emmagatzematge; esdeveniments via WebSocket/REST en JSON.',
          features: [
            'Detecció d\'objectes i persones en temps real via OpenCV + YOLOv8',
            'Ingesta de fluxos de vídeo RTSP/webcam amb backend Python FastAPI',
            'Esdeveniments comunicats via WebSocket/REST en JSON (timestamp, camera_id, event_type, confidence, bounding_box)',
            'Tauler de control frontend Next.js + TailwindCSS',
            'Operant 24/7 des de l\'activació; registrant més de 100 persones diàriament, més de 200 objectes simultàniament',
          ],
          techStack: 'Python, FastAPI, OpenCV, YOLOv8, Next.js, TailwindCSS, Supabase, WebSocket, REST, RTSP',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-cy1',
        gradient: 'from-red-900 to-orange-900',
        title: 'Sistema de Detecció de Personal per Visió per Computador',
        description: 'Sistema de monitoratge automatitzat 24/7 per a entorns controlats, que s\'activa en detectar moviment/humans i alerta les autoritats en temps real.',
        category: 'aiml',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Un sistema de monitoratge automatitzat de baix consum que opera contínuament o en intervals programats, activant-se en detectar moviment o humans i enviant dades de detecció enriquides en temps real.',
          features: [
            'Monitoratge automatitzat 24/7 amb mode d\'espera de baix consum',
            'Detecció de moviment i humans amb visualització de quadre delimitador verd',
            'Mode d\'interval programat per a l\'optimització energètica',
            'Dades de detecció enriquides en temps real enviades a autoritats via aplicacions de missatgeria',
            'Llindars d\'alerta i zones de detecció configurables',
          ],
          techStack: 'Python, OpenCV, TensorFlow, Computer Vision, MQTT/messaging integration',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ai3',
        gradient: 'from-cyan-900 to-blue-900',
        title: 'IA per a la Recerca en Oncologia (Sèrie)',
        description: 'Sèrie de revisions sistemàtiques i meta-anàlisis que avaluen models d\'IA i deep learning per a la detecció primerenca del càncer en múltiples tipus de càncer.',
        category: 'aiml',
        tags: ['Medical AI', 'Deep Learning', 'Computer Vision', 'Research'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Una sèrie d\'investigacions que aplica IA i deep learning a la detecció primerenca del càncer, cobrint càncers ossis, hematològics, de pròstata, de pell, de mama i colorectals.',
          features: [
            'Revisions sistemàtiques sobre models d\'IA per a la detecció del càncer ossi (TC, RM, raigs X)',
            'Enfocaments ML per a la detecció de neoplàsies hematològiques via dades clíniques i genòmiques',
            'Detecció del càncer de pròstata assistida per IA amb integració d\'imatges i biomarcadors',
            'Deep learning per a la classificació del càncer de pell (focus en melanoma)',
            'Arquitectures CNN per al cribratge mamogràfic del càncer de mama',
            'Detecció del càncer colorectal per IA via imatges endoscòpiques',
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
        title: 'Corrent per l\'Esperança — Repte de 1.000 Milles',
        description: 'Un repte de cursa d\'endurance de 1.000 milles per recaptar finançament sostingut per a la recerca del càncer, documentat a través de les xarxes socials, un llibre i un documental.',
        category: 'challenges',
        tags: ['Social Impact', 'Fundraising', 'Health', 'Media'],
        cvAreas: ['software'],
        details: {
          overview: 'Un ecosistema de recaptació de fons multicanal que converteix l\'endurance físic i la narració en suport financer sostingut per a la recerca del càncer.',
          features: [
            'Repte de cursa de 1.000 milles com a motor principal de recaptació de fons',
            'Difusió en temps real d\'entrenament i progrés a les xarxes socials',
            'Llibre que documenta el viatge, la missió i les històries humanes darrere de la recerca del càncer',
            'Documental que amplia l\'abast a audiències globals',
            'Canal de donació multicanal que vincula esport d\'endurance, publicació i cinema',
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
      title: 'IA per a la Detecció Primerenca del Càncer Ossi',
      description: 'Revisió sistemàtica i meta-anàlisi que avaluen el rendiment de models d\'IA aplicats a les imatges mèdiques per a la detecció primerenca del càncer ossi, cobrint les modalitats TC, RM i raigs X.',
      field: 'Oncologia · Imatges Mèdiques · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res2',
      title: 'ML per a la Detecció de Neoplàsies Hematològiques',
      description: 'Revisió sistemàtica dels enfocaments de machine learning per a la identificació primerenca dels càncers de sang usant dades clíniques i marcadors genòmics, avaluant sensibilitat, especificitat i aplicabilitat clínica.',
      field: 'Oncologia · Genòmica · ML',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res3',
      title: 'Detecció del Càncer de Pròstata Assistida per IA',
      description: 'Meta-anàlisi que examina les eines diagnòstiques assistides per IA per al càncer de pròstata, integrant dades d\'imatges (RM, ecografia) i biomarcadors per avaluar la precisió de detecció enfront del cribratge PSA tradicional.',
      field: 'Oncologia · Biomarcadors · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res4',
      title: 'Deep Learning per a la Detecció del Càncer de Pell',
      description: 'Revisió sistemàtica de models de deep learning entrenats en imatges dermoscòpiques per a la classificació del càncer de pell en estadi primerenc, amb focus en la precisió de detecció del melanoma.',
      field: 'Oncologia · Dermatologia · Deep Learning',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res5',
      title: 'Deep Learning per al Cribratge del Càncer de Mama',
      description: 'Meta-anàlisi d\'arquitectures de xarxes neuronals convolucionals aplicades a imatges mamogràfiques per a la detecció primerenca del càncer de mama, comparant el rendiment amb la referència del radiòleg en múltiples conjunts de dades.',
      field: 'Oncologia · Radiologia · Deep Learning',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res6',
      title: 'Detecció Primerenca del Càncer Colorectal',
      description: 'Recerca que explora els enfocaments impulsats per IA per a la detecció primerenca del càncer colorectal, combinant l\'anàlisi d\'imatges endoscòpiques, el perfil de biomarcadors i les dades clíniques del pacient.',
      field: 'Oncologia · Gastroenterologia · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
  ],

  awards: [
    {
      id: 'award1',
      title: 'Top 1.2% — Examen de Selecció Competitiu',
      issuer: 'SSP Selection Process',
      year: '2022',
      description:
        'Va superar amb èxit un examen altament competitiu de quatre fases, classificant-se entre el 1,2% superior.',
    },
  ],
}
