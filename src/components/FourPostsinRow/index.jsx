"use client";

import React from 'react'
import Card1 from '../Card1'


export default function FourPostinRow({posts}) {
  const style = {
    excerpt : true,
    title_size : "2xl",
  }
  
  return (
    <div className='grid md:grid-cols-4 xs:grid-cols-1  gap-5'>
      {
        posts.map((post)=>{
          return (
          <div>
            <Card1 post={post} style={style} />  
          </div>
          )
        }) 
      }
    </div>
  )
}
