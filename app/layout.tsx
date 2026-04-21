import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
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
    <html lang="pt-BR" className={geistSans.variable}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
