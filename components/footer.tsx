"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        x: Math.random() * 100,
        delay: 0,
      }
      setHearts((prev) => [...prev.slice(-4), newHeart])
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-linear-to-r from-primary via-primary/95 to-primary text-primary-foreground py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/8 rounded-full blur-3xl" />
      </div>

      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-4xl opacity-30 animate-floating-heart pointer-events-none"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
            animationDuration: "5s",
          }}
        >
          ♡
        </div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
          {/* Left column */}
          <div className="text-center md:text-left animate-fade-in-up">
            <p className="text-2xl font-semibold mb-2">Made with love</p>
            <p className="text-primary-foreground/80 text-base">For your 💋th birthday</p>
          </div>

          {/* Center - Heart */}
          <div
            className="text-center flex items-center justify-center animate-glow-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-6xl">♡</div>
          </div>

          {/* Right column */}
          <div className="text-center md:text-right animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-2xl font-semibold mb-2">Forever yours</p>
            <p className="text-primary-foreground/80 text-base">Happy Birthday to you</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-white/40 to-transparent mb-8" />

      </div>
    </footer>
  )
}
