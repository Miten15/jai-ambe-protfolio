import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Cookie, Mail } from "lucide-react"
import Link from "next/link"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-alice_blue-900 via-periwinkle-900 to-lavender-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="outline"
              className="border-periwinkle-400 text-periwinkle2-300 hover:bg-periwinkle-800 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-12 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <IndianDecorative size={50} variant="mandala" className="opacity-30" />
            </div>

            <h1 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-periwinkle2-400 text-fluid-sm mt-4">Last updated: January 2024</p>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Shield className="h-6 w-6" />
                Information We Collect
                <IndianDecorative size={16} variant="lotus" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fill out contact forms on our website</li>
                <li>Send us emails or messages</li>
                <li>Schedule consultations or meetings</li>
                <li>Subscribe to our newsletter or updates</li>
              </ul>
              <p>This may include your name, email address, phone number, company information, and project details.</p>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Eye className="h-6 w-6" />
                How We Use Your Information
                <IndianDecorative size={16} variant="diya" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Communicate about projects and services</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Cookie className="h-6 w-6" />
                Cookies and Tracking
                <IndianDecorative size={16} variant="paisley" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve user experience</li>
                <li>Provide personalized content</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Shield className="h-6 w-6" />
                Data Security
                <IndianDecorative size={16} variant="rangoli" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure hosting and storage</li>
                <li>Regular security audits</li>
                <li>Limited access to personal information</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Mail className="h-6 w-6" />
                Your Rights
                <IndianDecorative size={16} variant="mandala" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
              <p>To exercise these rights, please contact us at jai.ambe@example.com</p>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400 bg-gradient-to-r from-periwinkle2-400/10 to-periwinkle3-400/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-fluid-xl font-bold text-gray-800 mb-4">Questions About This Policy?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please don't hesitate to contact us.
              </p>
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
