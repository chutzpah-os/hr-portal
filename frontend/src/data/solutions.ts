export type SolutionStatus =
  | 'Idea / Problem Discovery'
  | 'Problem-Solution Fit'
  | 'MVP (Build Fast, Test Fast)'
  | 'Early Users / Initial Traction'
  | 'Product-Market Fit (PMF)'
  | 'Growth'
  | 'Scale'
export type SolutionGroup = 'PSF' | 'Chutzpah Stealth' | 'Chutzpah Flags' | 'Chutzpah Code' | 'Chutzpah Verde'

export interface Solution {
  id: string
  group: SolutionGroup
  title: string
  problemTitle: string
  problem: string
  approach: string
  role: string
  startDate: string
  endDate: string | null
  deadline: string
  status: SolutionStatus
  impact: string
  resultsNow: string[]
  tags: string[]
  link?: string
}

export const SOLUTIONS: Solution[] = [
  // ─── PSF ──────────────────────────────────────────────────────────────────
  {
    id: 'psf-foundation',
    group: 'PSF',
    title: 'Problem Solver Foundation',
    problemTitle: 'Fragmented global problem-solving with low cross-discipline coordination',
    problem:
      'Many of the world\'s most critical challenges are addressed in isolation by disconnected organizations, researchers, and institutions. This fragmentation reduces efficiency, slows innovation, and limits the ability to generate scalable, coordinated solutions for high-impact global problems.',
    approach:
      'Built a collaborative ecosystem that connects researchers, technologists, and institutions into coordinated problem-solving networks. The foundation acts as a structured platform for identifying critical global challenges, organizing talent and resources, and enabling the development and scaling of innovative solutions with measurable impact.',
    role: 'Founder',
    startDate: 'Jan 2026',
    endDate: null,
    deadline: 'Ongoing (long-term foundation initiative)',
    status: 'Early Users / Initial Traction',
    impact: 'Target: connect 1 billion problem-solvers across disciplines, geographies, and sectors by 2035.',
    resultsNow: [
      'Foundation concept defined and structured',
      'Public-facing website launched',
      'Core mission and positioning established',
    ],
    tags: ['Social', 'Strategy', 'Global Impact'],
    link: 'https://problemsolverfoundation.vercel.app/',
  },
  {
    id: 'psf-cancer',
    group: 'PSF',
    title: 'Fighting Cancer Now',
    problemTitle: 'Insufficient funding and public engagement for cancer research',
    problem:
      'Cancer research continues to face funding constraints and limited sustained public engagement. While awareness exists, there is a gap in converting emotional impact into structured, continuous financial support for research advancement.',
    approach:
      'Create an integrated fundraising ecosystem: a 1,000-mile running challenge broadcast on social media, a book documenting the journey and mission, and a documentary film to expand reach and global awareness. Together, these components convert physical endurance and storytelling into sustained financial support for cancer research.',
    role: 'Founder & Athlete',
    startDate: '2026',
    endDate: null,
    deadline: 'TBD (aligned with training cycle, media production, and fundraising rollout phases)',
    status: 'Idea / Problem Discovery',
    impact: 'Multi-channel fundraising ecosystem targeting sustained financial support for cancer research through endurance sport, publishing, and documentary film.',
    resultsNow: [
      'Core concept defined (1,000-mile challenge + fundraising ecosystem)',
      'Narrative structure identified (run, book, documentary)',
    ],
    tags: ['Social', 'Health', 'Fundraising', 'Media'],
  },

  // ─── Chutzpah Stealth ────────────────────────────────────────────────────
  {
    id: 'stealth-sentinel',
    group: 'Chutzpah Stealth',
    title: 'Sentinel AI',
    problemTitle: 'Fragmented and non-scalable real-time computer vision pipeline',
    problem:
      'Current computer vision implementations are often isolated, model-specific, and lack a unified architecture for real-time processing, deployment, and monitoring. This creates limitations in scalability, latency handling, and system extensibility when integrating multiple AI models and data streams.',
    approach:
      'Design and implement a modular, pipeline-based computer vision system in Python that standardizes input/output processing across models, integrates YOLO and TensorFlow for detection tasks, and exposes results through a JavaScript-based management interface for monitoring, control, and visualization.',
    role: 'Technical Lead',
    startDate: '2025',
    endDate: null,
    deadline: '2027 Q2 — validate with 10 users, acquire first early customers (target: 1K users)',
    status: 'MVP (Build Fast, Test Fast)',
    impact: 'Target: 1K users by 2027 Q2. Serving enterprise security, industrial monitoring, and defense operators.',
    resultsNow: [
      'Core Python backend structure established',
      'OpenCV pipeline implemented for image/video processing',
      'Initial YOLO integration configured',
      'Basic frontend structure for landing page and system management',
    ],
    tags: ['Technical', 'AI/ML', 'Computer Vision', 'Defense'],
  },
  {
    id: 'stealth-etz',
    group: 'Chutzpah Stealth',
    title: 'Etz',
    problemTitle: 'Fragmented intelligence and decision-support across corporate and defense domains',
    problem:
      'Organizations operating in complex environments lack a unified system to consolidate, process, and interpret multi-source intelligence data. Existing solutions are fragmented and non-interoperable, limiting operational efficiency and situational awareness.',
    approach:
      'Build a modular intelligence pipeline architecture with multi-source data ingestion and normalization, role-based access control, and domain segmentation. MVP focused on a single validated corporate use case, expanding iteratively after validation into dual-use civil and defense applications.',
    role: 'Product Architect',
    startDate: '2025',
    endDate: null,
    deadline: '2027 Q2 — validate with 1 corporate user, target 10 corporate users',
    status: 'Idea / Problem Discovery',
    impact: 'Target: 10 corporate users by 2027 Q2. Designed for institutions with 5,000+ employees.',
    resultsNow: [
      'Concept defined',
      'Dual-use system architecture (civil + defense) scoped',
    ],
    tags: ['Technical', 'Intelligence', 'Enterprise', 'Defense'],
  },
  {
    id: 'stealth-seder',
    group: 'Chutzpah Stealth',
    title: 'Seder Koah',
    problemTitle: 'Fragmented internal coordination in defense organizations',
    problem:
      'Defense and security organizations often operate with fragmented internal systems for coordination, resource allocation, and operational management. Many institutions still manage critical information through paper-based processes, increasing inefficiencies, delaying decisions, and limiting unified situational awareness across units.',
    approach:
      'Design a modular internal management system that centralizes operational workflows, enables structured communication between units, and provides real-time visibility over resources and activities — built with hierarchical access control, audit logs, and scalable architecture for defense-grade environments.',
    role: 'Systems Architect',
    startDate: '2025',
    endDate: null,
    deadline: '2027 Q3 — MVP definition and initial validation with first institutional user',
    status: 'Idea / Problem Discovery',
    impact: 'Target: first institutional validation by 2027 Q3. Designed for defense and security organizations.',
    resultsNow: [
      'Concept defined',
      'Architecture requirements scoped for defense-grade environments',
    ],
    tags: ['Technical', 'Defense', 'Operations', 'Systems'],
  },

  // ─── Chutzpah Code ──────────────────────────────────────────────────────
  {
    id: 'flags-hofshilang',
    group: 'Chutzpah Flags',
    title: 'HofShiLang',
    problemTitle: 'Brazilians study for years and still can\'t speak — the fluency trap',
    problem:
      'Despite high demand and recognized professional benefits, only ~5% of Brazil\'s population has basic English knowledge and roughly 1% is genuinely fluent. Traditional schools focus on grammar over communication. Apps like Duolingo are engaging but never lead to real speaking ability. Cost and rigid schedules exclude millions, especially in the Northeast. A deep cultural pressure to "speak like a native" creates fear of mistakes, blocking natural output.',
    approach:
      'A Brazilian language learning platform built on the Natural Acquisition method — prioritizing conversation and cultural immersion over grammar. Freemium model: core methodology content is free to attract volume, while the critical monetization layer is live small-group Conversation Clubs (paid subscription). Counter-positioning: free core content that traditional schools cannot replicate without destroying their business model.',
    role: 'Co-Founder',
    startDate: '2025',
    endDate: null,
    deadline: '2027 Q2 (1K customers) → 2027 Q4 (10K customers) → 2035 (750K young learners)',
    status: 'Problem-Solution Fit',
    impact: 'Target: 10,000 customers achieving genuine fluency by end of 2027. Starting in Sergipe/Northeast Brazil, scaling nationally and globally.',
    resultsNow: [
      'LLF methodology documented and released (dual-language EN/PT ebook + landing page)',
      'Multilingual vocabulary base of 200 words across 7 languages structured',
      'Anki flashcard sets under development',
      'Instagram content strategy defined (30-day calendar)',
      '50+ students with documented progress reported',
    ],
    tags: ['Product', 'EdTech', 'Language', 'Brazil'],
  },
  {
    id: 'flags-cherut',
    group: 'Chutzpah Code',
    title: 'Cherut',
    problemTitle: 'Chronic inconsistency in goal-directed behavior among young adults',
    problem:
      'Young adults aged 18–35 in the US and Latin America experience measurable declines in well-being and structured life outcomes despite high access to information. In the US, under-30s now rank among the least happy populations internationally. ~25% of young people in Latin America are neither studying nor working. While young adults articulate clear aspirations, psychological stress, economic uncertainty, and social fragmentation impede the translation of intention into consistent, observable action.',
    approach:
      'A data-driven habit and execution platform that tracks daily behavior and goal adherence in real time, identifies execution gaps using behavioral analytics, provides adaptive routines and personalized feedback loops, and uses AI to predict inconsistency patterns and recommend interventions.',
    role: 'Co-Founder',
    startDate: '2025',
    endDate: null,
    deadline: 'MVP in 7 days; v1 scalable release in 6 months',
    status: 'Idea / Problem Discovery',
    impact: 'Target: MVP with 10 users; impact 1,000 users in 6 months.',
    resultsNow: [
      'Problem and target audience defined',
      'Initial product concept and architecture defined',
      'Landing page deployed',
      'Early validation phase (qualitative insights)',
    ],
    tags: ['Product', 'HealthTech', 'AI', 'Productivity'],
    link: 'https://cherut-web.vercel.app/',
  },
  {
    id: 'verde-agrifood',
    group: 'Chutzpah Verde',
    title: 'Chutzpah Verde',
    problemTitle: 'Inefficient agricultural supply chain caused by price volatility, intermediary dependency, and lack of distributed logistics and storage',
    problem:
      'Agricultural markets suffer from unstable pricing and low predictability for producers, driven by sudden market fluctuations and weak demand forecasting. At the same time, consumers face inflated prices due to multiple intermediary layers between production and consumption. Logistics and storage are highly centralized, creating inefficiencies in distribution speed, cost, and flexibility.',
    approach:
      'Design a four-layer decentralized ecosystem integrating intelligence, commerce, logistics, and storage into a unified agricultural operating system: Eden (pricing intelligence + demand forecasting for producers), Consumer Platform (direct producer-to-consumer marketplace), Courier Layer (decentralized last-mile delivery network), and Storage Layer (distributed micro-storage network using individual homes and local spaces).',
    role: 'Founder & Product Architect',
    startDate: '2026',
    endDate: null,
    deadline: 'Q2 2027: MVP with 10 customers · Q4 2027: Scale to 1,000 users',
    status: 'Idea / Problem Discovery',
    impact: 'Target: 1,000 users by Q4 2027. Connecting rural producers, consumers, couriers, and micro-storage operators into a single decentralized agri-food operating system.',
    resultsNow: [
      'Multi-layer ecosystem defined (Eden, Marketplace, Courier, Storage)',
      'Core system architecture conceptualized',
    ],
    tags: ['AgriTech', 'Marketplace', 'Logistics', 'Strategy'],
  },
  {
    id: 'flags-clubinho',
    group: 'Chutzpah Code',
    title: 'Clubinho Co.',
    problemTitle: 'Brain Rot — the disconnect from real-life experiences',
    problem:
      'Young people are increasingly finding it difficult to live real experiences with other people and build local communities. Digital consumption replaces physical engagement, leaving individuals isolated, superficially connected, and without a natural path to discover, try, and commit to meaningful activities alongside others. Existing solutions are fragmented — hobby apps focus on a single interest, event apps offer one-time experiences, social networks remain superficial.',
    approach:
      'A platform that guides users through a natural interest cycle: define interests → discover personalized activities → try a free/trial first experience with no commitment → choose to continue or explore something new → join communities (clubinhos) of people at the same stage. For businesses and creators: publish activities, offer a trial class as a gateway, convert interested users into enrolled members, and manage their own community.',
    role: 'Co-Founder',
    startDate: '2026',
    endDate: null,
    deadline: 'MVP in 7 days',
    status: 'Idea / Problem Discovery',
    impact: 'Target: connect young people to real-life experiences and build local hobby communities. Business model: conversion engine for activity businesses and community creators.',
    resultsNow: [
      'Problem and target audience defined',
      'Platform concept and user cycle designed',
    ],
    tags: ['Product', 'Social', 'Community', 'Consumer'],
  },
]

export const GROUPS: ('All' | SolutionGroup)[] = [
  'All',
  'PSF',
  'Chutzpah Stealth',
  'Chutzpah Flags',
  'Chutzpah Code',
  'Chutzpah Verde',
]
