import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import { IBM_Plex_Mono } from "@next/font/google";
import Footer from "@/components/Footer";

const IbmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "James' Portfolio",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={IbmPlexMono.className}>
      <body className="font-mono antialiased min-h-screen flex flex-col justify-between">
        <div>{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
