"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Search } from "lucide-react";
import MobileSheet from "./MobileSidebarSheet";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./DarkMode";


const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const route = [
     {
        lable: "Places to Visit",
        href: "/visit/placetovisit",
     },
     {
        lable: "Things To Do",
        href: "/visit/thingstodo",
     },
     {
        lable: "Find Accommodation",
        href: "/visit/findaccommodation",
     },
     {
        lable: "Plan Your Trip",
        href: "/visit/plantrip",
     }
]

export const VisitnavBar = () => {
    const pathname =usePathname()
    return (
        <nav className="p-4 pt-3 bg-transparent flex items-center justify-between border-b-2 bg-zinc-900 border-blue-950">
            <div className="flex items-center">
                <Link href="/visit" className="flex items-center">
                    <Image 
                        alt="India"
                        src='/india.png'
                        width={30}
                        height={30}
                        className="lg:ml-14 md:ml-14"
                    />
                    <h1 className={cn("text-xl font-bold text-white mt-2 ml-2", font.className)}>Visit India</h1>
                </Link>
            </div>

            <div className="flex-grow justify-center items-center gap-x-10 lg:mr-52 hidden lg:flex">
            {route.map((route  ) => (
                     <Link 
                     href={route .href}
                     key={route  .href}
                     className={cn("text-sm font-medium cursor-pointer text-white   transition", 
                        pathname === route   .href ? "text-white bg-blue-800" : ""
                     )}
                     >
                     <div className="">
                        {route.lable}
                     </div>
                     </Link>
                  ))}
            </div>
            <span className="flex items-center space-x-2">
                <Search className="text-white lg:mr-32 md:mr-28"/>
                <MobileSheet/>
                <ModeToggle/>
            </span>
        </nav>
    )
}

export default  VisitnavBar
