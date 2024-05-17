"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PostTitle({ title, href, size, more }) {
  const { t } = useTranslation();
  return (
    <div className=" border-b-2 border-primary   px-1 pb-2 mb-5">
      {href ? (
        <Link
          target="_blank"
          href={href || ""}
          className="text-black flex justify-between hover:text-primary"
        >
          <p className={` ${size ? size : "text-md"} font-bold`}>{title}</p>
          {more ? <span className="text-sm">{t("more")}</span> : ""}
        </Link>
      ) : (
        <p className={` ${size ? size : "text-md"} font-bold`}>
          {title ? title : t("No Title")}
        </p>
      )}
    </div>
  );
}
