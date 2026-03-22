import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const certificates = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2026',
    link: '/certi/AWS Certified Cloud Practitioner certificate.pdf',
    category: 'Cloud',
  },
  {
    name: 'DATAVERSE Participation Certificate',
    issuer: 'Dataverse Hackathon',
    date: '',
    link: '/certi/DATAVERSE.pdf',
    category: 'Hackathon',
  },
  {
    name: 'ECMAScript ES6 JavaScript Tutorials',
    issuer: 'Online',
    date: '',
    link: '/certi/ECMAScript ES6 JavaScript Tutorials.pdf',
    category: 'JavaScript',
  },
  {
    name: 'ER Modeling Entity Relationship Modeling',
    issuer: 'Online',
    date: '',
    link: '/certi/Introduction to Entity Relationship ER Modeling.pdf',
    category: 'Data Modeling',
  },
  {
    name: 'NoSQL Databases Introduction to NoSQL',
    issuer: 'Online',
    date: '',
    link: '/certi/Introduction to NoSQL databases.pdf',
    category: 'Databases',
  },
  {
    name: 'RED HAT Certificate',
    issuer: 'Red Hat',
    date: '',
    link: '/certi/RED HAT.pdf',
    category: 'Systems',
  },
]

export default function Certificates() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section id="certificates" className="section-shell">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-slate-900/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-subtitle">Validation and milestones</p>
            <motion.h2
              className="section-title max-w-3xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              Credentials that back up the trajectory.
            </motion.h2>
          </div>
          <p className="max-w-md text-sm uppercase tracking-[0.2em] text-slate-500">
            Cloud, systems, JavaScript, data foundations, and hackathon participation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((c, index) => (
            <motion.div
              key={c.name}
              className="premium-panel relative overflow-hidden rounded-[1.8rem] p-7 transition-all duration-300 hover:border-amber-200/35"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute right-5 top-5 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                0{index + 1}
              </div>
              <div className="mb-8 inline-flex rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-amber-100">
                {c.category}
              </div>
              <h3 className="max-w-[14rem] font-display text-3xl leading-tight text-slate-100">{c.name}</h3>
              <div className="mt-5 section-line" />
              <div className="mt-6 space-y-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                <p>{c.issuer}</p>
                <p>{c.date || 'In portfolio archive'}</p>
              </div>

              {c.link && (
                <motion.button
                  type="button"
                  onClick={() => {
                    setActive(c)
                    setOpen(true)
                  }}
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-200 transition-colors hover:text-amber-100"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Open certificate
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      >
        {active && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="premium-panel relative max-h-[90vh] w-[92%] max-w-4xl overflow-auto rounded-[2rem] border border-slate-200/15 p-6 text-white shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-2xl text-slate-400 hover:text-amber-100 transition-colors"
            >
              ✕
            </motion.button>

            <div className="mb-4">
              <div className="mb-4 inline-flex rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-amber-100">
                {active.category}
              </div>
              <h3 className="mb-2 font-display text-4xl text-slate-100">{active.name}</h3>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Issued by {active.issuer}</p>
              {active.date && <p className="text-sm text-slate-500">{active.date}</p>}
            </div>

            {active.link && active.link !== '#' ? (
              /(\.png|\.jpg|\.jpeg|\.webp|\.gif)$/i.test(active.link) ? (
                <img src={active.link} alt={active.name} className="w-full h-auto rounded-lg" />
              ) : (
                <iframe src={active.link} title={active.name} className="w-full h-[60vh] border border-slate-200/15 rounded-lg" />
              )
            ) : (
              <div className="p-4 bg-slate-900/50 border border-slate-200/15 rounded-lg">
                <p className="text-slate-300">This certificate entry does not include an external link.</p>
                <p className="mt-2 text-slate-400">Name: {active.name}</p>
                <p className="text-slate-400">Issuer: {active.issuer}</p>
                {active.date && <p className="text-slate-400">Date: {active.date}</p>}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
