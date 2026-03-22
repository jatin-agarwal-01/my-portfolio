import { motion } from 'framer-motion'

export default function Skills() {
  const skillGroups = [
    {
      title: 'Engineering Foundations',
      items: ['C', 'Java', 'Python', 'Object-Oriented Programming'],
      tone: 'from-amber-200/15 to-transparent',
    },
    {
      title: 'Frontend Systems',
      items: ['HTML', 'CSS', 'JavaScript', 'React'],
      tone: 'from-white/10 to-transparent',
    },
    {
      title: 'Mobile Development',
      items: ['Flutter', 'Dart'],
      tone: 'from-sky-200/15 to-transparent',
    },
    {
      title: 'Platforms & Delivery',
      items: ['Git', 'Firebase', 'AWS'],
      tone: 'from-slate-200/10 to-transparent',
    },
  ]

  return (
    <section id="skills" className="section-shell">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-800/10 via-transparent to-amber-900/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <p className="section-subtitle">Capability map</p>
        <motion.h2
          className="section-title mb-5 max-w-3xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Depth across the tools that turn ideas into finished products.
        </motion.h2>
        <p className="section-copy mb-12 max-w-2xl">
          I work across application logic, interface development, mobile workflows, and cloud-aware tooling with an emphasis on clarity and reliable execution.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="premium-panel rounded-[1.8rem] p-8 transition-all duration-300 hover:border-amber-200/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className={`mb-8 rounded-[1.4rem] border border-white/8 bg-gradient-to-br ${group.tone} p-5`}>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Discipline</p>
                <h3 className="mt-5 font-display text-3xl text-slate-100">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center text-sm uppercase tracking-[0.18em] text-slate-300">
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-amber-200/80" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="editorial-frame grid gap-6 rounded-[2rem] p-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ y: -4 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Complementary strength</p>
            <h3 className="mt-4 font-display text-4xl text-amber-100 md:text-5xl">Problem solving and DSA</h3>
          </div>
          <p className="section-copy max-w-2xl">
            Strong interest in competitive programming, data structures, and algorithms helps me reason about efficiency, edge cases, and resilient implementation choices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
