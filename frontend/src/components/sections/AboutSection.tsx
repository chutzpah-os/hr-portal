'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

const CHAPTERS = [
  {
    label: 'Origins',
    labelPt: 'Origens',
    labelEs: 'Orígenes',
    labelFr: 'Origines',
    labelCa: 'Orígens',
    paragraphs: [
      'I was born in Aracaju, in the northeast of Brazil — the smallest state in the country, but a place that shaped the foundation of who I am.',
      'When I was a child, I helped my father sell handcrafted wooden pieces at local artisan fairs. I started working very early, learning that dignity comes from effort and that survival often depends on creativity.',
      'As I grew older, I also worked as a sales representative for beauty salon products — an experience that taught me how to communicate with people, build trust, understand business dynamics, and navigate rejection. Working directly with clients and entrepreneurs gave me an early understanding of how relationships, consistency, and adaptability shape opportunities.',
      'Those years taught me resilience before I even knew the word. My first lessons in entrepreneurship, discipline, and persistence did not come from books or universities — they came from real life, responsibility, and necessity.',
    ],
    paragraphsPt: [
      'Nasci em Aracaju, no nordeste do Brasil — o menor estado do país, mas um lugar que moldou a base de quem eu sou.',
      'Quando criança, eu ajudava meu pai a vender peças artesanais de madeira em feiras locais. Comecei a trabalhar muito cedo, aprendendo que a dignidade vem do esforço e que a sobrevivência muitas vezes depende da criatividade.',
      'Conforme fui crescendo, também trabalhei como representante de vendas de produtos para salões de beleza — uma experiência que me ensinou a me comunicar com as pessoas, construir confiança, entender a dinâmica dos negócios e lidar com a rejeição. Trabalhar diretamente com clientes e empreendedores me deu uma compreensão precoce de como relacionamentos, consistência e adaptabilidade moldam oportunidades.',
      'Aqueles anos me ensinaram resiliência antes mesmo de eu conhecer a palavra. Minhas primeiras lições de empreendedorismo, disciplina e persistência não vieram de livros ou universidades — vieram da vida real, da responsabilidade e da necessidade.',
    ],
    paragraphsEs: [
      'Nací en Aracaju, en el noreste de Brasil — el estado más pequeño del país, pero un lugar que moldeó los fundamentos de quien soy.',
      'Cuando era niño, ayudaba a mi padre a vender piezas artesanales de madera en ferias locales. Empecé a trabajar muy temprano, aprendiendo que la dignidad viene del esfuerzo y que la supervivencia a menudo depende de la creatividad.',
      'Conforme fui creciendo, también trabajé como representante de ventas de productos para salones de belleza — una experiencia que me enseñó a comunicarme con las personas, construir confianza, entender la dinámica de los negocios y manejar el rechazo. Trabajar directamente con clientes y emprendedores me dio una comprensión temprana de cómo las relaciones, la consistencia y la adaptabilidad moldean las oportunidades.',
      'Esos años me enseñaron resiliencia antes de que yo conociera la palabra. Mis primeras lecciones de emprendimiento, disciplina y persistencia no vinieron de libros ni universidades — vinieron de la vida real, la responsabilidad y la necesidad.',
    ],
    paragraphsFr: [
      'Je suis né à Aracaju, dans le nord-est du Brésil — le plus petit État du pays, mais un lieu qui a forgé les fondements de ce que je suis.',
      'Enfant, j\'aidais mon père à vendre des pièces artisanales en bois dans les foires locales. J\'ai commencé à travailler très tôt, apprenant que la dignité vient de l\'effort et que la survie dépend souvent de la créativité.',
      'En grandissant, j\'ai également travaillé comme représentant commercial de produits pour salons de coiffure — une expérience qui m\'a appris à communiquer avec les gens, à établir la confiance, à comprendre la dynamique des affaires et à gérer le refus. Travailler directement avec des clients et des entrepreneurs m\'a donné une compréhension précoce de la façon dont les relations, la constance et l\'adaptabilité façonnent les opportunités.',
      'Ces années m\'ont enseigné la résilience avant même que je connaisse le mot. Mes premières leçons d\'entrepreneuriat, de discipline et de persévérance ne sont pas venues de livres ou d\'universités — elles sont venues de la vraie vie, de la responsabilité et de la nécessité.',
    ],
    paragraphsCa: [
      'Vaig néixer a Aracaju, al nord-est del Brasil — el menor estat del país, però un lloc que va forjar els fonaments del que soc.',
      'De nen, ajudava el meu pare a vendre peces artesanals de fusta a les fires locals. Vaig començar a treballar molt aviat, aprenent que la dignitat ve de l\'esforç i que la supervivència sovint depèn de la creativitat.',
      'A mesura que vaig créixer, també vaig treballar com a representant de vendes de productes per a perruqueries — una experiència que em va ensenyar a comunicar-me amb les persones, a construir confiança, a entendre la dinàmica dels negocis i a gestionar el rebuig. Treballar directament amb clients i emprenedors em va donar una comprensió primerenca de com les relacions, la consistència i l\'adaptabilitat modelen les oportunitats.',
      'Aquells anys em van ensenyar resiliència abans que jo conegués la paraula. Les meves primeres lliçons d\'emprenedoria, disciplina i persistència no van venir de llibres ni universitats — van venir de la vida real, la responsabilitat i la necessitat.',
    ],
  },
  {
    label: 'The Turning Point',
    labelPt: 'O Ponto de Virada',
    labelEs: 'El Punto de Inflexión',
    labelFr: 'Le Tournant',
    labelCa: 'El Punt d\'Inflexió',
    paragraphs: [
      'In 2017, my family received difficult news: my father had been diagnosed with a skin disease. At the same time, cancer had already touched several members of my family — uncles, aunts, cousins. Watching people I loved suffer created a deep internal conflict inside me.',
      'That period changed the direction of my life. I stopped seeing technology and science as just interesting fields and started seeing them as tools capable of reducing suffering, saving time, protecting lives, and creating real impact.',
      'I realized that I had two choices: either become another person overwhelmed by chaos, or dedicate my life to building solutions inside it. That decision still guides me today.',
    ],
    paragraphsPt: [
      'Em 2017, minha família recebeu uma notícia difícil: meu pai havia sido diagnosticado com uma doença de pele. Ao mesmo tempo, o câncer já havia atingido vários membros da minha família — tios, tias, primos. Ver pessoas que eu amava sofrendo criou um conflito interno profundo dentro de mim.',
      'Aquele período mudou a direção da minha vida. Parei de ver a tecnologia e a ciência apenas como campos interessantes e passei a vê-las como ferramentas capazes de reduzir o sofrimento, economizar tempo, proteger vidas e criar impacto real.',
      'Percebi que eu tinha duas escolhas: me tornar mais uma pessoa esmagada pelo caos, ou dedicar minha vida a construir soluções dentro dele. Essa decisão ainda me guia hoje.',
    ],
    paragraphsEs: [
      'En 2017, mi familia recibió una noticia difícil: mi padre había sido diagnosticado con una enfermedad de piel. Al mismo tiempo, el cáncer ya había tocado a varios miembros de mi familia — tíos, tías, primos. Ver sufrir a personas que amaba creó un conflicto interno profundo en mí.',
      'Ese período cambió la dirección de mi vida. Dejé de ver la tecnología y la ciencia como simples campos interesantes y empecé a verlas como herramientas capaces de reducir el sufrimiento, ahorrar tiempo, proteger vidas y crear un impacto real.',
      'Me di cuenta de que tenía dos opciones: convertirme en otra persona abrumada por el caos, o dedicar mi vida a construir soluciones dentro de él. Esa decisión todavía me guía hoy.',
    ],
    paragraphsFr: [
      'En 2017, ma famille a reçu une nouvelle difficile : mon père avait été diagnostiqué avec une maladie de peau. En même temps, le cancer avait déjà touché plusieurs membres de ma famille — oncles, tantes, cousins. Voir souffrir des personnes que j\'aimais a créé un profond conflit intérieur en moi.',
      'Cette période a changé la direction de ma vie. J\'ai cessé de voir la technologie et la science comme de simples domaines intéressants et j\'ai commencé à les voir comme des outils capables de réduire la souffrance, de sauver du temps, de protéger des vies et de créer un impact réel.',
      'J\'ai réalisé que j\'avais deux choix : devenir une autre personne écrasée par le chaos, ou consacrer ma vie à construire des solutions en son sein. Cette décision me guide encore aujourd\'hui.',
    ],
    paragraphsCa: [
      'El 2017, la meva família va rebre una notícia difícil: el meu pare havia estat diagnosticat amb una malaltia de pell. Al mateix temps, el càncer ja havia tocat diversos membres de la meva família — oncles, ties, cosins. Veure patir persones que estimava va crear un profund conflicte interior en mi.',
      'Aquell període va canviar la direcció de la meva vida. Vaig deixar de veure la tecnologia i la ciència com a simples camps interessants i vaig començar a veure-les com a eines capaces de reduir el sofriment, estalviar temps, protegir vides i crear un impacte real.',
      'Em vaig adonar que tenia dues opcions: convertir-me en una altra persona aclaparada pel caos, o dedicar la meva vida a construir solucions dins d\'ell. Aquesta decisió encara em guia avui.',
    ],
  },
  {
    label: 'The Journey',
    labelPt: 'A Jornada',
    labelEs: 'El Camino',
    labelFr: 'Le Parcours',
    labelCa: 'El Camí',
    paragraphs: [
      'My path was never linear. I failed exams. I faced moments of financial instability. I experienced periods where fear, uncertainty, and self-doubt felt louder than ambition.',
      'There were projects that did not work, plans that collapsed, and moments where I questioned whether I was capable of building the future I imagined. But every setback forced me to develop something more important than confidence: endurance.',
      'I learned that resilience is not about never breaking — it is about rebuilding with more clarity every time you do.',
    ],
    paragraphsPt: [
      'Meu caminho nunca foi linear. Reprovei em provas. Enfrentei momentos de instabilidade financeira. Vivi períodos em que o medo, a incerteza e a dúvida sobre mim mesmo soavam mais alto que a ambição.',
      'Houve projetos que não deram certo, planos que desmoronaram e momentos em que questionei se eu era capaz de construir o futuro que imaginava. Mas cada revés me obrigou a desenvolver algo mais importante que confiança: resistência.',
      'Aprendi que resiliência não é sobre nunca se quebrar — é sobre se reconstruir com mais clareza a cada vez que isso acontece.',
    ],
    paragraphsEs: [
      'Mi camino nunca fue lineal. Reprobé exámenes. Enfrenté momentos de inestabilidad financiera. Viví períodos en que el miedo, la incertidumbre y la duda sobre mí mismo sonaban más fuerte que la ambición.',
      'Hubo proyectos que no funcionaron, planes que se derrumbaron y momentos en que cuestioné si era capaz de construir el futuro que imaginaba. Pero cada revés me obligó a desarrollar algo más importante que la confianza: la resistencia.',
      'Aprendí que la resiliencia no se trata de nunca quebrarse — se trata de reconstruirse con más claridad cada vez que eso sucede.',
    ],
    paragraphsFr: [
      'Mon parcours n\'a jamais été linéaire. J\'ai échoué à des examens. J\'ai traversé des moments d\'instabilité financière. J\'ai vécu des périodes où la peur, l\'incertitude et le doute sur moi-même résonnaient plus fort que l\'ambition.',
      'Il y a eu des projets qui n\'ont pas fonctionné, des plans qui se sont effondrés, et des moments où je me suis demandé si j\'étais capable de construire l\'avenir que j\'imaginais. Mais chaque revers m\'a obligé à développer quelque chose de plus important que la confiance : l\'endurance.',
      'J\'ai appris que la résilience ne consiste pas à ne jamais se briser — il s\'agit de se reconstruire avec plus de clarté à chaque fois que cela arrive.',
    ],
    paragraphsCa: [
      'El meu camí mai ha estat lineal. Vaig suspendre exàmens. Vaig afrontar moments d\'inestabilitat financera. Vaig viure períodes en què la por, la incertesa i el dubte sobre mi mateix sonaven més fort que l\'ambició.',
      'Hi va haver projectes que no van funcionar, plans que es van enfonsar i moments en què vaig qüestionar si era capaç de construir el futur que imaginava. Però cada revés em va obligar a desenvolupar alguna cosa més important que la confiança: la resistència.',
      'Vaig aprendre que la resiliència no consisteix a no trencar-se mai — consisteix a reconstruir-se amb més claredat cada vegada que passa.',
    ],
  },
  {
    label: 'The Craft',
    labelPt: 'O Ofício',
    labelEs: 'El Oficio',
    labelFr: 'Le Métier',
    labelCa: 'L\'Ofici',
    paragraphs: [
      'Technology became my language for solving problems. I became deeply interested in cybersecurity, software engineering, artificial intelligence, data systems, and scientific innovation — because they sit at the intersection of logic, strategy, and human impact.',
      'Over time, I dedicated myself to building systems, studying emerging technologies, and exploring how AI and engineering could be applied to healthcare, education, security, and human development at scale.',
      'What attracts me most is not technology itself — it is what technology makes possible. The ability to protect. The ability to predict. The ability to connect people and accelerate progress.',
    ],
    paragraphsPt: [
      'A tecnologia se tornou minha linguagem para resolver problemas. Passei a me interessar profundamente por cibersegurança, engenharia de software, inteligência artificial, sistemas de dados e inovação científica — porque elas estão na interseção entre lógica, estratégia e impacto humano.',
      'Com o tempo, me dediquei a construir sistemas, estudar tecnologias emergentes e explorar como IA e engenharia poderiam ser aplicadas à saúde, educação, segurança e desenvolvimento humano em larga escala.',
      'O que mais me atrai não é a tecnologia em si — é o que ela torna possível. A capacidade de proteger. A capacidade de prever. A capacidade de conectar pessoas e acelerar o progresso.',
    ],
    paragraphsEs: [
      'La tecnología se convirtió en mi lenguaje para resolver problemas. Me interesé profundamente en la ciberseguridad, la ingeniería de software, la inteligencia artificial, los sistemas de datos y la innovación científica — porque se encuentran en la intersección entre lógica, estrategia e impacto humano.',
      'Con el tiempo, me dediqué a construir sistemas, estudiar tecnologías emergentes y explorar cómo la IA y la ingeniería podrían aplicarse a la salud, la educación, la seguridad y el desarrollo humano a escala.',
      'Lo que más me atrae no es la tecnología en sí — es lo que la tecnología hace posible. La capacidad de proteger. La capacidad de predecir. La capacidad de conectar personas y acelerar el progreso.',
    ],
    paragraphsFr: [
      'La technologie est devenue mon langage pour résoudre les problèmes. Je me suis profondément intéressé à la cybersécurité, au génie logiciel, à l\'intelligence artificielle, aux systèmes de données et à l\'innovation scientifique — parce qu\'ils se situent à l\'intersection de la logique, de la stratégie et de l\'impact humain.',
      'Au fil du temps, je me suis consacré à construire des systèmes, à étudier les technologies émergentes et à explorer comment l\'IA et l\'ingénierie pourraient être appliquées à la santé, l\'éducation, la sécurité et le développement humain à grande échelle.',
      'Ce qui m\'attire le plus n\'est pas la technologie elle-même — c\'est ce qu\'elle rend possible. La capacité de protéger. La capacité de prédire. La capacité de connecter les gens et d\'accélérer le progrès.',
    ],
    paragraphsCa: [
      'La tecnologia es va convertir en el meu llenguatge per resoldre problemes. Em vaig interessar profundament en la ciberseguretat, l\'enginyeria de programari, la intel·ligència artificial, els sistemes de dades i la innovació científica — perquè es troben a la intersecció entre la lògica, l\'estratègia i l\'impacte humà.',
      'Amb el temps, em vaig dedicar a construir sistemes, estudiar tecnologies emergents i explorar com la IA i l\'enginyeria podrien aplicar-se a la salut, l\'educació, la seguretat i el desenvolupament humà a gran escala.',
      'El que més m\'atrau no és la tecnologia en si — és el que la tecnologia fa possible. La capacitat de protegir. La capacitat de predir. La capacitat de connectar persones i accelerar el progrés.',
    ],
  },
  {
    label: 'The Mission',
    labelPt: 'A Missão',
    labelEs: 'La Misión',
    labelFr: 'La Mission',
    labelCa: 'La Missió',
    paragraphs: [
      'As my vision evolved, so did my mission. I began creating projects focused on impact: cybersecurity platforms, AI systems, health-oriented technologies, educational ecosystems, and initiatives designed to scale knowledge and opportunity.',
      'The foundation of everything I build comes from a single idea: human potential should not be limited by geography, fear, lack of access, or lack of information.',
      'I want the things I create to outlive me — not simply as products, but as systems that genuinely improve lives.',
    ],
    paragraphsPt: [
      'Conforme minha visão evoluiu, minha missão também evoluiu. Comecei a criar projetos focados em impacto: plataformas de cibersegurança, sistemas de IA, tecnologias voltadas à saúde, ecossistemas educacionais e iniciativas desenhadas para escalar conhecimento e oportunidade.',
      'A base de tudo que construo vem de uma única ideia: o potencial humano não deveria ser limitado por geografia, medo, falta de acesso ou falta de informação.',
      'Quero que as coisas que eu crio sobrevivam a mim — não apenas como produtos, mas como sistemas que realmente melhoram vidas.',
    ],
    paragraphsEs: [
      'A medida que mi visión evolucionó, también lo hizo mi misión. Comencé a crear proyectos enfocados en el impacto: plataformas de ciberseguridad, sistemas de IA, tecnologías orientadas a la salud, ecosistemas educativos e iniciativas diseñadas para escalar el conocimiento y la oportunidad.',
      'La base de todo lo que construyo viene de una sola idea: el potencial humano no debería estar limitado por la geografía, el miedo, la falta de acceso o la falta de información.',
      'Quiero que las cosas que creo me sobrevivan — no simplemente como productos, sino como sistemas que genuinamente mejoran vidas.',
    ],
    paragraphsFr: [
      'À mesure que ma vision a évolué, ma mission a évolué aussi. J\'ai commencé à créer des projets axés sur l\'impact : plateformes de cybersécurité, systèmes d\'IA, technologies orientées vers la santé, écosystèmes éducatifs et initiatives conçues pour mettre à l\'échelle la connaissance et les opportunités.',
      'La base de tout ce que je construis vient d\'une seule idée : le potentiel humain ne devrait pas être limité par la géographie, la peur, le manque d\'accès ou le manque d\'information.',
      'Je veux que les choses que je crée me survivent — pas simplement comme des produits, mais comme des systèmes qui améliorent genuinement les vies.',
    ],
    paragraphsCa: [
      'A mesura que la meva visió va evolucionar, la meva missió també va evolucionar. Vaig començar a crear projectes centrats en l\'impacte: plataformes de ciberseguretat, sistemes d\'IA, tecnologies orientades a la salut, ecosistemes educatius i iniciatives dissenyades per escalar el coneixement i l\'oportunitat.',
      'La base de tot el que construeixo ve d\'una sola idea: el potencial humà no hauria d\'estar limitat per la geografia, la por, la manca d\'accés o la manca d\'informació.',
      'Vull que les coses que creo em sobrevivin — no simplement com a productes, sinó com a sistemes que milloren genuïnament les vides.',
    ],
  },
  {
    label: 'What I Believe',
    labelPt: 'No Que Eu Acredito',
    labelEs: 'En Lo Que Creo',
    labelFr: 'Ce En Quoi Je Crois',
    labelCa: 'El Que Crec',
    paragraphs: [
      'Today, I believe that meaningful progress happens when courage meets discipline. I believe technology should serve humanity, not distract it. I believe suffering can either break a person or sharpen their sense of purpose.',
      'My decisions are guided by a long-term vision: creating solutions capable of impacting millions — and eventually billions — of lives.',
      'I care deeply about innovation, truth, resilience, faith, science, and responsibility. I believe that intelligence without character is dangerous, and ambition without purpose is empty.',
    ],
    paragraphsPt: [
      'Hoje, acredito que o progresso significativo acontece quando coragem encontra disciplina. Acredito que a tecnologia deve servir a humanidade, não distraí-la. Acredito que o sofrimento pode tanto quebrar uma pessoa quanto afiar seu senso de propósito.',
      'Minhas decisões são guiadas por uma visão de longo prazo: criar soluções capazes de impactar milhões — e eventualmente bilhões — de vidas.',
      'Me importo profundamente com inovação, verdade, resiliência, fé, ciência e responsabilidade. Acredito que inteligência sem caráter é perigosa, e ambição sem propósito é vazia.',
    ],
    paragraphsEs: [
      'Hoy creo que el progreso significativo ocurre cuando el coraje se encuentra con la disciplina. Creo que la tecnología debe servir a la humanidad, no distraerla. Creo que el sufrimiento puede romper a una persona o agudizar su sentido del propósito.',
      'Mis decisiones están guiadas por una visión a largo plazo: crear soluciones capaces de impactar millones — y eventualmente miles de millones — de vidas.',
      'Me importan profundamente la innovación, la verdad, la resiliencia, la fe, la ciencia y la responsabilidad. Creo que la inteligencia sin carácter es peligrosa, y la ambición sin propósito está vacía.',
    ],
    paragraphsFr: [
      'Aujourd\'hui, je crois que le progrès significatif se produit quand le courage rencontre la discipline. Je crois que la technologie doit servir l\'humanité, pas la distraire. Je crois que la souffrance peut soit briser une personne, soit aiguiser son sens de l\'intention.',
      'Mes décisions sont guidées par une vision à long terme : créer des solutions capables d\'impacter des millions — et finalement des milliards — de vies.',
      'Je tiens profondément à l\'innovation, à la vérité, à la résilience, à la foi, à la science et à la responsabilité. Je crois que l\'intelligence sans caractère est dangereuse, et que l\'ambition sans intention est vide.',
    ],
    paragraphsCa: [
      'Avui crec que el progrés significatiu succeeix quan el coratge es troba amb la disciplina. Crec que la tecnologia ha de servir la humanitat, no distreure-la. Crec que el sofriment pot trencar una persona o afinar el seu sentit de la intenció.',
      'Les meves decisions estan guiades per una visió a llarg termini: crear solucions capaces d\'impactar milions — i eventualment milers de milions — de vides.',
      'Em preocupen profundament la innovació, la veritat, la resiliència, la fe, la ciència i la responsabilitat. Crec que la intel·ligència sense caràcter és perillosa, i l\'ambició sense intenció és buida.',
    ],
    closing: 'Will this create real impact for people?',
    closingPt: 'Isso vai criar impacto real para as pessoas?',
    closingEs: '¿Esto creará un impacto real para las personas?',
    closingFr: 'Est-ce que cela créera un impact réel pour les gens ?',
    closingCa: 'Això crearà un impacte real per a les persones?',
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

function getChapterLabel(chapter: typeof CHAPTERS[number], locale: string): string {
  if (locale === 'pt') return chapter.labelPt
  if (locale === 'es') return chapter.labelEs
  if (locale === 'fr') return (chapter as { labelFr?: string }).labelFr ?? chapter.label
  if (locale === 'ca') return (chapter as { labelCa?: string }).labelCa ?? chapter.label
  return chapter.label
}

function getChapterParagraphs(chapter: typeof CHAPTERS[number], locale: string): string[] {
  if (locale === 'pt') return chapter.paragraphsPt
  if (locale === 'es') return chapter.paragraphsEs
  if (locale === 'fr') return (chapter as { paragraphsFr?: string[] }).paragraphsFr ?? chapter.paragraphs
  if (locale === 'ca') return (chapter as { paragraphsCa?: string[] }).paragraphsCa ?? chapter.paragraphs
  return chapter.paragraphs
}

function getChapterClosing(chapter: typeof CHAPTERS[number], locale: string): string | undefined {
  if (!('closing' in chapter)) return undefined
  if (locale === 'pt') return (chapter as { closingPt?: string }).closingPt
  if (locale === 'es') return (chapter as { closingEs?: string }).closingEs
  if (locale === 'fr') return (chapter as { closingFr?: string }).closingFr
  if (locale === 'ca') return (chapter as { closingCa?: string }).closingCa
  return (chapter as { closing?: string }).closing
}

export default function AboutSection() {
  const locale = useLocale()
  const t = useTranslations('about')

  return (
    <section id="about">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-10 pb-20">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p className="section-label mb-5" {...fade()}>
            {t('sectionLabel')}
          </motion.p>

          <motion.h1
            className="font-bold leading-tight mb-3"
            style={{
              color: 'var(--white-100)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              letterSpacing: '-0.03em',
              fontFamily: 'var(--font-syne)',
            }}
            {...fade(0.05)}
          >
            Haniel Rolemberg
          </motion.h1>

          <motion.p
            className="text-xs uppercase tracking-widest mb-10"
            style={{ color: 'var(--accent)' }}
            {...fade(0.1)}
          >
            {t('tagline')}
          </motion.p>

          <motion.div
            style={{
              width: 'min(90vw, clamp(280px, 44vw, 560px))',
              height: 'clamp(160px, 28vw, 360px)',
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(10,10,15,0.10)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <Image
              src="/images/hanielrolemberg1.png"
              alt="Haniel Rolemberg"
              fill
              sizes="(max-width: 768px) 90vw, 560px"
              quality={85}
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </div>

        {/* Chapters */}
        <div className="max-w-2xl mx-auto">
          {CHAPTERS.map((chapter, ci) => {
            const closing = getChapterClosing(chapter, locale)
            return (
              <motion.div
                key={chapter.label}
                className="mb-14"
                {...fade(ci * 0.05)}
              >
                {/* Chapter label */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-[0.6rem] uppercase tracking-[0.22em] font-medium"
                    style={{ color: 'var(--accent)' }}
                  >
                    {getChapterLabel(chapter, locale)}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(10,10,15,0.07)' }} />
                </div>

                {/* Paragraphs */}
                <div className="space-y-5">
                  {getChapterParagraphs(chapter, locale).map((p, pi) => (
                    <p
                      key={pi}
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--white-65)' }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* Closing quote */}
                {closing && (
                  <blockquote
                    className="mt-10 pl-5 text-lg font-medium leading-snug"
                    style={{
                      borderLeft: '2px solid var(--accent)',
                      color: 'var(--white-85)',
                      fontFamily: 'var(--font-syne)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    &ldquo;{closing}&rdquo;
                  </blockquote>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
