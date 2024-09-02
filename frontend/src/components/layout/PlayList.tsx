import React from 'react'
import { IoHeartSharp } from 'react-icons/io5'

function PlayList() {
    return (
        <div className='flex flex-col mt-4 gap-y-4'>
            <h1 className='text-2xl '>WelCome Back</h1>
            <div className='w-1/3 bg-neutral-500 h-14 rounded-lg flex'>
                <div className='flex items-center px-2'>
                    <IoHeartSharp className='text-white mr-4' size={32} />
                    <p>Liked Songs</p>
                </div>
            </div>
        </div>
    )
}

export default PlayList