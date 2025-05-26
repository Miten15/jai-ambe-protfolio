"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"
import { TrendingUp, Code, Palette, Database, Smartphone } from "lucide-react"

export function EnhancedSkills() {
  const [selectedCategory, setSelectedCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-periwinkle2-400 to-periwinkle3-400",
      skills: [
        { name: "React", level: 95, experience: "4+ years", projects: 50, icon: "⚛️", trend: "+5%" },
        { name: "Next.js", level: 90, experience: "3+ years", projects: 35, icon: "▲", trend: "+8%" },
        { name: "TypeScript", level: 88, experience: "3+ years", projects: 40, icon: "📘", trend: "+12%" },
        { name: "Tailwind CSS", level: 92, experience: "2+ years", projects: 45, icon: "🎨", trend: "+6%" },
        { name: "JavaScript", level: 94, experience: "5+ years", projects: 60, icon: "🟨", trend: "+3%" },
        { name: "HTML/CSS", level: 96, experience: "6+ years", projects: 65, icon: "🌐", trend: "+2%" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      color: "from-periwinkle3-400 to-alice_blue-400",
      skills: [
        { name: "Node.js", level: 85, experience: "3+ years", projects: 30, icon: "🟢", trend: "+10%" },
        { name: "Express.js", level: 82, experience: "3+ years", projects: 25, icon: "🚀", trend: "+7%" },
        { name: "MongoDB", level: 80, experience: "2+ years", projects: 20, icon: "🍃", trend: "+15%" },
        { name: "PostgreSQL", level: 78, experience: "2+ years", projects: 18, icon: "🐘", trend: "+9%" },
        { name: "Firebase", level: 85, experience: "2+ years", projects: 22, icon: "🔥", trend: "+11%" },
        { name: "Supabase", level: 80, experience: "1+ years", projects: 15, icon: "⚡", trend: "+20%" },
      ],
    },
    design: {
      title: "Design & Tools",
      icon: <Palette className="h-6 w-6" />,
      color: "from-alice_blue-400 to-lavender-400",
      skills: [
        { name: "Figma", level: 88, experience: "3+ years", projects: 40, icon: "🎨", trend: "+8%" },
        { name: "Adobe XD", level: 82, experience: "2+ years", projects: 25, icon: "🎭", trend: "+5%" },
        { name: "Photoshop", level: 75, experience: "4+ years", projects: 30, icon: "🖼️", trend: "+3%" },
        { name: "Git/GitHub", level: 90, experience: "4+ years", projects: 55, icon: "📚", trend: "+4%" },
        { name: "VS Code", level: 95, experience: "5+ years", projects: 65, icon: "💻", trend: "+2%" },
        { name: "Vercel", level: 92, experience: "2+ years", projects: 35, icon: "▲", trend: "+12%" },
      ],
    },
    mobile: {
      title: "Mobile & Others",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-lavender-400 to-periwinkle2-400",
      skills: [
        { name: "React Native", level: 80, experience: "2+ years", projects: 15, icon: "📱", trend: "+18%" },
        { name: "PWA", level: 85, experience: "2+ years", projects: 20, icon: "📲", trend: "+14%" },
        { name: "SEO", level: 88, experience: "3+ years", projects: 35, icon: "🔍", trend: "+6%" },
        { name: "Performance", level: 90, experience: "3+ years", projects: 40, icon: "⚡", trend: "+8%" },
        { name: "Testing", level: 75, experience: "2+ years", projects: 25, icon: "🧪", trend: "+16%" },
        { name: "DevOps", level: 70, experience: "1+ years", projects: 12, icon: "⚙️", trend: "+25%" },
      ],
    },
  }

  const achievements = [
    { title: "Projects Completed", value: "150+", icon: "🚀" },
    { title: "Happy Clients", value: "80+", icon: "😊" },
    { title: "Years Experience", value: "6+", icon: "⭐" },
    { title: "Technologies Mastered", value: "25+", icon: "💻" },
  ]

  const certifications = [
    { name: "React Developer Certification", issuer: "Meta", year: "2023" },
    { name: "Next.js Certification", issuer: "Vercel", year: "2023" },
    { name: "Google Analytics Certified", issuer: "Google", year: "2022" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2022" },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-periwinkle-900 to-alice_blue-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-16 left-8 animate-fade-in-left">
        <IndianDecorative size={90} variant="peacock" />
      </div>
      <div className="absolute top-32 right-12 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative size={75} variant="elephant" />
      </div>
      <div className="absolute bottom-20 left-16 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={80} variant="kalash" />
      </div>
      <div className="absolute bottom-16 right-8 animate-fade-in-right" style={{ animationDelay: "0.9s" }}>
        <IndianDecorative size={70} variant="hamsa" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <IndianDecorative size={60} variant="floral" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLoader delay={1000}>
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <IndianDecorative size={25} variant="om" className="opacity-40" />
              <IndianDecorative size={30} variant="sun" className="opacity-50" />
              <IndianDecorative size={25} variant="om" className="opacity-40" />
            </div>

            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight relative">
              Skills & Expertise
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={30} variant="vine" className="opacity-40" />
              </div>
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={30} variant="vine" className="opacity-40 transform scale-x-[-1]" />
              </div>
            </h2>

            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and design principles, constantly evolving with industry
              trends.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-periwinkle-400 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-fluid-2xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-periwinkle-200 text-fluid-sm">{achievement.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/10 backdrop-blur-sm">
              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-2 data-[state=active]:bg-periwinkle2-400 data-[state=active]:text-white"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.title.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                <Card className="border-periwinkle-400 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle
                      className={`text-fluid-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent flex items-center gap-3`}
                    >
                      {category.icon}
                      {category.title}
                      <IndianDecorative size={20} variant="lotus" className="opacity-40" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="group p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-periwinkle-400/20"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                              </span>
                              <div>
                                <div className="font-semibold text-white text-fluid-base flex items-center gap-2">
                                  {skill.name}
                                  <Badge
                                    variant="secondary"
                                    className="bg-green-500/20 text-green-300 text-xs flex items-center gap-1"
                                  >
                                    <TrendingUp className="h-3 w-3" />
                                    {skill.trend}
                                  </Badge>
                                </div>
                                <div className="text-periwinkle-200 text-fluid-xs">{skill.experience}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-periwinkle2-400 font-bold text-fluid-sm">{skill.level}%</div>
                              <div className="text-periwinkle-300 text-fluid-xs">{skill.projects} projects</div>
                            </div>
                          </div>
                          <Progress
                            value={skill.level}
                            className="h-2 bg-periwinkle-800"
                            style={{
                              animationDelay: `${skillIndex * 0.1}s`,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Certifications - Original Simple Design */}
          <div className="text-center mt-16" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-fluid-2xl font-bold mb-8 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent tracking-tight flex items-center justify-center gap-3">
              <IndianDecorative size={20} variant="lotus" className="opacity-50" />
              Certifications & Achievements
              <IndianDecorative size={20} variant="lotus" className="opacity-50 transform scale-x-[-1]" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border-periwinkle-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <IndianDecorative size={15} variant="diya" />
                  </div>

                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-gray-800 mb-2 text-fluid-sm">{cert.name}</h4>
                    <p className="text-periwinkle2-400 text-fluid-xs font-medium">{cert.issuer}</p>
                    <Badge variant="secondary" className="mt-2 bg-periwinkle-700 text-periwinkle-100 text-xs">
                      {cert.year}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Comparison Chart */}
          <div className="mt-16" style={{ animationDelay: "1s" }}>
            <Card className="border-periwinkle-400 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-fluid-xl text-white font-semibold tracking-tight flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-periwinkle2-400" />
                  Skill Proficiency Overview
                  <IndianDecorative size={18} variant="rangoli" className="opacity-40" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Frontend", "Backend", "Design", "Mobile"].map((category, index) => {
                    const avgLevel = Math.round(
                      skillCategories[category.toLowerCase() as keyof typeof skillCategories].skills.reduce(
                        (acc, skill) => acc + skill.level,
                        0,
                      ) / skillCategories[category.toLowerCase() as keyof typeof skillCategories].skills.length,
                    )
                    return (
                      <div key={category} className="flex items-center gap-4">
                        <div className="w-20 text-white font-medium text-fluid-sm">{category}</div>
                        <div className="flex-1">
                          <Progress
                            value={avgLevel}
                            className="h-3 bg-periwinkle-800"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          />
                        </div>
                        <div className="w-12 text-periwinkle2-400 font-bold text-fluid-sm">{avgLevel}%</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionLoader>
      </div>
    </section>
  )
}
