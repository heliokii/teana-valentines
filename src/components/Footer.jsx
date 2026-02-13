import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="footer-message">
          Happy Valentine's Day, Teana!
        </p>

        <p className="footer-submessage">
          May your day be filled with love, joy, and all things wonderful
        </p>

        <p className="footer-date">
          February 14, 2026
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
