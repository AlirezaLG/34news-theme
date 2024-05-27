"use client";
import React from "react";
import Image from "next/image";
export default function AuthorBox({ author }) {
  console.log(author);
  return (
    <div className="p-3 border rounded text-gray-500">
      <div className="flex items-center">
        {/* <img className="w-16 h-16 rounded-full mr-3" src="https://loremflickr.com/320/320/girl" alt="jane"> */}
        <Image
          unoptimized
          width={100}
          height={100}
          alt={author?.name}
          title={author?.name}
          className="rounded-full p-3"
          src={
            author?.authorImage?.authorImage?.node?.mediaItemUrl ||
            "/default.jpg"
          }
        />
        <div className="text-sm">
          <a
            href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {author.name}
          </a>
          <p>{author?.authorImage?.authortitle} </p>
        </div>
      </div>

      <p className="my-1 px-3 text-md text-gray-900 ">{author.description}</p>
    </div>
  );
}
