"use client"
import Link from 'next/link';
import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import { route } from "@/lib/helpers";

export default function single({post, category}) {
  
  return (
    <div>
        <button type="button"  className="relative  inline-flex content-start  w-full px-0 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg  hover:text-blue-700 focus:z-10 focus:ring-2">
                <FaCaretRight className='mt-1 me-1'  />
                <Link href={route(post, category)}>
                  <h4 className='text-start text-base text-black ' >{ post.title }</h4>
                </Link>
            </button>
    </div>
  )
}
