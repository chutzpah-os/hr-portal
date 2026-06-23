export type StartupStage = 'Ideation' | 'Validation' | 'MVP' | 'Early Traction' | 'PMF' | 'Growth' | 'Scale'

export const STAGES: { label: StartupStage; color: string; bg: string }[] = [
  { label: 'Ideation',       color: 'rgba(148,163,184,1)',  bg: 'rgba(148,163,184,0.10)' },
  { label: 'Validation',     color: 'rgba(96,165,250,1)',   bg: 'rgba(96,165,250,0.10)'  },
  { label: 'MVP',            color: 'rgba(251,191,36,1)',   bg: 'rgba(251,191,36,0.10)'  },
  { label: 'Early Traction', color: 'rgba(251,146,60,1)',   bg: 'rgba(251,146,60,0.10)'  },
  { label: 'PMF',            color: 'rgba(74,222,128,1)',   bg: 'rgba(74,222,128,0.10)'  },
  { label: 'Growth',         color: 'rgba(52,211,153,1)',   bg: 'rgba(52,211,153,0.10)'  },
  { label: 'Scale',          color: 'rgba(34,211,238,1)',   bg: 'rgba(34,211,238,0.10)'  },
]

export interface Product {
  id: string
  name: string
  tagline: string
  shortDescription: string
  fullDescription: string
  metrics?: { label: string; value: string }[]
  tags: string[]
  status: StartupStage
  image?: string
  imageFit?: 'contain' | 'cover'
  modalImage?: string
  cta?: { label: string; href: string; external?: boolean }
}

export const PRODUCTS: Product[] = [
  {
    id: 'shoresh',
    name: 'Shoresh',
    tagline: 'Know who you\'re dealing with — before it\'s too late.',
    shortDescription: 'KYC and compliance intelligence platform — risk scoring, PEP screening, sanctions lists, and financial exposure in a unified C-level dashboard.',
    fullDescription: `Shoresh is a KYC and compliance intelligence platform built for financial institutions, fintechs, and any organization that needs to know exactly who they are doing business with.

The name comes from the Hebrew word for "root" — because compliance starts at the root: understanding the true identity, structure, and risk profile of every entity before a relationship begins, and monitoring it continuously afterward.

The platform consolidates what is typically scattered across multiple tools: PEP (Politically Exposed Person) screening, sanctions list matching, financial exposure estimation, AML risk scoring, and KYC dossier management. C-level and compliance officers get a single, unified view of their entire entity portfolio — with real-time alerts, risk distribution breakdowns, and pending KYC queues surfaced automatically.

At its core, Shoresh is built around three principles: visibility (nothing hidden in a spreadsheet), accountability (every alert logged and tracked), and speed (risk decisions made with the right information, fast).

Built for regulated environments where getting this wrong isn't an option.`,
    metrics: [
      { label: 'Core', value: 'KYC · AML · Compliance' },
      { label: 'View', value: 'C-Level Dashboard' },
      { label: 'Stack', value: 'Data · AI/ML' },
    ],
    tags: ['R&D', 'Software', 'Compliance', 'Fintech'],
    status: 'MVP',
    image: '/images/shoresh-cover.png',
    imageFit: 'cover',
  },
  {
    id: 'cherut',
    name: 'Cherut',
    tagline: 'Your life, running on a system.',
    shortDescription: 'Full operating system for personal productivity — OKRs, habits, calendar, and journaling in one place.',
    fullDescription: `Cherut is a life OS built for people who treat daily execution as measurable data. The name comes from the Hebrew word for freedom — because a good system doesn't constrain you, it frees you.

The premise: most productivity tools are disconnected. You track goals in one app, habits in another, calendar in a third, and reflect somewhere else entirely. Cherut unifies these layers into a single, structured operating system.

At its core: OKRs cascade into weekly priorities, which connect to daily habits and time blocks. Every evening, a short review closes the loop. Over time, you accumulate a personal dataset — not just tasks done, but patterns, energy, focus windows, and progress toward what actually matters.

Built for ambitious people who want to move faster without losing clarity on why they're moving at all.`,
    tags: ['R&D', 'Software', 'Management'],
    status: 'Ideation',
    image: '/images/cherut.png',
    imageFit: 'contain',
  },
  {
    id: 'psf-portal',
    name: 'PSF Portal',
    tagline: 'The operating system for the Problem Solvers community.',
    shortDescription: 'Internal platform for the Problem Solver Foundation — connecting members, tracking impact, and coordinating initiatives across the community.',
    fullDescription: `The PSF Portal is the internal backbone of the Problem Solver Foundation — a community on a mission to impact 1 billion lives by 2035.

The challenge: as a distributed community grows, coordination breaks down. Members lose context, initiatives lose momentum, and the mission gets diluted. The PSF Portal exists to prevent that.

At its core, the portal connects people to each other and to the work that matters. Members can find ongoing initiatives, join teams, track collective progress, and share resources. Leaders get visibility into what's moving and what's stalled.

Beyond coordination, the portal is a space for community identity — where the culture of problem-solving is documented, practiced, and passed forward.

Built to scale the mission without losing the human element.`,
    tags: ['R&D', 'Software', 'Community'],
    status: 'Ideation',
    image: '/images/psf-portal-cover.png',
    imageFit: 'cover',
  },
  {
    id: 'data-aggregator',
    name: 'Data Aggregator',
    tagline: 'Turning noise into signals — before problems become crises.',
    shortDescription: 'AI-powered platform that aggregates, processes, and surfaces data patterns to understand and anticipate complex problems across domains.',
    fullDescription: `The Data Aggregator is a research and intelligence platform built around a core premise: most problems are predictable — if you're looking at the right data.

The system pulls from heterogeneous sources (public datasets, research publications, community signals, structured feeds) and applies AI/ML pipelines to identify patterns, correlations, and early indicators across domains. The output isn't raw data — it's insight: what's emerging, why it matters, and what responses are worth exploring.

Use cases span from social impact (identifying communities at risk before crises surface) to technical research (spotting gaps in existing solutions), to organizational intelligence (understanding where initiatives stall and why).

The R&D focus is on building pipelines that are domain-agnostic but context-aware — systems that can reason about different problem classes without requiring full re-architecture for each new domain.

Built at the intersection of data engineering, machine learning, and decision intelligence.`,
    metrics: [
      { label: 'Focus', value: 'Prediction & Prevention' },
      { label: 'Stack', value: 'AI/ML · Data Engineering' },
      { label: 'Scope', value: 'Multi-domain' },
    ],
    tags: ['R&D', 'Software', 'AI/ML'],
    status: 'Ideation',
    image: '/images/datapsf1.png',
    imageFit: 'cover',
  },
  {
    id: 'seder-koah',
    name: 'Seder Koah',
    tagline: 'Structure and strength for public institutions.',
    shortDescription: 'Internal management system designed for governmental units — organizing operations, people, and processes in the public sector to generate real efficiency.',
    fullDescription: `Seder Koah is an internal management platform built specifically for governmental units and public institutions — with efficiency as its core objective.

The public sector has unique operational demands: regulatory constraints, multi-level accountability, complex organizational hierarchies, and the constant pressure to do more with limited resources. Generic management tools weren't built for this context. Seder Koah was.

The platform centralizes internal operations — team management, workflow coordination, document control, and process tracking — eliminating the redundancies and friction that drain public institutions of time and resources. The result is a leaner, faster, more accountable operation.

Built to bring order, operational clarity, and measurable efficiency to governmental units of any size, from municipal departments to larger public bodies.`,
    tags: ['R&D', 'Software', 'Government', 'Management', 'Compliance'],
    status: 'Ideation',
  },
  {
    id: 'sentinel-ai',
    name: 'Sentinel AI',
    tagline: 'Eyes that never blink. Intelligence that never sleeps.',
    shortDescription: 'Physical security platform powered by computer vision and AI — monitoring people, objects, and movements in real time.',
    fullDescription: `Sentinel AI brings machine intelligence to physical security. Where traditional surveillance records, Sentinel AI understands.

The system uses computer vision, machine learning, and data pipelines to monitor environments in real time — detecting people, tracking movement patterns, identifying objects, and surfacing anomalies before they escalate. The goal is not to replace human judgment, but to extend it: giving security teams the context they need, exactly when they need it.

Built for environments where physical security is mission-critical — from corporate campuses and critical infrastructure to public spaces that require continuous, intelligent oversight.

The foundation: CV models trained for real-world conditions, behavioral pattern recognition, and data infrastructure designed for low-latency alerting at scale.`,
    metrics: [
      { label: 'Core Tech', value: 'Computer Vision' },
      { label: 'Stack', value: 'AI/ML · Data' },
      { label: 'Focus', value: 'Physical Security' },
    ],
    tags: ['R&D', 'Software', 'AI/ML', 'Cybersecurity'],
    status: 'Ideation',
  },
  {
    id: 'shemesh',
    name: 'Shemesh',
    tagline: 'Governance that protects. Compliance that scales.',
    shortDescription: 'Corporate governance and compliance platform for mid-to-large corporations — and the startups building toward that scale.',
    fullDescription: `Shemesh is a compliance and corporate governance platform built to protect corporations from the inside out.

The premise: governance failures are rarely sudden — they accumulate quietly through gaps in process, unclear accountability, and compliance blind spots. Shemesh makes those gaps visible before they become liabilities.

Designed for medium and large corporations with the structural complexity that demands rigorous governance, and equally available to startups that want to build compliance-ready from day one rather than retrofit it later.

The platform covers corporate governance frameworks, regulatory compliance tracking, risk visibility, and accountability structures — giving leadership the confidence that the organization is protected, auditable, and aligned.

More details will be shared as the project matures.`,
    tags: ['R&D', 'Software', 'Compliance', 'Government', 'Management'],
    status: 'Ideation',
  },
  {
    id: 'etz',
    name: 'Etz',
    tagline: 'Sensitive data deserves serious protection.',
    shortDescription: 'Secure registration and management of sensitive data and assets — built on cryptographic foundations.',
    fullDescription: `Etz is a platform for the secure registration and management of sensitive data and critical assets, built for government and compliance-driven environments.

The focus is on cryptography — ensuring that sensitive information is protected at rest, in transit, and at access. Designed to meet the rigor that regulated sectors demand. More details will be shared as the project matures.`,
    tags: ['R&D', 'Software', 'Cybersecurity', 'Government', 'Compliance'],
    status: 'Ideation',
    image: '/images/etz-cover.png',
    imageFit: 'cover',
  },
  {
    id: 'hofshilang',
    name: 'HofShiLang',
    tagline: 'Empowering youth through languages.',
    shortDescription: 'Language learning with a proprietary formula designed to turn ambition into measurable fluency.',
    fullDescription: `HofShiLang is a language learning product built around a proprietary formula — not a generic curriculum, but a structured method that maps ambition to measurable outcomes.

The core insight: most learners plateau because they track effort (hours studied, lessons completed) instead of progress (what they can actually do). HofShiLang shifts the frame. Every learner has a clear CEFR target, a weekly engagement contract, and real-world interaction goals that build toward fluency.

Beyond the product, HofShiLang operates as an educational initiative. Through partnerships with youth programs, it brings language access to communities where multilingualism is a direct path to economic opportunity.

The formula: structured input + real-world output + accountability loops. The result: learners who don't just study a language — they start using it.`,
    metrics: [
      { label: 'Framework', value: 'CEFR-aligned' },
      { label: 'Focus', value: 'Youth' },
      { label: 'Model', value: 'Product + Initiative' },
    ],
    tags: ['R&D', 'Software', 'Education'],
    status: 'Ideation',
    image: '/images/hofshilang.png',
    imageFit: 'cover',
  },
]

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === slug)
}
