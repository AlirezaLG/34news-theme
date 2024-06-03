"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function PolicyBanner({ url, locale }) {
  const { t } = useTranslation();
  const link = (locale === "fa" ? "/fa" : "") + "/pages/" + url;

  // State to manage whether to show the banner
  const [showBanner, setShowBanner] = useState(false);
  const localStorageKey = `policyAccepted-${locale}`;

  useEffect(() => {
    // On component mount, check if the policy was accepted and if the acceptance is still valid
    const acceptDate = localStorage.getItem(localStorageKey);
    if (acceptDate && new Date(acceptDate).getTime() > new Date().getTime()) {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptPolicy = () => {
    // Calculate future date for 60 days from now
    const futureDate = new Date(
      new Date().getTime() + 30 * 24 * 60 * 60 * 1000
    );
    // Store the future date in localStorage
    localStorage.setItem(localStorageKey, futureDate.toISOString());
    // Hide the banner
    setShowBanner(false);
  };

  if (!showBanner) return null; // Don't render the banner if it's not necessary

  return (
    <div
      id="informational-banner"
      tabindex="-1"
      class="fixed bottom-0 start-0 z-1 flex flex-col justify-between w-full p-4 border-t border-gray-200 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    >
      <div class="mb-4 md:mb-0 md:me-4">
        <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">
          {t("Private Policy")}
        </h2>
        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          {t(
            "We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies:"
          )}
        </p>
      </div>
      <div class="flex items-center flex-shrink-0">
        {/* prettier-ignore */}
        <Link href={link} class="inline-flex items-center justify-center px-3 py-2 me-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" > <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" > <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" /> </svg> 
            {t("Read More")} 
        </Link>

        {/* prettier-ignore */}
        <button onClick={acceptPolicy}   href="#" class="inline-flex items-center justify-center px-3 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" > 
            {t("Accept")} 
            <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" > {" "} <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /> </svg>
        </button>

        {/* prettier-ignore */}
        <button data-dismiss-target="#informational-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white" > {" "} <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />{" "} </svg>{" "} 
            <span class="sr-only">Close banner</span> 
        </button>
      </div>
    </div>
  );
}
