import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { createCharge } from "../../../../services/payment.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await createCharge(body);

    if (!result.ok) {
      return NextResponse.json(
        {
          message: result.message,
          code: result.providerCode,
          sourceDetails: result.sourceDetails,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        id: result.id,
        merchantTransactionId: result.merchantTransactionId,
        reference: result.reference,
      },
      { status: 202 },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("==== ERRO NA ROUTE CREATE-CHARGE ====");
    console.error(error);

    if (axios.isAxiosError(error)) {
      console.error("Axios error data:", error.response?.data);

      return NextResponse.json(
        {
          message:
            error.response?.data?.responseStatus?.message || "Erro gateway",
          gatewayResponse: error.response?.data,
        },
        { status: error.response?.status || 500 },
      );
    }

    return NextResponse.json(
      {
        message: "Erro interno inesperado",
        error: error?.message,
        stack: error?.stack,
      },
      { status: 500 },
    );
  }
}
