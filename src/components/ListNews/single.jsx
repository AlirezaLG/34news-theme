"use client";
import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { route } from "@/lib/helpers";
import PostDate from "../PostDate";

export default function single({ post, category }) {
  return (
    <div className="listNew ">
      <button
        type="button"
        className="relative  inline-flex content-start  w-full px-0 pb-2 text-sm font-medium border-b border-gray-200 rounded-t-lg  hover:text-blue-700 focus:z-10 focus:ring-2"
      >
        <FaCaretRight className="mt-1 me-1" />
        <Link href={route(post, category) || ""}>
          <h4 className="text-start text-lg font-bold  text-black hover:text-primary ">
            {post?.title}
          </h4>
          <PostDate date={post?.date} />
        </Link>
      </button>
    </div>
  );
}
