import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Footer } from "@/components/layout/Footer";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { QuoteModal } from "@/components/common/QuoteModal";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samarth Corporation | PP & FRP Engineering Solutions, Lining & Turnkey Projects",
  description: "Manufacturer & stockist of PP & FRP tanks, scrubbers, blowers, M.S. lining, thermoplastic pipelines, and turnkey project execution across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A1628] font-sans">
        <QuoteModalProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingContact />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
