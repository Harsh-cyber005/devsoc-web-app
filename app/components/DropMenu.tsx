import React from 'react'
import {BellAlertIcon,WrenchIcon,ArrowLeftStartOnRectangleIcon} from "@heroicons/react/24/outline";

export default function DropMenu() {
  return (
    <div>
        <div className=' p-4 pt-6 font-medium text-sm text-[#9C9C9C] select-text min-w-[280px]'>
            <p className=' cursor-text'>random-email@kgpian.iitkgp.ac.in</p>
        </div>
        <ul className=' font-normal text-sm text-[#868686] cursor-pointer flex flex-col items-center'>
            <li className=' flex items-center justify-between pt-[0.6rem] pb-3 px-4 hover:bg-[#181818] hover:text-[#E4E4E4] w-full'>
                <p>Notifications</p>
                <BellAlertIcon className='h-5 w-5'/>
            </li>
            <li className=' flex items-center justify-between pt-[0.6rem] pb-3 px-4 hover:bg-[#181818] hover:text-[#E4E4E4] w-full'>
                <p>Account Settings</p>
                <WrenchIcon className='h-5 w-5'/>
            </li>
            <li className=' border-b-[1px] border-[#606060] border-solid py-1 w-[90%]'>{""}</li>
            <li className=' py-1'>{""}</li>
            <li className=' flex items-center justify-between pt-[0.6rem] pb-3 px-4 hover:bg-[#181818] hover:text-[#E4E4E4] w-full'>
                <p>Logout</p>
                <ArrowLeftStartOnRectangleIcon className='h-5 w-5'/>
            </li>
            <li className=' py-2 cursor-default'>{""}</li>
        </ul>
    </div>
  )
}