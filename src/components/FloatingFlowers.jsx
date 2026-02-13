import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import './FloatingFlowers.css'

const FloatingFlowers = () => {
    const [flowers, setFlowers] = useState([])

    // Flower types (text emojis and placeholder for tulip image)
    const flowerTypes = [
        { type: 'text', content: '🌷' },
        { type: 'text', content: '🌹' },
        { type: 'text', content: '🌺' },
        { type: 'text', content: '🌸' },
        { type: 'text', content: '💐' },
        // Strategy: 10 watercolor tulip integration
        // We will add logic to randomly select from the sprite later if this type is chosen
        { type: 'tulip-img', content: 'img' }
    ]

    useEffect(() => {
        const createFlowers = () => {
            const newFlowers = []
            const count = 20 // Number of flowers

            for (let i = 0; i < count; i++) {
                const randomFlower = flowerTypes[Math.floor(Math.random() * flowerTypes.length)]
                newFlowers.push({
                    id: i,

                    type: randomFlower.type,
                    content: randomFlower.content,
                    tulipIndex: Math.floor(Math.random() * 10), // Randomly pick 1 of 10 tulips
                    left: Math.random() * 100,
                    delay: Math.random() * 5,
                    duration: 15 + Math.random() * 15,
                    size: 1 + Math.random() * 1.5,
                    rotation: Math.random() * 360,
                })
            }
            setFlowers(newFlowers)
        }

        createFlowers()
    }, [])

    return (
        <div className="floating-flowers">
            {flowers.map((flower) => (
                <motion.div
                    key={flower.id}
                    className={`flower flower-${flower.type}`}
                    style={{
                        left: `${flower.left}%`,
                        fontSize: `${flower.size}rem`,
                    }}
                    initial={{
                        y: '110vh',
                        rotate: flower.rotation,
                        opacity: 0
                    }}
                    animate={{
                        y: '-20vh',
                        rotate: [flower.rotation, flower.rotation + 360],
                        opacity: [0, 1, 1, 0],
                        x: [0, 30, -30, 0] // Swaying motion
                    }}
                    whileHover={{
                        scale: 1.5,
                        rotate: 0,
                        transition: { duration: 0.3 }
                    }}
                    transition={{
                        y: {
                            duration: flower.duration,
                            delay: flower.delay,
                            repeat: Infinity,
                            ease: 'linear'
                        },
                        rotate: {
                            duration: flower.duration,
                            repeat: Infinity,
                            ease: 'linear'
                        },
                        opacity: {
                            duration: flower.duration,
                            times: [0, 0.1, 0.9, 1],
                            repeat: Infinity
                        },
                        x: {
                            duration: flower.duration / 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }
                    }}
                >
                    {flower.type === 'tulip-img' ? (
                        <div
                            className="tulip-sprite"
                            style={{
                                // Assuming 5 columns, 2 rows (500% width, 200% height)
                                // Index 0-4: Row 0. Index 5-9: Row 1.
                                backgroundPosition: `${(flower.tulipIndex % 5) * 25}% ${Math.floor(flower.tulipIndex / 5) * 100}%`
                            }}
                        />
                    ) : (
                        flower.content
                    )}
                </motion.div>
            ))}
        </div>
    )
}

export default FloatingFlowers
