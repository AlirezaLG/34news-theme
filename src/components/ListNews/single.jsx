import React from 'react'
import { FaCaretRight } from "react-icons/fa";


export default function single() {
  return (
    <div>
        <button type="button"  class="relative  inline-flex content-start  w-full px-0 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg  hover:text-blue-700 focus:z-10 focus:ring-2">
                <FaCaretRight className='mt-1 me-1'  />
                <h4 className='text-start text-base ' >Aenean vulputate eleifend tellus vulputate eleifend tellus</h4>
            </button>
    </div>
  )
}
