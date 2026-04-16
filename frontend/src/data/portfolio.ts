import type { CVArea } from '@/utils/cvAreaMap'

// ─── Type Definitions ───────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string
  title: string
  about: string[]
}

export interface ExperienceDetails {
  overview: string
  keyAreas: string[]
  technologies: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  tags: string[]
  cvAreas: CVArea[]
  details: ExperienceDetails
}

export interface EducationDetails {
  overview: string
  gpa?: string
  keyAreas?: string[]
  keyCourses?: string[]
  skillsDeveloped?: string[]
}

export interface Education {
  id: string
  title: string
  institution: string
  period: string
  description: string
  cvAreas: CVArea[]
  details: EducationDetails
}

export interface VolunteeringDetails {
  overview: string
  focusAreas?: string[]
  responsibilities?: string[]
  category: string
}

export interface Volunteering {
  id: string
  title: string
  organization: string
  period: string
  description: string
  cvAreas: CVArea[]
  details: VolunteeringDetails
}

export type ProjectCategory = 'softwareDevelopment' | 'cybersecurity' | 'dataEngineering' | 'aiml' | 'challenges'

export interface ProjectDetails {
  overview: string
  features: string[]
  techStack: string
  githubLink: string
}

export interface Project {
  id: string
  gradient: string
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  cvAreas: CVArea[]
  details: ProjectDetails
}

export interface LanguageDetails {
  description: string
  certifications: string[]
  verificationLink: string
}

export interface Language {
  id: string
  language: string
  level: string
  proficiency: number
  details: LanguageDetails
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  category: 'cloud' | 'security' | 'networking' | 'data' | 'development'
  cvAreas: CVArea[]
  credentialId?: string
  verifyUrl?: string
  tags: string[]
}

export interface SkillCategory {
  name: string
  items: string[]
  cvAreas: CVArea[]
}

export interface Research {
  id: string
  title: string
  description: string
  field: string
  status: 'in development' | 'published' | 'under review'
  cvAreas: CVArea[]
  link?: string
}

export interface PortfolioData {
  personal: PersonalInfo
  experience: Experience[]
  education: Education[]
  volunteering: Volunteering[]
  skills: SkillCategory[]
  languages: Language[]
  projects: Record<ProjectCategory, Project[]>
  certifications: Certification[]
  researches: Research[]
}

// ─── Portfolio Data ──────────────────────────────────────────────────────────

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Haniel Rolemberg',
    title: 'Problem Solver',
    about: [
      "I'm a Problem Solver — someone who turns challenges into opportunities through technology, strategy, and purpose.",
      'Over the past years, I\'ve been working across software development, data systems, and cybersecurity, building solutions that go beyond code — solutions that protect, empower, and transform. I believe every problem is an invitation to create something meaningful.',
      'My mission is clear: to impact 1 billion lives by 2035 (1b2035) through innovation, education, and intelligent problem-solving. That\'s the driving force behind the Problem Solver Foundation, an initiative that equips people to face complexity, think critically, and act with purpose.',
    ],
  },

  experience: [
    {
      id: 'exp1',
      title: 'ML & Data Engineer',
      company: 'Tech',
      period: '2024 - 2025',
      description:
        'Integrating data engineering and machine learning to deliver predictive insights that drive efficiency and innovation.',
      tags: ['Apache Airflow', 'Apache Spark', 'TensorFlow', 'BigQuery'],
      cvAreas: ['data', 'aiml'],
      details: {
        overview:
          'Integrating data engineering and machine learning to deliver predictive insights that drive efficiency and innovation.',
        keyAreas: [
          'Building scalable data pipelines with Apache Airflow and Apache Spark',
          'Developing machine learning models using TensorFlow',
          'Managing and optimizing BigQuery data warehouses',
          'Implementing predictive analytics solutions',
        ],
        technologies: 'Apache Airflow, Apache Spark, TensorFlow, BigQuery, Python',
      },
    },
    {
      id: 'exp2',
      title: 'Cybersecurity Engineer',
      company: 'Tech',
      period: '2022 - 2025',
      description:
        'Designing and securing enterprise network infrastructures with advanced firewall management, zero-trust policies, and cybersecurity automation.',
      tags: ['SIEM/SOAR', 'Network Infrastructure', 'Security Hardening', 'Virtualization'],
      cvAreas: ['cyber'],
      details: {
        overview:
          'Designing and securing enterprise network infrastructures with advanced firewall management, zero-trust policies, and cybersecurity automation.',
        keyAreas: [
          'Implementing SIEM/SOAR solutions for threat detection and response',
          'Managing network infrastructure with Cisco, HP, FortiNet Next Generation Firewalls, SDWAN, VLAN, VoIP, VPN, and VPS',
          'Virtualization with VMware vSphere and Hyper-V in on-premises environments',
          'Managing Windows/Linux Servers with security hardening and backup solutions (Veeam)',
          'Conducting penetration testing and implementing zero-trust architecture',
          'Automating security workflows and incident response procedures',
        ],
        technologies:
          'SIEM/SOAR, VMware vSphere, Hyper-V, Cisco, HP, FortiNet, Next Generation Firewall, SDWAN, VLAN, Veeam, Windows/Linux Servers, VoIP, VPN, VPS, IAM, Penetration Testing, Security Hardening',
      },
    },
    {
      id: 'exp3',
      title: 'Software Engineer',
      company: 'Tech',
      period: '2021 - 2024',
      description: 'Developed full-stack web applications and APIs for various clients.',
      tags: ['Java', 'Go', 'Python', 'JavaScript'],
      cvAreas: ['software'],
      details: {
        overview: 'Developed full-stack web applications and APIs for various clients.',
        keyAreas: [
          'Building modern web applications with JavaScript and React',
          'Developing backend services with Node.js',
          'Creating RESTful APIs and integrating third-party services',
          'Implementing responsive user interfaces',
          'Participating in agile development processes',
        ],
        technologies: 'JavaScript, React, Node.js, Java, Expo, Python, Go',
      },
    },
  ],

  education: [
    {
      id: 'edu1',
      title: "Bachelor's Degree in Computer Science",
      institution: 'Estácio',
      period: '2022',
      description:
        'AI, computer systems, networks, security, databases, HCI, programming languages, software engineering, and cybersecurity',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview: 'Comprehensive computer science education covering the full spectrum of modern computing.',
        keyAreas: [
          'Artificial Intelligence and Machine Learning',
          'Computer Systems and Networks',
          'Security and Cybersecurity',
          'Database Systems',
          'Human-Computer Interaction',
          'Software Engineering and Programming Languages',
          'Bioinformatics and Theory of Computing',
        ],
      },
    },
    {
      id: 'edu2',
      title: 'Bachelor\'s Degree in Public Administration',
      institution: 'Estácio',
      period: '2017 - 2019 • GPA: 4.97/5',
      description:
        'Democratic Theory, Economics, International Politics, Governance, Public Finance, Constitutional Law, Strategic Planning',
      cvAreas: [],
      details: {
        overview:
          'Strong foundation in governance, policy, and strategic management with excellent academic performance.',
        gpa: '4.97/5.0',
        keyCourses: [
          'Democratic Theory and Governance',
          'Money, Markets and Economic Policies',
          'International Politics',
          'Public Finance and Constitutional Law',
          'Comparative Politics',
          'General and Public Accounting',
          'Strategic Planning and Social Change',
        ],
      },
    },
    {
      id: 'edu3',
      title: 'Junior Cybersecurity Analyst Career Path',
      institution: 'Cisco Networking Academy',
      period: '2024 - 2025',
      description:
        'Network monitoring, threat detection, SIEM, IDS, penetration testing, incident response, and forensics',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Comprehensive cybersecurity training covering network defense, threat detection, and incident response.',
        skillsDeveloped: [
          'Security Information and Event Management (SIEM)',
          'Intrusion Detection Systems (IDS)',
          'Penetration Testing and Vulnerability Assessment',
          'Malware Analysis and Incident Response',
          'Network Security and Hardening',
          'Firewall, Cloud Security, and Cryptography',
          'Forensic Investigations and Risk Management',
        ],
      },
    },
    {
      id: 'edu4',
      title: 'Ethical Hacker',
      institution: 'Cisco Networking Academy',
      period: '2023',
      description:
        'Ethical hacking, penetration testing, vulnerability assessment with Kali Linux and pentesting tools',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Hands-on expertise in ethical hacking, penetration testing, and vulnerability assessment.',
        skillsDeveloped: [
          'Security Monitoring and Penetration Testing',
          'Ethical Hacking Methodologies',
          'Kali Linux and WebSploit Tools',
          'Vulnerability Assessment (Applications, Networks, IoT)',
          'Social Engineering and Security Reporting',
          'Legal and Compliance Best Practices',
          'Python and Bash for Security Automation',
        ],
      },
    },
    {
      id: 'edu5',
      title: 'Network Technician Career Path',
      institution: 'Cisco Networking Academy',
      period: '2023',
      description:
        'Cisco devices, network protocols, IPv4/IPv6 addressing, network troubleshooting, and wireless access',
      cvAreas: ['cyber'],
      details: {
        overview: 'Comprehensive networking skills for network design, troubleshooting, and support.',
        skillsDeveloped: [
          'Cisco Devices, IOS, Routers and Switches',
          'IPv4 and IPv6 Addressing',
          'Network Layer and Transport Layer Protocols',
          'Copper and Fiber Cabling',
          'Network Troubleshooting and Support',
          'Hierarchical Network Design',
          'Cloud Services and Wireless Access',
        ],
      },
    },
  ],

  volunteering: [
    {
      id: 'vol1',
      title: 'Community Organizer',
      organization: 'Problem Solvers Foundation',
      period: 'Sep 2025 - Present',
      description: 'Building a community on a mission to impact 1 billion lives by 2035',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview:
          "We are the problem solver's foundation — a community on a mission to impact 1 billion lives by 2035.",
        focusAreas: [
          'Innovation and Technology Education',
          'Critical Thinking and Problem-Solving Training',
          'Community Building and Collaboration',
          'Empowering People to Face Complexity with Purpose',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol2',
      title: 'Community Leader',
      organization: 'GDG Aracaju',
      period: 'Oct 2023 - Nov 2024',
      description: 'Leading a team of 25+ volunteers to empower 300+ tech professionals and enthusiasts',
      cvAreas: ['software'],
      details: {
        overview:
          "The Google Developer Group Aracaju is an independent, non-profit community supported by Google through its Developer Groups program. Our mission is to empower both entry-level tech enthusiasts and experienced professionals by providing mentorship and sharing valuable resources.",
        responsibilities: [
          'Project and Process Management',
          'Leading a team of 25+ volunteers',
          'Community engagement with 300+ active members',
          'Organizing tech events and workshops',
          'Mentorship and resource sharing',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol3',
      title: 'Volunteer Staff',
      organization: 'Rotary International',
      period: 'Oct 2022 - Sep 2023',
      description: 'Contributing to environmental protection, health, education, and peace initiatives',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview:
          "Contributing to Rotary International's mission to create lasting change in communities worldwide.",
        focusAreas: [
          'Environmental Protection',
          'Mother and Child Health',
          'Supporting Education',
          'Economic Development',
          'Promoting Peace',
          'Fighting Disease and Clean Water & Sanitation',
        ],
        category: 'Social Services',
      },
    },
  ],

  skills: [
    {
      name: 'Programming Languages',
      items: ['Python', 'JavaScript', 'Go', 'Java', 'C++', 'C', 'SQL'],
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
    },
    {
      name: 'Web/Mobile Development',
      items: ['React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'NestJS', 'Express', 'TypeScript', 'Spring Boot', 'FastAPI'],
      cvAreas: ['software'],
    },
    {
      name: 'Data & ML',
      items: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Apache Spark', 'Apache Airflow'],
      cvAreas: ['data', 'aiml'],
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'BigQuery', 'Firebase', 'AWS S3', 'Supabase'],
      cvAreas: ['data', 'software'],
    },
    {
      name: 'Cloud & DevOps',
      items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Prometheus', 'Grafana'],
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
    },
    {
      name: 'Cybersecurity & Network',
      items: ['Penetration Testing', 'SIEM/SOAR', 'Network Infrastructure', 'Virtualization', 'Network Monitoring & Troubleshooting', 'IAM', 'PowerShell', 'Security Hardening'],
      cvAreas: ['cyber'],
    },
  ],

  languages: [
    {
      id: 'lang1',
      language: 'Portuguese',
      level: 'Native',
      proficiency: 100,
      details: {
        description: 'Native speaker with full professional proficiency in Brazilian Portuguese.',
        certifications: [
          'Native Language — Born and raised in Brazil',
          'Professional communication in business and technical contexts',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang2',
      language: 'English',
      level: 'Professional Working Proficiency',
      proficiency: 85,
      details: {
        description: 'Advanced English with strong professional and technical communication skills.',
        certifications: [
          'TOEFL/IELTS equivalent level',
          'Technical documentation and presentations',
          'International business communication',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang3',
      language: 'Spanish',
      level: 'Professional Working Proficiency',
      proficiency: 75,
      details: {
        description: 'Professional proficiency in Spanish with focus on business and technical contexts.',
        certifications: ['DELE B2 equivalent', 'Business Spanish proficiency', 'Technical documentation reading'],
        verificationLink: '#',
      },
    },
    {
      id: 'lang4',
      language: 'French',
      level: 'Limited Working Proficiency',
      proficiency: 50,
      details: {
        description:
          'Intermediate French with focus on reading technical documentation and basic conversation.',
        certifications: ['DELF A2/B1 equivalent', 'Technical reading comprehension', 'Basic professional communication'],
        verificationLink: '#',
      },
    },
    {
      id: 'lang5',
      language: 'Hebrew',
      level: 'Elementary Proficiency',
      proficiency: 30,
      details: {
        description: 'Elementary proficiency with focus on reading and basic communication.',
        certifications: ['Basic conversational Hebrew', 'Reading comprehension', 'Continuing education'],
        verificationLink: '#',
      },
    },
    {
      id: 'lang6',
      language: 'Russian',
      level: 'Elementary Proficiency',
      proficiency: 25,
      details: {
        description: 'Basic Russian proficiency with focus on technical terminology and reading.',
        certifications: ['Elementary level (A1)', 'Technical terminology familiarity', 'Continuing education'],
        verificationLink: '#',
      },
    },
  ],

  certifications: [
    {
      id: 'cert1',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      category: 'cloud',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      tags: ['AWS', 'Cloud', 'Architecture'],
    },
    {
      id: 'cert2',
      title: 'Google Professional Data Engineer',
      issuer: 'Google Cloud',
      date: '2024',
      category: 'data',
      cvAreas: ['data'],
      tags: ['GCP', 'BigQuery', 'Data Pipelines'],
    },
    {
      id: 'cert3',
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2023',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['Security', 'Cryptography', 'Risk Management'],
    },
    {
      id: 'cert4',
      title: 'Cisco CCNA',
      issuer: 'Cisco',
      date: '2023',
      category: 'networking',
      cvAreas: ['cyber'],
      tags: ['Cisco', 'Routing', 'Switching'],
    },
    {
      id: 'cert5',
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2024',
      category: 'development',
      cvAreas: ['aiml'],
      tags: ['TensorFlow', 'ML', 'Deep Learning'],
    },
    {
      id: 'cert6',
      title: 'Junior Cybersecurity Analyst',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['SIEM', 'IDS', 'Incident Response'],
    },
    {
      id: 'cert7',
      title: 'Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['Penetration Testing', 'Kali Linux', 'Vulnerability Assessment'],
    },
    {
      id: 'cert8',
      title: 'Network Technician',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      category: 'networking',
      cvAreas: ['cyber'],
      tags: ['Cisco', 'IPv4/IPv6', 'Network Troubleshooting'],
    },
  ],

  projects: {
    softwareDevelopment: [
      {
        id: 'proj-sw1',
        gradient: 'from-blue-900 to-indigo-900',
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
        category: 'softwareDevelopment',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        cvAreas: ['software'],
        details: {
          overview: 'A complete e-commerce platform built for scale, featuring real-time inventory management, secure payment processing, and a comprehensive admin dashboard.',
          features: [
            'Product catalog with search, filter, and category browsing',
            'Stripe payment integration with webhook handling',
            'Real-time inventory management and low-stock alerts',
            'Admin dashboard with analytics and order management',
            'JWT authentication with role-based access control',
          ],
          techStack: 'React, TypeScript, Node.js, Express, PostgreSQL, Redis, Stripe API, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw2',
        gradient: 'from-purple-900 to-blue-900',
        title: 'API Gateway Service',
        description: 'High-performance API gateway built in Go with rate limiting, circuit breaking, and observability.',
        category: 'softwareDevelopment',
        tags: ['Go', 'Docker', 'Kubernetes', 'Prometheus'],
        cvAreas: ['software'],
        details: {
          overview: 'A production-grade API gateway built in Go for microservices architectures, handling rate limiting, circuit breaking, authentication, and observability.',
          features: [
            'Rate limiting per client with configurable thresholds',
            'Circuit breaker pattern for downstream service resilience',
            'JWT and API key authentication middleware',
            'Prometheus metrics and Grafana dashboards',
            'Docker-based deployment with Kubernetes manifests',
          ],
          techStack: 'Go, Docker, Kubernetes, Prometheus, Grafana, Redis, NGINX',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw3',
        gradient: 'from-teal-900 to-cyan-900',
        title: 'Task Management App',
        description: 'Collaborative project management tool with real-time updates, kanban boards, and team analytics.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebSockets'],
        cvAreas: ['software'],
        details: {
          overview: 'A full-featured project management application with real-time collaboration, kanban board support, and team productivity analytics.',
          features: [
            'Real-time collaboration with WebSocket updates',
            'Kanban board with drag-and-drop task management',
            'Sprint planning and backlog management',
            'Team analytics and velocity tracking',
            'Slack and GitHub integrations',
          ],
          techStack: 'Next.js, TypeScript, MongoDB, Socket.io, Tailwind CSS, Vercel',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    cybersecurity: [
      {
        id: 'proj-cy1',
        gradient: 'from-red-900 to-orange-900',
        title: 'Network Security Monitor',
        description: 'Real-time network traffic analyzer with anomaly detection and automated threat response.',
        category: 'cybersecurity',
        tags: ['Python', 'SIEM', 'Wireshark', 'Elasticsearch'],
        cvAreas: ['cyber'],
        details: {
          overview: 'A comprehensive network security monitoring platform that captures, analyzes, and responds to network threats in real time using ML-based anomaly detection.',
          features: [
            'Real-time packet capture and traffic analysis',
            'ML-based anomaly detection for zero-day threats',
            'Automated incident response playbooks',
            'SIEM integration with Elasticsearch and Kibana',
            'Custom alert rules and notification system',
          ],
          techStack: 'Python, Scapy, Elasticsearch, Kibana, TensorFlow, FastAPI, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-cy2',
        gradient: 'from-gray-900 to-red-900',
        title: 'Penetration Testing Toolkit',
        description: 'Automated recon and vulnerability assessment suite built for ethical hacking engagements.',
        category: 'cybersecurity',
        tags: ['Python', 'Kali Linux', 'Nmap', 'Metasploit'],
        cvAreas: ['cyber'],
        details: {
          overview: 'A modular penetration testing toolkit that automates reconnaissance, vulnerability scanning, and report generation for authorized security assessments.',
          features: [
            'Automated reconnaissance with OSINT gathering',
            'Network scanning and service enumeration',
            'Vulnerability assessment with CVE mapping',
            'Web application security testing (OWASP Top 10)',
            'Automated HTML/PDF report generation',
          ],
          techStack: 'Python, Nmap, Metasploit Framework, Nikto, SQLMap, Burp Suite API',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-cy3',
        gradient: 'from-zinc-900 to-slate-900',
        title: 'Zero-Trust Access Framework',
        description: 'Enterprise zero-trust network architecture with identity-aware access controls and audit logging.',
        category: 'cybersecurity',
        tags: ['FortiNet', 'Cisco', 'IAM', 'Zero-Trust'],
        cvAreas: ['cyber'],
        details: {
          overview: 'Designed and implemented a zero-trust network architecture for an enterprise environment, replacing perimeter-based security with identity-aware micro-segmentation.',
          features: [
            'Identity-aware proxy with MFA enforcement',
            'Micro-segmentation with dynamic policy engine',
            'Continuous device trust verification',
            'Privileged access management (PAM) integration',
            'Comprehensive audit logging and SIEM forwarding',
          ],
          techStack: 'FortiNet NGFW, Cisco ISE, Okta, HashiCorp Vault, VMware NSX, Windows AD',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    dataEngineering: [
      {
        id: 'proj-de1',
        gradient: 'from-green-900 to-emerald-900',
        title: 'Real-Time Data Pipeline',
        description: 'Scalable streaming data pipeline processing millions of events per day with sub-second latency.',
        category: 'dataEngineering',
        tags: ['Apache Airflow', 'Apache Spark', 'BigQuery', 'Kafka'],
        cvAreas: ['data'],
        details: {
          overview: 'A production data pipeline that processes millions of events per day from multiple sources, applying transformations and loading into BigQuery for analytics.',
          features: [
            'Kafka-based event streaming with exactly-once semantics',
            'Apache Spark transformations with schema evolution',
            'Airflow DAGs for orchestration and dependency management',
            'BigQuery partitioned tables with cost optimization',
            'Data quality checks and anomaly alerting',
          ],
          techStack: 'Apache Kafka, Apache Spark, Apache Airflow, BigQuery, Python, dbt, GCP',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-de2',
        gradient: 'from-blue-900 to-green-900',
        title: 'BI Analytics Dashboard',
        description: 'Business intelligence platform with self-service analytics, automated reporting, and KPI tracking.',
        category: 'dataEngineering',
        tags: ['Python', 'Pandas', 'Grafana', 'PostgreSQL'],
        cvAreas: ['data'],
        details: {
          overview: 'A self-service business intelligence platform enabling non-technical stakeholders to explore data, build dashboards, and schedule automated reports.',
          features: [
            'Drag-and-drop dashboard builder',
            'Automated report scheduling and email delivery',
            'KPI tracking with threshold-based alerts',
            'Multi-source data connectors (SQL, REST APIs, CSV)',
            'Role-based data access and row-level security',
          ],
          techStack: 'Python, Pandas, FastAPI, PostgreSQL, Grafana, Metabase, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-de3',
        gradient: 'from-yellow-900 to-orange-900',
        title: 'ETL Automation System',
        description: 'Configurable ETL framework supporting 50+ data sources with lineage tracking and data governance.',
        category: 'dataEngineering',
        tags: ['Apache Airflow', 'Python', 'AWS S3', 'Snowflake'],
        cvAreas: ['data'],
        details: {
          overview: 'A metadata-driven ETL framework that enables rapid onboarding of new data sources through configuration rather than custom code, with full data lineage.',
          features: [
            'Metadata-driven pipeline configuration (YAML)',
            'Support for 50+ source connectors',
            'Data lineage tracking with column-level granularity',
            'Schema drift detection and automatic adaptation',
            'Data catalog integration and PII tagging',
          ],
          techStack: 'Apache Airflow, Python, AWS S3, Snowflake, Great Expectations, Apache Atlas',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    aiml: [
      {
        id: 'proj-ai1',
        gradient: 'from-violet-900 to-purple-900',
        title: 'Predictive Analytics Engine',
        description: 'ML platform serving real-time predictions for business KPIs with automated model retraining.',
        category: 'aiml',
        tags: ['TensorFlow', 'Python', 'FastAPI', 'MLflow'],
        cvAreas: ['aiml'],
        details: {
          overview: 'A production ML platform that trains, evaluates, and serves predictive models for business forecasting, with automated retraining pipelines and A/B testing.',
          features: [
            'Automated feature engineering and selection',
            'MLflow experiment tracking and model registry',
            'A/B testing framework for model comparison',
            'REST API serving with sub-50ms latency',
            'Automated retraining on data drift detection',
          ],
          techStack: 'TensorFlow, Python, FastAPI, MLflow, PostgreSQL, Docker, Kubernetes, GCP',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ai2',
        gradient: 'from-pink-900 to-rose-900',
        title: 'NLP Sentiment Analyzer',
        description: 'Fine-tuned BERT model for multi-language sentiment analysis deployed as a scalable microservice.',
        category: 'aiml',
        tags: ['PyTorch', 'BERT', 'Python', 'FastAPI'],
        cvAreas: ['aiml'],
        details: {
          overview: 'A multilingual sentiment analysis service fine-tuned on domain-specific data, supporting Portuguese, English, and Spanish with 94%+ accuracy.',
          features: [
            'Fine-tuned BERT for Portuguese, English, and Spanish',
            'Batch and real-time inference endpoints',
            'Aspect-based sentiment extraction',
            'Custom entity recognition for domain terms',
            'Confidence scores and explanation outputs',
          ],
          techStack: 'PyTorch, HuggingFace Transformers, FastAPI, Docker, Redis, AWS ECS',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ai3',
        gradient: 'from-cyan-900 to-blue-900',
        title: 'Computer Vision System',
        description: 'Real-time object detection and classification pipeline for industrial quality control.',
        category: 'aiml',
        tags: ['TensorFlow', 'OpenCV', 'Python', 'YOLO'],
        cvAreas: ['aiml'],
        details: {
          overview: 'A computer vision pipeline for industrial quality control, detecting defects in real time with 99.2% accuracy and integrating with manufacturing PLCs.',
          features: [
            'Real-time object detection with YOLOv8',
            'Custom defect classification model',
            'PLC integration for automated line control',
            'Annotated video stream with bounding boxes',
            'Defect analytics dashboard and reporting',
          ],
          techStack: 'Python, TensorFlow, YOLOv8, OpenCV, FastAPI, PostgreSQL, MQTT',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    challenges: [
      {
        id: 'proj-ch1',
        gradient: 'from-red-900 to-pink-900',
        title: 'CTF Challenge Solutions',
        description: 'Collection of Capture The Flag challenge write-ups across web, binary, crypto, and forensics.',
        category: 'challenges',
        tags: ['Python', 'Reverse Engineering', 'Crypto', 'Forensics'],
        cvAreas: ['cyber', 'aiml', 'data', 'software'],
        details: {
          overview: 'Documented solutions and write-ups from participation in various CTF competitions, covering web exploitation, binary analysis, cryptography, and digital forensics.',
          features: [
            'Web exploitation (SQLi, XSS, SSRF, deserialization)',
            'Binary reverse engineering and exploit development',
            'Cryptographic challenge solutions',
            'Digital forensics and steganography',
            'Network traffic analysis write-ups',
          ],
          techStack: 'Python, GDB, Ghidra, Burp Suite, Wireshark, CyberChef, pwntools',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ch2',
        gradient: 'from-amber-900 to-yellow-900',
        title: 'Algorithm Challenges',
        description: 'Competitive programming solutions in Python and Go, including LeetCode and HackerRank problems.',
        category: 'challenges',
        tags: ['Python', 'Go', 'Algorithms', 'Data Structures'],
        cvAreas: ['cyber', 'aiml', 'data', 'software'],
        details: {
          overview: 'A curated collection of algorithm and data structure solutions from competitive programming platforms, with time/space complexity analysis for each solution.',
          features: [
            '200+ LeetCode problems (Easy/Medium/Hard)',
            'Dynamic programming patterns and templates',
            'Graph algorithms (BFS, DFS, Dijkstra, Floyd)',
            'String manipulation and pattern matching',
            'System design practice problems',
          ],
          techStack: 'Python, Go, JavaScript',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ch3',
        gradient: 'from-emerald-900 to-teal-900',
        title: 'Hackathon Projects',
        description: 'Award-winning hackathon projects spanning fintech, healthtech, and social impact domains.',
        category: 'challenges',
        tags: ['React', 'Python', 'AI/ML', 'Rapid Prototyping'],
        cvAreas: ['cyber', 'aiml', 'data', 'software'],
        details: {
          overview: 'Projects developed during hackathons focused on social impact, combining rapid prototyping skills with domain expertise across fintech, healthtech, and education.',
          features: [
            'MVP development within 24-48 hour timeframes',
            'AI-powered features for accessibility and inclusion',
            'Pitch decks and demo presentations',
            'Community voting and jury evaluation placements',
            'Open-source releases post-hackathon',
          ],
          techStack: 'React, Next.js, Python, FastAPI, OpenAI API, Supabase, Vercel',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
  },

  researches: [
    {
      id: 'res1',
      title: 'AI for Early Detection of Bone Cancer',
      description:
        'Systematic review and meta-analysis evaluating the performance of AI models applied to medical imaging for early-stage bone cancer detection, covering CT, MRI, and X-ray modalities.',
      field: 'Oncology · Medical Imaging · AI',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res2',
      title: 'ML for Hematologic Malignancy Detection',
      description:
        'Systematic review of machine learning approaches for early identification of blood cancers using clinical data and genomic markers, assessing sensitivity, specificity, and clinical applicability.',
      field: 'Oncology · Genomics · ML',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res3',
      title: 'AI-Assisted Prostate Cancer Screening',
      description:
        'Meta-analysis examining AI-assisted diagnostic tools for prostate cancer, integrating imaging (MRI, ultrasound) and biomarker data to evaluate detection accuracy over traditional PSA-based screening.',
      field: 'Oncology · Biomarkers · AI',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res4',
      title: 'Deep Learning for Skin Cancer Detection',
      description:
        'Systematic review of deep learning models trained on dermoscopic images for early-stage skin cancer classification, with focus on melanoma detection accuracy and real-world deployment viability.',
      field: 'Oncology · Dermatology · Deep Learning',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res5',
      title: 'Deep Learning for Breast Cancer Screening',
      description:
        'Meta-analysis of convolutional neural network architectures applied to mammographic images for early breast cancer detection, comparing performance against radiologist baseline across multiple datasets.',
      field: 'Oncology · Radiology · Deep Learning',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res6',
      title: 'Early Detection of Colorectal Cancer',
      description:
        'Research investigating AI-driven approaches for early colorectal cancer detection, combining endoscopic imaging analysis, biomarker profiling, and patient clinical data for improved screening outcomes.',
      field: 'Oncology · Gastroenterology · AI',
      status: 'in development',
      cvAreas: ['aiml'],
    },
  ],
}
