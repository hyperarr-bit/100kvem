"use client"

import { useEffect, useState } from "react"

interface TransitionOverlayProps {
  isVisible: boolean
}

export function TransitionOverlay({ isVisible }: TransitionOverlayProps) {
  const [show, setShow] = useState(false)
  const [logoScale, setLogoScale] = useState(0.3)

  useEffect(() => {
    if (isVisible) {
      setShow(true)
      const scaleTimer = setTimeout(() => setLogoScale(1), 50)
      return () => clearTimeout(scaleTimer)
    } else {
      setLogoScale(0.3)
      const hideTimer = setTimeout(() => setShow(false), 500)
      return () => clearTimeout(hideTimer)
    }
  }, [isVisible])

  if (!show && !isVisible) return null

  return (
    <div
      className="absolute inset-0 z-40 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(245, 245, 240, 0.75)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      {/* Circle with Logo - blinking */}
      <style>{`
        @keyframes circleBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
      <div
        className="flex h-[7.7rem] w-[7.7rem] items-center justify-center rounded-full bg-white shadow-xl"
        style={{
          transform: `scale(${logoScale})`,
          transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          animation: isVisible && logoScale === 1 ? "circleBlink 1.2s ease-in-out infinite" : "none",
        }}
      >
        <img
          src="/logo-oboticario.svg"
          alt="O Boticario"
          className="h-auto"
          style={{ width: "84px" }}
        />
      </div>
    </div>
  )
}
