"use client";
import React from "react";
import NextTopLoader from "nextjs-toploader";

export default function CprogressBar() {
  return (
    <>
      <NextTopLoader
        color="#96bcff"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        xshadow="0 0 10px #2865D2 , 0 0 5px #2865D2"
        template='<div class="bar" style="color:#fff" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner" style="color:#fff">
        <div class="spinner-icon " style="color:#fff"></div></div>'
        zIndex={99}
        showAtBottom={false}
      />
    </>
  );
}
