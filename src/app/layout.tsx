import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ORIGON | Sales & Distribution | FMCG Super Stockist in Malappuram, Kerala",
  description: "ORIGON is a trusted FMCG sales & distribution company and super stockist based in Malappuram, Kerala. We distribute premium food and consumer products, including Kunafa Chocolate, and partner with brands, distributors, and super stockists across India.",
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
