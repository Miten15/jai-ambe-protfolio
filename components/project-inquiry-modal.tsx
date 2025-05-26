"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Send, CheckCircle, Mail } from "lucide-react"

interface ProjectInquiryModalProps {
  isOpen: boolean
  onClose: () => void
  serviceTitle?: string
  servicePrice?: string
}

export function ProjectInquiryModal({ isOpen, onClose, serviceTitle, servicePrice }: ProjectInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: serviceTitle || "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Email configuration - UPDATE THIS WITH YOUR EMAIL
  const NOTIFICATION_EMAIL = "jai.ambe@example.com" // 👈 CHANGE THIS TO YOUR EMAIL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare email data
      const emailData = {
        to: NOTIFICATION_EMAIL,
        subject: `New Project Inquiry: ${formData.projectType || "General Inquiry"}`,
        html: `
          <h2>New Project Inquiry Received</h2>
          
          <h3>Client Information:</h3>
          <ul>
            <li><strong>Name:</strong> ${formData.name}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Phone:</strong> ${formData.phone || "Not provided"}</li>
            <li><strong>Company:</strong> ${formData.company || "Not provided"}</li>
          </ul>
          
          <h3>Project Details:</h3>
          <ul>
            <li><strong>Project Type:</strong> ${formData.projectType}</li>
            <li><strong>Budget Range:</strong> ${formData.budget || "Not specified"}</li>
            <li><strong>Timeline:</strong> ${formData.timeline || "Not specified"}</li>
            <li><strong>Service Price:</strong> ${servicePrice || "Custom quote"}</li>
          </ul>
          
          <h3>Project Description:</h3>
          <p>${formData.message}</p>
          
          <hr>
          <p><em>This inquiry was submitted through your portfolio website.</em></p>
          <p><strong>Next Steps:</strong></p>
          <ol>
            <li>Review the project requirements</li>
            <li>Prepare a detailed proposal</li>
            <li>Schedule a consultation call</li>
            <li>Send response within 24 hours</li>
          </ol>
        `,
      }

      // Here you would typically send to your backend API
      // For now, we'll simulate the API call
      console.log("Sending email notification to:", NOTIFICATION_EMAIL)
      console.log("Email data:", emailData)
      console.log("Form data:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real implementation, you would:
      // 1. Send to your backend API endpoint
      // 2. Your backend would send the email using a service like:
      //    - Nodemailer
      //    - SendGrid
      //    - Mailgun
      //    - Resend
      //    - EmailJS (client-side option)

      /*
      Example API call:
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          emailData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send inquiry');
      }
      */

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: serviceTitle || "",
          budget: "",
          timeline: "",
          message: "",
        })
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Error sending inquiry:", error)
      setIsSubmitting(false)
      // You could show an error message here
      alert("There was an error sending your inquiry. Please try again or contact us directly.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">Your project inquiry has been submitted successfully.</p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <div className="flex items-center gap-2 text-blue-700 mb-2">
                <Mail className="h-4 w-4" />
                <span className="font-semibold">Email sent to:</span>
              </div>
              <p className="text-blue-600 text-sm">{NOTIFICATION_EMAIL}</p>
            </div>
            <p className="text-sm text-gray-500">
              I'll review your requirements and get back to you within 24 hours to schedule a consultation.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <Send className="h-6 w-6 text-periwinkle2-400" />
            Start Your Project
            {serviceTitle && <Badge className="bg-periwinkle2-400 text-white">{serviceTitle}</Badge>}
          </DialogTitle>
          <p className="text-gray-600">
            Tell me about your project and I'll get back to you with a detailed proposal and consultation scheduling.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
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

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-periwinkle-300 rounded-md focus:border-periwinkle2-400 focus:outline-none focus:ring-2 focus:ring-periwinkle2-400/20 bg-white text-gray-700"
            >
              <option value="">Select Project Type</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="E-commerce Solutions">E-commerce Solutions</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Performance Optimization">Performance Optimization</option>
              <option value="Custom Solution">Custom Solution</option>
            </select>

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
          </div>

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

          <Textarea
            name="message"
            placeholder="Tell me about your project... Include details about your goals, target audience, specific requirements, and any inspiration or references you have."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="border-periwinkle-300 focus:border-periwinkle2-400"
          />

          {/* Email notification info */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-blue-700 mb-2">
              <Mail className="h-4 w-4" />
              <span className="font-semibold">Email Notification</span>
            </div>
            <p className="text-blue-600 text-sm">
              Your inquiry will be sent to: <strong>{NOTIFICATION_EMAIL}</strong>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white font-semibold transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Project Inquiry
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="border-periwinkle-400 text-periwinkle2-300 hover:bg-periwinkle-800"
              onClick={() => window.open("https://calendly.com/jaiambe", "_blank")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Call Instead
            </Button>
          </div>

          {/* Additional Info */}
          <div className="bg-periwinkle-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">What happens next?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• I'll review your requirements within 24 hours</li>
              <li>• Send you a detailed proposal with timeline and pricing</li>
              <li>• Schedule a free consultation call to discuss your project</li>
              <li>• Answer any questions and refine the project scope</li>
            </ul>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
