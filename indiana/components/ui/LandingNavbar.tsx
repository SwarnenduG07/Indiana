"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google";
import { WholeWord } from "lucide-react";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});


export const  LandingNavBar = () => {
     return (
         <nav className="p-4 bg-transparent flex items-center justify-between">
            <div className="relative h-8 w-8 mr-4">
                <Link href="/" className="flex items-center">
                {/* <Image
                fill 
                alt=""
                src=""/> */}
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>Indiana</h1>
                
                </Link>
            </div>
         </nav>
     )
}
export default LandingNavBar