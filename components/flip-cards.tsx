"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reasons = [
  "Your smile lights up my world💋.",
  "The way you laugh at my jokes💋.",
  "Your kindness and compassion, yup💋!",
  "How you support all my dreams💋",
  "Your sense of humor💋",
  "The way you.....💋.....💋..",
  "Your strength💋 ",
  "How you make me feel💋",
  "Your intelligence and wit💋",
  "The way you are💋",
  "Your passion💋",
  "How you ...💋..💋.",
  "You just being there💋",
  "The way you hold my hand, kuma5 in town💋💋!",
  "Your adventurous spirit💋",
  "How you celebrate my victories💋",
  "Your warm heart💋",
  "The way you dance with me- Mexican dances infront of the mirror💋!",
  "Your ambition and goals💋",
  "How you inspire me daily💋",
  "Your thoughtfulness💋",
  "The way you love unconditionally💋",
  "Your resilience💋",
  "How you make ordinary moments special💋",
  "Your beauty inside and out💋",
  "The way you believe in me💋",
]

export default function FlipCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reasons.length)
      }, 5000)
    }
    return () => clearInterval(autoPlayRef.current)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % reasons.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlay(false)
    setCurrentIndex(index)
  }

  const getNumberDisplay = (num: number) => {
    const romanNumerals = [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
      "XIII",
      "XIV",
      "XV",
      "XVI",
      "XVII",
      "XVIII",
      "XIX",
      "XX",
      "XXI",
      "XXII",
      "XXIII",
      "XXIV",
      "XXV",
      "XXVI",
      "XXVII",
    ]
    return romanNumerals[num] || String(num + 1)
  }

  return (
    <section className="py-12 md:py-20 px-4 bg-linear-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-linear-to-b from-primary/10 to-transparent blur-3xl" />
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-primary/8 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 md:w-80 h-40 md:h-80 bg-accent/8 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-2 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2
            className="text-2xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 md:mb-4 animate-fade-in-up"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            27 Reasons I Love You
          </h2>
          <p
            className="text-base md:text-lg text-foreground/70 animate-fade-in-up font-light px-2"
            style={{ animationDelay: "0.1s" }}
          >
            A journey through moments that make you so special to me!
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-6 md:mb-10">
          <div className="bg-linear-to-br from-white via-amber-50 to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl border border-orange-100 card-luxury min-h-72 md:min-h-80 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-rose-100 to-amber-100 rounded-full blur-2xl -z-10 opacity-60" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-rose-100 to-amber-50 rounded-full blur-2xl -z-10 opacity-60" />

            <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-linear-to-br from-rose-200 to-orange-200 rounded-full w-14 md:w-20 h-14 md:h-20 flex items-center justify-center backdrop-blur-sm border border-rose-300/50 shadow-lg">
              <span
                className="text-2xl md:text-4xl font-bold text-rose-900"
                style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
              >
                {getNumberDisplay(currentIndex)}
              </span>
            </div>

            {/* Reason text with animation */}
            <div className="text-center max-w-2xl px-4">
              <p
                className="text-xl md:text-3xl lg:text-4xl font-semibold text-rose-900 leading-relaxed animate-fade-in-up"
                key={currentIndex}
              >
                {reasons[currentIndex]}
              </p>
            </div>

            {/* Decorative hearts */}
            <div className="absolute bottom-6 md:bottom-8 text-3xl md:text-4xl opacity-40 animate-pulse">♡</div>

            {/* Left chevron inside slide */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-rose-300/30 hover:bg-rose-400/50 text-rose-900 rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg z-20"
              aria-label="Previous reason"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
            </button>

            {/* Right chevron inside slide */}
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-rose-300/30 hover:bg-rose-400/50 text-rose-900 rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg z-20"
              aria-label="Next reason"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators - Dots */}
        <div className="flex justify-center gap-1 md:gap-2 mb-6 md:mb-8 flex-wrap px-2">
          {reasons.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-6 md:w-8" : "bg-primary/40 hover:bg-primary/60 w-2 md:w-3"
              }`}
              aria-label={`Go to reason ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <div className="flex justify-center px-2">
          <Button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-sm md:text-base"
          >
            {isAutoPlay ? "Pause Auto-play" : "Resume Auto-play"}
          </Button>
        </div>
      </div>
    </section>
  )
}
