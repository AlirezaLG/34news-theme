import React from "react";
import Video from "@/components/Video";
import { getMetaFromYoast } from "@/lib/helpers";
import { homePageGQL, homePageDataGQL, menuDataGQL } from "@/lib/wpGraphQL";
import { getHomePageGQL, getDataGQL } from "@/lib/functions";
import ThreeCols from "@/components/ThreeCols";
import OneCol from "@/components/Oncol";
import TwoCols from "@/components/TwoCols";
import FirstSection from "@/components/FirstSection";
// export const revalidate = 100;

// Dynamic metaData
export async function generateMetadata() {
  const gql = await getHomePageGQL(
    homePageGQL(process.env.NEXT_PUBLIC_HOME_SLUG)
  );
  return getMetaFromYoast(gql.pages.edges[0].node.seo);
}

const HomePage = async ({ params: { locale } }) => {
  const gql = await getHomePageGQL(
    homePageGQL(process.env.NEXT_PUBLIC_HOME_SLUG)
  );

  const query = gql?.pages?.edges[0].node;

  // console.log(gql.customizer);
  const socialmedia = {
    facebook: gql?.customizer?.facebookLink,
    xTwitter: gql?.customizer?.xTwitterLink,
    youtube: gql?.customizer?.youtubeLink,
    instagram: gql?.customizer?.instagramLink,
    linkedin: gql?.customizer?.linkedinLink,
    whatsapp: gql?.customizer?.whatsappLink,
    telegram: gql?.customizer?.telegramLink,
    tiktok: gql?.customizer?.tiktokLink,
  };
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
    oneCols2,
  } = await getDataGQL(homePageDataGQL(query?.homepage));

  return (
    <main className="py-4 mainPage">
      {/* first section */}
      {query?.homepage?.slideshow.show ||
      query?.homepage?.slideshowRight?.show ? (
        <FirstSection
          slideshow={slideshow?.nodes}
          widgetSlideshow={query?.homepage?.slideshow}
          slideshowRight={slideshowRight?.nodes}
          widgetSlideshowRight={query?.homepage?.slideshowRight}
          socialMedia={socialmedia}
        />
      ) : null}

      {/* second widget */}
      {query?.homepage?.twoCols.show || query?.homepage?.twoColsRight?.show ? (
        <TwoCols
          twoCols={twoCols.nodes}
          widgetTwoCols={query?.homepage?.twoCols}
          twoColsRight={twoColsRight.nodes}
          widgetTwoColsRight={query?.homepage?.twoColsRight}
        />
      ) : null}

      {/* video section */}
      {query?.homepage?.video?.show ? (
        <Video
          video1={video1}
          video2={video2}
          video3={video3}
          widget={query?.homepage?.video}
        />
      ) : null}

      {/* forth section */}
      {query?.homepage?.threeCols?.show ? (
        <ThreeCols
          posts={threeCols?.nodes}
          widget={query?.homepage?.threeCols}
        />
      ) : null}

      {/* last widget */}
      <OneCol posts={oneCols?.nodes} widget={query?.homepage?.oneCols} />

      <OneCol posts={oneCols2?.nodes} widget={query?.homepage?.oneCols2} />
    </main>
  );
};

export default HomePage;
