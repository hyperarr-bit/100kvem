"use client"

import { useState, useCallback } from "react"
import { quizQuestions } from "@/lib/quiz-data"
import { EntryModal } from "@/components/entry-modal"
import { QuizStep } from "@/components/quiz-step"
import { TransitionOverlay } from "@/components/transition-overlay"
import { FinalPage } from "@/components/final-page"
import { ProductsPage } from "@/components/products-page"

type GameState = "intro" | "quiz" | "finished" | "products"

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("intro")
  const [currentStep, setCurrentStep] = useState(0)
  const [showTransition, setShowTransition] = useState(false)

  const handleStartQuiz = useCallback(() => {
    setGameState("quiz")
  }, [])

  const handleAnswer = useCallback(
    (_optionIndex: number) => {
      setShowTransition(true)

      setTimeout(() => {
        if (currentStep < quizQuestions.length - 1) {
          setCurrentStep((prev) => prev + 1)
        } else {
          setGameState("finished")
        }
        setTimeout(() => {
          setShowTransition(false)
        }, 600)
      }, 1200)
    },
    [currentStep]
  )

  const handleRedeem = useCallback(() => {
    setGameState("products")
    window.scrollTo(0, 0)
  }, [])

  // Products page is full-width, no max-w-lg constraint
  if (gameState === "products") {
    return (
      <main className="relative mx-auto min-h-dvh w-full max-w-lg">
        <ProductsPage />
      </main>
    )
  }

  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-lg bg-background">
      {/* Quiz Steps */}
      {gameState === "quiz" && (
        <div className="relative">
          <QuizStep
            question={quizQuestions[currentStep]}
            currentStep={currentStep + 1}
            totalSteps={quizQuestions.length}
            onAnswer={handleAnswer}
            isAnimating={false}
          />
          <TransitionOverlay isVisible={showTransition} />
        </div>
      )}

      {/* Intro background (first question visible behind modal) */}
      {gameState === "intro" && (
        <>
          <QuizStep
            question={quizQuestions[0]}
            currentStep={1}
            totalSteps={quizQuestions.length}
            onAnswer={() => {}}
            isAnimating={false}
          />
          <EntryModal onStart={handleStartQuiz} />
        </>
      )}

      {/* Final Page */}
      {gameState === "finished" && !showTransition && (
        <FinalPage onRedeem={handleRedeem} />
      )}
    </main>
  )
}
