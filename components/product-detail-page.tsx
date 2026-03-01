"use client"

import { useState } from "react"
import type { Product } from "@/lib/products-data"
import { productDetails } from "@/lib/product-details-data"
import { CheckoutPage } from "./checkout-page"
import { SharedFooter } from "./shared-footer"
import { ArrowLeft, Heart, Menu, ShoppingBag, ShoppingCart, User } from "lucide-react"

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const sizeClass = size === "md" ? "h-5 w-5" : "h-4 w-4"
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${sizeClass} ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

interface ProductDetailPageProps {
  product: Product
  onBack: () => void
}

export function ProductDetailPage({ product, onBack }: ProductDetailPageProps) {
  const [showCheckout, setShowCheckout] = useState(false)
  const detail = productDetails[product.id]
  const totalReviews = detail?.reviews.length ?? 0
  const avgRating = detail ? (detail.reviews.reduce((a, r) => a + r.rating, 0) / totalReviews).toFixed(1) : "5.0"

  if (showCheckout) {
    return (
      <CheckoutPage
        product={product}
        onBack={() => {
          setShowCheckout(false)
          window.scrollTo(0, 0)
        }}
      />
    )
  }

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
          <img
            src="/logo-oboticario.svg"
            alt="O Boticario"
            className="h-auto"
            style={{ width: "130px" }}
          />
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Conta">
            <User className="h-6 w-6 text-gray-700" />
          </button>
          <button aria-label="Favoritos">
            <Heart className="h-6 w-6 text-gray-700" />
          </button>
          <button aria-label="Carrinho">
            <ShoppingBag className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 px-4 pt-3 pb-1 text-sm text-gray-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </button>

      {/* Breadcrumb */}
      <div className="px-4 pt-1 pb-2 text-[0.7rem] text-gray-500">
        <span className="inline-flex flex-wrap items-center gap-1">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {" > "}
          <span>PROMOCAO</span>
          {" > "}
          <span className="font-medium">{product.name}</span>
        </span>
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center bg-white px-4 py-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-auto w-full max-w-[350px] object-contain"
          style={{ maxHeight: "320px" }}
        />
      </div>

      {/* Product Info */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-xl font-bold leading-tight text-gray-900">
          {product.name}
        </h1>
        <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        <p className="mt-2 text-sm text-gray-400 line-through">{product.oldPrice}</p>
        <p className="text-2xl font-extrabold" style={{ color: "#0d8b6e" }}>
          {product.newPrice}
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="px-4 pt-2 pb-6">
        <button
          onClick={() => { setShowCheckout(true); window.scrollTo(0, 0) }}
          className="flex w-full items-center justify-center gap-2 rounded-lg py-4 text-sm font-bold text-white"
          style={{ backgroundColor: "#0d8b6e" }}
        >
          <ShoppingCart className="h-5 w-5" />
          ADICIONAR AO CARRINHO
        </button>
      </div>

      {/* Divider */}
      <hr className="mx-4 border-gray-200" />

      {/* Description */}
      {detail && (
        <>
          <div className="px-4 pt-6 pb-4">
            <h2 className="mb-4 text-lg font-bold text-gray-900">
              {"Descricao do Produto"}
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              {detail.longDescription}
            </p>
          </div>

          {/* Characteristics */}
          <div className="px-4 pt-2 pb-4">
            <p className="mb-3 text-sm font-bold text-gray-900">
              {"Caracteristicas:"}
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              {detail.characteristics.map((item, i) => (
                <li key={i} className="text-sm text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Info Box */}
          <div className="mx-4 mb-6 rounded-lg bg-gray-50 p-4">
            <p className="text-sm leading-relaxed text-gray-600">
              {"Este produto e um brinde exclusivo do Boticario. Voce nao pagara nada pelo produto. Aproveite esta oportunidade unica!"}
            </p>
          </div>

          {/* Divider */}
          <hr className="mx-4 border-gray-200" />

          {/* Reviews Section */}
          <div className="px-4 pt-6 pb-2">
            <h2 className="mb-2 text-lg font-bold text-gray-900">
              {"Avaliacoes dos Clientes"}
            </h2>
            <div className="mb-4 flex items-center gap-2">
              <StarRating rating={5} size="md" />
              <span className="text-sm font-bold text-gray-700">
                {avgRating}/5
              </span>
              <span className="text-sm text-gray-400">
                ({totalReviews} avaliacoes)
              </span>
            </div>
          </div>

          {/* Review Cards */}
          <div className="px-4 pb-6">
            {detail.reviews.map((review, i) => (
              <div
                key={i}
                className="mb-4 rounded-lg border border-gray-100 p-4"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-bold text-gray-900">
                    {review.title}
                  </h3>
                  <span className="ml-2 shrink-0 text-xs text-gray-400">
                    {review.date}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <StarRating rating={review.rating} />
                  <span className="text-xs font-medium text-gray-500">
                    {review.rating}/5
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {review.text}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: "#e8f5f1" }}>
                    <User className="h-4 w-4" style={{ color: "#0d8b6e" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#0d8b6e" }}>
                    {review.author}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <SharedFooter />
        </>
      )}
    </div>
  )
}
