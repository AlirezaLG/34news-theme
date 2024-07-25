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
import { JSDOM } from "jsdom";
import Polling from "@/components/Polling";
import AuthorBox from "@/components/AuthorBox";
import Breadcrumb from "@/components/Breadcrumb";
// Dynamic metaData
export async function generateMetadata({ params: { category, slug, locale } }) {
  const meta = await getPostGQL(
    sinlgePostGQL(decodeURIComponent(slug), process.env.NEXT_PUBLIC_HOME_SLUG),
    locale
  );

  const url =
    process.env.NEXT_PUBLIC_APP_URL +
    locale +
    "/posts/" +
    decodeURIComponent(category) +
    "/" +
    slug;
  return getMetaFromYoast(meta.data.postBy.seo, url);
}

export default async function SinglePost({
  params: { category, slug, locale },
}) {
  const { t, resources } = await initTranslations(locale);

  const SinglePostData = await getPostGQL(
    sinlgePostGQL(decodeURIComponent(slug), process.env.NEXT_PUBLIC_HOME_SLUG),
    locale
  );
  const post = SinglePostData.data.postBy;
  // console.log(post?.featuredImage?.node?.mediaDetails?.sizes);

  // add tags widget layout to list the related posts
  if (SinglePostData.data.pages.edges[0].node.singlePost.related) {
    SinglePostData.data.pages.edges[0].node.singlePost.related.tags =
      post?.tags?.nodes?.map((node) => node.termTaxonomyId);
  }
  // home page data
  const { sidebar, related } = await getDataGQL(
    singlePostDataGQL(SinglePostData?.data?.pages?.edges[0].node.singlePost),
    locale
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
  const fullW =
    post?.postFormats?.nodes?.[0]?.slug === "post-format-status" || null;
  // console.log(post?.categories.edges);

  const [cleanedContent, formId] = post.content
    ? parseAndCleanHTML(post.content)
    : "";

  return (
    <React.Fragment>
      {post?.postFormats?.nodes?.[0]?.slug === "post-format-video" && (
        <div className="bg-black md:h-[34rem] xs:h-64">
          <div className="text-white container ">
            <iframe
              className="w-full md:px-32 md:h-[34rem] xs:h-64"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="container single py-7 grid grid-cols-3 gap-5">
        <div
          className={` ${
            fullW ? "col-span-3 md:mx-52 " : "md:col-span-2 xs:col-span-3"
          } `}
        >
          <Breadcrumb
            locale={locale}
            category={post?.categories.edges}
            slug={category}
          />
          <h1
            className="md:text-3xl xs:text-2xl font-bold"
            dangerouslySetInnerHTML={{ __html: decode(post?.title) }}
          ></h1>
          {/* {post.videoLinkGroup.videoLink} */}
          <p className="py-3 " suppressHydrationWarning>
            <i className="ti-calendar"></i>
            {formatDateTime(post?.date, locale)}
          </p>
          {isEmptyDefault && <MImage post={post} imgsize={1} imgClass="mb-4" />}

          <div
            className="leading-8 font-normal text-xl content"
            dangerouslySetInnerHTML={{ __html: decode(cleanedContent) }}
          ></div>
          {formId && <Polling formId={formId} locale={locale} />}
          <br />
          {post?.single?.showAuthor && (
            <AuthorBox author={post?.author?.node} locale={locale} />
          )}

          <br />

          <Sharing post={post} category={category} locale={locale} />
          {tags && (
            <div className="tags my-5 block xborder-b py-2 xborder-gray-400 ">
              {post.tags.nodes.map((tag) => {
                tag.contentTypeName = "tag";
                return (
                  <a
                    key={tag.termTaxonomyId}
                    // href= {route(tag, "tag")}
                    className="py-2 px-3 me-3 rounded-sm border-[#71a0f2] border-2 tag text-black hover:text-white hover:bg-[#71a0f2] "
                  >
                    # {tag.name}
                  </a>
                );
              })}
            </div>
          )}

          <PostTitle title={relatedWidget?.title} size={"text-lg"} />
          <RelatedPost
            posts={related.nodes}
            widget={relatedWidget}
            locale={locale}
          />
        </div>
        <div
          className={` ${
            fullW ? "hidden" : "md:col-span-1 xs:col-span-3 md:ps-8 xs:ps-0"
          } `}
        >
          <ListNews
            posts={sidebar.nodes}
            widget={sidebarWidget}
            locale={locale}
          />
          <SocialMedia socialMedia={socialMedia} />
        </div>
      </div>
    </React.Fragment>
  );
}

function parseAndCleanHTML(htmlContent) {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  // Extract the form_id
  const formIdInput = document.querySelector('input[name="form_id"]');
  const formId = formIdInput ? formIdInput.value : null;
  // console.log("Extracted Form ID:", formId); // Log or handle the formId as needed

  // Remove elements by class name
  const elementsToRemove = document.querySelectorAll(".frm_forms");
  elementsToRemove.forEach((element) => element.remove());

  return [document.body.innerHTML, formId]; // Return the modified HTML
}
