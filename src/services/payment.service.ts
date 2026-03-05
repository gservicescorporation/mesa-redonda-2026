import { appypayClient } from "../lib/appypay";

const generateMerchantTransactionId = () => {
  const randomId = Math.floor(Math.random() * 1e8);
  return `TX${randomId}`.substring(0, 15);
};

interface CreateChargeResult {
  ok: boolean;
  id: string;
  merchantTransactionId: string;
  reference?: any;
  message?: string;
  providerCode?: string;
  sourceDetails?: {
    attempt?: number;
    type?: string;
    code?: string;
    message?: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createCharge(payload: any): Promise<CreateChargeResult> {
  console.log("==== CREATE CHARGE START ====")

  const merchantTransactionId = generateMerchantTransactionId();

  const gatewayPayload: any = {
    amount: payload.amount,
    currency: payload.currency,
    description: payload.description,
    merchantTransactionId,
    paymentMethod:
      payload.paymentMethod === "mcx"
        ? process.env.APPYPAY_GPO_ID
        : process.env.APPYPAY_REF_ID,
    options: {
      MerchantIdentifier: process.env.APPYPAY_MERCHANT_IDENTIFIER,
      ApiKey: process.env.APPYPAY_API_KEY,
    },
  };

  if (payload.paymentMethod !== "referencia") {
    gatewayPayload.paymentInfo = { phoneNumber: payload.phoneNumber };
    gatewayPayload.notify = {
      name: payload.fullName,
      telephone: payload.phoneNumber,
      email: payload.email,
      smsNotification: true,
      emailNotification: true,
    };
  }


  const response = await appypayClient.post("/charges", gatewayPayload);

  console.log("DEPOIS DO APPYPAY POST");
  console.log("Resposta bruta:", response.data);

  const rs = response.data?.responseStatus;

  if (!rs || rs.successful !== true) {
    return {
      ok: false,
      merchantTransactionId,
      id: response.data?.id,
      message: rs?.message,
      providerCode: rs?.sourceDetails?.code,
      sourceDetails: rs?.sourceDetails,
    };
  }

  return {
    ok: true,
    id: response.data?.id,
    merchantTransactionId,
    reference: rs?.reference,
    sourceDetails: rs?.sourceDetails,
  };
}