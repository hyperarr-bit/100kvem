"use client"

import { useState } from "react"
import { ChevronDown, Heart, ShoppingBag, User } from "lucide-react"

function FooterAccordion({ icon, title }: { icon: React.ReactNode; title: string }) {
  const [open, setOpen] = useState(false)

  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-left"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        {icon}
        {title}
      </div>
      <ChevronDown
        className={`h-4 w-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
      />
    </button>
  )
}

export function SharedFooter() {
  return (
    <>
      {/* Banner */}
      <div className="w-full">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-1-LtSLwaA1Q1UmmhBCLFxZxWiThhw1JY.png"
          alt="Compre na loja sem precisar sair de casa"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* SEO Text */}
      <div className="px-4 pt-8 pb-6">
        <h2 className="mb-4 text-lg font-bold italic text-gray-800">
          {"Tudo sobre os Lan\u00E7amentos do Botic\u00E1rio!"}
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {"Os \u00FAltimos "}
          <strong>{"lan\u00E7amentos Botic\u00E1rio"}</strong>
          {" reunidos em um s\u00F3 lugar! Confira as principais novidades que preparamos para voc\u00EA e encontre o seu novo item favorito."}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {"O Botic\u00E1rio est\u00E1 sempre desenvolvendo novos produtos para que voc\u00EA possa deixar a sua rotina de autocuidados ainda melhor."}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {"Para encontrar o item ideal, voc\u00EA pode filtrar o "}
          <strong>{"lan\u00E7amento"}</strong>
          {" por categoria, como "}
          <span className="underline" style={{ color: "#0d8b6e" }}>Cabelos</span>
          {", "}
          <span className="underline" style={{ color: "#0d8b6e" }}>Perfumaria</span>
          {", "}
          <span className="underline" style={{ color: "#0d8b6e" }}>Maquiagem</span>
          {", "}
          <span className="underline" style={{ color: "#0d8b6e" }}>{"Cuidados para Pele"}</span>
          {" e "}
          <span className="underline" style={{ color: "#0d8b6e" }}>{"Corpo e Banho"}</span>
          {". E tamb\u00E9m pelo pre\u00E7o que deseja pagar."}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {"Outra forma de encontrar o "}
          <strong>{"lan\u00E7amento Botic\u00E1rio"}</strong>
          {" perfeito \u00E9 escolhendo entre as suas linhas favoritas. Voc\u00EA pode filtrar o produto de acordo com a marca desejada como, por exemplo, "}
          <strong>{"lan\u00E7amento Malbec"}</strong>
          {", "}
          <strong>{"lan\u00E7amento Floratta"}</strong>
          {" ou "}
          <strong>{"lan\u00E7amento Match"}</strong>
          {"."}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {"Essa \u00E9 para quem ama presentear ou colecionar! A collab entre "}
          <span className="underline" style={{ color: "#0d8b6e" }}>{"O Botic\u00E1rio e Netflix"}</span>
          {" est\u00E1 dando o que falar! S\u00E3o produtos incr\u00EDveis com a tem\u00E1tica das s\u00E9ries Sex Education, La Casa de Papel e Stranger Things. S\u00E3o edi\u00E7\u00F5es de cuidados de Cuide-se Bem Netflix, Intense Netflix e Egeo."}
        </p>
        <p className="text-sm italic leading-relaxed" style={{ color: "#0d8b6e" }}>
          {"Confira os \u00FAltimos "}
          <strong className="underline">{"lan\u00E7amentos Botic\u00E1rio"}</strong>
          {" e encontre o seu novo item favorito!"}
        </p>
      </div>

      <hr className="mx-4 border-gray-200" />

      {/* Clique & Retire */}
      <div className="px-4 pt-6 pb-6">
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          {"Clique & Retire O Botic\u00E1rio"}
        </h2>
        <p className="text-sm leading-relaxed text-gray-600">
          {"Voc\u00EA j\u00E1 conhece este servi\u00E7o do Boti? Com ele, \u00E9 poss\u00EDvel comprar produtos de forma r\u00E1pida, pr\u00E1tica e "}
          <strong>sem pagar frete</strong>
          {". Com o "}
          <span className="underline" style={{ color: "#0d8b6e" }}>{"Clique & Retire"}</span>
          {" voc\u00EA compra online e escolhe a loja mais pr\u00F3xima para receber seus produtos. Confira todas as vantagens!"}
        </p>
      </div>

      <hr className="mx-4 border-gray-200" />

      {/* Footer Accordions */}
      <div className="px-4 pt-4 pb-2">
        <FooterAccordion icon={<User className="h-4 w-4" />} title="Conta" />
        <FooterAccordion
          icon={
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="Ajuda"
        />
        <FooterAccordion
          icon={<ShoppingBag className="h-4 w-4" />}
          title="Compre online"
        />
        <FooterAccordion
          icon={
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
          title="Institucional"
        />
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 px-4 pt-6 pb-8 text-center">
        <p className="text-xs font-bold text-gray-700">
          {"\u00A92025 O Botic\u00E1rio. Todos os direitos reservados."}
        </p>
        <p className="mt-2 text-[0.65rem] leading-relaxed text-gray-400">
          {"Botic\u00E1rio Franchising S.A \u2022 CNPJ: 75.063.296/0001-04 \u2022 Atendimento: sac@boticario.com.br \u2022 Hor\u00E1rio de Atendimento: 09h \u00E0s 18h de segunda a sexta. Op\u00E7\u00E3o de pagamento: PIX."}
        </p>
      </div>
    </>
  )
}
