import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "JavaScript", level: 94, icon: "🟨" },
        { name: "HTML/CSS", level: 96, icon: "🌐" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 82, icon: "🚀" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "PostgreSQL", level: 78, icon: "🐘" },
        { name: "Firebase", level: 85, icon: "🔥" },
        { name: "Supabase", level: 80, icon: "⚡" },
      ],
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 88, icon: "🎨" },
        { name: "Adobe XD", level: 82, icon: "🎭" },
        { name: "Photoshop", level: 75, icon: "🖼️" },
        { name: "Git/GitHub", level: 90, icon: "📚" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Vercel", level: 92, icon: "▲" },
      ],
    },
    {
      title: "Mobile & Others",
      skills: [
        { name: "React Native", level: 80, icon: "📱" },
        { name: "PWA", level: 85, icon: "📲" },
        { name: "SEO", level: 88, icon: "🔍" },
        { name: "Performance", level: 90, icon: "⚡" },
        { name: "Testing", level: 75, icon: "🧪" },
        { name: "DevOps", level: 70, icon: "⚙️" },
      ],
    },
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

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="border-periwinkle-400 hover:shadow-lg transition-all duration-500 hover:shadow-periwinkle-300/20 relative group"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <IndianDecorative
                    size={25}
                    variant={["lotus", "mandala", "paisley", "diya"][categoryIndex % 4] as any}
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-fluid-xl text-gray-800 font-semibold tracking-tight flex items-center gap-3">
                    {category.title}
                    <IndianDecorative size={18} variant="rangoli" className="opacity-40" />
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-800 text-fluid-sm">{skill.name}</span>
                        </div>
                        <span className="text-periwinkle2-400 font-semibold text-fluid-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-periwinkle-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center" style={{ animationDelay: "0.8s" }}>
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
        </SectionLoader>
      </div>
    </section>
  )
}
