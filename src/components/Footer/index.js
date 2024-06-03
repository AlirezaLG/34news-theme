import React from "react";
import Image from "next/image";
import SocialMedia2 from "../SocialMedia2";
import Link from "next/link";
import FooterMenu from "../FooterMenu";
import { decode } from "html-entities";
export default function ({
  footerMenu1,
  footerMenu2,
  footerMenu3,
  socialmedia,
  footer,
}) {
  // console.log(footer);
  return (
    <div className="bg-primary pt-5">
      <div className="container py-6 text-white grid md:grid-cols-2 gap-5 xs:grid-cols-1">
        <div className="grid md:grid-cols-3 xs:grid-cols-1">
          <div className="col-span-2 	">
            <div className="flex items-start">
              <Image
                unoptimized
                width={70}
                height={70}
                style={{ width: "70px", height: "70px" }}
                src={footer.footerLogo ? footer.footerLogo : "/logo-white.png"}
                alt={footer.siteTitle}
                className="mx-3"
              />
              <div className="flex-row">
                <p className="xpy-5">{footer.footerDescription}</p>
                <SocialMedia2 socialMedia={socialmedia} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <FooterMenu menu={footerMenu1} />
          <FooterMenu menu={footerMenu2} />
          <FooterMenu menu={footerMenu3} />
        </div>
      </div>
      <div className="container border-t border-[#5882CD]  text-center py-5 text-white">
        <div className="flex md:flex-row xs:flex-col ">
          <span
            className="md:me-auto xs:me-0 "
            dangerouslySetInnerHTML={{ __html: decode(footer?.copyright) }}
          ></span>
          <span
            className=""
            dangerouslySetInnerHTML={{ __html: decode(footer.techsharks) }}
          ></span>
        </div>
      </div>
    </div>
  );
}
