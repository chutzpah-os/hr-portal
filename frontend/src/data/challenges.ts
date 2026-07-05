interface ChallengeTranslation {
  tagline: string
  shortDescription: string
  fullDescription: string
  tags: string[]
}

export interface ChallengeProgress {
  daysCompleted: number
  milesRun: number
  goalDays: number
  goalMiles: number
  lastUpdated: string
}

export interface FundraisingGoals {
  current: number
  currency: string
  tiers: { label: string; amount: number }[]
}

export interface ChallengeVideo {
  id: string
  lang: string
  title: string
}

export interface ChallengeFAQ {
  question: string
  answer: string
  pt?: { question: string; answer: string }
  es?: { question: string; answer: string }
  fr?: { question: string; answer: string }
  ca?: { question: string; answer: string }
}

export interface RoadmapPhase {
  phase: string
  label: string
  description: string
  year: string
  status: 'done' | 'active' | 'upcoming'
}

export interface ImpactMetric {
  value: string
  label: string
  sublabel?: string
}

export interface TransparencyItem {
  percent: number
  category: string
  detail: string
}

export interface BenefitItem {
  title: string
  description: string
  type: 'company' | 'individual'
}

export interface Challenge {
  id: string
  name: string
  tagline: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  image?: string
  imageFit?: 'contain' | 'cover'
  modalImage?: string
  cta?: { label: string; href: string; external?: boolean }
  startDate?: string
  endDate?: string
  progress?: ChallengeProgress
  fundraisingGoals?: FundraisingGoals
  videos?: ChallengeVideo[]
  faqs?: ChallengeFAQ[]
  roadmap?: RoadmapPhase[]
  impactMetrics?: ImpactMetric[]
  transparency?: TransparencyItem[]
  benefits?: BenefitItem[]
  pt?: ChallengeTranslation
  es?: ChallengeTranslation
  fr?: ChallengeTranslation
  ca?: ChallengeTranslation
}

export const CHALLENGES: Challenge[] = [
  {
    id: '1k-miles-of-hope',
    name: '1k Miles of Hope',
    tagline: 'Running for a cure.',
    shortDescription: 'A fundraising campaign to finance cancer research — every mile matters.',
    fullDescription: `1k Miles of Hope is a fundraising initiative created to support cancer research through the Terry Fox Foundation — one of the most impactful cancer research programs in the world.

The goal is simple: run 1,000 miles and raise funds that go directly toward financing scientific research aimed at finding a cure. Every kilometer translates into real resources for real scientists working on real breakthroughs.

Cancer touches almost every family. This campaign is a way to turn movement into meaning — to make every run, every mile, and every step count for something larger than the finish line.

If you want to contribute, every donation makes a difference.`,
    tags: ['Social Impact', 'Health', 'Running'],
    image: '/images/hospitalroompai.jpg',
    imageFit: 'cover',
    modalImage: '/images/hanielrunning.jpeg',
    cta: { label: 'Donate', href: 'https://international.terryfox.ca/page/1k-miles-of-hope', external: true },
    startDate: '2026-06-27',
    endDate: '2026-10-05',
    progress: {
      daysCompleted: 8,
      milesRun: 52,
      goalDays: 100,
      goalMiles: 1000,
      lastUpdated: '2026-07-05',
    },
    fundraisingGoals: {
      current: 0,
      currency: 'USD',
      tiers: [
        { label: 'First milestone', amount: 10000 },
        { label: 'Scale up', amount: 50000 },
        { label: 'Accelerate', amount: 100000 },
        { label: 'Full impact', amount: 1000000 },
      ],
    },
    videos: [
      { id: 'XW-PPAL0m7Q', lang: 'pt', title: 'Haniel Rolemberg — PT' },
      { id: 'iCRzdi6TlWY', lang: 'en', title: 'Haniel Rolemberg — EN' },
    ],
    faqs: [
      {
        question: 'Does my donation stay in my country?',
        answer: 'Yes. The Terry Fox International model guarantees that every dollar raised in a given country is allocated to cancer researchers in that same country. Local donation → local research. No exceptions.',
        pt: { question: 'Minha doação fica no meu país?', answer: 'Sim. O modelo Terry Fox International garante que cada real arrecadado em um país específico é direcionado para pesquisadores de câncer naquele mesmo país. Doação local → pesquisa local. Sem exceções.' },
        es: { question: '¿Mi donación se queda en mi país?', answer: 'Sí. El modelo Terry Fox International garantiza que cada dólar recaudado en un país determinado se destina a los investigadores de cáncer de ese mismo país. Donación local → investigación local. Sin excepciones.' },
        fr: { question: 'Mon don reste-t-il dans mon pays?', answer: "Oui. Le modèle Terry Fox International garantit que chaque dollar collecté dans un pays donné est alloué aux chercheurs en cancérologie de ce même pays. Don local → recherche locale. Sans exception." },
        ca: { question: 'La meva donació es queda al meu país?', answer: "Sí. El model Terry Fox International garanteix que cada dòlar recaptat en un país determinat s'assigna als investigadors de càncer d'aquell mateix país. Donació local → recerca local. Sense excepcions." },
      },
      {
        question: 'What is the fundraising goal?',
        answer: 'The initial goal is US$10,000 — enough to fund a meaningful research grant. As the project grows, milestones scale to US$50,000 → US$100,000 → US$1,000,000. Each tier unlocks greater research capacity.',
        pt: { question: 'Qual é a meta de arrecadação?', answer: 'A meta inicial é US$ 10.000 — o suficiente para financiar uma bolsa de pesquisa significativa. À medida que o projeto cresce, os marcos escalam para US$ 50.000 → US$ 100.000 → US$ 1.000.000. Cada etapa amplia a capacidade de pesquisa.' },
        es: { question: '¿Cuál es la meta de recaudación?', answer: 'La meta inicial es US$10.000 — suficiente para financiar una beca de investigación significativa. A medida que el proyecto crece, los hitos escalan a US$50.000 → US$100.000 → US$1.000.000. Cada etapa amplía la capacidad de investigación.' },
        fr: { question: "Quel est l'objectif de collecte de fonds?", answer: "L'objectif initial est de 10 000 USD — suffisant pour financer une bourse de recherche significative. Au fil du développement du projet, les jalons passent à 50 000 USD → 100 000 USD → 1 000 000 USD. Chaque étape élargit la capacité de recherche." },
        ca: { question: "Quin és l'objectiu de recaptació?", answer: "L'objectiu inicial és de 10.000 USD — suficient per finançar una beca de recerca significativa. A mesura que el projecte creix, les fites escalen fins a 50.000 USD → 100.000 USD → 1.000.000 USD. Cada etapa amplia la capacitat de recerca." },
      },
      {
        question: 'Can I donate from anywhere in the world?',
        answer: 'Yes. The Terry Fox International model is active in over 60 countries. Wherever you are, your donation supports researchers in your own country — not redirected abroad.',
        pt: { question: 'Posso doar de qualquer lugar do mundo?', answer: 'Sim. O modelo Terry Fox International está ativo em mais de 60 países. Onde quer que você esteja, sua doação apoia pesquisadores no seu próprio país — sem redirecionamento para o exterior.' },
        es: { question: '¿Puedo donar desde cualquier lugar del mundo?', answer: 'Sí. El modelo Terry Fox International está activo en más de 60 países. Donde sea que estés, tu donación apoya a los investigadores de tu propio país — sin redireccionamiento al exterior.' },
        fr: { question: "Puis-je faire un don depuis n'importe où dans le monde?", answer: "Oui. Le modèle Terry Fox International est actif dans plus de 60 pays. Où que vous soyez, votre don soutient les chercheurs de votre propre pays — sans redirection à l'étranger." },
        ca: { question: 'Puc donar des de qualsevol lloc del món?', answer: "Sí. El model Terry Fox International és actiu a més de 60 països. On siguis, la teva donació dona suport als investigadors del teu propi país — sense redirecció a l'estranger." },
      },
      {
        question: 'How can I follow the running progress?',
        answer: 'This page is updated manually with days completed and miles run. For detailed episode logs, check the blog posts under "1K Miles of Hope Project".',
        pt: { question: 'Como posso acompanhar o progresso da corrida?', answer: 'Esta página é atualizada manualmente com dias completados e milhas percorridas. Para registros detalhados de cada episódio, confira os posts do blog em "1K Miles of Hope Project".' },
        es: { question: '¿Cómo puedo seguir el progreso de la carrera?', answer: 'Esta página se actualiza manualmente con los días completados y las millas recorridas. Para registros detallados de cada episodio, consulta las publicaciones del blog en "1K Miles of Hope Project".' },
        fr: { question: 'Comment puis-je suivre la progression de la course?', answer: "Cette page est mise à jour manuellement avec les jours complétés et les miles parcourus. Pour des journaux détaillés de chaque épisode, consultez les articles de blog sous « 1K Miles of Hope Project »." },
        ca: { question: 'Com puc seguir el progrés de la cursa?', answer: "Aquesta pàgina s'actualitza manualment amb els dies completats i les milles recorregudes. Per als registres detallats de cada episodi, consulteu les entrades del blog a «1K Miles of Hope Project»." },
      },
      {
        question: 'Who is the Terry Fox Foundation?',
        answer: "A foundation created in honor of Terry Fox — an 18-year-old athlete who lost his leg to bone cancer and then ran a marathon a day across Canada with a prosthetic leg to raise money for research. He ran 143 days before cancer stopped him. Since 1981: over C$1 billion raised, runs in 60+ countries.",
        pt: { question: 'Quem é a Terry Fox Foundation?', answer: 'Uma fundação criada em honra a Terry Fox — um atleta que perdeu a perna ao câncer ósseo aos 18 anos e depois correu uma maratona por dia pelo Canadá com prótese para arrecadar para a pesquisa. Ele correu 143 dias antes que o câncer o parasse. Desde 1981: mais de C$ 1 bilhão arrecadados, corridas em mais de 60 países.' },
        es: { question: '¿Quién es la Terry Fox Foundation?', answer: 'Una fundación creada en honor a Terry Fox — un atleta que perdió su pierna por cáncer de huesos a los 18 años y luego corrió una maratón al día por Canadá con una prótesis para recaudar fondos para la investigación. Corrió 143 días antes de que el cáncer lo detuviera. Desde 1981: más de C$1.000 millones recaudados, carreras en más de 60 países.' },
        fr: { question: "Qui est la Terry Fox Foundation?", answer: "Une fondation créée en l'honneur de Terry Fox — un athlète qui a perdu sa jambe à cause d'un cancer des os à 18 ans, puis a couru un marathon par jour à travers le Canada avec une prothèse pour collecter des fonds pour la recherche. Il a couru 143 jours avant que le cancer ne l'arrête. Depuis 1981 : plus de 1 milliard de dollars canadiens collectés, des courses dans plus de 60 pays." },
        ca: { question: 'Qui és la Terry Fox Foundation?', answer: "Una fundació creada en honor de Terry Fox — un atleta que va perdre la seva cama per un càncer d'ossos als 18 anys i després va córrer una marató al dia per tot el Canadà amb una pròtesi per recaptar fons per a la recerca. Va córrer 143 dies abans que el càncer l'aturés. Des del 1981: més de 1.000 milions de dòlars canadencs recaptats, curses en més de 60 països." },
      },
      {
        question: 'Does the money pass through you?',
        answer: 'No. Every donation goes directly to the Terry Fox Foundation — one of the most audited and transparent cancer research organizations in the world. Nothing passes through me. I am a runner, not a middleman.',
        pt: { question: 'O dinheiro passa por você?', answer: 'Não. Cada doação vai diretamente para a Terry Fox Foundation — uma das organizações de pesquisa do câncer mais auditadas e transparentes do mundo. Nada passa por mim. Eu sou um corredor, não um intermediário.' },
        es: { question: '¿El dinero pasa por ti?', answer: 'No. Cada donación va directamente a la Terry Fox Foundation — una de las organizaciones de investigación del cáncer más auditadas y transparentes del mundo. Nada pasa por mí. Soy un corredor, no un intermediario.' },
        fr: { question: "L'argent passe-t-il par vous?", answer: "Non. Chaque don va directement à la Terry Fox Foundation — l'une des organisations de recherche sur le cancer les plus auditées et transparentes au monde. Rien ne passe par moi. Je suis un coureur, pas un intermédiaire." },
        ca: { question: 'Els diners passen per tu?', answer: "No. Cada donació va directament a la Terry Fox Foundation — una de les organitzacions d'investigació del càncer més auditades i transparents del món. Res passa per mi. Soc un corredor, no un intermediari." },
      },
    ],
    roadmap: [
      { phase: '01', label: 'Launch', description: 'First runs, first episodes, first donors. The Marathon of Hope is live.', year: '2026', status: 'active' },
      { phase: '02', label: 'South America', description: 'Corporate partnerships and running community across Brazil, Argentina, Chile and Colombia.', year: '2026', status: 'upcoming' },
      { phase: '03', label: 'North America', description: 'Terry Fox Run integration. University endowments and tech company matching programs in the US and Canada.', year: '2027', status: 'upcoming' },
      { phase: '04', label: 'Europe', description: 'International NGO alliances and research institute co-funding across the UK, Germany and France.', year: '2027', status: 'upcoming' },
      { phase: '05', label: 'Global', description: 'A truly planetary initiative — 60+ countries, millions raised, and a generation inspired to run for a cure.', year: '2028', status: 'upcoming' },
    ],
    impactMetrics: [
      { value: '8', label: 'Days Running', sublabel: 'of 100 planned' },
      { value: '52', label: 'Miles Covered', sublabel: 'of 1,000' },
      { value: '4', label: 'Episodes', sublabel: 'EN + PT' },
      { value: '3', label: 'Continents', sublabel: 'Americas · Europe · Asia' },
      { value: '1K+', label: 'People Inspired', sublabel: 'across platforms' },
      { value: '0', label: 'USD Raised', sublabel: 'first tier: US$10K' },
    ],
    transparency: [
      { percent: 78, category: 'Research', detail: 'Directed to cancer scientists via the Terry Fox Foundation — verified annually by independent auditors.' },
      { percent: 14, category: 'Operations', detail: 'Platform, logistics, equipment, and project coordination.' },
      { percent: 8, category: 'Communication', detail: 'Content production, social channels, and public outreach.' },
    ],
    benefits: [
      { type: 'company', title: 'Brand Visibility', description: 'Logo on all project materials, episode thumbnails, social posts, and live run videos.' },
      { type: 'company', title: 'ESG Impact Report', description: 'Quarterly reports with certified metrics for sustainability portfolios and B Corp filings.' },
      { type: 'company', title: 'Employee Engagement', description: 'Branded running challenges and donation-matching programs for your entire team.' },
      { type: 'company', title: 'Social Media Exposure', description: 'Co-branded posts and stories reaching audiences across the Americas, Europe, and Asia.' },
      { type: 'company', title: 'Speaking Opportunities', description: 'Invitations to project events, partner summits, and cancer research showcases.' },
      { type: 'company', title: 'Exclusive Impact Updates', description: 'Direct access to research outcomes, funding milestones, and impact data before public release.' },
      { type: 'individual', title: 'Your Name on the Project', description: 'Listed as a supporter on the project page — a permanent record of your contribution.' },
      { type: 'individual', title: 'Part of the Story', description: 'Every mile and every donation is documented. Your support becomes part of the public record of this project.' },
    ],
    pt: {
      tagline: 'Correndo por uma cura.',
      shortDescription: 'Uma campanha de arrecadação para financiar pesquisas contra o câncer — cada milha importa.',
      fullDescription: `1k Miles of Hope é uma iniciativa de arrecadação criada para apoiar a pesquisa contra o câncer através da Terry Fox Foundation — um dos programas de pesquisa em câncer mais impactantes do mundo.

O objetivo é simples: correr 1.000 milhas e arrecadar fundos que vão diretamente para financiar pesquisas científicas voltadas a encontrar uma cura. Cada quilômetro se traduz em recursos reais para cientistas reais trabalhando em descobertas reais.

O câncer toca quase todas as famílias. Esta campanha é uma forma de transformar movimento em significado — fazer com que cada corrida, cada milha e cada passo conte para algo maior do que a linha de chegada.

Se você quiser contribuir, toda doação faz diferença.`,
      tags: ['Impacto Social', 'Saúde', 'Corrida'],
    },
    es: {
      tagline: 'Corriendo por una cura.',
      shortDescription: 'Una campaña de recaudación para financiar la investigación contra el cáncer — cada milla importa.',
      fullDescription: `1k Miles of Hope es una iniciativa de recaudación creada para apoyar la investigación contra el cáncer a través de la Terry Fox Foundation — uno de los programas de investigación oncológica más impactantes del mundo.

El objetivo es simple: correr 1.000 millas y recaudar fondos que van directamente a financiar investigación científica orientada a encontrar una cura. Cada kilómetro se traduce en recursos reales para científicos reales que trabajan en descubrimientos reales.

El cáncer toca casi todas las familias. Esta campaña es una forma de convertir el movimiento en significado — hacer que cada carrera, cada milla y cada paso cuente para algo más grande que la línea de meta.

Si quieres contribuir, cada donación hace la diferencia.`,
      tags: ['Impacto Social', 'Salud', 'Carrera'],
    },
    fr: {
      tagline: 'Courir pour un remède.',
      shortDescription: 'Une campagne de collecte de fonds pour financer la recherche contre le cancer — chaque mille compte.',
      fullDescription: `1k Miles of Hope est une initiative de collecte de fonds créée pour soutenir la recherche contre le cancer à travers la Terry Fox Foundation — l\'un des programmes de recherche oncologique les plus impactants au monde.

L\'objectif est simple : courir 1 000 miles et collecter des fonds qui vont directement financer la recherche scientifique visant à trouver un remède. Chaque kilomètre se traduit en ressources réelles pour de vrais scientifiques travaillant sur de vraies avancées.

Le cancer touche presque toutes les familles. Cette campagne est une façon de transformer le mouvement en sens — de faire compter chaque course, chaque mile et chaque pas pour quelque chose de plus grand que la ligne d\'arrivée.

Si vous souhaitez contribuer, chaque don fait la différence.`,
      tags: ['Impact Social', 'Santé', 'Course'],
    },
    ca: {
      tagline: 'Corrent per una cura.',
      shortDescription: 'Una campanya de recaptació per finançar la recerca contra el càncer — cada milla compta.',
      fullDescription: `1k Miles of Hope és una iniciativa de recaptació creada per donar suport a la recerca contra el càncer a través de la Terry Fox Foundation — un dels programes de recerca oncològica més impactants del món.

L\'objectiu és simple: córrer 1.000 milles i recaptar fons que van directament a finançar recerca científica orientada a trobar una cura. Cada quilòmetre es tradueix en recursos reals per a científics reals que treballen en descobertes reals.

El càncer toca gairebé totes les famílies. Aquesta campanya és una manera de convertir el moviment en significat — fer que cada cursa, cada milla i cada pas compti per a alguna cosa més gran que la línia d\'arribada.

Si vols contribuir, cada donació fa la diferència.`,
      tags: ['Impacte Social', 'Salut', 'Cursa'],
    },
  },
]

export function getChallenge(slug: string): Challenge | undefined {
  return CHALLENGES.find((c) => c.id === slug)
}

export function getLocalizedChallenge(challenge: Challenge, locale: string): Challenge {
  const t = locale === 'pt' ? challenge.pt
    : locale === 'es' ? challenge.es
    : locale === 'fr' ? challenge.fr
    : locale === 'ca' ? challenge.ca
    : undefined
  return t ? { ...challenge, ...t } : challenge
}
