"use client";
import React from "react";
import Hcard from "../Hcard";
export default function Hcards({ posts, widget, content, locale }) {
  return posts?.map((post) => {
    return (
      <div className="space-y-5 pb-5" key={post.id}>
        <Hcard
          post={post}
          category={widget?.category?.nodes[0].slug}
          content={content}
          locale={locale}
        />
      </div>
    );
  });
}
