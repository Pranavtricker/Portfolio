import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    const outline = cursorOutlineRef.current

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.1
      cursorY += (mouseY - cursorY) * 0.1
      dotX += (mouseX - dotX) * 0.3
      dotY += (mouseY - dotY) * 0.3

      if (cursor) {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      }
      if (dot) {
        dot.style.transform = `translate(${dotX}px, ${dotY}px)`
      }
      if (outline) {
        outline.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      }

      requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => {
      cursor?.classList.add('cursor-hover')
      outline?.classList.add('cursor-hover')
    }

    const handleMouseLeave = () => {
      cursor?.classList.remove('cursor-hover')
      outline?.classList.remove('cursor-hover')
    }

    const handleMouseDown = () => {
      cursor?.classList.add('cursor-click')
      outline?.classList.add('cursor-click')
    }

    const handleMouseUp = () => {
      cursor?.classList.remove('cursor-click')
      outline?.classList.remove('cursor-click')
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    const interactElements = document.querySelectorAll('a, button, .project-card, .skill-card, .stat-card')
    interactElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    animate()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="cursor-outline" ref={cursorOutlineRef} />
    </>
  )
}
