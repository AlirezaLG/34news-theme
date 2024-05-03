import BigImage from "@/components/BigImage";
import Card1 from "@/components/Card1";
import Footer from "@/components/Footer";
import FourPostinRow from "@/components/FourPostsinRow";
import Hcards from "@/components/Hcards";
import Hcard from "@/components/Hcards/hcard";
import ListNews from "@/components/ListNews";
import PostTitle from "@/components/PostTitle";
import SocialMedia from "@/components/SocialMedia";
import Video from "@/components/Video";
import React from "react";
import {
  getFooterSettings,
  getMedia,
  getMenu,
  getSiteData,
  mygetPosts,
} from "@/lib/functions";
import { useTranslations } from 'next-intl';

export async function getLatestPost() {
  const myPosts = await mygetPosts();
  return myPosts;
}
// const RootLayout = async ({ children, params: { locale } }) => {
//   const siteData = await getSiteData();
//   let [
//     navbarItems,
//     footer1Items,
//     footer2Items,
//     topHeaderMenu,
//     footerSetting,
//     siteLogo,
//   ] = await Promise.all([
//     await getMenu("primary"),
//     await getMenu("footer_1"),
//     await getMenu("footer_2"),
//     await getMenu("top_header"),
//     await getFooterSettings(),
//     await getMedia(siteData.site_logo),
//   ]);


// async function getPosts() {
//   // imitating a slow network
//   // await new Promise((resolve) => setTimeout(resolve, 3000));
//   const res = await fetch("http://localhost:4000/tickets", {
//     next: {
//       revalidate: 10,
//     },
//   });
//   return res.json();
// }
// revalidate means that if a new request comes in, it will re-generate the page

export default async function Home() {
  const t = useTranslations('Index');
  const posts = await getLatestPost();
  return (
    <main className="py-4">
      {/* {posts.map((item ,i) => {
        return (
          <div>
            {item.title.rendered}
          </div>
        )
      })} */}
      {/* <h1>before this </h1> */}
      {/* first widget */}
      <div className="container">
        <div className="grid md:grid-cols-4 xs:grid-cols-1 gap-5">
          <div className="md:col-span-3 py-2">
            <BigImage />
          </div>
          <div className="py-2 ">
            <iframe  style={{ with:"100%" , height:"220px" }}  src="https://www.youtube.com/embed/IwKeRHsxQTA?si=4m5eQ7U82XGw3XgD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <ListNews />
            <SocialMedia />
          </div>
        </div>
        <FourPostinRow posts={posts} />
      </div>


      {/* second widget */}
      <div className="container">
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
      </div>

      {/* video section */}
      <div className="bg-black">
        <div className="container">
          <Video />
        </div>
      </div>
      
      {/* forth section */}
      <div className="container my-14">
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
      </div>

      {/* last widget */}
      <div className="container">
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
      </div>

    </main>
  );
}
