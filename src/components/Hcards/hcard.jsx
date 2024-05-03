import React from 'react'
import Link from 'next/link'
import PostDate from '../PostDate'

export default function Hcard({content, themeBlack}) {
  return (
    <div>        
        <Link href="#" className={`grid grid-cols-5 ${content ? 'md:gap-5' : 'md:gap-1' } xs:gap-1  space-x-2 items-start ${ themeBlack ? 'bg-transparent' : "bg-white" } rounded-md `}>
            <img  className="col-span-2 rounded-md " src="/img1.jpg" alt="" />
            <div className=" col-span-3 flex flex-col justify-between  leading-normal">
                <h5 className={`mb-2 ${content ? 'md:text-2xl' : 'md:text-md' } xs:text-md font-bold tracking-tight ${ themeBlack ? 'text-white' : "text-gray-900" }  `}>Noteworthy technology acquisitions 2021</h5>
                <PostDate themeBlack={themeBlack} />
                {content ? (<p className="mb-3 xs:hidden md:block font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>) : ''}
            </div>
        </Link>
    </div>
  )
}
