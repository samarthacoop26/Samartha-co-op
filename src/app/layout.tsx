import type { Metadata, Viewport } from "next";
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0A1628] font-sans" suppressHydrationWarning>
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
