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
export async function generateMetadata({ params: { slug, locale } }) {
  const meta = await getPostGQL(
    sinlgePageGQL(decodeURIComponent(slug), process.env.NEXT_PUBLIC_HOME_SLUG),
    locale
  );

  const url =
    process.env.NEXT_PUBLIC_APP_URL + "/pages/" + decodeURIComponent(slug);
  return getMetaFromYoast(meta?.data?.main?.edges[0].node?.seo, url);
}

export default async function SinglePost({ params: { slug, locale } }) {
  const { t, resources } = await initTranslations(locale);

  // this is main page + sidebar info
  const SinglePostData = await getPostGQL(
    sinlgePageGQL(decodeURIComponent(slug), process.env.NEXT_PUBLIC_HOME_SLUG),
    locale
  );

  // page data address
  const post = SinglePostData?.data?.main?.edges[0].node;

  // page sidebar data
  // console.log(SinglePostData.data.Home);
  const { sidebar } = await getDataGQL(
    singlePageDataGQL(SinglePostData.data.Home.edges[0].node.defaultPage),
    locale
  );
  // widget settings
  const { sidebar: sidebarWidget } =
    SinglePostData.data.Home.edges[0].node.defaultPage;

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

  const fullW = post?.pageLayout.layout[0] === "Fullwidth" || null;
  return (
    <div className="container single defaultPage py-8 grid md:grid-cols-3 xs:grid-cols-1 md:gap-5 xs:gap-0">
      <div className={` ${fullW ? "col-span-3 md:mx-52" : "col-span-2"}  `}>
        <h1
          className="text-4xl font-bold "
          dangerouslySetInnerHTML={{ __html: decode(post?.title) }}
        ></h1>
        <p className="pt-3 pb-2">
          <i className="ti-calendar"></i>
          {formatDateTime(post?.date, locale)}
        </p>
        <div
          className="leading-6 content"
          dangerouslySetInnerHTML={{ __html: decode(post?.content) }}
        ></div>
        <br />

        <Sharing post={post} />
      </div>
      <div className={` ${fullW ? "hidden" : "col-span-1 md:ps-8 xs:ps-0"}  `}>
        <ListNews posts={sidebar.nodes} widget={sidebarWidget} />
        <SocialMedia socialMedia={socialMedia} />
      </div>
    </div>
  );
}
