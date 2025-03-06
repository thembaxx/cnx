import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen scheme-light">
      <head>
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full font-sans scheme-light flex flex-col overflow-y-auto bg-gradient-to-tr from-neutral-50 to-gray-50`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
