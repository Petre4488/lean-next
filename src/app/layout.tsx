import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venture",
  description: "Manage your funds like a pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body className={inter.className}>{children}</body>
      <Footer /> 
    </html>
  );
}
