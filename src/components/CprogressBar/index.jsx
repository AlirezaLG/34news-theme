"use client";
import React from 'react'
import NextNProgress from 'nextjs-progressbar';

export default function CprogressBar() {
  return (
    <div>
        <NextNProgress
        className="cpbar"
         color="#f00" 
         startPosition={0.3} 
         stopDelayMs={200} 
         height={5} 
         showOnShallow={true} />
        <style jsx>
        {`
          .cpbar {
            z-index: 1000000000;
          }
        `}
      </style>
    </div>
  )
}
