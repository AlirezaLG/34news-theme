"use client";
import React from "react";
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

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SocialMedia2({ socialMedia }) {
  const { t } = useTranslation();
  // console.log("social widget: " + socialMedia);

  return (
    <React.Fragment>
      <ul className="mt-3 flex flex-row text-white">
        {socialMedia ? (
          Object.entries(socialMedia).map(([platform, link]) => {
            if (link.length > 0) {
              return (
                <React.Fragment key={platform}>
                  {platform === "facebook" && (
                    <li className="px-1">
                      <Link
                        target="_blank"
                        className="pt-1 px-1 block hover:text-gray-900"
                        href={link}
                      >
                        <FaFacebook />
                      </Link>
                    </li>
                  )}

                  {platform === "xTwitter" && (
                    <li className="px-1">
                      <Link
                        target="_blank"
                        className="pt-1 px-1 block hover:text-gray-900"
                        href={link}
                      >
                        <FaXTwitter />
                      </Link>
                    </li>
                  )}

                  {platform === "youtube" && (
                    <li className="px-1">
                      <Link
                        target="_blank"
                        className="pt-1 px-1 block hover:text-gray-900"
                        href={link}
                      >
                        <FaYoutube />
                      </Link>
                    </li>
                  )}

                  {platform === "instagram" && (
                    <li className="px-1">
                      <Link
                        target="_blank"
                        className="pt-1 px-1 block hover:text-gray-900"
                        href={link}
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                  )}

                  {platform === "linkedin" && (
                    <li className="px-1">
                      <Link
                        target="_blank"
                        className="pt-1 px-1 block hover:text-gray-900"
                        href={link}
                      >
                        <FaLinkedin />
                      </Link>
                    </li>
                  )}

                  {platform === "whatsapp" && (
                    <li className="px-1">
                      <Link
                        target="_blank"
                        className="pt-1 px-1 block hover:text-gray-900"
                        href={link}
                      >
                        <FaWhatsapp />
                      </Link>
                    </li>
                  )}

                  {platform === "telegram" && (
                    <li className="px-1">
                      <Link
                        target="_blank"
                        className="pt-1 px-1 block hover:text-gray-900"
                        href={link}
                      >
                        <FaTelegram />
                      </Link>
                    </li>
                  )}

                  {platform === "tiktok" && (
                    <li className="px-1">
                      <Link
                        target="_blank"
                        className="pt-1 px-1 block hover:text-gray-900"
                        href={link}
                      >
                        <FaTiktok />
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
    </React.Fragment>
  );
}
