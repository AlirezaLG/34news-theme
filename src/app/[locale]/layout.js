import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


import initTranslations from "@/i18n";
import CprogressBar from "@/components/CprogressBar";
import { cache } from "react";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import { getMetaFromYoast } from "@/lib/helpers";
import {
  getSiteData,
} from "@/lib/functions";
import axios from "@/lib/axios";

export async function generateMetadata() {
  const data = await getHomePageMetaData();
  const siteData = await getSiteData();
  // console.log(siteData);
  const { json } = data;
  let obj = getMetaFromYoast(json);
  obj.title = siteData.name;
  return obj;
}
const getHomePageMetaData = cache(async () => {
  try {
    let res = await axios.get(
      `/yoast/v1/get_head?url=${publicRuntimeConfig.backendUrl}`
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error +" - Error withgetHomePageMetaData");
    return error;
  }
});

const RootLayout = async ({ params: { locale }, children}) => {
  const { t, resources } = await initTranslations(locale);

  return (
    <html lang={locale} >
      <head>
        
      </head>
      <body>
      <CprogressBar />
        <Header />
          {children}
        <Footer />
        
      </body>
    </html>
  );
}

export default RootLayout;