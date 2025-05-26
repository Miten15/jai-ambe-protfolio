"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"
import { TrendingUp, Star, Award, Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react"

export function BentoSkills() {
  const mainSkills = [
    { name: "React", level: 95, icon: "⚛️", color: "from-blue-400 to-blue-600", projects: 50 },
    { name: "Next.js", level: 90, icon: "▲", color: "from-gray-700 to-black", projects: 35 },
    { name: "TypeScript", level: 88, icon: "📘", color: "from-blue-500 to-blue-700", projects: 40 },
    { name: "Node.js", level: 85, icon: "🟢", color: "from-green-500 to-green-700", projects: 30 },
  ]

  const achievements = [
    { title: "Projects", value: "150+", icon: "🚀" },
    { title: "Clients", value: "80+", icon: "😊" },
    { title: "Years", value: "6+", icon: "⭐" },
    { title: "Tech Stack", value: "25+", icon: "💻" },
  ]

  const designTools = [
    { name: "Figma", icon: "🎨", level: 88 },
    { name: "Adobe XD", icon: "🎭", level: 82 },
    { name: "Photoshop", icon: "🖼️", level: 75 },
  ]

  const databases = [
    { name: "MongoDB", icon: "🍃", level: 80 },
    { name: "PostgreSQL", icon: "🐘", level: 78 },
    { name: "Firebase", icon: "🔥", level: 85 },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-periwinkle-900 to-alice_blue-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-16 left-8 animate-fade-in-left">
        <IndianDecorative size={90} variant="lotus" />
      </div>
      <div className="absolute top-32 right-12 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative size={75} variant="mandala" />
      </div>
      <div className="absolute bottom-20 left-16 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={80} variant="rangoli" />
      </div>
      <div className="absolute bottom-16 right-8 animate-fade-in-right" style={{ animationDelay: "0.9s" }}>
        <IndianDecorative size={70} variant="paisley" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLoader delay={1000}>
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <IndianDecorative size={25} variant="diya" className="opacity-40" />
              <IndianDecorative size={30} variant="lotus" className="opacity-50" />
              <IndianDecorative size={25} variant="diya" className="opacity-40" />
            </div>

            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight relative">
              Skills & Expertise
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={30} variant="mandala" className="opacity-40" />
              </div>
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={30} variant="mandala" className="opacity-40 transform scale-x-[-1]" />
              </div>
            </h2>

            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and design principles, constantly evolving with industry
              trends.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {/* Main Skills - Large Cards */}
            {mainSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className={`${
                  index < 2 ? "md:col-span-2 lg:col-span-3" : "md:col-span-2 lg:col-span-3"
                } border-periwinkle-400 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <IndianDecorative size={20} variant="lotus" />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{skill.name}</h3>
                      <p className="text-periwinkle-200 text-sm">{skill.projects} projects</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-periwinkle2-400">{skill.level}%</div>
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-300 text-xs flex items-center gap-1 mt-1"
                      >
                        <TrendingUp className="h-3 w-3" />
                        Expert
                      </Badge>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-3 bg-periwinkle-800" />
                </CardContent>
              </Card>
            ))}

            {/* Achievements Grid */}
            <Card className="md:col-span-2 lg:col-span-2 border-periwinkle-400 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-periwinkle2-400" />
                  <h3 className="text-lg font-bold text-white">Achievements</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <div className="text-xl font-bold text-white">{achievement.value}</div>
                      <div className="text-periwinkle-200 text-xs">{achievement.title}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Design Tools */}
            <Card className="md:col-span-2 lg:col-span-2 border-periwinkle-400 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="h-5 w-5 text-periwinkle2-400" />
                  <h3 className="text-lg font-bold text-white">Design Tools</h3>
                </div>
                <div className="space-y-3">
                  {designTools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-lg">{tool.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-medium text-sm">{tool.name}</span>
                          <span className="text-periwinkle2-400 text-sm">{tool.level}%</span>
                        </div>
                        <Progress value={tool.level} className="h-1.5 bg-periwinkle-800" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="md:col-span-2 lg:col-span-2 border-periwinkle-400 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="h-5 w-5 text-periwinkle2-400" />
                  <h3 className="text-lg font-bold text-white">Databases</h3>
                </div>
                <div className="space-y-3">
                  {databases.map((db, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-lg">{db.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-medium text-sm">{db.name}</span>
                          <span className="text-periwinkle2-400 text-sm">{db.level}%</span>
                        </div>
                        <Progress value={db.level} className="h-1.5 bg-periwinkle-800" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card className="md:col-span-4 lg:col-span-3 border-periwinkle-400 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-periwinkle2-400" />
                  <h3 className="text-lg font-bold text-white">Specializations</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "Frontend", icon: <Code className="h-5 w-5" />, desc: "React, Next.js" },
                    { name: "Mobile", icon: <Smartphone className="h-5 w-5" />, desc: "React Native" },
                    { name: "Full Stack", icon: <Globe className="h-5 w-5" />, desc: "End-to-end" },
                    { name: "Performance", icon: <Zap className="h-5 w-5" />, desc: "Optimization" },
                    { name: "UI/UX", icon: <Palette className="h-5 w-5" />, desc: "Design Systems" },
                    { name: "DevOps", icon: <Database className="h-5 w-5" />, desc: "Deployment" },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      className="text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="text-periwinkle2-400 mb-2 flex justify-center">{spec.icon}</div>
                      <div className="text-white font-medium text-sm">{spec.name}</div>
                      <div className="text-periwinkle-200 text-xs">{spec.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience Summary */}
            <Card className="md:col-span-4 lg:col-span-3 border-periwinkle-400 bg-gradient-to-br from-periwinkle2-400/20 to-periwinkle3-400/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-2">6+ Years Experience</h3>
                  <p className="text-periwinkle-200 text-sm mb-4">
                    Crafting digital experiences with modern technologies and traditional design wisdom
                  </p>
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-white font-bold">150+</div>
                      <div className="text-periwinkle-200">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">80+</div>
                      <div className="text-periwinkle-200">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">25+</div>
                      <div className="text-periwinkle-200">Technologies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionLoader>
      </div>
    </section>
  )
}
