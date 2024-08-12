"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { useEffect, useState } from "react"
import MobileSideBar from "./MobileSidebar"
interface MobileSidebarProps {
  apiLimitCount : number,
  isPro: boolean,
}


 const MobileSheet = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])
     
     if (!isMounted) {
        return null
     }
   return (
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
                 <Menu />
             </Button>
        </SheetTrigger>  
        <SheetContent side="left" className="p-0">
            <MobileSideBar />
        </SheetContent> 
      </Sheet>
   )
 }
 export default MobileSheet
