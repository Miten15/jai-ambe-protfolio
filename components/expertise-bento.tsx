"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IndianDecorative } from "@/components/indian-decorative-elements"
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Zap,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function ExpertiseBento() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const expertiseAreas = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Crafting beautiful, responsive user interfaces with modern frameworks",
      icon: <Code className="h-8 w-8" />,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10",
      projects: 85,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
      achievements: ["95% Client Satisfaction", "50+ Projects", "Performance Expert"],
      size: "lg", // Large card
      content: {
        description:
          "Specializing in React ecosystem with expertise in Next.js, TypeScript, and modern CSS frameworks. Creating pixel-perfect, performant applications.",
        highlights: ["Component Architecture", "State Management", "Performance Optimization", "Responsive Design"],
      },
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Designing intuitive experiences with cultural aesthetics",
      icon: <Palette className="h-8 w-8" />,
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-500/10 to-rose-600/10",
      projects: 60,
      technologies: ["Figma", "Adobe XD", "Photoshop", "Principle"],
      achievements: ["Design Systems", "User Research", "Prototyping"],
      size: "md",
      content: {
        description:
          "Blending modern design principles with traditional Indian aesthetics to create unique, culturally rich experiences.",
        highlights: ["Design Systems", "User Research", "Cultural Design", "Accessibility"],
      },
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "End-to-end application development with modern technologies",
      icon: <Globe className="h-8 w-8" />,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-600/10",
      projects: 45,
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "AWS"],
      achievements: ["Scalable Architecture", "API Design", "Database Optimization"],
      size: "lg",
      content: {
        description:
          "Building robust backend systems and APIs that scale. Expert in database design, server architecture, and cloud deployment.",
        highlights: ["API Development", "Database Design", "Cloud Architecture", "DevOps"],
      },
    },
    {
      id: 4,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with native performance",
      icon: <Smartphone className="h-8 w-8" />,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10",
      projects: 25,
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      achievements: ["Cross-platform", "Native Performance", "App Store"],
      size: "md",
      content: {
        description:
          "Creating mobile applications that work seamlessly across iOS and Android with native performance and user experience.",
        highlights: ["React Native", "Performance", "Native Modules", "App Store Deployment"],
      },
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Making applications lightning fast and efficient",
      icon: <Zap className="h-8 w-8" />,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-500/10 to-orange-600/10",
      projects: 40,
      technologies: ["Lighthouse", "Webpack", "Vite", "CDN"],
      achievements: ["90+ Performance Score", "Core Web Vitals", "SEO Optimization"],
      size: "md",
      content: {
        description:
          "Optimizing applications for speed, SEO, and user experience. Expert in Core Web Vitals and performance monitoring.",
        highlights: ["Core Web Vitals", "Bundle Optimization", "Image Optimization", "Caching Strategies"],
      },
    },
    {
      id: 6,
      title: "Team Leadership",
      description: "Leading development teams and mentoring developers",
      icon: <Users className="h-8 w-8" />,
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-500/10 to-indigo-600/10",
      projects: 15,
      technologies: ["Agile", "Scrum", "Code Review", "Mentoring"],
      achievements: ["Team Lead", "Mentored 20+ Developers", "Project Management"],
      size: "sm",
      content: {
        description:
          "Leading cross-functional teams and mentoring junior developers. Expert in agile methodologies and project management.",
        highlights: ["Team Leadership", "Mentoring", "Agile/Scrum", "Code Review"],
      },
    },
  ]

  const getCardClasses = (size: string) => {
    switch (size) {
      case "lg":
        return "md:col-span-2 md:row-span-2"
      case "md":
        return "md:col-span-1 md:row-span-2"
      case "sm":
        return "md:col-span-1 md:row-span-1"
      default:
        return "md:col-span-1 md:row-span-1"
    }
  }

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-fluid-3xl font-bold mb-4 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent tracking-tight flex items-center justify-center gap-3">
          <IndianDecorative size={24} variant="lotus" className="opacity-50" />
          Areas of Expertise
          <IndianDecorative size={24} variant="lotus" className="opacity-50 transform scale-x-[-1]" />
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-fluid-base">
          Specialized domains where I deliver exceptional results with deep technical knowledge and creative solutions.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {expertiseAreas.map((area, index) => (
          <Card
            key={area.id}
            className={cn(
              "group relative overflow-hidden border-periwinkle-400/30 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 cursor-pointer",
              getCardClasses(area.size),
              hoveredCard === area.id ? "scale-[1.02] shadow-2xl" : "",
            )}
            onMouseEnter={() => setHoveredCard(area.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background Gradient */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                area.bgGradient,
              )}
            />

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <IndianDecorative size={20} variant="lotus" />
            </div>

            <CardContent
              className={cn(
                "relative z-10 h-full flex flex-col",
                area.size === "lg" ? "p-8" : area.size === "md" ? "p-6" : "p-4",
              )}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={cn(
                    "p-3 rounded-xl bg-gradient-to-r text-white group-hover:scale-110 transition-transform duration-300",
                    area.gradient,
                  )}
                >
                  {area.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className={cn(
                      "font-bold text-white mb-2 tracking-tight",
                      area.size === "lg" ? "text-2xl" : "text-xl",
                    )}
                  >
                    {area.title}
                  </h3>
                  <p className="text-periwinkle-200 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>

              {/* Content based on card size */}
              {area.size === "lg" && (
                <div className="space-y-4 flex-1">
                  <p className="text-gray-300 text-sm leading-relaxed">{area.content.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.content.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-xs text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {area.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/10 text-white text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {area.size === "md" && (
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {area.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/10 text-white text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Achievements:</h4>
                    <div className="space-y-1">
                      {area.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-yellow-400" />
                          <span className="text-xs text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {area.size === "sm" && (
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-periwinkle2-400">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-semibold">{area.projects} Projects</span>
                  </div>
                  <div className="space-y-1">
                    {area.achievements.slice(0, 2).map((achievement, idx) => (
                      <div key={idx} className="text-xs text-gray-300">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-periwinkle2-400">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-semibold">{area.projects} Projects</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
