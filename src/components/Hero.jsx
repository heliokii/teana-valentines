import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './Hero.css'

const Hero = ({ onReveal }) => {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true)
      onReveal()
    }, 2000)
    return () => clearTimeout(timer)
  }, [onReveal])

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      scale: 1.5
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  }

  const heartVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "backOut"
      }
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  const message = "Happy Heart's Day, Teana"
  const letters = message.split('')

  const [bursts, setBursts] = useState([])

  const handleBloom = (e) => {
    const { clientX, clientY } = e
    const newBurst = {
      id: Date.now(),
      x: clientX,
      y: clientY
    }
    setBursts(prev => [...prev, newBurst])

    // Cleanup burst after animation
    setTimeout(() => {
      setBursts(prev => prev.filter(b => b.id !== newBurst.id))
    }, 2000)
  }

  return (
    <section className="hero" onClick={handleBloom} style={{ cursor: 'pointer' }}>
      <div className="hero-container">
        {bursts.map(burst => (
          <motion.div
            key={burst.id}
            initial={{ scale: 0, opacity: 1, x: burst.x, y: burst.y }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: 'fixed',
              pointerEvents: 'none',
              fontSize: '2rem',
              zIndex: 100
            }}
          >
            💐
          </motion.div>
        ))}

        {/* Decorative elements */}
        <motion.div
          className="decorative-rose decorative-rose-left"
          initial={{ opacity: 0, x: -100, rotate: -45 }}
          animate={{ opacity: 0.6, x: 0, rotate: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
        />
        <motion.div
          className="decorative-rose decorative-rose-right"
          initial={{ opacity: 0, x: 100, rotate: 45 }}
          animate={{ opacity: 0.6, x: 0, rotate: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
        />

        {/* Main message */}
        <div className="message-wrapper">
          <h1 className="hero-title">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: [1, 1.4, 0.75, 1.25, 0.9, 1],
                  color: "#ff8fa3",
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  display: 'inline-block',
                  marginRight: letter === ' ' ? '0.3em' : '0',
                  cursor: 'default', // Changed to default to not confuse with clickable
                  position: 'relative'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <p>With all my love and affection</p>
          </motion.div>
        </div>

        {/* Interactive hint */}
        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ↓ Scroll for more ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
