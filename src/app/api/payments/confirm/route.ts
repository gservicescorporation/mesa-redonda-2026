import { CartDataInterface } from "@/app/(home)/tickets/payment/page";
import { initDB } from "@/lib/init-db";
import { PaymentService } from "@/services/payment-save.service";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const paymentService = new PaymentService();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      chargeId,
      fullname,
      email,
      phoneNumber,
      enterprise,
      position,
      paymentMethod,
      cartData,
      cartTotal,
      eventName,
      eventDate,
    }: {
      chargeId: string;
      fullname: string;
      email: string;
      phoneNumber: string;
      enterprise: string | undefined;
      position: string | undefined;
      paymentMethod: "mcx" | "referencia";
      cartData: CartDataInterface;
      cartTotal: string;
      eventName: string;
      eventDate: string;
    } = body;

    await initDB();

    await paymentService.create({
      chargeId,
      fullname,
      email,
      phoneNumber,
      enterprise,
      position,
      paymentMethod,
      eventName,
      eventDate,
      cartTotal: Number(cartTotal),
      cartData,
    });
    // =========================
    // 📩 EMAIL INTERNO (EQUIPE)
    // =========================
    await resend.emails.send({
      from: "Mesa Redonda <mesaredondacomceos@globalsc.ao>",
      to: ["mesaredondacomceos@globalsc.ao"],
      subject: `Pagamento recebido – ${eventName}`,
      html: `
<div style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
<table width="100%">
<tr>
<td align="center">

<table width="650" style="background:#ffffff;border-radius:8px;overflow:hidden;">

<!-- HERO -->
<tr>
<td style="background:url('https://www.mesaredonda.globalsc.ao/images/bg-sponsor.png') center/cover no-repeat;">
<table width="100%">
<tr>
<td style="background:rgba(0,19,44,0.6);padding:40px;text-align:center;color:#fff;">
<h1 style="margin:0;">Pagamento Confirmado</h1>
<p>Mesa Redonda com CEOs</p>
</td>
</tr>
</table>
</td>
</tr>

<!-- CONTEÚDO -->
<tr>
<td style="padding:30px;">

<h2 style="color:#0149a7;">Dados do cliente</h2>

<table width="100%" cellpadding="8">
<tr><td><strong>Nome:</strong></td><td>${fullname}</td></tr>
<tr><td><strong>Email:</strong></td><td>${email}</td></tr>
<tr><td><strong>Telefone:</strong></td><td>${phoneNumber}</td></tr>
<tr><td><strong>Empresa:</strong></td><td>${enterprise || "N/A"}</td></tr>
<tr><td><strong>Cargo:</strong></td><td>${position || "N/A"}</td></tr>
</table>

<hr style="margin:25px 0;" />

<h2 style="color:#0149a7;">Detalhes do pagamento</h2>

<table width="100%" cellpadding="8">
<tr><td><strong>Evento:</strong></td><td>${eventName}</td></tr>
<tr><td><strong>Data:</strong></td><td>${eventDate}</td></tr>
<tr><td><strong>Método:</strong></td>
<td style="text-transform:uppercase;font-weight:bold;">
${paymentMethod}
</td></tr>

<tr><td><strong>Charge ID:</strong></td>
<td style="font-size:12px;color:#666;">${chargeId}</td></tr>

<tr>
<td><strong>Total:</strong></td>
<td style="color:#198754;font-weight:bold;font-size:18px;">
${cartTotal} Kz
</td>
</tr>
</table>

<hr style="margin:25px 0;" />

<h2 style="color:#0149a7;">Itens comprados</h2>

<table width="100%" cellpadding="10" style="border-collapse:collapse;">
<tr style="background:#f4f6f9;">
<th align="left">Ticket</th>
<th align="center">Qtd</th>
<th align="right">Preço</th>
</tr>

${cartData
  .map(
    (item) => `
<tr style="border-bottom:1px solid #eee;">
<td>${item.ticket.ticketName}</td>
<td align="center">${item.qty}</td>
<td align="right">${item.ticket.price} Kz</td>
</tr>
`,
  )
  .join("")}

</table>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="background:#00132c;color:#fff;text-align:center;padding:20px;font-size:12px;">
Mesa Redonda com CEOs © ${new Date().getFullYear()}
</td>
</tr>

</table>

</td>
</tr>
</table>
</div>
`,
    });

    // =========================
    // 📩 EMAIL PARA CONVIDADO
    // =========================
    await resend.emails.send({
      from: "Mesa Redonda <mesaredondacomceos@globalsc.ao>",
      to: [email],
      subject: `Pagamento confirmado – ${eventName}`,
      html: `
<div style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
<table width="100%">
<tr>
<td align="center">

<table width="600" style="background:#ffffff;border-radius:8px;overflow:hidden;">

<tr>
<td style="background:url('https://www.mesaredonda.globalsc.ao/images/bg-sponsor.png') center/cover no-repeat;">
<table width="100%">
<tr>
<td style="background:rgba(0,19,44,0.45);padding:40px;text-align:center;color:#fff;">
<h1 style="margin:0;">Pagamento Confirmado</h1>
<p>Mesa Redonda com CEOs</p>
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="padding:30px;">

<h2 style="color:#0149a7;">Olá, ${fullname}</h2>

<p style="font-size:15px;color:#333;">
O seu pagamento foi confirmado com sucesso.
</p>

<table width="100%" cellpadding="8" style="margin-top:20px;">
<tr><td><strong>Evento:</strong> ${eventName}</td></tr>
<tr><td><strong>Data:</strong> ${eventDate}</td></tr>
<tr>
<td><strong>Valor pago:</strong> 
<span style="color:#198754;font-weight:bold;">${cartTotal}</span>
</td>
</tr>
</table>

<p style="margin-top:20px;">
O seu ingresso está garantido. Apresente este e-mail no dia do evento.
</p>

<div style="text-align:center;margin-top:30px;">
<a href="https://www.mesaredonda.globalsc.ao"
style="display:inline-block;padding:12px 25px;background:#0149a7;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;">
Ver detalhes do evento
</a>
</div>

</td>
</tr>

<tr>
<td style="background:#00132c;color:#fff;text-align:center;padding:20px;font-size:12px;">
Mesa Redonda com CEOs © ${new Date().getFullYear()}
</td>
</tr>

</table>

</td>
</tr>
</table>
</div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 },
    );
  }
}
