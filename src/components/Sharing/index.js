"use client";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  XIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
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
      <ul className="flex ">
        <li className="float-none pe-2">
          <FacebookShareButton url={url} title={post?.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </li>

        <li className="float-none pe-2">
          <TwitterShareButton url={url} title={post?.title}>
            <XIcon size={32} round />
          </TwitterShareButton>
        </li>

        <li className="float-none pe-2">
          <LinkedinShareButton url={url} title={post?.title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </li>

        <li className="float-none pe-2">
          <EmailShareButton url={url} title={post?.title}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </li>

        <li className="float-none pe-2">
          <TelegramShareButton url={url} title={post?.title}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </li>

        <li className="float-none pe-2">
          <WhatsappShareButton url={url} title={post?.title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </li>
      </ul>
    </div>
  );
}
