export * from './portfolio.types'

import type { PortfolioData } from './portfolio.types'
import { portfolioDataEn } from './portfolio.en'
import { portfolioDataPt } from './portfolio.pt'

export function getPortfolioData(locale: string): PortfolioData {
  return locale === 'pt' ? portfolioDataPt : portfolioDataEn
}
