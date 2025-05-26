"use client"

import { useState } from "react"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export function CircularTechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  // Center logo/symbol
  const centerSymbol = {
    icon: "JA",
    title: "Jai Ambe",
    description: "Full Stack Developer",
  }

  // Technologies arranged in circle
  const technologies = [
    { id: 1, name: "React", icon: "⚛️", color: "bg-blue-500" },
    { id: 2, name: "Next.js", icon: "▲", color: "bg-gray-800" },
    { id: 3, name: "TypeScript", icon: "TS", color: "bg-blue-600" },
    { id: 4, name: "Node.js", icon: "🟢", color: "bg-green-600" },
    { id: 5, name: "MongoDB", icon: "🍃", color: "bg-green-700" },
    { id: 6, name: "Figma", icon: "🎨", color: "bg-purple-500" },
    { id: 7, name: "Tailwind", icon: "💨", color: "bg-cyan-500" },
    { id: 8, name: "Firebase", icon: "🔥", color: "bg-orange-500" },
  ]

  const collaborationText =
    "With modern technologies and traditional design wisdom, I create digital experiences that blend innovation with cultural aesthetics."

  const features = [
    {
      title: "Modern Framework Expertise",
      text: "Specializing in React, Next.js, and TypeScript for building scalable applications.",
    },
    {
      title: "Cultural Design Integration",
      text: "Incorporating Indian design elements and aesthetics into modern web interfaces.",
    },
    {
      title: "Full Stack Capabilities",
      text: "End-to-end development from database design to user interface implementation.",
    },
    {
      title: "Performance Optimization",
      text: "Ensuring applications are fast, accessible, and optimized for all devices.",
    },
  ]

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-fluid-3xl font-bold mb-4 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent tracking-tight">
          Technology Stack & Collaboration
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-fluid-base">
          Modern technologies and tools I use to build exceptional digital experiences
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="max-w-md">
            <h2 className="text-fluid-4xl font-bold mb-6 text-gray-800 tracking-tight">
              Full Stack Development for seamless collaboration
            </h2>

            <ul className="max-w-md mb-10 space-y-4">
              {features.map((item, index) => (
                <li key={index} className="py-3">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold text-gray-800 mb-1">{item.title}</h6>
                      {item.text && <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button className="bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Start Project
            </button>
          </div>

          {/* Right side - Circular Tech Stack */}
          <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="text-sm mb-8 text-gray-600 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto text-center">
              {collaborationText}
            </p>

            <div className="relative left-1/2 flex w-[22rem] aspect-square border-2 border-periwinkle-300 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              {/* Inner circle */}
              <div className="flex w-60 aspect-square m-auto border-2 border-periwinkle-400 rounded-full">
                {/* Center element */}
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-periwinkle2-400 mb-1">{centerSymbol.icon}</div>
                      <div className="text-xs text-gray-600 font-medium">Developer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology icons around the circle */}
              <ul>
                {technologies.map((tech, index) => (
                  <li
                    key={tech.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                    style={{
                      transform: `rotate(${index * 45}deg)`,
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-white border-2 border-periwinkle-300 rounded-xl hover:border-periwinkle-400 transition-all duration-300 hover:scale-110 cursor-pointer`}
                      style={{
                        transform: `rotate(-${index * 45}deg)`,
                      }}
                    >
                      <div className="m-auto text-lg">{tech.icon}</div>

                      {/* Tooltip */}
                      {hoveredTech === tech.name && (
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                          {tech.name}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Decorative curves */}
              <div className="absolute top-1/2 left-0 w-6 h-6 -translate-y-1/2 -translate-x-3">
                <IndianDecorative size={24} variant="paisley" className="opacity-30" />
              </div>
              <div className="absolute top-1/2 right-0 w-6 h-6 -translate-y-1/2 translate-x-3">
                <IndianDecorative size={24} variant="paisley" className="opacity-30 transform scale-x-[-1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Import CheckCircle from lucide-react
import { CheckCircle } from "lucide-react"
