import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './FloatingHearts.css'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHearts = () => {
      const newHearts = []
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 10 + Math.random() * 10,
          size: 0.5 + Math.random() * 1.5,
          opacity: 0.1 + Math.random() * 0.3
        })
      }
      setHearts(newHearts)
    }

    createHearts()
  }, [])

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            opacity: heart.opacity
          }}
          initial={{ y: '100vh', rotate: 0 }}
          animate={{
            y: '-100vh',
            rotate: 360,
            x: [0, 50, -50, 0]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
            x: {
              duration: heart.duration / 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
