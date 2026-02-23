import type { Metadata } from "next";
const SITE_NAME = "https://szczęśliwsi.pl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_NAME),
  title: {
    default: "Fundacja Szczęśliwsi",
    template: "Fundacja Szczęśliwsi | %s",
  },
  alternates: { canonical: "/" },
  description:
    "Zbudujemy zweryfikowaną bazę wiedzy o szczęśliwości, która ułatwi znajdowanie i stosowanie potwierdzonych naukowo metod, które pomogą nam lepiej radzić sobie z wyzwaniami i czerpać większą satysfakcję z życia.",
  openGraph: {
    url: "/",
    type: "website",
    title: "Fundacja Szczęśliwsi",
    description: "Zbudujemy zweryfikowaną bazę wiedzy o szczęśliwości…",
    images: [
      {
        url: "/assets/global/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zmieniamy świat rozumiejąc siebie.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundacja Szczęśliwsi",
    description: "Zbudujemy zweryfikowaną bazę wiedzy o szczęśliwości…",
    images: ["/assets/global/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/global/favicon-black/favicon-16x16.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/global/favicon-white/favicon-16x16.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/global/favicon-black/favicon-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/global/favicon-white/favicon-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/global/favicon-black/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/global/favicon-white/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/assets/global/favicon-black/apple-touch-icon.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/global/favicon-white/apple-touch-icon.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};
