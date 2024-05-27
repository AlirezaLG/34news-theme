"use client";
import React from "react";
import PostDate from "../PostDate";
import { route } from "@/lib/helpers";
import Link from "next/link";
import Image from "next/image";
import { decode } from "html-entities";
import MImage from "../MImage";
export default function Card1Black({ post, category }) {
  const img = post?.featuredImage?.node?.mediaDetails?.sizes?.[0] || "";
  const videoId = post?.videoLinkGroup?.videoLink?.split("v=")[1].split("&")[0];

  return (
    <div className="pb-5">
      <div className="w-full bg-black rounded-md  ">
        {videoId ? (
          <iframe
            width="300"
            height="250"
            className="w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            unoptimized
            width={600}
            height={360}
            alt={"Default Image"}
            title={"Default Image"}
            className={`w-full h-auto rounded-sm `}
            src={"/default.jpg"}
          />
        )}

        <div className="py-3 px-2">
          <Link href={route(post, category)}>
            <h4 className="mb-2 text-xl font-bold tracking-tight hover:text-primary text-white leading-6">
              {decode(post.title)}
            </h4>
          </Link>
          <PostDate date={post?.date} themeBlack={true} />
        </div>
      </div>
    </div>
  );
}
