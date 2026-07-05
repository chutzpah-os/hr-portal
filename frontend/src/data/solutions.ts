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
    fr: {
      tagline: 'Donner le pouvoir aux jeunes grâce aux langues.',
      shortDescription: 'Apprentissage des langues avec une formule propriétaire conçue pour transformer l\'ambition en fluidité mesurable.',
      fullDescription: `HofShiLang est un produit d\'apprentissage des langues construit autour d\'une formule propriétaire — pas un curriculum générique, mais une méthode structurée qui trace le chemin de l\'ambition aux résultats mesurables.

L\'insight central : la plupart des apprenants plafonnent parce qu\'ils suivent l\'effort (heures étudiées, leçons complétées) plutôt que les progrès (ce qu\'ils peuvent réellement faire). HofShiLang change le cadre. Chaque apprenant a un objectif CECRL clair, un contrat d\'engagement hebdomadaire et des objectifs d\'interaction réels qui construisent vers la fluidité.

Au-delà du produit, HofShiLang fonctionne comme une initiative éducative. Grâce à des partenariats avec des programmes jeunesse, il apporte l\'accès aux langues dans des communautés où le multilinguisme est un chemin direct vers l\'opportunité économique.

La formule : input structuré + output dans le monde réel + boucles de responsabilité. Le résultat : des apprenants qui n\'étudient pas seulement une langue — ils commencent à l\'utiliser.`,
      metrics: [
        { label: 'Cadre', value: 'Aligné CECRL' },
        { label: 'Focus', value: 'Jeunesse' },
        { label: 'Modèle', value: 'Produit + Initiative' },
      ],
      tags: ['R&D', 'Logiciel', 'Éducation'],
    },
    ca: {
      tagline: 'Empoderant els joves a través de les llengües.',
      shortDescription: 'Aprenentatge d\'idiomes amb una fórmula pròpia dissenyada per convertir l\'ambició en fluïdesa mesurable.',
      fullDescription: `HofShiLang és un producte d\'aprenentatge d\'idiomes construït al voltant d\'una fórmula pròpia — no un currículum genèric, sinó un mètode estructurat que traça el camí de l\'ambició als resultats mesurables.

L\'insight central: la majoria dels aprenents s\'estanquen perquè fan seguiment de l\'esforç (hores estudiades, lliçons completades) en lloc del progrés (el que realment són capaços de fer). HofShiLang canvia el marc. Cada aprenent té un objectiu clar en el MECR, un contracte setmanal de compromís i objectius d\'interacció en el món real que construeixen cap a la fluïdesa.

Més enllà del producte, HofShiLang opera com una iniciativa educativa. A través d\'aliances amb programes juvenils, porta l\'accés als idiomes a comunitats on el multilingüisme és un camí directe cap a l\'oportunitat econòmica.

La fórmula: input estructurat + output en el món real + cicles de responsabilitat. El resultat: aprenents que no només estudien un idioma — comencen a usar-lo.`,
      metrics: [
        { label: 'Marc', value: 'Alineat al MECR' },
        { label: 'Focus', value: 'Joventut' },
        { label: 'Model', value: 'Producte + Iniciativa' },
      ],
      tags: ['R+D', 'Programari', 'Educació'],
    },
  },
]

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === slug)
}
