import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const menu = [
    {
         lable:"Place to visit",
         href:"/placetovisit"
    },
    {
        lable:"Things To Do",
         href:"/thingstodo"
    },
    {
        lable:"Place to visit",
        href:"/Findaccommodation"
    },
    {
        lable: "Plan Your Trip",
        href: "/plantrip"
    }
]

const MobileSideBar = () => {
    const pathname = usePathname();
  return (
    <div className='space-y-3 py-4 flex flex-col h-full bg-black'>
        <div className="space-y-1">
                  {menu.map((menu  ) => (
                     <Link 
                     href={menu .href}
                     key={menu  .href}
                     className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-blue-800 rounded-lg transition", 
                        pathname === menu   .href ? "text-white bg-blue-800" : ""
                     )}
                     >
                     <div className="flex items-center flex-1">
                      
                     </div>
                     </Link>
                  ))}
                </div>
    </div>
  )
}

export default MobileSideBar