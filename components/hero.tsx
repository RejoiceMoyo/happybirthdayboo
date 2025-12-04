"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([])
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const heartCounter = useRef(0)
  const sparkleCounter = useRef(0)
  // Audio player state
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)

  // Replace this with your own audio URL if desired
  // Local file served from the `public/` folder. Drop your MP3 at `public/background-music.mp3`.
  const audioUrl = "/background-music.mp3"

  const handlePlayMusic = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  // keep audio volume in sync
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

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

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {/* Play button (icon only, no text) */}
          <Button
            onClick={handlePlayMusic}
            size="lg"
            variant="secondary"
            className={`relative px-8 py-4 rounded-full shadow-xl font-semibold flex items-center gap-2 ${isPlaying ? 'ring-2 ring-accent' : ''}`}
            style={{ fontFamily: "'Great Vibes', cursive" }}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            <span className="text-2xl">{isPlaying ? '⏸️' : '🎵'}</span>
            <span className="ml-1 text-lg">{isPlaying ? 'Pause Music' : 'Play Music'}</span>
          </Button>

          {/* Compact vertical volume control placed very close to the play button. No text label. */}
          <div className="flex items-center gap-1 px-1">
            <div className="flex flex-col items-center space-y-1">
              {/* Volume icon (speaker) */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-foreground/90" aria-hidden style={{ position: 'relative', zIndex: 10 }}>
                <path d="M11.54 3.11 6.9 6.59H3a1 1 0 0 0-1 1v6.82a1 1 0 0 0 1 1h3.9l4.64 3.48A1 1 0 0 0 14 19V5a1 1 0 0 0-2.46-1.89z" />
                <path d="M16.5 8.5a4.5 4.5 0 0 1 0 7" stroke="currentColor" strokeWidth="0" />
              </svg>

              {/* Short vertical slider: rotate a short horizontal range input */}
              <input
                id="volume"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-label="Music volume"
                style={{
                  width: 44,
                  height: 6,
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'center',
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  marginTop: 8,
                  position: 'relative',
                  zIndex: 0,
                }}
                className="rounded-full bg-gray-200"
              />
            </div>
          </div>

          {/* Hidden audio element */}
          <audio ref={audioRef} src={audioUrl} loop preload="auto" />
        </div>
      </div>
    </section>
  )
}
