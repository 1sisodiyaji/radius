import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"; 
import { Toaster } from "react-hot-toast";
import RightSideFloading from "@/components/common/RightSideFloading";
import Chatbot from "@/components/common/Chatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
  variable: "--font-poppins",
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
      <Toaster/>
      <Chatbot/>
      <RightSideFloading/>
      {children}
      </body>
    </html>
  );
}
