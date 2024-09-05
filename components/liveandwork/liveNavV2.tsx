import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { livenav } from '@/constants'


export const LiveNavV2: React.FC = () => {
  return (
    <div className='border-b border-purple-600 bg-slate-900 p-4'>
         <div className="flex-grow justify-center items-center space-x-10 lg: hidden lg:flex">
                <NavigationMenu>
                    <NavigationMenuList className="ml-12 space-x-7">
                        {livenav.map((route) => (
                            <NavigationMenuItem key="">
                                <NavigationMenuTrigger className="bg-slate-600 rounded-full hover:bg-slate-800 px-1 py-1">
                                    {route.title} {route.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <route.component />
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                        
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            
    </div>
  )
}

