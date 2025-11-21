import type { Metadata } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://akoverseas.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(base),

  title: {
    default: "AK Overseas – Travel, Visa & Import–Export Services",
    template: "%s | AK Overseas",
  },

  description:
    "AK Overseas offers expert visa assistance, travel planning, passport help, and international import-export support. Trusted by thousands for smooth documentation and reliable timelines.",

  keywords: [
    "AK Overseas",
    "visa services",
    "travel services",
    "import export services",
    "passport services",
    "study visa",
    "tourist visa",
    "business visa",
    "international logistics",
    "customs documentation",
  ],

  alternates: {
    canonical: base,
  },

  openGraph: {
    type: "website",
    url: base,
    title: "AK Overseas – Visa, Travel & Import–Export Services",
    description:
      "Trusted partner for visas, travel bookings, passport services, and international import–export solutions.",
    siteName: "AK Overseas",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK Overseas - Visa & Import Export Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AK Overseas – Visa, Travel & Import-Export Services",
    description:
      "Your partner for visa assistance, travel solutions, and import-export documentation.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  authors: [{ name: "AK Overseas" }],
};
