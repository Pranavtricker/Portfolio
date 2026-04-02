import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiCheck } from 'react-icons/fi'
import './Contact.css'

const socials = [
  { name: 'GitHub', icon: FiGithub, url: 'https://github.com/Pranavtricker' },
  { name: 'LinkedIn', icon: FiLinkedin, url: 'https://www.linkedin.com/in/pranav-kaushik-5801b2272' },
  { name: 'Instagram', icon: FiInstagram, url: 'https://www.instagram.com/12pranav05/' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xgoplvev', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          ref={ref}
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's build something great together.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-item">
              <div className="contact-icon">
                <FiMail size={18} />
              </div>
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:kaushikpranav265@gmail.com" className="contact-value">
                  kaushikpranav265@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin size={18} />
              </div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">India</span>
              </div>
            </div>

            <div className="contact-socials">
              <span className="contact-label">Socials</span>
              <div className="social-links">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            action="https://formspree.io/f/xgoplvev"
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className="form-input"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Message" 
                className="form-input form-textarea"
                rows={5}
                required
              />
            </div>
            <button 
              type="submit" 
              className="form-submit"
              disabled={status === 'submitting' || status === 'success'}
            >
              {status === 'submitting' ? 'Sending...' : 
               status === 'success' ? (
                <><FiCheck size={16} /> Sent!</>
              ) : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="form-error">Something went wrong. Try again.</p>
            )}
          </motion.form>
        </div>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>© 2026 Pranav Kaushik</p>
        </motion.footer>
      </div>
    </section>
  )
}
