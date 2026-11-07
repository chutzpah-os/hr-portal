export interface AmazonEdition {
  country: string
  domain: string
}

export interface Book {
  id: string
  title: string
  subtitle?: string
  language: string
  cover: string
  status: 'published' | 'coming-soon'
  asin?: string
  authorPageUrl?: string
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

export const AUTHOR_PAGE_URL =
  'https://www.amazon.com/stores/Haniel-Rolemberg/author/B0HQFHJNWY?ref=ap_rdr&shoppingPortalEnabled=true&ccs_id=e1bcce1f-e45f-41ce-940a-2be12f90e634'

export const BOOKS: Book[] = [
  {
    id: 'lei-da-selva',
    title: 'A Lei da Selva',
    subtitle: 'Um guia para entender o jogo do poder antes de ser engolido por ele',
    language: 'Português',
    cover: '/images/writing/lei-da-selva-cover.jpg',
    status: 'published',
    asin: 'B0HQBY3P6Y',
  },
  {
    id: 'ingles-em-seis-passos',
    title: 'Inglês em Seis Passos',
    language: 'Português',
    cover: '/images/writing/ingles-em-seis-passos-cover.jpg',
    status: 'published',
    asin: 'B098MFTL5S',
  },
  {
    id: 'pilares-da-oratoria',
    title: 'Pilares da Oratória: o seu guia da comunicação',
    subtitle: 'Um método em 12 semanas para falar com clareza, autoridade e controle em qualquer situação',
    language: 'Português',
    cover: '/images/writing/pilares-da-oratoria-cover.jpg',
    status: 'published',
    asin: 'B0HQDR7CMP',
  },
  {
    id: 'language-acquisition-formula-en',
    title: 'The Language Acquisition Formula',
    subtitle: 'Acquire any language in 12 weeks',
    language: 'English',
    cover: '/images/writing/formula-aquisicao-linguas-en-cover.jpg',
    status: 'coming-soon',
  },
  {
    id: 'formula-aquisicao-linguas-pt',
    title: 'A Fórmula de Aquisição de Línguas',
    subtitle: 'Adquira qualquer idioma em 12 semanas',
    language: 'Português',
    cover: '/images/writing/formula-aquisicao-linguas-pt-cover.jpg',
    status: 'coming-soon',
  },
]
