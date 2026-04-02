import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiReact, SiTypescript, SiPython, SiNodedotjs, 
  SiMongodb, SiMysql, SiVercel, SiOpenai
} from 'react-icons/si'
import './Skills.css'

const skills = [
  { name: 'React & Next.js', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python & AI', icon: SiPython, color: '#FFD43B' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'LLM Integration', icon: SiOpenai, color: '#412991' },
  { name: 'Deployment', icon: SiVercel, color: '#ffffff' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          ref={ref}
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon size={28} />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
