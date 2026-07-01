'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

const CHAPTERS = [
  {
    label: 'Origins',
    labelPt: 'Origens',
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
  },
  {
    label: 'The Turning Point',
    labelPt: 'O Ponto de Virada',
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
  },
  {
    label: 'The Journey',
    labelPt: 'A Jornada',
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
  },
  {
    label: 'The Craft',
    labelPt: 'O Ofício',
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
  },
  {
    label: 'The Mission',
    labelPt: 'A Missão',
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
  },
  {
    label: 'What I Believe',
    labelPt: 'No Que Eu Acredito',
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
    closing: 'Will this create real impact for people?',
    closingPt: 'Isso vai criar impacto real para as pessoas?',
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function AboutSection() {
  const locale = useLocale()
  const t = useTranslations('about')
  const isPt = locale === 'pt'

  return (
    <section id="about">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-10 pb-20">

        {/* Header — centrado */}
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

          {/* Foto centrada */}
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
          {CHAPTERS.map((chapter, ci) => (
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
                  {isPt ? chapter.labelPt : chapter.label}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(10,10,15,0.07)' }} />
              </div>

              {/* Paragraphs */}
              <div className="space-y-5">
                {(isPt ? chapter.paragraphsPt : chapter.paragraphs).map((p, pi) => (
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
              {'closing' in chapter && chapter.closing && (
                <blockquote
                  className="mt-10 pl-5 text-lg font-medium leading-snug"
                  style={{
                    borderLeft: '2px solid var(--accent)',
                    color: 'var(--white-85)',
                    fontFamily: 'var(--font-syne)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  &ldquo;{isPt ? chapter.closingPt : chapter.closing}&rdquo;
                </blockquote>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
