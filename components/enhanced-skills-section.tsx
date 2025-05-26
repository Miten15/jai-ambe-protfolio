import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"
import { ExpertiseBento } from "@/components/expertise-bento"
import { FloatingTechStack } from "@/components/floating-tech-stack"

export function EnhancedSkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-periwinkle-900 to-alice_blue-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-16 left-8 animate-fade-in-left">
        <IndianDecorative size={90} variant="lotus" />
      </div>
      <div className="absolute top-32 right-12 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative size={75} variant="mandala" />
      </div>
      <div className="absolute bottom-20 left-16 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={80} variant="rangoli" />
      </div>
      <div className="absolute bottom-16 right-8 animate-fade-in-right" style={{ animationDelay: "0.9s" }}>
        <IndianDecorative size={70} variant="paisley" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLoader delay={1000}>
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <IndianDecorative size={25} variant="diya" className="opacity-40" />
              <IndianDecorative size={30} variant="lotus" className="opacity-50" />
              <IndianDecorative size={25} variant="diya" className="opacity-40" />
            </div>

            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight relative">
              Skills & Expertise
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={30} variant="mandala" className="opacity-40" />
              </div>
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <IndianDecorative size={30} variant="mandala" className="opacity-40 transform scale-x-[-1]" />
              </div>
            </h2>

            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of expertise areas and modern technologies, crafted with precision and cultural
              aesthetics.
            </p>
          </div>

          {/* Expertise Bento Grid */}
          <ExpertiseBento />

          {/* Divider */}
          <div className="flex items-center justify-center my-16">
            <div className="flex items-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent to-periwinkle-400 w-20"></div>
              <IndianDecorative size={30} variant="lotus" className="opacity-50" />
              <div className="h-px bg-gradient-to-l from-transparent to-periwinkle-400 w-20"></div>
            </div>
          </div>

          {/* Floating Tech Stack */}
          <FloatingTechStack />
        </SectionLoader>
      </div>
    </section>
  )
}
