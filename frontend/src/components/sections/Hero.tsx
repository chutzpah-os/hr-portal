'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTA from '@/components/ui/CTA'


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const titleVariant = {
  hidden: { opacity: 0, y: '220%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeInOut' } },
}

const subtitleVariant = {
  hidden: { opacity: 0, y: '220%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.5, ease: 'easeInOut' } },
}

const buttonVariant = {
  hidden: { opacity: 0, y: '300%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 1, ease: 'easeInOut' } },
}

const ABOUT_PARAGRAPHS = [
  "I'm a Problem Solver — someone who turns challenges into opportunities through technology, strategy, and purpose.",
  "Over the past years, I've been working across software development, data systems, and cybersecurity, building solutions that go beyond code — solutions that protect, empower, and transform. I believe every problem is an invitation to create something meaningful.",
  "My mission is clear: to impact 1 billion lives by 2035 (1b2035) through innovation, education, and intelligent problem-solving. That's the driving force behind the Problem Solver Foundation, an initiative that equips people to face complexity, think critically, and act with purpose.",
]

export default function Hero() {

  return (
    <section
      id="about"
      className="section-fullscreen"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 hero-overlay"
        style={{ zIndex: 1 }}
      />

      {/* Profile image — right column */}
      <div
        className="absolute inset-y-0 right-0 hidden md:block"
        style={{ width: '42%', zIndex: 2 }}
      >
        {/* Left-to-right fade so image blends into background */}
        <div
          className="absolute inset-y-0 left-0 w-48"
          style={{
            background: 'linear-gradient(to right, rgb(0,0,0), transparent)',
            zIndex: 2,
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: 'linear-gradient(to top, rgb(0,0,0), transparent)',
            zIndex: 2,
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{
            background: 'linear-gradient(to bottom, rgb(0,0,0), transparent)',
            zIndex: 2,
          }}
        />
        {/* Dark tint over image */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0,0,0,0.35)', zIndex: 1 }}
        />
        <Image
          src="/images/profile.jpg"
          alt="Haniel Rolemberg"
          fill
          className="object-cover object-top"
          priority
          sizes="42vw"
        />
      </div>

      {/* Content — positioned left-middle */}
      <motion.div
        className="inner-left-middle section-content"
        style={{ maxWidth: '640px' }}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={titleVariant}
            style={{
              color: 'var(--white-100)',
              fontSize: 'clamp(2.25rem, 6vw, 5rem)',
              lineHeight: '95%',
            }}
          >
            Haniel Rolemberg
          </motion.h1>
        </div>

        {/* Title */}
        <div className="overflow-hidden mb-8">
          <motion.p
            variants={subtitleVariant}
            className="text-xl md:text-2xl uppercase tracking-widest"
            style={{ color: 'var(--white-60)' }}
          >
            Problem Solver
          </motion.p>
        </div>

        {/* About paragraphs */}
        <div className="overflow-hidden mb-10 max-w-lg">
          <motion.div
            variants={subtitleVariant}
            className="space-y-4"
          >
            {ABOUT_PARAGRAPHS.map((text, i) => (
              <p
                key={i}
                className="text-sm md:text-base leading-relaxed"
                style={{ color: 'var(--white-70)' }}
              >
                {text}
              </p>
            ))}
          </motion.div>
        </div>

        {/* CTAs */}
        <div className="overflow-hidden">
          <motion.div variants={buttonVariant} className="flex flex-wrap gap-4">
            <CTA href="/portfolio#projects">View Projects</CTA>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div
        className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 no-print"
        style={{ zIndex: 3, color: 'var(--white-35)' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12" style={{ backgroundColor: 'var(--white-35)' }} />
      </div>
    </section>
  )
}
