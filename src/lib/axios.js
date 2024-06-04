import Axios from "axios";
// import getConfig from "next/config";
import https from "https";
// const config = getConfig();

const createAxiosInstance = (locale) => {
  const baseURL =
    locale === "en"
      ? process.env.NEXT_PUBLIC_BACKEND_API_URL_EN
      : process.env.NEXT_PUBLIC_BACKEND_API_URL;
  // if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //   headers[
  //     "Authroization"
  //   ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  // }

  return Axios.create({
    method: "post",
    maxBodyLength: Infinity,
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { createAxiosInstance };
