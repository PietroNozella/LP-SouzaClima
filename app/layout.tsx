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
  title: "Souza Clima | Ar Condicionado e Refrigera\u00e7\u00e3o em S\u00e3o Paulo",
  description:
    "Instala\u00e7\u00e3o, manuten\u00e7\u00e3o e higieniza\u00e7\u00e3o de ar-condicionado em S\u00e3o Paulo capital. Atendimento \u00e1gil, prazo garantido e equipe qualificada. Solicite seu or\u00e7amento.",
  icons: {
    icon: "/favicon-sc.png",
    apple: "/apple-icon-sc.png",
  },
  keywords: [
    "ar condicionado S\u00e3o Paulo",
    "instala\u00e7\u00e3o ar condicionado",
    "manuten\u00e7\u00e3o ar condicionado",
    "higieniza\u00e7\u00e3o ar condicionado",
    "Souza Clima",
  ],
  openGraph: {
    title: "Souza Clima | Ar Condicionado e Refrigera\u00e7\u00e3o",
    description:
      "Instala\u00e7\u00e3o, manuten\u00e7\u00e3o e higieniza\u00e7\u00e3o de ar-condicionado em S\u00e3o Paulo capital.",
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
