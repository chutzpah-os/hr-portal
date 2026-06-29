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
  image?: string
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
  type?: 'degree' | 'course'
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
  image?: string
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
  image?: string
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
  image?: string
}

export interface Award {
  id: string
  title: string
  issuer: string
  year: string
  description?: string
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
  awards: Award[]
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
      title: 'Sales Representative',
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
      type: 'degree',
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
      type: 'degree',
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
      type: 'course',
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
      type: 'course',
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
      type: 'course',
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
      type: 'course',
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
      image: '/images/psff.jpg',
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
      image: '/images/pmi.jpg',
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
      image: '/images/advoctech.png',
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
      image: '/images/gdgaracaju.jpg',
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
      image: '/images/rotary.jpg',
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
      image: '/images/cpbb.png',
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
        verificationLink: 'https://youtu.be/P24KDOH8mNI?si=esDMWjFPKW4xFDqs',
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
    ],
    cybersecurity: [
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
        id: 'proj-sw1',
        gradient: 'from-blue-900 to-indigo-900',
        title: 'Problem Solver Foundation Platform',
        description: 'Data mining system that crawls the internet in search of real, unsolved problems — powering the 1b2035 mission to connect problem-solvers with high-impact challenges worldwide.',
        category: 'dataEngineering',
        tags: ['Python', 'Web Scraping', 'NLP', 'BigQuery', 'ETL'],
        cvAreas: ['data'],
        details: {
          overview: 'A data mining system that crawls and scrapes the internet in search of real, unsolved problems — powering the 1b2035 mission to connect problem-solvers with high-impact challenges worldwide. The pipeline collects, classifies, and surfaces problems from forums, news, research papers, and social signals.',
          features: [
            'Web scraping pipeline collecting problem signals from forums, news, Reddit, and research sources',
            'NLP classification layer to extract, deduplicate, and categorize problems by domain and severity',
            'ETL pipeline loading structured problem data into BigQuery for analysis and pattern detection',
            'Trend analysis identifying high-frequency unsolved problems across geographies and sectors',
            'Automated scoring model ranking problems by impact potential and solver availability',
            'Firestore serving curated problem datasets to the community platform in real time',
          ],
          techStack: 'Python, BeautifulSoup, Scrapy, NLP, BigQuery, Firestore, ETL, JavaScript',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    aiml: [
      {
        id: 'proj-cy1',
        gradient: 'from-red-900 to-orange-900',
        title: 'Computer Vision Personnel Detection System',
        description: 'Automated 24/7 monitoring system for controlled environments, activating on motion/human detection and alerting authorities in real time.',
        category: 'aiml',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
        cvAreas: ['aiml'],
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
        gradient: 'from-red-900 to-rose-900',
        title: 'Running for Hope — 1,000-Mile Challenge',
        description: 'A 1,000-mile endurance running challenge to raise sustained funding for cancer research, documented through social media, a book, and a documentary film.',
        category: 'challenges',
        tags: ['Social Impact', 'Fundraising', 'Health', 'Media'],
        cvAreas: ['software'],
        details: {
          overview: 'A multi-channel fundraising ecosystem converting physical endurance and storytelling into sustained financial support for cancer research. The 1,000-mile running challenge is broadcast on social media and extended through a book and documentary film to maximize reach and global awareness.',
          features: [
            '1,000-mile running challenge as the core fundraising engine',
            'Real-time social media broadcasting of training and progress',
            'Book documenting the journey, mission, and human stories behind cancer research',
            'Documentary film expanding reach to global audiences',
            'Multi-channel donation funnel linking endurance sport, publishing, and film',
          ],
          techStack: 'Social Media, Content Production, Fundraising Platforms',
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

  awards: [
    {
      id: 'award1',
      title: 'Top 1.2% — Competitive Selection Exam',
      issuer: 'Stealth Selection Process',
      year: '2018',
      description:
        'At age 18, successfully passed a highly competitive exam with four phases, including written and physical fitness tests, ranking in the top 1.2%.',
    },
  ],
}
