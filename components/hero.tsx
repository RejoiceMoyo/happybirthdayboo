"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onBeginClick: () => void
}

export default function Hero({ onBeginClick }: HeroProps) {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([])
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const heartCounter = useRef(0)
  const sparkleCounter = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: heartCounter.current++,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
      }
      setHearts((prev) => [...prev, newHeart])

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
      }, 4500)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const sparkle = {
      id: sparkleCounter.current++,
      x: e.clientX,
      y: e.clientY,
    }
    setSparkles((prev) => [...prev.slice(-12), sparkle])

    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id))
    }, 700)
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-secondary via-background via-60% to-accent/5 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-5xl animate-floating-heart pointer-events-none"
          style={
            {
              left: `${heart.left}%`,
              "--tx": `${(Math.random() - 0.5) * 150}px`,
            } as React.CSSProperties
          }
        >
          ♡
        </div>
      ))}

      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none animate-sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 8px rgba(220, 80, 120, 0.8)",
          }}
        />
      ))}

      <div className="text-center px-4 z-10 relative max-w-3xl">
        <div className="mb-16 flex justify-center relative h-32">
          <div className="absolute inset-0 animate-glow-pulse text-9xl flex justify-center">♡</div>
          <div className="text-9xl animate-pulse" style={{ animationDelay: "0.5s" }}>
            ♡
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl mb-2 animate-fade-in-up"
          style={{ fontFamily: "'Great Vibes', cursive", animationDelay: "0.1s" }}
        >
          Happy 27th Birthday,
        </h1>

        <h2
          className="text-4xl md:text-6xl font-light text-primary/90 mb-8 animate-fade-in-up"
          style={{ fontFamily: "Playfair Display", animationDelay: "0.2s" }}
        >
          My Love, Mitch xoxo
        </h2>

        <p
          className="text-2xl md:text-3xl text-foreground/75 mb-14 max-w-2xl mx-auto animate-fade-in-up font-light leading-relaxed"
          style={{ animationDelay: "0.3s", fontFamily: "'Great Vibes', cursive" }}
        >
          A celebration of you, of us, and of everything in between
        </p>

        <Button
          onClick={onBeginClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 hover:shadow-2xl text-primary-foreground px-12 py-8 text-lg rounded-full shadow-xl animate-fade-in-up transition-all duration-300 font-semibold"
          style={{ animationDelay: "0.4s" }}
        >
          Begin Our Story
        </Button>
      </div>
    </section>
  )
}
