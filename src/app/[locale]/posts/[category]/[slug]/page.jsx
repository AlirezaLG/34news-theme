import React from 'react'
import {
  getCategory,
  getPost,
  getPosts,
  getPageData,
  getPostGQL,
  getDataGQL
} from "@/lib/functions";
import { sinlgePostGQL, singlePostDataGQL } from '@/lib/wpGraphQL';

import { getMetaFromYoast, getMonthAbbreviation, formatDateTime,route } from "@/lib/helpers";
import { headers } from "next/headers";
import { decode } from 'html-entities';
import ListNews from '@/components/ListNews';
import RelatedPost from '@/components/RelatedPost';

// Dynamic metaData
export async function generateMetadata( { params: { category, slug, locate } }) {
  const meta = await  getPostGQL(sinlgePostGQL(slug, process.env.NEXT_PUBLIC_HOME_SLUG ));
  return getMetaFromYoast(meta.data.postBy.seo, meta.data.postBy.link);  
}

export default async function SinglePage({ params: { category, slug, locate } }) {
  
  const SinglePostData = await getPostGQL(sinlgePostGQL(slug, process.env.NEXT_PUBLIC_HOME_SLUG ));
  const post = SinglePostData.data.postBy;

  // add tags widget layout to list the related posts
  if(SinglePostData.data.pages.edges[0].node.singlePage.related){
    SinglePostData.data.pages.edges[0].node.singlePage.related.tags = post.tags.nodes.map(node => node.termTaxonomyId);
  }
  // console.log(SinglePostData.data.pages.edges[0].node.singlePage.related)
  // console.log(singlePostDataGQL(SinglePostData.data.pages.edges[0].node.singlePage))
  const {sidebar, related} = await getDataGQL(singlePostDataGQL(SinglePostData.data.pages.edges[0].node.singlePage))
  const { sidebar: sidebarWidget, related: relatedWidget }  =  SinglePostData.data.pages.edges[0].node.singlePage;
   
  return (
    <div  className='container py-5 grid grid-cols-3'>
        <div className="col-span-2">
          <h1 dangerouslySetInnerHTML={{ __html: decode(post?.title) }} ></h1>
          <p>
            <i className="ti-calendar"></i>
            {formatDateTime(post?.date)}
          </p>
          <div dangerouslySetInnerHTML={{ __html: decode(post?.content) }}></div>
          <br/>
          <div className="tags my-3">
            {
              post.tags.nodes.map((tag) =>{
                tag.contentTypeName = "tag";
                return(
                 <a  key={tag.termTaxonomyId} href={route(tag, 'tag')} className="bg-[#ccc] p-3 me-3 rounded-md tag text-black hover:text-primary  ">{tag.name}</a> 
                )
              })
            }

          </div>

          <RelatedPost posts={related.nodes}  />

        </div>
        <div className="col-span-1">
          <ListNews  posts={sidebar.nodes} widget={sidebarWidget}  />
        </div>
    </div>
  )
}
