"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Palette, Code, CheckCircle, Rocket, Users, Clock, Star } from "lucide-react"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"
import { EvervaultCard } from "@/components/evervault-card"

export function EnhancedProcess() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null)

  const processPhases = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Discovery & Planning",
      icon: <MessageCircle className="h-8 w-8" />,
      description: "Understanding your vision and laying the foundation",
      duration: "1-2 weeks",
      color: "from-periwinkle2-400 to-periwinkle3-400",
      indianTheme: {
        title: "संवाद और योजना",
        description:
          "Like the ancient tradition of Guru-Shishya Parampara, we begin with deep listening and understanding your vision.",
        culturalElements: ["संवाद (Dialogue)", "श्रवण (Listening)", "योजना (Planning)"],
      },
      details: {
        overview:
          "We start with understanding your business goals, target audience, and project requirements through detailed discussions and research.",
        activities: [
          "Initial consultation and requirement gathering",
          "Market research and competitor analysis",
          "Technical feasibility assessment",
          "Project scope definition and timeline planning",
          "Budget estimation and resource allocation",
        ],
        deliverables: [
          "Detailed project brief and requirements document",
          "Technical architecture and technology stack recommendation",
          "Project timeline with milestones",
          "Budget breakdown and payment schedule",
          "Initial wireframes and user flow diagrams",
        ],
        tools: ["Figma", "Notion", "Google Meet", "Miro"],
        outcome:
          "A clear roadmap and shared understanding of the project goals, ensuring we're aligned before moving forward.",
      },
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Design & Prototyping",
      icon: <Palette className="h-8 w-8" />,
      description: "Creating beautiful, user-centered designs",
      duration: "2-3 weeks",
      color: "from-periwinkle3-400 to-alice_blue-400",
      indianTheme: {
        title: "कला और रूपांकन",
        description:
          "Inspired by Rangoli patterns and architectural marvels, we craft designs that blend tradition with modernity.",
        culturalElements: ["कला (Art)", "रंगोली (Rangoli)", "सुंदरता (Beauty)"],
      },
      details: {
        overview:
          "Creating beautiful, user-centered designs that align with your brand and incorporate cultural aesthetics while ensuring optimal user experience.",
        activities: [
          "Brand analysis and design system creation",
          "User interface design and visual concepts",
          "Interactive prototype development",
          "User experience optimization",
          "Design review and iteration cycles",
        ],
        deliverables: [
          "Complete UI/UX design system",
          "High-fidelity mockups for all pages",
          "Interactive clickable prototypes",
          "Design specifications and style guide",
          "Asset library and icon set",
        ],
        tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
        outcome: "Pixel-perfect designs that capture your brand essence and provide an exceptional user experience.",
      },
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Development",
      icon: <Code className="h-8 w-8" />,
      description: "Building with modern technologies",
      duration: "3-6 weeks",
      color: "from-alice_blue-400 to-lavender-400",
      indianTheme: {
        title: "निर्माण और विकास",
        description:
          "Like master craftsmen who built the Taj Mahal, we approach development with precision and dedication.",
        culturalElements: ["निर्माण (Construction)", "कोड (Code)", "तकनीक (Technology)"],
      },
      details: {
        overview:
          "Building your project with modern technologies, ensuring performance, security, and scalability while maintaining code quality and best practices.",
        activities: [
          "Frontend development with React/Next.js",
          "Backend API development and database setup",
          "Third-party integrations and services",
          "Responsive design implementation",
          "Performance optimization and security measures",
        ],
        deliverables: [
          "Fully functional frontend application",
          "Backend API and database implementation",
          "Admin dashboard and content management",
          "Mobile-responsive design across all devices",
          "Integration with payment gateways and services",
        ],
        tools: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
        outcome: "A robust, scalable application built with modern technologies and industry best practices.",
      },
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Testing & Optimization",
      icon: <CheckCircle className="h-8 w-8" />,
      description: "Ensuring quality and performance",
      duration: "1-2 weeks",
      color: "from-lavender-400 to-periwinkle3-400",
      indianTheme: {
        title: "परीक्षण और अनुकूलन",
        description: "Following ancient practices of Pariksha, we rigorously test every aspect to ensure perfection.",
        culturalElements: ["परीक्षा (Testing)", "गुणवत्ता (Quality)", "सुधार (Improvement)"],
      },
      details: {
        overview:
          "Rigorous testing across devices and browsers, performance optimization, and quality assurance to ensure your project meets the highest standards.",
        activities: [
          "Cross-browser and device compatibility testing",
          "Performance auditing and optimization",
          "SEO optimization and accessibility compliance",
          "Security testing and vulnerability assessment",
          "User acceptance testing and feedback incorporation",
        ],
        deliverables: [
          "Comprehensive testing report",
          "Performance optimization results",
          "SEO audit and implementation",
          "Security assessment and fixes",
          "Bug fixes and final adjustments",
        ],
        tools: ["Lighthouse", "GTmetrix", "BrowserStack", "Jest", "Cypress"],
        outcome:
          "A thoroughly tested, optimized application that performs excellently across all platforms and devices.",
      },
    },
    {
      id: 5,
      phase: "Phase 5",
      title: "Launch & Deployment",
      icon: <Rocket className="h-8 w-8" />,
      description: "Going live with confidence",
      duration: "1 week",
      color: "from-periwinkle3-400 to-periwinkle2-400",
      indianTheme: {
        title: "प्रक्षेपण और स्थापना",
        description:
          "Like the auspicious Griha Pravesh ceremony, we launch your project with careful planning and positive energy.",
        culturalElements: ["प्रक्षेपण (Launch)", "शुभारंभ (Beginning)", "स्थापना (Establishment)"],
      },
      details: {
        overview:
          "Deploying your project to production with proper monitoring, analytics, and backup systems to ensure a smooth launch and ongoing reliability.",
        activities: [
          "Production environment setup and configuration",
          "Domain setup and SSL certificate installation",
          "Analytics and monitoring tools implementation",
          "Backup systems and disaster recovery setup",
          "Go-live coordination and launch support",
        ],
        deliverables: [
          "Live production website/application",
          "Analytics dashboard and tracking setup",
          "Monitoring and alerting systems",
          "Backup and recovery procedures",
          "Launch documentation and handover",
        ],
        tools: ["Vercel", "AWS", "Google Analytics", "Sentry", "Cloudflare"],
        outcome: "Your project is live, monitored, and ready to serve your users with confidence and reliability.",
      },
    },
    {
      id: 6,
      phase: "Phase 6",
      title: "Support & Maintenance",
      icon: <Users className="h-8 w-8" />,
      description: "Ongoing partnership and growth",
      duration: "Ongoing",
      color: "from-periwinkle2-400 to-periwinkle-400",
      indianTheme: {
        title: "सहायता और रखरखाव",
        description: "Like the eternal flame in temples, our support continues indefinitely following Seva principles.",
        culturalElements: ["सेवा (Service)", "सहायता (Support)", "रखरखाव (Maintenance)"],
      },
      details: {
        overview:
          "Ongoing support, updates, and maintenance to ensure your project continues to perform optimally and evolves with your business needs.",
        activities: [
          "Regular maintenance and security updates",
          "Performance monitoring and optimization",
          "Feature enhancements and new functionality",
          "Technical support and troubleshooting",
          "Analytics review and improvement recommendations",
        ],
        deliverables: [
          "Monthly maintenance reports",
          "Security updates and patches",
          "Performance optimization reports",
          "Feature enhancement proposals",
          "24/7 technical support access",
        ],
        tools: ["Monitoring dashboards", "Support ticketing", "Update management", "Analytics tools"],
        outcome:
          "Peace of mind knowing your project is continuously maintained, secure, and evolving with your business.",
      },
    },
  ]

  return (
    <section
      id="process"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-periwinkle-900 to-alice_blue-800 relative overflow-hidden"
    >
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
              A structured, collaborative approach rooted in Indian wisdom and modern technology, ensuring your project
              is delivered with excellence and cultural sensitivity.
            </p>
          </div>

          {/* Process Grid */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(172, 181, 247, 0.6)" />
                  <stop offset="100%" stopColor="rgba(185, 200, 254, 0.6)" />
                </linearGradient>
              </defs>

              {/* Horizontal connections */}
              <path
                d="M 150 100 L 450 100"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
              <path
                d="M 450 100 L 750 100"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <path
                d="M 150 300 L 450 300"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <path
                d="M 450 300 L 750 300"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />

              {/* Vertical connections */}
              <path
                d="M 750 100 L 750 300"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
              />
              <path
                d="M 450 300 L 150 300"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
                style={{ animationDelay: "2.5s" }}
              />
            </svg>

            {/* Process Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative" style={{ zIndex: 2 }}>
              {processPhases.map((phase, index) => (
                <div key={phase.id} className="relative" style={{ animationDelay: `${index * 0.2}s` }}>
                  <EvervaultCard
                    className="h-64"
                    onClick={() => setSelectedPhase(phase.id)}
                    indianTheme={phase.indianTheme}
                    phaseTitle={phase.title}
                  >
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="text-periwinkle2-400 mb-4">{phase.icon}</div>

                      {/* Phase Title */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{phase.phase}</h3>

                      {/* Duration Badge */}
                      <Badge className={`bg-gradient-to-r ${phase.color} text-white border-0`}>{phase.duration}</Badge>
                    </div>
                  </EvervaultCard>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 relative" style={{ animationDelay: "1.2s" }}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <IndianDecorative size={40} variant="lotus" className="opacity-20" />
            </div>

            <div className="bg-gradient-to-r from-periwinkle-900 to-alice_blue-800 rounded-lg p-8 border border-periwinkle-400 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full bg-repeat"
                  style={{
                    backgroundImage: "url(/images/paisley-pattern.png)",
                    backgroundSize: "100px 100px",
                  }}
                />
              </div>

              <div className="relative z-10 text-center">
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
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-periwinkle2-400 transition-all duration-300 text-fluid-base"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Detail Modal */}
          <Dialog open={selectedPhase !== null} onOpenChange={() => setSelectedPhase(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-periwinkle-400">
              {selectedPhase && (
                <>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-4 text-2xl text-gray-800">
                      <div className="text-periwinkle2-400">
                        {processPhases.find((p) => p.id === selectedPhase)?.icon}
                      </div>
                      {processPhases.find((p) => p.id === selectedPhase)?.title}
                      <Badge
                        className={`bg-gradient-to-r ${processPhases.find((p) => p.id === selectedPhase)?.color} text-white`}
                      >
                        {processPhases.find((p) => p.id === selectedPhase)?.duration}
                      </Badge>
                    </DialogTitle>
                  </DialogHeader>

                  {(() => {
                    const phase = processPhases.find((p) => p.id === selectedPhase)
                    if (!phase) return null

                    return (
                      <div className="space-y-6 text-gray-600">
                        {/* Overview */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Star className="h-5 w-5 text-periwinkle2-400" />
                            Overview
                          </h4>
                          <p className="leading-relaxed">{phase.details.overview}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Activities */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Activities</h4>
                            <ul className="space-y-2">
                              {phase.details.activities.map((activity, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-periwinkle2-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm">{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Deliverables</h4>
                            <ul className="space-y-2">
                              {phase.details.deliverables.map((deliverable, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tools & Outcome */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Tools & Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {phase.details.tools.map((tool, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="bg-periwinkle-700 text-periwinkle-100"
                                >
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                              <Clock className="h-5 w-5 text-periwinkle2-400" />
                              Expected Outcome
                            </h4>
                            <p className="text-sm leading-relaxed">{phase.details.outcome}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })()}
                </>
              )}
            </DialogContent>
          </Dialog>
        </SectionLoader>
      </div>
    </section>
  )
}
