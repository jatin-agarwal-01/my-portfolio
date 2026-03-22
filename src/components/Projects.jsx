import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Enhanced Calculator',
    description:
      'A feature-rich calculator application demonstrating strong OOP principles with advanced mathematical operations and comprehensive error handling.',
    tech: ['Java', 'OOP', 'Design Patterns'],
    github: 'https://github.com/jatin-agarwal-01/EnhancedCalculator',
    label: 'Java application',
  },
  {
    title: 'Event Management Website',
    description:
      'Frontend UI for a campus events platform — polished responsive pages for browsing events, registering attendees, and viewing details.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/jatin-agarwal-01/Campus-Event-Management-System',
    label: 'Frontend experience',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-sky-900/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <p className="section-subtitle">Selected Work</p>
        <motion.h2
          className="section-title mb-5 max-w-3xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Work that shows range, discipline, and a bias toward finish quality.
        </motion.h2>
        <p className="section-copy mb-12 max-w-2xl">
          These projects reflect practical frontend thinking, structured application design, and a consistent focus on making software usable and visually coherent.
        </p>

        <div className="grid gap-8 xl:grid-cols-2">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              className="editorial-frame overflow-hidden rounded-[2rem] transition-all duration-300 hover:border-amber-200/35"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className="border-b border-slate-200/10 p-6 md:p-8">
                <div className="mb-10 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{p.label}</p>
                    <h3 className="mt-5 font-display text-4xl text-slate-100 md:text-5xl">{p.title}</h3>
                  </div>
                  <div className="hidden rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-amber-100 md:block">
                    0{index + 1}
                  </div>
                </div>
                <div className="h-40 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(208,176,111,0.14),transparent_34%,rgba(140,167,194,0.18)_100%)]" />
              </div>

              <div className="p-6 md:p-8">
                <p className="section-copy mb-8 max-w-2xl">{p.description}</p>

                <div className="mb-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <motion.span
                        key={t}
                        className="premium-pill"
                        whileHover={{ scale: 1.05 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200 transition-colors hover:text-amber-100"
                  whileHover={{ x: 4 }}
                >
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
