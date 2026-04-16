export type CVArea = 'cyber' | 'aiml' | 'data' | 'software'
export type CVAreaOrAll = CVArea | 'all'

export const ALL_AREAS: CVArea[] = ['cyber', 'aiml', 'data', 'software']

export const AREA_LABELS: Record<CVAreaOrAll, string> = {
  cyber: 'Cybersecurity',
  aiml: 'AI / ML',
  data: 'Data Engineering',
  software: 'Software Development',
  all: 'All Areas',
}
