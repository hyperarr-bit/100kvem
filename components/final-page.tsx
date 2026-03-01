"use client"

import { useEffect, useState, useRef } from "react"
import { BoticarioLogo } from "./boticario-logo"

interface FinalPageProps {
  onRedeem: () => void
}

const EMOJIS = ["\uD83C\uDF81", "\uD83D\uDC96", "\uD83C\uDF80", "\uD83C\uDF38", "\uD83C\uDF39", "\uD83D\uDC95"]

interface FallingEmoji {
  id: number
  emoji: string
  left: number
  delay: number
  duration: number
  size: number
  swayAmount: number
  swaySpeed: number
  rotation: number
}

export function FinalPage({ onRedeem }: FinalPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [fallingEmojis, setFallingEmojis] = useState<FallingEmoji[]>([])
  const counterRef = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    function spawnEmoji() {
      const id = counterRef.current++
      const emoji: FallingEmoji = {
        id,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 95,
        delay: 0,
        duration: 3 + Math.random() * 4,
        size: 14 + Math.random() * 18,
        swayAmount: 20 + Math.random() * 60,
        swaySpeed: 1 + Math.random() * 2,
        rotation: Math.random() * 360,
      }
      setFallingEmojis((prev) => [...prev, emoji])

      setTimeout(() => {
        setFallingEmojis((prev) => prev.filter((e) => e.id !== id))
      }, emoji.duration * 1000 + 500)
    }

    // Spawn initial batch
    for (let i = 0; i < 12; i++) {
      setTimeout(() => spawnEmoji(), i * 200)
    }

    // Keep spawning continuously
    const interval = setInterval(() => {
      spawnEmoji()
    }, 400 + Math.random() * 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative flex min-h-dvh flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Falling emoji rain - faded, over everything */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" style={{ opacity: 0.45 }}>
        {fallingEmojis.map((e) => (
          <span
            key={e.id}
            className="absolute"
            style={{
              left: `${e.left}%`,
              top: "-40px",
              fontSize: `${e.size}px`,
              animation: `emojiFall${e.id % 4} ${e.duration}s linear forwards`,
              transform: `rotate(${e.rotation}deg)`,
              ["--sway" as string]: `${e.swayAmount}px`,
              ["--sway-speed" as string]: `${e.swaySpeed}s`,
            }}
          >
            {e.emoji}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes emojiFall0 {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
          25% { transform: translateY(25vh) translateX(30px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(50vh) translateX(-20px) rotate(180deg); opacity: 0.9; }
          75% { transform: translateY(75vh) translateX(25px) rotate(270deg); opacity: 0.7; }
          100% { transform: translateY(105vh) translateX(-15px) rotate(360deg); opacity: 0; }
        }
        @keyframes emojiFall1 {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
          25% { transform: translateY(25vh) translateX(-35px) rotate(-90deg); opacity: 1; }
          50% { transform: translateY(50vh) translateX(25px) rotate(-180deg); opacity: 0.9; }
          75% { transform: translateY(75vh) translateX(-30px) rotate(-270deg); opacity: 0.7; }
          100% { transform: translateY(105vh) translateX(20px) rotate(-360deg); opacity: 0; }
        }
        @keyframes emojiFall2 {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
          20% { transform: translateY(20vh) translateX(20px) rotate(72deg); opacity: 1; }
          40% { transform: translateY(40vh) translateX(-40px) rotate(144deg); opacity: 0.95; }
          60% { transform: translateY(60vh) translateX(15px) rotate(216deg); opacity: 0.8; }
          80% { transform: translateY(80vh) translateX(-25px) rotate(288deg); opacity: 0.6; }
          100% { transform: translateY(105vh) translateX(10px) rotate(360deg); opacity: 0; }
        }
        @keyframes emojiFall3 {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
          30% { transform: translateY(30vh) translateX(-25px) rotate(-108deg); opacity: 1; }
          50% { transform: translateY(50vh) translateX(35px) rotate(-180deg); opacity: 0.9; }
          70% { transform: translateY(70vh) translateX(-10px) rotate(-252deg); opacity: 0.7; }
          100% { transform: translateY(105vh) translateX(30px) rotate(-360deg); opacity: 0; }
        }
      `}</style>

      <div
        className="relative z-10 flex w-full max-w-md flex-col items-center px-6 pt-14 pb-6"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease-out",
        }}
      >
        {/* Logo */}
        <BoticarioLogo className="mb-5 text-[2rem]" />

        {/* Congratulations */}
        <h2 className="mb-3 text-center text-lg font-bold text-foreground">
          {"\uD83C\uDF89 Parab\u00e9ns! Desafio conclu\u00eddo! \uD83C\uDF89"}
        </h2>

        <p className="mb-1 text-center text-sm leading-relaxed text-muted-foreground">
          {"Voc\u00ea liberou uma oferta exclusiva do"}
        </p>
        <p className="mb-3 text-center text-sm leading-relaxed text-muted-foreground">
          {"Botic\u00e1rio! \uD83C\uDF81 \u2728"}
        </p>

        <p className="mb-1 text-center text-sm leading-relaxed text-foreground">
          {"Escolha o presente perfeito e surpreenda"}
        </p>
        <p className="mb-3 text-center text-sm leading-relaxed text-foreground">
          {"algu\u00e9m especial! \uD83D\uDC96"}
        </p>

        <p className="mb-6 text-center text-sm text-muted-foreground">
          {"Clique abaixo para acessar a oferta! \uD83D\uDC46"}
        </p>

        {/* Final Product Image */}
        <div className="mb-8 w-full max-w-[300px]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produto-foto-6%28parte%20final%29-C6ydbM8xgWkgU0zeMxK2vcMiqiYvv9.webp"
            alt="Produtos Melancia O Boticario"
            className="h-auto w-full object-contain"
            style={{ borderRadius: "1.25rem" }}
          />
        </div>

        {/* CTA Button */}
        <button
          onClick={onRedeem}
          className="w-full max-w-[300px] rounded-full bg-primary py-4 text-[0.9rem] font-bold uppercase tracking-widest text-primary-foreground transition-transform active:scale-95"
        >
          RESGATAR OFERTA
        </button>

        {/* Footer */}
        <p className="mt-8 text-xs text-muted-foreground">
          {"\u00a9 2025 Todos os direitos reservados."}
        </p>
      </div>
    </div>
  )
}
