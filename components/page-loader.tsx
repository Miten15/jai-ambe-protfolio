"use client"

import { useState, useEffect } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-alice_blue-900 via-periwinkle-900 to-lavender-900 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: "url(/images/paisley-pattern.png)",
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Main Loader - Section loader animation centered */}
        <div className="relative mb-8">
          <div className="flex justify-center items-center">
            <div className="relative" style={{ perspective: "1000px" }}>
              {/* Outer circle */}
              <div className="relative w-32 h-32 rounded-full border border-periwinkle2-400 animate-loader-spin animate-loader-fade-in">
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

        {/* Brand Name */}
        <h1 className="text-fluid-4xl font-bold mb-4 bg-gradient-to-r from-periwinkle2-300 via-periwinkle3-300 to-alice_blue-300 bg-clip-text text-transparent font-troy tracking-tight animate-fade-in-up">
          Jai Ambe
        </h1>

        {/* Loading Text */}
        <p className="text-fluid-lg text-periwinkle2-300 mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Crafting Digital Experiences...
        </p>

        {/* Progress Bar */}
        <div
          className="w-64 mx-auto bg-periwinkle-800 rounded-full h-2 overflow-hidden animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div
            className="h-full bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <p className="text-periwinkle2-300 mt-3 text-fluid-sm animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  )
}
