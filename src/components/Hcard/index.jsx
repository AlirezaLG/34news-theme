import React from "react";
import Link from "next/link";
import PostDate from "../PostDate";
import { route, limitWords } from "@/lib/helpers";
import { decode } from "html-entities";
import Image from "next/image";
import { removeHtmlTags } from "@/lib/helpers";
import { LIMIT } from "@/consts";
import MImage from "../MImage";
export default function Hcard({
  post,
  category,
  content,
  themeBlack,
  imgsize = 0,
}) {
  const img = post?.featuredImage?.node?.mediaDetails?.sizes?.[0] || "";
  return (
    <div>
      <Link
        href={route(post, category) || ""}
        className={`grid grid-cols-5 ${
          content ? "md:gap-5" : "md:gap-1"
        } xs:gap-1  space-x-2 items-start ${
          themeBlack ? "bg-transparent" : "bg-white"
        } rounded-md `}
      >
        <MImage post={post} imgsize={imgsize} imgClass={"col-span-2"} />
        <div className=" col-span-3 flex flex-col justify-between  leading-normal">
          <h5
            className={`mb-2 ${
              content ? "md:text-2xl" : "md:text-md"
            } xs:text-md font-bold tracking-tight hover:text-primary ${
              themeBlack ? "text-white" : "text-gray-900"
            }  `}
          >
            {decode(post?.title)}
          </h5>
          <PostDate date={post?.date} themeBlack={themeBlack} />
          {content ? (
            <p
              className="mb-3 xs:hidden md:block font-normal text-gray-700 "
              dangerouslySetInnerHTML={{
                __html: removeHtmlTags(limitWords(post?.excerpt, LIMIT)),
              }}
            ></p>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
}
