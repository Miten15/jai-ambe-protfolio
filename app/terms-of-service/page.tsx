import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Users, CreditCard, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export default function TermsOfService() {
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
              <IndianDecorative size={50} variant="lotus" className="opacity-30" />
            </div>

            <h1 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight">
              Terms of Service
            </h1>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              These terms govern your use of our services. Please read them carefully before engaging our services.
            </p>
            <p className="text-periwinkle2-400 text-fluid-sm mt-4">Last updated: January 2025</p>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <FileText className="h-6 w-6" />
                Service Agreement
                <IndianDecorative size={16} variant="diya" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>By engaging our services, you agree to the following terms:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All projects require a signed contract and initial deposit</li>
                <li>Project scope and deliverables will be clearly defined</li>
                <li>Timeline estimates are provided in good faith but may vary</li>
                <li>Regular communication and feedback are essential for project success</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <CreditCard className="h-6 w-6" />
                Payment Terms
                <IndianDecorative size={16} variant="paisley" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>Our payment structure is designed to be fair and transparent:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>50% deposit required before project commencement</li>
                <li>Remaining balance due upon project completion</li>
                <li>Payment terms: Net 15 days from invoice date</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are in Indian Rupees (INR) unless specified</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <Users className="h-6 w-6" />
                Client Responsibilities
                <IndianDecorative size={16} variant="rangoli" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>To ensure project success, clients are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing accurate and complete project requirements</li>
                <li>Timely feedback and approval of deliverables</li>
                <li>Providing necessary content, images, and materials</li>
                <li>Maintaining open communication throughout the project</li>
                <li>Testing and approval of final deliverables</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <AlertTriangle className="h-6 w-6" />
                Intellectual Property
                <IndianDecorative size={16} variant="mandala" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>Intellectual property rights are handled as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Client owns all custom code and designs upon full payment</li>
                <li>Third-party libraries and frameworks retain their original licenses</li>
                <li>We retain the right to showcase work in our portfolio</li>
                <li>Client must provide rights to any content they supply</li>
                <li>We reserve rights to our development methodologies and processes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <FileText className="h-6 w-6" />
                Revisions and Changes
                <IndianDecorative size={16} variant="lotus" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>Project changes and revisions are handled as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minor revisions are included in the project scope</li>
                <li>Major changes may require additional time and cost</li>
                <li>All change requests must be documented and approved</li>
                <li>Timeline adjustments will be communicated promptly</li>
                <li>Additional work will be quoted separately</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-periwinkle2-300">
                <AlertTriangle className="h-6 w-6" />
                Limitation of Liability
                <IndianDecorative size={16} variant="diya" className="opacity-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-600">
              <p>Our liability is limited as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We provide services to the best of our ability</li>
                <li>No guarantee of specific business outcomes or results</li>
                <li>Client is responsible for data backup and security</li>
                <li>We are not liable for third-party service failures</li>
                <li>Maximum liability limited to project value</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-periwinkle-400 bg-gradient-to-r from-periwinkle2-400/10 to-periwinkle3-400/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-fluid-xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-6">
                By proceeding with our services, you acknowledge that you have read and agree to these terms.
              </p>
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
