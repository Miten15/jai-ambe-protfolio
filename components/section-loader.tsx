"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface SectionLoaderProps {
  children: React.ReactNode
  delay?: number
}

export function SectionLoader({ children, delay = 0 }: SectionLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000 + delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="relative">
          {/* Main wrapper with perspective */}
          <div className="relative" style={{ perspective: "1000px" }}>
            {/* Outer circle */}
            <div className="relative w-32 h-32 rounded-full border border-periwinkle2-400 animate-loader-spin animate-loader-fade-in">
              {/* Second circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 rounded-full border border-dashed border-periwinkle2-500">
                {/* Third circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-periwinkle3-400 animate-loader-glow">
                  {/* Inner rectangle container */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-dotted border-periwinkle2-400">
                    {/* Mini circles at corners */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-periwinkle3-400 animate-loader-glow"></div>
                    <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-periwinkle3-400 animate-loader-glow"></div>
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-periwinkle3-400 animate-loader-glow"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-periwinkle3-400 animate-loader-glow"></div>

                    {/* Inner rotating element */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-dotted border-periwinkle2-400 animate-loader-glow">
                      <div className="w-12 h-12 mx-auto mt-2 border border-periwinkle2-400 animate-loader-inner-spin">
                        <div className="w-12 h-12 border border-periwinkle2-400 transform rotate-45"></div>
                      </div>
                    </div>

                    {/* Center circles */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-periwinkle2-400 animate-loader-glow"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-periwinkle3-400 animate-loader-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div className="animate-fade-in-up">{children}</div>
}
