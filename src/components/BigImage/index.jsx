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
    <React.Fragment>
      {posts.map((post, index) => {
        //We need only one post
        if (index < 1) {
          const img = post?.featuredImage?.node?.mediaDetails?.sizes?.[0] || "";
          return (
            <div
              className="grid md:grid-cols-2 xs:grid-cols-1 mt-2"
              key={post.id}
            >
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
              <a className="col-span-1" href={route(post, cat) || ""}>
                <MImage post={post} imgsize={0} />
              </a>
            </div>
          );
        } else {
          return null;
        }
      })}
    </React.Fragment>
  );
}
