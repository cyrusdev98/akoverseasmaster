import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AK Overseas – Visa, Travel & Import-Export Services",
    template: "%s | AK Overseas",
  },

  description:
    "AK Overseas provides visa assistance, travel planning, passport services, holiday packages, and complete import-export documentation, customs clearance, and logistics support. Trusted by thousands for smooth and reliable service.",

  icons: {
    icon: "/favicon.png",
  },

  keywords: [
    "AK Overseas",
    "visa services",
    "import export services",
    "travel agency",
    "passport services",
    "study visa",
    "tourist visa",
    "business visa",
    "international logistics",
    "customs clearance",
    "flight ticket booking",
  ],
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AK Overseas",
              "url": "https://akoverseas.co.in",
              "logo": "https://akoverseas.co.in/favicon.png",
              "description":
                "AK Overseas offers visa services, travel planning, passport assistance, and international import-export documentation and logistics support.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9999999999",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Telugu"]
              },
              "sameAs": [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/"
              ],
              "makesOffer": [
                {
                  "@type": "Service",
                  "name": "Visa Services",
                  "description": "Tourist, business, study, and work visa assistance with complete documentation."
                },
                {
                  "@type": "Service",
                  "name": "Travel Services",
                  "description": "Flight booking, hotel reservations, packages, and travel insurance."
                },
                {
                  "@type": "Service",
                  "name": "Import & Export Services",
                  "description": "Customs clearance, HS code guidance, DGFT support, and logistics coordination."
                }
              ]
            }),
          }}
        />

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
