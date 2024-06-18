"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { catLinkHome } from "@/lib/helpers";
export default function index({ locale, category, slug }) {
  const { t } = useTranslation();
  const home =
    locale === "en"
      ? process.env.NEXT_PUBLIC_APP_URL + "en"
      : process.env.NEXT_PUBLIC_APP_URL + "fa";

  const findCatbySlug = (slug) => {
    var index = -1;
    category.forEach((i) => {
      if (decodeURIComponent(i.node.slug) == decodeURIComponent(slug)) {
        index = i;
      }
      //   }else{
      //     index = 0
      //   }
    });
    return index;
  };

  const cat = findCatbySlug(slug);

  return (
    <React.Fragment>
      <nav className="flex pb-2" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href={home}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              {t("home")}
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href={catLinkHome(cat.node, locale)}
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {cat.node.name}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </React.Fragment>
  );
}
