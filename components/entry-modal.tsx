"use client"

import { useEffect, useState } from "react"

interface EntryModalProps {
  onStart: () => void
}

export function EntryModal({ onStart }: EntryModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-500"
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-sm rounded-2xl bg-card px-6 py-8 text-center shadow-xl transition-all duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        }}
      >
        <p className="mb-2 text-lg font-bold text-foreground">
          {"\uD83C\uDF38 DESAFIO ESPECIAL \uD83C\uDF38"}
        </p>

        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          {"Preparamos algo especial para voc\u00ea surpreender algu\u00e9m importante! \uD83C\uDF81 \uD83D\uDC95"}
        </p>

        <p className="mb-3 text-sm font-semibold text-[#c0392b]">
          {"Responda \u00e0s perguntas do quiz e descubra o presente perfeito do Botic\u00e1rio! \uD83C\uDF81 \u2728"}
        </p>

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {"No final, voc\u00ea vai garantir uma surpresa exclusiva para tornar esse momento inesquec\u00edvel! \uD83E\uDD73"}
        </p>

        <button
          onClick={onStart}
          className="w-full rounded-full bg-primary py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-transform active:scale-95"
        >
          {"COME\u00c7AR DESAFIO"}
        </button>
      </div>
    </div>
  )
}
