"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface PixelCardProps {
  children: React.ReactNode
  className?: string
  borderClassName?: string
  onClick?: () => void
}

export function PixelCard({ children, className, borderClassName, onClick }: PixelCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener("mousemove", handleMouseMove)
      return () => card.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn("relative group cursor-pointer transition-all duration-300", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Animated border */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          borderClassName,
        )}
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(172, 181, 247, 0.4), transparent 40%)`,
        }}
      />

      {/* Card content */}
      <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 h-full transition-all duration-300 group-hover:border-periwinkle2-400/50">
        {/* Pixel effect overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(172, 181, 247, 0.3) 0%, transparent 50%)`,
            filter: "blur(1px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
