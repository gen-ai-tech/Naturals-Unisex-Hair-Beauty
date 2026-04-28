import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Naturals Salon Salem | Premium Hair & Beauty Spa on Ramakrishna Rd",
  description: "Experience luxury at Naturals Salon, Ramakrishna Road, Salem. Expert bridal makeup, trendy haircuts, and premium skin treatments near Om Sakti Temple.",
  keywords: ["best salon in salem", "bridal makeup salem", "naturals salon ramakrishna road", "hair spa salem"],
  openGraph: {
    title: "Naturals Salem - Luxury Beauty & Wellness",
    description: "Premium hair and beauty services in the heart of Salem.",
    url: "https://naturalssalem.in",
    siteName: "Naturals Salon Salem",
    images: [{ url: "/images/og-image.jpg" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Naturals Unisex Hair & Beauty Salon, Salem",
    "image": "https://naturalssalem.in/images/salon-hero.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.20, Gopal Building, Ramakrishna Rd, opp. Om Sakti Temple, Chinna Pudur",
      "addressLocality": "Salem",
      "addressRegion": "TN",
      "postalCode": "636007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.6744",
      "longitude": "78.1481"
    },
    "url": "https://naturalssalem.in",
    "telephone": "09150111660",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-inter bg-charcoal text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
