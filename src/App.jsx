import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import FloatingFlowers from './components/FloatingFlowers'
import InteractiveMessage from './components/InteractiveMessage'
import LoveLetters from './components/LoveLetters'
import Footer from './components/Footer'
import AudioPlayer from './components/AudioPlayer'
import './styles/App.css'

function App() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div className="app">
      <AudioPlayer />
      <FloatingFlowers />
      <Hero onReveal={() => setShowMessage(true)} />
      {showMessage && (
        <>
          <InteractiveMessage />
          <LoveLetters />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
