import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiZap, FiGlobe } from 'react-icons/fi'
import './About.css'

const highlights = [
  { icon: FiCode, text: 'Building scalable AI-driven applications' },
  { icon: FiZap, text: 'Specializing in NLP and LLM integration' },
  { icon: FiGlobe, text: 'Creating full-stack web solutions' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          ref={ref}
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="about-left">
            <span className="section-label">About</span>
            <h2 className="section-title">
              Developer who<br />
              <span className="gradient-text">builds with AI</span>
            </h2>
            <p className="about-text">
              I'm Pranav Kaushik, an independent developer focused on creating practical, 
              scalable AI solutions. Currently building a fake news detection system that 
              combines NLP, LLMs, and real-time verification.
            </p>
            <p className="about-text">
              I'm exploring startup opportunities in hyperlocal services while continuously 
              strengthening my technical and product-building skills.
            </p>
          </div>

          <div className="about-right">
            <div className="about-highlights">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="highlight-icon">
                    <item.icon size={20} />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-value">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">AI</span>
                <span className="stat-label">Focus Area</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Self-taught</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
