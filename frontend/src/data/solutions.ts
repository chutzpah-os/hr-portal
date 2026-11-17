export type StartupStage = 'Ideation' | 'Validation' | 'MVP' | 'Early Traction' | 'PMF' | 'Growth' | 'Scale'

export const STAGES: { label: StartupStage; color: string; bg: string }[] = [
  { label: 'Ideation',       color: 'rgba(148,163,184,1)',  bg: 'rgba(148,163,184,0.10)' },
  { label: 'Validation',     color: 'rgba(96,165,250,1)',   bg: 'rgba(96,165,250,0.10)'  },
  { label: 'MVP',            color: 'rgba(251,191,36,1)',   bg: 'rgba(251,191,36,0.10)'  },
  { label: 'Early Traction', color: 'rgba(251,146,60,1)',   bg: 'rgba(251,146,60,0.10)'  },
  { label: 'PMF',            color: 'rgba(74,222,128,1)',   bg: 'rgba(74,222,128,0.10)'  },
  { label: 'Growth',         color: 'rgba(52,211,153,1)',   bg: 'rgba(52,211,153,0.10)'  },
  { label: 'Scale',          color: 'rgba(34,211,238,1)',   bg: 'rgba(34,211,238,0.10)'  },
]

interface ProductTranslation {
  tagline: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  metrics?: { label: string; value: string }[]
}

export interface Product {
  id: string
  active?: boolean
  name: string
  tagline: string
  shortDescription: string
  fullDescription: string
  metrics?: { label: string; value: string }[]
  tags: string[]
  status: StartupStage
  image?: string
  imageFit?: 'contain' | 'cover'
  modalImage?: string
  cta?: { label: string; href: string; external?: boolean }
  pt?: ProductTranslation
  es?: ProductTranslation
  fr?: ProductTranslation
  ca?: ProductTranslation
}

export function getLocalizedProduct(product: Product, locale: string): Product {
  const t = locale === 'pt' ? product.pt
    : locale === 'es' ? product.es
    : locale === 'fr' ? product.fr
    : locale === 'ca' ? product.ca
    : undefined
  return t ? { ...product, ...t } : product
}

export const PRODUCTS: Product[] = [
  {
    id: 'psf',
    name: 'PSF',
    tagline: 'Solving real-world problems, at scale.',
    shortDescription: 'Nonprofit R&D in production, building the Data Aggregator — intelligence infrastructure that unifies multi-source data to detect patterns, predict risks, and accelerate humanitarian decision-making.',
    fullDescription: `The Problem Solver Foundation (PSF) is a nonprofit currently in production, building technologies that solve real-world problems at scale. Its admin panel already manages blog content, projects, users, applications, and community access — the operational backbone for problems solved in public.

One system in active development is the Data Aggregator — an intelligence infrastructure that collects, unifies, and analyzes data from multiple sources (APIs, databases, IoT, public datasets, AI models) into a centralized ecosystem. It detects patterns, predicts risks, supports research, and accelerates decision-making.

Built for humanitarian response first: the same infrastructure that flags an anomaly in a dataset can support a healthcare study or a social impact program — one system, many use cases.`,
    metrics: [
      { label: 'Status', value: 'In Production' },
      { label: 'Focus', value: 'Data Intelligence' },
      { label: 'Model', value: 'Nonprofit R&D' },
    ],
    tags: ['R&D', 'Software', 'Social Impact'],
    status: 'Early Traction',
    image: '/images/psf-admin.png',
    imageFit: 'contain',
    pt: {
      tagline: 'Resolvendo problemas reais, em escala.',
      shortDescription: 'Fundação sem fins lucrativos em produção construindo o Data Aggregator — infraestrutura de inteligência que unifica dados multi-fonte para detectar padrões, prever riscos e acelerar decisões humanitárias.',
      fullDescription: `A Problem Solver Foundation (PSF) é uma organização sem fins lucrativos atualmente em produção, construindo tecnologias para resolver problemas reais em escala. Seu painel administrativo já gerencia conteúdo de blog, projetos, usuários, candidaturas e acesso comunitário — a espinha dorsal operacional para problemas resolvidos publicamente.

Um dos sistemas em desenvolvimento ativo é o Data Aggregator — uma infraestrutura de inteligência que coleta, unifica e analisa dados de múltiplas fontes (APIs, bancos de dados, IoT, datasets públicos, modelos de IA) em um ecossistema centralizado. Ele detecta padrões, prevê riscos, apoia pesquisas e acelera a tomada de decisão.

Construído primeiro para resposta humanitária: a mesma infraestrutura que sinaliza uma anomalia em um dataset pode apoiar um estudo de saúde ou um programa de impacto social — um único sistema, muitos casos de uso.`,
      metrics: [
        { label: 'Status', value: 'Em Produção' },
        { label: 'Foco', value: 'Inteligência de Dados' },
        { label: 'Modelo', value: 'P&D Sem Fins Lucrativos' },
      ],
      tags: ['P&D', 'Software', 'Impacto Social'],
    },
    es: {
      tagline: 'Resolviendo problemas reales, a escala.',
      shortDescription: 'Fundación sin fines de lucro en producción construyendo el Data Aggregator — infraestructura de inteligencia que unifica datos multi-fuente para detectar patrones, predecir riesgos y acelerar decisiones humanitarias.',
      fullDescription: `La Problem Solver Foundation (PSF) es una organización sin fines de lucro actualmente en producción, construyendo tecnologías para resolver problemas reales a escala. Su panel de administración ya gestiona contenido de blog, proyectos, usuarios, solicitudes y acceso comunitario — la columna vertebral operativa para problemas resueltos públicamente.

Uno de los sistemas en desarrollo activo es el Data Aggregator — una infraestructura de inteligencia que recopila, unifica y analiza datos de múltiples fuentes (APIs, bases de datos, IoT, conjuntos de datos públicos, modelos de IA) en un ecosistema centralizado. Detecta patrones, predice riesgos, apoya la investigación y acelera la toma de decisiones.

Construido primero para la respuesta humanitaria: la misma infraestructura que señala una anomalía en un conjunto de datos puede apoyar un estudio de salud o un programa de impacto social — un único sistema, muchos casos de uso.`,
      metrics: [
        { label: 'Estado', value: 'En Producción' },
        { label: 'Enfoque', value: 'Inteligencia de Datos' },
        { label: 'Modelo', value: 'I+D Sin Fines de Lucro' },
      ],
      tags: ['I+D', 'Software', 'Impacto Social'],
    },
    fr: {
      tagline: 'Résoudre des problèmes réels, à grande échelle.',
      shortDescription: 'Fondation à but non lucratif en production construisant le Data Aggregator — une infrastructure d\'intelligence unifiant des données multi-sources pour détecter des schémas, prédire des risques et accélérer les décisions humanitaires.',
      fullDescription: `La Problem Solver Foundation (PSF) est une organisation à but non lucratif actuellement en production, construisant des technologies pour résoudre des problèmes réels à grande échelle. Son panneau d\'administration gère déjà le contenu du blog, les projets, les utilisateurs, les candidatures et l\'accès communautaire — l\'épine dorsale opérationnelle pour des problèmes résolus publiquement.

L\'un des systèmes en développement actif est le Data Aggregator — une infrastructure d\'intelligence qui collecte, unifie et analyse des données provenant de sources multiples (API, bases de données, IoT, jeux de données publics, modèles d\'IA) dans un écosystème centralisé. Il détecte des schémas, prédit des risques, soutient la recherche et accélère la prise de décision.

Conçu d\'abord pour la réponse humanitaire : la même infrastructure qui signale une anomalie dans un jeu de données peut soutenir une étude de santé ou un programme d\'impact social — un seul système, de nombreux cas d\'usage.`,
      metrics: [
        { label: 'Statut', value: 'En Production' },
        { label: 'Focus', value: 'Intelligence des Données' },
        { label: 'Modèle', value: 'R&D à But Non Lucratif' },
      ],
      tags: ['R&D', 'Logiciel', 'Impact Social'],
    },
    ca: {
      tagline: 'Resolent problemes reals, a escala.',
      shortDescription: 'Fundació sense ànim de lucre en producció construint el Data Aggregator — infraestructura d\'intel·ligència que unifica dades multi-font per detectar patrons, predir riscos i accelerar decisions humanitàries.',
      fullDescription: `La Problem Solver Foundation (PSF) és una organització sense ànim de lucre actualment en producció, construint tecnologies per resoldre problemes reals a escala. El seu panell d\'administració ja gestiona contingut de blog, projectes, usuaris, sol·licituds i accés comunitari — la columna vertebral operativa per a problemes resolts públicament.

Un dels sistemes en desenvolupament actiu és el Data Aggregator — una infraestructura d\'intel·ligència que recull, unifica i analitza dades de múltiples fonts (APIs, bases de dades, IoT, conjunts de dades públics, models d\'IA) en un ecosistema centralitzat. Detecta patrons, prediu riscos, dona suport a la recerca i accelera la presa de decisions.

Construït primer per a la resposta humanitària: la mateixa infraestructura que senyala una anomalia en un conjunt de dades pot donar suport a un estudi de salut o a un programa d\'impacte social — un únic sistema, molts casos d\'ús.`,
      metrics: [
        { label: 'Estat', value: 'En Producció' },
        { label: 'Focus', value: 'Intel·ligència de Dades' },
        { label: 'Model', value: 'R+D Sense Ànim de Lucre' },
      ],
      tags: ['R+D', 'Programari', 'Impacte Social'],
    },
  },
  {
    id: 'cherut',
    name: 'Cherut',
    tagline: 'Your life, running on a system.',
    shortDescription: 'Full operating system for personal productivity — OKRs, habits, calendar, and journaling in one place.',
    fullDescription: `Cherut is a life OS built for people who treat daily execution as measurable data. The name comes from the Hebrew word for freedom — because a good system doesn't constrain you, it frees you.

The premise: most productivity tools are disconnected. You track goals in one app, habits in another, calendar in a third, and reflect somewhere else entirely. Cherut unifies these layers into a single, structured operating system.

At its core: OKRs cascade into weekly priorities, which connect to daily habits and time blocks. Every evening, a short review closes the loop. Over time, you accumulate a personal dataset — not just tasks done, but patterns, energy, focus windows, and progress toward what actually matters.

Built for ambitious people who want to move faster without losing clarity on why they're moving at all.`,
    tags: ['R&D', 'Software', 'Management'],
    status: 'Ideation',
    image: '/images/cherut.png',
    imageFit: 'contain',
    modalImage: '/images/cherut.png',
    pt: {
      tagline: 'Sua vida, rodando em um sistema.',
      shortDescription: 'Sistema operacional completo para produtividade pessoal — OKRs, hábitos, calendário e diário em um só lugar.',
      fullDescription: `Cherut é um sistema operacional de vida construído para pessoas que tratam a execução diária como dado mensurável. O nome vem da palavra hebraica para liberdade — porque um bom sistema não te limita, ele te liberta.

A premissa: a maioria das ferramentas de produtividade está desconectada. Você rastreia metas em um app, hábitos em outro, calendário em um terceiro, e reflete em um lugar totalmente diferente. Cherut unifica essas camadas em um único sistema operacional estruturado.

No núcleo: OKRs se desdobram em prioridades semanais, que se conectam a hábitos diários e blocos de tempo. Toda noite, uma breve revisão fecha o ciclo. Com o tempo, você acumula um conjunto de dados pessoal — não apenas tarefas concluídas, mas padrões, energia, janelas de foco e progresso em direção ao que realmente importa.

Construído para pessoas ambiciosas que querem se mover mais rápido sem perder a clareza sobre o porquê de estarem se movendo.`,
      tags: ['P&D', 'Software', 'Gestão'],
    },
    es: {
      tagline: 'Tu vida, funcionando en un sistema.',
      shortDescription: 'Sistema operativo completo para la productividad personal — OKRs, hábitos, calendario y diario en un solo lugar.',
      fullDescription: `Cherut es un sistema operativo de vida construido para personas que tratan la ejecución diaria como datos medibles. El nombre viene de la palabra hebrea para libertad — porque un buen sistema no te limita, te libera.

La premisa: la mayoría de las herramientas de productividad están desconectadas. Rastreas metas en una app, hábitos en otra, el calendario en una tercera y reflexionas en un lugar completamente diferente. Cherut unifica estas capas en un único sistema operativo estructurado.

En su núcleo: los OKRs se desglosan en prioridades semanales, que se conectan con hábitos diarios y bloques de tiempo. Cada noche, una breve revisión cierra el ciclo. Con el tiempo, acumulas un conjunto de datos personal — no solo tareas completadas, sino patrones, energía, ventanas de enfoque y progreso hacia lo que realmente importa.

Construido para personas ambiciosas que quieren moverse más rápido sin perder claridad sobre por qué se mueven.`,
      tags: ['I+D', 'Software', 'Gestión'],
    },
    fr: {
      tagline: 'Ta vie, tournant sur un système.',
      shortDescription: 'Système d\'exploitation complet pour la productivité personnelle — OKRs, habitudes, agenda et journal en un seul endroit.',
      fullDescription: `Cherut est un système d\'exploitation de vie conçu pour les personnes qui traitent l\'exécution quotidienne comme des données mesurables. Le nom vient du mot hébreu pour liberté — parce qu\'un bon système ne te contraint pas, il te libère.

La prémisse : la plupart des outils de productivité sont déconnectés. Tu suis tes objectifs dans une app, tes habitudes dans une autre, ton agenda dans une troisième, et tu réfléchis ailleurs. Cherut unifie ces couches en un seul système d\'exploitation structuré.

En son cœur : les OKRs se déclinent en priorités hebdomadaires, qui se connectent aux habitudes quotidiennes et aux blocs de temps. Chaque soir, une brève revue ferme la boucle. Au fil du temps, tu accumules un ensemble de données personnelles — pas seulement des tâches accomplies, mais des patterns, de l\'énergie, des fenêtres de concentration et des progrès vers ce qui compte vraiment.

Conçu pour les personnes ambitieuses qui veulent avancer plus vite sans perdre de vue pourquoi elles avancent.`,
      tags: ['R&D', 'Logiciel', 'Gestion'],
    },
    ca: {
      tagline: 'La teva vida, funcionant en un sistema.',
      shortDescription: 'Sistema operatiu complet per a la productivitat personal — OKRs, hàbits, calendari i diari en un sol lloc.',
      fullDescription: `Cherut és un sistema operatiu de vida construït per a persones que tracten l\'execució diària com a dades mesurables. El nom prové de la paraula hebrea per a llibertat — perquè un bon sistema no et limita, et allibera.

La premissa: la majoria de les eines de productivitat estan desconnectades. Fas el seguiment dels objectius en una app, els hàbits en una altra, el calendari en una tercera, i reflexiones en un lloc totalment diferent. Cherut unifica aquestes capes en un únic sistema operatiu estructurat.

Al seu nucli: els OKRs es desglossen en prioritats setmanals, que es connecten als hàbits diaris i blocs de temps. Cada nit, una breu revisió tanca el cicle. Amb el temps, acumules un conjunt de dades personals — no només tasques completades, sinó patrons, energia, finestres de concentració i progrés cap al que realment importa.

Construït per a persones ambicioses que volen moure\'s més ràpid sense perdre la claredat sobre per què es mouen.`,
      tags: ['R+D', 'Programari', 'Gestió'],
    },
  },
  {
    id: 'hofshilab',
    name: 'HofShiLab',
    tagline: 'Freedom, measured in fluency.',
    shortDescription: 'Language learning built on the Language Acquisition Formula (LAF) — a science-grounded methodology for acquiring any language naturally, not studying it.',
    fullDescription: `HofShiLab — "hofshi" is Hebrew for free — is a language learning product built on the Language Acquisition Formula (LAF), the method behind Haniel Rolemberg's book of the same name. Not a generic curriculum or a rigid structured method: a methodology grounded in second-language-acquisition science, built to help you acquire a language naturally instead of studying it.

The core insight: most learners plateau because they track effort (hours studied, lessons completed) instead of progress (what they can actually do). HofShiLab shifts the frame. Every learner has a clear CEFR target, a weekly engagement contract, and real-world interaction goals that build toward fluency.

Beyond the product, HofShiLab operates as an educational initiative. Through partnerships with youth programs, it brings language access to communities where multilingualism is a direct path to economic opportunity.

The formula: memorization + spaced repetition + comprehensible input + active output. The result: learners who don't just study a language — they start using it.`,
    metrics: [
      { label: 'Method', value: 'LAF' },
      { label: 'Framework', value: 'CEFR-aligned' },
      { label: 'Model', value: 'Product + Initiative' },
    ],
    tags: ['R&D', 'Software', 'Languages'],
    status: 'Ideation',
    image: '/images/hofshilang.png',
    imageFit: 'cover',
    pt: {
      tagline: 'Liberdade, medida em fluência.',
      shortDescription: 'Aprendizado de idiomas construído sobre a Language Acquisition Formula (LAF) — uma metodologia embasada em ciência para adquirir qualquer idioma de forma natural, em vez de estudá-lo.',
      fullDescription: `HofShiLab — "hofshi" significa livre em hebraico — é um produto de aprendizado de idiomas construído sobre a Language Acquisition Formula (LAF), o método por trás do livro de mesmo nome de Haniel Rolemberg. Não é um currículo genérico nem um método estruturado rígido: é uma metodologia embasada na ciência da aquisição de segunda língua, construída para que você adquira um idioma de forma natural, em vez de estudá-lo.

O insight central: a maioria dos aprendizes estaciona porque rastreia esforço (horas estudadas, lições concluídas) em vez de progresso (o que realmente conseguem fazer). HofShiLab muda esse enquadramento. Cada aprendiz tem uma meta clara no CEFR, um contrato semanal de engajamento e metas de interação no mundo real que constroem fluência.

Além do produto, HofShiLab opera como uma iniciativa educacional. Por meio de parcerias com programas voltados a jovens, leva acesso a idiomas para comunidades onde o multilinguismo é um caminho direto para oportunidade econômica.

A fórmula: memorização + repetição espaçada + insumo compreensível + produção ativa. O resultado: aprendizes que não apenas estudam um idioma — eles começam a usá-lo.`,
      metrics: [
        { label: 'Método', value: 'LAF' },
        { label: 'Framework', value: 'Alinhado ao CEFR' },
        { label: 'Modelo', value: 'Produto + Iniciativa' },
      ],
      tags: ['P&D', 'Software', 'Idiomas'],
    },
    es: {
      tagline: 'Libertad, medida en fluidez.',
      shortDescription: 'Aprendizaje de idiomas construido sobre la Language Acquisition Formula (LAF) — una metodología basada en la ciencia para adquirir cualquier idioma de forma natural, en lugar de estudiarlo.',
      fullDescription: `HofShiLab — "hofshi" significa libre en hebreo — es un producto de aprendizaje de idiomas construido sobre la Language Acquisition Formula (LAF), el método detrás del libro homónimo de Haniel Rolemberg. No es un currículo genérico ni un método estructurado rígido: es una metodología basada en la ciencia de la adquisición de segundas lenguas, construida para que adquieras un idioma de forma natural, en lugar de estudiarlo.

El insight central: la mayoría de los aprendices se estancan porque rastrean el esfuerzo (horas estudiadas, lecciones completadas) en lugar del progreso (lo que realmente son capaces de hacer). HofShiLab cambia el marco. Cada aprendiz tiene una meta clara en el MCER, un contrato semanal de compromiso y metas de interacción en el mundo real que construyen hacia la fluidez.

Más allá del producto, HofShiLab opera como una iniciativa educativa. A través de alianzas con programas juveniles, lleva el acceso a los idiomas a comunidades donde el multilingüismo es un camino directo hacia la oportunidad económica.

La fórmula: memorización + repetición espaciada + insumo comprensible + producción activa. El resultado: aprendices que no solo estudian un idioma — empiezan a usarlo.`,
      metrics: [
        { label: 'Método', value: 'LAF' },
        { label: 'Marco', value: 'Alineado al MCER' },
        { label: 'Modelo', value: 'Producto + Iniciativa' },
      ],
      tags: ['I+D', 'Software', 'Idiomas'],
    },
    fr: {
      tagline: 'La liberté, mesurée en fluidité.',
      shortDescription: 'Apprentissage des langues construit sur la Language Acquisition Formula (LAF) — une méthodologie fondée sur la science pour acquérir n\'importe quelle langue naturellement, plutôt que de l\'étudier.',
      fullDescription: `HofShiLab — « hofshi » signifie libre en hébreu — est un produit d\'apprentissage des langues construit sur la Language Acquisition Formula (LAF), la méthode derrière le livre du même nom de Haniel Rolemberg. Ce n\'est ni un curriculum générique ni une méthode structurée rigide : c\'est une méthodologie fondée sur la science de l\'acquisition des langues secondes, conçue pour vous aider à acquérir une langue naturellement plutôt que de l\'étudier.

L\'insight central : la plupart des apprenants plafonnent parce qu\'ils suivent l\'effort (heures étudiées, leçons complétées) plutôt que les progrès (ce qu\'ils peuvent réellement faire). HofShiLab change le cadre. Chaque apprenant a un objectif CECRL clair, un contrat d\'engagement hebdomadaire et des objectifs d\'interaction réels qui construisent vers la fluidité.

Au-delà du produit, HofShiLab fonctionne comme une initiative éducative. Grâce à des partenariats avec des programmes jeunesse, il apporte l\'accès aux langues dans des communautés où le multilinguisme est un chemin direct vers l\'opportunité économique.

La formule : mémorisation + répétition espacée + input compréhensible + output actif. Le résultat : des apprenants qui n\'étudient pas seulement une langue — ils commencent à l\'utiliser.`,
      metrics: [
        { label: 'Méthode', value: 'LAF' },
        { label: 'Cadre', value: 'Aligné CECRL' },
        { label: 'Modèle', value: 'Produit + Initiative' },
      ],
      tags: ['R&D', 'Logiciel', 'Langues'],
    },
    ca: {
      tagline: 'Llibertat, mesurada en fluïdesa.',
      shortDescription: 'Aprenentatge d\'idiomes construït sobre la Language Acquisition Formula (LAF) — una metodologia basada en la ciència per adquirir qualsevol idioma de forma natural, en lloc d\'estudiar-lo.',
      fullDescription: `HofShiLab — "hofshi" vol dir lliure en hebreu — és un producte d\'aprenentatge d\'idiomes construït sobre la Language Acquisition Formula (LAF), el mètode darrere el llibre homònim de Haniel Rolemberg. No és un currículum genèric ni un mètode estructurat rígid: és una metodologia basada en la ciència de l\'adquisició de segones llengües, construïda perquè adquireixis un idioma de forma natural, en lloc d\'estudiar-lo.

L\'insight central: la majoria dels aprenents s\'estanquen perquè fan seguiment de l\'esforç (hores estudiades, lliçons completades) en lloc del progrés (el que realment són capaços de fer). HofShiLab canvia el marc. Cada aprenent té un objectiu clar en el MECR, un contracte setmanal de compromís i objectius d\'interacció en el món real que construeixen cap a la fluïdesa.

Més enllà del producte, HofShiLab opera com una iniciativa educativa. A través d\'aliances amb programes juvenils, porta l\'accés als idiomes a comunitats on el multilingüisme és un camí directe cap a l\'oportunitat econòmica.

La fórmula: memorització + repetició espaiada + input comprensible + producció activa. El resultat: aprenents que no només estudien un idioma — comencen a usar-lo.`,
      metrics: [
        { label: 'Mètode', value: 'LAF' },
        { label: 'Marc', value: 'Alineat al MECR' },
        { label: 'Model', value: 'Producte + Iniciativa' },
      ],
      tags: ['R+D', 'Programari', 'Idiomes'],
    },
  },
  {
    id: 'shoresh',
    active: false,
    name: 'Shoresh',
    tagline: 'Governance, rooted in infrastructure.',
    shortDescription: 'Enterprise governance and compliance SaaS platform for mid-sized/large organizations and scaling startups — built end-to-end across 8 integrated modules.',
    fullDescription: `Shoresh is an enterprise governance and compliance platform built for organizations that have outgrown spreadsheets and ad-hoc controls. The name comes from the Hebrew word for root — because governance isn't a feature you bolt on later, it's the foundation everything else grows from.

The premise: as organizations scale, governance, risk, and compliance data end up scattered across disconnected tools — access requests in one system, audit trails in another, policy documents somewhere else entirely. Shoresh unifies these into a single platform with strict role-based access control and organizational isolation.

Built end-to-end across 8 integrated modules, with secure architecture, data encryption, and a full API layer for third-party integration — designed for mid-sized/large organizations and scaling startups that need governance infrastructure without a governance team.`,
    metrics: [
      { label: 'Modules', value: '8 Integrated' },
      { label: 'Focus', value: 'Governance & Compliance' },
      { label: 'Model', value: 'Enterprise SaaS' },
    ],
    tags: ['R&D', 'Software', 'Governance'],
    status: 'MVP',
    image: '/images/shoresh-cover.png',
    imageFit: 'contain',
    pt: {
      tagline: 'Governança, enraizada em infraestrutura.',
      shortDescription: 'Plataforma SaaS empresarial de governança e compliance para organizações médias/grandes e startups em crescimento — construída ponta a ponta em 8 módulos integrados.',
      fullDescription: `Shoresh é uma plataforma de governança e compliance empresarial construída para organizações que já superaram planilhas e controles improvisados. O nome vem da palavra hebraica para raiz — porque governança não é um recurso que se adiciona depois, é a base de onde tudo o mais cresce.

A premissa: à medida que as organizações crescem, os dados de governança, risco e compliance acabam espalhados em ferramentas desconectadas — solicitações de acesso em um sistema, trilhas de auditoria em outro, documentos de política em um lugar totalmente diferente. Shoresh unifica tudo isso em uma única plataforma com controle de acesso baseado em função rigoroso e isolamento organizacional.

Construída ponta a ponta em 8 módulos integrados, com arquitetura segura, criptografia de dados e uma camada completa de API para integração com terceiros — projetada para organizações médias/grandes e startups em crescimento que precisam de infraestrutura de governança sem precisar de uma equipe de governança.`,
      metrics: [
        { label: 'Módulos', value: '8 Integrados' },
        { label: 'Foco', value: 'Governança & Compliance' },
        { label: 'Modelo', value: 'SaaS Empresarial' },
      ],
      tags: ['P&D', 'Software', 'Governança'],
    },
    es: {
      tagline: 'Gobernanza, con raíces en la infraestructura.',
      shortDescription: 'Plataforma SaaS empresarial de gobernanza y cumplimiento para organizaciones medianas/grandes y startups en crecimiento — construida de extremo a extremo en 8 módulos integrados.',
      fullDescription: `Shoresh es una plataforma de gobernanza y cumplimiento empresarial construida para organizaciones que ya han superado las hojas de cálculo y los controles improvisados. El nombre viene de la palabra hebrea para raíz — porque la gobernanza no es una función que se añade después, es la base sobre la que crece todo lo demás.

La premisa: a medida que las organizaciones crecen, los datos de gobernanza, riesgo y cumplimiento terminan dispersos en herramientas desconectadas — solicitudes de acceso en un sistema, registros de auditoría en otro, documentos de política en un lugar completamente distinto. Shoresh unifica todo esto en una única plataforma con control de acceso basado en roles estricto y aislamiento organizacional.

Construida de extremo a extremo en 8 módulos integrados, con arquitectura segura, cifrado de datos y una capa completa de API para integración con terceros — diseñada para organizaciones medianas/grandes y startups en crecimiento que necesitan infraestructura de gobernanza sin necesitar un equipo de gobernanza.`,
      metrics: [
        { label: 'Módulos', value: '8 Integrados' },
        { label: 'Enfoque', value: 'Gobernanza y Cumplimiento' },
        { label: 'Modelo', value: 'SaaS Empresarial' },
      ],
      tags: ['I+D', 'Software', 'Gobernanza'],
    },
    fr: {
      tagline: 'La gouvernance, enracinée dans l\'infrastructure.',
      shortDescription: 'Plateforme SaaS de gouvernance et de conformité d\'entreprise pour les organisations moyennes/grandes et les startups en croissance — construite de bout en bout sur 8 modules intégrés.',
      fullDescription: `Shoresh est une plateforme de gouvernance et de conformité d\'entreprise conçue pour les organisations qui ont dépassé les tableurs et les contrôles improvisés. Le nom vient du mot hébreu pour racine — parce que la gouvernance n\'est pas une fonctionnalité qu\'on ajoute plus tard, c\'est la base sur laquelle tout le reste pousse.

La prémisse : à mesure que les organisations grandissent, les données de gouvernance, de risque et de conformité finissent dispersées dans des outils déconnectés — demandes d\'accès dans un système, pistes d\'audit dans un autre, documents de politique ailleurs. Shoresh unifie tout cela dans une seule plateforme avec un contrôle d\'accès basé sur les rôles strict et un isolement organisationnel.

Construite de bout en bout sur 8 modules intégrés, avec une architecture sécurisée, un chiffrement des données et une couche API complète pour l\'intégration tierce — conçue pour les organisations moyennes/grandes et les startups en croissance qui ont besoin d\'une infrastructure de gouvernance sans avoir besoin d\'une équipe de gouvernance.`,
      metrics: [
        { label: 'Modules', value: '8 Intégrés' },
        { label: 'Focus', value: 'Gouvernance & Conformité' },
        { label: 'Modèle', value: 'SaaS d\'Entreprise' },
      ],
      tags: ['R&D', 'Logiciel', 'Gouvernance'],
    },
    ca: {
      tagline: 'Governança, arrelada en la infraestructura.',
      shortDescription: 'Plataforma SaaS empresarial de governança i compliment per a organitzacions mitjanes/grans i startups en creixement — construïda de principi a fi en 8 mòduls integrats.',
      fullDescription: `Shoresh és una plataforma de governança i compliment empresarial construïda per a organitzacions que ja han superat els fulls de càlcul i els controls improvisats. El nom prové de la paraula hebrea per a arrel — perquè la governança no és una funció que s\'afegeix més tard, és la base sobre la qual creix tota la resta.

La premissa: a mesura que les organitzacions creixen, les dades de governança, risc i compliment acaben disperses en eines desconnectades — sol·licituds d\'accés en un sistema, rastres d\'auditoria en un altre, documents de política en un lloc totalment diferent. Shoresh unifica tot això en una única plataforma amb control d\'accés basat en rols estricte i aïllament organitzatiu.

Construïda de principi a fi en 8 mòduls integrats, amb arquitectura segura, xifratge de dades i una capa completa d\'API per a la integració amb tercers — dissenyada per a organitzacions mitjanes/grans i startups en creixement que necessiten infraestructura de governança sense necessitar un equip de governança.`,
      metrics: [
        { label: 'Mòduls', value: '8 Integrats' },
        { label: 'Focus', value: 'Governança i Compliment' },
        { label: 'Model', value: 'SaaS Empresarial' },
      ],
      tags: ['R+D', 'Programari', 'Governança'],
    },
  },
]

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === slug)
}
