"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PostTitleBlack({ title, href, size, more }) {
  const { t } = useTranslation();
  return (
    <div className=" border-b border-gray-50/25  px-1 pb-2 mb-5">
      {href ? (
        <Link
          href={href}
          className="text-white flex justify-between hover:text-primary"
        >
          <p className={`text-md ${size ? size : "text-md"} font-bold`}>
            {title}
          </p>
          {more ? <span className="text-sm">{t("more")}</span> : ""}
        </Link>
      ) : (
        <p
          className={`text-md ${size ? size : "text-md"} text-white font-bold`}
        >
          {title ? title : t("No Title")}
        </p>
      )}
    </div>
  );
}
