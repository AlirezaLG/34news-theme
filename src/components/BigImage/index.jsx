import Link from 'next/link'
import React from 'react'
import { Card } from "flowbite-react";
import PostDate from '@/components/PostDate';

// import type { CustomFlowbiteTheme } from 'flowbite-react';}



export default function BigImage() {
  return (
    <>
        <div class="w-100  ">
            <a href="#">
                <img class="rounded-t-md" src="./img1.jpg" alt="" />
            </a>
            <div class="py-4 px-2">
                <a href="#">
                    <h2 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h2>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <PostDate />
            </div>
        </div>
    </>
  )
}
