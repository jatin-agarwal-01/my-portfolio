import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Typewriter from './Typewriter'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // determine whether we're on a narrow viewport; we only want
  // to apply the manual line breaks for phones/tablets, not desktop
  const [isSmall, setIsSmall] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    const update = (e) => setIsSmall(e.matches)
    update(mql)
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  // base text array, with breaks inserted conditionally based on size
  const typeTexts = isSmall
    ? [
        'Building polished mobile\nand web products',
        'Focused on clean systems\nand elegant interfaces',
        'Learning fast, shipping with\ncare, improving constantly',
      ]
    : [
        'Building polished mobile and web products',
        'Focused on clean systems and elegant interfaces',
        'Learning fast, shipping with care, improving constantly',
      ]

  const metrics = [
    { value: '06', label: 'Certifications and recognitions' },
    { value: '03', label: 'Core tracks across web, mobile, cloud' },
    { value: '24/7', label: 'Curiosity for better execution' },
  ]

  return (
    <section id="home" className="section-shell flex items-center pt-28 md:min-h-screen md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-6">
        <div className="relative z-10 text-left">
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Software Developer Portfolio
        </motion.p>
        <motion.h1
          className="section-title mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Building software that feels deliberate, modern, and dependable.
        </motion.h1>
        <motion.p
          className="mb-2 text-lg text-slate-200 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Jatin Agarwal
        </motion.p>
        <motion.p
          className="mb-6 text-lg text-slate-300 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Computer Science student, AWS certified learner, Flutter and React developer.
        </motion.p>
        <motion.p
          className="section-copy mb-8 min-h-[5rem] max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Typewriter
            texts={typeTexts}
            typingSpeed={55}
            deletingSpeed={75}
            pauseDuration={2000}
          />
        </motion.p>
        <motion.div
          className="mb-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72 }}
        >
          {['React', 'Flutter', 'AWS', 'Problem Solving'].map((item) => (
            <span key={item} className="premium-pill text-[11px] uppercase tracking-[0.2em]">
              {item}
            </span>
          ))}
        </motion.div>
        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row">
          <motion.button
            onClick={() => scrollTo('projects')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="premium-button"
          >
            View selected work
          </motion.button>
          <motion.button
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="premium-button-ghost"
          >
            Start a conversation
          </motion.button>
        </div>
        <motion.div
          className="mt-12 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="stat-value text-4xl md:text-5xl">{metric.value}</div>
              <p className="mt-3 max-w-[14rem] text-sm uppercase tracking-[0.18em] text-slate-400">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className="editorial-frame mx-auto max-w-md rounded-[2rem] p-5 md:ml-auto md:mr-0 md:max-w-lg">
          <div className="grid gap-5">
            <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>Available for internships</span>
              <span className="flex items-center gap-2 text-amber-100">
                <span className="h-2 w-2 rounded-full bg-amber-200" />
                2026
              </span>
            </div>
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
              <img
                src="/profile.jpg"
                alt="Jatin Agarwal"
                className="h-auto w-full rounded-[1.25rem] object-cover"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/55 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Current focus</p>
                <p className="mt-4 font-display text-3xl text-slate-100">Product-minded engineering</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Building better frontend experiences, improving code clarity, and growing across cloud and mobile.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-amber-200/15 bg-amber-200/[0.05] p-5 text-right">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Base</p>
                <p className="mt-4 font-display text-3xl text-amber-100">India</p>
                <p className="mt-3 text-sm text-slate-400">Remote friendly</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
