import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { CleanSkillsSection } from "@/components/clean-skills-section"
import { EnhancedProcess } from "@/components/enhanced-process"
import { Projects } from "@/components/projects"
import { Reviews } from "@/components/reviews"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { PageLoader } from "@/components/page-loader"

export default function Home() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen bg-gradient-to-br from-alice_blue-900 via-periwinkle-900 to-lavender-900">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <CleanSkillsSection />
        <EnhancedProcess />
        <Projects />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
