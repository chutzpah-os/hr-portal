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
  },
]

export function getChallenge(slug: string): Challenge | undefined {
  return CHALLENGES.find((c) => c.id === slug)
}

export function getLocalizedChallenge(challenge: Challenge, locale: string): Challenge {
  if (locale !== 'pt' || !challenge.pt) return challenge
  return { ...challenge, ...challenge.pt }
}
