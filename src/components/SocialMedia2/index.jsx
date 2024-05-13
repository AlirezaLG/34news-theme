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

export default function SocialMedia2({ social3 }) {
  // console.log("social widget: " + social3);

  return (
    <div>
      <ul className=" flex flex-row text-white">
        {social3 ? (
          Object.entries(social3).map(([platform, link]) => {
            if (link.length > 0) {
              return (
                <React.Fragment key={platform}>
                  {platform === "facebook" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaFacebook />
                      </Link>
                    </li>
                  )}

                  {platform === "xTwitter" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaXTwitter />
                      </Link>
                    </li>
                  )}

                  {platform === "youtube" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaYoutube />
                      </Link>
                    </li>
                  )}

                  {platform === "instagram" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaInstagram />
                      </Link>
                    </li>
                  )}

                  {platform === "linkedin" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaLinkedin />
                      </Link>
                    </li>
                  )}

                  {platform === "whatsapp" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaWhatsapp />
                      </Link>
                    </li>
                  )}

                  {platform === "telegram" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
                        <FaTelegram />
                      </Link>
                    </li>
                  )}

                  {platform === "tiktok" && (
                    <li className="px-1">
                      <Link className="pt-1 px-1 block" href={link}>
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
          <div>No social media setup </div>
        )}
      </ul>
    </div>
  );
}
