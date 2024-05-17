"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import PostDate from "@/components/PostDate";
import { route } from "@/lib/helpers";
import { limitWords } from "@/lib/helpers";
import MImage from "../MImage";
import { removeHtmlTags } from "@/lib/helpers";
import { decode } from "html-entities";
import { LIMIT } from "@/consts";

export default function BigImage({ posts, category }) {
  const cat = category?.category?.nodes[0].slug;
  return (
    <>
      {posts.map((post, index) => {
        //We need only one post
        if (index < 1) {
          const img = post?.featuredImage?.node?.mediaDetails?.sizes?.[1] || "";
          return (
            <div className="w-100" key={post.id}>
              <a href={route(post, cat) || ""}>
                <MImage post={post} imgsize={1} />
              </a>
              <div className="py-4 px-2">
                <Link href={route(post, cat) || ""}>
                  <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 hover:text-primary">
                    {decode(post?.title)}
                  </h2>
                </Link>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {removeHtmlTags(limitWords(post?.excerpt, LIMIT))}
                </p>
                <PostDate date={post?.date} />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
