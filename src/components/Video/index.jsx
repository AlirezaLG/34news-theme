import React from "react";
import PostTitleBlack from "../PostTitleBlack";
import Card1Black from "../Card1Black";
import Hcard from "../Hcard";
import VideoColumn from "../VideoColumn";
import { catLinkHome } from "@/lib/helpers";

export default function Video({ video1, video2, video3, widget }) {
  const styletitle = {
    titleStyle: " text-white ",
    moreStyle: "",
    more: true,
  };
  return (
    <div className="bg-black">
      <div className="container">
        <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-5 xs:gap-0 py-14">
          <div>
            <PostTitleBlack
              style={styletitle}
              title={widget.col1.title}
              href={catLinkHome(widget?.col1?.category.nodes[0])}
            />

            <VideoColumn
              posts={video1.nodes}
              category={widget?.col1?.category?.nodes[0]}
            />
          </div>

          <div>
            <PostTitleBlack
              style={styletitle}
              title={widget.col2.title}
              href={catLinkHome(widget?.col2?.category.nodes[0])}
            />
            <VideoColumn
              posts={video2.nodes}
              category={widget?.col2?.category?.nodes[0]}
            />
          </div>

          <div>
            <PostTitleBlack
              style={styletitle}
              title={widget.col3.title}
              href={catLinkHome(widget?.col3?.category.nodes[0])}
            />
            <VideoColumn
              posts={video3.nodes}
              category={widget?.col3?.category?.nodes[0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
