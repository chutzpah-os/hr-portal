// Placeholder qualification questions for the lp.hanielrolemberg.com flow.
// Edit freely — this is example content, not final copy. Reorder by moving
// entries around in LP_QUESTIONS; the video step's videoUrl is a stand-in
// until a real VSL replaces it.

export interface LpChoice {
  value: string
  label: string
}

interface LpQuestionTranslation {
  prompt: string
  placeholder?: string
  choices?: LpChoice[]
}

export interface LpQuestion {
  id: string
  active?: boolean
  type: 'text' | 'choice' | 'video'
  prompt: string
  placeholder?: string
  choices?: LpChoice[]
  videoUrl?: string
  pt?: LpQuestionTranslation
  es?: LpQuestionTranslation
  fr?: LpQuestionTranslation
  ca?: LpQuestionTranslation
}

export function getLocalizedQuestion(question: LpQuestion, locale: string): LpQuestion {
  const t = locale === 'pt' ? question.pt
    : locale === 'es' ? question.es
    : locale === 'fr' ? question.fr
    : locale === 'ca' ? question.ca
    : undefined
  return t ? { ...question, ...t } : question
}

export const LP_QUESTIONS: LpQuestion[] = [
  {
    id: 'reason',
    type: 'choice',
    prompt: 'What brings you here today?',
    choices: [
      { value: 'hiring', label: "I'm exploring hiring or working with you" },
      { value: 'learning', label: "I'm here to learn from your content" },
      { value: 'collab', label: 'I have a partnership or collaboration idea' },
      { value: 'other', label: 'Something else' },
    ],
    pt: {
      prompt: 'O que te trouxe até aqui hoje?',
      choices: [
        { value: 'hiring', label: 'Estou avaliando contratar ou trabalhar com você' },
        { value: 'learning', label: 'Estou aqui para aprender com seu conteúdo' },
        { value: 'collab', label: 'Tenho uma ideia de parceria ou colaboração' },
        { value: 'other', label: 'Outro motivo' },
      ],
    },
    es: {
      prompt: '¿Qué te trae por aquí hoy?',
      choices: [
        { value: 'hiring', label: 'Estoy evaluando contratarte o trabajar contigo' },
        { value: 'learning', label: 'Estoy aquí para aprender de tu contenido' },
        { value: 'collab', label: 'Tengo una idea de alianza o colaboración' },
        { value: 'other', label: 'Otro motivo' },
      ],
    },
    fr: {
      prompt: "Qu'est-ce qui vous amène ici aujourd'hui ?",
      choices: [
        { value: 'hiring', label: "J'envisage de vous embaucher ou de travailler avec vous" },
        { value: 'learning', label: 'Je suis ici pour apprendre de votre contenu' },
        { value: 'collab', label: "J'ai une idée de partenariat ou de collaboration" },
        { value: 'other', label: 'Autre chose' },
      ],
    },
    ca: {
      prompt: 'Què et porta aquí avui?',
      choices: [
        { value: 'hiring', label: 'Estic valorant contractar-te o treballar amb tu' },
        { value: 'learning', label: 'Sóc aquí per aprendre del teu contingut' },
        { value: 'collab', label: 'Tinc una idea d\'aliança o col·laboració' },
        { value: 'other', label: 'Un altre motiu' },
      ],
    },
  },
  {
    id: 'main_problem',
    type: 'text',
    prompt: "What's the main problem you're trying to solve right now?",
    placeholder: 'A sentence or two is plenty…',
    pt: {
      prompt: 'Qual é o principal problema que você está tentando resolver agora?',
      placeholder: 'Uma ou duas frases já ajudam…',
    },
    es: {
      prompt: '¿Cuál es el principal problema que estás intentando resolver ahora?',
      placeholder: 'Con una o dos frases alcanza…',
    },
    fr: {
      prompt: 'Quel est le principal problème que vous essayez de résoudre en ce moment ?',
      placeholder: 'Une ou deux phrases suffisent…',
    },
    ca: {
      prompt: 'Quin és el principal problema que estàs intentant resoldre ara mateix?',
      placeholder: 'Amb una o dues frases ja n\'hi ha prou…',
    },
  },
  {
    id: 'intro_video',
    type: 'video',
    // Placeholder video — swap for the real VSL later.
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    prompt: 'Before we go on, take a minute to watch this',
    pt: { prompt: 'Antes de continuar, assista a isso por um minuto' },
    es: { prompt: 'Antes de seguir, dedica un minuto a ver esto' },
    fr: { prompt: 'Avant de continuer, prenez une minute pour regarder ceci' },
    ca: { prompt: 'Abans de continuar, dedica un minut a veure això' },
  },
  {
    id: 'timeline',
    type: 'choice',
    prompt: "What's your timeline?",
    choices: [
      { value: 'now', label: 'Right now / this month' },
      { value: 'quarter', label: 'This quarter' },
      { value: 'exploring', label: 'Just exploring, no timeline yet' },
    ],
    pt: {
      prompt: 'Qual é o seu prazo?',
      choices: [
        { value: 'now', label: 'Agora / este mês' },
        { value: 'quarter', label: 'Neste trimestre' },
        { value: 'exploring', label: 'Só explorando, sem prazo ainda' },
      ],
    },
    es: {
      prompt: '¿Cuál es tu plazo?',
      choices: [
        { value: 'now', label: 'Ahora mismo / este mes' },
        { value: 'quarter', label: 'Este trimestre' },
        { value: 'exploring', label: 'Solo explorando, todavía sin plazo' },
      ],
    },
    fr: {
      prompt: 'Quel est votre délai ?',
      choices: [
        { value: 'now', label: 'Maintenant / ce mois-ci' },
        { value: 'quarter', label: 'Ce trimestre' },
        { value: 'exploring', label: "J'explore seulement, pas encore de délai" },
      ],
    },
    ca: {
      prompt: 'Quin és el teu termini?',
      choices: [
        { value: 'now', label: 'Ara mateix / aquest mes' },
        { value: 'quarter', label: 'Aquest trimestre' },
        { value: 'exploring', label: 'Només explorant, encara sense termini' },
      ],
    },
  },
  {
    id: 'company_context',
    type: 'text',
    prompt: 'What company or context are you reaching out from?',
    placeholder: 'Company name, or "personal project", etc.',
    pt: {
      prompt: 'De qual empresa ou contexto você está falando?',
      placeholder: 'Nome da empresa, ou "projeto pessoal", etc.',
    },
    es: {
      prompt: '¿Desde qué empresa o contexto te pones en contacto?',
      placeholder: 'Nombre de la empresa, o "proyecto personal", etc.',
    },
    fr: {
      prompt: 'Depuis quelle entreprise ou dans quel contexte nous contactez-vous ?',
      placeholder: 'Nom de l\'entreprise, ou "projet personnel", etc.',
    },
    ca: {
      prompt: 'Des de quina empresa o context et poses en contacte?',
      placeholder: 'Nom de l\'empresa, o "projecte personal", etc.',
    },
  },
]
