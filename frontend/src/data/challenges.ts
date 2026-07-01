interface ChallengeTranslation {
  tagline: string
  shortDescription: string
  fullDescription: string
  tags: string[]
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
