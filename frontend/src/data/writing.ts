export interface AmazonEdition {
  country: string
  domain: string
}

export type BookTopic = 'power' | 'communication' | 'languages'
export type BookLanguageCode = 'pt' | 'en'

export interface Book {
  id: string
  title: string
  subtitle?: string
  description: string
  language: string
  languageCode: BookLanguageCode
  topics: BookTopic[]
  cover: string
  status: 'published' | 'coming-soon'
  asin?: string
}

// Same ASIN, one storefront per country — Amazon serves the identical
// listing/edition on each domain.
const AMAZON_DOMAINS: AmazonEdition[] = [
  { country: 'US', domain: 'amazon.com' },
  { country: 'UK', domain: 'amazon.co.uk' },
  { country: 'DE', domain: 'amazon.de' },
  { country: 'FR', domain: 'amazon.fr' },
  { country: 'ES', domain: 'amazon.es' },
  { country: 'IT', domain: 'amazon.it' },
  { country: 'NL', domain: 'amazon.nl' },
  { country: 'JP', domain: 'amazon.co.jp' },
  { country: 'BR', domain: 'amazon.com.br' },
  { country: 'CA', domain: 'amazon.ca' },
  { country: 'MX', domain: 'amazon.com.mx' },
  { country: 'AU', domain: 'amazon.com.au' },
  { country: 'IN', domain: 'amazon.in' },
]

export function amazonEditionLinks(asin: string): { country: string; url: string }[] {
  return AMAZON_DOMAINS.map(({ country, domain }) => ({
    country,
    url: `https://www.${domain}/dp/${asin}`,
  }))
}

export const AUTHOR_PAGE_URL_BY_LANGUAGE: Record<BookLanguageCode, string> = {
  en: 'https://www.amazon.com/stores/Haniel-Rolemberg/author/B0HQFHJNWY?ref=ap_rdr&shoppingPortalEnabled=true&ccs_id=e1bcce1f-e45f-41ce-940a-2be12f90e634',
  pt: 'https://www.amazon.com.br/stores/Haniel-Rolemberg/author/B0HQFHJNWY?ref=ap_rdr&shoppingPortalEnabled=true',
}

export const BOOKS: Book[] = [
  {
    id: 'lei-da-selva',
    title: 'A Lei da Selva',
    subtitle: 'Um guia para entender o jogo do poder antes de ser engolido por ele',
    description: 'Um guia prático sobre poder, hierarquia e influência — como reconhecer o jogo político ao seu redor antes de ser engolido por ele.',
    language: 'Português',
    languageCode: 'pt',
    topics: ['power'],
    cover: '/images/writing/lei-da-selva-cover.jpg',
    status: 'published',
    asin: 'B0HQBY3P6Y',
  },
  {
    id: 'ingles-em-seis-passos',
    title: 'Inglês em Seis Passos',
    description: 'Um método em seis passos para aprender inglês com mais clareza e confiança.',
    language: 'Português',
    languageCode: 'pt',
    topics: ['languages'],
    cover: '/images/writing/ingles-em-seis-passos-cover.jpg',
    status: 'published',
    asin: 'B098MFTL5S',
  },
  {
    id: 'pilares-da-oratoria',
    title: 'Pilares da Oratória: o seu guia da comunicação',
    subtitle: 'Um método em 12 semanas para falar com clareza, autoridade e controle em qualquer situação',
    description: 'Um método em 12 semanas para falar com clareza, autoridade e controle em qualquer situação.',
    language: 'Português',
    languageCode: 'pt',
    topics: ['communication'],
    cover: '/images/writing/pilares-da-oratoria-cover.jpg',
    status: 'published',
    asin: 'B0HQDR7CMP',
  },
  {
    id: 'language-acquisition-formula-en',
    title: 'The Language Acquisition Formula',
    subtitle: 'Acquire any language in 12 weeks',
    description: 'A 12-week system to acquire any language.',
    language: 'English',
    languageCode: 'en',
    topics: ['languages'],
    cover: '/images/writing/formula-aquisicao-linguas-en-cover.jpg',
    status: 'published',
    asin: 'B0HQXZPVZM',
  },
  {
    id: 'formula-aquisicao-linguas-pt',
    title: 'A Fórmula de Aquisição de Línguas',
    subtitle: 'Adquira qualquer idioma em 12 semanas',
    description: 'Um sistema de 12 semanas para adquirir qualquer idioma.',
    language: 'Português',
    languageCode: 'pt',
    topics: ['languages'],
    cover: '/images/writing/formula-aquisicao-linguas-pt-cover.jpg',
    status: 'published',
    asin: 'B0HQXPT9TJ',
  },
]
