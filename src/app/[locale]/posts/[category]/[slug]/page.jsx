import React from 'react'
import {
  getCategory,
  getPost
} from "@/lib/functions";
import { getMetaFromYoast, getMonthAbbreviation } from "@/lib/helpers";
import { headers } from "next/headers";
import { decode } from 'html-entities';




export async function generateMetadata({ params: { category, slug } }) {
  const headersList = headers();
  
  const pathname = headersList.get("x-url") ?? "";
  const post = await getPost(slug);
  return getMetaFromYoast(post?.yoast_head_json, pathname);
}

// const singlePage = async ({ params: { category, slug, } }) => {
  
// }

export default async function SinglePage({ params: { category, slug, locate } }) {
  const [categoryData, post] = await Promise.all([
    await getCategory(category),
    await getPost(slug),
  ]);
  console.log(post)
  return (
    <div  className='container py-5 grid grid-cols-3'>
        <div className="col-span-2">
          <h1 dangerouslySetInnerHTML={{ __html: decode(post?.title?.rendered) }} ></h1>
          <p>
            <i className="ti-calendar"></i>
            {Intl.DateTimeFormat( locate ,{
                        year: "2-digit",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(post.date))}
          </p>
          <div dangerouslySetInnerHTML={{ __html: decode(post?.content?.rendered) }}></div>
        </div>
        <div className="col-span-1">
          right
        </div>
    </div>
  )
}
