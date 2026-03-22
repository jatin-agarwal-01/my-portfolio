import { motion } from 'framer-motion'

export default function About() {
  const principles = [
    'Clear structure over unnecessary complexity',
    'Interfaces that feel intentional, not improvised',
    'Consistent iteration through shipping and reflection',
  ]

  return (
    <section id="about" className="section-shell">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-900/8 via-transparent to-slate-900/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-subtitle">Profile</p>
            <motion.h2
              className="section-title max-w-3xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              Thoughtful execution, strong fundamentals, and steady momentum.
            </motion.h2>
          </div>
          <div className="section-line" />
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="editorial-frame rounded-[2rem] p-8 md:p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="section-copy mb-6">
              I am a computer science student with a practical interest in mobile and web development, especially where performance, usability, and clean architecture meet.
            </p>
            <p className="section-copy mb-6">
              My work is shaped by problem solving, object-oriented thinking, and a preference for software that is maintainable from the start rather than repaired later.
            </p>
            <p className="section-copy">
              I am actively growing through real projects, certifications, and disciplined iteration, aiming to bring polish and reliability to every build.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {principles.map((item, index) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">0{index + 1}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="premium-panel rounded-[1.8rem] p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Education</p>
              <h3 className="mt-5 font-display text-4xl text-slate-100">Bachelor of Technology</h3>
              <p className="mt-3 text-base text-slate-300">Computer Science</p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-amber-100">Currently pursuing</p>
            </div>

            <div className="premium-panel rounded-[1.8rem] p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Experience model</p>
              <h3 className="mt-5 font-display text-4xl text-slate-100">Independent builder</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Self-driven learning across Flutter, Java, frontend development, and cloud fundamentals with a focus on shipping real project work.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Flutter', 'Java', 'React', 'AWS'].map((item) => (
                  <span key={item} className="premium-pill">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
