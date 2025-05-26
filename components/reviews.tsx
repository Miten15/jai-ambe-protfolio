"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SectionLoader } from "@/components/section-loader"
import { IndianDecorative } from "@/components/indian-decorative-elements"

export function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      role: "Business Owner",
      content:
        "Jai created an amazing website for my boutique. The Indian design elements perfectly captured our brand essence. Highly recommended!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Startup Founder",
      content:
        "Exceptional work on our e-commerce platform. The attention to detail and cultural sensitivity in design was outstanding.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Restaurant Owner",
      content:
        "The restaurant management system has transformed our business. Beautiful interface with practical functionality.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    const review = {
      id: reviews.length + 1,
      ...newReview,
      avatar: "/placeholder.svg?height=40&width=40",
    }
    setReviews([...reviews, review])
    setNewReview({ name: "", role: "", content: "", rating: 5 })
    setIsDialogOpen(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Indian Elements */}
      <div className="absolute top-16 left-8 animate-fade-in-left">
        <IndianDecorative size={90} variant="mandala" />
      </div>
      <div className="absolute top-20 right-12 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
        <IndianDecorative size={75} variant="lotus" />
      </div>
      <div className="absolute bottom-20 left-16 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
        <IndianDecorative size={65} variant="diya" />
      </div>
      <div className="absolute bottom-16 right-8 animate-fade-in-right" style={{ animationDelay: "0.9s" }}>
        <IndianDecorative size={70} variant="rangoli" />
      </div>

      {/* Floating testimonial decorations */}
      <div className="absolute top-1/3 left-1/3 animate-pulse" style={{ animationDelay: "1.2s" }}>
        <IndianDecorative size={35} variant="paisley" className="opacity-10" />
      </div>
      <div className="absolute top-2/3 right-1/3 animate-pulse" style={{ animationDelay: "1.8s" }}>
        <IndianDecorative size={40} variant="lotus" className="opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionLoader delay={1500}>
          <div className="text-center mb-16 relative">
            {/* Header decorative border */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <IndianDecorative size={25} variant="diya" className="opacity-40" />
              <IndianDecorative size={30} variant="lotus" className="opacity-50" />
              <IndianDecorative size={25} variant="diya" className="opacity-40" />
            </div>

            <h2 className="text-fluid-5xl font-bold mb-6 bg-gradient-to-r from-periwinkle2-300 to-periwinkle3-300 bg-clip-text text-transparent font-troy tracking-tight relative">
              Client Reviews
              {/* Decorative flourishes */}
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="flex items-center space-x-2">
                  <IndianDecorative size={20} variant="paisley" className="opacity-30" />
                  <IndianDecorative size={25} variant="mandala" className="opacity-40" />
                </div>
              </div>
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="flex items-center space-x-2">
                  <IndianDecorative size={25} variant="mandala" className="opacity-40 transform scale-x-[-1]" />
                  <IndianDecorative size={20} variant="paisley" className="opacity-30 transform scale-x-[-1]" />
                </div>
              </div>
            </h2>

            <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What my clients say about working with me. Your feedback helps me grow and serve you better.
            </p>

            {/* Bottom decorative line */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              <IndianDecorative size={15} variant="rangoli" className="opacity-30" />
              <IndianDecorative size={18} variant="lotus" className="opacity-40" />
              <IndianDecorative size={15} variant="rangoli" className="opacity-30" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="border-periwinkle-400 hover:shadow-lg transition-all duration-500 hover:shadow-periwinkle-300/20 hover:-translate-y-2 relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card corner decorations */}
                <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-50 transition-opacity duration-300">
                  <IndianDecorative size={20} variant={["lotus", "mandala", "paisley"][index % 3] as any} />
                </div>
                <div className="absolute bottom-3 left-3 opacity-15 group-hover:opacity-40 transition-opacity duration-300">
                  <IndianDecorative size={18} variant="diya" />
                </div>

                <CardHeader className="pb-4 relative">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="animate-scale-in" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                        <AvatarFallback className="bg-periwinkle-600 text-white font-semibold">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {/* Avatar decoration */}
                      <div className="absolute -top-1 -right-1 opacity-60">
                        <IndianDecorative size={12} variant="rangoli" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 tracking-tight text-fluid-base flex items-center gap-2">
                        {review.name}
                        <IndianDecorative size={14} variant="lotus" className="opacity-40" />
                      </h3>
                      <p className="text-fluid-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>

                  {/* Star rating with decoration */}
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex space-x-1">{renderStars(review.rating)}</div>
                    <IndianDecorative size={12} variant="diya" className="opacity-30" />
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-gray-600 leading-relaxed italic text-fluid-sm relative">
                    "{review.content}"{/* Quote decoration */}
                    <div className="absolute -top-2 -left-2 opacity-20">
                      <IndianDecorative size={16} variant="paisley" />
                    </div>
                  </p>

                  {/* Content border decoration */}
                  <div className="absolute bottom-0 right-0 opacity-10">
                    <IndianDecorative size={22} variant="mandala" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center relative" style={{ animationDelay: "0.6s" }}>
            {/* Button decorations */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <IndianDecorative size={30} variant="lotus" className="opacity-20" />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-periwinkle2-400 to-periwinkle3-400 hover:from-periwinkle2-300 hover:to-periwinkle3-300 text-white font-semibold transition-all duration-300 relative group/btn">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your Review
                  {/* Button decoration */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    <IndianDecorative size={12} variant="diya" />
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md relative">
                {/* Dialog decorations */}
                <div className="absolute top-2 right-2 opacity-20">
                  <IndianDecorative size={25} variant="mandala" />
                </div>
                <div className="absolute bottom-2 left-2 opacity-15">
                  <IndianDecorative size={20} variant="lotus" />
                </div>

                <DialogHeader>
                  <DialogTitle className="font-semibold tracking-tight text-fluid-xl flex items-center gap-2">
                    Share Your Experience
                    <IndianDecorative size={18} variant="diya" className="opacity-50" />
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                    className="border-periwinkle-300 focus:border-periwinkle2-400"
                  />
                  <Input
                    placeholder="Your Role/Company"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    required
                    className="border-periwinkle-300 focus:border-periwinkle2-400"
                  />
                  <div>
                    <label className="block text-fluid-sm font-medium mb-2 flex items-center gap-2">
                      Rating
                      <IndianDecorative size={12} variant="rangoli" className="opacity-40" />
                    </label>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-6 w-6 ${i < newReview.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <Textarea
                    placeholder="Share your experience working with me..."
                    value={newReview.content}
                    onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    required
                    rows={4}
                    className="border-periwinkle-300 focus:border-periwinkle2-400"
                  />
                  <Button type="submit" className="w-full bg-periwinkle2-400 hover:bg-periwinkle2-300 font-semibold">
                    Submit Review
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </SectionLoader>
      </div>
    </section>
  )
}
