import React from "react";
import PostTitleBlack from "../PostTitleBlack";
import Card1Black from "../Card1Black";
import Hcard from "../Hcard";

export default function VideoColumn({ posts, category }) {
  return (
    <React.Fragment>
      {posts.map((post, index) => {
        if (index < 1) {
          return (
            <React.Fragment key={post.id}>
              <Card1Black post={post} category={category.slug} />
            </React.Fragment>
          );
        }
      })}
      <div className="space-y-5 mb-5">
        {posts.map((post, index) => {
          if (index > 0) {
            return (
              <React.Fragment key={post.id}>
                <Hcard post={post} category={category.slug} themeBlack={true} />
              </React.Fragment>
            );
          }
        })}
      </div>
    </React.Fragment>
  );
}
