import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageCircle, Palette, Code, Rocket, Users } from "lucide-react"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export function Process() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      icon: <MessageCircle className="h-8 w-8" />,
      description:
        "We start with understanding your business goals, target audience, and project requirements through detailed discussions.",
      duration: "1-2 weeks",
      deliverables: ["Project Brief", "Technical Requirements", "Timeline & Budget", "Wireframes"],
      color: "from-periwinkle2-400 to-periwinkle3-400",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      icon: <Palette className="h-8 w-8" />,
      description:
        "Creating beautiful, user-centered designs that align with your brand and incorporate cultural aesthetics.",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Design", "Interactive Prototypes", "Design System", "Asset Library"],
      color: "from-periwinkle3-400 to-alice_blue-400",
    },
    {
      step: "03",
      title: "Development",
      icon: <Code className="h-8 w-8" />,
      description: "Building your project with modern technologies, ensuring performance, security, and scalability.",
      duration: "3-6 weeks",
      deliverables: ["Frontend Development", "Backend Integration", "Database Setup", "API Development"],
      color: "from-alice_blue-400 to-lavender-400",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      icon: <CheckCircle className="h-8 w-8" />,
      description: "Rigorous testing across devices and browsers, performance optimization, and quality assurance.",
      duration: "1-2 weeks",
      deliverables: ["Quality Testing", "Performance Audit", "SEO Optimization", "Security Review"],
      color: "from-lavender-400 to-periwinkle3-400",
    },
    {
      step: "05",
      title: "Launch & Deployment",
      icon: <Rocket className="h-8 w-8" />,
      description: "Deploying your project to production with proper monitoring, analytics, and backup systems.",
      duration: "1 week",
      deliverables: ["Production Deployment", "Analytics Setup", "Monitoring Tools", "Documentation"],
      color: "from-periwinkle3-400 to-periwinkle2-400",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      icon: <Users className="h-8 w-8" />,
      description: "Ongoing support, updates, and maintenance to ensure your project continues to perform optimally.",
      duration: "Ongoing",
      deliverables: ["Technical Support", "Regular Updates", "Performance Monitoring", "Feature Enhancements"],
      color: "from-periwinkle2-400 to-periwinkle-400",
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 animate-fade-in-left">
        <IndianDecorative size={100} variant="mandala" />
      </div>
      <div className="absolute top-40 right-16 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative size={80} variant="lotus" />
      </div>
      <div className="absolute bottom-40 left-20 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={90} variant="paisley" />
      </div>
      <div className="absolute bottom-10 right-12 animate-fade-in-right" style={{ animationDelay: "0.9s" }}>
        <IndianDecorative size={75} variant="diya" />
      </div>
      <div className="absolute top-1/3 left-5 animate-fade-in-left" style={{ animationDelay: "1.2s" }}>
        <IndianDecorative size={60} variant="elephant" />
      </div>
      <div className="absolute top-2/3 right-5 animate-fade-in-right" style={{ animationDelay: "1.5s" }}>
        <IndianDecorative size={65} variant="vine" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-fade-in-left" style={{ animationDelay: "1.8s" }}>
        <IndianDecorative size={50} variant="hamsa" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLoader delay={1500}>
          <div className="text-center mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <IndianDecorative size={50} variant="rangoli" className="opacity-30" />
            </div>

            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight relative">
              How I Work
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={35} variant="lotus" className="opacity-40" />
              </div>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={35} variant="lotus" className="opacity-40 transform scale-x-[-1]" />
              </div>
            </h2>

            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A structured, collaborative approach that ensures your project is delivered on time, within budget, and
              exceeds expectations.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="border-periwinkle-400 hover:shadow-xl transition-all duration-500 group hover:shadow-periwinkle-300/20 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Step number decoration */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <IndianDecorative
                    size={30}
                    variant={["lotus", "mandala", "paisley", "diya", "rangoli", "lotus"][index % 6] as any}
                  />
                </div>

                <CardContent className="p-8 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                      <div className="text-periwinkle2-400 flex justify-center lg:justify-start group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-6 text-center lg:text-left">
                      <h3 className="text-fluid-2xl font-bold text-gray-800 mb-4 tracking-tight flex items-center justify-center lg:justify-start gap-3">
                        {step.title}
                        <IndianDecorative size={18} variant="diya" className="opacity-40" />
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-fluid-base mb-4">{step.description}</p>
                      <Badge className={`bg-gradient-to-r ${step.color} text-white font-medium`}>
                        Duration: {step.duration}
                      </Badge>
                    </div>

                    {/* Deliverables */}
                    <div className="lg:col-span-4">
                      <h4 className="font-semibold text-gray-800 mb-3 text-fluid-base flex items-center gap-2">
                        <IndianDecorative size={14} variant="rangoli" className="opacity-50" />
                        Key Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="text-gray-600 text-fluid-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-periwinkle2-400 rounded-full"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Connection line for non-last items */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-periwinkle2-400 to-transparent opacity-30" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 relative" style={{ animationDelay: "1.2s" }}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <IndianDecorative size={40} variant="lotus" className="opacity-20" />
            </div>

            <Card className="border-periwinkle-400 bg-gradient-to-r from-periwinkle-900 to-alice_blue-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full bg-repeat"
                  style={{
                    backgroundImage: "url(/images/paisley-pattern.png)",
                    backgroundSize: "100px 100px",
                  }}
                />
              </div>

              <CardContent className="p-8 text-center relative z-10">
                <h3 className="text-fluid-2xl font-bold text-white mb-4 tracking-tight">
                  Ready to Start Your Project?
                </h3>
                <p className="text-periwinkle-200 mb-6 text-fluid-base max-w-2xl mx-auto">
                  Let's discuss your ideas and create something amazing together. Every great project starts with a
                  conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-periwinkle2-400 font-semibold rounded-md hover:bg-periwinkle-100 transition-all duration-300 text-fluid-base"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="tel:+919766082403"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-periwinkle2-400 transition-all duration-300 text-fluid-base"
                  >
                    Call Now
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionLoader>
      </div>
    </section>
  )
}
