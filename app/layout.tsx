import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.transocean-hub.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "TRANSOCEAN SHIPPING SERVICES | Ship Agency, Marine Logistics & Ship Supply",
    template: "%s | TRANSOCEAN SHIPPING SERVICES",
  },

  description:
    "TRANSOCEAN SHIPPING SERVICES provides ship agency, marine logistics, ship supply and vessel support services across China, Hong Kong and Singapore.",

  keywords: [
    "TRANSOCEAN SHIPPING SERVICES",
    "ship agency",
    "ship agency China",
    "port agency China",
    "marine logistics",
    "marine logistics China",
    "ship supply",
    "ship supply China",
    "vessel support",
    "port operations",
    "Qingdao ship agency",
    "Shanghai ship agency",
    "Hong Kong marine services",
    "Singapore marine services",
  ],

  authors: [{ name: "TRANSOCEAN SHIPPING SERVICES" }],
  creator: "TRANSOCEAN SHIPPING SERVICES",
  publisher: "TRANSOCEAN SHIPPING SERVICES",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "TRANSOCEAN SHIPPING SERVICES",
    title:
      "TRANSOCEAN SHIPPING SERVICES | Ship Agency, Marine Logistics & Ship Supply",
    description:
      "Ship agency, marine logistics, ship supply and vessel support services across China, Hong Kong and Singapore.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "TRANSOCEAN SHIPPING SERVICES marine services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "TRANSOCEAN SHIPPING SERVICES | Ship Agency, Marine Logistics & Ship Supply",
    description:
      "Ship agency, marine logistics, ship supply and vessel support services across China, Hong Kong and Singapore.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TRANSOCEAN SHIPPING SERVICES",
  url: siteUrl,
  description:
    "Ship agency, marine logistics, ship supply and vessel support services across China, Hong Kong and Singapore.",
  areaServed: ["China", "Hong Kong", "Singapore"],
  serviceType: [
    "Ship Agency",
    "Marine Logistics",
    "Ship Supply",
    "Vessel Support",
  ],
  email: "agency@transocean-hub.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}