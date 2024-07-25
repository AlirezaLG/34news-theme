"use client";
import React from "react";
import {
  FacebookIcon,
  XIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import { useTranslation } from "react-i18next";

export default function Sharing({ post, category = null, locale }) {
  let url = "";
  // it is post sharing url
  if (category) {
    /* prettier-ignore */
    url =  process.env.NEXT_PUBLIC_APP_URL + locale + "/posts/" + decodeURIComponent(category) + "/" + decodeURIComponent(post?.slug);
  } else {
    /* prettier-ignore */
    url = process.env.NEXT_PUBLIC_APP_URL + locale + "/page/" + decodeURIComponent(post?.slug);
  }

  const { t } = useTranslation();

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  console.log(url);
  const handleFacebookClick = () => {
    const shareUrl = `http://www.facebook.com/share.php?u=${url}`;
    openInNewTab(shareUrl);
  };

  // https://www.facebook.com/share_channel/?link=https%3A%2F%2F34news.com%2Fposts%2F%D8%AE%D8%A8%D8%B1-%D8%A7%D8%B5%D9%84%DB%8C%2F%D8%A7%D9%81%D8%B2%D8%A7%DB%8C%D8%B4-%DA%AF%D8%B1%D9%85%D8%A7-%D8%AF%D8%B1%D9%87%D9%86%D8%AF%D8%9B-%D8%A8%DB%8C%D8%B4-%D8%A7%D8%B2-%D8%AF%D9%88%D8%B5%D8%AF-%D8%AA%D9%86-%D8%AC%D8%A7%D9%86&app_id=966242223397117&source_surface=external_reshare&display&hashtag
  // https://www.facebook.com/share_channel/?link=https%3A%2F%2F34news.com%2Fposts%2F%25D8%25AE%25D8%25A8%25D8%25B1-%25D8%25A7%25D8%25B5%25D9%2584%25DB%258C%2F%D8%A7%D9%81%D8%B2%D8%A7%DB%8C%D8%B4-%DA%AF%D8%B1%D9%85%D8%A7-%D8%AF%D8%B1%D9%87%D9%86%D8%AF%D8%9B-%D8%A8%DB%8C%D8%B4-%D8%A7%D8%B2-%D8%AF%D9%88%D8%B5%D8%AF-%D8%AA%D9%86-%D8%AC%D8%A7%D9%86&app_id=966242223397117&source_surface=external_reshare&display&hashtag

  const handleTwitterClick = () => {
    /* prettier-ignore */
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${decodeURIComponent(post?.title)}`;
    openInNewTab(shareUrl);
  };

  const handleLinkedInClick = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${decodeURIComponent(
      post?.title
    )}`;
    openInNewTab(shareUrl);
  };

  const handleEmailClick = () => {
    const subject = decodeURIComponent(post?.title);
    const body = decodeURIComponent(`Check out this link: ${url}`);
    const shareUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = shareUrl;
  };

  const handleTelegramClick = () => {
    const shareUrl = `https://telegram.me/share/url?url=${decodeURIComponent(
      url
    )}&text=${decodeURIComponent(post?.title)}`;
    openInNewTab(shareUrl);
  };

  const handleWhatsappClick = () => {
    const shareUrl = `https://wa.me/?text=${decodeURIComponent(
      post?.title + " " + url
    )}`;
    openInNewTab(shareUrl);
  };

  return (
    <div className="sharing flex">
      <p className="pe-3 pt-1">{t("Sharing on social media")}</p>
      <ul className="flex">
        <li className="float-none pe-2">
          <button onClick={handleFacebookClick}>
            <FacebookIcon size={32} round />
          </button>
        </li>

        <li className="float-none pe-2">
          <button onClick={handleTwitterClick}>
            <XIcon size={32} round />
          </button>
        </li>

        <li className="float-none pe-2">
          <button onClick={handleLinkedInClick}>
            <LinkedinIcon size={32} round />
          </button>
        </li>

        <li className="float-none pe-2">
          <button onClick={handleEmailClick}>
            <EmailIcon size={32} round />
          </button>
        </li>

        <li className="float-none pe-2">
          <button onClick={handleTelegramClick}>
            <TelegramIcon size={32} round />
          </button>
        </li>

        <li className="float-none pe-2">
          <button onClick={handleWhatsappClick}>
            <WhatsappIcon size={32} round />
          </button>
        </li>
      </ul>
    </div>
  );
}
