"use client";
import React from 'react'
import NextTopLoader from 'nextjs-toploader';

export default function CprogressBar() {
  
  return (
    <>
     <NextTopLoader
      color="#ff0000"
      initialPosition={0.08}
      crawlSpeed={500}
      height={5}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={500}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      template='<div class="bar" role="bar"><div class="peg"></div></div> 
      <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
      zIndex={1600}
      showAtBottom={false}
    />
  </>
  )
}
