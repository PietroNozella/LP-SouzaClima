import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Souza Clima | Ar Condicionado e Refrigeração em São Paulo",
  description:
    "Instalação, manutenção e higienização de ar-condicionado em São Paulo capital. Atendimento ágil, prazo garantido e equipe qualificada. Solicite seu orçamento.",
  keywords: [
    "ar condicionado São Paulo",
    "instalação ar condicionado",
    "manutenção ar condicionado",
    "higienização ar condicionado",
    "Souza Clima",
  ],
  openGraph: {
    title: "Souza Clima | Ar Condicionado e Refrigeração",
    description:
      "Instalação, manutenção e higienização de ar-condicionado em São Paulo capital.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
