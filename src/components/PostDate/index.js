"use client";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { formatDateTime } from "@/lib/helpers";
import { useTranslation } from "react-i18next";

export default function PostDate({ date, themeBlack }) {
  const { t } = useTranslation();
  return (
    <div className="flex py-1">
      <IoMdTime className="mt-05 mr-1 " fill={themeBlack ? "#fff" : "#000"} />
      <span
        className={`hover:text-gray-500 text-sm  ${
          themeBlack ? "text-white" : "text-gray-800"
        }  `}
      >
        {date ? formatDateTime(date) : t("No date")}
      </span>
    </div>
  );
}
