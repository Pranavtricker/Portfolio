import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import { LoadingProvider } from './context/LoadingContext'
import Loader from './components/Loader'

const Scene3D = lazy(() => import('./components/Scene3D'))

function App() {
  return (
    <LoadingProvider>
      <Loader />
      <Cursor />
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
    </LoadingProvider>
  )
}

export default App
