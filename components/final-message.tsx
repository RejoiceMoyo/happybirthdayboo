"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function FinalMessage() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        x: Math.random() * 100,
        delay: 0,
      }
      setHearts((prev) => [...prev.slice(-5), newHeart])
    }, 600)

    return () => clearInterval(interval)
  }, [])

  const downloadPDF = () => {
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

    const text = `27 REASONS I LOVE YOU\n\n${reasons.map((r, i) => `${i + 1}. ${r}`).join("\n")}`
    const element = document.createElement("a")
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text))
    element.setAttribute("download", "27-reasons-i-love-you.txt")
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <section className="py-20 px-4 bg-linear-to-b from-background via-secondary/30 to-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-linear-to-b from-primary/8 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-t from-accent/8 to-transparent blur-3xl" />
      </div>

      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-4xl opacity-30 animate-floating-heart pointer-events-none"
          style={{
            left: `${heart.x}%`,
            bottom: "-30px",
            animationDuration: "5s",
          }}
        >
          ♡
        </div>
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-16 flex justify-center animate-fade-in-up">
          <div className="text-9xl animate-glow-pulse">♡</div>
        </div>

        <h2
          className="text-3xl md:text-2xl font-bold text-primary mb-10 animate-fade-in-up gradient-text"
          style={{ fontFamily: "Playfair Display", animationDelay: "0.1s" }}
        >
          Here's to a lifetime of more reasons
        </h2>

        <p
          className="text-1xl md:text-3xl text-foreground/85 mb-8 animate-fade-in-up font-light leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          I love you today, tomorrow, always and forever.
        </p>

        <p
          className="text-lg text-foreground/70 mb-16 animate-fade-in-up font-light"
          style={{ animationDelay: "0.3s" }}
        >
          And for every year that passes, there will be 27 more reasons to add.
        </p>

        <Button
          onClick={downloadPDF}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg animate-fade-in-up hover:scale-105"
          style={{ animationDelay: "0.4s" }}
        >
          Download All Reasons BABY...💋
        </Button>
      </div>
    </section>
  )
}
