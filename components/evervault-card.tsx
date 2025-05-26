"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import { CardPattern } from "@/components/card-pattern"

interface EvervaultCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  phaseTitle?: string
}

export function EvervaultCard({ children, className, onClick, phaseTitle }: EvervaultCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [randomString, setRandomString] = useState("")
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener("mousemove", handleMouseMove)
      return () => card.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  // Generate light Indian-themed random string for background
  const generateIndianRandomString = () => {
    const sanskritChars = "अआइईउऊएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसह"
    const hindiWords = ["नमस्ते", "धन्यवाद", "स्वागत", "शुभ", "मंगल", "कला", "संस्कृति", "परंपरा", "विकास", "सफलता"]
    const englishChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const symbols = "॰।॥ॐ☸✦✧✨⚡🕉️🪔"

    let result = ""
    for (let i = 0; i < 800; i++) {
      const rand = Math.random()
      if (rand < 0.3) {
        result += sanskritChars.charAt(Math.floor(Math.random() * sanskritChars.length))
      } else if (rand < 0.5) {
        result += hindiWords[Math.floor(Math.random() * hindiWords.length)] + " "
      } else if (rand < 0.8) {
        result += englishChars.charAt(Math.floor(Math.random() * englishChars.length))
      } else {
        result += symbols.charAt(Math.floor(Math.random() * symbols.length))
      }

      if (i % 40 === 0) result += "\n"
      if (i % 8 === 0) result += " "
    }
    return result
  }

  useEffect(() => {
    if (isHovered) {
      const newRandomString = generateIndianRandomString()
      setRandomString(newRandomString)
    }
  }, [isHovered])

  return (
    <div
      ref={cardRef}
      className={cn("relative group/card cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Main Card with Custom Border */}
      <div className="relative bg-white rounded-lg h-full overflow-hidden transition-all duration-300 group-hover/card:shadow-lg group-hover/card:shadow-periwinkle-300/20 border-0">
        {/* Custom Border with + at PERFECT corners and dashes on sides */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Corner + symbols - positioned exactly at corners */}
          <div className="absolute top-0 left-0 text-periwinkle2-400 font-bold text-lg opacity-60 group-hover/card:opacity-100 transition-opacity duration-300 leading-none">
            +
          </div>
          <div className="absolute top-0 right-0 text-periwinkle2-400 font-bold text-lg opacity-60 group-hover/card:opacity-100 transition-opacity duration-300 leading-none">
            +
          </div>
          <div className="absolute bottom-0 left-0 text-periwinkle2-400 font-bold text-lg opacity-60 group-hover/card:opacity-100 transition-opacity duration-300 leading-none">
            +
          </div>
          <div className="absolute bottom-0 right-0 text-periwinkle2-400 font-bold text-lg opacity-60 group-hover/card:opacity-100 transition-opacity duration-300 leading-none">
            +
          </div>

          {/* Dashed borders on sides - connecting the + symbols */}
          {/* Top border */}
          <div className="absolute top-2 left-4 right-4 h-0.5 border-t-2 border-dashed border-periwinkle2-400 opacity-40 group-hover/card:opacity-70 transition-opacity duration-300"></div>

          {/* Bottom border */}
          <div className="absolute bottom-2 left-4 right-4 h-0.5 border-t-2 border-dashed border-periwinkle2-400 opacity-40 group-hover/card:opacity-70 transition-opacity duration-300"></div>

          {/* Left border */}
          <div className="absolute left-2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-periwinkle2-400 opacity-40 group-hover/card:opacity-70 transition-opacity duration-300"></div>

          {/* Right border */}
          <div className="absolute right-2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-periwinkle2-400 opacity-40 group-hover/card:opacity-70 transition-opacity duration-300"></div>
        </div>

        {/* Light Card Pattern Effect (only visible on hover) */}
        <div className="opacity-0 group-hover/card:opacity-30 transition-opacity duration-500">
          <CardPattern mouseX={mouseXSpring} mouseY={mouseYSpring} randomString={randomString} />
        </div>

        {/* Default Content */}
        <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center opacity-100 group-hover/card:opacity-0 transition-opacity duration-300">
          {children}
        </div>

        {/* Hover Content */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 p-8 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Phase Title */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">{phaseTitle || "Phase Title"}</h3>

            {/* Call to Action Text */}
            <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
              Tap to see more details about this phase
            </p>

            {/* Small indicator */}
            <div className="text-periwinkle2-400 text-sm opacity-70">↗ Click to explore</div>
          </motion.div>
        </div>

        {/* Subtle hover glow effect around the card */}
        <div className="absolute -inset-1 rounded-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-periwinkle2-400/20 to-periwinkle3-400/20 blur-sm"></div>
        </div>
      </div>
    </div>
  )
}
