"use client"

import { useRef } from "react"
import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import FlipCards from "@/components/flip-cards"
import FinalMessage from "@/components/final-message"
import Footer from "@/components/footer"

export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null)

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <Timeline ref={timelineRef} />
      <FlipCards />
      <FinalMessage />
      <Footer />
    </main>
  )
}
