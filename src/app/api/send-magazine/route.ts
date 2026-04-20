import { initDB } from "@/lib/init-db";
import { MagazineService } from "@/services/magazine.service";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const magazineService = new MagazineService();

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { success: false, error: "Email inválido" },
      { status: 400 },
    );
  }

  try {
    await initDB();

    await magazineService.saveDownload(email);

    await resend.emails.send({
      from: "Mesa Redonda com CEOs <mesaredondacomceos@globalsc.ao>",
      to: email,
      subject: "A sua revista LOCAL CONTENT MAGAZINE",
      html: `
<body style="margin:0;padding:0;background:#020617;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 10px;">

<table width="600" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;background:#ffffff;">

<!-- HERO HEADER -->
<tr>
<td 
background="https://www.mesaredonda.globalsc.ao/banner-revista.jpeg"
style="
background-size:cover;
background-position:center;
padding:60px 30px;
text-align:center;
">

<div style="background:rgba(2,6,23,0.85);padding:30px;border-radius:10px;">

<h1 style="
color:#ffffff;
font-size:26px;
margin:0;
letter-spacing:1px;
">
LOCAL CONTENT MAGAZINE
</h1>

<p style="
color:#cbd5f5;
margin-top:10px;
font-size:14px;
">
Revista Oficial • Mesa Redonda com CEOs
</p>

</div>

</td>
</tr>

<!-- CONTENT -->
<tr>
<td style="padding:40px 35px;text-align:center;">

<h2 style="
margin-top:0;
font-size:22px;
color:#0f172a;
">
Recebemos o seu pedido
</h2>

<p style="
font-size:15px;
line-height:1.6;
color:#374151;
">
Obrigado pelo seu interesse na <strong>LOCAL CONTENT MAGAZINE</strong>.
</p>

<p style="
font-size:15px;
line-height:1.6;
color:#374151;
margin-top:15px;
">
A nossa equipa irá entrar em contacto consigo brevemente para garantir o envio da sua revista.
</p>

<p style="
font-size:15px;
line-height:1.6;
color:#374151;
margin-top:15px;
">
Fique atento ao seu email e telefone.
</p>

<!-- INFO BOX -->
<div style="
margin-top:30px;
padding:20px;
background:#f1f5f9;
border-radius:8px;
font-size:14px;
color:#334155;
">
Este processo permite-nos garantir uma melhor experiência e acompanhamento personalizado.
</div>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="
background:#020617;
padding:30px;
text-align:center;
color:#94a3b8;
font-size:12px;
">

<p style="margin:0;">
© 2026 Mesa Redonda com CEOs
</p>

<p style="margin-top:6px;">
Global Services Corporation
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
`,
    });

    return Response.json({ success: 200 });
  } catch (error) {
    console.error("ERROR REAL:", error);

    return Response.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
