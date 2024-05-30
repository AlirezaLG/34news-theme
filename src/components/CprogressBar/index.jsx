"use client";
import React from "react";
import NextTopLoader from "nextjs-toploader";

export default function CprogressBar({ locale }) {
  console.log("from loader");
  return (
    <React.Fragment>
      <NextTopLoader
        color="#19509b"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        template='<div class="bar" style="color:#fff" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner" style="color:#fff">
        <div class="spinner-icon " style="color:#fff"></div></div>'
        zIndex={99}
        showAtBottom={false}
      />
    </React.Fragment>
  );
}
