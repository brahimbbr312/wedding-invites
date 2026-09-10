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

export const metadata = {
  title: "Mohamed & Abir",
  description: "Notre mariage — 23 Novembre 2026",

  openGraph: {
    title: "Mohamed & Abir",
    description: "Notre mariage — 23 Novembre 2026",
    images: [
      {
        url: "/images/og-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed & Abir — Notre mariage",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
