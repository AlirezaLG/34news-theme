"use client";
import React from "react";
import PostTitle from "../PostTitle";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function SocialMedia({ socialMedia }) {
  const { t } = useTranslation();

  return (
    <div className="md:py-5 xs:pt-3 xs:pb-0">
      <PostTitle title={"Social media"} />
      <ul className=" flex flex-row text-white socialMedia  pb-3 ps-0">
        {socialMedia ? (
          Object.entries(socialMedia).map(([platform, link]) => {
            if (link.length > 0) {
              return (
                <React.Fragment key={platform}>
                  {platform === "facebook" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaFacebook size={24} className="facebook text-xlg" />
                      </Link>
                    </li>
                  )}

                  {platform === "xTwitter" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaXTwitter size={24} className="twitterx text-xlg" />
                      </Link>
                    </li>
                  )}

                  {platform === "youtube" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaYoutube size={24} className="youtube text-xlg" />
                      </Link>
                    </li>
                  )}

                  {platform === "instagram" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaInstagram size={24} className="instagram text-xlg" />
                      </Link>
                    </li>
                  )}

                  {platform === "linkedin" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaLinkedin size={24} className="linkedin text-xlg" />
                      </Link>
                    </li>
                  )}

                  {platform === "whatsapp" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaWhatsapp size={24} className="whatsapp text-xlg" />
                      </Link>
                    </li>
                  )}

                  {platform === "telegram" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaTelegram size={24} className="telegram text-xlg" />
                      </Link>
                    </li>
                  )}

                  {platform === "tiktok" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaTiktok size={24} className="tiktok text-xlg" />
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              );
            }
            return null;
          })
        ) : (
          <div>{t("No social media setup")} </div>
        )}
      </ul>
    </div>
  );
}
