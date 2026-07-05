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
  terryFoxClosing: string
  worldTitle: string
  worldStat: string
  worldHuman: string[]
  donationTitle: string
  donationLines: string[]
  donationCountry: string
  runningLogTitle: string
  videosTitle: string
}

export const NARRATIVE: Record<NarrativeLocale, KMilesNarrative> = {
  en: {
    statsTitle: 'The Number That Changes Everything',
    cancerStatsItems: [
      { stat: '20M', label: 'new cancer cases diagnosed per year worldwide' },
      { stat: '698', label: 'Brazilians die from cancer every single day' },
      { stat: '1 in 5', label: 'people develop cancer in their lifetime' },
      { stat: '400K', label: 'children and adolescents diagnosed every year' },
    ],
    whyHardTitle: 'Why the Cure Is Difficult',
    whyHard:
      'Cancer is not one disease. It is more than 200. Each tumor carries unique mutations that evolve as treatment progresses. The target moves. Treatments stop working. That is why research never ends.',
    lethalityTitle: '5-Year Survival Rate by Cancer Type',
    lethalityClosing: 'The difference between 98% and 3% is called research.',
    lethalityTypes: ['Thyroid', 'Prostate', 'Breast', 'Colorectal', 'Leukemia', 'Brain', 'Lung', 'Pancreas (IV)'],
    survivorsTitle: 'They Survived',
    lostTitle: 'They Were Lost',
    survivorsList: [
      { name: 'Shannon Miller', detail: 'Olympic gymnast — ovarian cancer (2011)' },
      { name: 'Robin Roberts', detail: 'Journalist — breast cancer + myelodysplastic syndrome' },
      { name: 'Fran Drescher', detail: 'Actress — uterine cancer, now research advocate' },
    ],
    lostList: [
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
      '1977. Terry Fox is 18 years old. Diagnosed with bone cancer. Right leg amputated.',
      '1980. He begins running from the Atlantic to the Pacific. A full marathon every day. With a prosthetic leg. 143 consecutive days.',
      'Cancer reached his lungs. He stopped. He died on June 28, 1981.',
      'Since then: more than C$1 billion raised. Runs in over 60 countries. The world\'s largest single-day fundraiser for cancer research.',
    ],
    terryFoxClosing: 'I didn\'t invent anything. I am following someone who started before me.',
    worldTitle: 'What the World Looks Like With a Cure',
    worldStat: 'US$185 trillion — estimated economic gain of curing cancer.',
    worldHuman: [
      'A father who comes home.',
      'A mother who watches her child grow.',
      'Someone who doesn\'t receive the call I received on my birthday.',
    ],
    donationTitle: 'Your Donation. Real Results.',
    donationLines: [
      '78% of what you donate goes directly to the lab.',
      'What comes out is not a report.',
      'It is a treatment that does not yet exist — one that may save someone you know.',
    ],
    donationCountry:
      'Every dollar raised in Brazil goes to Brazilian cancer researchers. Not abroad.',
    runningLogTitle: 'Running Log',
    videosTitle: 'Videos',
  },

  pt: {
    statsTitle: 'O Número Que Muda Tudo',
    cancerStatsItems: [
      { stat: '20M', label: 'novos casos de câncer diagnosticados por ano no mundo' },
      { stat: '698', label: 'brasileiros morrem de câncer por dia' },
      { stat: '1 em cada 5', label: 'pessoas desenvolvem câncer ao longo da vida' },
      { stat: '400 mil', label: 'crianças e adolescentes diagnosticados por ano' },
    ],
    whyHardTitle: 'Por Que a Cura É Difícil',
    whyHard:
      'O câncer não é uma doença. São mais de 200. Cada tumor carrega mutações únicas que evoluem à medida que o tratamento avança. O alvo muda. Os tratamentos param de funcionar. É por isso que a pesquisa nunca termina.',
    lethalityTitle: 'Taxa de Sobrevivência em 5 Anos por Tipo de Câncer',
    lethalityClosing: 'A diferença entre 98% e 3% chama-se pesquisa.',
    lethalityTypes: ['Tireoide', 'Próstata', 'Mama', 'Colorretal', 'Leucemia', 'Cérebro', 'Pulmão', 'Pâncreas (IV)'],
    survivorsTitle: 'Sobreviveram',
    lostTitle: 'Não Voltaram',
    survivorsList: [
      { name: 'Shannon Miller', detail: 'Ginasta olímpica — câncer de ovário (2011)' },
      { name: 'Robin Roberts', detail: 'Jornalista — câncer de mama + síndrome mielodisplásica' },
      { name: 'Fran Drescher', detail: 'Atriz — câncer uterino, hoje ativista de pesquisa' },
    ],
    lostList: [
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
      '1977. Terry Fox tem 18 anos. Diagnosticado com câncer ósseo. Amputação da perna direita.',
      '1980. Ele começa a correr do Atlântico ao Pacífico. Uma maratona por dia. Com prótese. 143 dias consecutivos.',
      'O câncer chegou aos pulmões. Ele parou. Morreu em 28 de junho de 1981.',
      'Desde então: mais de C$ 1 bilhão arrecadados. Corridas em mais de 60 países. O maior arrecadador de um dia para pesquisa do câncer no mundo.',
    ],
    terryFoxClosing: 'Não inventei nada. Estou seguindo alguém que começou antes de mim.',
    worldTitle: 'Como o Mundo Muda com a Cura',
    worldStat: 'US$ 185 trilhões — estimativa do ganho econômico de uma cura para o câncer.',
    worldHuman: [
      'Um pai que chega em casa.',
      'Uma mãe que vê o filho crescer.',
      'Alguém que não recebe a ligação que eu recebi no meu aniversário.',
    ],
    donationTitle: 'Sua Doação. Resultado Real.',
    donationLines: [
      '78% do que você doa vai diretamente para o laboratório.',
      'O que sai de lá não é um relatório.',
      'É um tratamento que ainda não existe — e que pode salvar alguém que você conhece.',
    ],
    donationCountry:
      'Cada real doado no Brasil fica no Brasil — para pesquisadores brasileiros. Não para fora.',
    runningLogTitle: 'Diário de Corrida',
    videosTitle: 'Vídeos',
  },

  es: {
    statsTitle: 'El Número Que lo Cambia Todo',
    cancerStatsItems: [
      { stat: '20M', label: 'nuevos casos de cáncer diagnosticados por año en el mundo' },
      { stat: '698', label: 'brasileños mueren de cáncer cada día' },
      { stat: '1 de cada 5', label: 'personas desarrollan cáncer a lo largo de su vida' },
      { stat: '400K', label: 'niños y adolescentes diagnosticados cada año' },
    ],
    whyHardTitle: 'Por Qué la Cura Es Difícil',
    whyHard:
      'El cáncer no es una enfermedad. Son más de 200. Cada tumor lleva mutaciones únicas que evolucionan a medida que avanza el tratamiento. El objetivo cambia. Los tratamientos dejan de funcionar. Por eso la investigación nunca termina.',
    lethalityTitle: 'Tasa de Supervivencia a 5 Años por Tipo de Cáncer',
    lethalityClosing: 'La diferencia entre el 98% y el 3% se llama investigación.',
    lethalityTypes: ['Tiroides', 'Próstata', 'Mama', 'Colorrectal', 'Leucemia', 'Cerebro', 'Pulmón', 'Páncreas (IV)'],
    survivorsTitle: 'Sobrevivieron',
    lostTitle: 'No Regresaron',
    survivorsList: [
      { name: 'Shannon Miller', detail: 'Gimnasta olímpica — cáncer de ovario (2011)' },
      { name: 'Robin Roberts', detail: 'Periodista — cáncer de mama + síndrome mielodisplásico' },
      { name: 'Fran Drescher', detail: 'Actriz — cáncer uterino, hoy defensora de la investigación' },
    ],
    lostList: [
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
      '1977. Terry Fox tiene 18 años. Diagnosticado con cáncer de huesos. Amputación de la pierna derecha.',
      '1980. Comienza a correr del Atlántico al Pacífico. Una maratón completa por día. Con una prótesis. 143 días consecutivos.',
      'El cáncer llegó a sus pulmones. Se detuvo. Murió el 28 de junio de 1981.',
      'Desde entonces: más de C$1.000 millones recaudados. Carreras en más de 60 países. El mayor evento de recaudación de un día para la investigación del cáncer en el mundo.',
    ],
    terryFoxClosing: 'No inventé nada. Estoy siguiendo a alguien que empezó antes que yo.',
    worldTitle: 'Cómo Cambia el Mundo con una Cura',
    worldStat: 'US$185 billones — beneficio económico estimado de curar el cáncer.',
    worldHuman: [
      'Un padre que llega a casa.',
      'Una madre que ve crecer a su hijo.',
      'Alguien que no recibe la llamada que yo recibí en mi cumpleaños.',
    ],
    donationTitle: 'Tu Donación. Resultados Reales.',
    donationLines: [
      'El 78% de tu donación va directamente al laboratorio.',
      'Lo que sale de allí no es un informe.',
      'Es un tratamiento que aún no existe — y que puede salvar a alguien que conoces.',
    ],
    donationCountry:
      'Cada dólar recaudado en Brasil va a investigadores brasileños de cáncer. No al extranjero.',
    runningLogTitle: 'Diario de Carrera',
    videosTitle: 'Vídeos',
  },

  fr: {
    statsTitle: 'Le Chiffre Qui Change Tout',
    cancerStatsItems: [
      { stat: '20M', label: 'nouveaux cas de cancer diagnostiqués par an dans le monde' },
      { stat: '698', label: 'Brésiliens meurent du cancer chaque jour' },
      { stat: '1 sur 5', label: 'personnes développent un cancer au cours de leur vie' },
      { stat: '400K', label: 'enfants et adolescents diagnostiqués chaque année' },
    ],
    whyHardTitle: 'Pourquoi le Remède Est Difficile',
    whyHard:
      "Le cancer n'est pas une maladie. C'est plus de 200 maladies. Chaque tumeur porte des mutations uniques qui évoluent à mesure que le traitement progresse. La cible bouge. Les traitements cessent de fonctionner. C'est pourquoi la recherche ne s'arrête jamais.",
    lethalityTitle: 'Taux de Survie à 5 Ans par Type de Cancer',
    lethalityClosing: "La différence entre 98% et 3% s'appelle recherche.",
    lethalityTypes: ['Thyroïde', 'Prostate', 'Sein', 'Colorectal', 'Leucémie', 'Cerveau', 'Poumon', 'Pancréas (IV)'],
    survivorsTitle: 'Ils ont Survécu',
    lostTitle: 'Ils ne sont pas Revenus',
    survivorsList: [
      { name: 'Shannon Miller', detail: 'Gymnaste olympique — cancer des ovaires (2011)' },
      { name: 'Robin Roberts', detail: 'Journaliste — cancer du sein + syndrome myélodysplasique' },
      { name: 'Fran Drescher', detail: "Actrice — cancer de l'utérus, aujourd'hui militante pour la recherche" },
    ],
    lostList: [
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
      '1977. Terry Fox a 18 ans. Diagnostiqué avec un cancer des os. Amputation de la jambe droite.',
      '1980. Il commence à courir de l\'Atlantique au Pacifique. Un marathon complet chaque jour. Avec une prothèse. 143 jours consécutifs.',
      'Le cancer a atteint ses poumons. Il s\'est arrêté. Il est décédé le 28 juin 1981.',
      'Depuis lors : plus de 1 milliard de dollars canadiens collectés. Des courses dans plus de 60 pays. La plus grande collecte de fonds d\'un seul jour pour la recherche contre le cancer.',
    ],
    terryFoxClosing: "Je n'ai rien inventé. Je suis quelqu'un qui a commencé avant moi.",
    worldTitle: 'Comment le Monde Change avec un Remède',
    worldStat: '185 000 milliards USD — gain économique estimé d\'un remède contre le cancer.',
    worldHuman: [
      'Un père qui rentre à la maison.',
      'Une mère qui regarde son enfant grandir.',
      "Quelqu'un qui ne reçoit pas l'appel que j'ai reçu le jour de mon anniversaire.",
    ],
    donationTitle: 'Votre Don. Des Résultats Réels.',
    donationLines: [
      'Le 78% de ce que vous donnez va directement au laboratoire.',
      "Ce qui en sort n'est pas un rapport.",
      "C'est un traitement qui n'existe pas encore — et qui pourrait sauver quelqu'un que vous connaissez.",
    ],
    donationCountry:
      'Chaque dollar levé au Brésil va à des chercheurs brésiliens en cancérologie. Pas à l\'étranger.',
    runningLogTitle: 'Journal de Course',
    videosTitle: 'Vidéos',
  },

  ca: {
    statsTitle: 'El Número Que ho Canvia Tot',
    cancerStatsItems: [
      { stat: '20M', label: 'nous casos de càncer diagnosticats per any al món' },
      { stat: '698', label: 'brasilers moren de càncer cada dia' },
      { stat: '1 de cada 5', label: 'persones desenvolupen càncer al llarg de la vida' },
      { stat: '400K', label: 'nens i adolescents diagnosticats cada any' },
    ],
    whyHardTitle: 'Per Què la Cura És Difícil',
    whyHard:
      "El càncer no és una malaltia. Són més de 200. Cada tumor porta mutacions úniques que evolucionen a mesura que el tractament avança. L'objectiu canvia. Els tractaments deixen de funcionar. Per això la recerca mai no s'acaba.",
    lethalityTitle: 'Taxa de Supervivència a 5 Anys per Tipus de Càncer',
    lethalityClosing: "La diferència entre el 98% i el 3% s'anomena recerca.",
    lethalityTypes: ['Tiroide', 'Pròstata', 'Mama', 'Colorectal', 'Leucèmia', 'Cervell', 'Pulmó', 'Pàncrees (IV)'],
    survivorsTitle: 'Van Sobreviure',
    lostTitle: 'No Van Tornar',
    survivorsList: [
      { name: 'Shannon Miller', detail: "Gimnasta olímpica — càncer d'ovari (2011)" },
      { name: 'Robin Roberts', detail: 'Periodista — càncer de mama + síndrome mielodisplàsica' },
      { name: 'Fran Drescher', detail: 'Actriu — càncer uterí, ara activista per la recerca' },
    ],
    lostList: [
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
      '1977. Terry Fox té 18 anys. Diagnosticat amb càncer d\'ossos. Amputació de la cama dreta.',
      '1980. Comença a córrer de l\'Atlàntic al Pacífic. Una marató completa cada dia. Amb una pròtesi. 143 dies consecutius.',
      'El càncer va arribar als pulmons. Va parar. Va morir el 28 de juny de 1981.',
      'Des d\'aleshores: més de 1.000 milions de dòlars canadencs recaptats. Curses en més de 60 països. La major recaptació d\'un sol dia per a la recerca del càncer al món.',
    ],
    terryFoxClosing: 'No vaig inventar res. Segueixo algú que va començar abans que jo.',
    worldTitle: 'Com Canvia el Món amb una Cura',
    worldStat: '185 bilions de dòlars — benefici econòmic estimat de curar el càncer.',
    worldHuman: [
      'Un pare que torna a casa.',
      'Una mare que veu créixer el seu fill.',
      "Algú que no rep la trucada que jo vaig rebre el dia del meu aniversari.",
    ],
    donationTitle: 'La Vostra Donació. Resultats Reals.',
    donationLines: [
      'El 78% del que doneu va directament al laboratori.',
      "El que en surt no és un informe.",
      "És un tractament que encara no existeix — i que podria salvar algú que coneixeu.",
    ],
    donationCountry:
      'Cada dòlar recaptat al Brasil va a investigadors brasilers de càncer. No a l\'estranger.',
    runningLogTitle: 'Diari de Cursa',
    videosTitle: 'Vídeos',
  },
}
