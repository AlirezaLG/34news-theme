"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import { useTranslation } from "react-i18next";

export default function Sharing({ post, category = null }) {
  var url = "";
  // it is post sharing url
  if (category) {
    url =
      process.env.NEXT_PUBLIC_APP_URL + "posts/" + category + "/" + post?.slug;
  } else {
    url = process.env.NEXT_PUBLIC_APP_URL + "page/" + post?.slug;
  }

  const { t } = useTranslation();
  return (
    <div className="sharing flex">
      <p className="pe-3 pt-1">{t("Sharing on social media")}</p>
      <ul className="flex space-x-3">
        <li className="float-none">
          <FacebookShareButton url={url} quote={post?.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </li>

        <li className="float-none">
          <TwitterShareButton url={url} title={post?.title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </li>
      </ul>
    </div>
  );
}
