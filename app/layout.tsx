import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { PricingFooter } from "../components/layout/PricingFooter";
import { PageTransition } from "../components/layout/PageTransition";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Ateliux | Automação de Instagram com IA",
  description:
    "Gerencie postagens, comentários e Direct em massa com a AI Ateliux. Conecte seu Instagram/Meta e automatize tudo em um único painel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${spaceGrotesk.variable} font-sans bg-black text-gray-100 antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-black">
          <Navbar />
          <PageTransition>
            <main className="pb-10 pt-4 sm:pt-6 lg:pt-8 bg-black">{children}</main>
          </PageTransition>
          <PricingFooter />
        </div>
      </body>
    </html>
  );
}
