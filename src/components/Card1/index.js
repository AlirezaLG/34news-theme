"use client";

import React from 'react'
import PostDate from '../PostDate'
import Image from 'next/image'
import Link from 'next/link';
import { getImage, removeHtmlTags } from '@/lib/helpers';
// import { useTranslations } from 'next-intl';

const Card1 = ({ post, style, size="medium"}) => {
    const link =  '/category/'+post?.primary_category?.slug + '/' + post?.slug;
    const img = getImage( post?.featured_image_sizes , size );
    // const t = useTranslations("HomePage");
    
  return (
    <div className=''>
        <div className="w-full bg-white rounded-md  ">
        
            <Link href={link}>
                <Image unoptimized width={img?.width} height={img?.height} style={`width:'100%', height:'auto'`}  className="rounded-t-lg" src={img?.url}  />
            </Link>
            <div className="py-3 px-2">
                <a href="">
                    {/* {`${t("title")}`} */}
                    <h4 className={`mb-2 ${style?.title_size ? "leading-7 text-"+style?.title_size : "text-lg leading-6" } font-bold tracking-tight text-gray-900  `}>{post?.title?.rendered}</h4>
                </a>
                <PostDate date={post?.date} />
                {style?.excerpt ? <p className="mb-3 xs:hidden md:block font-normal text-gray-700 " dangerouslySetInnerHTML={{ __html: removeHtmlTags(String(post?.excerpt?.rendered)) }}></p> : ''}
            </div>
        </div>

    </div>
  )
}
export default Card1;