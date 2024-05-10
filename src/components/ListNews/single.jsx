"use client"
import Link from 'next/link';
import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import { getNavigationUrl } from "@/lib/helpers";

export default function single({post}) {
  // console.log(post);
  const link =  '/posts/'+post?.primary_category?.slug + '/' + post?.slug;
  
  return (
    <div>
        <button type="button"  className="relative  inline-flex content-start  w-full px-0 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg  hover:text-blue-700 focus:z-10 focus:ring-2">
                <FaCaretRight className='mt-1 me-1'  />
                <Link href={link}>
                  <h4 className='text-start text-base text-black ' >{ post?.title?.rendered }</h4>
                </Link>
            </button>
    </div>
  )
}
