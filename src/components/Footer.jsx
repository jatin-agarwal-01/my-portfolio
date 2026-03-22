import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'GH',
      url: 'https://github.com/jatin-agarwal-01',
    },
    {
      name: 'LinkedIn',
      icon: 'IN',
      url: 'https://linkedin.com/in/jatinagarwal',
    },
    {
      name: 'Portfolio Email',
      icon: 'EM',
      url: 'mailto:jatinagarwal825@gmail.com',
    },
  ]

  return (
    <footer className="border-t border-slate-200/10 bg-slate-950/30 py-12 text-slate-400 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Portfolio</p>
            <h3 className="mt-4 font-display text-4xl text-slate-100">Jatin Agarwal</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
              Software developer focused on clean builds, premium presentation, and steady technical growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Sections</h4>
            <ul className="space-y-3 text-sm uppercase tracking-[0.16em]">
              {['Home', 'About', 'Skills', 'Certificates', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-amber-200 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/15 bg-slate-900/70 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-amber-200/45 hover:bg-slate-900"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-200/10 my-8" />

        <motion.div
          className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>© 2026 Jatin Agarwal. All rights reserved.</p>
          <p>Crafted with React, Tailwind CSS, and a sharper visual system.</p>
        </motion.div>
      </div>
    </footer>
  )
}
