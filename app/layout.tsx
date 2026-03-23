import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
