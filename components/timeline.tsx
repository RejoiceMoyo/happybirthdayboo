"use client"

import { forwardRef } from "react"
import { Card } from "@/components/ui/card"

const timelineItems = [
  {
    id: 1,
    title: "How We Met",
    description: "In short, ndikuda sadza rangu!😂",
    type: "text",
    icon: "💫",
  },
  {
    id: 2,
    title: "Our First Photo Together",
    description: "Nah they will use our pic to train AI! #techsavvygirlfriend😂",
    type: "image",
    icon: "📸",
  },
  {
    id: 3,
    title: "Our Favorite Inside Jokes",
    description: "Not today munhu washe🥲!!",
    type: "text",
    icon: "😄",
  },
  {
    id: 4,
    title: "Moments That Strengthened Us",
    description: "Dr visits, or pharmacy, too graphic for a website btw, or my departure🤫🤭??",
    type: "text",
    icon: "🌟",
  },
  {
    id: 5,
    title: "Milestones We've Reached",
    description: "I miss $ deals with you, baby👄",
    type: "text",
    icon: "🎯",
  },
  {
    id: 6,
    title: "Dreams for the Future",
    description: "Building a life full of love, adventure, and endless possibilities together.",
    type: "text",
    icon: "✨",
  },
]

const Timeline = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="py-16 px-4 bg-linear-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className="text-6xl md:text-7xl font-bold text-center text-primary mb-24 animate-fade-in-up gradient-text"
          style={{ fontFamily: "Playfair Display" }}
        >
          Our Story
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-primary via-accent via-50% to-primary shadow-lg hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-20">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:gap-12 gap-6 items-start animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <Card className="p-6 md:p-8 bg-card hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-primary/10 shadow-lg card-luxury">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl md:text-4xl shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">{item.title}</h3>
                        <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline dot - center on mobile, inline on md+ */}
                <div className="w-full md:w-0 flex items-center justify-center pt-2 md:pt-10">
                  <div className="w-7 h-7 bg-linear-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg animate-glow-pulse" />
                </div>

                {/* Spacer */}
                <div className="w-full md:w-1/2" />
              </div>
            ))}
          </div>

          {/* End message */}
          <div className="text-center mt-24 pt-12 border-t border-primary/10">
            <p
              className="text-2xl md:text-3xl text-foreground/80 font-light italic animate-fade-in-up max-w-2xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.8s" }}
            >
              Every chapter with you has been my favorite. Here's to many more beautiful moments together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

Timeline.displayName = "Timeline"
export default Timeline
