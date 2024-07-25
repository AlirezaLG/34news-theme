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

  let turl = "";
  if (category) {
    /* prettier-ignore */
    const u = category +"/"+ encodeURIComponent(post?.slug);
    turl = process.env.NEXT_PUBLIC_APP_URL + locale + "/posts/" + u;
  }
  console.log("turl: " + turl);

  const { t } = useTranslation();

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleFacebookClick = () => {
    const shareUrl = `http://www.facebook.com/share.php?u=${url}`;
    openInNewTab(shareUrl);
  };

  const handleTwitterClick = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${turl}&text=${decodeURIComponent(
      post?.title
    )}`;
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
