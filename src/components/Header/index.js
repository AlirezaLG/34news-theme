"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../NavigationMenu";
// import { useLanguage } from "@/providers/LanguageContext";
import initTranslations from "../../i18n";
import { useRouter } from "next/navigation";

export default function Header({
  primaryMenu,
  topMenu,
  header,
  social1,
  locale,
}) {
  const router = useRouter();
  const handleClick = (e) => {
    const loc = locale === "en" ? "/fa" : "/en";
    e.preventDefault();
    window.location.href = loc;
  };

  const { t } = initTranslations();
  // console.log(locale);
  return (
    <React.Fragment>
      {/* <TopHeader menu={topMenu} social2={social1} header={header} /> */}
      <div className=" bg-gray-200">
        <di className="container flex py-2">
          <Link href={header.siteUrl ? header.siteUrl : "/"}>
            <Image
              unoptimized
              // {header.headerLogo ? header.headerLogo : "/logo.png"}
              src="/logo.jpg"
              alt={header.siteTitle}
              width={90}
              height={90}
              className="rounded-sm"
              // style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <ul className="ms-auto me-5 flex pt-6">
            <li className="px-3   ">
              <button
                onClick={handleClick}
                className="pt-1 text-xs hover:text-primary text-gray-800"
              >
                {locale === "en" ? "فارسی" : "English"}
              </button>
            </li>
            <li className="px-3"></li>
          </ul>
        </di>
      </div>
      <NavigationMenu menu={primaryMenu} header={header} locale={locale} />
    </React.Fragment>
  );
}
