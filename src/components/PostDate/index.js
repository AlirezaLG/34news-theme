import React from 'react'
import { IoMdTime } from "react-icons/io";


export default function PostDate({date = "13 April 2023" ,themeBlack}) {
  return (
    <div className='flex py-1'>
        <IoMdTime className='mt-05 mr-1 ' fill={themeBlack ? '#fff' : '#000' } />
        <span className={`text-sm  ${themeBlack ? "text-white" : "text-gray-800" }  `}>{date}</span>
    </div>
  )
}
