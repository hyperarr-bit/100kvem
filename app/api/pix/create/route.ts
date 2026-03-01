import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { product, customer, shippingCost } = body

    const amountInCents = shippingCost || 1939

    const reference = `BOTI-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

    const response = await fetch("https://multi.paradisepags.com/api/v1/transaction.php", {
      method: "POST",
      headers: {
        "X-API-Key": process.env.PARADISE_SECRET_KEY || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInCents,
        description: product?.name || "Kit O Boticario",
        reference,
        source: "api_externa",
        customer: {
          name: customer.name,
          email: customer.email,
          phone: customer.phone.replace(/\D/g, ""),
          document: customer.document || "00000000000",
        },
      }),
    })

    const data = await response.json()

    if (data.status === "success") {
      return NextResponse.json({
        success: true,
        transaction_id: data.transaction_id,
        reference: data.id || reference,
        qr_code: data.qr_code,
        qr_code_base64: data.qr_code_base64,
        amount: data.amount,
        expires_at: data.expires_at,
      })
    } else {
      return NextResponse.json(
        { success: false, error: data.message || "Erro ao criar transacao" },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error("PIX create error:", error)
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
