"use client";

import React from 'react'
import PostDate from '../PostDate'
import Image from 'next/image'
import Link from 'next/link';
import { removeHtmlTags } from '@/lib/helpers';
// import { useTranslations } from 'next-intl';
import { route } from "@/lib/helpers";
import { decode } from 'html-entities';

const Card1 = ({ post, category , style, size="medium"}) => {
    
    const link =  route(post, category);
    const img =  post?.featuredImage?.node.mediaDetails.sizes[0];
    
    
    
  return (
    <div className=''>
        <div className="w-full bg-white rounded-md  ">
        
            <Link href={link}>
                <Image unoptimized width={img?.width} height={img?.height}  alt={post.title} title={post.title}  className="rounded-t-lg" src={img?.sourceUrl}  />
            </Link>
            <div className="py-3 px-2">
                <a href={link}>
                    <h4 className={`mb-2 ${style?.title_size ? "leading-7 text-"+style?.title_size : "text-lg leading-6" } font-bold tracking-tight text-gray-900  `}>{decode(post?.title)}</h4>
                </a>
                <PostDate date={post?.date} />
                {style?.excerpt ? <p className="mb-3 xs:hidden md:block font-normal text-gray-700 " dangerouslySetInnerHTML={{ __html: removeHtmlTags(String(post?.excerpt)) }}></p> : ''}
            </div>
        </div>

    </div>
  )
}
export default Card1;