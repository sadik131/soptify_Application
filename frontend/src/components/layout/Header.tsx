import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Header() {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-2 cursor-pointer'>
                <FaChevronLeft className='bg-neutral-500  p-2 h-8 w-8 flex items-center justify-center rounded-full text-white' />
                <FaChevronRight className='bg-neutral-500 p-2 h-8 w-8 flex items-center justify-center rounded-full text-white' />
            </div>
            <div className='flex gap-x-4'>
                <button>Sign up</button>
                <button className='px-4 py-2 rounded-3xl font-bold bg-white text-black'>login</button>
            </div>
        </div>
    )
}

export default Header