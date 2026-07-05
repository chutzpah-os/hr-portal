export type NarrativeLocale = 'en' | 'pt' | 'es' | 'fr' | 'ca'

export interface KMilesNarrative {
  statsTitle: string
  cancerStatsItems: { stat: string; label: string }[]
  whyHardTitle: string
  whyHard: string
  lethalityTitle: string
  lethalityClosing: string
  lethalityTypes: string[]
  survivorsTitle: string
  lostTitle: string
  survivorsList: { name: string; detail: string }[]
  lostList: { name: string; detail: string }[]
  survivorsIntro: string
  survivorsOutro: string
  whyIRunTitle: string
  whyIRunBlocks: string[]
  terryFoxTitle: string
  terryFoxBlocks: string[]
  worldTitle: string
  worldContext: string
  worldStat: string
  worldStats: { value: string; label: string }[]
  worldHuman: string[]
  donationTitle: string
  donationLines: string[]
  donationCountry: string
  runningLogTitle: string
  videosTitle: string
  problemSectionTitle: string
  problemIntro: string
  aboutTitle: string
  aboutBlocks: string[]
  howItWorksTitle: string
  howItWorksSteps: { title: string; description: string }[]
  impactSectionTitle: string
  roadmapSectionTitle: string
  roadmapActiveLabel: string
  partnersSectionTitle: string
  partnersFirstLabel: string
  partnersEmptyState: string
  partnersBecome: string
  goalsSectionTitle: string
  benefitsSectionTitle: string
  benefitsSubtitle: string
  benefitsTabCompany: string
  benefitsTabIndividual: string
  transparencySectionTitle: string
  transparencySubtitle: string
  transparencySourceLabel: string
  finalCtaTitle: string
  finalCtaSubtitle: string
  finalCtaBlocks: string[]
  finalCtaDonate: string
  finalCtaPartner: string
  introStatement: string
  tocTitle: string
  navLabels: {
    intro: string
    index: string
    problem: string
    lives: string
    whyIRun: string
    terryFox: string
    world: string
    about: string
    rhythm: string
    impact: string
    donate: string
    funds: string
    tiers: string
    faq: string
    road: string
    partners: string
    benefits: string
    updates: string
    videos: string
    act: string
  }
}

export const NARRATIVE: Record<NarrativeLocale, KMilesNarrative> = {
  en: {
    statsTitle: 'The Number That Changes Everything',
    cancerStatsItems: [
      { stat: '20M', label: 'new cancer cases diagnosed per year worldwide' },
      { stat: '9.7M', label: 'cancer deaths per year — more than HIV, malaria and tuberculosis combined' },
      { stat: '26,500', label: 'people die from cancer every single day worldwide' },
      { stat: '1 in 5', label: 'people develop cancer in their lifetime' },
      { stat: '400K', label: 'children and adolescents diagnosed every year' },
      { stat: '70%', label: 'of cancer deaths occur in low- and middle-income countries' },
    ],
    whyHardTitle: 'Why the Cure Is Difficult',
    whyHard:
      'Cancer is not one disease. It is more than 200. Each tumor carries unique mutations that evolve as treatment progresses. The target moves. Treatments stop working. That is why research never ends.',
    lethalityTitle: '5-Year Survival Rate by Cancer Type',
    lethalityClosing: 'Thyroid cancer sits at 98% because decades of research got it there. Pancreatic cancer (stage IV) sits at 3% because it has not had enough of that research yet. That gap is not destiny — it is funding. And funding is a choice.',
    lethalityTypes: ['Thyroid', 'Prostate', 'Breast', 'Colorectal', 'Leukemia', 'Brain', 'Lung', 'Pancreas (IV)'],
    survivorsTitle: 'They Survived',
    lostTitle: 'They Were Lost',
    survivorsList: [
      { name: 'Kylie Minogue', detail: 'Singer — breast cancer (2005), survived and returned to the stage' },
      { name: 'Shannon Miller', detail: 'Olympic gymnast — ovarian cancer (2011)' },
      { name: 'Robin Roberts', detail: 'Journalist — breast cancer + myelodysplastic syndrome' },
      { name: 'Fran Drescher', detail: 'Actress — uterine cancer, now research advocate' },
    ],
    lostList: [
      { name: 'Pau Donés', detail: 'Jarabe de Palo singer — colorectal cancer, died June 2020, age 53' },
      { name: 'Chadwick Boseman', detail: 'Actor — colon cancer, age 43' },
      { name: 'Patrick Swayze', detail: 'Actor — pancreatic cancer' },
      { name: 'David Bowie', detail: 'Musician — liver cancer, 18 months after diagnosis' },
    ],
    survivorsIntro: 'These names carry the same diagnosis — and different outcomes.',
    survivorsOutro:
      'What separates both groups is not always willpower. Often it is access to research that existed — or that did not yet.',
    whyIRunTitle: 'Why I Run',
    whyIRunBlocks: [
      'In 2016 and 2017, I accompany my father to the hospital and read the word "cancer" in his medical record. I freeze. I have already seen this word take four of my uncles and aunts. But this time it is different — it is him. Over time I understand that not every cancer is the same. He recovers. He just needs some small growths removed. He comes back to himself. But you do not forget having read that word next to the name of someone you love.',
      'On my 27th birthday, I receive a call. My 26-year-old cousin died of prostate cancer. I had never met him in person. He was 26 years old.',
      'That is why I run. Not for heroism. Because someone has to do something while they still can.',
    ],
    terryFoxTitle: 'Standing on Terry Fox\'s Shoulders',
    terryFoxBlocks: [
      '1977. Terry Fox is 18 years old. Diagnosed with osteosarcoma — a rare bone cancer. His right leg is amputated 15 cm above the knee. During treatment, surrounded by children with cancer, he decides he has to do something.',
      'April 12, 1980. He dips his prosthetic leg into the Atlantic Ocean in St. John\'s, Newfoundland — and starts running west. He calls it the Marathon of Hope. The goal: 42 km a day across Canada, one dollar per Canadian, to fund cancer research. He runs mostly alone, on the highway shoulder, through rain, snow and heat.',
      '143 days. 5,373 km covered. On September 1, 1980 — near Thunder Bay, Ontario — cancer had reached his lungs. He was forced to stop. He died on June 28, 1981, one month before his 23rd birthday. He raised C$24.7 million.',
      'Since 1981, the Terry Fox Foundation has raised over C$900 million. The Terry Fox Research Institute — founded in 2007 — funds cancer research programs across Canada and internationally, in 60+ countries. The annual Terry Fox Run is the world\'s largest single-day fundraiser for cancer research. 78% of every dollar donated goes directly to scientists.',
    ],
    worldTitle: 'What the World Looks Like With a Cure',
    worldContext: 'Curing cancer would not be a medical event. It would be one of the greatest turning points in human history — economic, social, and deeply personal.',
    worldStat: 'US$185 trillion — estimated economic gain of curing cancer.',
    worldStats: [
      { value: '19.3M', label: 'new cancer cases diagnosed per year' },
      { value: '10M', label: 'deaths annually — 1 in every 6 worldwide' },
      { value: '$1.16T', label: 'spent on cancer treatment globally each year' },
    ],
    worldHuman: [
      'A father who comes home.',
      'A mother who watches her child grow.',
      'A person who hears "cancer" — and "curable" in the same sentence.',
      'A child who grows up knowing a grandparent who, in another world, would have died too soon.',
      'A researcher who spent decades building toward this — and lives to see it work.',
      'A generation that inherits a world where cancer is treatable, not a sentence.',
    ],
    donationTitle: 'Your Donation. Real Results.',
    donationLines: [
      'goes straight to the lab.',
      'What comes out is not a report.',
      "It's a treatment that doesn't yet exist — one that may save someone you know.",
    ],
    donationCountry: "Your money doesn't cross borders.",
    runningLogTitle: 'Running Log',
    videosTitle: 'Videos',
    problemSectionTitle: 'The Challenge',
    problemIntro: 'Cancer is the second leading cause of death worldwide. It does not discriminate by age, income, or geography. Nearly every family has been touched by it — and the difference between the most treatable cancers and the most deadly ones is almost entirely explained by one thing: research funding.',
    aboutTitle: 'About the Project',
    aboutBlocks: [
      '1K Miles of Hope is a fundraising and awareness initiative that directs every dollar raised to cancer research through the Terry Fox Foundation — one of the most transparent and impactful cancer research funding programs in the world.',
      'The mission: run 1,000 miles across 100 days. Share every step publicly. Inspire individuals and companies to become partners. Raise funds that reach scientists directly.',
      'Running is visible. A person covering miles every day is a story people can follow, share, and believe in. Every mile logged is proof that the project is alive — and every viewer who becomes a donor turns movement into medicine.',
      'Why now? Cancer research is chronically underfunded relative to its global burden. The technology exists to find cures we do not yet have. Someone has to do something while they still can.',
    ],
    howItWorksTitle: 'How It Works',
    howItWorksSteps: [
      { title: 'Run', description: 'Every day, miles are logged. Every episode is filmed and published publicly.' },
      { title: 'Share', description: 'Each run reaches a growing audience across platforms and borders.' },
      { title: 'Inspire', description: 'Real stories — those lost, those who survived — move viewers to act.' },
      { title: 'Raise Funds', description: '78% of every donation goes directly to cancer researchers.' },
      { title: 'Transform', description: 'Each funded scientist could be the one who finds the cure.' },
    ],
    impactSectionTitle: 'Live Impact',
    roadmapSectionTitle: 'The Road Ahead',
    roadmapActiveLabel: 'Active',
    partnersSectionTitle: 'Partners',
    partnersFirstLabel: 'Be the first.',
    partnersEmptyState: 'No partners yet. The first one changes everything.',
    partnersBecome: 'Become a Partner',
    goalsSectionTitle: 'Target Goal',
    benefitsSectionTitle: 'Why Partner With Us',
    benefitsSubtitle: 'Not advertising. Alignment — with impact, with purpose, with people.',
    benefitsTabCompany: 'Companies',
    benefitsTabIndividual: 'Individuals',
    transparencySectionTitle: 'Where Every Dollar Goes',
    transparencySubtitle: 'Every allocation is public. Every dollar is tracked.',
    transparencySourceLabel: 'Source: Terry Fox Foundation Annual Report · terryfox.ca',
    finalCtaTitle: 'Become Part of the Journey',
    finalCtaSubtitle: 'Every mile carries hope.',
    finalCtaBlocks: [
      'Every partner expands our reach.',
      'Every donation funds a scientist.',
      'Every share inspires someone new.',
    ],
    finalCtaDonate: 'Donate Now',
    finalCtaPartner: 'Become a Partner',
    introStatement: 'We were taught that prevention is the best approach — but the truth is harder: any one of us is in cancer\'s crosshairs for reasons science is still trying to decode. I run because prevention failed people I love. I am running 1,000 miles to raise funds for cancer research. If prevention doesn\'t save us, research must.',
    tocTitle: 'Contents',
    navLabels: { intro: 'Intro', index: 'Index', problem: 'Problem', lives: 'Lives', whyIRun: 'Why I Run', terryFox: 'Terry Fox', world: 'World', about: 'About', rhythm: 'Rhythm', impact: 'Impact', donate: 'Donate', funds: 'Funds', tiers: 'Tiers', faq: 'FAQ', road: 'Road', partners: 'Partners', benefits: 'Benefits', updates: 'Updates', videos: 'Videos', act: 'Act' },
  },

  pt: {
    statsTitle: 'O Número Que Muda Tudo',
    cancerStatsItems: [
      { stat: '20M', label: 'novos casos de câncer diagnosticados por ano no mundo' },
      { stat: '9,7M', label: 'mortes por câncer por ano — mais do que HIV, malária e tuberculose juntos' },
      { stat: '26.500', label: 'pessoas morrem de câncer por dia no mundo' },
      { stat: '1 em cada 5', label: 'pessoas desenvolvem câncer ao longo da vida' },
      { stat: '400 mil', label: 'crianças e adolescentes diagnosticados por ano' },
      { stat: '70%', label: 'das mortes por câncer ocorrem em países de baixa e média renda' },
    ],
    whyHardTitle: 'Por Que a Cura É Difícil',
    whyHard:
      'O câncer não é uma doença. São mais de 200. Cada tumor carrega mutações únicas que evoluem à medida que o tratamento avança. O alvo muda. Os tratamentos param de funcionar. É por isso que a pesquisa nunca termina.',
    lethalityTitle: 'Taxa de Sobrevivência em 5 Anos por Tipo de Câncer',
    lethalityClosing: 'O câncer de tireoide está em 98% porque décadas de pesquisa chegaram lá. O câncer de pâncreas (estágio IV) está em 3% porque ainda não teve pesquisa suficiente. Essa diferença não é destino — é investimento. E investimento é uma escolha.',
    lethalityTypes: ['Tireoide', 'Próstata', 'Mama', 'Colorretal', 'Leucemia', 'Cérebro', 'Pulmão', 'Pâncreas (IV)'],
    survivorsTitle: 'Sobreviveram',
    lostTitle: 'Não Voltaram',
    survivorsList: [
      { name: 'Kylie Minogue', detail: 'Cantora — câncer de mama (2005), sobreviveu e voltou aos palcos' },
      { name: 'Shannon Miller', detail: 'Ginasta olímpica — câncer de ovário (2011)' },
      { name: 'Robin Roberts', detail: 'Jornalista — câncer de mama + síndrome mielodisplásica' },
      { name: 'Fran Drescher', detail: 'Atriz — câncer uterino, hoje ativista de pesquisa' },
    ],
    lostList: [
      { name: 'Pau Donés', detail: 'Vocalista do Jarabe de Palo — câncer colorretal, morreu em junho de 2020, aos 53 anos' },
      { name: 'Chadwick Boseman', detail: 'Ator — câncer de cólon, 43 anos' },
      { name: 'Patrick Swayze', detail: 'Ator — câncer pancreático' },
      { name: 'David Bowie', detail: 'Músico — câncer de fígado, 18 meses após o diagnóstico' },
    ],
    survivorsIntro: 'Esses nomes carregam o mesmo diagnóstico — e desfechos diferentes.',
    survivorsOutro:
      'O que separa os dois grupos nem sempre é força de vontade. Muitas vezes, é acesso a pesquisa que existia — ou que ainda não existia.',
    whyIRunTitle: 'Por Que Eu Corro',
    whyIRunBlocks: [
      'Em 2016 e 2017, acompanho meu pai ao hospital e leio a palavra "câncer" no prontuário dele. Fico imóvel. Já vi essa palavra levar quatro tios e tias. Mas desta vez é diferente — é ele. Com o tempo entendo que nem todo câncer é igual. Ele se recupera. Precisa remover alguns crescimentos pequenos. Volta a ser ele mesmo. Mas você não esquece de ter lido essa palavra ao lado do nome de quem você ama.',
      'No dia do meu aniversário de 27 anos, recebo uma ligação. Meu primo de 26 anos morreu de câncer de próstata. Eu nunca o tinha conhecido pessoalmente. Ele tinha 26 anos.',
      'É por isso que eu corro. Não por heroísmo. Porque alguém precisa fazer alguma coisa enquanto ainda pode.',
    ],
    terryFoxTitle: 'Em Pé Sobre os Ombros de Terry Fox',
    terryFoxBlocks: [
      '1977. Terry Fox tem 18 anos. Diagnóstico: osteossarcoma — um câncer ósseo raro. A perna direita é amputada 15 cm acima do joelho. Durante o tratamento, rodeado de crianças com câncer, ele decide que precisa fazer algo.',
      '12 de abril de 1980. Ele mergulha a prótese no Oceano Atlântico em St. John\'s, Newfoundland — e começa a correr em direção ao oeste. Chama de Marathon of Hope. A meta: 42 km por dia pelo Canadá, um dólar por canadense, para financiar a pesquisa. Corre quase sempre sozinho, no acostamento da rodovia, sob chuva, neve e calor.',
      '143 dias. 5.373 km percorridos. Em 1° de setembro de 1980 — perto de Thunder Bay, Ontario — o câncer havia chegado aos pulmões. Ele foi obrigado a parar. Morreu em 28 de junho de 1981, um mês antes de completar 23 anos. Havia arrecadado C$ 24,7 milhões.',
      'Desde 1981, a Terry Fox Foundation arrecadou mais de C$ 900 milhões. O Terry Fox Research Institute — fundado em 2007 — financia pesquisas oncológicas no Canadá e em mais de 60 países. A corrida anual Terry Fox Run é o maior arrecadador de um único dia para pesquisa do câncer no mundo. 78% de cada dólar doado vai diretamente para os cientistas.',
    ],
    worldTitle: 'Como o Mundo Muda com a Cura',
    worldContext: 'A cura do câncer não seria apenas uma vitória médica. Seria uma das maiores transformações da história humana — econômica, social e profundamente pessoal.',
    worldStat: 'US$ 185 trilhões — estimativa do ganho econômico de uma cura para o câncer.',
    worldStats: [
      { value: '19,3M', label: 'novos casos de câncer diagnosticados por ano' },
      { value: '10M', label: 'mortes anuais — 1 a cada 6 no mundo' },
      { value: 'US$ 1,16T', label: 'gastos globais com tratamento oncológico por ano' },
    ],
    worldHuman: [
      'Um pai que chega em casa.',
      'Uma mãe que vê o filho crescer.',
      'Uma pessoa que ouve "câncer" — e "curável" na mesma frase.',
      'Uma criança que cresce conhecendo um avô que, em outro mundo, teria morrido cedo demais.',
      'Um pesquisador que passou décadas construindo em direção a isso — e vive para ver funcionar.',
      'Uma geração que herda um mundo onde câncer é tratável — não sentença.',
    ],
    donationTitle: 'Sua Doação. Resultado Real.',
    donationLines: [
      'vai direto ao laboratório.',
      'O que sai de lá não é um relatório.',
      'É um tratamento que ainda não existe — e que pode salvar alguém que você conhece.',
    ],
    donationCountry: 'Seu dinheiro não cruza fronteiras.',
    runningLogTitle: 'Diário de Corrida',
    videosTitle: 'Vídeos',
    problemSectionTitle: 'O Desafio',
    problemIntro: 'O câncer é a segunda principal causa de morte no mundo. Não discrimina por idade, renda ou geografia. Quase todas as famílias já foram tocadas por ele — e a diferença entre os cânceres mais tratáveis e os mais letais é explicada quase inteiramente por uma coisa: financiamento de pesquisa.',
    aboutTitle: 'Sobre o Projeto',
    aboutBlocks: [
      '1K Miles of Hope é uma iniciativa de arrecadação e conscientização que direciona cada dólar arrecadado para a pesquisa do câncer através da Terry Fox Foundation — um dos programas de financiamento de pesquisa oncológica mais transparentes e impactantes do mundo.',
      'A missão: correr 1.000 milhas em 100 dias. Compartilhar cada passo publicamente. Inspirar pessoas e empresas a se tornarem parceiras. Arrecadar fundos que chegam diretamente aos cientistas.',
      'Correr é visível. Uma pessoa cobrindo milhas todos os dias é uma história que as pessoas podem acompanhar, compartilhar e acreditar. Cada milha registrada prova que o projeto está vivo — e cada espectador que se torna doador transforma movimento em medicina.',
      'Por que agora? A pesquisa do câncer é cronicamente subfinanciada em relação ao seu impacto global. A tecnologia existe para encontrar curas que ainda não temos. Alguém precisa fazer algo enquanto ainda pode.',
    ],
    howItWorksTitle: 'Como Funciona',
    howItWorksSteps: [
      { title: 'Correr', description: 'A cada dia, milhas são registradas. Cada episódio é filmado e publicado.' },
      { title: 'Compartilhar', description: 'Cada corrida alcança um público crescente em plataformas e fronteiras.' },
      { title: 'Inspirar', description: 'Histórias reais — as perdidas, as que sobreviveram — movem espectadores à ação.' },
      { title: 'Arrecadar', description: '78% de cada doação vai diretamente para pesquisadores de câncer.' },
      { title: 'Transformar', description: 'Cada cientista financiado pode ser o que encontra a cura.' },
    ],
    impactSectionTitle: 'Impacto em Tempo Real',
    roadmapSectionTitle: 'O Caminho à Frente',
    roadmapActiveLabel: 'Ativo',
    partnersSectionTitle: 'Parceiros',
    partnersFirstLabel: 'Seja o primeiro.',
    partnersEmptyState: 'Ainda sem parceiros. O primeiro muda tudo.',
    partnersBecome: 'Torne-se um Parceiro',
    goalsSectionTitle: 'Meta de Arrecadação',
    benefitsSectionTitle: 'Por Que Ser Parceiro',
    benefitsSubtitle: 'Não é publicidade. É alinhamento — com impacto, com propósito, com pessoas.',
    benefitsTabCompany: 'Empresas',
    benefitsTabIndividual: 'Pessoas',
    transparencySectionTitle: 'Para Onde Vai Cada Dólar',
    transparencySubtitle: 'Cada alocação é pública. Cada dólar é rastreado.',
    transparencySourceLabel: 'Fonte: Relatório Anual da Terry Fox Foundation · terryfox.ca',
    finalCtaTitle: 'Faça Parte da Jornada',
    finalCtaSubtitle: 'Cada milha carrega esperança.',
    finalCtaBlocks: [
      'Cada parceiro amplia nosso alcance.',
      'Cada doação financia um cientista.',
      'Cada compartilhamento inspira alguém novo.',
    ],
    finalCtaDonate: 'Doe Agora',
    finalCtaPartner: 'Torne-se um Parceiro',
    introStatement: 'Nos ensinaram que se prevenir é a melhor atitude, mas a verdade é mais dura: qualquer um de nós está na mira do câncer por razões que a ciência ainda tenta decifrar. Eu corro porque a prevenção falhou com pessoas que eu amo. Estou correndo 1.000 milhas para levantar fundos para pesquisas contra o câncer. Se a prevenção não nos salva, a pesquisa precisa salvar.',
    tocTitle: 'Sumário',
    navLabels: { intro: 'Intro', index: 'Sumário', problem: 'Problema', lives: 'Vidas', whyIRun: 'Por Que Corro', terryFox: 'Terry Fox', world: 'Mundo', about: 'Sobre', rhythm: 'Ritmo', impact: 'Impacto', donate: 'Doação', funds: 'Fundos', tiers: 'Apoio', faq: 'FAQ', road: 'Etapas', partners: 'Parceiros', benefits: 'Benefícios', updates: 'Novidades', videos: 'Vídeos', act: 'Agir' },
  },

  es: {
    statsTitle: 'El Número Que lo Cambia Todo',
    cancerStatsItems: [
      { stat: '20M', label: 'nuevos casos de cáncer diagnosticados por año en el mundo' },
      { stat: '9,7M', label: 'muertes por cáncer al año — más que el VIH, la malaria y la tuberculosis juntos' },
      { stat: '26.500', label: 'personas mueren de cáncer cada día en el mundo' },
      { stat: '1 de cada 5', label: 'personas desarrollan cáncer a lo largo de su vida' },
      { stat: '400K', label: 'niños y adolescentes diagnosticados cada año' },
      { stat: '70%', label: 'de las muertes por cáncer ocurren en países de ingresos bajos y medios' },
    ],
    whyHardTitle: 'Por Qué la Cura Es Difícil',
    whyHard:
      'El cáncer no es una enfermedad. Son más de 200. Cada tumor lleva mutaciones únicas que evolucionan a medida que avanza el tratamiento. El objetivo cambia. Los tratamientos dejan de funcionar. Por eso la investigación nunca termina.',
    lethalityTitle: 'Tasa de Supervivencia a 5 Años por Tipo de Cáncer',
    lethalityClosing: 'El cáncer de tiroides está al 98% porque décadas de investigación lo llevaron ahí. El cáncer de páncreas (estadio IV) está al 3% porque aún no ha tenido suficiente. Esa diferencia no es destino — es inversión. Y la inversión es una elección.',
    lethalityTypes: ['Tiroides', 'Próstata', 'Mama', 'Colorrectal', 'Leucemia', 'Cerebro', 'Pulmón', 'Páncreas (IV)'],
    survivorsTitle: 'Sobrevivieron',
    lostTitle: 'No Regresaron',
    survivorsList: [
      { name: 'Kylie Minogue', detail: 'Cantante — cáncer de mama (2005), sobrevivió y volvió a los escenarios' },
      { name: 'Shannon Miller', detail: 'Gimnasta olímpica — cáncer de ovario (2011)' },
      { name: 'Robin Roberts', detail: 'Periodista — cáncer de mama + síndrome mielodisplásico' },
      { name: 'Fran Drescher', detail: 'Actriz — cáncer uterino, hoy defensora de la investigación' },
    ],
    lostList: [
      { name: 'Pau Donés', detail: 'Vocalista de Jarabe de Palo — cáncer colorrectal, murió en junio de 2020, a los 53 años' },
      { name: 'Chadwick Boseman', detail: 'Actor — cáncer de colon, 43 años' },
      { name: 'Patrick Swayze', detail: 'Actor — cáncer pancreático' },
      { name: 'David Bowie', detail: 'Músico — cáncer de hígado, 18 meses tras el diagnóstico' },
    ],
    survivorsIntro: 'Estos nombres llevan el mismo diagnóstico — y resultados diferentes.',
    survivorsOutro:
      'Lo que separa a ambos grupos no siempre es la fuerza de voluntad. A menudo es el acceso a una investigación que existía — o que aún no existía.',
    whyIRunTitle: 'Por Qué Corro',
    whyIRunBlocks: [
      'En 2016 y 2017, acompaño a mi padre al hospital y leo la palabra "cáncer" en su historial médico. Me quedo inmóvil. Ya he visto esta palabra llevarse a cuatro de mis tíos y tías. Pero esta vez es diferente — es él. Con el tiempo entiendo que no todo cáncer es igual. Se recupera. Solo necesita que le retiren algunos crecimientos pequeños. Vuelve a ser él mismo. Pero no olvidas haber leído esa palabra junto al nombre de alguien que amas.',
      'El día de mi cumpleaños número 27, recibo una llamada. Mi primo de 26 años murió de cáncer de próstata. Nunca lo había conocido en persona. Tenía 26 años.',
      'Por eso corro. No por heroísmo. Porque alguien tiene que hacer algo mientras todavía puede.',
    ],
    terryFoxTitle: 'Sobre los Hombros de Terry Fox',
    terryFoxBlocks: [
      '1977. Terry Fox tiene 18 años. Diagnóstico: osteosarcoma — un cáncer óseo poco frecuente. Le amputan la pierna derecha 15 cm por encima de la rodilla. Durante el tratamiento, rodeado de niños con cáncer, decide que tiene que hacer algo.',
      '12 de abril de 1980. Sumerge su prótesis en el Océano Atlántico en St. John\'s, Terranova — y empieza a correr hacia el oeste. Lo llama Marathon of Hope. Objetivo: 42 km al día por Canadá, un dólar por cada canadiense, para financiar la investigación. Corre casi siempre solo, al borde de la autopista, bajo lluvia, nieve y calor.',
      '143 días. 5.373 km recorridos. El 1 de septiembre de 1980 — cerca de Thunder Bay, Ontario — el cáncer había llegado a sus pulmones. Se vio obligado a detenerse. Murió el 28 de junio de 1981, un mes antes de cumplir 23 años. Había recaudado C$24,7 millones.',
      'Desde 1981, la Terry Fox Foundation ha recaudado más de C$900 millones. El Terry Fox Research Institute — fundado en 2007 — financia investigaciones oncológicas en Canadá y en más de 60 países. La carrera anual Terry Fox Run es el mayor recaudador de un solo día para la investigación del cáncer en el mundo. El 78% de cada dólar donado va directamente a los científicos.',
    ],
    worldTitle: 'Cómo Cambia el Mundo con una Cura',
    worldContext: 'Curar el cáncer no sería solo un logro médico. Sería uno de los mayores puntos de inflexión de la historia humana — económico, social y profundamente personal.',
    worldStat: 'US$185 billones — beneficio económico estimado de curar el cáncer.',
    worldStats: [
      { value: '19,3M', label: 'nuevos casos de cáncer diagnosticados por año' },
      { value: '10M', label: 'muertes anuales — 1 de cada 6 en el mundo' },
      { value: 'US$1,16B', label: 'gasto mundial en tratamiento oncológico por año' },
    ],
    worldHuman: [
      'Un padre que llega a casa.',
      'Una madre que ve crecer a su hijo.',
      'Una persona que escucha "cáncer" — y "curable" en la misma frase.',
      'Un niño que crece conociendo a un abuelo que, en otro mundo, habría muerto demasiado pronto.',
      'Un investigador que pasó décadas construyendo hacia esto — y vive para verlo funcionar.',
      'Una generación que hereda un mundo donde el cáncer es tratable — no una sentencia.',
    ],
    donationTitle: 'Tu Donación. Resultados Reales.',
    donationLines: [
      'va directo al laboratorio.',
      'Lo que sale de allí no es un informe.',
      'Es un tratamiento que aún no existe — y que podría salvar a alguien que conoces.',
    ],
    donationCountry: 'Tu dinero no cruza fronteras.',
    runningLogTitle: 'Diario de Carrera',
    videosTitle: 'Vídeos',
    problemSectionTitle: 'El Desafío',
    problemIntro: 'El cáncer es la segunda causa de muerte en el mundo. No discrimina por edad, ingresos ni geografía. Casi todas las familias han sido tocadas por él — y la diferencia entre los cánceres más tratables y los más letales se explica casi por completo por una sola cosa: el financiamiento de la investigación.',
    aboutTitle: 'Sobre el Proyecto',
    aboutBlocks: [
      '1K Miles of Hope es una iniciativa de recaudación y concienciación que dirige cada dólar recaudado hacia la investigación del cáncer a través de la Terry Fox Foundation — uno de los programas de financiamiento de investigación oncológica más transparentes e impactantes del mundo.',
      'La misión: correr 1.000 millas en 100 días. Compartir cada paso públicamente. Inspirar a personas y empresas a convertirse en socias. Recaudar fondos que llegan directamente a los científicos.',
      'Correr es visible. Una persona cubriendo millas cada día es una historia que la gente puede seguir, compartir y creer. Cada milla registrada es prueba de que el proyecto está vivo — y cada espectador que se convierte en donante transforma el movimiento en medicina.',
      '¿Por qué ahora? La investigación del cáncer está crónicamente infrafinanciada en relación con su impacto global. La tecnología existe para encontrar curas que aún no tenemos. Alguien tiene que hacer algo mientras todavía puede.',
    ],
    howItWorksTitle: 'Cómo Funciona',
    howItWorksSteps: [
      { title: 'Correr', description: 'Cada día se registran millas. Cada episodio se filma y publica.' },
      { title: 'Compartir', description: 'Cada carrera alcanza a una audiencia creciente en plataformas y fronteras.' },
      { title: 'Inspirar', description: 'Historias reales — las perdidas, las que sobrevivieron — mueven a los espectadores a actuar.' },
      { title: 'Recaudar', description: 'El 78% de cada donación va directamente a investigadores de cáncer.' },
      { title: 'Transformar', description: 'Cada científico financiado podría ser quien encuentre la cura.' },
    ],
    impactSectionTitle: 'Impacto en Tiempo Real',
    roadmapSectionTitle: 'El Camino por Delante',
    roadmapActiveLabel: 'Activo',
    partnersSectionTitle: 'Socios',
    partnersFirstLabel: 'Sé el primero.',
    partnersEmptyState: 'Aún sin socios. El primero lo cambia todo.',
    partnersBecome: 'Conviértete en Socio',
    goalsSectionTitle: 'Meta de Recaudación',
    benefitsSectionTitle: 'Por Qué Ser Socio',
    benefitsSubtitle: 'No es publicidad. Es alineación — con impacto, con propósito, con personas.',
    benefitsTabCompany: 'Empresas',
    benefitsTabIndividual: 'Personas',
    transparencySectionTitle: 'A Dónde Va Cada Dólar',
    transparencySubtitle: 'Cada asignación es pública. Cada dólar se rastrea.',
    transparencySourceLabel: 'Fuente: Informe Anual de la Terry Fox Foundation · terryfox.ca',
    finalCtaTitle: 'Sé Parte del Camino',
    finalCtaSubtitle: 'Cada milla lleva esperanza.',
    finalCtaBlocks: [
      'Cada socio amplía nuestro alcance.',
      'Cada donación financia a un científico.',
      'Cada compartido inspira a alguien nuevo.',
    ],
    finalCtaDonate: 'Donar Ahora',
    finalCtaPartner: 'Convertirse en Socio',
    introStatement: 'Nos enseñaron que la prevención es la mejor actitud, pero la verdad es más dura: cualquiera de nosotros está en el punto de mira del cáncer por razones que la ciencia aún intenta descifrar. Corro porque la prevención falló a personas que amo. Estoy corriendo 1.000 millas para recaudar fondos para la investigación contra el cáncer. Si la prevención no nos salva, la investigación debe hacerlo.',
    tocTitle: 'Índice',
    navLabels: { intro: 'Intro', index: 'Índice', problem: 'Problema', lives: 'Vidas', whyIRun: 'Por Qué Corro', terryFox: 'Terry Fox', world: 'Mundo', about: 'Sobre', rhythm: 'Ritmo', impact: 'Impacto', donate: 'Donar', funds: 'Fondos', tiers: 'Apoyo', faq: 'FAQ', road: 'Etapas', partners: 'Socios', benefits: 'Beneficios', updates: 'Novedades', videos: 'Videos', act: 'Actuar' },
  },

  fr: {
    statsTitle: 'Le Chiffre Qui Change Tout',
    cancerStatsItems: [
      { stat: '20M', label: 'nouveaux cas de cancer diagnostiqués par an dans le monde' },
      { stat: '9,7M', label: 'décès par cancer par an — plus que le VIH, le paludisme et la tuberculose réunis' },
      { stat: '26 500', label: 'personnes meurent du cancer chaque jour dans le monde' },
      { stat: '1 sur 5', label: 'personnes développent un cancer au cours de leur vie' },
      { stat: '400K', label: 'enfants et adolescents diagnostiqués chaque année' },
      { stat: '70%', label: 'des décès par cancer surviennent dans les pays à revenus faibles et intermédiaires' },
    ],
    whyHardTitle: 'Pourquoi le Remède Est Difficile',
    whyHard:
      "Le cancer n'est pas une maladie. C'est plus de 200 maladies. Chaque tumeur porte des mutations uniques qui évoluent à mesure que le traitement progresse. La cible bouge. Les traitements cessent de fonctionner. C'est pourquoi la recherche ne s'arrête jamais.",
    lethalityTitle: 'Taux de Survie à 5 Ans par Type de Cancer',
    lethalityClosing: "Le cancer de la thyroïde est à 98% parce que des décennies de recherche l'ont conduit là. Le cancer du pancréas (stade IV) est à 3% parce qu'il n'en a pas encore eu assez. Cet écart n'est pas un destin — c'est un financement. Et le financement est un choix.",
    lethalityTypes: ['Thyroïde', 'Prostate', 'Sein', 'Colorectal', 'Leucémie', 'Cerveau', 'Poumon', 'Pancréas (IV)'],
    survivorsTitle: 'Ils ont Survécu',
    lostTitle: 'Ils ne sont pas Revenus',
    survivorsList: [
      { name: 'Kylie Minogue', detail: 'Chanteuse — cancer du sein (2005), a survécu et est revenue sur scène' },
      { name: 'Shannon Miller', detail: 'Gymnaste olympique — cancer des ovaires (2011)' },
      { name: 'Robin Roberts', detail: 'Journaliste — cancer du sein + syndrome myélodysplasique' },
      { name: 'Fran Drescher', detail: "Actrice — cancer de l'utérus, aujourd'hui militante pour la recherche" },
    ],
    lostList: [
      { name: 'Pau Donés', detail: 'Chanteur de Jarabe de Palo — cancer colorectal, décédé en juin 2020, à 53 ans' },
      { name: 'Chadwick Boseman', detail: 'Acteur — cancer du côlon, 43 ans' },
      { name: 'Patrick Swayze', detail: 'Acteur — cancer du pancréas' },
      { name: 'David Bowie', detail: 'Musicien — cancer du foie, 18 mois après le diagnostic' },
    ],
    survivorsIntro: 'Ces noms portent le même diagnostic — et des résultats différents.',
    survivorsOutro:
      "Ce qui sépare les deux groupes n'est pas toujours la force de volonté. C'est souvent l'accès à une recherche qui existait — ou qui n'existait pas encore.",
    whyIRunTitle: 'Pourquoi Je Cours',
    whyIRunBlocks: [
      'En 2016 et 2017, j\'accompagne mon père à l\'hôpital et je lis le mot « cancer » dans son dossier médical. Je reste figé. J\'ai déjà vu ce mot emporter quatre de mes oncles et tantes. Mais cette fois c\'est différent — c\'est lui. Avec le temps, je comprends que tous les cancers ne se ressemblent pas. Il guérit. Il a juste besoin de faire retirer quelques petites lésions. Il redevient lui-même. Mais on n\'oublie pas d\'avoir lu ce mot à côté du nom de quelqu\'un qu\'on aime.',
      'Le jour de mon 27e anniversaire, je reçois un appel. Mon cousin de 26 ans est décédé d\'un cancer de la prostate. Je ne l\'avais jamais rencontré en personne. Il avait 26 ans.',
      'C\'est pour ça que je cours. Pas pour l\'héroïsme. Parce que quelqu\'un doit faire quelque chose tant qu\'il en est encore capable.',
    ],
    terryFoxTitle: 'Dans les Pas de Terry Fox',
    terryFoxBlocks: [
      "1977. Terry Fox a 18 ans. Diagnostic : ostéosarcome — un cancer osseux rare. Sa jambe droite est amputée 15 cm au-dessus du genou. Pendant son traitement, entouré d'enfants malades du cancer, il décide qu'il doit faire quelque chose.",
      "12 avril 1980. Il plonge sa prothèse dans l'Océan Atlantique à St. John's, Terre-Neuve — et commence à courir vers l'ouest. Il appelle cela le Marathon de l'Espoir. Objectif : 42 km par jour à travers le Canada, un dollar par Canadien, pour financer la recherche. Il court presque seul, sur le bord des routes, sous la pluie, la neige et la chaleur.",
      "143 jours. 5 373 km parcourus. Le 1er septembre 1980 — près de Thunder Bay, Ontario — le cancer avait atteint ses poumons. Il est contraint de s'arrêter. Il décède le 28 juin 1981, un mois avant son 23e anniversaire. Il avait récolté C$24,7 millions.",
      "Depuis 1981, la Terry Fox Foundation a collecté plus de C$900 millions. Le Terry Fox Research Institute — fondé en 2007 — finance des recherches oncologiques au Canada et dans plus de 60 pays. La course annuelle Terry Fox Run est le plus grand collecteur de fonds en une seule journée pour la recherche sur le cancer au monde. 78% de chaque dollar donné va directement aux scientifiques.",
    ],
    worldTitle: 'Comment le Monde Change avec un Remède',
    worldContext: "Guérir le cancer ne serait pas seulement une victoire médicale. Ce serait l'un des plus grands tournants de l'histoire humaine — économique, social et profondément personnel.",
    worldStat: "185 000 milliards USD — gain économique estimé d'un remède contre le cancer.",
    worldStats: [
      { value: '19,3M', label: 'nouveaux cas de cancer diagnostiqués par an' },
      { value: '10M', label: 'décès annuels — 1 sur 6 dans le monde' },
      { value: '1 160Mds $', label: 'dépenses mondiales en traitement oncologique par an' },
    ],
    worldHuman: [
      'Un père qui rentre à la maison.',
      'Une mère qui regarde son enfant grandir.',
      'Une personne qui entend "cancer" — et "guérissable" dans la même phrase.',
      "Un enfant qui grandit en connaissant un grand-parent qui, dans un autre monde, serait mort trop tôt.",
      "Un chercheur qui a passé des décennies à construire vers cela — et vit pour le voir fonctionner.",
      "Une génération qui hérite d'un monde où le cancer est traitable — pas une sentence.",
    ],
    donationTitle: 'Votre Don. Des Résultats Réels.',
    donationLines: [
      'va directement au laboratoire.',
      "Ce qui en sort n'est pas un rapport.",
      "C'est un traitement qui n'existe pas encore — et qui pourrait sauver quelqu'un que vous connaissez.",
    ],
    donationCountry: "Votre argent ne franchit pas les frontières.",
    runningLogTitle: 'Journal de Course',
    videosTitle: 'Vidéos',
    problemSectionTitle: 'Le Défi',
    problemIntro: "Le cancer est la deuxième cause de décès dans le monde. Il ne discrimine pas selon l'âge, les revenus ou la géographie. Presque toutes les familles ont été touchées — et la différence entre les cancers les plus traitables et les plus mortels s'explique presque entièrement par une seule chose : le financement de la recherche.",
    aboutTitle: 'À Propos du Projet',
    aboutBlocks: [
      "1K Miles of Hope est une initiative de collecte de fonds et de sensibilisation qui dirige chaque dollar collecté vers la recherche sur le cancer à travers la Terry Fox Foundation — l'un des programmes de financement de la recherche oncologique les plus transparents et impactants au monde.",
      "La mission : courir 1 000 miles en 100 jours. Partager chaque pas publiquement. Inspirer des individus et des entreprises à devenir partenaires. Collecter des fonds qui parviennent directement aux scientifiques.",
      "Courir est visible. Une personne qui couvre des miles chaque jour est une histoire que les gens peuvent suivre, partager et croire. Chaque mile enregistré prouve que le projet est vivant — et chaque spectateur qui devient donateur transforme le mouvement en médecine.",
      "Pourquoi maintenant ? La recherche sur le cancer est chroniquement sous-financée par rapport à son impact mondial. La technologie existe pour trouver des remèdes que nous n'avons pas encore. Quelqu'un doit faire quelque chose pendant qu'il en est encore capable.",
    ],
    howItWorksTitle: 'Comment Ça Marche',
    howItWorksSteps: [
      { title: 'Courir', description: "Chaque jour, des miles sont enregistrés. Chaque épisode est filmé et publié." },
      { title: 'Partager', description: "Chaque course touche un public croissant sur toutes les plateformes." },
      { title: 'Inspirer', description: "Des histoires vraies — celles perdues, celles qui ont survécu — poussent les spectateurs à agir." },
      { title: 'Collecter', description: "78% de chaque don va directement aux chercheurs en cancérologie." },
      { title: 'Transformer', description: "Chaque scientifique financé pourrait être celui qui trouve le remède." },
    ],
    impactSectionTitle: 'Impact en Direct',
    roadmapSectionTitle: 'La Route à Venir',
    roadmapActiveLabel: 'Actif',
    partnersSectionTitle: 'Partenaires',
    partnersFirstLabel: 'Soyez le premier.',
    partnersEmptyState: "Pas encore de partenaires. Le premier change tout.",
    partnersBecome: 'Devenir Partenaire',
    goalsSectionTitle: 'Objectif de Collecte',
    benefitsSectionTitle: 'Pourquoi Devenir Partenaire',
    benefitsSubtitle: "Ce n'est pas de la publicité. C'est un alignement — avec l'impact, le sens, les gens.",
    benefitsTabCompany: 'Entreprises',
    benefitsTabIndividual: 'Personnes',
    transparencySectionTitle: 'Où Va Chaque Dollar',
    transparencySubtitle: 'Chaque allocation est publique. Chaque dollar est suivi.',
    transparencySourceLabel: 'Source : Rapport annuel de la Terry Fox Foundation · terryfox.ca',
    finalCtaTitle: 'Faites Partie du Voyage',
    finalCtaSubtitle: "Chaque mile porte de l'espoir.",
    finalCtaBlocks: [
      "Chaque partenaire étend notre portée.",
      "Chaque don finance un scientifique.",
      "Chaque partage inspire quelqu'un de nouveau.",
    ],
    finalCtaDonate: 'Faire un Don',
    finalCtaPartner: 'Devenir Partenaire',
    introStatement: "On nous a appris que la prévention est la meilleure attitude, mais la vérité est plus dure : n'importe lequel d'entre nous est dans la ligne de mire du cancer pour des raisons que la science tente encore de déchiffrer. Je cours parce que la prévention a échoué à des personnes que j'aime. Je cours 1 000 miles pour lever des fonds pour la recherche contre le cancer. Si la prévention ne nous sauve pas, la recherche doit le faire.",
    tocTitle: 'Sommaire',
    navLabels: { intro: 'Intro', index: 'Sommaire', problem: 'Problème', lives: 'Vies', whyIRun: 'Pourquoi Je Cours', terryFox: 'Terry Fox', world: 'Monde', about: 'À propos', rhythm: 'Rythme', impact: 'Impact', donate: 'Don', funds: 'Fonds', tiers: 'Soutien', faq: 'FAQ', road: 'Étapes', partners: 'Partenaires', benefits: 'Avantages', updates: 'Actualités', videos: 'Vidéos', act: 'Agir' },
  },

  ca: {
    statsTitle: 'El Número Que ho Canvia Tot',
    cancerStatsItems: [
      { stat: '20M', label: 'nous casos de càncer diagnosticats per any al món' },
      { stat: '9,7M', label: 'morts per càncer a l\'any — més que el VIH, la malària i la tuberculosi junts' },
      { stat: '26.500', label: 'persones moren de càncer cada dia al món' },
      { stat: '1 de cada 5', label: 'persones desenvolupen càncer al llarg de la vida' },
      { stat: '400K', label: 'nens i adolescents diagnosticats cada any' },
      { stat: '70%', label: 'de les morts per càncer es produeixen en països de renda baixa i mitjana' },
    ],
    whyHardTitle: 'Per Què la Cura És Difícil',
    whyHard:
      "El càncer no és una malaltia. Són més de 200. Cada tumor porta mutacions úniques que evolucionen a mesura que el tractament avança. L'objectiu canvia. Els tractaments deixen de funcionar. Per això la recerca mai no s'acaba.",
    lethalityTitle: 'Taxa de Supervivència a 5 Anys per Tipus de Càncer',
    lethalityClosing: "El càncer de tiroide és al 98% perquè dècades de recerca hi han arribat. El càncer de pàncrees (estadi IV) és al 3% perquè encara no n'hi ha hagut prou. Aquesta diferència no és destí — és finançament. I el finançament és una elecció.",
    lethalityTypes: ['Tiroide', 'Pròstata', 'Mama', 'Colorectal', 'Leucèmia', 'Cervell', 'Pulmó', 'Pàncrees (IV)'],
    survivorsTitle: 'Van Sobreviure',
    lostTitle: 'No Van Tornar',
    survivorsList: [
      { name: 'Kylie Minogue', detail: 'Cantant — càncer de mama (2005), va sobreviure i va tornar als escenaris' },
      { name: 'Shannon Miller', detail: "Gimnasta olímpica — càncer d'ovari (2011)" },
      { name: 'Robin Roberts', detail: 'Periodista — càncer de mama + síndrome mielodisplàsica' },
      { name: 'Fran Drescher', detail: 'Actriu — càncer uterí, ara activista per la recerca' },
    ],
    lostList: [
      { name: 'Pau Donés', detail: 'Vocalista de Jarabe de Palo — càncer colorectal, va morir el juny de 2020, als 53 anys' },
      { name: 'Chadwick Boseman', detail: 'Actor — càncer de còlon, 43 anys' },
      { name: 'Patrick Swayze', detail: 'Actor — càncer pancreàtic' },
      { name: 'David Bowie', detail: 'Músic — càncer de fetge, 18 mesos després del diagnòstic' },
    ],
    survivorsIntro: 'Aquests noms porten el mateix diagnòstic — i resultats diferents.',
    survivorsOutro:
      "El que separa els dos grups no sempre és la força de voluntat. Sovint és l'accés a una recerca que existia — o que encara no existia.",
    whyIRunTitle: 'Per Què Corro',
    whyIRunBlocks: [
      "El 2016 i el 2017, acompanyo el meu pare a l'hospital i llegeixo la paraula \"càncer\" al seu historial mèdic. Em quedo parat. Ja he vist aquesta paraula endur-se quatre oncles i ties. Però aquest cop és diferent — és ell. Amb el temps entenc que no tot el càncer és igual. Es recupera. Només necessita que li retirin alguns petits creixements. Torna a ser ell mateix. Però no oblides haver llegit aquesta paraula al costat del nom d'algú que estimes.",
      'El dia del meu 27è aniversari, rebo una trucada. El meu cosí de 26 anys ha mort de càncer de pròstata. Mai no l\'havia conegut en persona. Tenia 26 anys.',
      'Per això corro. No per heroisme. Perquè algú ha de fer alguna cosa mentre encara pot.',
    ],
    terryFoxTitle: 'Sobre les Espatlles de Terry Fox',
    terryFoxBlocks: [
      "1977. Terry Fox té 18 anys. Diagnòstic: osteosarcoma — un càncer ossi poc freqüent. Li amputen la cama dreta 15 cm per sobre del genoll. Durant el tractament, envoltat de nens malalts de càncer, decideix que ha de fer alguna cosa.",
      "12 d'abril de 1980. Submergeix la seva pròtesi a l'Oceà Atlàntic a St. John's, Terranova — i comença a córrer cap a l'oest. L'anomena Marathon of Hope. Objectiu: 42 km al dia per tot el Canadà, un dòlar per canadenc, per finançar la recerca. Corre gairebé sempre sol, a la vora de l'autopista, sota pluja, neu i calor.",
      "143 dies. 5.373 km recorreguts. L'1 de setembre de 1980 — prop de Thunder Bay, Ontario — el càncer havia arribat als pulmons. Va ser obligat a aturar-se. Va morir el 28 de juny de 1981, un mes abans de complir 23 anys. Havia recaptat C$24,7 milions.",
      "Des del 1981, la Terry Fox Foundation ha recaptat més de C$900 milions. El Terry Fox Research Institute — fundat el 2007 — finança recerques oncològiques al Canadà i en més de 60 països. La cursa anual Terry Fox Run és el major recaptador d'un sol dia per a la recerca del càncer al món. El 78% de cada dòlar donat va directament als científics.",
    ],
    worldTitle: 'Com Canvia el Món amb una Cura',
    worldContext: "Curar el càncer no seria només una victòria mèdica. Seria un dels majors punts d'inflexió de la història humana — econòmic, social i profundament personal.",
    worldStat: '185 bilions de dòlars — benefici econòmic estimat de curar el càncer.',
    worldStats: [
      { value: '19,3M', label: 'nous casos de càncer diagnosticats per any' },
      { value: '10M', label: 'morts anuals — 1 de cada 6 al món' },
      { value: 'US$1,16B', label: 'despesa mundial en tractament oncològic per any' },
    ],
    worldHuman: [
      'Un pare que torna a casa.',
      'Una mare que veu créixer el seu fill.',
      'Una persona que escolta "càncer" — i "curable" en la mateixa frase.',
      "Un nen que creix coneixent un avi que, en un altre món, hauria mort massa aviat.",
      "Un investigador que va passar dècades construint cap a això — i viu per veure-ho funcionar.",
      "Una generació que hereta un món on el càncer és tractable — no una sentència.",
    ],
    donationTitle: 'La Vostra Donació. Resultats Reals.',
    donationLines: [
      'va directament al laboratori.',
      "El que en surt no és un informe.",
      "És un tractament que encara no existeix — i que podria salvar algú que coneixeu.",
    ],
    donationCountry: "Els vostres diners no creuen fronteres.",
    runningLogTitle: 'Diari de Cursa',
    videosTitle: 'Vídeos',
    problemSectionTitle: 'El Repte',
    problemIntro: "El càncer és la segona causa de mort al món. No discrimina per edat, ingressos ni geografia. Gairebé totes les famílies han estat tocades per ell — i la diferència entre els càncers més tractables i els més letals s'explica gairebé completament per una sola cosa: el finançament de la recerca.",
    aboutTitle: 'Sobre el Projecte',
    aboutBlocks: [
      "1K Miles of Hope és una iniciativa de recaptació i sensibilització que dirigeix cada dòlar recaptat cap a la recerca del càncer a través de la Terry Fox Foundation — un dels programes de finançament de recerca oncològica més transparents i impactants del món.",
      "La missió: córrer 1.000 milles en 100 dies. Compartir cada pas públicament. Inspirar individus i empreses a convertir-se en socis. Recaptar fons que arriben directament als científics.",
      "Córrer és visible. Una persona que cobreix milles cada dia és una història que la gent pot seguir, compartir i creure. Cada milla registrada és prova que el projecte és viu — i cada espectador que es converteix en donant transforma el moviment en medicina.",
      "Per què ara? La recerca del càncer està crònicament infrafinançada en relació amb el seu impacte global. La tecnologia existeix per trobar cures que encara no tenim. Algú ha de fer alguna cosa mentre encara pot.",
    ],
    howItWorksTitle: 'Com Funciona',
    howItWorksSteps: [
      { title: 'Córrer', description: "Cada dia es registren milles. Cada episodi es filma i es publica." },
      { title: 'Compartir', description: "Cada cursa arriba a un públic creixent en plataformes i fronteres." },
      { title: 'Inspirar', description: "Històries reals — les perdudes, les que han sobreviscut — mouen els espectadors a actuar." },
      { title: 'Recaptar', description: "El 78% de cada donació va directament als investigadors de càncer." },
      { title: 'Transformar', description: "Cada científic finançat podria ser el que trobi la cura." },
    ],
    impactSectionTitle: 'Impacte en Temps Real',
    roadmapSectionTitle: 'El Camí per Endavant',
    roadmapActiveLabel: 'Actiu',
    partnersSectionTitle: 'Socis',
    partnersFirstLabel: 'Sigueu el primer.',
    partnersEmptyState: "Encara sense socis. El primer ho canvia tot.",
    partnersBecome: 'Convertiu-vos en Soci',
    goalsSectionTitle: 'Objectiu de Recaptació',
    benefitsSectionTitle: 'Per Què Ser Soci',
    benefitsSubtitle: "No és publicitat. És alineació — amb impacte, amb propòsit, amb persones.",
    benefitsTabCompany: 'Empreses',
    benefitsTabIndividual: 'Persones',
    transparencySectionTitle: 'On Va Cada Dòlar',
    transparencySubtitle: 'Cada assignació és pública. Cada dòlar es rastreja.',
    transparencySourceLabel: 'Font: Informe Anual de la Terry Fox Foundation · terryfox.ca',
    finalCtaTitle: 'Formeu Part del Viatge',
    finalCtaSubtitle: 'Cada milla porta esperança.',
    finalCtaBlocks: [
      "Cada soci amplia el nostre abast.",
      "Cada donació finança un científic.",
      "Cada compartit inspira algú nou.",
    ],
    finalCtaDonate: 'Donar Ara',
    finalCtaPartner: 'Convertiu-vos en Soci',
    introStatement: "Ens van ensenyar que la prevenció és la millor actitud, però la veritat és més dura: qualsevol de nosaltres és al punt de mira del càncer per raons que la ciència encara intenta desxifrar. Corro perquè la prevenció va fallar a persones que estimo. Estic corrent 1.000 milles per recaptar fons per a la recerca contra el càncer. Si la prevenció no ens salva, la recerca ha de fer-ho.",
    tocTitle: 'Sumari',
    navLabels: { intro: 'Intro', index: 'Sumari', problem: 'Problema', lives: 'Vides', whyIRun: 'Per Què Corro', terryFox: 'Terry Fox', world: 'Món', about: 'Sobre', rhythm: 'Ritme', impact: 'Impacte', donate: 'Donar', funds: 'Fons', tiers: 'Suport', faq: 'FAQ', road: 'Etapes', partners: 'Socis', benefits: 'Beneficis', updates: 'Novetats', videos: 'Vídeos', act: 'Actuar' },
  },
}
