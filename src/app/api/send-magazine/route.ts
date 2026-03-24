import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
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
Obrigado pelo seu interesse
</h2>

<p style="
font-size:15px;
line-height:1.6;
color:#374151;
">

A Revista <strong>LOCAL CONTENT MAGAZINE</strong> foi preparada para lhe trazer insights e oportunidades sobre o desenvolvimento do conteúdo local.

</p>

<p style="
font-size:15px;
color:#374151;
margin-top:20px;
">
Clique no botão abaixo para baixar a revista:
</p>

<!-- BUTTON -->
<table align="center" cellpadding="0" cellspacing="0" style="margin-top:30px;">
<tr>
<td align="center" bgcolor="#1e40af" style="border-radius:8px;">
<a 
href="https://www.mesaredonda.globalsc.ao/magazine/local-content-magazine.pdf"
style="
display:inline-block;
padding:16px 32px;
font-size:15px;
color:#ffffff;
text-decoration:none;
font-weight:bold;
letter-spacing:0.5px;
">
Baixar a Revista • PDF 14MB
</a>
</td>
</tr>
</table>

<p style="
font-size:13px;
color:#6b7280;
margin-top:30px;
">
Caso o botão não funcione, utilize o link abaixo:
</p>

<p style="
font-size:13px;
color:#1e40af;
word-break:break-all;
">
https://www.mesaredonda.globalsc.ao/magazine/local-content-magazine.pdf
</p>

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
    return Response.json({ success: false });
  }
}
