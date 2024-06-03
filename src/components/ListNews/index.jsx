"use client";
import React from "react";
import Single from "./single";
import { useTranslation } from "react-i18next";
import PostTitle from "../PostTitle";

export default function ListNews({ posts, widget, locale }) {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <PostTitle size="text-xl" title={widget?.title} />

      <div className="w-full text-gray-900 bg-white rounded-lg pb-0">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Single
              key={post?.id}
              post={post}
              category={widget?.category?.nodes[0].slug}
              locale={locale}
            />
          ))
        ) : (
          <p>{t("No posts available")}</p>
        )}
      </div>
    </React.Fragment>
  );
}
