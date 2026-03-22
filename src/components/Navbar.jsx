import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = ['Home', 'About', 'Skills', 'Certificates', 'Projects', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'pt-3'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`flex cursor-pointer items-center gap-4 rounded-full border px-3 py-2 transition-all duration-300 ${
            isScrolled
              ? 'border-white/10 bg-slate-950/70 shadow-2xl shadow-black/25 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
          onClick={() => scrollToSection('home')}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-br from-amber-200/20 via-transparent to-sky-200/20 font-display text-xl font-semibold text-slate-50">
            JA
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-2xl font-semibold tracking-[0.16em] text-slate-100">Jatin Agarwal</span>
            <span className="block text-[10px] uppercase tracking-[0.34em] text-slate-400">Software Developer</span>
          </span>
        </motion.div>

        <div className={`hidden items-center gap-2 rounded-full border px-3 py-3 md:flex ${
          isScrolled
            ? 'border-white/10 bg-slate-950/70 shadow-2xl shadow-black/25 backdrop-blur-xl'
            : 'border-white/5 bg-slate-950/30 backdrop-blur-md'
        }`}>
          {navItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -1 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="nav-pill"
            >
              {item}
            </motion.button>
          ))}
        </div>

        <motion.button
          className={`flex cursor-pointer flex-col space-y-1.5 rounded-full border p-3 md:hidden ${
            isScrolled
              ? 'border-white/10 bg-slate-950/70 shadow-xl shadow-black/25 backdrop-blur-xl'
              : 'border-white/10 bg-slate-950/35 backdrop-blur-md'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-6 h-0.5 bg-amber-200"
              animate={
                isOpen
                  ? {
                      rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                      y: i === 0 ? 8 : i === 2 ? -8 : 0,
                      opacity: i === 1 ? 0 : 1,
                    }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="mx-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/90 backdrop-blur-xl md:hidden"
      >
        <div className="space-y-2 px-4 py-4">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full rounded-2xl border border-white/5 px-4 py-3 text-left text-sm font-semibold text-slate-300 transition-colors hover:border-amber-200/25 hover:text-amber-200"
              whileHover={{ x: 4 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
