"use client";
import React from "react";
import PostDate from "../PostDate";
import Image from "next/image";
import Link from "next/link";
import { limitWords, removeHtmlTags } from "@/lib/helpers";
// import { useTranslations } from 'next-intl';
import { route } from "@/lib/helpers";
import { decode } from "html-entities";
import { LIMIT2 } from "@/consts";
import MImage from "../MImage";

const Card1 = ({ post, category, style, content, imgsize = 0 }) => {
  const link = route(post, category);

  return (
    <React.Fragment>
      <div className="w-full bg-white rounded-md  ">
        <Link href={link || ""}>
          <MImage post={post} imgsize={imgsize} />
        </Link>
        <div className="py-3 px-1">
          <Link href={link || ""}>
            <h4
              className={` ${
                style ? style : "text-lg font-bold leading-6"
              }  tracking-tight text-gray-900 hover:text-primary `}
            >
              {decode(post?.title)}
            </h4>
          </Link>
          <PostDate date={post?.date} />
          {content ? (
            <p
              className="mb-3 xs:hidden md:block font-normal text-gray-700 "
              dangerouslySetInnerHTML={{
                __html: removeHtmlTags(limitWords(post?.excerpt, LIMIT2)),
              }}
            ></p>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card1;
