import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './ParallaxSection.css'

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="parallax-section">
      <motion.div className="parallax-content" style={{ y, opacity }}>
        <motion.span 
          className="parallax-text"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Building the future,
        </motion.span>
        <motion.span 
          className="parallax-text gradient-text"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          one line at a time
        </motion.span>
      </motion.div>
      
      <div className="parallax-shapes">
        <motion.div 
          className="shape shape-1"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        />
        <motion.div 
          className="shape shape-2"
          style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
        />
        <motion.div 
          className="shape shape-3"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
        />
      </div>
    </section>
  )
}
