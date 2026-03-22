import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmokeBackground from './components/SmokeBackground'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-90">
        <div className="absolute -top-24 left-[4%] h-80 w-80 rounded-full bg-amber-300/12 blur-3xl" />
        <div className="absolute top-[18%] right-[6%] h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/4 h-[28rem] w-[28rem] rounded-full bg-slate-300/8 blur-3xl" />
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),transparent_85%)] opacity-[0.12]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-30 mix-blend-soft-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(255,255,255,0.08)_100%)]" />
      </div>
      <SmokeBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
