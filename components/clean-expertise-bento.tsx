"use client"

import { Card, CardContent } from "@/components/ui/card"
import { IndianDecorative } from "@/components/indian-decorative-elements"
import { Code, Palette, Smartphone, Globe, Zap, Users, CheckCircle, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function CleanExpertiseBento() {
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

      {/* Clean Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {expertiseAreas.map((area, index) => (
          <Card
            key={area.id}
            className={cn(
              "group relative overflow-hidden border border-periwinkle-300 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer",
              getCardClasses(area.size),
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Decorative corner element */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <IndianDecorative size={16} variant="lotus" />
            </div>

            <CardContent
              className={cn(
                "h-full flex flex-col",
                area.size === "large" ? "p-8" : area.size === "medium" ? "p-6" : "p-4",
              )}
            >
              {/* Header */}
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

              {/* Content based on size */}
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

              {/* Footer */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <TrendingUp className="h-4 w-4 text-periwinkle2-400" />
                <span className="text-sm font-semibold text-periwinkle2-400">{area.projects} Projects</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
