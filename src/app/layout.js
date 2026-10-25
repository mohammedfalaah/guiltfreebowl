import "./globals.css";

export const metadata = {
  title: "Guilt Free Bowls | Healthy Food in Perinthalmanna",
  description:
    "Explore the daily and weekly menu at Guilt Free Bowls in Perinthalmanna, Malappuram. Discover fresh meal options and order directly through WhatsApp.",
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
    "Malappuram healthy food",
  ],
  openGraph: {
    title: "Guilt Free Bowls | Healthy Food in Perinthalmanna",
    description:
      "Explore the daily and weekly menu at Guilt Free Bowls in Perinthalmanna, Malappuram. Discover fresh meal options and order directly through WhatsApp.",
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
    title: "Guilt Free Bowls | Healthy Food in Perinthalmanna",
    description:
      "Explore the daily and weekly menu at Guilt Free Bowls in Perinthalmanna, Malappuram.",
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
    "@type": "FoodEstablishment",
    name: "Guilt Free Bowls",
    description:
      "Fresh, balanced and delicious healthy meals in Perinthalmanna, Malappuram, Kerala.",
    url: "https://guiltfreebowls.in",
    telephone: "+919048496198",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perinthalmanna",
      addressRegion: "Malappuram, Kerala",
      addressCountry: "IN",
    },
    servesCuisine: ["Healthy Food", "Indian"],
    priceRange: "$$",
    image: "/images/hero-bowl.png",
    slogan: "Good Food. No Guilt.",
  };

  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#123D27" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-warm-cream text-main-text overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
