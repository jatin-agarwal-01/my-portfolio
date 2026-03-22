import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const RECIPIENT_EMAIL = 'jatinagarwal825@gmail.com'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focusedField, setFocusedField] = useState(null)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: 'error',
        message: 'Please fill in name, email, and message before sending.',
      })
      return
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Contact form is not configured. Add EmailJS keys in .env file.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      const TEMPLATE_PARAMS = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        to_email: RECIPIENT_EMAIL,
      }

      await emailjs.send(
        serviceId,
        templateId,
        TEMPLATE_PARAMS,
        publicKey
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS send failed:', error)
      const errorDetails =
        typeof error?.text === 'string' && error.text.trim().length > 0
          ? error.text.trim()
          : typeof error?.message === 'string' && error.message.trim().length > 0
            ? error.message.trim()
            : ''

      setStatus({
        type: 'error',
        message: errorDetails
          ? `Failed to send message: ${errorDetails}`
          : 'Failed to send message. Please try again in a moment.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-amber-900/10" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 md:px-6 xl:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="editorial-frame rounded-[2rem] p-8 md:p-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Open to opportunities</p>
          <motion.h2 className="section-title mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
            Let’s build something with substance.
          </motion.h2>
          <p className="section-copy max-w-xl">
            If you have a project, internship, collaboration, or just want to connect, send a note. I am especially interested in work that values thoughtful execution and growth.
          </p>

          <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Email</p>
              <a href="mailto:jatinagarwal825@gmail.com" className="mt-2 inline-block font-display text-3xl text-amber-100 transition-colors hover:text-amber-50">
                {RECIPIENT_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Typical reply</p>
              <p className="mt-2 text-slate-300">Within a reasonable time, with clear follow-up.</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="premium-panel space-y-6 rounded-[2rem] p-6 md:p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300" htmlFor="name">
                Full Name
              </label>
              <motion.input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`w-full rounded-2xl border bg-slate-950/75 px-4 py-4 text-white placeholder-slate-500 transition-all duration-300 focus:outline-none ${
                  focusedField === 'name' ? 'border-amber-200/60 shadow-sm' : 'border-slate-200/15 hover:border-slate-300/30'
                }`}
                placeholder="Your name"
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300" htmlFor="email">
                Email Address
              </label>
              <motion.input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full rounded-2xl border bg-slate-950/75 px-4 py-4 text-white placeholder-slate-500 transition-all duration-300 focus:outline-none ${
                  focusedField === 'email' ? 'border-slate-200/60 shadow-sm' : 'border-slate-200/15 hover:border-slate-300/30'
                }`}
                placeholder="your.email@example.com"
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300" htmlFor="message">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className={`w-full resize-none rounded-[1.6rem] border bg-slate-950/75 px-4 py-4 text-white placeholder-slate-500 transition-all duration-300 focus:outline-none ${
                focusedField === 'message' ? 'border-amber-100/60 shadow-sm' : 'border-slate-200/15 hover:border-slate-300/30'
              }`}
              placeholder="Tell me about your project, role, or idea..."
              required
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSending}
            className="premium-button w-full"
            whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(212, 177, 106, 0.45)' }}
            whileTap={{ scale: 0.98 }}
          >
            {isSending ? 'Sending...' : 'Send message'}
          </motion.button>

          {status.message && (
            <p
              className={`text-sm ${
                status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
