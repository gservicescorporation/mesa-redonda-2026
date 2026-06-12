import { NextResponse } from "next/server"
import axios from "axios"
import { getAppyPayToken } from "@/lib/appypay-token.client"

export async function GET(
  req: Request,
  context: { params: { chargeId: string } | Promise<{ chargeId: string }> }
) {
  const { chargeId } = await context.params

  try {
    const token = await getAppyPayToken()

    const response = await axios.get(
      `https://gwy-api.appypay.co.ao/v2.0/charges/${chargeId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    const dataOriginal = response.data
    
    const dadosHigienizados = {
      amount: dataOriginal.amount,
      currency: dataOriginal.currency,
      status: dataOriginal.status,
      description: dataOriginal.description,
      disputes: dataOriginal.disputes,
      applicationFeeAmount: dataOriginal.applicationFeeAmount,
      createdAt: dataOriginal.createdAt,
      updatedAt: dataOriginal.updatedAt,
      reference: {
        referenceNumber: dataOriginal.reference?.referenceNumber,
        dueDate: dataOriginal.reference?.dueDate,
        entity: dataOriginal.reference?.entity,
      },
      payment: {
        status: dataOriginal.payment?.status || dataOriginal.status,
      },
      electronicReceipt: dataOriginal.electronicReceipt,
      transactionEvents: dataOriginal.transactionEvents || []
    }

    return NextResponse.json(dadosHigienizados)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { message: "Erro ao consultar pagamento" },
      { status: error.response?.status || 500 },
    )
  }
}