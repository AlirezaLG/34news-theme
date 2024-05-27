"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <main className="text-center my-20 text-center">
      <Image
        unoptimized
        width={600}
        height={360}
        alt={"404 not found"}
        title={"404 not found"}
        className={" mx-auto "}
        src={"/404.png"}
      />

      <h2 className="my-4 text-black">{t("Page not found")}</h2>
      <Link href={`/`}>
        <button
          type="button"
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {t("Back Home")}
        </button>
      </Link>
    </main>
  );
};
export default NotFoundPage;
