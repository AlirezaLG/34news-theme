import React from "react";
import BigImage from "@/components/BigImage";
import ListNews from "@/components/ListNews";
import SocialMedia from "@/components/SocialMedia";
import FourPostinRow from "@/components/FourPostsinRow";
import initTranslations from "../../i18n";
import PostTitle from "@/components/PostTitle";
import Hcards from "@/components/Hcards";
import Video from "@/components/Video";
import Card1 from "@/components/Card1";
import Hcard from "@/components/Hcard";
import axios from "@/lib/axios";
import { axiosGQL } from "@/lib/axios";
import { getMetaFromYoast } from "@/lib/helpers";
import { homePageGQL, homePageDataGQL } from "@/lib/wpGraphQL";
import { getHomePageGQL, getDataGQL } from "@/lib/functions";

const homePageData = getHomePageGQL(
  homePageGQL(process.env.NEXT_PUBLIC_HOME_SLUG)
);

// Dynamic metaData
export async function generateMetadata() {
  const gql = await homePageData;
  return getMetaFromYoast(gql.seo);
}

const HomePage = async ({ params: { locale }, customizer }) => {
  // console.log({ customizer });
  const { t, resources } = await initTranslations(locale);
  const gql = await homePageData;
  // console.log("json data "+CustomQuery(gql.homepage));

  // all widgets data
  const {
    slideshow,
    slideshowRight,
    twoCols,
    twoColsRight,
    video1,
    video2,
    video3,
    threeCols,
    oneCols,
  } = await getDataGQL(homePageDataGQL(gql.homepage));

  return (
    <main className="py-4">
      {/* {`${t("home")}`} */}
      <div className="container">
        <div className="grid md:grid-cols-4 xs:grid-cols-1 gap-5">
          <div className="md:col-span-3 py-2">
            <BigImage />
          </div>
          <div className="py-2 ">
            {/* <iframe  style={{ with:"100%" , height:"220px" }}  src="https://www.youtube.com/embed/IwKeRHsxQTA?si=4m5eQ7U82XGw3XgD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
            <ListNews />
            <SocialMedia />
          </div>
        </div>
        <FourPostinRow
          posts={slideshow.nodes}
          widget={gql.homepage.slideshow}
        />
      </div>

      {/* second widget */}
      {/* <div className="container">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="md:col-span-2 xs:col-span-3">
                <PostTitle title={"Politics"} href={'#'} size={"text-xl"} more={true} />
                <Hcards content={true} />
              </div>
              <div className="md:col-span-1 xs:col-span-3" >
              <PostTitle title={"Women"} href={'#'} size={"text-xl"} more={false} />
                <Hcards content={false} />
              </div>
            </div>
          </div> */}

      {/* video section */}
      {/* <div className="bg-black">
            <div className="container">
              <Video />
            </div>
          </div> */}

      {/* forth section */}
      {/* <div className="container my-14">
            <PostTitle title={"Women"} href={'#'} size={"text-xl"} more={true} />
            <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-5 xs:gap-0 py-5">
              <Card1 content={true} title={"2xl"} />
              <div className="space-y-5">
                <Hcard content={false} />
                <Hcard content={false} />
                <Hcard content={false} />
                <Hcard content={false} />
              </div>
              <ListNews />
            </div>
          </div> */}

      {/* last widget */}
      {/* <div className="container">
          <PostTitle title={"Other News"} href={'#'} size={"text-xl"} more={true} />
            <div className="grid md:grid-cols-4 xs:grid-cols-1 md:gap-5 xs:gap-0 py-5">
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
            </div>
          </div> */}
    </main>
  );
};

export default HomePage;
