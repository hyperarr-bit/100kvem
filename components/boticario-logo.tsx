"use client"

export function BoticarioLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src="/logo-oboticario.svg"
        alt="O Boticario"
        className="h-auto"
        style={{ width: "220px" }}
      />
    </div>
  )
}
