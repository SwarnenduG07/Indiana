"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Search } from "lucide-react";
import PlaceToVisitContent from "../NavbarContents/PlaceToVisitContent";
import ThingsToDoContent from "../NavbarContents/ThingsToDoContent";
import FindAccommodationContent from "../NavbarContents/FindAccommodationContent";
import PlanYourTripContent from "../NavbarContents/PlanYourTripContent";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import MobileSheet from "../MobileSidebarSheet";
import { ModeToggle } from "../DarkMode";


const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Places to Visit",
        href: "/visit/placetovisit",
        component: PlaceToVisitContent
    },
    {
        label: "Things To Do",
        href: "/visit/thingstodo",
        component: ThingsToDoContent
    },
    {
        label: "Find Accommodation",
        href: "/visit/findaccommodation",
        component: FindAccommodationContent
    },
    {
        label: "Plan Your Trip",
        href: "/visit/plantrip",
        component: PlanYourTripContent
    }
]

export const VisitnavBar = () => {
    return (
        <nav className="p-4 pt-3 bg-transparent flex items-center justify-between border-b-2 bg-slate-800 bg-opacity-40 border-blue-950">
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

            <div className="flex-grow justify-center items-center space-x-10 lg: hidden lg:flex">
                <NavigationMenu>
                    <NavigationMenuList className="ml-12 space-x-7">
                        {routes.map((route) => (
                            <NavigationMenuItem key={route.href}>
                                <NavigationMenuTrigger className="bg-slate-800 rounded-full hover:bg-slate-900 px-1 py-1">
                                    {route.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <route.component />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <span className="flex items-center px-4">
                <Search className="text-white lg:mr-32 md:mr-28"/>
                <MobileSheet/>
                <ModeToggle/>
            </span>
        </nav>
    )
}

export default VisitnavBar;
