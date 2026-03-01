import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const transactionId = searchParams.get("id")

    if (!transactionId) {
      return NextResponse.json(
        { success: false, error: "Transaction ID is required" },
        { status: 400 }
      )
    }

    const response = await fetch(
      `https://multi.paradisepags.com/api/v1/query.php?action=get_transaction&id=${transactionId}`,
      {
        headers: {
          "X-API-Key": process.env.PARADISE_SECRET_KEY || "",
          "Content-Type": "application/json",
        },
      }
    )

    const data = await response.json()

    return NextResponse.json({
      success: true,
      status: data.status || "pending",
      amount: data.amount,
      amount_in_reais: data.amount_in_reais,
    })
  } catch (error) {
    console.error("PIX status error:", error)
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
