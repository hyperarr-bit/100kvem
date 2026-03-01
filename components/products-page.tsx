"use client"

import { useState } from "react"
import { products, type Product } from "@/lib/products-data"
import { ProductCard } from "./product-card"
import { ProductDetailPage } from "./product-detail-page"
import { SharedFooter } from "./shared-footer"
import { Heart, Menu, ShoppingBag, User } from "lucide-react"

export function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setSelectedProduct(null)
    window.scrollTo(0, 0)
  }

  if (selectedProduct) {
    return <ProductDetailPage product={selectedProduct} onBack={handleBack} />
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

      {/* Breadcrumb */}
      <div className="px-4 pt-3 pb-1 text-[0.7rem] text-gray-500">
        <span className="inline-flex items-center gap-1">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {" > "}
          <span className="font-medium">PROMOCAO</span>
        </span>
      </div>

      {/* Title Section */}
      <div className="px-4 pt-4 pb-2 text-center">
        <h1
          className="text-xl font-extrabold uppercase leading-tight"
          style={{ color: "#0d8b6e" }}
        >
          {"\uD83C\uDF89"} PARABENS! ESCOLHA SEU{"\n"}PREMIO
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Voce ganhou um super desconto em toda a loja!
        </p>
        <p className="text-sm text-gray-500">Escolha o seu favorito.</p>
        <p className="mt-3 text-sm font-bold" style={{ color: "#0d8b6e" }}>
          11 PRODUTOS
        </p>
      </div>

      {/* Products Grid */}
      <div className="px-4 pt-4 pb-6">
        {/* Featured Product (first one, full width) */}
        <div className="mb-4">
          <ProductCard product={products[0]} featured onClick={() => handleProductClick(products[0])} />
        </div>

        {/* Grid 2 columns for the rest */}
        <div className="grid grid-cols-2 gap-3">
          {products.slice(1).map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
          ))}
        </div>
      </div>

      {/* Shared Footer */}
      <SharedFooter />
    </div>
  )
}
