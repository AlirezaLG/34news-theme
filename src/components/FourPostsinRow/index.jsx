"use client";

import React from 'react'
import Card1 from '@/components/Card1';


export default function FourPostinRow({posts, widget}) {

  const style = {
    excerpt : false,
    title_size : "2xl",
  }
  
  return (
    <div className='grid md:grid-cols-4 xs:grid-cols-1  gap-5'>
      {
        posts.map((post, index)=>{
          if(index > 0 ){
          return (
          <div key={post.id}>
            <Card1  post={post} style={style} category={widget.category.nodes[0].slug} />  
          </div>
          )
        }}) 
      }
    </div>
  )
}
