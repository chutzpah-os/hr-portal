import type { Metadata } from 'next'
import QuestionFlow from '@/components/lp/QuestionFlow'

export const metadata: Metadata = {
  title: 'A couple quick questions — Haniel Rolemberg',
  robots: { index: false, follow: false },
}

export default function LpPage() {
  return <QuestionFlow />
}
