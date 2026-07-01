'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

const CHAPTERS = [
  {
    label: 'Origins',
    labelPt: 'Origens',
    labelEs: 'Orígenes',
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
  },
  {
    label: 'The Turning Point',
    labelPt: 'O Ponto de Virada',
    labelEs: 'El Punto de Inflexión',
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
  },
  {
    label: 'The Journey',
    labelPt: 'A Jornada',
    labelEs: 'El Camino',
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
  },
  {
    label: 'The Craft',
    labelPt: 'O Ofício',
    labelEs: 'El Oficio',
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
  },
  {
    label: 'The Mission',
    labelPt: 'A Missão',
    labelEs: 'La Misión',
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
  },
  {
    label: 'What I Believe',
    labelPt: 'No Que Eu Acredito',
    labelEs: 'En Lo Que Creo',
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
    closing: 'Will this create real impact for people?',
    closingPt: 'Isso vai criar impacto real para as pessoas?',
    closingEs: '¿Esto creará un impacto real para las personas?',
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
  return chapter.label
}

function getChapterParagraphs(chapter: typeof CHAPTERS[number], locale: string): string[] {
  if (locale === 'pt') return chapter.paragraphsPt
  if (locale === 'es') return chapter.paragraphsEs
  return chapter.paragraphs
}

function getChapterClosing(chapter: typeof CHAPTERS[number], locale: string): string | undefined {
  if (!('closing' in chapter)) return undefined
  if (locale === 'pt') return (chapter as { closingPt?: string }).closingPt
  if (locale === 'es') return (chapter as { closingEs?: string }).closingEs
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
