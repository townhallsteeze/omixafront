import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTJ9KMGG');`}
        </Script>
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTJ9KMGG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
