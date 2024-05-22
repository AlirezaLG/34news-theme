"use client";

import React from "react";
import Card1 from "@/components/Card1";

export default function FourPostinRow({ posts, widget }) {
  return (
    <div className="grid  xs:grid-cols-1 md:mt-5 xs:mt-3 md:gap-5 xs:gap-0">
      {posts.map((post, index) => {
        if (index > 0) {
          return (
            <div key={post?.id}>
              <Card1
                post={post}
                style=""
                category={widget?.category?.nodes[0].slug}
                content={false}
                imgsize={1}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
