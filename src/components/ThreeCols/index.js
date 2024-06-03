import React from "react";
import PostTitle from "../PostTitle";
import Hcard from "../Hcard";
import { catLinkHome } from "@/lib/helpers";
import Card1 from "../Card1";
import Single from "../ListNews/single";

export default function ThreeCols({ posts, widget, locale }) {
  return (
    <div className="container mt-10 mb-3">
      <PostTitle
        title={widget?.title}
        href={catLinkHome(widget?.category.nodes[0], locale)}
        size={"text-2xl"}
        more={true}
      />
      <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-5 xs:gap-0 pb-5">
        {/* fist col */}
        {posts.map((post, index) => {
          if (index < 1) {
            return (
              <React.Fragment key={post.id}>
                <Card1
                  post={post}
                  category={widget?.category?.nodes[0].slug}
                  content={true}
                  title={"2xl"}
                  imgsize={1}
                  locale={locale}
                />
              </React.Fragment>
            );
          } else {
            return null;
          }
        })}
        <div className="space-y-3">
          {/* second col */}
          {posts.map((post, index) => {
            if (index > 0 && index < 5) {
              return (
                <React.Fragment key={post.id}>
                  <Hcard
                    post={post}
                    category={widget?.category?.nodes[0].slug}
                    content={false}
                    locale={locale}
                  />
                </React.Fragment>
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* third cal */}
        <div className="xs:mt-5 md:mt-0">
          {posts.map((post, index) => {
            if (index > 4) {
              return (
                <React.Fragment key={post.id}>
                  <Single
                    key={post?.id}
                    post={post}
                    category={widget?.category?.nodes[0].slug}
                    locale={locale}
                  />
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
