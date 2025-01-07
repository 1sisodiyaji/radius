import DarkMode from "@/components/common/DarkMode";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    
      
    return (
        <> 
            <div className="w-full flex bg-gray-50 dark:bg-gray-950 min-h-screen p-2 ">

                <div className="md:w-1/3 hidden md:flex flex-col justify-between items-center bg-orange-400 rounded-md">
                    
                    <div className="flex justify-between items-center w-full px-6">
                        <Link href={'/'} className="hover:underline text-lg">Radius</Link>
                        <DarkMode/>
                    </div>
                    <div className="mt-24 px-5">

                        <h1 className="text-2xl text-gray-800 dark:text-gray-50 text-center">
                            Welcome Admin to Your Dashboard
                        </h1>
                        <p className="text-md mt-4 text-center text-gray-700 dark:text-gray-100">
                            Manage users, analyze data, and control your platform with ease.
                        </p>   </div>
                    <div className="flex">
                        <Image src={'https://res.cloudinary.com/dbqq41bpc/image/upload/v1736224523/rb_2149430428_wrriy6.png'} width={700} height={700} alt="register" className="w-full" />
                    </div>
                </div>

                <div className="md:w-2/3 w-full flex items-center justify-center">
                    {children}
                </div>
            </div>
        </>
    );
}
