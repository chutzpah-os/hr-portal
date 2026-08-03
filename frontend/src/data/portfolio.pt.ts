import type { PortfolioData } from './portfolio.types'

export const portfolioDataPt: PortfolioData = {
  personal: {
    name: 'Haniel Rolemberg',
    title: 'Engenheiro de IA e Pesquisador',
    about: [
      'Eu sou um Solucionador de Problemas — alguém que transforma desafios em oportunidades através de tecnologia, estratégia e propósito.',
      'Com uma base sólida em Cibersegurança (Zero Trust, NIST CSF, AppSec, SIEM/SOAR, Penetration Testing), Machine Learning (MLOps, Visão Computacional, LLMs, Agentes de IA) e Engenharia de Dados (Apache Spark, Airflow), eu me destaco em construir produtos seguros, escaláveis e orientados a dados que geram impacto real.',
      'Minha missão é clara: impactar 1 bilhão de vidas até 2035 (1b2035) através de inovação, educação e resolução inteligente de problemas. Essa é a força motriz por trás da Problem Solver Foundation, uma iniciativa que capacita pessoas a enfrentar a complexidade, pensar criticamente e agir com propósito.',
    ],
  },

  experience: [
    {
      id: 'exp1',
      title: 'Machine Learning Engineer',
      company: 'SSP',
      period: 'Sep 2025 - Present',
      description:
        'Construiu o SentinelAI, um sistema orientado por IA para detectar e analisar incidentes urbanos, aprimorando a consciência situacional nos setores de mobilidade, segurança e gestão urbana. Operando 24/7, registrando mais de 100 pessoas diariamente e mais de 200 objetos rastreados simultaneamente.',
      tags: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'Next.js', 'Supabase', 'WebSocket'],
      cvAreas: ['aiml'],
      details: {
        overview:
          'Construiu o SentinelAI — um sistema orientado por IA para detectar e analisar incidentes urbanos, aprimorando a consciência situacional nos setores de mobilidade, segurança e gestão urbana. Backend em Python (FastAPI) conectado a fluxos de vídeo RTSP/webcam, OpenCV + YOLOv8 para detecção de objetos/pessoas em tempo real; frontend Next.js + TailwindCSS; Supabase para autenticação/storage; eventos comunicados via WebSocket/REST em JSON (timestamp, camera_id, event_type, confidence, bounding_box). Operando 24 horas por dia desde a ativação em zonas críticas, sem interrupção não intencional.',
        keyAreas: [
          'Projetou e construiu o SentinelAI: sistema de detecção de incidentes urbanos em tempo real operando 24/7 em zonas críticas',
          'Backend Python (FastAPI) ingerindo fluxos de vídeo RTSP/webcam com OpenCV + YOLOv8 para detecção de objetos/pessoas',
          'Eventos comunicados via WebSocket/REST em JSON (timestamp, camera_id, event_type, confidence, bounding_box)',
          'Frontend Next.js + TailwindCSS; Supabase para autenticação e storage',
          'Registrando mais de 100 pessoas diariamente e mais de 200 objetos rastreados simultaneamente, sem interrupções não intencionais',
        ],
        technologies: 'Python, FastAPI, OpenCV, YOLOv8, Next.js, TailwindCSS, Supabase, WebSocket, REST, RTSP, Computer Vision, MLOps',
      },
    },
    {
      id: 'exp4',
      title: 'Data Analyst',
      company: 'SSP',
      period: 'Sep 2024 - Sep 2025',
      description:
        'Transformou dados brutos em insights de negócio acionáveis, impactando mais de 2.000 funcionários em mais de 11 unidades e aproximadamente 1 milhão de pessoas na população atendida.',
      tags: ['Python', 'SQL', 'Power BI', 'Tableau'],
      cvAreas: ['data'],
      details: {
        overview:
          'Transformou dados brutos em insights de negócio acionáveis para impulsionar a tomada de decisão estratégica e o crescimento através de analytics avançado e automação. Impactou mais de 2.000 funcionários em mais de 11 unidades organizacionais e aproximadamente 1 milhão de pessoas na população atendida.',
        keyAreas: [
          'Transformação de dados brutos em insights de negócio acionáveis para impulsionar a tomada de decisão estratégica',
          'Uso de Python, SQL, Tableau e Power BI para análise e visualização avançada de dados',
          'Automação de fluxos de trabalho complexos e pipelines de dados para aumentar a eficiência operacional',
          'Impactou mais de 2.000 funcionários em mais de 11 unidades organizacionais',
          'Apoiou soluções orientadas a dados atendendo uma população de aproximadamente 1 milhão de pessoas',
        ],
        technologies: 'Python, SQL, Tableau, Power BI, Pandas, NumPy, Apache Airflow',
      },
    },
    {
      id: 'exp2',
      title: 'Cyber Security Engineer',
      company: 'SSP',
      period: 'Apr 2023 - Sep 2024',
      description:
        'Projetou e protegeu infraestrutura de rede corporativa na matriz e em mais de 30 subunidades regionais. Suportou sistemas críticos para mais de 5.000 usuários ativos diários como parte de uma equipe enxuta de 2 a 3 pessoas.',
      tags: ['SIEM/SOAR', 'FortiGate', 'Penetration Testing', 'VMware vSphere', 'Hyper-V'],
      cvAreas: ['cyber'],
      details: {
        overview:
          'Planejou, implantou e protegeu infraestrutura de rede corporativa na matriz e em mais de 30 subunidades regionais. Suportou sistemas críticos para mais de 5.000 usuários ativos diários como parte de uma equipe enxuta de 2 a 3 pessoas.',
        keyAreas: [
          'Planejamento e gestão de infraestruturas de rede corporativas com Active Directory (Windows Server) em mais de 30 sites',
          'Implantação de soluções FortiGate, FortiSwitch e FortiAP, aumentando a escalabilidade e visibilidade da rede',
          'Execução de testes de invasão e avaliações de vulnerabilidade, identificando e mitigando riscos críticos de segurança',
          'Implementação de soluções SIEM/SOAR para detecção de ameaças e resposta automatizada a incidentes',
          'Gestão de NGFWs Cisco, HP e Fortinet, SD-WAN, VLAN, VoIP, VPN, VPS e componentes de infraestrutura Oracle',
          'Virtualização com VMware vSphere e Hyper-V em ambientes on-premises (CentOS, Ubuntu, Debian)',
          'Implementação de Hyper-V Failover Clusters com Cluster Shared Volumes (CSV) para alta disponibilidade',
          'Gestão de servidores Windows/Linux com hardening de segurança e soluções de backup (Veeam)',
          'Liderança de migrações de data center; segmentação VLAN com monitoramento contínuo',
        ],
        technologies:
          'FortiGate, FortiSwitch, FortiAP, Cisco, HP, Fortinet NGFW, SD-WAN, VLAN, VoIP, VPN, VMware vSphere, Hyper-V, Veeam, Active Directory, Windows/Linux Servers, SIEM/SOAR, Penetration Testing, Oracle Cloud',
      },
    },
    {
      id: 'exp3',
      title: 'Software Engineer',
      company: 'SSP',
      period: 'Apr 2022 - Apr 2023',
      description: 'Desenvolveu aplicações web e mobile full-stack. Entregou o escopo de sprint em 25% do prazo alocado em média. Projeto notável: ETZ — plataforma empresarial em monorepo Turborepo + pnpm com backend Firebase serverless, RBAC, trilha de auditoria e infraestrutura AWS.',
      tags: ['React', 'Next.js', 'NestJS', 'Node.js', 'TypeScript', 'Java', 'Kotlin'],
      cvAreas: ['software'],
      details: {
        overview: 'Desenvolveu aplicações web full-stack (Java, JavaScript/TypeScript — NestJS, Node, Next) e mobile (Java, Kotlin, Expo, React Native). Entregou o escopo de sprint em 25% do prazo alocado em média — redução de 75% no tempo de entrega. Projeto interno notável: ETZ, uma plataforma Next.js 16 (App Router) em monorepo Turborepo + pnpm com backend Firebase serverless.',
        keyAreas: [
          'Aplicações web full-stack (Java, JavaScript/TypeScript — NestJS, Node.js, Next.js) e mobile (Java, Kotlin, Expo, React Native)',
          'DevSecOps, segurança de aplicações e projetos de API',
          'Design de banco de dados em PostgreSQL, MySQL, SQLite, MongoDB, Firebase Firestore, Supabase e tecnologias ORM',
          'Redução de carga de leitura do banco de dados em mais de 50% por otimização de queries e cache',
          'Entregou o escopo de sprint em 25% do prazo alocado em média (redução de 75% no tempo de entrega)',
          'ETZ: Next.js 16 (App Router) em Turborepo + pnpm, Firebase serverless (Firestore, Auth, Storage), RBAC com isolamento estrito por unidade, trilha de auditoria em cada operação, infraestrutura AWS',
        ],
        technologies: 'JavaScript, TypeScript, Java, Kotlin, React, React Native, Expo, Node.js, NestJS, Express, FastAPI, Python, C, C++, PostgreSQL, MySQL, MongoDB, Firebase Firestore, Supabase',
      },
    },
    {
      id: 'exp6',
      title: 'Penetration Tester',
      company: 'ClicKesef',
      period: 'Apr 2019 - Apr 2022',
      description:
        'Realizou mais de 100 testes de invasão em aplicações e infraestrutura de clientes; identificou mais de 100 CVEs, reduzindo a exposição crítica em 40%. Apoiou a resposta a incidentes em mais de 25 incidentes de segurança.',
      tags: ['Penetration Testing', 'SIEM', 'APT', 'CVE Analysis', 'Incident Response'],
      cvAreas: ['cyber'],
      details: {
        overview:
          'Realizou testes de invasão estruturados e avaliações de vulnerabilidades em ambientes de clientes, apoiou detecção baseada em SIEM, rastreou atividade APT e conduziu operações de resposta a incidentes.',
        keyAreas: [
          'Monitoramento de eventos de segurança e suporte à detecção baseada em SIEM, contribuindo para triagem e relatório de incidentes',
          'Rastreamento e investigação de atividade de Ameaça Persistente Avançada (APT), correlacionando indicadores de comprometimento',
          'Realização de avaliações de vulnerabilidades e análise de CVE, identificando mais de 100 CVEs em sistemas de clientes, reduzindo a exposição crítica em 40%',
          'Execução de mais de 100 testes de invasão em aplicações e infraestrutura de clientes, identificando vulnerabilidades críticas antes da exploração em produção',
          'Apoio a operações de resposta a incidentes em mais de 25 incidentes de segurança, documentando procedimentos que melhoraram a consistência da resposta',
        ],
        technologies: 'Kali Linux, Nmap, Metasploit, Burp Suite, SIEM, Penetration Testing tools, Python, Bash, CVE analysis',
      },
    },
    {
      id: 'exp7',
      title: 'Software Engineer',
      company: 'ClicKesef',
      period: 'Aug 2017 - Apr 2019',
      description:
        'Desenvolveu aplicações web e mobile full-stack com JavaScript, TypeScript, Java e Kotlin. Construiu serviços de backend com Node.js e integrou APIs RESTful.',
      tags: ['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Node.js', 'React', 'React Native'],
      cvAreas: ['software'],
      details: {
        overview:
          'Desenvolveu aplicações web full-stack (JavaScript/TypeScript — NestJS, Next.js) e mobile (Java, Kotlin, Expo, React Native). Construiu serviços de backend com Node.js e integrou APIs RESTful para serviços de terceiros. Participou em processos de desenvolvimento ágil em equipes multifuncionais.',
        keyAreas: [
          'Desenvolvimento web full-stack (JavaScript/TypeScript — NestJS, Next.js) e mobile (Java, Kotlin, Expo, React Native)',
          'Construção de aplicações web responsivas com JavaScript e React',
          'Criação de serviços de backend com Node.js e integração de APIs RESTful para interação com serviços de terceiros',
          'Participação em processos de desenvolvimento ágil, contribuindo para a entrega eficiente de projetos em equipes multifuncionais',
        ],
        technologies: 'JavaScript, TypeScript, Java, Kotlin, React, React Native, Expo, Node.js, NestJS, Next.js, Express, Python, C, C++',
      },
    },
    {
      id: 'exp5',
      title: 'Sales Representative',
      company: 'Family Business',
      period: 'Jul 2011 - Jul 2017',
      description:
        'Vendas B2C e depois B2B porta a porta no nordeste do Brasil. Atendeu mais de 700 clientes, gerando quase R$1M em vendas antes de partir para os estudos em tecnologia.',
      tags: ['B2B', 'B2C', 'Negotiation', 'CRM'],
      cvAreas: [],
      details: {
        overview:
          'Começou com vendas B2C e depois migrou para prospecção B2B porta a porta. Realizou contato inicial, apresentação de produtos, qualificação de leads e gestão de contratos e fechamentos. Cultivou relacionamentos com clientes (aumentando o LTV) e organizou eventos com instituições locais (reduzindo o CAC). Atendeu mais de 700 clientes, gerando quase R$1M em vendas.',
        keyAreas: [
          'Iniciou com B2C, migrou para vendas B2B porta a porta em Sergipe, Bahia e Alagoas',
          'Realizou contato inicial, apresentação de produtos, qualificação de leads e gestão de contratos e fechamentos',
          'Cultivou relacionamentos com clientes (aumentando o LTV) e organizou eventos com instituições locais (reduzindo o CAC)',
          'Atendeu mais de 700 clientes, gerando quase R$1M em vendas antes de partir para os estudos em tecnologia',
        ],
        technologies: 'B2B Sales, B2C Sales, Negotiation, CRM, Lead Generation, Event Organizing',
      },
    },
  ],

  education: [
    {
      id: 'edu1',
      type: 'degree',
      title: 'Bacharelado em Ciência da Computação',
      institution: 'Estácio',
      period: '2022 - 2026',
      description:
        'IA, sistemas computacionais, redes, segurança, bancos de dados, IHC, linguagens de programação, engenharia de software, cibersegurança, bioinformática e teoria da computação.',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview: 'Formação abrangente em ciência da computação cobrindo todo o espectro da computação moderna, de sistemas e redes até IA, segurança e engenharia de software.',
        keyAreas: [
          'Inteligência Artificial e Machine Learning',
          'Sistemas Computacionais e Redes',
          'Segurança e Cibersegurança',
          'Sistemas de Banco de Dados',
          'Interação Humano-Computador',
          'Visão Computacional e Computação Gráfica',
          'Engenharia de Software e Linguagens de Programação',
          'Bioinformática e Teoria da Computação',
        ],
      },
    },
    {
      id: 'edu2',
      type: 'degree',
      title: 'Bacharelado em Gestão Pública',
      institution: 'Estácio',
      period: '2017 - 2019 • GPA: 4.97/5',
      description:
        'Teoria Democrática, Economia, Política Internacional, Governança, Finanças Públicas, Direito Constitucional, Planejamento Estratégico e Mudança Social.',
      cvAreas: [],
      details: {
        overview:
          'Base sólida em governança, políticas públicas e gestão estratégica com desempenho acadêmico de destaque (GPA 4.97/5). Concluído em 4 a 5 semestres.',
        gpa: '4.97/5.0',
        keyCourses: [
          'Teoria Democrática e Governança',
          'Dinheiro, Mercados e Políticas Econômicas',
          'Política Internacional',
          'Finanças Públicas e Direito Constitucional',
          'Política Comparada',
          'Contabilidade Geral e Pública',
          'Planejamento Estratégico e Mudança Social',
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
        'Monitoramento de rede, detecção de ameaças, SIEM, IDS, testes de invasão, resposta a incidentes, forense e governança de cibersegurança.',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Treinamento abrangente em cibersegurança cobrindo defesa de rede, detecção de ameaças, resposta a incidentes e investigações forenses. Credencial emitida pela Cisco.',
        skillsDeveloped: [
          'Gestão de Eventos e Informações de Segurança (SIEM)',
          'Sistemas de Detecção de Intrusão (IDS)',
          'Testes de Invasão e Avaliação de Vulnerabilidades',
          'Resposta a Incidentes e Análise de Malware',
          'Segurança de Rede, Hardening e WLANs',
          'Firewall, Segurança em Nuvem e Criptografia',
          'Investigações Forenses e Gestão de Riscos',
          'Governança de Cibersegurança e Defesa em Profundidade',
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
        'Hacking ético, testes de invasão e avaliação de vulnerabilidades em aplicações, redes e dispositivos IoT usando Kali Linux e ferramentas de pentest.',
      cvAreas: ['cyber'],
      details: {
        overview:
          'Experiência prática em hacking ético, testes de invasão e avaliação de vulnerabilidades. Credencial emitida pela Cisco a Haniel Rolemberg.',
        skillsDeveloped: [
          'Monitoramento de Segurança e Testes de Invasão',
          'Metodologias de Hacking Ético',
          'Kali Linux e Ferramentas WebSploit',
          'Avaliação de Vulnerabilidades (Aplicações, Redes, IoT)',
          'Detecção de Engenharia Social e Relatórios de Segurança',
          'Boas Práticas Legais e de Compliance em Segurança',
          'Python e Bash para Automação de Segurança',
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
        'Dispositivos Cisco e IOS, endereçamento IPv4/IPv6, protocolos de rede, troubleshooting, serviços em nuvem e acesso wireless.',
      cvAreas: ['cyber'],
      details: {
        overview: 'Habilidades abrangentes de rede para design, troubleshooting e suporte de redes. Credencial emitida pela Cisco a Haniel Rolemberg.',
        skillsDeveloped: [
          'Dispositivos Cisco, IOS, Roteadores e Switches',
          'Endereçamento IPv4 e IPv6',
          'Protocolos de Camada de Rede e de Transporte',
          'Cabeamento de Cobre e Fibra',
          'Troubleshooting de Rede, Help Desk e Suporte ao Usuário',
          'Design Hierárquico de Redes',
          'Serviços em Nuvem e Acesso Wireless',
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
        'Algoritmos, estruturas de dados, C, Python, SQL e desenvolvimento web — o programa CS50 de Harvard no Brasil.',
      cvAreas: ['software', 'data'],
      details: {
        overview:
          'Curso CS50 de Harvard concluído no Brasil via Fundação Estudar, cobrindo os fundamentos intelectuais da ciência da computação e da programação.',
        skillsDeveloped: [
          'Algoritmos e Estruturas de Dados',
          'Linguagem de Programação C',
          'Python e SQL',
          'Desenvolvimento Web (HTML, CSS, JavaScript)',
          'Decomposição de problemas e pensamento computacional',
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
      description: 'Construindo uma comunidade com a missão de impactar 1 bilhão de vidas até 2035.',
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
      details: {
        overview:
          'Somos a Problem Solvers Foundation — uma comunidade com a missão de impactar 1 bilhão de vidas até 2035. Capacitando pessoas a enfrentar a complexidade, pensar criticamente e agir com propósito.',
        focusAreas: [
          'Educação em Inovação e Tecnologia',
          'Treinamento em Pensamento Crítico e Resolução de Problemas',
          'Construção de Comunidade e Colaboração Internacional',
          'Capacitação de Pessoas para Enfrentar a Complexidade com Propósito',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol2',
      title: 'Voluntário',
      organization: 'Terry Fox Foundation',
      period: '2025 - Present',
      description: 'Arrecadando fundos para pesquisa do câncer através do desafio de corrida 1K Miles of Hope.',
      cvAreas: [],
      details: {
        overview:
          'Arrecadando fundos para pesquisa do câncer através do desafio de corrida 1K Miles of Hope — um desafio de resistência de 1.000 milhas em apoio à missão da Terry Fox Foundation.',
        focusAreas: [
          'Arrecadação de fundos para pesquisa do câncer',
          '1K Miles of Hope — desafio de corrida de 1.000 milhas',
          'Conscientização internacional para a Terry Fox Foundation',
        ],
        category: 'Health and Cancer Research',
      },
    },
    {
      id: 'vol3',
      title: 'Strategic Alliances | IT',
      organization: 'Project Management Institute (PMI)',
      period: 'Apr 2024 - Present',
      image: '/images/pmi.jpg',
      description: 'Apoiando parcerias estratégicas, operações de TI e iniciativas conjuntas, incluindo o Agile Brazil e o Produte-SE.',
      cvAreas: ['software'],
      details: {
        overview:
          'Apoiando a área de Parcerias Estratégicas, ajudando a coordenar colaborações e iniciativas conjuntas. Contribuindo para a estratégia de TI e operações digitais.',
        responsibilities: [
          'Coordenação de alianças estratégicas e iniciativas conjuntas da comunidade',
          'Representação do PMI em eventos como o Agile Brazil',
          'Apoio às operações de TI para fortalecer a estratégia digital',
          'Colaboração com o Produte-SE e o GDG Aracaju em eventos intercomunitários',
        ],
        category: 'Economic Empowerment',
      },
    },
    {
      id: 'vol4',
      title: 'Tech Advocate',
      organization: 'Tech Brazil Advocates',
      period: 'Jan 2024 - Present',
      image: '/images/advoctech.png',
      description: 'Mapeando o ecossistema local de inovação tecnológica em Sergipe, Brasil.',
      cvAreas: ['software'],
      details: {
        overview:
          'Responsável por mapear todo o ecossistema local de inovação aplicado à tecnologia em Sergipe, conectando startups, instituições e profissionais de tecnologia.',
        focusAreas: [
          'Mapeamento e documentação do ecossistema tecnológico local',
          'Conexão entre inovadores, startups e instituições em Sergipe',
          'Promoção da conscientização e adoção de tecnologia',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol5',
      title: 'Community Leader',
      organization: 'GDG Aracaju (Google Developer Group)',
      period: 'Oct 2023 - Nov 2024',
      image: '/images/gdgaracaju.jpg',
      description: 'Liderou mais de 25 voluntários para capacitar mais de 300 profissionais de tecnologia através de eventos, workshops e mentoria.',
      cvAreas: ['software'],
      details: {
        overview:
          'O Google Developer Group Aracaju é uma comunidade independente e sem fins lucrativos apoiada pelo Google. Atuou como gestor de projetos e processos, organizando eventos técnicos na Universidade Federal de Sergipe e além.',
        responsibilities: [
          'Gestão de projetos e processos para todas as atividades da comunidade',
          'Liderança de uma equipe dedicada de mais de 25 voluntários',
          'Engajamento de comunidade com mais de 300 membros ativos',
          'Organização de workshops técnicos (ex: Go/Golang na UFS para sistemas de filas)',
          'Realização de eventos de mercado de trabalho universitário com empresas e equipes de RH',
          'Representação do GDG Aracaju em eventos do Agile Brazil e Produte-SE',
        ],
        category: 'Science and Technology',
      },
    },
    {
      id: 'vol6',
      title: 'Volunteer Staff',
      organization: 'Rotary International / Rotaract',
      period: 'Oct 2022 - Sep 2023',
      image: '/images/rotary.jpg',
      description: 'Contribuindo para iniciativas de proteção ambiental, saúde, educação e paz.',
      cvAreas: [],
      details: {
        overview:
          'Contribuindo para a missão do Rotary International de gerar mudanças duradouras em comunidades ao redor do mundo em seis áreas de foco.',
        focusAreas: [
          'Proteção Ambiental',
          'Saúde Materno-Infantil',
          'Apoio à Educação',
          'Desenvolvimento Econômico',
          'Promoção da Paz',
          'Combate a Doenças e Água Limpa & Saneamento',
        ],
        category: 'Social Services',
      },
    },
    {
      id: 'vol7',
      title: 'Board Member / Volunteer',
      organization: 'Clube Poliglota Brasil',
      period: 'Jan 2021 - Sep 2023',
      image: '/images/cpbb.png',
      description: 'Gerenciou uma equipe de criadores de conteúdo, implementou estratégias de SEO e growth hacking, melhorou a performance do blog com PHP e foi autor de um livro sobre aprendizado de idiomas.',
      cvAreas: ['software'],
      details: {
        overview:
          'Ingressou como membro do conselho para garantir um planejamento organizacional eficaz. Gerenciou uma equipe de 5 criadores de conteúdo e 2 revisores, aumentando o tráfego do blog através de SEO e growth hacking.',
        responsibilities: [
          'Planejamento e execução organizacional em nível de conselho',
          'Gestão de uma equipe de 5 criadores de conteúdo e 2 revisores',
          'Desenvolvimento e execução de estratégias de SEO e growth hacking',
          'Desenvolvimento em PHP para reduzir gargalos e melhorar a velocidade da página',
          'Redação de artigos sobre o processo de aprendizado de idiomas',
          'Autoria de um livro sobre aprendizado de idiomas durante essa experiência',
        ],
        category: 'Education',
      },
    },
  ],

  skills: [
    {
      name: 'Linguagens de Programação',
      items: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'Kotlin', 'C', 'SQL', 'Bash'],
      cvAreas: ['cyber', 'aiml', 'data', 'software'],
    },
    {
      name: 'Desenvolvimento Web/Mobile',
      items: ['React', 'React Native', 'Expo', 'Next.js', 'Node.js', 'NestJS', 'Express', 'FastAPI', 'Spring Boot'],
      cvAreas: ['software'],
    },
    {
      name: 'IA / ML',
      items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'XGBoost', 'OpenCV', 'YOLOv8', 'Computer Vision', 'LangChain', 'LangGraph', 'RAG', 'LLMs', 'AI Agents', 'CrewAI', 'ReAct Agents', 'n8n', 'MLflow', 'MLOps'],
      cvAreas: ['aiml'],
    },
    {
      name: 'Engenharia de Dados',
      items: ['Apache Spark', 'Apache Airflow', 'Databricks', 'ETL', 'BigQuery', 'Power BI', 'Tableau', 'Pandas', 'NumPy'],
      cvAreas: ['data'],
    },
    {
      name: 'Bancos de Dados',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase / Firestore', 'Supabase', 'SQLite'],
      cvAreas: ['data', 'software'],
    },
    {
      name: 'Cibersegurança & Redes',
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
      language: 'Português',
      level: 'Nativo',
      proficiency: 100,
      details: {
        description: 'Falante nativo com plena proficiência profissional em português brasileiro.',
        certifications: [
          'Língua Nativa — Nascido e criado no Brasil',
          'Comunicação profissional em contextos de negócios e técnicos',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang2',
      language: 'Inglês',
      level: 'Avançado (C1)',
      proficiency: 90,
      details: {
        description: 'Inglês avançado (C1) com fortes habilidades de comunicação profissional e técnica em contextos internacionais de negócios, documentação e liderança comunitária.',
        certifications: [
          'Proficiência Avançada (C1)',
          'Documentação técnica e apresentações',
          'Negócios internacionais e liderança comunitária',
        ],
        verificationLink: 'https://youtu.be/P24KDOH8mNI?si=esDMWjFPKW4xFDqs',
      },
    },
    {
      id: 'lang3',
      language: 'Espanhol',
      level: 'Intermediário (B1)',
      proficiency: 75,
      details: {
        description: 'Proficiência intermediária em espanhol com foco em contextos de negócios e técnicos.',
        certifications: [
          'Proficiência Intermediária (B1)',
          'Proficiência em espanhol de negócios',
          'Leitura e escrita de documentação técnica',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang4',
      language: 'Francês',
      level: 'Intermediário (B1)',
      proficiency: 65,
      details: {
        description: 'Francês intermediário (B1) com compreensão de leitura e comunicação profissional.',
        certifications: [
          'Proficiência Intermediária (B1)',
          'Compreensão de leitura técnica',
          'Educação autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang5',
      language: 'Catalão',
      level: 'Elementar (A1)',
      proficiency: 30,
      details: {
        description: 'Catalão elementar com leitura e compreensão básicas.',
        certifications: [
          'Proficiência Elementar (A1)',
          'Compreensão básica de leitura',
          'Educação autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang6',
      language: 'Hebraico',
      level: 'Elementar (A1)',
      proficiency: 20,
      details: {
        description: 'Proficiência elementar com foco em leitura e comunicação básica.',
        certifications: [
          'Proficiência Elementar (A1)',
          'Hebraico conversacional básico',
          'Educação autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
    {
      id: 'lang7',
      language: 'Russo',
      level: 'Elementar (A1)',
      proficiency: 20,
      details: {
        description: 'Russo básico com foco em terminologia técnica e leitura.',
        certifications: [
          'Proficiência Elementar (A1)',
          'Familiaridade com terminologia técnica',
          'Educação autodirigida contínua',
        ],
        verificationLink: '#',
      },
    },
  ],

  // Certifications are not translated — official credential names kept as-is
  certifications: [
    { id: 'cert1', title: 'Claude Code in Action', issuer: 'Anthropic', date: '2026', category: 'development', cvAreas: ['software', 'aiml'], tags: ['Claude Code', 'AI Agents', 'LLMs', 'Anthropic'] },
    { id: 'cert2', title: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', date: '2026', category: 'development', cvAreas: ['software', 'aiml'], tags: ['MCP', 'AI Agents', 'LLMs', 'Anthropic'] },
    { id: 'cert3', title: 'OWASP API Security', issuer: 'APIsec University', date: 'Feb 2026', category: 'security', cvAreas: ['cyber', 'software'], tags: ['API Security', 'OWASP', 'AppSec'] },
    { id: 'cert4', title: 'Introduction to Technological Maturity (TRL)', issuer: 'Agência Espacial Brasileira', date: 'Jan 2026', category: 'development', cvAreas: ['aiml', 'software'], tags: ['TRL', 'Technology Readiness', 'Research'] },
    { id: 'cert5', title: 'Intro to Splunk', issuer: 'Splunk', date: 'Jan 2026', category: 'security', cvAreas: ['cyber'], tags: ['Splunk', 'SIEM', 'Security Monitoring'] },
    { id: 'cert6', title: 'Creating Your First Agent with CrewAI', issuer: 'DIO', date: '2025', category: 'development', cvAreas: ['aiml'], tags: ['CrewAI', 'Autonomous Agents', 'AI'] },
    { id: 'cert7', title: 'Building AI Applications with Autonomous Agents', issuer: 'DIO', date: '2025', category: 'development', cvAreas: ['aiml'], tags: ['AI Agents', 'LLM', 'AI Engineering'] },
    { id: 'cert8', title: 'DIO Campus Expert — University Ambassador', issuer: 'DIO', date: '2025', category: 'development', cvAreas: [], tags: ['Community', 'University Ambassador', 'Tech Education'] },
    { id: 'cert9', title: 'Certified Phishing Prevention Specialist (CPPS)', issuer: 'Hack & Fix', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], credentialId: '3648-2721-6004-1331', tags: ['Phishing', 'Social Engineering', 'Security Awareness'] },
    { id: 'cert10', title: 'Cyber Threat Management', issuer: 'Cisco', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], tags: ['Threat Intelligence', 'CTI', 'Disaster Recovery'] },
    { id: 'cert11', title: 'Databricks Fundamentals Accreditation', issuer: 'Databricks', date: 'Jan 2025', category: 'data', cvAreas: ['data'], tags: ['Databricks', 'ETL', 'Data Engineering'] },
    { id: 'cert12', title: 'Digital Forensics & Incident Response', issuer: 'Mente Binária', date: '2025', category: 'security', cvAreas: ['cyber'], tags: ['DFIR', 'Forensics', 'Incident Response'] },
    { id: 'cert13', title: 'Cybersecurity Fundamentals', issuer: 'IBM', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], tags: ['Vulnerability Management', 'Incident Response', 'IBM Security'] },
    { id: 'cert14', title: 'Chronicle Security Operations Platform Fundamentals', issuer: 'Google Cloud Security', date: 'Jan 2025', category: 'security', cvAreas: ['cyber'], credentialId: '12557310', tags: ['SIEM', 'SOAR', 'Google Chronicle'] },
    { id: 'cert15', title: 'High Performance Execution', issuer: 'Fundação Estudar', date: 'Jan 2025', category: 'development', cvAreas: [], tags: ['Leadership', 'High Performance', 'Personal Development'] },
    { id: 'cert16', title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', date: '2025', category: 'security', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/f9c6cba8-0a9a-4231-ad09-0bfcdc4107ca', tags: ['SIEM', 'IDS', 'Incident Response'] },
    { id: 'cert17', title: 'Cyber Academy 2024', issuer: 'FEBRABAN', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['ISO 27005', 'NIST', 'Data Governance (DAMA)', 'IAM', 'Cloud Security'] },
    { id: 'cert18', title: 'API Security for PCI Compliance', issuer: 'APIsec University', date: 'May 2024', category: 'security', cvAreas: ['cyber', 'software'], tags: ['API Security', 'PCI DSS', 'AppSec'] },
    { id: 'cert19', title: 'JavaScript Specialist Certification', issuer: 'DIO', date: '2024', category: 'development', cvAreas: ['software'], tags: ['JavaScript', 'Frontend', 'Web Development'] },
    { id: 'cert20', title: 'Inteligencia de Fuentes Abiertas (OSINT)', issuer: 'Basel Institute on Governance', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['OSINT', 'Open Source Intelligence', 'Investigations'] },
    { id: 'cert21', title: 'Network Defense', issuer: 'Cisco', date: '2024', category: 'networking', cvAreas: ['cyber'], tags: ['Network Defense', 'System Security', 'Cisco'] },
    { id: 'cert22', title: 'Endpoint Security', issuer: 'Cisco', date: '2024', category: 'security', cvAreas: ['cyber'], tags: ['Endpoint Security', 'Cisco', 'Device Hardening'] },
    { id: 'cert23', title: 'Introduction to Data Science', issuer: 'Cisco', date: '2024', category: 'data', cvAreas: ['data', 'aiml'], tags: ['Data Science', 'Cisco', 'Analytics'] },
    { id: 'cert24', title: 'Introduction to Internet of Things (IoT)', issuer: 'Cisco', date: '2024', category: 'networking', cvAreas: ['software'], tags: ['IoT', 'Cisco', 'Embedded Systems'] },
    { id: 'cert25', title: 'Network Support and Security', issuer: 'Cisco', date: '2024', category: 'networking', cvAreas: ['cyber'], tags: ['Network Support', 'Cisco', 'Security'] },
    { id: 'cert26', title: 'Ethical Hacker', issuer: 'Cisco Networking Academy', date: '2023', category: 'security', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/a4689f6b-ca66-4e41-801d-49f592df2914', tags: ['Penetration Testing', 'Kali Linux', 'Vulnerability Assessment'] },
    { id: 'cert27', title: 'Network Technician Career Path', issuer: 'Cisco Networking Academy', date: '2023', category: 'networking', cvAreas: ['cyber'], verifyUrl: 'https://www.credly.com/badges/53706149-3c66-49d2-9e13-d8e5c0bfbe03', tags: ['Cisco', 'IPv4/IPv6', 'Network Troubleshooting'] },
    { id: 'cert28', title: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco', date: '2023', category: 'networking', cvAreas: ['cyber'], tags: ['Network Addressing', 'Troubleshooting', 'Cisco'] },
    { id: 'cert29', title: 'Networking Devices and Initial Configuration', issuer: 'Cisco', date: '2023', category: 'networking', cvAreas: ['cyber'], tags: ['Networking Devices', 'Cisco', 'Configuration'] },
    { id: 'cert30', title: 'Networking Basics', issuer: 'Cisco', date: '2023', category: 'networking', cvAreas: ['cyber'], tags: ['Networking Basics', 'Cisco', 'Fundamentals'] },
    { id: 'cert31', title: 'Coding Dojo in GoLang', issuer: 'Universidade Federal de Sergipe', date: '2023', category: 'development', cvAreas: ['software'], tags: ['Go', 'Golang', 'Software Development'] },
    { id: 'cert32', title: 'Storytelling', issuer: 'Fundação Estudar', date: '2023', category: 'development', cvAreas: [], tags: ['Storytelling', 'Communication', 'Leadership'] },
    { id: 'cert33', title: 'Public Speaking and Leadership', issuer: 'Brasil Empreende', date: '2022', category: 'development', cvAreas: [], tags: ['Public Speaking', 'Leadership', 'Communication'] },
    { id: 'cert34', title: 'JavaScript, Python and C', issuer: 'Estácio', date: '2022', category: 'development', cvAreas: ['software'], tags: ['JavaScript', 'Python', 'C', 'Programming'] },
    { id: 'cert35', title: 'Management, Organization and Recovery of Information', issuer: 'Estácio', date: '2022', category: 'data', cvAreas: ['data'], tags: ['Information Management', 'Data Organization', 'Knowledge Management'] },
    { id: 'cert36', title: 'Startup Investor', issuer: 'EqSeed', date: '2022', category: 'development', cvAreas: [], tags: ['Startup Investing', 'Venture Capital', 'Entrepreneurship'] },
    { id: 'cert37', title: 'CS50 — Computer Science from Harvard', issuer: 'Fundação Estudar / Harvard', date: '2022', category: 'development', cvAreas: ['software', 'data'], tags: ['CS50', 'Harvard', 'Algorithms', 'Data Structures'] },
  ],

  projects: {
    softwareDevelopment: [
      {
        id: 'proj-sw3',
        gradient: 'from-slate-900 to-zinc-900',
        title: 'Shoresh — Plataforma Empresarial de Governança e Compliance',
        description: 'Plataforma SaaS empresarial de governança e compliance para organizações médias/grandes e startups em crescimento, com 8 módulos integrados.',
        category: 'softwareDevelopment',
        tags: ['NestJS', 'Next.js', 'TypeScript', 'RBAC', 'Encryption'],
        cvAreas: ['software'],
        details: {
          overview: 'Shoresh (hebraico para "raiz") é uma plataforma SaaS empresarial de governança e compliance para organizações médias/grandes e startups em crescimento. Desenvolvimento de aplicação ponta a ponta em 8 módulos com arquitetura segura, criptografia de dados, RBAC e design/integração de APIs.',
          features: [
            'Desenvolvimento de aplicação ponta a ponta em 8 módulos integrados de governança e compliance',
            'RBAC (Controle de Acesso Baseado em Função) com isolamento organizacional rigoroso',
            'Criptografia de dados e arquitetura segura em toda a plataforma',
            'Design de API e camada de integração com terceiros',
            'Construído para organizações médias/grandes e startups em crescimento',
          ],
          techStack: 'NestJS, Next.js, TypeScript, PostgreSQL, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw2',
        gradient: 'from-purple-900 to-blue-900',
        title: 'Cherut — Plataforma de Vida de Alta Performance',
        description: 'Plataforma SaaS que conecta propósito, disciplina e resultados — OKRs, hábitos, tarefas e análise de crescimento para indivíduos focados.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'NestJS', 'Expo', 'Go', 'Python'],
        cvAreas: ['software'],
        details: {
          overview: 'Cherut (hebraico para "liberdade") é uma plataforma SaaS de alta performance para empreendedores, criadores e profissionais. Construída com NestJS e arquitetura modular orientada a domínio.',
          features: [
            'Acompanhamento e gestão de OKRs (Objetivos e Resultados-Chave)',
            'Construtor de hábitos e rotinas com acompanhamento de sequências (streaks)',
            'Gestão de tarefas e prioridades com quadros Kanban',
            'Painel de análise de crescimento e insights de performance',
            'Arquitetura modular orientada a domínio com NestJS',
          ],
          techStack: 'Next.js, NestJS, Expo (React Native), Python, Go, PostgreSQL, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw4',
        gradient: 'from-green-900 to-emerald-900',
        title: 'RifaGo — Plataforma de Rifas e Arrecadação Online',
        description: 'Plataforma full-stack de código aberto para rifas e arrecadação de fundos com pagamentos PIX, sistema de reserva transacional e custos de leitura Firestore otimizados.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'Firebase', 'Firestore', 'PIX', 'Vercel'],
        cvAreas: ['software'],
        details: {
          overview: 'Plataforma full-stack de rifas/arrecadação (Next.js + Firebase, deploy no Vercel) com pagamentos via PIX. Sistema de reserva transacional evitando dupla alocação, geração de QR/BR Code PIX no servidor e camada de dados desnormalizada que corrigiu mais de 11k leituras Firestore/sessão para um custo constante.',
          features: [
            'Sistema de reserva transacional evitando dupla alocação',
            'Geração de QR/BR Code PIX no lado do servidor',
            'Camada de dados desnormalizada: corrigiu mais de 11k leituras Firestore/sessão para um custo constante',
            'Status da rifa em tempo real e confirmação de pagamento',
            'Código aberto no GitHub',
          ],
          techStack: 'Next.js, Firebase Firestore, Firebase Auth, Vercel, PIX API',
          githubLink: 'https://github.com/chutzpah-os/RifaGo-OSS',
        },
      },
      {
        id: 'proj-sw5',
        gradient: 'from-pink-900 to-rose-900',
        title: 'InstaChat — Automação de DMs do Instagram Auto-Hospedada',
        description: 'Alternativa gratuita ao ManyChat: automação de DMs do Instagram auto-hospedada com gatilhos de comentários/stories, webhooks verificados por HMAC e processamento atômico de filas.',
        category: 'softwareDevelopment',
        tags: ['Next.js', 'Supabase', 'Instagram API', 'Webhooks', 'pg_cron'],
        cvAreas: ['software'],
        details: {
          overview: 'Ferramenta de automação de DMs do Instagram auto-hospedada e sem custo mensal. Comentar uma palavra-chave ou responder a um story dispara um DM automático. Construída com Next.js 16 + Tailwind no Vercel, Supabase Postgres, Instagram Graph API v25.0.',
          features: [
            'Comentário ou resposta a story dispara DMs automáticos no Instagram',
            'Webhook verificado por HMAC para processamento seguro de eventos do Instagram',
            'Fila atômica com SKIP LOCKED evitando processamento duplicado',
            'Tratamento de janela de 24h, follow-ups programados',
            'Supabase pg_cron + pg_net para worker de background gratuito de nível minuto',
          ],
          techStack: 'Next.js 16, TailwindCSS, Supabase Postgres, RLS, Instagram Graph API v25.0, pg_cron, pg_net, Vercel',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-sw6',
        gradient: 'from-amber-900 to-yellow-900',
        title: 'Sistema de Gestão Financeira Web',
        description: 'Plataforma full-stack para pessoas físicas e jurídicas gerenciarem finanças com rastreamento em tempo real de receitas, despesas, saldos, investimentos e metas.',
        category: 'softwareDevelopment',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Authentication'],
        cvAreas: ['software'],
        details: {
          overview: 'Plataforma full-stack de gestão financeira para pessoas físicas e jurídicas com rastreamento em tempo real de receitas, despesas, saldos de conta, investimentos e metas financeiras, com sistema de autenticação seguro.',
          features: [
            'Rastreamento em tempo real de receitas, despesas, saldos e investimentos',
            'Gestão de metas financeiras e acompanhamento de progresso',
            'Sistema de login e autenticação seguro',
            'Suporte a múltiplas contas e moedas',
            'Dashboard com analytics e visualizações',
          ],
          techStack: 'React, Node.js, PostgreSQL, Docker',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    cybersecurity: [
      {
        id: 'proj-cy3',
        gradient: 'from-zinc-900 to-slate-900',
        title: 'Penetration Testing & Vulnerability Assessment Program',
        description: 'Engajamentos estruturados de hacking ético usando Kali Linux, varredura de vulnerabilidades, OSINT e relatórios de segurança para ambientes corporativos.',
        category: 'cybersecurity',
        tags: ['Kali Linux', 'OSINT', 'Penetration Testing', 'Python'],
        cvAreas: ['cyber'],
        details: {
          overview: 'Execução de programas estruturados de testes de invasão e avaliação de vulnerabilidades para ambientes corporativos, usando metodologias de hacking ético e técnicas de OSINT.',
          features: [
            'Reconhecimento com coleta de OSINT (certificado pelo Basel Institute)',
            'Varredura de rede, enumeração de serviços e mapeamento de CVEs',
            'Testes de segurança de aplicações web (OWASP Top 10)',
            'Conscientização sobre engenharia social e simulação de phishing (certificado CPPS)',
            'Relatórios de segurança abrangentes e recomendações de remediação',
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
        description: 'Sistema de mineração de dados que rastreia a internet em busca de problemas reais e não resolvidos — impulsionando a missão 1b2035 de conectar solucionadores de problemas a desafios de alto impacto em todo o mundo.',
        category: 'dataEngineering',
        tags: ['Python', 'Web Scraping', 'NLP', 'BigQuery', 'ETL'],
        cvAreas: ['data'],
        details: {
          overview: 'Um sistema de mineração de dados que rastreia e extrai a internet em busca de problemas reais e não resolvidos — impulsionando a missão 1b2035 de conectar solucionadores de problemas a desafios de alto impacto em todo o mundo.',
          features: [
            'Pipeline de web scraping coletando sinais de problemas de fóruns, notícias, Reddit e fontes de pesquisa',
            'Camada de classificação NLP para extrair, deduplicar e categorizar problemas por domínio e severidade',
            'Pipeline ETL carregando dados estruturados de problemas no BigQuery para análise e detecção de padrões',
            'Análise de tendências identificando problemas não resolvidos de alta frequência em diferentes geografias e setores',
            'Modelo de pontuação automatizado classificando problemas por potencial de impacto e disponibilidade de solucionadores',
            'Firestore servindo conjuntos de dados de problemas curados para a plataforma comunitária em tempo real',
          ],
          techStack: 'Python, BeautifulSoup, Scrapy, NLP, BigQuery, Firestore, ETL, JavaScript',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
    ],
    aiml: [
      {
        id: 'proj-ai1',
        gradient: 'from-violet-900 to-purple-900',
        title: 'SentinelAI — Sistema de Detecção de Incidentes Urbanos',
        description: 'Sistema orientado por IA para detecção de incidentes urbanos em tempo real, operando 24/7 desde a ativação com mais de 100 pessoas registradas diariamente e mais de 200 objetos rastreados simultaneamente.',
        category: 'aiml',
        tags: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'WebSocket', 'Supabase'],
        cvAreas: ['aiml'],
        details: {
          overview: 'O SentinelAI é um sistema orientado por IA para detecção de incidentes urbanos e consciência situacional. Backend Python (FastAPI) conectado a fluxos de vídeo RTSP/webcam usando OpenCV + YOLOv8 para detecção de objetos/pessoas em tempo real; frontend Next.js + TailwindCSS; Supabase para autenticação/storage; eventos via WebSocket/REST em JSON.',
          features: [
            'Detecção de objetos e pessoas em tempo real via OpenCV + YOLOv8',
            'Ingestão de fluxos de vídeo RTSP/webcam com backend Python FastAPI',
            'Eventos comunicados via WebSocket/REST em JSON (timestamp, camera_id, event_type, confidence, bounding_box)',
            'Dashboard frontend Next.js + TailwindCSS',
            'Operando 24/7 desde a ativação; registrando mais de 100 pessoas diariamente, mais de 200 objetos simultaneamente',
          ],
          techStack: 'Python, FastAPI, OpenCV, YOLOv8, Next.js, TailwindCSS, Supabase, WebSocket, REST, RTSP',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-cy1',
        gradient: 'from-red-900 to-orange-900',
        title: 'Computer Vision Personnel Detection System',
        description: 'Sistema de monitoramento automatizado 24/7 para ambientes controlados, ativado por detecção de movimento/pessoas e alertando autoridades em tempo real.',
        category: 'aiml',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Um sistema de monitoramento automatizado de baixo consumo que opera continuamente ou em intervalos programados, ativado por detecção de movimento ou de pessoas e enviando dados de detecção enriquecidos em tempo real via aplicativos de mensagem.',
          features: [
            'Monitoramento automatizado 24/7 com modo de espera de baixo consumo',
            'Detecção de movimento e de pessoas com visualização de caixa delimitadora verde',
            'Modo de intervalo programado para otimização de energia',
            'Dados de detecção enriquecidos enviados em tempo real às autoridades via aplicativos de mensagem',
            'Limiares de alerta e zonas de detecção configuráveis',
          ],
          techStack: 'Python, OpenCV, TensorFlow, Computer Vision, MQTT/messaging integration',
          githubLink: 'https://github.com/hanielrolemberg',
        },
      },
      {
        id: 'proj-ai3',
        gradient: 'from-cyan-900 to-blue-900',
        title: 'AI for Oncology Research (Series)',
        description: 'Série de revisões sistemáticas e meta-análises avaliando modelos de IA e deep learning para detecção precoce de câncer em múltiplos tipos da doença.',
        category: 'aiml',
        tags: ['Medical AI', 'Deep Learning', 'Computer Vision', 'Research'],
        cvAreas: ['aiml'],
        details: {
          overview: 'Uma série de pesquisas aplicando IA e deep learning à detecção precoce de câncer, cobrindo câncer ósseo, hematológico, de próstata, de pele, de mama e colorretal, usando imagens médicas e dados genômicos.',
          features: [
            'Revisões sistemáticas sobre modelos de IA para detecção de câncer ósseo (TC, RM, raio-X)',
            'Abordagens de ML para detecção de neoplasias hematológicas via dados clínicos e genômicos',
            'Triagem de câncer de próstata assistida por IA com integração de imagem e biomarcadores',
            'Deep learning para classificação de câncer de pele (foco em melanoma)',
            'Arquiteturas CNN para triagem mamográfica de câncer de mama',
            'Detecção de câncer colorretal orientada por IA via imagens endoscópicas',
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
        description: 'Um desafio de corrida de resistência de 1.000 milhas para arrecadar financiamento contínuo para pesquisa do câncer, documentado através de redes sociais, um livro e um documentário.',
        category: 'challenges',
        tags: ['Social Impact', 'Fundraising', 'Health', 'Media'],
        cvAreas: ['software'],
        details: {
          overview: 'Um ecossistema de arrecadação de fundos multicanal que converte resistência física e storytelling em apoio financeiro contínuo para a pesquisa do câncer. O desafio de corrida de 1.000 milhas é transmitido nas redes sociais e ampliado através de um livro e um documentário.',
          features: [
            'Desafio de corrida de 1.000 milhas como motor central de arrecadação de fundos',
            'Transmissão em tempo real nas redes sociais do treinamento e do progresso',
            'Livro documentando a jornada, a missão e as histórias humanas por trás da pesquisa do câncer',
            'Documentário ampliando o alcance para públicos globais',
            'Funil de doação multicanal conectando esporte de resistência, publicação e cinema',
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
      title: 'IA para Detecção Precoce de Câncer Ósseo',
      description:
        'Revisão sistemática e meta-análise avaliando o desempenho de modelos de IA aplicados a imagens médicas para detecção de câncer ósseo em estágio inicial, cobrindo as modalidades de TC, RM e raio-X.',
      field: 'Oncologia · Imagem Médica · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res2',
      title: 'ML para Detecção de Neoplasias Hematológicas',
      description:
        'Revisão sistemática de abordagens de machine learning para identificação precoce de cânceres do sangue usando dados clínicos e marcadores genômicos, avaliando sensibilidade, especificidade e aplicabilidade clínica.',
      field: 'Oncologia · Genômica · ML',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res3',
      title: 'Triagem de Câncer de Próstata Assistida por IA',
      description:
        'Meta-análise examinando ferramentas diagnósticas assistidas por IA para câncer de próstata, integrando dados de imagem (RM, ultrassom) e biomarcadores para avaliar a precisão de detecção em relação à triagem tradicional baseada em PSA.',
      field: 'Oncologia · Biomarcadores · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res4',
      title: 'Deep Learning para Detecção de Câncer de Pele',
      description:
        'Revisão sistemática de modelos de deep learning treinados em imagens dermoscópicas para classificação de câncer de pele em estágio inicial, com foco na precisão de detecção de melanoma e viabilidade de implantação no mundo real.',
      field: 'Oncologia · Dermatologia · Deep Learning',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res5',
      title: 'Deep Learning para Triagem de Câncer de Mama',
      description:
        'Meta-análise de arquiteturas de redes neurais convolucionais aplicadas a imagens mamográficas para detecção precoce de câncer de mama, comparando o desempenho com o baseline de radiologistas em múltiplos conjuntos de dados.',
      field: 'Oncologia · Radiologia · Deep Learning',
      status: 'in development',
      cvAreas: ['aiml'],
    },
    {
      id: 'res6',
      title: 'Detecção Precoce de Câncer Colorretal',
      description:
        'Pesquisa investigando abordagens orientadas por IA para detecção precoce de câncer colorretal, combinando análise de imagens endoscópicas, perfilamento de biomarcadores e dados clínicos de pacientes para melhores resultados de triagem.',
      field: 'Oncologia · Gastroenterologia · IA',
      status: 'in development',
      cvAreas: ['aiml'],
    },
  ],

  awards: [
    {
      id: 'award1',
      title: 'Top 1,2% — Exame de Seleção Competitivo',
      issuer: 'SSP Selection Process',
      year: '2022',
      description:
        'Aprovado com sucesso em um exame altamente competitivo de quatro fases, incluindo testes escritos e de aptidão física, classificando-se entre os 1,2% melhores.',
    },
  ],
}
