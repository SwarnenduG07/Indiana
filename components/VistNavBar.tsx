"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Search } from "lucide-react";
import MobileSheet from "./MobileSidebarSheet";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const VisitnavBar = () => {
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

            <div className="flex-grow justify-center items-center space-x-6 lg:mr-52 hidden lg:flex">
                <p className="text-white whitespace-nowrap">
                    Places to Visit
                </p>
                <p className="text-white whitespace-nowrap">
                    Things to Do
                </p>
                <p className="text-white whitespace-nowrap">
                    Find Accommodation
                </p>
                <p className="text-white whitespace-nowrap">
                    Plan Your Trip
                </p>
            </div>
            
            <span className="flex items-center space-x-2">
                <Search className="text-white lg:mr-32 md:mr-28"/>
                <MobileSheet/>
                
            </span>
        </nav>
    )
}

export default  VisitnavBar
