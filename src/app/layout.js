import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Guilt Free Bowls | Healthy Food & Meal Plans in Perinthalmanna",
  description:
    "Guilt Free Bowls offers fresh, balanced and delicious healthy meals in Perinthalmanna. Explore our weekly menu and order your meal directly on WhatsApp.",
  keywords: [
    "Guilt Free Bowls",
    "Guilt Free Bowls Perinthalmanna",
    "Healthy food Perinthalmanna",
    "Healthy meals Perinthalmanna",
    "Healthy food delivery Perinthalmanna",
    "Healthy meal plans Kerala",
    "Protein meals Perinthalmanna",
    "Healthy lunch Perinthalmanna",
    "Diet food Perinthalmanna",
  ],
  openGraph: {
    title: "Guilt Free Bowls | Healthy Food & Meal Plans in Perinthalmanna",
    description:
      "Fresh, balanced and delicious healthy meals in Perinthalmanna. Explore our weekly menu and order on WhatsApp.",
    url: "https://guiltfreebowls.in",
    siteName: "Guilt Free Bowls",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-bowl.png",
        width: 1200,
        height: 630,
        alt: "Guilt Free Bowls - Healthy Food in Perinthalmanna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilt Free Bowls | Healthy Food & Meal Plans in Perinthalmanna",
    description:
      "Fresh, balanced and delicious healthy meals in Perinthalmanna.",
    images: ["/images/hero-bowl.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Guilt Free Bowls",
    description:
      "Fresh, balanced and delicious healthy meals in Perinthalmanna, Kerala.",
    url: "https://guiltfreebowls.in",
    telephone: "+919048496198",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perinthalmanna",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    servesCuisine: ["Healthy Food", "Indian", "Diet Food"],
    priceRange: "$$",
    image: "/images/hero-bowl.png",
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0B3D24" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-off-white text-dark-text font-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
