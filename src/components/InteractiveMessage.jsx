import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './InteractiveMessage.css'

const InteractiveMessage = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const messages = [
    {
      id: 1,
      title: 'You Are Loved',
      message: 'Every moment with you is a treasure'
    },
    {
      id: 2,
      title: 'You Are Beautiful',
      message: 'Inside and out, you shine so bright'
    },
    {
      id: 3,
      title: 'You Are Special',
      message: 'No one compares to your amazing heart'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  }

  return (
    <section className="interactive-message">
      <motion.div
        className="message-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Three Things I Want You to Know
        </motion.h2>

        <div className="cards-grid">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              className={`message-card ${hoveredCard === msg.id ? 'hovered' : ''}`}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: hoveredCard === msg.id ? 2 : 0,
                boxShadow: '0 20px 60px rgba(199, 56, 102, 0.3)'
              }}
              onHoverStart={() => setHoveredCard(msg.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >

              <h3 className="card-title">{msg.title}</h3>
              <p className="card-message">{msg.message}</p>

              <motion.div
                className="card-glow"
                animate={hoveredCard === msg.id ? {
                  opacity: [0.3, 0.6, 0.3]
                } : { opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default InteractiveMessage
