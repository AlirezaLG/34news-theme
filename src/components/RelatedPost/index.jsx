"use client";

import React from 'react'
import Card1 from '@/components/Card1';


export default function RelatedPost({posts, widget}) {
// console.log(posts);
// console.log(posts[0].categories.nodes[0].slug);
  const style = {
    excerpt : false,
    title_size : "2xl",
  }
  
  return (
    <div className='grid md:grid-cols-4 xs:grid-cols-1  gap-5'>
      {
        posts.map((post, index)=>{
          return (
          <div key={post.id}>
            <Card1  post={post} style={style} category={post.categories.nodes[0].slug}  />  
          </div>
          )
        }) 
      }
    </div>
  )
}
