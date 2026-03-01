"use client"

import type { QuizQuestion } from "@/lib/quiz-data"
import { BoticarioLogo } from "./boticario-logo"

interface QuizStepProps {
  question: QuizQuestion
  currentStep: number
  totalSteps: number
  onAnswer: (optionIndex: number) => void
  isAnimating?: boolean
}

export function QuizStep({
  question,
  currentStep,
  totalSteps,
  onAnswer,
}: QuizStepProps) {
  const progressPercent = (currentStep / totalSteps) * 100

  return (
    <div
      className="relative flex min-h-dvh flex-col"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Logo */}
      <div className="flex justify-center pt-10 pb-2">
        <BoticarioLogo className="text-[2rem] md:text-4xl" />
      </div>

      {/* Product Image */}
      <div className="flex justify-center px-8 py-4">
        <div className="relative w-full max-w-[280px]">
          <img
            src={question.image}
            alt={`Produto pergunta ${question.id}`}
            className="h-auto w-full object-contain"
            style={{ maxHeight: "220px", borderRadius: "1.25rem" }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="px-8 pt-4 pb-4 text-center">
        <p className="text-balance text-[0.95rem] leading-relaxed text-foreground">
          {question.question}
        </p>
      </div>

      {/* Progress bar */}
      <div className="mx-8 mb-5">
        <div className="h-[6px] w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%`, backgroundColor: "#6f977f" }}
          />
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3 px-6 pb-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full rounded-full px-5 py-3 text-[0.85rem] font-medium transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
            style={{
              backgroundColor: "#6f977f",
              color: "#ffffff",
            }}
          >
            {option.label} {option.emoji}
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="py-5 text-center">
        <p className="text-xs text-muted-foreground">
          {"\u00a9 2025 Todos os direitos reservados."}
        </p>
      </footer>
    </div>
  )
}
