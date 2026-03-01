"use client"

import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
  featured?: boolean
  onClick?: () => void
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function ProductCard({ product, featured = false, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative flex cursor-pointer flex-col rounded-2xl bg-white ${featured ? "col-span-2" : ""}`}
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
    >
      {/* Badge */}
      {product.badge && (
        <span
          className="absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-bold text-white"
          style={{ backgroundColor: "#0d8b6e" }}
        >
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div className={`flex items-center justify-center overflow-hidden rounded-t-2xl bg-white ${featured ? "p-6" : "p-4"}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`h-auto w-full object-contain ${featured ? "max-h-[280px]" : "max-h-[160px]"}`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-3 pt-2 pb-4">
        {/* Tag */}
        {product.tag && (
          <span
            className="mb-2 w-fit rounded-full border px-3 py-0.5 text-[0.65rem] font-medium"
            style={{ borderColor: "#0d8b6e", color: "#0d8b6e" }}
          >
            {product.tag}
          </span>
        )}

        {/* Brand */}
        <p className="text-[0.7rem] font-semibold text-gray-700">{product.brand}</p>

        {/* Name */}
        <h3 className="mt-0.5 text-[0.8rem] font-bold leading-tight text-gray-900">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-1.5">
          <StarRating rating={product.rating} />
        </div>

        {/* Price */}
        <p className="mt-1.5 text-[0.7rem] text-gray-400 line-through">{product.oldPrice}</p>
        <p className="text-lg font-extrabold" style={{ color: "#0d8b6e" }}>
          {product.newPrice}
        </p>

        {/* Description */}
        <p className="mt-1 text-[0.7rem] leading-relaxed text-gray-500">{product.description}</p>
      </div>
    </div>
  )
}
