import { motion } from 'framer-motion'
import './Marquee.css'

const skills = [
  'React', 'TypeScript', 'Python', 'AI & ML', 'Node.js', 
  'NLP', 'LLM Integration', 'MongoDB', 'Full-Stack', 'Web Development',
  'React', 'TypeScript', 'Python', 'AI & ML', 'Node.js', 
  'NLP', 'LLM Integration', 'MongoDB', 'Full-Stack', 'Web Development',
]

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <span key={index} className="marquee-item">
              {skill}
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {skills.map((skill, index) => (
            <span key={index} className="marquee-item">
              {skill}
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
