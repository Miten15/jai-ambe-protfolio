import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { IndianPattern } from "@/components/indian-pattern"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: "url(/images/paisley-pattern.png)",
            backgroundSize: "300px 300px",
          }}
        />
      </div>

      {/* Decorative SVG Elements */}
      <div className="absolute top-20 left-10 opacity-20 text-periwinkle2-400 animate-fade-in-left">
        <IndianDecorative variant="peacock" size={120} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 text-periwinkle3-400 animate-fade-in-right">
        <IndianDecorative variant="elephant" size={100} />
      </div>
      <div className="absolute top-1/3 right-20 opacity-15 text-periwinkle2-300 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative variant="sun" size={80} />
      </div>
      <div className="absolute bottom-1/3 left-20 opacity-15 text-periwinkle3-300 animate-fade-in-left" style={{ animationDelay: "0.5s" }}>
        <IndianDecorative variant="om" size={60} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-fluid-7xl font-black mb-6 font-troy tracking-tighter animate-fade-in-up">
            <span className="bg-gradient-to-r from-periwinkle2-300 via-periwinkle3-300 to-alice_blue-300 bg-clip-text text-transparent bg-size-200 animate-text-shimmer">
              Jai Ambe
            </span>
          </h1>
          <p
            className="text-fluid-2xl text-gray-700 mb-8 leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Creative Developer & Designer
          </p>
          <p
            className="text-fluid-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Crafting beautiful digital experiences with a touch of Indian artistry. Specializing in modern web
            development with traditional design sensibilities.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white px-8 py-3 text-fluid-lg font-semibold transition-all duration-300"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-periwinkle-400 text-periwinkle2-300 hover:bg-periwinkle-800 px-8 py-3 text-fluid-lg font-medium transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        <div className="mt-16 animate-bounce" style={{ animationDelay: "0.8s" }}>
          <ArrowDown className="h-6 w-6 text-periwinkle2-400 mx-auto" />
        </div>
      </div>
    </section>
  )
}
