/* 
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
*/
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
    title: 'AI Engineer and Researcher',
    about: [
      "I'm a Problem Solver — someone who turns challenges into opportunities through technology, strategy, and purpose.",
      'With a strong foundation in Cybersecurity (Zero Trust, NIST CSF, AppSec, SIEM/SOAR, Penetration Testing), Machine Learning (MLOps, Computer Vision), and Data Engineering (Apache Spark, Airflow), I thrive on building secure, scalable, and data-driven products that make a real impact.',
      'My mission is clear: to impact 1 billion lives by 2035 (1b2035) through innovation, education, and intelligent problem-solving. That\'s the driving force behind the Problem Solver Foundation, an initiative that equips people to face complexity, think critically, and act with purpose.',
    ],
  },

  experience: [
    {
      id: 'exp1',
      title: 'Machine Learning Engineer',
      company: 'Stealth',
      period: 'Jul 2025 - Present',
      description:
        'Developing AI-driven systems for urban incident detection and real-time monitoring, integrating computer vision with historical data analysis to optimize resource allocation.',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision'],
      cvAreas: ['aiml'],
      details: {
        overview:
          'Developing AI-driven systems for detecting and analyzing urban incidents, enhancing situational awareness across mobility, security, and urban management sectors.',
        keyAreas: [
          'Building AI systems for urban incident detection and situational awareness',
          'Integrating computer vision with real-time monitoring pipelines',
          'Combining live data streams with historical data for optimized resource allocation',
          'Improving safety outcomes across mobility, security, and urban management',
        ],
        technologies: 'Python, TensorFlow, OpenCV, Computer Vision, MLOps',
      },
    },
    {
      id: 'exp2',
      title: 'Cyber Security Engineer',
      company: 'Stealth',
      period: 'Apr 2022 - Present',
      description:
        'Designing and securing enterprise network infrastructures across HQ and 30+ regional subunits, with advanced firewall management, zero-trust policies, penetration testing, and cybersecurity automation.',
      tags: ['SIEM/SOAR', 'FortiGate', 'Penetration Testing', 'VMware vSphere', 'Hyper-V'],
      cvAreas: ['cyber'],
      details: {
        overview:
          'Planning, deploying, and securing enterprise network infrastructures across headquarters and 30+ regional subunits, implementing advanced security controls and automation.',
        keyAreas: [
          'Planned and managed enterprise network infrastructures with Active Directory (Windows Server) across 30+ sites',
          'Deployed FortiGate, FortiSwitch, and FortiAP solutions, enhancing network scalability and visibility',
          'Executed penetration tests and vulnerability assessments, identifying and mitigating critical security risks',
          'Implemented SIEM/SOAR solutions for threat detection and automated incident response',
          'Managed Cisco, HP, Fortinet NGFWs, SD-WAN, VLAN, VoIP, VPN, VPS, and Oracle infrastructure components',
          'Virtualization with VMware vSphere and Hyper-V in on-premises environments',
          'Implemented Hyper-V Failover Clusters with Cluster Shared Volumes (CSV) for high availability and VM mobility',
          'Managed Windows/Linux Servers with security hardening and backup solutions (Veeam)',
          'Led data center migrations',
        ],
        technologies:
          'FortiGate, FortiSwitch, FortiAP, Cisco, HP, Fortinet NGFW, SD-WAN, VLAN, VoIP, VPN, VMware vSphere, Hyper-V, Veeam, Active Directory, Windows/Linux Servers, SIEM/SOAR, Penetration Testing, Oracle Cloud',
      },
    },
    {
      id: 'exp3',
      title: 'Software Engineer',
      company: 'Stealth',
      period: 'Jan 2021 - Present',
      description: 'Developing full-stack web and mobile applications with modern frameworks, RESTful APIs, and agile methodologies.',
      tags: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'REST APIs'],
      cvAreas: ['software'],
      details: {
        overview: 'Developing full-stack web and mobile applications, enhancing user experience and functionality across diverse client projects.',
        keyAreas: [
          'Building modern web applications with JavaScript and React, ensuring responsive design',
          'Creating backend services with Node.js and integrating RESTful APIs for seamless third-party interaction',
          'Developing full-stack web and mobile apps with Expo and React Native',
          'Participating in agile development processes, contributing to efficient project delivery',
        ],
        technologies: 'JavaScript, TypeScript, React, React Native, Expo, Node.js, NestJS, Express, FastAPI, Python, Go',
      },
    },
    {
      id: 'exp4',
      title: 'Data Analyst',
      company: 'Stealth',
      period: 'Sep 2024 - Sep 2025',
      description:
        'Transforming raw data into actionable business insights, automating complex workflows, and building data pipelines to support strategic decision-making.',
      tags: ['Python', 'SQL', 'Power BI', 'Tableau'],
      cvAreas: ['data'],
      details: {
        overview:
          'Transforming raw data into actionable business insights to drive strategic decision-making and growth through advanced analytics and automation.',
        keyAreas: [
          'Transforming raw data into actionable business insights to drive strategic decision-making',
          'Leveraging Python, SQL, Tableau, and Power BI for advanced data analysis and visualization',
          'Automating complex workflows and data pipelines to enhance operational efficiency',
          'Supporting data-driven solutions across multiple business domains',
        ],
        technologies: 'Python, SQL, Tableau, Power BI, Pandas, NumPy, Apache Airflow',
      },
    },
    {
      id: 'exp5',
      title: 'Sales Representative (B2C/B2B)',
      company: 'Family Business',
      period: '2011 - 2017',
      description:
        'Started selling at age 7, growing from B2C to B2B across northeastern Brazil. Achieved ~$1M in sales and served 700+ clients through door-to-door prospecting.',
      tags: ['B2B', 'B2C', 'Negotiation', 'CRM'],
      cvAreas: [],
      details: {
        overview:
          'An early entrepreneurial journey starting at age 7, scaling from artisan B2C sales to B2B door-to-door prospecting across Sergipe, Bahia, and Alagoas.',
        keyAreas: [
          'Made initial contact, presented products, qualified leads, and managed contracts and closures',
          'Achieved nearly $1M in sales and secured 700+ clients through traditional door-to-door prospecting',
          'Organized events with local institutions to reduce Customer Acquisition Cost (CAC)',
          'Operated across northeastern Brazil (Sergipe, Bahia, and Alagoas)',
          'Nurtured long-term client relationships to increase Lifetime Value (LTV)',
        ],
        technologies: 'B2B Sales, B2C Sales, Negotiation, CRM, Lead Generation, Event Organizing',
      },
    },
  ],

  education: [
    {
      id: 'edu1',
      title: "Bachelor's Degree in Computer Science",
      institution: 'Estácio',
      period: '2022 - Present',
      description:
        'AI, computer systems, networks, security, databases, HCI, programming languages, software engineering, cybersecurity, bioinformatics, and theory of computing.',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview: 'Comprehensive computer science education covering the full spectrum of modern computing, from systems and networks to AI, security, and software engineering.',
        keyAreas: [
          'Artificial Intelligence and Machine Learning',
          'Computer Systems and Networks',
          'Security and Cybersecurity',
          'Database Systems',
          'Human-Computer Interaction',
          'Vision and Graphics',
          'Software Engineering and Programming Languages',
          'Bioinformatics and Theory of Computing',
        ],
      },
    },
    {
      id: 'edu2',
      title: "Bachelor's Degree in Public Administration",
      institution: 'Estácio',
      period: '2017 - 2019 • GPA: 4.97/5',
      description:
        'Democratic Theory, Economics, International Politics, Governance, Public Finance, Constitutional Law, Strategic Planning, and Social Change.',
      cvAreas: [],
      details: {
        overview:
          'Strong foundation in governance, policy, and strategic management with outstanding academic performance (GPA 4.97/5). Completed in 4–5 semesters.',
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
        'Network monitoring, threat detection, SIEM, IDS, penetration testing, incident response, forensics, and cybersecurity governance.',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Comprehensive cybersecurity training covering network defense, threat detection, incident response, and forensic investigations. Credential issued by Cisco.',
        skillsDeveloped: [
          'Security Information and Event Management (SIEM)',
          'Intrusion Detection Systems (IDS)',
          'Penetration Testing and Vulnerability Assessment',
          'Incident Response and Malware Analysis',
          'Network Security, Hardening, and WLANs',
          'Firewall, Cloud Security, and Cryptography',
          'Forensic Investigations and Risk Management',
          'Cybersecurity Governance and Defense-in-Depth',
        ],
      },
    },
    {
      id: 'edu4',
      title: 'Ethical Hacker',
      institution: 'Cisco Networking Academy',
      period: '2023',
      description:
        'Ethical hacking, penetration testing, and vulnerability assessment across applications, networks, and IoT devices using Kali Linux and pentesting tools.',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Hands-on expertise in ethical hacking, penetration testing, and vulnerability assessment. Credential issued by Cisco to Haniel Rolemberg.',
        skillsDeveloped: [
          'Security Monitoring and Penetration Testing',
          'Ethical Hacking Methodologies',
          'Kali Linux and WebSploit Tools',
          'Vulnerability Assessment (Applications, Networks, IoT)',
          'Social Engineering Detection and Security Reporting',
          'Legal and Compliance Best Practices in Security',
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
        'Cisco devices and IOS, IPv4/IPv6 addressing, network protocols, troubleshooting, cloud services, and wireless access.',
      cvAreas: ['cyber'],
      details: {
        overview: 'Comprehensive networking skills for network design, troubleshooting, and support. Credential issued by Cisco to Haniel Rolemberg.',
        skillsDeveloped: [
          'Cisco Devices, IOS, Routers, and Switches',
          'IPv4 and IPv6 Addressing',
          'Network Layer and Transport Layer Protocols',
          'Copper and Fiber Cabling',
          'Network Troubleshooting, Help Desk, and User Support',
          'Hierarchical Network Design',
          'Cloud Services and Wireless Access',
        ],
      },
    },
    {
      id: 'edu6',
      title: 'CS50 — Computer Science from Harvard',
      institution: 'Fundação Estudar',
      period: 'Completed',
      description:
        'Algorithms, data structures, C, Python, SQL, and web development — Harvard\'s CS50 program in Brazil.',
      cvAreas: ['software', 'data'],
      details: {
        overview:
          'Harvard\'s CS50 course completed in Brazil via Fundação Estudar, covering the intellectual foundations of computer science and programming.',
        skillsDeveloped: [
          'Algorithms and Data Structures',
          'C Programming Language',
          'Python and SQL',
          'Web Development (HTML, CSS, JavaScript)',
          'Problem decomposition and computational thinking',
        ],
      },
    },
  ],

  volunteering: [
    {
      id: 'vol1',
      title: 'Community Organizer',
      organization: 'Problem Solvers Foundation',
      period: 'Jan 2026 - Present',
      description: 'Building a community on a mission to impact 1 billion lives by 2035.',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview:
          'We are the Problem Solvers Foundation — a community on a mission to impact 1 billion lives by 2035. Empowering people to face complexity, think critically, and act with purpose.',
        focusAreas: [
          'Innovation and Technology Education',
          'Critical Thinking and Problem-Solving Training',
          'Community Building and Cross-Border Collaboration',
          'Empowering People to Face Complexity with Purpose',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol2',
      title: 'Strategic Alliances | IT',
      organization: 'Project Management Institute (PMI)',
      period: 'Apr 2024 - Present',
      description: 'Supporting strategic partnerships, IT operations, and joint initiatives including Agile Brazil and Produte-SE.',
      cvAreas: ['software'],
      details: {
        overview:
          'Supporting the Strategic Partnerships area, helping coordinate collaborations and joint initiatives. Contributing to IT strategy and digital operations.',
        responsibilities: [
          'Coordinating strategic alliances and joint community initiatives',
          'Representing PMI at events such as Agile Brazil',
          'Supporting IT operations to strengthen digital strategy',
          'Collaborating with Produte-SE and GDG Aracaju on cross-community events',
        ],
        category: 'Economic Empowerment',
      },
    },
    {
      id: 'vol3',
      title: 'Tech Advocate',
      organization: 'Tech Brazil Advocates',
      period: 'Jan 2024 - Present',
      description: 'Mapping the local tech innovation ecosystem in Sergipe, Brazil.',
      cvAreas: ['software'],
      details: {
        overview:
          'Responsible for mapping the entire local innovation ecosystem applied to technology in Sergipe, connecting startups, institutions, and tech professionals.',
        focusAreas: [
          'Local tech ecosystem mapping and documentation',
          'Connecting innovators, startups, and institutions in Sergipe',
          'Promoting technology awareness and adoption',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol4',
      title: 'Community Leader',
      organization: 'GDG Aracaju (Google Developer Group)',
      period: 'Oct 2023 - Nov 2024',
      description: 'Led 25+ volunteers to empower 300+ tech professionals through events, workshops, and mentorship.',
      cvAreas: ['software'],
      details: {
        overview:
          'The Google Developer Group Aracaju is an independent, non-profit community supported by Google. Led as project and process manager, organizing technical events at the Federal University of Sergipe and beyond.',
        responsibilities: [
          'Project and process management for all community activities',
          'Leading a dedicated team of 25+ volunteers',
          'Community engagement with 300+ active members',
          'Organizing technical workshops (e.g., Go/Golang at UFS for queue systems)',
          'Hosting college job market events with businesses and HR teams',
          'Representing GDG Aracaju at Agile Brazil and Produte-SE events',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol5',
      title: 'Volunteer Staff',
      organization: 'Rotary International / Rotaract',
      period: 'Oct 2022 - Sep 2023',
      description: 'Contributing to environmental protection, health, education, and peace initiatives.',
      cvAreas: [],
      details: {
        overview:
          "Contributing to Rotary International's mission to create lasting change in communities worldwide across six areas of focus.",
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
    {
      id: 'vol6',
      title: 'Board Member / Volunteer',
      organization: 'Clube Poliglota Brasil',
      period: 'Jan 2021 - Sep 2023',
      description: 'Managed a team of content creators, implemented SEO and growth hacking strategies, improved blog performance with PHP, and authored a book on language learning.',
      cvAreas: ['software'],
      details: {
        overview:
          'Joined as a board member to ensure effective organizational planning. Managed a team of 5 content creators and 2 reviewers, growing blog traffic through SEO and growth hacking. Also developed PHP improvements to reduce page load bottlenecks.',
        responsibilities: [
          'Board-level organizational planning and execution',
          'Managing a team of 5 content creators and 2 reviewers',
          'Developing and executing SEO and growth hacking strategies',
          'PHP development to reduce bottlenecks and improve page speed',
          'Writing articles on the language learning process',
          'Authored a book on language learning during this experience',
        ],
        category: 'Education',
      },
    },
  ],

  skills: [
    {
      name: 'Programming Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'C', 'SQL', 'PHP'],
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
    },
    {
      name: 'Web/Mobile Development',
      items: ['React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'NestJS', 'Express', 'FastAPI', 'Spring Boot'],
      cvAreas: ['software'],
    },
    {
      name: 'AI / ML',
      items: ['TensorFlow', 'OpenCV', 'Computer Vision', 'CrewAI', 'Autonomous Agents', 'MLOps', 'PyTorch', 'Pandas', 'NumPy'],
      cvAreas: ['aiml'],
    },
    {
      name: 'Data Engineering',
      items: ['Apache Spark', 'Apache Airflow', 'Databricks', 'ETL', 'BigQuery', 'Power BI', 'Tableau'],
      cvAreas: ['data'],
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase / Firestore', 'AWS S3', 'Supabase'],
      cvAreas: ['data', 'software'],
    },
    {
      name: 'Cybersecurity & Network',
      items: ['SIEM/SOAR', 'Penetration Testing', 'FortiGate', 'Zero Trust', 'NIST CSF', 'AppSec', 'OSINT', 'DFIR', 'Kali Linux', 'Active Directory', 'VMware vSphere', 'Hyper-V', 'SD-WAN', 'VPN'],
      cvAreas: ['cyber'],
    },
    {
      name: 'Cloud & DevOps',
      items: ['AWS', 'GCP', 'Oracle Cloud', 'Firebase', 'Docker', 'Kubernetes', 'CI/CD'],
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
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
          'Professional Working Proficiency',
          'Technical documentation and presentations',
          'International business and community leadership',
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
        certifications: [
          'Professional Working Proficiency',
          'Business Spanish proficiency',
          'Technical documentation reading and writing',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang4',
      language: 'Hebrew',
      level: 'Elementary Proficiency',
      proficiency: 40,
      details: {
        description: 'Elementary proficiency with focus on reading and basic communication.',
        certifications: [
          'Elementary Proficiency',
          'Basic conversational Hebrew',
          'Continuing self-directed education',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang5',
      language: 'French',
      level: 'Elementary Proficiency',
      proficiency: 35,
      details: {
        description: 'Elementary French with reading comprehension and basic professional communication.',
        certifications: [
          'Elementary Proficiency',
          'Technical reading comprehension',
          'Continuing self-directed education',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang6',
      language: 'Italian',
      level: 'Elementary Proficiency',
      proficiency: 35,
      details: {
        description: 'Elementary Italian with reading comprehension focus.',
        certifications: [
          'Elementary Proficiency',
          'Reading comprehension',
          'Continuing self-directed education',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang7',
      language: 'Catalan',
      level: 'Elementary Proficiency',
      proficiency: 30,
      details: {
        description: 'Elementary Catalan with basic reading and comprehension.',
        certifications: [
          'Elementary Proficiency',
          'Basic reading comprehension',
          'Continuing self-directed education',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang8',
      language: 'Russian',
      level: 'Beginner',
      proficiency: 20,
      details: {
        description: 'Basic Russian with focus on technical terminology and reading.',
        certifications: [
          'Elementary level (A1)',
          'Technical terminology familiarity',
          'Continuing self-directed education',
        ],
        verificationLink: '#',
      },
    },
  ],

  certifications: [
    {
      id: 'cert1',
      title: 'OWASP API Security',
      issuer: 'APIsec University',
      date: 'Feb 2026',
      category: 'security',
      cvAreas: ['cyber', 'software'],
      tags: ['API Security', 'OWASP', 'AppSec'],
    },
    {
      id: 'cert2',
      title: 'Intro to Splunk',
      issuer: 'Splunk',
      date: 'Jan 2026',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['Splunk', 'SIEM', 'Security Monitoring'],
    },
    {
      id: 'cert3',
      title: 'Introduction to Technological Maturity (TRL)',
      issuer: 'Agência Espacial Brasileira',
      date: 'Jan 2026',
      category: 'development',
      cvAreas: ['aiml', 'software'],
      tags: ['TRL', 'Technology Readiness', 'Research'],
    },
    {
      id: 'cert4',
      title: 'Creating Your First Agent with CrewAI',
      issuer: 'DIO',
      date: '2025',
      category: 'development',
      cvAreas: ['aiml'],
      tags: ['CrewAI', 'Autonomous Agents', 'AI'],
    },
    {
      id: 'cert5',
      title: 'Building AI Applications with Autonomous Agents',
      issuer: 'DIO',
      date: '2025',
      category: 'development',
      cvAreas: ['aiml'],
      tags: ['AI Agents', 'LLM', 'AI Engineering'],
    },
    {
      id: 'cert6',
      title: 'Certified Phishing Prevention Specialist (CPPS)',
      issuer: 'Hack & Fix',
      date: 'Jan 2025',
      category: 'security',
      cvAreas: ['cyber'],
      credentialId: '3648-2721-6004-1331',
      tags: ['Phishing', 'Social Engineering', 'Security Awareness'],
    },
    {
      id: 'cert7',
      title: 'Cyber Threat Management',
      issuer: 'Cisco',
      date: 'Jan 2025',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['Threat Intelligence', 'CTI', 'Disaster Recovery'],
    },
    {
      id: 'cert8',
      title: 'Databricks Fundamentals Accreditation',
      issuer: 'Databricks',
      date: 'Jan 2025',
      category: 'data',
      cvAreas: ['data'],
      tags: ['Databricks', 'ETL', 'Data Engineering'],
    },
    {
      id: 'cert9',
      title: 'Cybersecurity Fundamentals',
      issuer: 'IBM',
      date: 'Jan 2025',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['Vulnerability Management', 'Incident Response', 'IBM Security'],
    },
    {
      id: 'cert10',
      title: 'Chronicle Security Operations Platform Fundamentals',
      issuer: 'Google Cloud Security',
      date: 'Jan 2025',
      category: 'security',
      cvAreas: ['cyber'],
      credentialId: '12557310',
      tags: ['SIEM', 'SOAR', 'Google Chronicle'],
    },
    {
      id: 'cert11',
      title: 'Digital Forensics & Incident Response',
      issuer: 'Mente Binária (ONG)',
      date: '2025',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['DFIR', 'Forensics', 'Incident Response'],
    },
    {
      id: 'cert12',
      title: 'Junior Cybersecurity Analyst Career Path',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      category: 'security',
      cvAreas: ['cyber'],
      verifyUrl: 'https://www.credly.com/badges/f9c6cba8-0a9a-4231-ad09-0bfcdc4107ca',
      tags: ['SIEM', 'IDS', 'Incident Response'],
    },
    {
      id: 'cert13',
      title: 'Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      category: 'security',
      cvAreas: ['cyber'],
      verifyUrl: 'https://www.credly.com/badges/a4689f6b-ca66-4e41-801d-49f592df2914',
      tags: ['Penetration Testing', 'Kali Linux', 'Vulnerability Assessment'],
    },
    {
      id: 'cert14',
      title: 'Network Technician Career Path',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      category: 'networking',
      cvAreas: ['cyber'],
      verifyUrl: 'https://www.credly.com/badges/53706149-3c66-49d2-9e13-d8e5c0bfbe03',
      tags: ['Cisco', 'IPv4/IPv6', 'Network Troubleshooting'],
    },
    {
      id: 'cert15',
      title: 'Cyber Academy 2024',
      issuer: 'FEBRABAN',
      date: '2024',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['ISO 27005', 'NIST', 'Data Governance (DAMA)', 'IAM', 'Cloud Security'],
    },
    {
      id: 'cert16',
      title: 'API Security for PCI Compliance',
      issuer: 'APIsec University',
      date: 'May 2024',
      category: 'security',
      cvAreas: ['cyber', 'software'],
      tags: ['API Security', 'PCI DSS', 'AppSec'],
    },
    {
      id: 'cert17',
      title: 'JavaScript Specialist Certification',
      issuer: 'DIO',
      date: '2024',
      category: 'development',
      cvAreas: ['software'],
      tags: ['JavaScript', 'Frontend', 'Web Development'],
    },
    {
      id: 'cert18',
      title: 'Inteligencia de Fuentes Abiertas (OSINT)',
      issuer: 'Basel Institute on Governance',
      date: '2024',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['OSINT', 'Open Source Intelligence', 'Investigations'],
    },
    {
      id: 'cert19',
      title: 'Network Defense',
      issuer: 'Cisco',
      date: '2024',
      category: 'networking',
      cvAreas: ['cyber'],
      tags: ['Network Defense', 'System Security', 'Cisco'],
    },
    {
      id: 'cert20',
      title: 'Endpoint Security',
      issuer: 'Cisco',
      date: '2024',
      category: 'security',
      cvAreas: ['cyber'],
      tags: ['Endpoint Security', 'Cisco', 'Device Hardening'],
    },
    {
      id: 'cert21',
      title: 'Introduction to Data Science',
      issuer: 'Cisco',
      date: '2024',
      category: 'data',
      cvAreas: ['data', 'aiml'],
      tags: ['Data Science', 'Cisco', 'Analytics'],
    },
    {
      id: 'cert22',
      title: 'High Performance Execution',
      issuer: 'Fundação Estudar',
      date: 'Jan 2025',
      category: 'development',
      cvAreas: [],
      tags: ['Leadership', 'High Performance', 'Personal Development'],
    },
  ],

  projects: {
    softwareDevelopment: [
      {
        id: 'proj-sw1',
        gradient: 'from-blue-900 to-indigo-900',
        title: 'Problem Solver Foundation Platform',
        description: 'Community platform on a mission to impact 1 billion lives by 2035, empowering problem solvers through education, collaboration, and technology.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'Node.js', 'Firebase', 'TypeScript'],
        cvAreas: ['software'],
        details: {
          overview: 'A community platform built to unite problem solvers worldwide, providing tools for education, collaboration, and real-world impact — powered by the 1b2035 mission.',
          features: [
            'Community hub with member profiles and collaboration tools',
            'Problem-solving framework and educational resources',
            'Event management and community engagement features',
            'Firebase authentication and real-time database',
            'Responsive web and mobile experience',
          ],
          techStack: 'Next.js, Node.js, Firebase, Firestore, TypeScript, Vercel',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw2',
        gradient: 'from-purple-900 to-blue-900',
        title: 'Cherut — High-Performance Life Platform',
        description: 'SaaS platform connecting purpose, discipline, and results — OKRs, habits, tasks, and growth analytics for driven individuals.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'NestJS', 'Expo', 'Go', 'Python'],
        cvAreas: ['software'],
        details: {
          overview: 'Cherut (Hebrew for "freedom") is a high-performance SaaS platform for entrepreneurs, creators, and professionals. Built with a Modular Monolith + External Specialized Services architecture.',
          features: [
            'OKR (Objectives and Key Results) tracking and management',
            'Habit and routine builder with streak tracking',
            'Task and priority management with Kanban boards',
            'Growth analytics and performance insights dashboard',
            'Modular Monolith architecture with external specialized services',
          ],
          techStack: 'Next.js, NestJS, Expo (React Native), Python, Go, PostgreSQL, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw3',
        gradient: 'from-teal-900 to-cyan-900',
        title: 'Web-Based CRM',
        description: 'Full-stack CRM with React/TypeScript frontend, Flask (Python) backend, JWT authentication, and AWS deployment.',
        category: 'softwareDevelopment',
        tags: ['React', 'TypeScript', 'Python', 'Flask', 'AWS'],
        cvAreas: ['software'],
        details: {
          overview: 'A customer relationship management system built with a modern React/TypeScript frontend and a Flask REST API backend, deployed on AWS.',
          features: [
            'Interactive React/TypeScript frontend with static typing for robustness',
            'Flask (Python) backend handling requests and business logic',
            'JWT authentication for secure token-based access',
            'AWS services for storage, deployment, and hosting',
            'RESTful API with full CRUD operations',
          ],
          techStack: 'React, TypeScript, Python, Flask, JWT, AWS S3, AWS EC2',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw4',
        gradient: 'from-emerald-900 to-teal-900',
        title: 'Investment Portfolio Management System',
        description: 'Full-stack investment tracker with React/TypeScript, Node.js/Express, Firebase (Firestore + Auth + Hosting), and Recharts visualization.',
        category: 'softwareDevelopment',
        tags: ['React', 'TypeScript', 'Node.js', 'Firebase', 'Recharts'],
        cvAreas: ['software'],
        details: {
          overview: 'A full-stack investment management system managing Users, Investments, Goals, and Transactions in Firestore with role-based authentication and offline persistence.',
          features: [
            'Portfolio dashboard with Recharts data visualization',
            'Firestore real-time collections for Investments, Goals, and Transactions',
            'Firebase Authentication with role-based access control',
            'Material-UI visual components with responsive design',
            'Lazy loading, code splitting, and Firebase offline persistence',
          ],
          techStack: 'React, TypeScript, Node.js, Express, Firebase, Firestore, Material-UI, Recharts',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw5',
        gradient: 'from-slate-900 to-zinc-900',
        title: 'Web-Based Financial Management System',
        description: 'Secure, responsive fintech platform for real-time income, expense, investment, and goal tracking with JWT authentication.',
        category: 'softwareDevelopment',
        tags: ['React', 'Node.js', 'JWT', 'REST APIs'],
        cvAreas: ['software'],
        details: {
          overview: 'A user-friendly and secure financial management platform for individuals and businesses, featuring real-time tracking and actionable insights for financial planning.',
          features: [
            'Real-time income and expense tracking',
            'Investment portfolio and financial goal management',
            'Actionable insights dashboard for financial planning',
            'Robust JWT authentication system for data privacy',
            'Fully responsive modern interface',
          ],
          techStack: 'React, Node.js, JWT, REST APIs, PostgreSQL',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    cybersecurity: [
      {
        id: 'proj-cy1',
        gradient: 'from-red-900 to-orange-900',
        title: 'Computer Vision Personnel Detection System',
        description: 'Automated 24/7 monitoring system for controlled environments, activating on motion/human detection and alerting authorities in real time.',
        category: 'cybersecurity',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
        cvAreas: ['cyber', 'aiml'],
        details: {
          overview: 'A low-power automated monitoring system that operates continuously or in scheduled intervals, activating on motion or human detection and sending enriched real-time detection data via messaging applications.',
          features: [
            '24/7 automated monitoring with low-power standby mode',
            'Motion and human detection with green bounding box visualization',
            'Scheduled interval mode for energy optimization',
            'Real-time enriched detection data sent to authorities via messaging apps',
            'Configurable alert thresholds and detection zones',
          ],
          techStack: 'Python, OpenCV, TensorFlow, Computer Vision, MQTT/messaging integration',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-cy2',
        gradient: 'from-gray-900 to-red-900',
        title: 'Zero-Trust Enterprise Network Architecture',
        description: 'Enterprise zero-trust network design with FortiGate, Cisco, SD-WAN, VLANs, Hyper-V failover clusters, and SIEM/SOAR across 30+ sites.',
        category: 'cybersecurity',
        tags: ['FortiGate', 'Cisco', 'SD-WAN', 'Zero-Trust', 'Hyper-V'],
        cvAreas: ['cyber'],
        details: {
          overview: 'Designed and implemented a zero-trust enterprise network infrastructure across HQ and 30+ regional subunits, replacing perimeter-based security with identity-aware controls and micro-segmentation.',
          features: [
            'Active Directory management for 30+ sites (Windows Server)',
            'FortiGate, FortiSwitch, FortiAP deployment for scalability and visibility',
            'Hyper-V Failover Clusters with CSV for high availability and VM mobility',
            'SIEM/SOAR implementation for automated threat detection and response',
            'Penetration testing and vulnerability assessments across all subunits',
            'Data center migrations with minimal downtime',
          ],
          techStack: 'FortiGate, Cisco, HP, SD-WAN, VLAN, VoIP, VPN, VMware vSphere, Hyper-V, Veeam, Active Directory, SIEM/SOAR',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-cy3',
        gradient: 'from-zinc-900 to-slate-900',
        title: 'Penetration Testing & Vulnerability Assessment Program',
        description: 'Structured ethical hacking engagements using Kali Linux, vulnerability scanning, OSINT, and security reporting for enterprise environments.',
        category: 'cybersecurity',
        tags: ['Kali Linux', 'OSINT', 'Penetration Testing', 'Python'],
        cvAreas: ['cyber'],
        details: {
          overview: 'Executed structured penetration testing and vulnerability assessment programs for enterprise environments, using ethical hacking methodologies and OSINT techniques.',
          features: [
            'Reconnaissance with OSINT gathering (Basel Institute certified)',
            'Network scanning, service enumeration, and CVE mapping',
            'Web application security testing (OWASP Top 10)',
            'Social engineering awareness and phishing simulation (CPPS certified)',
            'Comprehensive security reporting and remediation recommendations',
          ],
          techStack: 'Kali Linux, Nmap, Metasploit, Burp Suite, WebSploit, Python, Bash, OSINT tools',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    dataEngineering: [
      {
        id: 'proj-de1',
        gradient: 'from-green-900 to-emerald-900',
        title: 'Data Analytics & Automation Pipelines',
        description: 'Automated data workflows and pipelines leveraging Python, SQL, Power BI, and Tableau to deliver actionable business insights.',
        category: 'dataEngineering',
        tags: ['Python', 'SQL', 'Power BI', 'Tableau', 'Apache Airflow'],
        cvAreas: ['data'],
        details: {
          overview: 'Built and automated complex data workflows and analytics pipelines, transforming raw data into actionable business insights that drove strategic decision-making and operational efficiency.',
          features: [
            'Automated data pipelines for complex multi-source workflows',
            'Power BI and Tableau dashboards for business stakeholders',
            'Python + SQL data transformation and analysis scripts',
            'KPI tracking with threshold-based alerts',
            'Data quality validation and anomaly detection',
          ],
          techStack: 'Python, SQL, Pandas, NumPy, Apache Airflow, Power BI, Tableau, PostgreSQL',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-de2',
        gradient: 'from-blue-900 to-green-900',
        title: 'Urban AI Incident Detection — Data Layer',
        description: 'Historical data analysis and pipeline infrastructure supporting real-time urban incident detection and resource allocation optimization.',
        category: 'dataEngineering',
        tags: ['Python', 'Apache Spark', 'BigQuery', 'MLOps'],
        cvAreas: ['data', 'aiml'],
        details: {
          overview: 'Designed and implemented the data engineering layer for an AI-driven urban incident detection system, combining real-time streams with historical data to optimize resource allocation.',
          features: [
            'Historical data ingestion and preprocessing pipelines',
            'Integration of real-time monitoring with historical data analysis',
            'Feature engineering for computer vision ML models',
            'Resource allocation optimization through data insights',
            'Scalable pipeline architecture for urban management domains',
          ],
          techStack: 'Python, Apache Spark, BigQuery, TensorFlow data APIs, MLOps tools',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-de3',
        gradient: 'from-yellow-900 to-orange-900',
        title: 'Databricks & ETL Foundations',
        description: 'ETL pipeline design and Databricks Lakehouse fundamentals applied to structured data transformation and analytics.',
        category: 'dataEngineering',
        tags: ['Databricks', 'ETL', 'Apache Spark', 'Python'],
        cvAreas: ['data'],
        details: {
          overview: 'Applied Databricks Lakehouse platform fundamentals for structured ETL pipelines, data transformation, and analytics — certified by Databricks Academy.',
          features: [
            'ETL pipeline design with Apache Spark on Databricks',
            'Structured data transformation and schema management',
            'Databricks Lakehouse architecture implementation',
            'Data quality checks and validation layers',
            'Performance optimization for large-scale data processing',
          ],
          techStack: 'Databricks, Apache Spark, Python, SQL, Delta Lake',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    aiml: [
      {
        id: 'proj-ai1',
        gradient: 'from-violet-900 to-purple-900',
        title: 'Urban Incident Detection System (ML)',
        description: 'AI-driven system integrating computer vision and real-time monitoring to detect and analyze urban incidents for safety optimization.',
        category: 'aiml',
        tags: ['TensorFlow', 'OpenCV', 'Python', 'Computer Vision'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Developed an AI-driven system for detecting and analyzing urban incidents, enhancing situational awareness and improving safety across mobility, security, and urban management sectors.',
          features: [
            'Real-time human and object detection with bounding box visualization',
            'Computer vision pipeline with TensorFlow and OpenCV',
            'Integration with historical data for resource allocation optimization',
            'Automated alerts to responsible authorities via messaging apps',
            '24/7 low-power operation with scheduled interval support',
          ],
          techStack: 'Python, TensorFlow, OpenCV, Computer Vision, MLOps, MQTT',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ai2',
        gradient: 'from-pink-900 to-rose-900',
        title: 'AI Agents with CrewAI',
        description: 'Autonomous multi-agent AI applications built with CrewAI for complex task automation and intelligent workflow orchestration.',
        category: 'aiml',
        tags: ['CrewAI', 'Python', 'LLM', 'Autonomous Agents'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Built autonomous AI agent applications using CrewAI framework, designing multi-agent systems capable of orchestrating complex workflows and task automation.',
          features: [
            'Multi-agent orchestration with CrewAI',
            'Autonomous task delegation and execution',
            'LLM integration for intelligent decision-making',
            'Custom tools and memory for persistent agent context',
            'Workflow automation for complex multi-step processes',
          ],
          techStack: 'Python, CrewAI, LangChain, OpenAI API, Anthropic API',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ai3',
        gradient: 'from-cyan-900 to-blue-900',
        title: 'AI for Oncology Research (Series)',
        description: 'Series of systematic reviews and meta-analyses evaluating AI and deep learning models for early cancer detection across multiple cancer types.',
        category: 'aiml',
        tags: ['Medical AI', 'Deep Learning', 'Computer Vision', 'Research'],
        cvAreas: ['aiml'],
        details: {
          overview: 'A research series applying AI and deep learning to early cancer detection, covering bone, hematologic, prostate, skin, breast, and colorectal cancers using medical imaging and genomic data.',
          features: [
            'Systematic reviews on AI models for bone cancer detection (CT, MRI, X-ray)',
            'ML approaches for hematologic malignancy detection via clinical and genomic data',
            'AI-assisted prostate cancer screening with imaging and biomarker integration',
            'Deep learning for skin cancer classification (melanoma focus)',
            'CNN architectures for mammographic breast cancer screening',
            'AI-driven colorectal cancer detection via endoscopic imaging',
          ],
          techStack: 'Python, TensorFlow, PyTorch, Medical Imaging Libraries, Systematic Review Methodology',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    challenges: [
      {
        id: 'proj-ch1',
        gradient: 'from-red-900 to-pink-900',
        title: 'TSP Multi-Algorithm Implementation',
        description: 'Travelling Salesman Problem solved with multiple algorithms (brute force, greedy, dynamic programming) implemented in Python, Java, and Go.',
        category: 'challenges',
        tags: ['Python', 'Java', 'Go', 'Algorithms'],
        cvAreas: ['software'],
        details: {
          overview: 'A multi-language implementation of the Travelling Salesman Problem using various algorithmic approaches, comparing time complexity and performance across brute force, greedy, and dynamic programming solutions.',
          features: [
            'Brute force, greedy, and dynamic programming implementations',
            'Side-by-side performance comparison across algorithms',
            'Python, Java, and Go implementations for cross-language benchmarking',
            'Visual output of routes and optimization progress',
            'Time and space complexity analysis documentation',
          ],
          techStack: 'Python, Java, Go',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ch2',
        gradient: 'from-amber-900 to-yellow-900',
        title: 'Chess Engine (Shannon Algorithm)',
        description: 'Chess engine built on Claude Shannon\'s minimax algorithm with alpha-beta pruning for efficient move evaluation.',
        category: 'challenges',
        tags: ['Python', 'Algorithms', 'AI', 'Game Theory'],
        cvAreas: ['software', 'aiml'],
        details: {
          overview: 'A chess engine inspired by Claude Shannon\'s foundational approach to computer chess, implementing minimax with alpha-beta pruning for efficient game tree search.',
          features: [
            'Minimax algorithm with alpha-beta pruning',
            'Shannon\'s evaluation function for board state scoring',
            'Configurable search depth for difficulty levels',
            'Full chess rules implementation (castling, en passant, promotion)',
            'Command-line and visual interface options',
          ],
          techStack: 'Python, Minimax, Alpha-Beta Pruning, Game Tree Search',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ch3',
        gradient: 'from-emerald-900 to-teal-900',
        title: 'Open Source Contributions',
        description: 'Contributions to open-source projects: Fighting Cancer Now (oncology fundraising) and dinheironamao (Brazilian fintech with P2P crypto lending).',
        category: 'challenges',
        tags: ['Node.js', 'React', 'Open Source', 'Fintech'],
        cvAreas: ['software'],
        details: {
          overview: 'Active open-source contributor to social impact and fintech projects, including Fighting Cancer Now (oncology fundraising platform) and dinheironamao (P2P crypto lending fintech).',
          features: [
            'Fighting Cancer Now — oncology fundraising platform development',
            'dinheironamao — Brazilian fintech with P2P crypto lending features',
            'Full-stack feature development and bug fixes',
            'Code review and documentation contributions',
            'Community collaboration and issue resolution',
          ],
          techStack: 'Node.js, React, JavaScript, TypeScript, Firebase',
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