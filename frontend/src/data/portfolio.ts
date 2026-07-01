export * from './portfolio.types'

import type { PortfolioData } from './portfolio.types'
import { portfolioDataEn } from './portfolio.en'
import { portfolioDataPt } from './portfolio.pt'
import { portfolioDataEs } from './portfolio.es'
import { portfolioDataFr } from './portfolio.fr'
import { portfolioDataCa } from './portfolio.ca'

export function getPortfolioData(locale: string): PortfolioData {
  if (locale === 'pt') return portfolioDataPt
  if (locale === 'es') return portfolioDataEs
  if (locale === 'fr') return portfolioDataFr
  if (locale === 'ca') return portfolioDataCa
  return portfolioDataEn
}
