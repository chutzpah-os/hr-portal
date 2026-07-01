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
    id: 'shoresh',
    name: 'Shoresh',
    tagline: 'Governance that protects. Compliance that scales.',
    shortDescription: 'Corporate governance and compliance platform for mid-to-large corporations — and the startups building toward that scale.',
    fullDescription: `Shoresh is a compliance and corporate governance platform built to protect corporations from the inside out.

The premise: governance failures are rarely sudden — they accumulate quietly through gaps in process, unclear accountability, and compliance blind spots. Shoresh makes those gaps visible before they become liabilities.

Designed for medium and large corporations with the structural complexity that demands rigorous governance, and equally available to startups that want to build compliance-ready from day one rather than retrofit it later.

The platform covers corporate governance frameworks, regulatory compliance tracking, risk visibility, and accountability structures — giving leadership the confidence that the organization is protected, auditable, and aligned.

More details will be shared as the project matures.`,
    tags: ['R&D', 'Software', 'Compliance', 'Government', 'Management'],
    status: 'Ideation',
    image: '/images/shoresh-cover.png',
    imageFit: 'cover',
    pt: {
      tagline: 'Governança que protege. Compliance que escala.',
      shortDescription: 'Plataforma de governança corporativa e compliance para médias e grandes corporações — e para as startups que constroem rumo a essa escala.',
      fullDescription: `Shoresh é uma plataforma de compliance e governança corporativa construída para proteger corporações de dentro para fora.

A premissa: falhas de governança raramente são repentinas — elas se acumulam silenciosamente através de lacunas de processo, responsabilidades pouco claras e pontos cegos de compliance. Shoresh torna essas lacunas visíveis antes que se tornem passivos.

Projetada para médias e grandes corporações com a complexidade estrutural que exige governança rigorosa, e igualmente disponível para startups que querem nascer prontas para compliance em vez de adaptar isso depois.

A plataforma cobre frameworks de governança corporativa, rastreamento de compliance regulatório, visibilidade de riscos e estruturas de responsabilidade — dando à liderança a confiança de que a organização está protegida, auditável e alinhada.

Mais detalhes serão compartilhados conforme o projeto amadurece.`,
      tags: ['P&D', 'Software', 'Compliance', 'Governo', 'Gestão'],
    },
    es: {
      tagline: 'Gobernanza que protege. Compliance que escala.',
      shortDescription: 'Plataforma de gobernanza corporativa y compliance para corporaciones medianas y grandes — y para las startups que construyen hacia esa escala.',
      fullDescription: `Shoresh es una plataforma de compliance y gobernanza corporativa construida para proteger a las corporaciones desde adentro hacia afuera.

La premisa: los fallos de gobernanza rara vez son repentinos — se acumulan silenciosamente a través de brechas en los procesos, responsabilidades poco claras y puntos ciegos de compliance. Shoresh hace visibles esas brechas antes de que se conviertan en pasivos.

Diseñada para corporaciones medianas y grandes con la complejidad estructural que exige una gobernanza rigurosa, e igualmente disponible para startups que quieren nacer preparadas para el compliance en lugar de adaptarlo después.

La plataforma cubre marcos de gobernanza corporativa, seguimiento de compliance regulatorio, visibilidad de riesgos y estructuras de responsabilidad — dando a la dirección la confianza de que la organización está protegida, auditable y alineada.

Más detalles se compartirán a medida que el proyecto madure.`,
      tags: ['I+D', 'Software', 'Compliance', 'Gobierno', 'Gestión'],
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
  },
  {
    id: 'psf-portal',
    name: 'PSF Portal',
    tagline: 'The operating system for the Problem Solvers community.',
    shortDescription: 'Internal platform for the Problem Solver Foundation — connecting members, tracking impact, and coordinating initiatives across the community.',
    fullDescription: `The PSF Portal is the internal backbone of the Problem Solver Foundation — a community on a mission to impact 1 billion lives by 2035.

The challenge: as a distributed community grows, coordination breaks down. Members lose context, initiatives lose momentum, and the mission gets diluted. The PSF Portal exists to prevent that.

At its core, the portal connects people to each other and to the work that matters. Members can find ongoing initiatives, join teams, track collective progress, and share resources. Leaders get visibility into what's moving and what's stalled.

Beyond coordination, the portal is a space for community identity — where the culture of problem-solving is documented, practiced, and passed forward.

Built to scale the mission without losing the human element.`,
    tags: ['R&D', 'Software', 'Community'],
    status: 'Ideation',
    image: '/images/psf-portal-cover.png',
    imageFit: 'cover',
    pt: {
      tagline: 'O sistema operacional da comunidade Problem Solvers.',
      shortDescription: 'Plataforma interna da Problem Solver Foundation — conectando membros, acompanhando impacto e coordenando iniciativas em toda a comunidade.',
      fullDescription: `O PSF Portal é a espinha dorsal interna da Problem Solver Foundation — uma comunidade com a missão de impactar 1 bilhão de vidas até 2035.

O desafio: à medida que uma comunidade distribuída cresce, a coordenação se desfaz. Membros perdem contexto, iniciativas perdem força e a missão se dilui. O PSF Portal existe para evitar isso.

No núcleo, o portal conecta pessoas umas às outras e ao trabalho que importa. Membros podem encontrar iniciativas em andamento, entrar em times, acompanhar o progresso coletivo e compartilhar recursos. Líderes ganham visibilidade sobre o que está avançando e o que está travado.

Além da coordenação, o portal é um espaço para a identidade da comunidade — onde a cultura de resolução de problemas é documentada, praticada e passada adiante.

Construído para escalar a missão sem perder o elemento humano.`,
      tags: ['P&D', 'Software', 'Comunidade'],
    },
    es: {
      tagline: 'El sistema operativo de la comunidad Problem Solvers.',
      shortDescription: 'Plataforma interna de la Problem Solver Foundation — conectando miembros, rastreando impacto y coordinando iniciativas en toda la comunidad.',
      fullDescription: `El PSF Portal es la columna vertebral interna de la Problem Solver Foundation — una comunidad con la misión de impactar 1.000 millones de vidas para 2035.

El desafío: a medida que una comunidad distribuida crece, la coordinación se rompe. Los miembros pierden contexto, las iniciativas pierden impulso y la misión se diluye. El PSF Portal existe para evitar eso.

En su núcleo, el portal conecta a las personas entre sí y con el trabajo que importa. Los miembros pueden encontrar iniciativas en marcha, unirse a equipos, rastrear el progreso colectivo y compartir recursos. Los líderes obtienen visibilidad sobre lo que avanza y lo que se ha detenido.

Más allá de la coordinación, el portal es un espacio para la identidad de la comunidad — donde la cultura de resolución de problemas se documenta, practica y transmite.

Construido para escalar la misión sin perder el elemento humano.`,
      tags: ['I+D', 'Software', 'Comunidad'],
    },
  },
  {
    id: 'data-aggregator',
    name: 'Data Aggregator',
    tagline: 'Turning noise into signals — before problems become crises.',
    shortDescription: 'AI-powered platform that aggregates, processes, and surfaces data patterns to understand and anticipate complex problems across domains.',
    fullDescription: `The Data Aggregator is a research and intelligence platform built around a core premise: most problems are predictable — if you're looking at the right data.

The system pulls from heterogeneous sources (public datasets, research publications, community signals, structured feeds) and applies AI/ML pipelines to identify patterns, correlations, and early indicators across domains. The output isn't raw data — it's insight: what's emerging, why it matters, and what responses are worth exploring.

Use cases span from social impact (identifying communities at risk before crises surface) to technical research (spotting gaps in existing solutions), to organizational intelligence (understanding where initiatives stall and why).

The R&D focus is on building pipelines that are domain-agnostic but context-aware — systems that can reason about different problem classes without requiring full re-architecture for each new domain.

Built at the intersection of data engineering, machine learning, and decision intelligence.`,
    metrics: [
      { label: 'Focus', value: 'Prediction & Prevention' },
      { label: 'Stack', value: 'AI/ML · Data Engineering' },
      { label: 'Scope', value: 'Multi-domain' },
    ],
    tags: ['R&D', 'Software', 'AI/ML'],
    status: 'Ideation',
    image: '/images/datapsf1.png',
    imageFit: 'cover',
    pt: {
      tagline: 'Transformando ruído em sinal — antes que problemas virem crises.',
      shortDescription: 'Plataforma com IA que agrega, processa e revela padrões de dados para entender e antecipar problemas complexos em diferentes domínios.',
      fullDescription: `O Data Aggregator é uma plataforma de pesquisa e inteligência construída em torno de uma premissa central: a maioria dos problemas é previsível — se você estiver olhando para os dados certos.

O sistema extrai de fontes heterogêneas (datasets públicos, publicações de pesquisa, sinais da comunidade, feeds estruturados) e aplica pipelines de IA/ML para identificar padrões, correlações e indicadores precoces em diferentes domínios. O resultado não é dado bruto — é insight: o que está emergindo, por que importa e quais respostas vale a pena explorar.

Os casos de uso vão de impacto social (identificar comunidades em risco antes que crises surjam) a pesquisa técnica (encontrar lacunas em soluções existentes), passando por inteligência organizacional (entender onde iniciativas travam e por quê).

O foco de P&D está em construir pipelines agnósticos de domínio, mas sensíveis ao contexto — sistemas capazes de raciocinar sobre diferentes classes de problemas sem exigir uma reconstrução completa para cada novo domínio.

Construído na interseção entre engenharia de dados, machine learning e inteligência de decisão.`,
      metrics: [
        { label: 'Foco', value: 'Predição & Prevenção' },
        { label: 'Stack', value: 'IA/ML · Engenharia de Dados' },
        { label: 'Escopo', value: 'Multidomínio' },
      ],
      tags: ['P&D', 'Software', 'IA/ML'],
    },
    es: {
      tagline: 'Convirtiendo ruido en señales — antes de que los problemas se vuelvan crisis.',
      shortDescription: 'Plataforma con IA que agrega, procesa y revela patrones de datos para entender y anticipar problemas complejos en distintos dominios.',
      fullDescription: `El Data Aggregator es una plataforma de investigación e inteligencia construida en torno a una premisa central: la mayoría de los problemas son predecibles — si estás mirando los datos correctos.

El sistema extrae de fuentes heterogéneas (conjuntos de datos públicos, publicaciones de investigación, señales de la comunidad, feeds estructurados) y aplica pipelines de IA/ML para identificar patrones, correlaciones e indicadores tempranos en distintos dominios. El resultado no son datos crudos — es insight: qué está emergiendo, por qué importa y qué respuestas vale la pena explorar.

Los casos de uso van desde el impacto social (identificar comunidades en riesgo antes de que surjan las crisis) hasta la investigación técnica (detectar brechas en soluciones existentes), pasando por la inteligencia organizacional (entender dónde se estancan las iniciativas y por qué).

El foco de I+D está en construir pipelines agnósticos del dominio pero sensibles al contexto — sistemas capaces de razonar sobre diferentes clases de problemas sin requerir una re-arquitectura completa para cada nuevo dominio.

Construido en la intersección entre ingeniería de datos, machine learning e inteligencia de decisión.`,
      metrics: [
        { label: 'Enfoque', value: 'Predicción y Prevención' },
        { label: 'Stack', value: 'IA/ML · Ingeniería de Datos' },
        { label: 'Alcance', value: 'Multidominio' },
      ],
      tags: ['I+D', 'Software', 'IA/ML'],
    },
  },
  {
    id: 'seder-koah',
    name: 'Seder Koah',
    tagline: 'Structure and strength for public institutions.',
    shortDescription: 'Internal management system designed for governmental units — organizing operations, people, and processes in the public sector to generate real efficiency.',
    fullDescription: `Seder Koah is an internal management platform built specifically for governmental units and public institutions — with efficiency as its core objective.

The public sector has unique operational demands: regulatory constraints, multi-level accountability, complex organizational hierarchies, and the constant pressure to do more with limited resources. Generic management tools weren't built for this context. Seder Koah was.

The platform centralizes internal operations — team management, workflow coordination, document control, and process tracking — eliminating the redundancies and friction that drain public institutions of time and resources. The result is a leaner, faster, more accountable operation.

Built to bring order, operational clarity, and measurable efficiency to governmental units of any size, from municipal departments to larger public bodies.`,
    tags: ['R&D', 'Software', 'Government', 'Management', 'Compliance'],
    status: 'Ideation',
    pt: {
      tagline: 'Estrutura e força para instituições públicas.',
      shortDescription: 'Sistema de gestão interna projetado para unidades governamentais — organizando operações, pessoas e processos no setor público para gerar eficiência real.',
      fullDescription: `Seder Koah é uma plataforma de gestão interna construída especificamente para unidades governamentais e instituições públicas — com eficiência como objetivo central.

O setor público tem demandas operacionais únicas: restrições regulatórias, responsabilização em múltiplos níveis, hierarquias organizacionais complexas e a pressão constante de fazer mais com recursos limitados. Ferramentas de gestão genéricas não foram feitas para esse contexto. Seder Koah foi.

A plataforma centraliza operações internas — gestão de equipes, coordenação de fluxos de trabalho, controle de documentos e rastreamento de processos — eliminando as redundâncias e atritos que drenam tempo e recursos de instituições públicas. O resultado é uma operação mais enxuta, rápida e responsável.

Construída para trazer ordem, clareza operacional e eficiência mensurável para unidades governamentais de qualquer porte, de secretarias municipais a órgãos públicos maiores.`,
      tags: ['P&D', 'Software', 'Governo', 'Gestão', 'Compliance'],
    },
    es: {
      tagline: 'Estructura y fuerza para instituciones públicas.',
      shortDescription: 'Sistema de gestión interna diseñado para unidades gubernamentales — organizando operaciones, personas y procesos en el sector público para generar eficiencia real.',
      fullDescription: `Seder Koah es una plataforma de gestión interna construida específicamente para unidades gubernamentales e instituciones públicas — con la eficiencia como objetivo central.

El sector público tiene demandas operativas únicas: restricciones regulatorias, responsabilidad multinivel, jerarquías organizativas complejas y la presión constante de hacer más con recursos limitados. Las herramientas de gestión genéricas no fueron diseñadas para este contexto. Seder Koah sí.

La plataforma centraliza las operaciones internas — gestión de equipos, coordinación de flujos de trabajo, control de documentos y seguimiento de procesos — eliminando las redundancias y fricciones que drenan tiempo y recursos de las instituciones públicas. El resultado es una operación más ágil, rápida y responsable.

Construida para traer orden, claridad operativa y eficiencia medible a unidades gubernamentales de cualquier tamaño, desde departamentos municipales hasta organismos públicos de mayor envergadura.`,
      tags: ['I+D', 'Software', 'Gobierno', 'Gestión', 'Compliance'],
    },
  },
  {
    id: 'sentinel-ai',
    name: 'Sentinel AI',
    tagline: 'Eyes that never blink. Intelligence that never sleeps.',
    shortDescription: 'Physical security platform powered by computer vision and AI — monitoring people, objects, and movements in real time.',
    fullDescription: `Sentinel AI brings machine intelligence to physical security. Where traditional surveillance records, Sentinel AI understands.

The system uses computer vision, machine learning, and data pipelines to monitor environments in real time — detecting people, tracking movement patterns, identifying objects, and surfacing anomalies before they escalate. The goal is not to replace human judgment, but to extend it: giving security teams the context they need, exactly when they need it.

Built for environments where physical security is mission-critical — from corporate campuses and critical infrastructure to public spaces that require continuous, intelligent oversight.

The foundation: CV models trained for real-world conditions, behavioral pattern recognition, and data infrastructure designed for low-latency alerting at scale.`,
    metrics: [
      { label: 'Core Tech', value: 'Computer Vision' },
      { label: 'Stack', value: 'AI/ML · Data' },
      { label: 'Focus', value: 'Physical Security' },
    ],
    tags: ['R&D', 'Software', 'AI/ML', 'Cybersecurity'],
    status: 'Ideation',
    pt: {
      tagline: 'Olhos que nunca piscam. Inteligência que nunca dorme.',
      shortDescription: 'Plataforma de segurança física com visão computacional e IA — monitorando pessoas, objetos e movimentos em tempo real.',
      fullDescription: `Sentinel AI traz inteligência de máquina para a segurança física. Onde a vigilância tradicional grava, Sentinel AI entende.

O sistema usa visão computacional, machine learning e pipelines de dados para monitorar ambientes em tempo real — detectando pessoas, rastreando padrões de movimento, identificando objetos e revelando anomalias antes que escalem. O objetivo não é substituir o julgamento humano, mas estendê-lo: dando às equipes de segurança o contexto que precisam, exatamente quando precisam.

Construído para ambientes onde a segurança física é missão crítica — de campi corporativos e infraestrutura crítica a espaços públicos que exigem supervisão contínua e inteligente.

A base: modelos de visão computacional treinados para condições do mundo real, reconhecimento de padrões comportamentais e infraestrutura de dados projetada para alertas de baixa latência em escala.`,
      metrics: [
        { label: 'Tecnologia Principal', value: 'Visão Computacional' },
        { label: 'Stack', value: 'IA/ML · Dados' },
        { label: 'Foco', value: 'Segurança Física' },
      ],
      tags: ['P&D', 'Software', 'IA/ML', 'Cibersegurança'],
    },
    es: {
      tagline: 'Ojos que nunca parpadean. Inteligencia que nunca duerme.',
      shortDescription: 'Plataforma de seguridad física con visión computacional e IA — monitoreando personas, objetos y movimientos en tiempo real.',
      fullDescription: `Sentinel AI lleva la inteligencia de máquina a la seguridad física. Donde la vigilancia tradicional graba, Sentinel AI comprende.

El sistema usa visión computacional, machine learning y pipelines de datos para monitorear entornos en tiempo real — detectando personas, rastreando patrones de movimiento, identificando objetos y revelando anomalías antes de que escalen. El objetivo no es reemplazar el juicio humano, sino ampliarlo: dando a los equipos de seguridad el contexto que necesitan, exactamente cuando lo necesitan.

Construido para entornos donde la seguridad física es de importancia crítica — desde campus corporativos e infraestructuras críticas hasta espacios públicos que requieren supervisión continua e inteligente.

La base: modelos de visión computacional entrenados para condiciones del mundo real, reconocimiento de patrones de comportamiento e infraestructura de datos diseñada para alertas de baja latencia a escala.`,
      metrics: [
        { label: 'Tecnología Principal', value: 'Visión Computacional' },
        { label: 'Stack', value: 'IA/ML · Datos' },
        { label: 'Enfoque', value: 'Seguridad Física' },
      ],
      tags: ['I+D', 'Software', 'IA/ML', 'Ciberseguridad'],
    },
  },
  {
    id: 'etz',
    name: 'Etz',
    tagline: 'Sensitive data deserves serious protection.',
    shortDescription: 'Secure registration and management of sensitive data and assets — built on cryptographic foundations.',
    fullDescription: `Etz is a platform for the secure registration and management of sensitive data and critical assets, built for government and compliance-driven environments.

The focus is on cryptography — ensuring that sensitive information is protected at rest, in transit, and at access. Designed to meet the rigor that regulated sectors demand. More details will be shared as the project matures.`,
    tags: ['R&D', 'Software', 'Cybersecurity', 'Government', 'Compliance'],
    status: 'Ideation',
    image: '/images/etz-cover.png',
    imageFit: 'cover',
    pt: {
      tagline: 'Dados sensíveis merecem proteção séria.',
      shortDescription: 'Registro e gestão segura de dados e ativos sensíveis — construído sobre fundamentos criptográficos.',
      fullDescription: `Etz é uma plataforma para o registro e a gestão segura de dados sensíveis e ativos críticos, construída para ambientes governamentais e orientados por compliance.

O foco está na criptografia — garantindo que informações sensíveis estejam protegidas em repouso, em trânsito e no acesso. Projetada para atender ao rigor que setores regulados exigem. Mais detalhes serão compartilhados conforme o projeto amadurece.`,
      tags: ['P&D', 'Software', 'Cibersegurança', 'Governo', 'Compliance'],
    },
    es: {
      tagline: 'Los datos sensibles merecen protección seria.',
      shortDescription: 'Registro y gestión segura de datos y activos sensibles — construido sobre fundamentos criptográficos.',
      fullDescription: `Etz es una plataforma para el registro y la gestión segura de datos sensibles y activos críticos, construida para entornos gubernamentales y orientados al compliance.

El foco está en la criptografía — garantizando que la información sensible esté protegida en reposo, en tránsito y en el acceso. Diseñada para cumplir con el rigor que exigen los sectores regulados. Más detalles se compartirán a medida que el proyecto madure.`,
      tags: ['I+D', 'Software', 'Ciberseguridad', 'Gobierno', 'Compliance'],
    },
  },
  {
    id: 'hofshilang',
    name: 'HofShiLang',
    tagline: 'Empowering youth through languages.',
    shortDescription: 'Language learning with a proprietary formula designed to turn ambition into measurable fluency.',
    fullDescription: `HofShiLang is a language learning product built around a proprietary formula — not a generic curriculum, but a structured method that maps ambition to measurable outcomes.

The core insight: most learners plateau because they track effort (hours studied, lessons completed) instead of progress (what they can actually do). HofShiLang shifts the frame. Every learner has a clear CEFR target, a weekly engagement contract, and real-world interaction goals that build toward fluency.

Beyond the product, HofShiLang operates as an educational initiative. Through partnerships with youth programs, it brings language access to communities where multilingualism is a direct path to economic opportunity.

The formula: structured input + real-world output + accountability loops. The result: learners who don't just study a language — they start using it.`,
    metrics: [
      { label: 'Framework', value: 'CEFR-aligned' },
      { label: 'Focus', value: 'Youth' },
      { label: 'Model', value: 'Product + Initiative' },
    ],
    tags: ['R&D', 'Software', 'Education'],
    status: 'Ideation',
    image: '/images/hofshilang.png',
    imageFit: 'cover',
    pt: {
      tagline: 'Empoderando jovens através de idiomas.',
      shortDescription: 'Aprendizado de idiomas com uma fórmula proprietária projetada para transformar ambição em fluência mensurável.',
      fullDescription: `HofShiLang é um produto de aprendizado de idiomas construído em torno de uma fórmula proprietária — não um currículo genérico, mas um método estruturado que mapeia ambição para resultados mensuráveis.

O insight central: a maioria dos aprendizes estaciona porque rastreia esforço (horas estudadas, lições concluídas) em vez de progresso (o que realmente conseguem fazer). HofShiLang muda esse enquadramento. Cada aprendiz tem uma meta clara no CEFR, um contrato semanal de engajamento e metas de interação no mundo real que constroem fluência.

Além do produto, HofShiLang opera como uma iniciativa educacional. Por meio de parcerias com programas voltados a jovens, leva acesso a idiomas para comunidades onde o multilinguismo é um caminho direto para oportunidade econômica.

A fórmula: input estruturado + output no mundo real + ciclos de responsabilização. O resultado: aprendizes que não apenas estudam um idioma — eles começam a usá-lo.`,
      metrics: [
        { label: 'Framework', value: 'Alinhado ao CEFR' },
        { label: 'Foco', value: 'Jovens' },
        { label: 'Modelo', value: 'Produto + Iniciativa' },
      ],
      tags: ['P&D', 'Software', 'Educação'],
    },
    es: {
      tagline: 'Empoderando a los jóvenes a través de los idiomas.',
      shortDescription: 'Aprendizaje de idiomas con una fórmula propia diseñada para convertir la ambición en fluidez medible.',
      fullDescription: `HofShiLang es un producto de aprendizaje de idiomas construido en torno a una fórmula propia — no un currículo genérico, sino un método estructurado que traza el camino de la ambición a los resultados medibles.

El insight central: la mayoría de los aprendices se estancan porque rastrean el esfuerzo (horas estudiadas, lecciones completadas) en lugar del progreso (lo que realmente son capaces de hacer). HofShiLang cambia el marco. Cada aprendiz tiene una meta clara en el MCER, un contrato semanal de compromiso y metas de interacción en el mundo real que construyen hacia la fluidez.

Más allá del producto, HofShiLang opera como una iniciativa educativa. A través de alianzas con programas juveniles, lleva el acceso a los idiomas a comunidades donde el multilingüismo es un camino directo hacia la oportunidad económica.

La fórmula: input estructurado + output en el mundo real + ciclos de responsabilidad. El resultado: aprendices que no solo estudian un idioma — empiezan a usarlo.`,
      metrics: [
        { label: 'Marco', value: 'Alineado al MCER' },
        { label: 'Enfoque', value: 'Jóvenes' },
        { label: 'Modelo', value: 'Producto + Iniciativa' },
      ],
      tags: ['I+D', 'Software', 'Educación'],
    },
  },
]

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === slug)
}
