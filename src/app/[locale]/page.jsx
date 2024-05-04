import React from 'react';
import BigImage from '@/components/BigImage';
import ListNews from '@/components/ListNews';
import SocialMedia from '@/components/SocialMedia';
import FourPostinRow from '@/components/FourPostsinRow';
import TranslationsProvider from '@/providers/TranslationsProvider';
import initTranslations from '../../i18n';

import {
  mygetPosts,
} from "@/lib/functions";



const HomePage = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale);
  // export default  function  HomePage () {
  //
  // const t = await getTranslations('HomePage');

  let [
    posts,
   ] = await Promise.all([
    await mygetPosts(),
  ]);

  // const myPosts = await mygetPosts();
  // const posts = await getLatestPost();
  
  
  return (
    <TranslationsProvider>
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
          {`${t("home")}`}
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
        </TranslationsProvider>
      );
}

export default HomePage



