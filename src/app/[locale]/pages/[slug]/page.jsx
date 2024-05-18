import React from "react";
import { getPostGQL, getDataGQL } from "@/lib/functions";
import { sinlgePageGQL, singlePageDataGQL } from "@/lib/wpGraphQL";
import { getMetaFromYoast, formatDateTime, route } from "@/lib/helpers";
import { decode } from "html-entities";
import ListNews from "@/components/ListNews";

import initTranslations from "@/i18n";
import Sharing from "@/components/Sharing";
import SocialMedia from "@/components/SocialMedia";

// Dynamic metaData
export async function generateMetadata({ params: { slug, locate } }) {
  const meta = await getPostGQL(
    sinlgePageGQL(slug, process.env.NEXT_PUBLIC_HOME_SLUG)
  );

  const url = process.env.NEXT_PUBLIC_APP_URL + "/pages/" + slug;
  return getMetaFromYoast(meta?.data?.pages?.edges[0].node?.seo, url);
}

export default async function SinglePost({ params: { slug, locale } }) {
  const { t, resources } = await initTranslations(locale);

  // this is page data
  const SinglePostData = await getPostGQL(
    sinlgePageGQL(process.env.NEXT_PUBLIC_HOME_SLUG)
  );

  // page data address
  const post = SinglePostData?.data?.pages?.edges[0].node;

  // page sidebar data
  const { sidebar } = await getDataGQL(
    singlePageDataGQL(SinglePostData.data.pages.edges[0].node.defaultPage)
  );
  // widget settings
  const { sidebar: sidebarWidget } =
    SinglePostData.data.pages.edges[0].node.defaultPage;

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
  return (
    <div className="container single defaultPage py-8 grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <h1
          className="text-4xl "
          dangerouslySetInnerHTML={{ __html: decode(post?.title) }}
        ></h1>
        <p className="pt-3 pb-2">
          <i className="ti-calendar"></i>
          {formatDateTime(post?.date)}
        </p>
        <div
          className="leading-6 content"
          dangerouslySetInnerHTML={{ __html: decode(post?.content) }}
        ></div>
        <br />

        <Sharing post={post} />
      </div>
      <div className="col-span-1 ps-8">
        <ListNews posts={sidebar.nodes} widget={sidebarWidget} />
        <SocialMedia socialMedia={socialMedia} />
      </div>
    </div>
  );
}
