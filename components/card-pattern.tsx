"use client"

import { motion, useMotionTemplate } from "framer-motion"

interface CardPatternProps {
  mouseX: any
  mouseY: any
  randomString: string
}

export function CardPattern({ mouseX, mouseY, randomString }: CardPatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-lg [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-20"></div>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-periwinkle2-300/40 to-periwinkle3-300/40 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-periwinkle2-400/60 font-mono font-bold transition duration-500 p-4 leading-tight">
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}
