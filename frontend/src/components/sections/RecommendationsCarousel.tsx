'use client'

import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { getUiStrings } from '@/i18n/uiStrings'

interface RecTranslations {
  pt?: string
  es?: string
  fr?: string
  ca?: string
}

const RECS: {
  id: number
  name: string
  title: string
  company: string
  photo?: string
  text: string
  translations?: RecTranslations
}[] = [
  {
    id: 1,
    name: 'Saulo Nascimento',
    title: 'Mobile Developer',
    company: 'BTG Pactual · KMP',
    photo: '/images/saulo.jpeg',
    text: "Haniel's a super determined person who always aims for the top. I had the pleasure of closely following the development of his projects, and his leadership skills and technical quality are definitely noticeable. He's an excellent professional!",
    translations: {
      pt: 'Haniel é uma pessoa extremamente determinada que sempre mira no topo. Tive o prazer de acompanhar de perto o desenvolvimento de seus projetos, e suas habilidades de liderança e qualidade técnica são definitivamente perceptíveis. Ele é um excelente profissional!',
      es: 'Haniel es una persona sumamente determinada que siempre apunta a lo más alto. Tuve el placer de seguir de cerca el desarrollo de sus proyectos, y sus habilidades de liderazgo y su calidad técnica son definitivamente notables. ¡Es un excelente profesional!',
    },
  },
  {
    id: 2,
    name: 'Micaele Carvalho',
    title: 'Software Engineer Frontend',
    company: 'Caju',
    photo: '/images/mica.jpeg',
    text: "I met Haniel through the Google Developers Aracaju community when I became a volunteer. His main skills include communication, leadership, and initiative. Throughout the time we've worked together, I've had the opportunity to closely observe how Hani is a person who excels at teamwork, contributing to the growth of his peers and bringing out the best in people by aligning their skills with the needs of the community. A special thank you for everything I've learned from you and for inspiring so many people to make a difference with the knowledge they've acquired. You truly make an impact wherever you go.",
    translations: {
      pt: 'Conheci Haniel através da comunidade Google Developers Aracaju quando me tornei voluntária. Suas principais habilidades incluem comunicação, liderança e iniciativa. Durante o tempo que trabalhamos juntos, tive a oportunidade de observar de perto como Hani é uma pessoa que se destaca no trabalho em equipe, contribuindo para o crescimento de seus colegas e trazendo o melhor das pessoas ao alinhar suas habilidades com as necessidades da comunidade. Um agradecimento especial por tudo que aprendi com você e por inspirar tantas pessoas a fazer a diferença com o conhecimento que adquiriram. Você verdadeiramente causa impacto onde quer que vá.',
      es: 'Conocí a Haniel a través de la comunidad Google Developers Aracaju cuando me convertí en voluntaria. Sus principales habilidades incluyen la comunicación, el liderazgo y la iniciativa. Durante el tiempo que hemos trabajado juntos, he tenido la oportunidad de observar de cerca cómo Hani es una persona que sobresale en el trabajo en equipo, contribuyendo al crecimiento de sus colegas y sacando lo mejor de las personas al alinear sus habilidades con las necesidades de la comunidad. Un agradecimiento especial por todo lo que he aprendido de ti y por inspirar a tantas personas a marcar la diferencia con el conocimiento que han adquirido. Verdaderamente generas un impacto dondequiera que vas.',
    },
  },
  {
    id: 3,
    name: 'Marcus Lima',
    title: 'Software Development Analyst',
    company: 'Banese',
    photo: '/images/marc.jpeg',
    text: "I had the opportunity to work with Haniel at GDG Aracaju, and I can say he is one of the most committed and inspiring people I've ever collaborated with. He stands out for his leadership, initiative, and exceptional communication skills. Whenever a challenge arose, he was at the forefront, finding the best solutions to ensure GDG events were always a success.",
    translations: {
      pt: 'Tive a oportunidade de trabalhar com Haniel no GDG Aracaju, e posso dizer que ele é uma das pessoas mais comprometidas e inspiradoras com quem já colaborei. Ele se destaca por sua liderança, iniciativa e habilidades de comunicação excepcionais. Sempre que um desafio surgia, ele estava na frente, encontrando as melhores soluções para garantir que os eventos do GDG fossem sempre um sucesso.',
      es: 'Tuve la oportunidad de trabajar con Haniel en GDG Aracaju, y puedo decir que es una de las personas más comprometidas e inspiradoras con las que he colaborado. Se distingue por su liderazgo, iniciativa y excepcionales habilidades de comunicación. Cada vez que surgía un desafío, estaba al frente, encontrando las mejores soluciones para garantizar que los eventos de GDG siempre fueran un éxito.',
    },
  },
  {
    id: 4,
    name: 'Irandi Silva',
    title: 'Commercial Director',
    company: 'CDL',
    photo: '/images/irandi-silva.jpg',
    text: "I had the opportunity to work with Haniel Rolemberg on several projects and can say with confidence that he is exceptional — both in technical skills and in dealing with people. Haniel played a crucial role in managing innovative projects, always keeping focus on results and ensuring teams were aligned and motivated. He has a unique ability to identify each project's strengths and maximize outcomes. I strongly recommend Haniel for any challenge requiring leadership, innovation, and technical excellence.",
    translations: {
      pt: 'Tive a oportunidade de trabalhar com Haniel Rolemberg em vários projetos e posso dizer com confiança que ele é excepcional — tanto em habilidades técnicas quanto no trato com as pessoas. Haniel desempenhou um papel crucial na gestão de projetos inovadores, sempre mantendo o foco nos resultados e garantindo que as equipes estivessem alinhadas e motivadas. Ele tem uma capacidade única de identificar os pontos fortes de cada projeto e maximizar os resultados. Recomendo fortemente Haniel para qualquer desafio que exija liderança, inovação e excelência técnica.',
      es: 'Tuve la oportunidad de trabajar con Haniel Rolemberg en varios proyectos y puedo decir con confianza que es excepcional — tanto en habilidades técnicas como en el trato con las personas. Haniel desempeñó un papel crucial en la gestión de proyectos innovadores, siempre manteniendo el enfoque en los resultados y asegurando que los equipos estuvieran alineados y motivados. Tiene una capacidad única para identificar los puntos fuertes de cada proyecto y maximizar los resultados. Recomiendo ampliamente a Haniel para cualquier desafío que requiera liderazgo, innovación y excelencia técnica.',
    },
  },
]

const LONG_THRESHOLD = 220

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 72 : -72, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -72 : 72, opacity: 0, scale: 0.98 }),
}

function NavArrow({
  onClick,
  dir,
  label,
}: {
  onClick: () => void
  dir: 'prev' | 'next'
  label: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-9 h-9 rounded-full flex items-center justify-center"
      style={{
        border: '1px solid rgba(10,10,15,0.12)',
        backgroundColor: 'transparent',
        color: 'var(--white-50)',
        transition: 'border-color 0.2s, color 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(10,10,15,0.32)'
        e.currentTarget.style.color = 'var(--white-90)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(10,10,15,0.12)'
        e.currentTarget.style.color = 'var(--white-50)'
      }}
    >
      {dir === 'prev' ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

export default function RecommendationsCarousel() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const touchStartX = useRef<number>(0)
  const locale = useLocale()
  const ui = getUiStrings(locale)

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir)
    setActiveIdx(idx)
    setExpanded(false)
  }, [])

  const prev = useCallback(() => {
    goTo((activeIdx - 1 + RECS.length) % RECS.length, -1)
  }, [activeIdx, goTo])

  const next = useCallback(() => {
    goTo((activeIdx + 1) % RECS.length, 1)
  }, [activeIdx, goTo])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const rec = RECS[activeIdx]
  const displayText = rec.translations?.[locale as keyof RecTranslations] ?? rec.text
  const isLong = displayText.length > LONG_THRESHOLD

  const LinkedInCTA = ({ className = '' }: { className?: string }) => (
    <a
      href="https://www.linkedin.com/in/hanielrolemberg/"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-60 ${className}`}
      style={{
        fontSize: '0.6rem',
        textTransform: 'uppercase',
        letterSpacing: '0.18em',
        color: 'var(--white-40)',
        textDecoration: 'none',
      }}
    >
      {ui.seeMoreLinkedIn}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )

  return (
    <SectionWrapper id="recommendations" fullscreen={false}>
      <div className="max-w-content mx-auto px-6 md:px-10">

        {/* Section label */}
        <motion.p
          className="section-label mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {ui.recommendations}
        </motion.p>

        {/* Carousel touch area */}
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

          {/* Animated card */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={rec.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="rounded-2xl px-7 py-8 md:px-10 md:py-10"
                style={{
                  border: '1px solid rgba(10,10,15,0.07)',
                  backgroundColor: 'rgba(252,252,255,0.8)',
                  boxShadow: '0 2px 24px rgba(10,10,15,0.04)',
                }}
              >
                {/* Decorative quote mark */}
                <div
                  aria-hidden
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                    lineHeight: 0.75,
                    color: 'var(--accent)',
                    opacity: 0.55,
                    marginBottom: '0.75rem',
                    userSelect: 'none',
                  }}
                >
                  &ldquo;
                </div>

                {/* Quote text */}
                <div className="mb-7">
                  <p
                    className="text-sm md:text-base leading-[1.9]"
                    style={{
                      color: 'var(--white-68, rgba(10,10,15,0.68))',
                      maxWidth: '70ch',
                      ...(isLong && !expanded
                        ? {
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical' as const,
                            WebkitLineClamp: 5,
                            overflow: 'hidden',
                          }
                        : {}),
                    }}
                  >
                    {displayText}
                  </p>

                  {isLong && !expanded && (
                    <button
                      onClick={() => setExpanded(true)}
                      className="mt-2 transition-opacity duration-200 hover:opacity-70"
                      style={{
                        fontSize: '0.65rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.16em',
                        color: 'var(--accent)',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                      }}
                    >
                      {ui.readMore}
                    </button>
                  )}
                </div>

                {/* Divider + person row */}
                <div
                  className="flex items-center gap-4 pt-5"
                  style={{ borderTop: '1px solid rgba(10,10,15,0.06)' }}
                >
                  {/* Avatar */}
                  <div
                    className="relative rounded-full shrink-0 overflow-hidden"
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: 'rgba(212,119,90,0.09)',
                      border: '1.5px solid rgba(212,119,90,0.22)',
                      flexShrink: 0,
                    }}
                  >
                    {rec.photo ? (
                      <Image
                        src={rec.photo}
                        alt={rec.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                          }}
                        >
                          {rec.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name + role */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold leading-tight truncate"
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--white-90)',
                        letterSpacing: '-0.01em',
                        marginBottom: '2px',
                      }}
                    >
                      {rec.name}
                    </p>
                    <p
                      className="leading-tight truncate"
                      style={{
                        fontSize: '0.62rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        color: 'var(--white-38)',
                      }}
                    >
                      {rec.title} · {rec.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation bar */}
          <div className="flex items-center gap-2.5 mt-5">
            {/* Arrows */}
            <NavArrow onClick={prev} dir="prev" label={ui.prevRecommendation} />
            <NavArrow onClick={next} dir="next" label={ui.nextRecommendation} />

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 ml-1">
              {RECS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > activeIdx ? 1 : -1)}
                  aria-label={ui.goToRecommendation(i + 1)}
                  style={{
                    height: '5px',
                    width: i === activeIdx ? '20px' : '5px',
                    borderRadius: '3px',
                    backgroundColor: i === activeIdx ? 'var(--accent)' : 'rgba(10,10,15,0.16)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              ))}
            </div>

            <div className="flex-1" />

            {/* LinkedIn — desktop */}
            <LinkedInCTA className="hidden sm:flex" />
          </div>

          {/* LinkedIn — mobile */}
          <div className="mt-4 sm:hidden">
            <LinkedInCTA />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
