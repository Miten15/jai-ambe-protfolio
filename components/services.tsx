"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, ShoppingCart, Search, Zap, Users } from "lucide-react"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"
import { ProjectInquiryModal } from "@/components/project-inquiry-modal"

export function Services() {
  const [selectedService, setSelectedService] = useState<{ title: string; price: string } | null>(null)

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Cross-browser Compatible"],
      price: "Starting from ₹25,000",
      popular: false,
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that blend modern design principles with cultural aesthetics.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting from ₹15,000",
      popular: false,
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and admin dashboards.",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
      price: "Starting from ₹50,000",
      popular: true,
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android.",
      features: ["Cross-platform", "Native Performance", "Push Notifications", "Offline Support"],
      price: "Starting from ₹75,000",
      popular: false,
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines with technical SEO.",
      features: ["Technical SEO", "Content Optimization", "Performance Audit", "Analytics Setup"],
      price: "Starting from ₹10,000",
      popular: false,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Speed up your existing website and improve user experience with performance audits.",
      features: ["Speed Optimization", "Core Web Vitals", "Image Optimization", "Caching Strategy"],
      price: "Starting from ₹12,000",
      popular: false,
    },
  ]

  const handleGetStarted = (service: { title: string; price: string }) => {
    setSelectedService(service)
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 animate-fade-in-left">
        <IndianDecorative size={100} variant="mandala" />
      </div>
      <div className="absolute top-32 right-16 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative size={80} variant="lotus" />
      </div>
      <div className="absolute bottom-32 left-20 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={90} variant="paisley" />
      </div>
      <div className="absolute bottom-16 right-12 animate-fade-in-right" style={{ animationDelay: "0.9s" }}>
        <IndianDecorative size={75} variant="diya" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLoader delay={500}>
          <div className="text-center mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <IndianDecorative size={50} variant="rangoli" className="opacity-30" />
            </div>

            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight relative">
              Services & Solutions
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={35} variant="lotus" className="opacity-40" />
              </div>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={35} variant="lotus" className="opacity-40 transform scale-x-[-1]" />
              </div>
            </h2>

            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs, combining cutting-edge technology with
              thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-periwinkle-400 hover:shadow-xl transition-all duration-500 group hover:shadow-periwinkle-300/20 hover:-translate-y-2 ${
                  service.popular ? "ring-2 ring-periwinkle2-400 ring-opacity-50" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 text-white font-semibold">
                      Popular
                    </Badge>
                  </div>
                )}

                <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <IndianDecorative size={25} variant="mandala" />
                </div>

                <CardHeader className="relative">
                  <div className="text-periwinkle2-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-fluid-xl text-gray-800 font-semibold tracking-tight text-center flex items-center justify-center gap-2">
                    {service.title}
                    <IndianDecorative size={16} variant="diya" className="opacity-30" />
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 relative">
                  <p className="text-gray-600 leading-relaxed text-fluid-sm text-center">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-fluid-sm flex items-center gap-2">
                      <IndianDecorative size={12} variant="lotus" className="opacity-50" />
                      Features Included:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 text-fluid-xs flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-periwinkle2-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-periwinkle-300">
                    <p className="text-fluid-lg font-bold text-periwinkle2-400 text-center mb-4">{service.price}</p>
                    <Button
                      className="w-full bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white font-semibold transition-all duration-300 relative group/btn"
                      onClick={() => handleGetStarted({ title: service.title, price: service.price })}
                    >
                      Get Started
                      <div className="absolute -top-1 -right-1 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                        <IndianDecorative size={10} variant="diya" />
                      </div>
                    </Button>
                  </div>

                  <div className="absolute bottom-2 right-2 opacity-10">
                    <IndianDecorative size={20} variant="paisley" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16" style={{ animationDelay: "1.2s" }}>
            <p className="text-gray-600 mb-6 text-fluid-base">
              Need something custom? Let's discuss your specific requirements.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-periwinkle-400 text-periwinkle2-300 hover:bg-periwinkle-800 px-8 py-3 text-fluid-lg font-medium transition-all duration-300"
              onClick={() => setSelectedService({ title: "Custom Solution", price: "Custom Quote" })}
            >
              <Users className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </SectionLoader>
      </div>

      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        serviceTitle={selectedService?.title}
        servicePrice={selectedService?.price}
      />
    </section>
  )
}
