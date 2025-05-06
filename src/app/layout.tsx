import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { DockLink } from "@/components/DockLink";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DryKlin - Laundry Service at your Fingertips",
  description: "Enjoy the ultimate solution for seamless and hassle-free laundry services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <NavBar />
        {children}
        <DockLink />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
