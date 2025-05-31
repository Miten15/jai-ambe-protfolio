"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#process", label: "Process" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-periwinkle-300 z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <span className="text-fluid-xl font-bold bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent tracking-tight font-troy">
              Jai Ambe
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-periwinkle2-400 transition-all duration-300 font-medium text-fluid-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-periwinkle-300 animate-fade-in-up max-h-96 overflow-y-auto">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-periwinkle2-400 transition-all duration-300 font-medium text-fluid-base"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
