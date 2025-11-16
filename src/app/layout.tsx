import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "AK Overseas",
  description: "Travel & visa services",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        {/* Global site styles served from /public */}
        <link rel="stylesheet" href="/styles.css" />
        {/* Optional preloads */}
        <link rel="preload" as="image" href="/images/hero1.jpg" />
        <link rel="preload" as="image" href="/images/hero2.jpg" />
        <link rel="preload" as="image" href="/images/hero3.jpg" />
        <link rel="preload" as="image" href="/images/banner.png" />
      </head>
      <body>
        {/* ONE global sentinel (do not duplicate on pages) */}
        <div id="top-sentinel" aria-hidden="true" />
        {children}
        <Footer />
        {/* Load DOM JS once, after hydration */}
        <Script src="/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
