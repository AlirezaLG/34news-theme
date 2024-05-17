"use client";

import React from "react";
import Card1 from "@/components/Card1";
import PostTitle from "../PostTitle";
export default function RelatedPost({ posts, widget }) {
  return (
    <div className="grid md:grid-cols-4 xs:grid-cols-1  gap-5">
      {posts.map((post, index) => {
        if (index < widget.posts) {
          return (
            <div key={post.id}>
              <Card1
                post={post}
                style="text-md"
                category={post.categories.nodes[0].slug}
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
