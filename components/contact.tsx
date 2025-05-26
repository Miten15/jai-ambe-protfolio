"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Send, Calendar, MessageSquare, Clock, Globe } from "lucide-react"
import { IndianPattern } from "@/components/indian-pattern"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      subject: "",
      message: "",
    })
    alert("Thank you for your message! I'll get back to you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      content: "jai.ambe@example.com",
      action: "mailto:jai.ambe@example.com",
      description: "Best for detailed project discussions",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      action: "tel:+919876543210",
      description: "Quick calls and consultations",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "Chat on WhatsApp",
      action: "https://wa.me/919876543210",
      description: "Instant messaging and file sharing",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      content: "Book a free consultation",
      action: "https://calendly.com/jaiambe",
      description: "30-minute strategy session",
    },
  ]

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-periwinkle-900 to-alice_blue-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-periwinkle-300 opacity-30 animate-fade-in-left">
        <IndianPattern size={150} />
      </div>
      <div className="absolute bottom-10 right-10 text-periwinkle3-300 opacity-30 animate-fade-in-right">
        <IndianPattern size={120} />
      </div>
      <div className="absolute top-1/3 right-20 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative size={80} variant="lotus" />
      </div>
      <div className="absolute bottom-1/3 left-20 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={90} variant="mandala" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLoader delay={2500}>
          <div className="text-center mb-16">
            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create
              something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-fluid-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                <IndianDecorative size={20} variant="lotus" className="opacity-50" />
                Get In Touch
              </h3>

              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-periwinkle-400 hover:shadow-lg transition-all duration-500 hover:shadow-periwinkle-300/20 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-periwinkle2-400 group-hover:scale-110 transition-transform duration-300">
                        <method.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 tracking-tight text-fluid-base mb-1">
                          {method.title}
                        </h4>
                        <p className="text-periwinkle2-400 font-medium text-fluid-sm mb-2">{method.content}</p>
                        <p className="text-gray-600 text-fluid-xs mb-3">{method.description}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-periwinkle-400 text-periwinkle2-300 hover:bg-periwinkle-800 text-xs"
                          onClick={() => window.open(method.action, "_blank")}
                        >
                          Contact Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Working Hours */}
              <Card className="border-periwinkle-400 mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-periwinkle2-300 font-semibold tracking-tight text-fluid-lg">
                    <Clock className="h-5 w-5" />
                    <span>Working Hours</span>
                    <IndianDecorative size={16} variant="diya" className="opacity-40" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 text-fluid-sm font-medium">{schedule.day}</span>
                      <Badge variant="secondary" className="bg-periwinkle-700 text-periwinkle-100 text-xs">
                        {schedule.hours}
                      </Badge>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-periwinkle-300">
                    <div className="flex items-center gap-2 text-periwinkle2-400 text-fluid-xs">
                      <Globe className="h-4 w-4" />
                      <span>Available for international clients</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2" style={{ animationDelay: "0.4s" }}>
              <Card className="border-periwinkle-400 hover:shadow-lg transition-all duration-500 hover:shadow-periwinkle-300/20">
                <CardHeader>
                  <CardTitle className="text-fluid-2xl text-gray-800 font-bold tracking-tight flex items-center gap-3">
                    <Send className="h-6 w-6 text-periwinkle2-400" />
                    Send a Message
                    <IndianDecorative size={18} variant="rangoli" className="opacity-40" />
                  </CardTitle>
                  <p className="text-gray-600 text-fluid-sm">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-periwinkle-300 focus:border-periwinkle2-400"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-periwinkle-300 focus:border-periwinkle2-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-periwinkle-300 focus:border-periwinkle2-400"
                      />
                      <Input
                        name="company"
                        placeholder="Company/Organization"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-periwinkle-300 focus:border-periwinkle2-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-periwinkle-300 rounded-md focus:border-periwinkle2-400 focus:outline-none focus:ring-2 focus:ring-periwinkle2-400/20 bg-white text-gray-700"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-25k">Under ₹25,000</option>
                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                        <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                        <option value="100k-250k">₹1,00,000 - ₹2,50,000</option>
                        <option value="250k-plus">₹2,50,000+</option>
                      </select>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-periwinkle-300 rounded-md focus:border-periwinkle2-400 focus:outline-none focus:ring-2 focus:ring-periwinkle2-400/20 bg-white text-gray-700"
                      >
                        <option value="">Project Timeline</option>
                        <option value="asap">ASAP (Rush Job)</option>
                        <option value="1-month">Within 1 Month</option>
                        <option value="2-3-months">2-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="flexible">Flexible Timeline</option>
                      </select>
                    </div>

                    <Input
                      name="subject"
                      placeholder="Project Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-periwinkle-300 focus:border-periwinkle2-400"
                    />
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project... Include details about your goals, target audience, and any specific requirements."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-periwinkle-300 focus:border-periwinkle2-400"
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white font-semibold transition-all duration-300"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-periwinkle-400 text-periwinkle2-300 hover:bg-periwinkle-800"
                        onClick={() => window.open("https://calendly.com/jaiambe", "_blank")}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Call
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" style={{ animationDelay: "0.8s" }}>
            <Card className="border-periwinkle-400 bg-gradient-to-r from-periwinkle2-400/10 to-periwinkle3-400/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-8 w-8 text-periwinkle2-400 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2 text-fluid-base">Quick Chat</h4>
                <p className="text-gray-600 text-fluid-sm mb-4">Need a quick answer? Message me on WhatsApp</p>
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  WhatsApp Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-periwinkle-400 bg-gradient-to-r from-periwinkle3-400/10 to-alice_blue-400/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-periwinkle2-400 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2 text-fluid-base">Direct Call</h4>
                <p className="text-gray-600 text-fluid-sm mb-4">Prefer talking? Give me a call during business hours</p>
                <Button
                  size="sm"
                  className="bg-periwinkle2-400 hover:bg-periwinkle2-300"
                  onClick={() => window.open("tel:+919876543210", "_blank")}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-periwinkle-400 bg-gradient-to-r from-alice_blue-400/10 to-lavender-400/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-periwinkle2-400 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2 text-fluid-base">Free Consultation</h4>
                <p className="text-gray-600 text-fluid-sm mb-4">Book a 30-minute strategy session</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-periwinkle-400 text-periwinkle2-300 hover:bg-periwinkle-800"
                  onClick={() => window.open("https://calendly.com/jaiambe", "_blank")}
                >
                  Book Meeting
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-periwinkle-400 text-center" style={{ animationDelay: "1s" }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-6">
                <a
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-periwinkle2-400 transition-colors text-fluid-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-periwinkle2-400 transition-colors text-fluid-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookie-policy"
                  className="text-gray-600 hover:text-periwinkle2-400 transition-colors text-fluid-sm"
                >
                  Cookie Policy
                </a>
              </div>
              <p className="text-gray-600 text-fluid-base flex items-center gap-2">
                © 2024 Jai Ambe. Crafted with ❤️ and inspired by Indian heritage.
                <IndianDecorative size={16} variant="lotus" className="opacity-40" />
              </p>
            </div>
          </div>
        </SectionLoader>
      </div>
    </section>
  )
}
