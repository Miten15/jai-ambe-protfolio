import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with Indian design elements, featuring product catalogs, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Next.js", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Cultural Heritage App",
      description:
        "Mobile-first web application showcasing Indian cultural heritage with interactive maps and multimedia content.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Maps API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Management System",
      description:
        "Complete restaurant management solution with online ordering, inventory tracking, and customer management.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Custom portfolio website for an artist featuring gallery, blog, and contact management with CMS integration.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Gatsby", "Contentful", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-periwinkle-900 to-alice_blue-800 relative overflow-hidden"
    >
      {/* Decorative Indian Elements */}
      <div className="absolute top-10 left-10 animate-fade-in-left">
        <IndianDecorative size={80} variant="lotus" />
      </div>
      <div className="absolute top-32 right-20 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
        <IndianDecorative size={60} variant="mandala" />
      </div>
      <div className="absolute bottom-32 left-20 animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
        <IndianDecorative size={70} variant="paisley" />
      </div>
      <div className="absolute bottom-10 right-10 animate-fade-in-right" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={65} variant="rangoli" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 animate-pulse" style={{ animationDelay: "1s" }}>
        <IndianDecorative size={40} variant="diya" className="opacity-10" />
      </div>
      <div className="absolute top-3/4 right-1/4 animate-pulse" style={{ animationDelay: "1.5s" }}>
        <IndianDecorative size={45} variant="lotus" className="opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLoader delay={1000}>
          <div className="text-center mb-16 relative">
            {/* Header decorations */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <IndianDecorative size={50} variant="mandala" className="opacity-30" />
            </div>

            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight relative">
              Featured Projects
              {/* Side decorations */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <IndianDecorative size={35} variant="paisley" className="opacity-40" />
              </div>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <IndianDecorative size={35} variant="paisley" className="opacity-40 transform scale-x-[-1]" />
              </div>
            </h2>

            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, combining modern technology with thoughtful design to create meaningful
              digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-periwinkle-400 hover:shadow-xl transition-all duration-500 group hover:shadow-periwinkle-300/20 hover:-translate-y-2 relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card decorations */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <IndianDecorative size={25} variant={index % 2 === 0 ? "lotus" : "mandala"} />
                </div>

                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-periwinkle2-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image overlay decoration */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                    <IndianDecorative size={30} variant="diya" className="text-white" />
                  </div>
                </div>

                <CardHeader className="relative">
                  <CardTitle className="text-fluid-xl text-gray-800 font-semibold tracking-tight flex items-center gap-3">
                    {project.title}
                    <IndianDecorative size={20} variant="rangoli" className="opacity-30" />
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 relative">
                  <p className="text-gray-600 leading-relaxed text-fluid-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-periwinkle-700 text-periwinkle-100 font-medium text-fluid-xs relative"
                      >
                        {tech}
                        {techIndex === 0 && (
                          <div className="absolute -top-1 -right-1">
                            <IndianDecorative size={12} variant="lotus" className="opacity-50" />
                          </div>
                        )}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="bg-periwinkle2-400 hover:bg-periwinkle2-300 font-medium relative group/btn"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                      <div className="absolute -top-1 -right-1 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                        <IndianDecorative size={10} variant="diya" />
                      </div>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-periwinkle-400 text-periwinkle2-300 hover:bg-periwinkle-800 font-medium"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>

                  {/* Bottom corner decoration */}
                  <div className="absolute bottom-2 right-2 opacity-10">
                    <IndianDecorative size={20} variant="paisley" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionLoader>
      </div>
    </section>
  )
}
