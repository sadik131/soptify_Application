import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';

interface SideBarItemProp {
    lable: string,
    href: string,
    isActive: boolean,
    icon: IconType
}

const SideBarItem: React.FC<SideBarItemProp> = ({ href, icon: Icon, isActive, lable }) => {
    return (
        <div className='px-6 py-3'>
            <Link className={`text-white  hover:text-white flex gap-x-2 ${!isActive && "text-neutral-400"}`} href={href}>
               <Icon size={20}/> {lable}
            </Link>
        </div>
    )
}

export default SideBarItem