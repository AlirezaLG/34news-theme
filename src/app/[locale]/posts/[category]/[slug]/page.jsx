import React from "react";
import { getPostGQL, getDataGQL } from "@/lib/functions";
import { sinlgePostGQL, singlePostDataGQL } from "@/lib/wpGraphQL";
import { getMetaFromYoast, formatDateTime, route } from "@/lib/helpers";
import { decode } from "html-entities";
import ListNews from "@/components/ListNews";
import RelatedPost from "@/components/RelatedPost";
import PostTitle from "@/components/PostTitle";
import initTranslations from "@/i18n";
import Sharing from "@/components/Sharing";
import SocialMedia from "@/components/SocialMedia";
import MImage from "@/components/MImage";
import { setDefaultNamespace } from "i18next";

// Dynamic metaData
export async function generateMetadata({ params: { category, slug, locate } }) {
  const meta = await getPostGQL(
    sinlgePostGQL(slug, process.env.NEXT_PUBLIC_HOME_SLUG)
  );
  const url =
    process.env.NEXT_PUBLIC_APP_URL + "/posts/" + category + "/" + slug;
  return getMetaFromYoast(meta.data.postBy.seo, url);
}

// post-format-aside
// post-format-video
// post-format-audio
// []
export default async function SinglePost({
  params: { category, slug, locale },
}) {
  const { t, resources } = await initTranslations(locale);

  const SinglePostData = await getPostGQL(
    sinlgePostGQL(slug, process.env.NEXT_PUBLIC_HOME_SLUG)
  );
  const post = SinglePostData.data.postBy;

  // add tags widget layout to list the related posts
  if (SinglePostData.data.pages.edges[0].node.singlePost.related) {
    SinglePostData.data.pages.edges[0].node.singlePost.related.tags =
      post.tags.nodes.map((node) => node.termTaxonomyId);
  }
  // home page data
  const { sidebar, related } = await getDataGQL(
    singlePostDataGQL(SinglePostData.data.pages.edges[0].node.singlePost)
  );
  // widget settings
  const { sidebar: sidebarWidget, related: relatedWidget } =
    SinglePostData.data.pages.edges[0].node.singlePost;

  const socialMedia = {
    facebook: SinglePostData?.data?.customizer?.facebookLink,
    xTwitter: SinglePostData?.data?.customizer?.xTwitterLink,
    youtube: SinglePostData?.data?.customizer?.youtubeLink,
    instagram: SinglePostData?.data?.customizer?.instagramLink,
    linkedin: SinglePostData?.data?.customizer?.linkedinLink,
    whatsapp: SinglePostData?.data?.customizer?.whatsappLink,
    telegram: SinglePostData?.data?.customizer?.telegramLink,
    tiktok: SinglePostData?.data?.customizer?.tiktokLink,
  };
  const isEmptyDefault = !(post?.postFormats?.nodes?.length > 0);
  const tags = post.tags.nodes.length > 0;
  const videoId = post?.videoLinkGroup?.videoLink?.split("v=")[1].split("&")[0];

  return (
    <React.Fragment>
      {post?.postFormats?.nodes?.[0]?.slug === "post-format-video" && (
        <div className="bg-black md:h-[34rem] xs:h-32">
          <div className="text-white container ">
            <iframe
              className="w-full px-32 h-[34rem]"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="container single py-8 grid grid-cols-3 gap-5">
        <div className="col-span-2">
          {isEmptyDefault && <MImage post={post} imgsize={1} imgClass="mb-4" />}
          <h1
            className="text-4xl "
            dangerouslySetInnerHTML={{ __html: decode(post?.title) }}
          ></h1>
          {/* {post.videoLinkGroup.videoLink} */}
          <p className="pt-3 pb-2">
            <i className="ti-calendar"></i>
            {formatDateTime(post?.date)}
          </p>
          <div
            className="leading-6 content"
            dangerouslySetInnerHTML={{ __html: decode(post?.content) }}
          ></div>
          <br />

          <Sharing post={post} category={category} />
          {tags && (
            <div className="tags my-5 block xborder-b py-2 xborder-gray-400 ">
              {post.tags.nodes.map((tag) => {
                tag.contentTypeName = "tag";
                return (
                  <a
                    key={tag.termTaxonomyId}
                    href={route(tag, "tag")}
                    className="py-2 px-3 me-3 rounded-sm border-[#71a0f2] border-2 tag text-black hover:text-white hover:bg-[#71a0f2] "
                  >
                    # {tag.name}
                  </a>
                );
              })}
            </div>
          )}

          <PostTitle title={relatedWidget?.title} size={"text-lg"} />
          <RelatedPost posts={related.nodes} widget={relatedWidget} />
        </div>
        <div className="col-span-1 ps-8">
          <ListNews posts={sidebar.nodes} widget={sidebarWidget} />
          <SocialMedia socialMedia={socialMedia} />
        </div>
      </div>
    </React.Fragment>
  );
}
