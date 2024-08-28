"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google";
import { WholeWord } from "lucide-react";
import Image from "next/image";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});


export const  LandingNavBar = () => {
     return (
         <nav className="p-4 bg-transparent flex items-center justify-between border-b-2 bg-zinc-900 border-blue-950">
            <div className="w-6 h-8">
                <Link href="/" className="flex items-center">
                <Image 
                alt="swastik"
                src='/swastika.svg'
                width={50}
                height={30}
                className="lg:ml-14 md:ml-14"
                />
                <h1 className={cn("text-2xl font-bold text-white ml-1.5", font.className)}>Indiana</h1> 
                </Link>
            </div>
         </nav>
     )
}
export default LandingNavBar