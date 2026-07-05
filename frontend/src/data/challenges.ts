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
      { id: 'iCRzdi6TlWY', lang: 'en', title: 'Haniel Rolemberg — EN Ep.1' },
      { id: '0gsa4VxkNQw', lang: 'en', title: 'Haniel Rolemberg — EN Ep.2' },
      { id: 'l-vBjkI9evE', lang: 'en', title: 'Haniel Rolemberg — EN Ep.3' },
    ],
    faqs: [
      {
        question: 'Does money raised in Brazil go to Brazilian researchers?',
        answer: 'Yes. The Terry Fox International model guarantees that every dollar raised in a given country is allocated to cancer researchers in that same country. Brazil → Brazilian researchers. No exceptions.',
        pt: { question: 'O dinheiro captado no Brasil vai para pesquisadores brasileiros?', answer: 'Sim. O modelo Terry Fox International garante que cada real arrecadado em um país específico é direcionado para pesquisadores de câncer naquele mesmo país. Brasil → pesquisadores brasileiros. Sem exceções.' },
        es: { question: '¿El dinero recaudado en Brasil va a investigadores brasileños?', answer: 'Sí. El modelo Terry Fox International garantiza que cada dólar recaudado en un país determinado se destina a los investigadores de cáncer de ese mismo país. Brasil → investigadores brasileños. Sin excepciones.' },
        fr: { question: "L'argent collecté au Brésil va-t-il aux chercheurs brésiliens?", answer: "Oui. Le modèle Terry Fox International garantit que chaque dollar collecté dans un pays donné est alloué aux chercheurs en cancérologie de ce même pays. Brésil → chercheurs brésiliens. Sans exception." },
        ca: { question: 'Els diners recaptats al Brasil van als investigadors brasilers?', answer: "Sí. El model Terry Fox International garanteix que cada dòlar recaptat en un país determinat s'assigna als investigadors de càncer d'aquell mateix país. Brasil → investigadors brasilers. Sense excepcions." },
      },
      {
        question: 'What is the fundraising goal?',
        answer: 'The initial goal is US$10,000. As the project grows, it can scale to US$50,000 → US$100,000 → US$1,000,000. Each milestone unlocks more research capacity.',
        pt: { question: 'Qual é a meta de arrecadação?', answer: 'A meta inicial é US$ 10.000. À medida que o projeto cresce, pode escalar para US$ 50.000 → US$ 100.000 → US$ 1.000.000. Cada marco libera mais capacidade de pesquisa.' },
        es: { question: '¿Cuál es la meta de recaudación?', answer: 'La meta inicial es US$10.000. A medida que el proyecto crece, puede escalar a US$50.000 → US$100.000 → US$1.000.000. Cada hito desbloquea más capacidad de investigación.' },
        fr: { question: "Quel est l'objectif de collecte de fonds?", answer: "L'objectif initial est de 10 000 USD. Au fur et à mesure que le projet se développe, il peut atteindre 50 000 USD → 100 000 USD → 1 000 000 USD. Chaque étape débloque plus de capacité de recherche." },
        ca: { question: "Quin és l'objectiu de recaptació?", answer: "L'objectiu inicial és de 10.000 USD. A mesura que el projecte creix, pot escalar fins a 50.000 USD → 100.000 USD → 1.000.000 USD. Cada fita desbloqueja més capacitat de recerca." },
      },
      {
        question: 'Can I donate if I live outside Brazil?',
        answer: 'Absolutely. The Terry Fox International model applies to every participating country — your donation supports researchers in your own country. Runs happen in over 60 countries.',
        pt: { question: 'Posso doar se moro fora do Brasil?', answer: 'Absolutamente. O modelo Terry Fox International se aplica a todos os países participantes — sua doação apoia pesquisadores no seu próprio país. As corridas acontecem em mais de 60 países.' },
        es: { question: '¿Puedo donar si vivo fuera de Brasil?', answer: 'Absolutamente. El modelo Terry Fox International aplica para todos los países participantes — tu donación apoya a los investigadores de tu propio país. Las carreras se realizan en más de 60 países.' },
        fr: { question: 'Puis-je faire un don si je vis hors du Brésil?', answer: "Absolument. Le modèle Terry Fox International s'applique à tous les pays participants — votre don soutient les chercheurs de votre propre pays. Des courses ont lieu dans plus de 60 pays." },
        ca: { question: 'Puc donar si visc fora del Brasil?', answer: 'Absolutament. El model Terry Fox International aplica a tots els països participants — la vostra donació dona suport als investigadors del vostre propi país. Les curses se celebren en més de 60 països.' },
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
        answer: "A Canadian foundation created in honor of Terry Fox, a 22-year-old athlete who ran across Canada with a prosthetic leg to raise money for cancer research after losing his leg to bone cancer at 18. Since 1981: over C$1 billion raised, runs in 60+ countries.",
        pt: { question: 'Quem é a Terry Fox Foundation?', answer: 'Uma fundação canadense criada em honra a Terry Fox, um atleta de 22 anos que tentou cruzar o Canadá com uma prótese para arrecadar dinheiro para pesquisa contra o câncer, depois de perder a perna ao câncer ósseo aos 18 anos. Desde 1981: mais de C$ 1 bilhão arrecadados, corridas em mais de 60 países.' },
        es: { question: '¿Quién es la Terry Fox Foundation?', answer: 'Una fundación canadiense creada en honor a Terry Fox, un atleta de 22 años que intentó cruzar Canadá con una prótesis para recaudar dinero para la investigación del cáncer, después de perder su pierna ante el cáncer de huesos a los 18 años. Desde 1981: más de C$1.000 millones recaudados, carreras en más de 60 países.' },
        fr: { question: "Qui est la Terry Fox Foundation?", answer: "Une fondation canadienne créée en l'honneur de Terry Fox, un athlète de 22 ans qui a tenté de traverser le Canada avec une prothèse pour collecter des fonds pour la recherche sur le cancer, après avoir perdu sa jambe à cause d'un cancer des os à 18 ans. Depuis 1981 : plus de 1 milliard de dollars canadiens collectés, des courses dans plus de 60 pays." },
        ca: { question: 'Qui és la Terry Fox Foundation?', answer: "Una fundació canadenca creada en honor de Terry Fox, un atleta de 22 anys que va intentar travessar el Canadà amb una pròtesi per recaptar diners per a la recerca del càncer, després de perdre la seva cama per un càncer d'ossos als 18 anys. Des del 1981: més de 1.000 milions de dòlars canadencs recaptats, curses en més de 60 països." },
      },
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
