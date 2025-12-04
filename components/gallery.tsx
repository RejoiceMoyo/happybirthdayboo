"use client"

import { useState } from "react"

export default function Gallery() {
  const [autoplay, setAutoplay] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const placeholderImages = [
    { id: 1, aspect: "aspect-square" },
    { id: 2, aspect: "aspect-video" },
    { id: 3, aspect: "aspect-square" },
    { id: 4, aspect: "aspect-video" },
    { id: 5, aspect: "aspect-square" },
    { id: 6, aspect: "aspect-square" },
  ]

  return (
    <section className="py-16 px-4 bg-linear-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2
            className="text-6xl md:text-7xl font-bold text-primary mb-6 animate-fade-in-up gradient-text"
            style={{ fontFamily: "Playfair Display" }}
          >
            Our Memories
          </h2>
          <p className="text-lg text-foreground/70 animate-fade-in-up font-light" style={{ animationDelay: "0.1s" }}>
            Moments frozen in time, forever in our hearts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max mb-12">
          {placeholderImages.map((img, index) => (
            <div
              key={img.id}
              className={`${img.aspect} bg-linear-to-br from-primary/15 via-accent/10 to-accent/15 rounded-2xl overflow-hidden group cursor-pointer animate-fade-in-up shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/10`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-full h-full flex items-center justify-center text-foreground/30 group-hover:text-primary/60 transition-all duration-300 relative">
                 <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-300" />
                <svg
                  className="w-24 h-24 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/60 animate-fade-in-up text-lg" style={{ animationDelay: "0.5s" }}>
          Click photos to view. Replace placeholders with your cherished memories
        </p>
      </div>
    </section>
  )
}
