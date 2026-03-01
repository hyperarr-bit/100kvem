"use client"

import { useState, useEffect, useCallback } from "react"
import type { Product } from "@/lib/products-data"
import { SharedFooter } from "./shared-footer"
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Copy,
  CreditCard,
  Heart,
  Loader2,
  Lock,
  MapPin,
  Menu,
  QrCode,
  Shield,
  ShoppingBag,
  Trash2,
  User,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Stepper                                                           */
/* ------------------------------------------------------------------ */
function CheckoutStepper({ step }: { step: number }) {
  const steps = [
    { label: "Dados Pessoais", icon: <User className="h-4 w-4" /> },
    { label: "Endereco", icon: <MapPin className="h-4 w-4" /> },
    { label: "Pagamento", icon: <CreditCard className="h-4 w-4" /> },
  ]

  return (
    <div className="flex items-center justify-center gap-0 py-4">
      {steps.map((s, i) => {
        const done = i < step
        const active = i === step
        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{
                  backgroundColor: done || active ? "#0d8b6e" : "#c8c8c8",
                }}
              >
                {done ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s.icon
                )}
              </div>
              <span className="mt-1 text-[0.65rem] font-medium text-gray-500">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="mx-1 mb-4 h-[2px] w-10"
                style={{ backgroundColor: done ? "#0d8b6e" : "#c8c8c8" }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Order Summary                                                      */
/* ------------------------------------------------------------------ */
function OrderSummary({
  product,
  frete,
  expanded,
  onToggle,
}: {
  product: Product
  frete: number
  expanded: boolean
  onToggle: () => void
}) {
  const subtotal = 0
  const total = subtotal + frete

  return (
    <div className="mx-4 mb-4 rounded-xl border border-gray-100 bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-semibold text-gray-700">1 item no pedido</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold" style={{ color: "#0d8b6e" }}>
            R$ {total.toFixed(2).replace(".", ",")}
          </span>
          {expanded ? (
            <ChevronUp className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-gray-100 px-4 pb-3 pt-3">
          <div className="flex items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              className="h-12 w-12 rounded-md object-contain"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">{product.name}</p>
            </div>
            <span className="text-sm font-bold" style={{ color: "#0d8b6e" }}>
              R$ 0,00
            </span>
            <button aria-label="Remover">
              <Trash2 className="h-4 w-4 text-gray-400" />
            </button>
          </div>
          <div className="mt-3 space-y-1 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>R$ 0,00</span>
            </div>
            {frete > 0 && (
              <div className="flex justify-between text-gray-500">
                <span>Frete</span>
                <span>R$ {frete.toFixed(2).replace(".", ",")}</span>
              </div>
            )}
            <div className="flex justify-between pt-1 font-bold text-gray-800">
              <span>Total</span>
              <span style={{ color: "#0d8b6e" }}>
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Checkout                                                      */
/* ------------------------------------------------------------------ */
interface CheckoutPageProps {
  product: Product
  onBack: () => void
}

export function CheckoutPage({ product, onBack }: CheckoutPageProps) {
  const [step, setStep] = useState(0)
  const [summaryExpanded, setSummaryExpanded] = useState(false)
  const [showPix, setShowPix] = useState(false)

  // Step 0: Dados Pessoais
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  // Step 1: Endereco
  const [cep, setCep] = useState("")
  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [freteOption, setFreteOption] = useState("pac")
  const [cepLoading, setCepLoading] = useState(false)

  // PIX real data
  const [pixLoading, setPixLoading] = useState(false)
  const [pixTimer, setPixTimer] = useState(600)
  const [pixCopied, setPixCopied] = useState(false)
  const [pixData, setPixData] = useState<{
    transaction_id: number
    qr_code: string
    qr_code_base64: string
    amount: number
    expires_at: string
  } | null>(null)
  const [pixStatus, setPixStatus] = useState<string>("pending")

  const freteValues: Record<string, number> = {
    pac: 19.39,
    jadlog: 22.79,
    sedex: 26.89,
  }
  const frete = step >= 1 ? freteValues[freteOption] : 0

  // CEP auto-fill
  const handleCepChange = useCallback((value: string) => {
    const digits = value.replace(/\D/g, "")
    let masked = digits
    if (digits.length > 5) {
      masked = digits.slice(0, 5) + "-" + digits.slice(5, 8)
    }
    setCep(masked)

    if (digits.length === 8) {
      setCepLoading(true)
      fetch(`https://viacep.com.br/ws/${digits}/json/`)
        .then((r) => r.json())
        .then((data) => {
          if (!data.erro) {
            setRua(data.logradouro || "")
            setBairro(data.bairro || "")
            setCidade(data.localidade || "")
            setEstado(data.uf || "")
          }
        })
        .catch(() => {})
        .finally(() => setCepLoading(false))
    }
  }, [])

  // Phone mask
  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "")
    let masked = digits
    if (digits.length > 0) masked = "(" + digits
    if (digits.length > 2) masked = "(" + digits.slice(0, 2) + ") " + digits.slice(2)
    if (digits.length > 7) masked = "(" + digits.slice(0, 2) + ") " + digits.slice(2, 7) + "-" + digits.slice(7, 11)
    setTelefone(masked)
  }

  // PIX countdown
  useEffect(() => {
    if (!showPix) return
    const interval = setInterval(() => {
      setPixTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [showPix])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
  }

  const pixCode = pixData?.qr_code || ""

  const handleCopyPix = () => {
    if (!pixCode) return
    navigator.clipboard.writeText(pixCode).catch(() => {})
    setPixCopied(true)
    setTimeout(() => setPixCopied(false), 2000)
  }

  // Create real PIX transaction
  const handleCreatePix = async () => {
    setPixLoading(true)
    try {
      const totalCents = Math.round(frete * 100)
      const res = await fetch("/api/pix/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: { name: product.name },
          customer: {
            name: nome,
            email: email,
            phone: telefone,
            document: "00000000000",
          },
          shippingCost: totalCents,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setPixData({
          transaction_id: data.transaction_id,
          qr_code: data.qr_code,
          qr_code_base64: data.qr_code_base64,
          amount: data.amount,
          expires_at: data.expires_at,
        })
        setPixStatus("pending")
        setPixTimer(600)
        setShowPix(true)
        window.scrollTo(0, 0)
      } else {
        alert("Erro ao gerar PIX: " + (data.error || "Tente novamente"))
      }
    } catch {
      alert("Erro de conexao. Tente novamente.")
    } finally {
      setPixLoading(false)
    }
  }

  // Poll payment status every 5 seconds
  useEffect(() => {
    if (!showPix || !pixData?.transaction_id) return
    if (pixStatus === "approved") return

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/pix/status?id=${pixData.transaction_id}`)
        const data = await res.json()
        if (data.success && data.status) {
          setPixStatus(data.status)
        }
      } catch {}
    }, 5000)

    return () => clearInterval(interval)
  }, [showPix, pixData?.transaction_id, pixStatus])

  // ---- PIX Screen ----
  if (showPix) {
    return (
      <div className="flex min-h-dvh flex-col" style={{ backgroundColor: "#ffffff" }}>
        {/* Header area */}
        <div className="flex flex-col items-center px-4 pb-4 pt-8">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: "#0d8b6e" }}>
            <QrCode className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-xl font-extrabold text-gray-900">Pague com PIX</h1>
          <p className="mt-1 text-sm text-gray-500">Escaneie o QR Code ou copie o codigo</p>
        </div>

        {/* Timer */}
        <div className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-full border border-gray-200 py-3">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-600">
            Expira em: {formatTime(pixTimer)}
          </span>
        </div>

        {/* QR Code Card */}
        <div className="mx-4 mb-4 rounded-xl border border-gray-100 p-6">
          <div className="flex justify-center">
            {pixData?.qr_code_base64 ? (
              <img
                src={pixData.qr_code_base64}
                alt="QR Code PIX"
                className="h-48 w-48"
              />
            ) : (
              <div className="flex h-48 w-48 items-center justify-center bg-gray-100 text-gray-400">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            )}
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">Valor a pagar</p>
          <p className="text-center text-3xl font-extrabold" style={{ color: "#0d8b6e" }}>
            R$ {pixData ? (pixData.amount / 100).toFixed(2).replace(".", ",") : frete.toFixed(2).replace(".", ",")}
          </p>
        </div>

        {/* Codigo Copia e Cola */}
        <div className="mx-4 mb-4">
          <p className="mb-2 text-center text-sm font-semibold text-gray-700">Codigo Copia e Cola</p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            <p className="break-all font-mono text-xs leading-relaxed text-gray-600">
              {pixCode || "Carregando..."}
            </p>
          </div>
          <button
            onClick={handleCopyPix}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-bold text-white"
            style={{ backgroundColor: "#0d8b6e" }}
          >
            <Copy className="h-4 w-4" />
            {pixCopied ? "Copiado!" : "Copiar Codigo PIX"}
          </button>
        </div>

        {/* Como pagar */}
        <div className="mx-4 mb-6 rounded-xl border border-gray-100 p-5">
          <h3 className="mb-4 text-base font-bold text-gray-800">Como pagar</h3>
          {[
            "Abra o app do seu banco ou carteira digital",
            "Escolha pagar com PIX e escaneie o QR Code ou cole o codigo",
            "Confirme o pagamento e pronto!",
          ].map((text, i) => (
            <div key={i} className="mb-3 flex items-start gap-3">
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: "#0d8b6e" }}
              >
                {i + 1}
              </div>
              <p className="pt-0.5 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        {/* Status */}
        {pixStatus === "approved" ? (
          <div className="mx-4 mb-6 flex flex-col items-center gap-2 rounded-xl bg-green-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-bold text-green-700">Pagamento Confirmado!</p>
            <p className="text-center text-sm text-green-600">Seu pagamento foi aprovado com sucesso.</p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 pb-8">
            <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
            <span className="text-sm text-gray-500">Aguardando pagamento...</span>
          </div>
        )}
      </div>
    )
  }

  // ---- Main Checkout Flow ----
  return (
    <div className="flex min-h-dvh flex-col" style={{ backgroundColor: "#ffffff" }}>
      {/* BotiPROMO Banner */}
      <div className="w-full">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faixa-850IgKqmbFbqEO0397wQ6A747WD8Dv.png"
          alt="botiPROMO"
          className="h-auto w-full object-cover"
          style={{ maxHeight: "44px" }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <button aria-label="Menu">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
          <img src="/logo-oboticario.svg" alt="O Boticario" className="h-auto" style={{ width: "130px" }} />
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Conta"><User className="h-6 w-6 text-gray-700" /></button>
          <button aria-label="Favoritos"><Heart className="h-6 w-6 text-gray-700" /></button>
          <div className="relative">
            <button aria-label="Carrinho"><ShoppingBag className="h-6 w-6 text-gray-700" /></button>
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] font-bold text-white" style={{ backgroundColor: "#0d8b6e" }}>1</span>
          </div>
        </div>
      </header>

      {/* Continuar Comprando */}
      <button onClick={onBack} className="flex items-center gap-1 px-4 pt-3 pb-1 text-sm font-medium" style={{ color: "#0d8b6e" }}>
        <ArrowLeft className="h-4 w-4" />
        Continuar Comprando
      </button>

      {/* Finalizar Compra Title */}
      <div className="flex items-center gap-2 px-4 pt-2 pb-1">
        <ShoppingBag className="h-5 w-5 text-gray-700" />
        <h1 className="text-lg font-extrabold text-gray-900">Finalizar Compra</h1>
      </div>

      {/* Stepper */}
      <CheckoutStepper step={step} />

      {/* Order Summary */}
      <OrderSummary
        product={product}
        frete={frete}
        expanded={summaryExpanded}
        onToggle={() => setSummaryExpanded(!summaryExpanded)}
      />

      {/* ---- STEP 0: Dados Pessoais ---- */}
      {step === 0 && (
        <div className="mx-4 mb-6 rounded-xl bg-[#f0f9f6] p-5">
          <div className="mb-5 flex items-center gap-2">
            <User className="h-4 w-4" style={{ color: "#0d8b6e" }} />
            <h2 className="text-base font-bold" style={{ color: "#0d8b6e" }}>Dados Pessoais</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Nome Completo *
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                E-mail *
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Telefone (WhatsApp) *
              </label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                value={telefone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]"
              />
            </div>
          </div>

          <button
            onClick={() => { setStep(1); window.scrollTo(0, 0) }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-bold text-white"
            style={{ backgroundColor: "#0d8b6e" }}
          >
            Continuar <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* ---- STEP 1: Endereco ---- */}
      {step === 1 && (
        <div className="mx-4 mb-6 rounded-xl bg-[#f0f9f6] p-5">
          <div className="mb-5 flex items-center gap-2">
            <MapPin className="h-4 w-4" style={{ color: "#0d8b6e" }} />
            <h2 className="text-base font-bold" style={{ color: "#0d8b6e" }}>Endereco de Entrega</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">CEP *</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="00000-000"
                  value={cep}
                  onChange={(e) => handleCepChange(e.target.value)}
                  maxLength={9}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]"
                />
                {cepLoading && <Loader2 className="absolute right-3 top-3.5 h-4 w-4 animate-spin text-gray-400" />}
              </div>
              <a href="https://buscacepinter.correios.com.br" target="_blank" rel="noopener noreferrer" className="mt-1 text-xs font-medium" style={{ color: "#0d8b6e" }}>
                Nao sei meu CEP
              </a>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="mb-1 block text-sm font-semibold text-gray-700">Rua *</label>
                <input type="text" placeholder="Nome da rua" value={rua} onChange={(e) => setRua(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]" />
              </div>
              <div className="w-24">
                <label className="mb-1 block text-sm font-semibold text-gray-700">Numero *</label>
                <input type="text" placeholder="123" value={numero} onChange={(e) => setNumero(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]" />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Complemento (opcional)</label>
              <input type="text" placeholder="Apto, Bloco, etc." value={complemento} onChange={(e) => setComplemento(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Bairro *</label>
              <input type="text" placeholder="Nome do bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]" />
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="mb-1 block text-sm font-semibold text-gray-700">Cidade *</label>
                <input type="text" placeholder="Nome da cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]" />
              </div>
              <div className="w-20">
                <label className="mb-1 block text-sm font-semibold text-gray-700">Estado *</label>
                <input type="text" placeholder="UF" value={estado} onChange={(e) => setEstado(e.target.value)} maxLength={2} className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#0d8b6e]" />
              </div>
            </div>
          </div>

          {/* Frete Options */}
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" style={{ color: "#0d8b6e" }} />
              <h3 className="text-sm font-bold" style={{ color: "#0d8b6e" }}>Opcoes de Frete</h3>
            </div>

            {[
              { id: "pac", label: "Correios PAC", time: "8-12 dias uteis", price: 19.39 },
              { id: "jadlog", label: "Jadlog", time: "6-8 dias uteis", price: 22.79 },
              { id: "sedex", label: "Sedex Full", time: "Chegara amanha", price: 26.89 },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFreteOption(opt.id)}
                className="mb-2 flex w-full items-center justify-between rounded-xl border px-4 py-3.5"
                style={{
                  borderColor: freteOption === opt.id ? "#0d8b6e" : "#e5e5e5",
                  backgroundColor: freteOption === opt.id ? "#f0f9f6" : "#ffffff",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded-full border-2"
                    style={{ borderColor: freteOption === opt.id ? "#0d8b6e" : "#c8c8c8" }}
                  >
                    {freteOption === opt.id && (
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#0d8b6e" }} />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-700">{opt.label}</p>
                    <p className="text-xs text-gray-400">{opt.time}</p>
                  </div>
                </div>
                <span className="text-sm font-bold" style={{ color: "#0d8b6e" }}>
                  R$ {opt.price.toFixed(2).replace(".", ",")}
                </span>
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => { setStep(0); window.scrollTo(0, 0) }}
              className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-gray-200 py-3 text-sm font-medium text-gray-600"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>
            <button
              onClick={() => { setStep(2); window.scrollTo(0, 0) }}
              className="flex flex-[1.5] items-center justify-center gap-1 rounded-lg py-3 text-sm font-bold text-white"
              style={{ backgroundColor: "#0d8b6e" }}
            >
              Continuar <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ---- STEP 2: Pagamento ---- */}
      {step === 2 && (
        <div className="mx-4 mb-6">
          {/* Pagamento via PIX label */}
          <div className="mb-4 rounded-xl bg-[#f0f9f6] px-5 py-3">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" style={{ color: "#0d8b6e" }} />
              <h2 className="text-base font-bold" style={{ color: "#0d8b6e" }}>Pagamento via PIX</h2>
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="rounded-xl border border-gray-100 p-5">
            <h3 className="mb-3 text-sm font-bold" style={{ color: "#0d8b6e" }}>Resumo do Pedido</h3>
            <div className="mb-4 flex items-center gap-3">
              <img src={product.image} alt={product.name} className="h-14 w-14 rounded-md object-contain" />
              <p className="text-sm font-medium text-gray-700">{product.name}</p>
            </div>
            <hr className="mb-3 border-gray-100" />
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal (1 item)</span>
                <span>R$ 0,00</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Frete ({freteOption === "pac" ? "Correios PAC" : freteOption === "jadlog" ? "Jadlog" : "Sedex Full"})</span>
                <span>R$ {frete.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-gray-800">
                <span>Total</span>
                <span style={{ color: "#0d8b6e" }}>R$ {frete.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
          </div>

          {/* Dados da Entrega */}
          <div className="mt-4 rounded-xl border border-gray-100 p-5">
            <h3 className="mb-3 text-sm font-bold text-gray-700">Dados da Entrega</h3>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Nome:</span>
                <span className="text-right text-gray-700">{nome || "---"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">E-mail:</span>
                <span className="text-right text-gray-700">{email || "---"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Telefone:</span>
                <span className="text-right text-gray-700">{telefone || "---"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Endereco:</span>
                <span className="text-right text-gray-700">
                  {rua && numero ? `${rua}, ${numero}` : "---"}
                  {bairro ? `\n${bairro}` : ""}
                  {cidade && estado ? `, ${cidade}/${estado}` : ""}
                </span>
              </div>
            </div>
          </div>

          {/* Security badges */}
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Lock className="h-3.5 w-3.5" />
              Pagamento Seguro
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Shield className="h-3.5 w-3.5" />
              Dados Protegidos
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => { setStep(1); window.scrollTo(0, 0) }}
              className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-gray-200 py-3 text-sm font-medium text-gray-600"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>
            <button
              onClick={handleCreatePix}
              disabled={pixLoading}
              className="flex flex-[1.5] items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-white disabled:opacity-60"
              style={{ backgroundColor: "#0d8b6e" }}
            >
              {pixLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Gerando...
                </>
              ) : (
                <>
                  <QrCode className="h-4 w-4" />
                  Gerar PIX
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Full Footer - shows on all checkout steps */}
      <div className="mt-6">
        <SharedFooter />
      </div>
    </div>
  )
}
