"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases like MongoDB and PostgreSQL. I also work with design tools like Figma and have experience with cloud platforms like Vercel and AWS.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 8-12 weeks. E-commerce platforms typically require 6-10 weeks. I provide detailed timelines during the planning phase.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes! I offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. Support packages are available monthly or annually based on your needs.",
    },
    {
      question: "Can you work with existing designs or do you create new ones?",
      answer:
        "I can work both ways! If you have existing designs, I can implement them faithfully. If you need design services, I create custom UI/UX designs that blend modern aesthetics with cultural elements, ensuring your brand stands out.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Pricing depends on project scope, complexity, and timeline. I offer both fixed-price packages for standard projects and hourly rates for custom work. All projects include a detailed quote after the initial consultation.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "I work with clients globally and am comfortable with different time zones. Communication is primarily through email, video calls, and project management tools to ensure smooth collaboration regardless of location.",
    },
    {
      question: "What makes your approach unique?",
      answer:
        "My unique approach combines cutting-edge technology with traditional Indian design aesthetics. I focus on creating culturally rich, modern digital experiences that resonate with diverse audiences while maintaining high performance and usability standards.",
    },
    {
      question: "Do you provide SEO and performance optimization?",
      answer:
        "Yes! All my projects include basic SEO optimization, performance tuning, and accessibility features. I also offer dedicated SEO audits and performance optimization services for existing websites.",
    },
    {
      question: "Can you help with e-commerce projects?",
      answer:
        "Definitely! I have extensive experience building e-commerce platforms with features like payment integration, inventory management, order tracking, and admin dashboards. I work with platforms like Shopify, WooCommerce, or custom solutions.",
    },
    {
      question: "What if I need changes during development?",
      answer:
        "I understand that requirements can evolve. I include a reasonable number of revisions in all projects and maintain open communication throughout development. Major scope changes are discussed and quoted separately to ensure transparency.",
    },
  ]

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-periwinkle-900 to-alice_blue-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-16 left-8 animate-fade-in-left">
        <IndianDecorative size={90} variant="mandala" />
      </div>
      <div className="absolute top-32 right-12 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative size={75} variant="lotus" />
      </div>
      <div className="absolute bottom-20 left-16 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={80} variant="paisley" />
      </div>
      <div className="absolute bottom-16 right-8 animate-fade-in-right" style={{ animationDelay: "0.9s" }}>
        <IndianDecorative size={70} variant="diya" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionLoader delay={2000}>
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <IndianDecorative size={25} variant="diya" className="opacity-40" />
              <IndianDecorative size={30} variant="lotus" className="opacity-50" />
              <IndianDecorative size={25} variant="diya" className="opacity-40" />
            </div>

            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight relative">
              Frequently Asked Questions
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={30} variant="rangoli" className="opacity-40" />
              </div>
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={30} variant="rangoli" className="opacity-40 transform scale-x-[-1]" />
              </div>
            </h2>

            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about my services, process, and approach. Can't find what you're looking for? Feel free
              to reach out!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-periwinkle-400 hover:shadow-lg transition-all duration-300 hover:shadow-periwinkle-300/20 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <IndianDecorative
                    size={20}
                    variant={["lotus", "mandala", "paisley", "diya", "rangoli"][index % 5] as any}
                  />
                </div>

                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full p-6 text-left justify-between hover:bg-periwinkle-800/10 transition-colors duration-300"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 text-white font-bold text-sm flex items-center justify-center">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-gray-800 text-fluid-base text-left">{faq.question}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianDecorative size={12} variant="diya" className="opacity-30" />
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-periwinkle2-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-periwinkle2-400" />
                      )}
                    </div>
                  </Button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-6 animate-fade-in-up">
                      <div className="pl-12 border-l-2 border-periwinkle-300 relative">
                        <div className="absolute -left-1 top-0 w-2 h-2 bg-periwinkle2-400 rounded-full"></div>
                        <p className="text-gray-600 leading-relaxed text-fluid-sm">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 relative" style={{ animationDelay: "1s" }}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <IndianDecorative size={40} variant="lotus" className="opacity-20" />
            </div>

            <Card className="border-periwinkle-400 bg-gradient-to-r from-periwinkle2-400/10 to-periwinkle3-400/10 relative">
              <div className="absolute top-2 right-2 opacity-20">
                <IndianDecorative size={25} variant="mandala" />
              </div>

              <CardContent className="p-8 text-center">
                <h3 className="text-fluid-2xl font-bold text-gray-800 mb-4 tracking-tight flex items-center justify-center gap-3">
                  <MessageCircle className="h-6 w-6 text-periwinkle2-400" />
                  Still Have Questions?
                  <IndianDecorative size={18} variant="diya" className="opacity-40" />
                </h3>
                <p className="text-gray-600 mb-6 text-fluid-base max-w-2xl mx-auto">
                  I'm here to help! Feel free to reach out with any questions about your project or my services.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white font-semibold transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Ask Your Question
                </Button>
              </CardContent>
            </Card>
          </div>
        </SectionLoader>
      </div>
    </section>
  )
}
