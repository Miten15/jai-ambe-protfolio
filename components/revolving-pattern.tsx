"use client"

import { motion } from "framer-motion"

interface RevolvingPatternProps {
  className?: string
}

export function RevolvingPattern({ className = "" }: RevolvingPatternProps) {
  const patterns = [
    // Plus icons
    { icon: "+", angle: 0 },
    { icon: "+", angle: 45 },
    { icon: "+", angle: 90 },
    { icon: "+", angle: 135 },
    { icon: "+", angle: 180 },
    { icon: "+", angle: 225 },
    { icon: "+", angle: 270 },
    { icon: "+", angle: 315 },
    // Indian symbols
    { icon: "॰", angle: 22.5 }, // Devanagari abbreviation sign
    { icon: "॰", angle: 67.5 },
    { icon: "॰", angle: 112.5 },
    { icon: "॰", angle: 157.5 },
    { icon: "॰", angle: 202.5 },
    { icon: "॰", angle: 247.5 },
    { icon: "॰", angle: 292.5 },
    { icon: "॰", angle: 337.5 },
  ]

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {patterns.map((pattern, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 text-periwinkle2-400 opacity-20 group-hover/card:opacity-60 transition-opacity duration-500 flex items-center justify-center text-sm font-bold"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${pattern.angle}deg) translateY(-140px)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.1,
            }}
          >
            {pattern.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
