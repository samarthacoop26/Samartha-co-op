import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Footer } from "@/components/layout/Footer";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { QuoteModal } from "@/components/common/QuoteModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A1628]">
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
