import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      company,
      subject,
      message,
    }: {
      fullName: string;
      email: string;
      phone: string;
      company?: string;
      subject: string;
      message: string;
    } = body;

    await resend.emails.send({
      from: "Mesa Redonda <mesaredondacomceos@globalsc.ao>",
      to: ["mesaredondacomceos@globalsc.ao"],
      subject: `Novo contacto: ${subject}`,
      html: `
  <div style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">

          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">

            <!-- Hero -->
            <tr>
  <td style="
    background:url('https://www.mesaredonda.globalsc.ao/images/bg-sponsor.png') center/cover no-repeat;
  ">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="
          background:rgba(0,19,44,0.45);
          padding:40px;
          text-align:center;
          color:#ffffff;
        ">
          <h1 style="
            margin:0;
            font-size:26px;
            text-shadow:0 2px 6px rgba(0,0,0,0.6);
          ">
            Novo Contacto
          </h1>

          <p style="
            margin:5px 0 0;
            font-size:14px;
            text-shadow:0 1px 4px rgba(0,0,0,0.6);
          ">
            Mesa Redonda com CEOs
          </p>
        </td>
      </tr>
    </table>
  </td>
</tr>

            <!-- Conteúdo -->
            <tr>
              <td style="padding:30px;">

                <h2 style="color:#0149a7;margin-bottom:20px;">Detalhes do contacto</h2>

                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr>
                    <td><strong>Nome:</strong></td>
                    <td>${fullName}</td>
                  </tr>
                  <tr>
                    <td><strong>Email:</strong></td>
                    <td>${email}</td>
                  </tr>
                  <tr>
                    <td><strong>Telefone:</strong></td>
                    <td>${phone}</td>
                  </tr>
                  <tr>
                    <td><strong>Empresa:</strong></td>
                    <td>${company || "N/A"}</td>
                  </tr>
                  <tr>
                    <td><strong>Assunto:</strong></td>
                    <td style="color:#b48a2c;font-weight:bold;">
                      ${subject.toUpperCase()}
                    </td>
                  </tr>
                </table>

                <div style="margin-top:25px;">
                  <h3 style="color:#00132c;">Mensagem</h3>
                  <p style="
                    background:#f4f6f9;
                    padding:15px;
                    border-left:4px solid #0149a7;
                    border-radius:6px;
                  ">
                    ${message}
                  </p>
                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="
                background:#00132c;
                color:#ffffff;
                text-align:center;
                padding:20px;
                font-size:12px;
              ">
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

    await resend.emails.send({
      from: "Mesa Redonda <mesaredondacomceos@globalsc.ao>",
      to: [email],
      subject: "Recebemos a sua mensagem",
      html: `
  <div style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">

          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">

            <!-- Hero -->
            <tr>
  <td style="
    background:url('https://www.mesaredonda.globalsc.ao/images/bg-sponsor.png') center/cover no-repeat;
  ">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="
          background:rgba(0,19,44,0.45);
          padding:50px 30px;
          text-align:center;
          color:#ffffff;
        ">
          <h1 style="
            margin:0;
            font-size:26px;
            text-shadow:0 2px 6px rgba(0,0,0,0.6);
          ">
            Mensagem Recebida
          </h1>

          <p style="
            margin-top:8px;
            font-size:14px;
            text-shadow:0 1px 4px rgba(0,0,0,0.6);
          ">
            Obrigado por entrar em contacto
          </p>
        </td>
      </tr>
    </table>
  </td>
</tr>

            <!-- Conteúdo -->
            <tr>
              <td style="padding:30px;">

                <h2 style="color:#0149a7;">Olá, ${fullName}</h2>

                <p style="color:#333;font-size:15px;line-height:1.6;">
                  Recebemos a sua mensagem com sucesso. A nossa equipa irá analisar
                  o seu pedido e responder com a maior brevidade possível.
                </p>

                <div style="
                  margin-top:25px;
                  padding:20px;
                  background:#f4f6f9;
                  border-radius:6px;
                  border-left:4px solid #b48a2c;
                ">
                  <p style="margin:0;"><strong>Assunto:</strong> ${subject.toUpperCase()}</p>
                  <p style="margin-top:10px;">${message}</p>
                </div>

                <!-- CTA -->
                <div style="text-align:center;margin-top:30px;">
                  <a href="https://www.mesaredondacomceos.globalsc.ao"
                    style="
                      display:inline-block;
                      padding:12px 25px;
                      background:#0149a7;
                      color:#ffffff;
                      text-decoration:none;
                      border-radius:6px;
                      font-weight:bold;
                    ">
                    Visitar Website
                  </a>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="
                background:#00132c;
                color:#ffffff;
                text-align:center;
                padding:20px;
                font-size:12px;
              ">
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
