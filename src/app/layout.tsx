import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.siteUrl,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: site.previewImage,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.previewImage],
  },
  robots: {
    index: false,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
