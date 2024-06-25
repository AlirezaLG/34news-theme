"use client";
import React from "react";
import Image from "next/image";
export default function AuthorBox({ author, locale }) {
  const authorname = author?.name ? author?.name : author.displayName;
  const authorImage = author?.authorImage?.userImage?.node?.mediaItemUrl
    ? author?.authorImage?.userImage?.node?.mediaItemUrl
    : author.userImage;
  const authorTitle = author?.authorImage?.authortitle
    ? author?.authorImage?.authortitle
    : author?.authorTitle;
  const url =
    process.env.NEXT_PUBLIC_APP_URL + locale + "/author/" + author.userId;
  return (
    <div className="p-3 border rounded text-gray-500">
      <div className="flex items-center">
        {/* <img className="w-16 h-16 rounded-full mr-3" src="https://loremflickr.com/320/320/girl" alt="jane"> */}
        <Image
          unoptimized
          width={100}
          height={100}
          alt={authorname}
          title={authorname}
          className="rounded-full p-3"
          src={authorImage || "/default.jpg"}
        />
        <div className="text-sm">
          <a
            href={url}
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {authorname}
          </a>
          <p>{authorTitle} </p>
        </div>
      </div>

      <p className="my-1 px-3 text-md text-gray-900 ">{author.description}</p>
    </div>
  );
}
