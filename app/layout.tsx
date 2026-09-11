import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mainriang.id"),
  title: {
    default: "Main Riang Preschool | Islamic Montessori",
    template: "%s | Main Riang Preschool"
  },
  description:
    "Main Riang Preschool — tempat anak tumbuh, belajar, dan bermain dengan bahagia melalui pendekatan Islamic Montessori.",
  keywords: [
    "Preschool Bandung",
    "Playgroup Bandung",
    "TK Bandung",
    "Islamic Montessori Bandung",
    "Preschool Cileunyi",
    "TK Cileunyi",
    "Playgroup Cileunyi",
    "Preschool Arcamanik",
    "Preschool Gunung Batu"
  ],
  openGraph: {
    title: "Main Riang Preschool | Islamic Montessori",
    description:
      "Tempat anak tumbuh, belajar, dan bermain dengan bahagia.",
    type: "website",
    locale: "id_ID",
    siteName: "Main Riang Preschool"
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Riang Preschool",
    description:
      "Islamic Montessori • Playgroup & TK"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={quicksand.variable}>
      <body>{children}</body>
    </html>
  );
}