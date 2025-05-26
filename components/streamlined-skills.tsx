"use client"

import { Card, CardContent } from "@/components/ui/card"
import { IndianDecorative } from "@/components/indian-decorative-elements"
import { Code, Palette, Smartphone, Globe, Zap, Users, CheckCircle, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma
} from "react-icons/fa"
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiTailwindcss,
  SiFirebase 
} from "react-icons/si"

export function StreamlinedSkills() {
  const expertiseAreas = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Crafting beautiful, responsive user interfaces with modern frameworks",
      icon: <Code className="h-8 w-8" />,
      iconBg: "bg-blue-500",
      projects: 85,
      highlights: ["Component Architecture", "State Management", "Performance Optimization", "Responsive Design"],
      size: "large",
      details:
        "Specializing in React ecosystem with expertise in Next.js, TypeScript, and modern CSS frameworks. Creating pixel-perfect, performant applications.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Designing intuitive experiences with cultural aesthetics",
      icon: <Palette className="h-8 w-8" />,
      iconBg: "bg-pink-500",
      projects: 60,
      highlights: ["Design Systems", "User Research", "Cultural Design", "Accessibility"],
      size: "medium",
      details: "Blending modern design principles with traditional Indian aesthetics.",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "End-to-end application development with modern technologies",
      icon: <Globe className="h-8 w-8" />,
      iconBg: "bg-green-500",
      projects: 45,
      highlights: ["API Development", "Database Design", "Cloud Architecture", "DevOps"],
      size: "large",
      details:
        "Building robust backend systems and APIs that scale. Expert in database design, server architecture, and cloud deployment.",
    },
    {
      id: 4,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with native performance",
      icon: <Smartphone className="h-8 w-8" />,
      iconBg: "bg-orange-500",
      projects: 25,
      highlights: ["React Native", "Cross-platform", "Native Performance"],
      size: "medium",
      details: "Creating mobile applications that work seamlessly across iOS and Android.",
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Making applications lightning fast and efficient",
      icon: <Zap className="h-8 w-8" />,
      iconBg: "bg-yellow-500",
      projects: 40,
      highlights: ["Core Web Vitals", "Bundle Optimization"],
      size: "small",
      details: "Optimizing applications for speed, SEO, and user experience.",
    },
    {
      id: 6,
      title: "Team Leadership",
      description: "Leading development teams and mentoring developers",
      icon: <Users className="h-8 w-8" />,
      iconBg: "bg-purple-500",
      projects: 15,
      highlights: ["Team Leadership", "Mentoring"],
      size: "small",
      details: "Leading cross-functional teams and mentoring junior developers.",
    },
  ]

  // Technology stack with company logos
  const technologies = [
    { id: 1, name: "React", icon: FaReact, color: "text-blue-500" },
    { id: 2, name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
    { id: 3, name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { id: 4, name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { id: 5, name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
    { id: 6, name: "Figma", icon: FaFigma, color: "text-purple-500" },
    { id: 7, name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
    { id: 8, name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
  ]

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

  const getCardClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "medium":
        return "md:col-span-1 md:row-span-2"
      case "small":
        return "md:col-span-1 md:row-span-1"
      default:
        return "md:col-span-1 md:row-span-1"
    }
  }

  return (
    <div className="py-12">
      {/* Expertise Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {expertiseAreas.map((area, index) => (
          <Card
            key={area.id}
            className={cn(
              "group relative overflow-hidden border border-periwinkle-300 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer",
              getCardClasses(area.size),
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <IndianDecorative size={16} variant="lotus" />
            </div>

            <CardContent
              className={cn(
                "h-full flex flex-col",
                area.size === "large" ? "p-8" : area.size === "medium" ? "p-6" : "p-4",
              )}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={cn(
                    "p-3 rounded-xl text-white group-hover:scale-105 transition-transform duration-300",
                    area.iconBg,
                  )}
                >
                  {area.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className={cn(
                      "font-bold text-gray-800 mb-2 tracking-tight",
                      area.size === "large" ? "text-2xl" : "text-xl",
                    )}
                  >
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>

              {area.size === "large" && (
                <div className="space-y-4 flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed">{area.details}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {area.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {area.size === "medium" && (
                <div className="space-y-3 flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed">{area.details}</p>
                  <div className="space-y-2">
                    {area.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {area.size === "small" && (
                <div className="space-y-2 flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed">{area.details}</p>
                  <div className="space-y-1">
                    {area.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <TrendingUp className="h-4 w-4 text-periwinkle2-400" />
                <span className="text-sm font-semibold text-periwinkle2-400">{area.projects} Projects</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technology Stack Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="max-w-md">
            <h3 className="text-fluid-3xl font-bold mb-6 text-periwinkle2-300  tracking-tight">
              Technology Stack & Collaboration
            </h3>

            <ul className="max-w-md mb-10 space-y-4">
              {features.map((item, index) => (
                <li key={index} className="py-3">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold  text-periwinkle2-400 mb-1">{item.title}</h6>
                      <p className="text-sm text-periwinkle-200 leading-relaxed">{item.text}</p>
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
            <p className="text-sm mb-8 text-periwinkle-200 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto text-center">
              With modern technologies and traditional design wisdom, I create digital experiences that blend innovation
              with cultural aesthetics.
            </p>

            <div className="relative left-1/2 flex w-[22rem] aspect-square border-2 border-periwinkle-300 rounded-full -translate-x-1/2 scale-75 md:scale-100">
              {/* Inner circle */}
              <div className="flex w-60 aspect-square m-auto border-2 border-periwinkle-400 rounded-full">
                {/* Center element */}
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-periwinkle2-400 mb-1">JA</div>
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
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-white border-2 border-periwinkle-300 rounded-xl hover:border-periwinkle-400 transition-all duration-300 hover:scale-110 cursor-pointer group`}
                      style={{
                        transform: `rotate(-${index * 45}deg)`,
                      }}
                    >
                      <div className="m-auto">
                        <tech.icon className={`w-6 h-6 ${tech.color}`} />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                          {tech.name}
                        </div>
                      </div>
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
