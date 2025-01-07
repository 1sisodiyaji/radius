
import type { Metadata } from "next"; 
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Radius dashboard",
  description: "A Radius Dasboard for the management",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <div className={`antialiased text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-950 min-h-screen`}>
       <Toaster/>
        {children}
      </div> 
  );
}
