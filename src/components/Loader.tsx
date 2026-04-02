import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '../context/LoadingContext'
import './Loader.css'

export default function Loader() {
  const { isLoading, progress, setIsLoading } = useLoading()
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setIsLoading(false), 500)
    }
  }, [progress, setIsLoading])

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress(prev => {
        if (prev < progress) {
          return Math.min(prev + 2, progress)
        }
        return prev
      })
    }, 20)
    return () => clearInterval(interval)
  }, [progress])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-content">
            <motion.h1
              className="loader-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              PK
            </motion.h1>
            <div className="loader-bar-container">
              <motion.div 
                className="loader-bar"
                initial={{ width: 0 }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.p
              className="loader-percent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {Math.round(displayProgress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
