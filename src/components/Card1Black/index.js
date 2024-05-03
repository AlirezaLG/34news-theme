import React from 'react'
import PostDate from '../PostDate'

export default function Card1Black() {
  return (
    <div className='py-5'>

        <div class="w-full bg-black rounded-md  ">
            <a href="#">
                <img class="rounded-t-lg" src="./img1.jpg" alt="" />
            </a>
            <div class="py-3 px-2">
                <a href="#">
                    <h4 class="mb-2 text-xl font-bold tracking-tight text-white leading-6">Noteworthy technology acquisitions 2021</h4>
                </a>
                <PostDate themeBlack={true} />
                
            </div>
        </div>

    </div>
  )
}
