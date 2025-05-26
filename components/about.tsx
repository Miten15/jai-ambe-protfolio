import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"
import { SectionLoader } from "@/components/section-loader"

export function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern React, Next.js, and TypeScript development with clean, maintainable code.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with attention to cultural aesthetics.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile First",
      description: "Responsive designs that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full Stack",
      description: "End-to-end development from database design to user interface implementation.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionLoader delay={500}>
          <div className="text-center mb-16">
            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight">
              About Me
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who believes in blending modern technology with traditional design principles.
              My work is inspired by the rich cultural heritage of India, bringing warmth and vibrancy to digital
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="border-periwinkle-400 hover:shadow-lg transition-all duration-500 hover:shadow-periwinkle-300/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="text-periwinkle2-400 mb-4 flex justify-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-fluid-xl font-semibold mb-3 text-gray-800 tracking-tight">{skill.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-fluid-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionLoader>
      </div>
    </section>
  )
}
