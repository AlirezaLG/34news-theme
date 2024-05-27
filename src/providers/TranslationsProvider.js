"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import initTranslations from "@/i18n";
import { createAxiosInstance } from "@/lib/axios";

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}) {
  const i18n = createInstance();
  const axiosInstance = createAxiosInstance(locale); // Create Axios instance based on locale

  initTranslations(locale, namespaces, i18n, resources);

  return (
    <I18nextProvider i18n={i18n}>
      {/* You may want to pass axiosInstance to your context or components */}
      {children}
    </I18nextProvider>
  );
}
