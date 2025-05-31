import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cookie, Settings, BarChart, Shield } from "lucide-react"
import Link from "next/link"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export default function CookiePolicy() {
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
              <IndianDecorative size={50} variant="paisley" className="opacity-30" />
            </div>

            <h1 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
            <p className="text-periwinkle2-400 text-fluid-sm mt-4">Last updated: January 2025</p>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Cookie className="h-6 w-6" />
                What Are Cookies?
                <IndianDecorative size={16} variant="lotus" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve your browsing experience</li>
                <li>Provide personalized content and features</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Settings className="h-6 w-6" />
                Types of Cookies We Use
                <IndianDecorative size={16} variant="diya" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic features like page
                  navigation and access to secure areas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Performance Cookies</h4>
                <p>
                  These cookies collect information about how visitors use our website, such as which pages are visited
                  most often. This data helps us improve our website.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Functional Cookies</h4>
                <p>
                  These cookies allow the website to remember choices you make and provide enhanced, more personal
                  features.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <BarChart className="h-6 w-6" />
                Third-Party Cookies
                <IndianDecorative size={16} variant="rangoli" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>We may use third-party services that set cookies on our website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> To understand website usage and improve user experience
                </li>
                <li>
                  <strong>Font Services:</strong> To load custom fonts for better typography
                </li>
                <li>
                  <strong>Contact Forms:</strong> To prevent spam and ensure form security
                </li>
                <li>
                  <strong>Social Media:</strong> If you interact with social media features
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Settings className="h-6 w-6" />
                Managing Cookies
                <IndianDecorative size={16} variant="mandala" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use your browser settings to block or delete cookies</li>
                <li>Set your browser to notify you when cookies are being set</li>
                <li>Use private/incognito browsing mode</li>
                <li>Opt-out of specific third-party services</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user
                experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Shield className="h-6 w-6" />
                Your Consent
                <IndianDecorative size={16} variant="paisley" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>By using our website, you consent to our use of cookies as described in this policy. You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Withdraw your consent at any time by adjusting your browser settings</li>
                <li>Contact us if you have questions about our cookie usage</li>
                <li>Request information about what data we collect</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400 bg-gradient-to-r from-periwinkle2-400/10 to-periwinkle3-400/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-fluid-xl font-bold text-gray-800 mb-4">Questions About Cookies?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies, please don't hesitate to contact us.
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
