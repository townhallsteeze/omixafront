import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://omixalabs.ai"),
  title: { default: "Omixa Labs | Intelligence That Works", template: "%s | Omixa Labs" },
  description: "Omixa Labs builds AI agents, automation, machine learning solutions, intelligent chatbots, and custom AI-powered software.",
  openGraph: { title: "Omixa Labs", description: "Intelligence that works. Automation that scales.", images: ["/images/omixa-labs-logo.png"] },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
