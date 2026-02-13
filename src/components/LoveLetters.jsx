import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './LoveLetters.css'

const LoveLetters = () => {
  const [openLetter, setOpenLetter] = useState(null)

  const letters = [
    {
      id: 1,
      preview: 'A Memory',
      content: 'I cherish every laugh we\'ve shared, every adventure we\'ve embarked on, and every quiet moment spent together. You make ordinary days extraordinary.',
      color: 'var(--rose-petal)'
    },
    {
      id: 2,
      preview: 'A Promise',
      content: 'I promise to always support you, to celebrate your victories, and to be there during challenges. You are never alone in this journey.',
      color: 'var(--deep-rose)'
    },
    {
      id: 3,
      preview: 'A Wish',
      content: 'I wish you endless joy, boundless love, and all the happiness your heart can hold. May this day remind you how truly special you are.',
      color: 'var(--burgundy)'
    }
  ]

  return (
    <section className="love-letters">
      <motion.div
        className="letters-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Love Letters For You
        </motion.h2>

        <div className="letters-grid">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              className="letter-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className={`letter-envelope ${openLetter === letter.id ? 'open' : ''}`}
                onClick={() => setOpenLetter(openLetter === letter.id ? null : letter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="envelope-top" style={{ borderBottomColor: letter.color }}>
                  <div className="envelope-flap" style={{ borderTopColor: letter.color }} />
                </div>
                <div className="envelope-body" style={{ backgroundColor: letter.color }}>
                  <div className="envelope-letter">
                    <p className="letter-preview">{letter.preview}</p>
                    <div className="tap-hint">
                      {openLetter === letter.id ? 'Tap to close' : 'Tap to open'}
                    </div>
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {openLetter === letter.id && (
                  <motion.div
                    className="letter-content"
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="content-inner">
                      <p>{letter.content}</p>
                      <div className="signature">
                        <span>With Love</span>
                        <div className="heart-signature">💕</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default LoveLetters
