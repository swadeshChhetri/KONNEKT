"use client"; // This file runs only on the client
import Head from 'next/head';

import { usePathname } from "next/navigation";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showHeaderFooter = !["/login", "/register"].includes(pathname);

  return (
    <html lang="en" className={poppins.className}>
      <body>
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
      </body>
    </html>
  );
}



