import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Radius: An Omnichannel Communication System",
  description: "A powerful and integrated communication platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased overflow-x-hidden scrollbar-hidden bg-[#F5F5F5]`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
