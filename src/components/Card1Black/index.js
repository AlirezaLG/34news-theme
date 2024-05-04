import React from 'react'
import PostDate from '../PostDate'

export default function Card1Black() {
  return (
    <div className='py-5'>

        <div className="w-full bg-black rounded-md  ">
            <a href="#">
                <img className="rounded-t-lg" src="./img1.jpg" alt="" />
            </a>
            <div className="py-3 px-2">
                <a href="#">
                    <h4 className="mb-2 text-xl font-bold tracking-tight text-white leading-6">Noteworthy technology acquisitions 2021</h4>
                </a>
                <PostDate themeBlack={true} />
                
            </div>
        </div>

    </div>
  )
}
