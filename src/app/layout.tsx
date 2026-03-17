import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mesa Redonda com CEO's 2026 - 5ª Edição: O Papel da Banca e de Outros Agentes do Sistema Financeiro na Mobilização de Financiamento",
  description:
    "O evento reúne decisores públicos, banca, operadores petrolíferos e empresas nacionais para transformar política económica em financiamento real, acelerar a industrialização e consolidar cadeias de valor nacionais.",

  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mesa Redonda com CEO's 2026 - 5ª Edição",
    description:
      "O evento reúne decisores públicos, banca, operadores petrolíferos e empresas nacionais para transformar política económica em financiamento real, acelerar a industrialização e consolidar cadeias de valor nacionais.",
    url: "https://www.mesaredonda.globalsc.ao",
    siteName: "Mesa Redonda com CEO's 2026 - 5ª Edição",
    images: [
      {
        url: "https://www.mesaredonda.globalsc.ao/logo.jpeg",
        width: 1920,
        height: 1040,
        alt: "Mesa Redonda com CEO's 2026 - 5ª Edição",
      },
    ],
    locale: "pt-PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesa Redonda com CEO's 2026 - 5ª Edição",
    description:
      "O evento reúne decisores públicos, banca, operadores petrolíferos e empresas nacionais para transformar política económica em financiamento real, acelerar a industrialização e consolidar cadeias de valor nacionais.",
    images: ["https://www.mesaredonda.globalsc.ao/logo.jpeg"],
  },
  metadataBase: new URL("https://www.mesaredonda.globalsc.ao"),
  authors: [
    {
      name: "Mesa Redonda com CEO's 2026 - 5ª Edição",
      url: "https://www.mesaredonda.globalsc.ao",
    },
  ],
  keywords: [
    "Mesa Redonda com CEO's 2026",
    "Financiamento Bancário",
    "Sistema Financeiro Angola",
    "Mobilização de Financiamento",
    "Política Económica",
    "Industrialização",
    "Cadeias de Valor Nacionais",
    "Operadores Petrolíferos",
    "Investimento Estrangeiro",
    "Desenvolvimento Económico",
    "Conferência de Negócios 2026",
    "Sector Bancário",
    "Global SC",
    "Mercado de Capitais",
    "Financiamento Industrial",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {children}

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mesa Redonda com CEO's",
              url: "https://www.mesaredonda.globalsc.ao",
              logo: "https://www.mesaredonda.globalsc.ao/logo.jpeg",
              sameAs: [
                "https://www.facebook.com/p/Global-Services-Corporation-100094301594638/",
                "https://www.instagram.com/globalservicescorporation/",
                "https://ao.linkedin.com/company/global-service-corporations",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+244 941 064 919",
                  contactType: "customer service",
                  areaServed: "AO",
                  availableLanguage: ["pt", "en"],
                },
              ],
              department: [
                {
                  "@type": "Organization",
                  name: "Início",
                  url: "https://www.mesaredonda.globalsc.ao",
                },
                {
                  "@type": "Organization",
                  name: "Sobre",
                  url: "https://www.mesaredonda.globalsc.ao/about",
                },
                {
                  "@type": "Organization",
                  name: "Oradores",
                  url: "https://www.mesaredonda.globalsc.ao/speakers",
                },
                {
                  "@type": "Organization",
                  name: "Ingressos",
                  url: "https://www.mesaredonda.globalsc.ao/tickets",
                },
                {
                  "@type": "Organization",
                  name: "Entrar em contacto",
                  url: "https://www.mesaredonda.globalsc.ao/contact",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
