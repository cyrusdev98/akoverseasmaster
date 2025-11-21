import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        // ❌ Block backend or private paths (SEO best practice)
        disallow: [
          "/api/",
          "/admin",
          "/dashboard",
          "/server",
          "/internal",
          "/private",
        ],
      },
    ],

    // ✔ Correct sitemap reference
    sitemap: `${base}/sitemap.xml`,
  };
}
