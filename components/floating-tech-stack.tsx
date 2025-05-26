"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function FloatingTechStack() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const techStack = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600", size: "large" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-black", size: "large" },
    { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700", size: "medium" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700", size: "medium" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800", size: "small" },
    { name: "Figma", icon: "🎨", color: "from-purple-500 to-pink-500", size: "medium" },
    { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-blue-500", size: "small" },
    { name: "Firebase", icon: "🔥", color: "from-orange-500 to-red-600", size: "small" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600", size: "medium" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-700", size: "small" },
    { name: "Git", icon: "📚", color: "from-orange-500 to-red-500", size: "small" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-700", size: "small" },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const getIconSize = (size: string) => {
    switch (size) {
      case "large":
        return "w-16 h-16 text-2xl"
      case "medium":
        return "w-12 h-12 text-xl"
      case "small":
        return "w-10 h-10 text-lg"
      default:
        return "w-12 h-12 text-xl"
    }
  }

  const positions = [
    { x: 15, y: 20 },
    { x: 75, y: 15 },
    { x: 85, y: 35 },
    { x: 25, y: 45 },
    { x: 65, y: 55 },
    { x: 90, y: 70 },
    { x: 20, y: 75 },
    { x: 80, y: 85 },
    { x: 45, y: 25 },
    { x: 55, y: 40 },
    { x: 35, y: 65 },
    { x: 70, y: 25 },
  ]

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-fluid-3xl font-bold mb-4 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent tracking-tight">
          Technology Stack
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-fluid-base">
          Modern technologies and tools I use to build exceptional digital experiences
        </p>
      </div>

      <div className="relative h-96 max-w-4xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute group cursor-pointer"
            style={{
              left: `${positions[index]?.x || 50}%`,
              top: `${positions[index]?.y || 50}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            whileHover={{
              scale: 1.2,
              zIndex: 10,
              transition: { duration: 0.2 },
            }}
            animate={{
              x: mousePosition.x * 0.01 * ((index % 3) - 1),
              y: mousePosition.y * 0.01 * ((index % 3) - 1),
            }}
          >
            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
            />

            {/* Main icon container */}
            <div
              className={`
              relative ${getIconSize(tech.size)} 
              bg-gradient-to-br from-white/10 to-white/5 
              backdrop-blur-sm border border-periwinkle-400/30 
              rounded-2xl flex items-center justify-center
              shadow-lg group-hover:shadow-2xl
              transition-all duration-300
              group-hover:border-periwinkle-300/50
            `}
            >
              <span className="filter drop-shadow-sm">{tech.icon}</span>
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">{tech.name}</div>
            </div>

            {/* Floating particles */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-periwinkle2-400 rounded-full opacity-60"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${20 + i * 20}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(172, 181, 247, 0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>
    </div>
  )
}
