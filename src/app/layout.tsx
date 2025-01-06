import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar"; 
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose weights you need
  variable: "--font-poppins", // Custom CSS variable for font
});

export const metadata: Metadata = {
  title: "Radius",
  description: "Empowering businesses with our coin management platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-gray-50 dark:bg-gray-950`}
      > 
        <Navbar/>
        <div className="py-20">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
