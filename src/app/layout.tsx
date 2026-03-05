import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mesa Redonda com CEOS 2026 - 5ª Edição: O Papel da Banca e de Outros Agentes do Sistema Financeiro na Mobilização de Financiamento",
  description:
    "O evento reúne decisores públicos, banca, operadores petrolíferos e empresas nacionais para transformar política económica em financiamento real, acelerar a industrialização e consolidar cadeias de valor nacionais.",
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
      </body>
    </html>
  );
}
