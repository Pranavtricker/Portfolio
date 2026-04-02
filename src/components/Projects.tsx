import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'Fake News Detector',
    category: 'AI / Machine Learning',
    description: 'An AI-powered system that detects fake news using NLP and LLM APIs with real-time verification mechanisms.',
    tools: ['Python', 'NLP', 'LLM APIs', 'React', 'TypeScript'],
    github: 'https://github.com/Pranavtricker/Fake_News_Detector_System',
    image: '/images/fakenews.png',
    color: '#c8ff00',
  },
  {
    title: 'Expense Manager',
    category: 'Web Application',
    description: 'A personal finance tracking application with intuitive dashboard and expense categorization.',
    tools: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/Pranavtricker/Expense-Manager',
    image: '/images/expense.png',
    color: '#ff6b35',
  },
  {
    title: 'Webcam Object Detection',
    category: 'Computer Vision',
    description: 'Real-time object detection using webcam feed and machine learning models.',
    tools: ['Python', 'OpenCV', 'ML'],
    github: 'https://github.com/Pranavtricker/webcam-object-detection',
    image: '/images/object-detection.png',
    color: '#667eea',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          ref={ref}
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Selected <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="project-item-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-item-content">
                <div className="project-item-header">
                  <span className="project-item-category">{project.category}</span>
                  <div className="project-item-number">0{index + 1}</div>
                </div>
                <h3 className="project-item-title">{project.title}</h3>
                <p className="project-item-description">{project.description}</p>
                <div className="project-item-footer">
                  <div className="project-item-tools">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <div className="project-item-link">
                    <FiGithub size={18} />
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
              </div>
              <div 
                className="project-item-accent" 
                style={{ background: project.color }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
