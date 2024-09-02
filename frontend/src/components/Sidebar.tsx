"use client"

import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import SideBarItem from './SideBarItem'
import { FaSearch, FaHome, FaPlus } from "react-icons/fa";
import { PiPlaylistDuotone } from 'react-icons/pi';


function Sidebar({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()
    const route = useMemo(() => [
        {
            lable: "home",
            isActive: pathname !== "/search",
            href: "/",
            icon: FaHome

        },
        {
            lable: "Search",
            isActive: pathname === "/search",
            href: "/search",
            icon: FaSearch
        },
    ], [pathname])


    return (
        <div className='flex'>
            <div className='m-2 w-[300px]'>
                <div className='flex rounded-lg flex-col bg-neutral-800'>
                    {route.map(item => <SideBarItem key={item.lable} {...item}></SideBarItem>)}
                </div>
                <div className='flex flex-col bg-neutral-800 mt-2 rounded-lg gap-y-4 h-screen'>
                    <div className='flex px-3 py-6 justify-between items-center'>
                        <PiPlaylistDuotone className='text-neutral-300' size={24} />
                        <p className='text-neutral-300'>Your Library</p>
                        <FaPlus className='text-neutral-300' size={24} />
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Sidebar