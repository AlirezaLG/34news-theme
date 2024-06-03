import React from "react";
import Card1 from "../Card1";
import PostTitle from "../PostTitle";
import { catLinkHome } from "@/lib/helpers";

export default function OneCol({ posts, widget, locale }) {
  return (
    <div className="container">
      <PostTitle
        title={widget?.title}
        href={catLinkHome(widget?.category.nodes[0], locale)}
        size={"text-xl"}
        more={true}
      />
      <div className="grid md:grid-cols-4 xs:grid-cols-1 md:gap-5 xs:gap-0 pb-5">
        {posts.map((post) => {
          return (
            <React.Fragment key={post.id}>
              <Card1
                post={post}
                category={widget?.category?.nodes[0].slug}
                locale={locale}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
