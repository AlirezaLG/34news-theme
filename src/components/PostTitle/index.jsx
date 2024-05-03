import Link from 'next/link'
import React from 'react'

export default function PostTitle({title, href, size, more }) {
  
  
  return (
    <div className=' border-b-2 border-primary   px-1 pb-2'>
        
      {href ? ( 
        <Link href={href} className='text-black flex justify-between hover:text-primary'>
          <p className={`text-md ${size? size :'text-md'} font-bold`}>{title}</p>
          {more ? (<span className='text-sm'>More</span>) : ''}
        </Link>
              ) : (
          <p className={`text-md ${size? size :'text-md'} font-bold`}>{title}</p>
      )}

        
        
    </div>
  )
}
