import "@/assets/css/globals.css";
import "@/assets/css/style.css";
import { Noticia_Text } from "@next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import initTranslations from "../../i18n";
import CprogressBar from "@/components/CprogressBar";
import { menuDataGQL } from "@/lib/wpGraphQL";
import { getDataGQL } from "@/lib/functions";
import TranslationsProvider from "@/providers/TranslationsProvider";
import PolicyBanner from "@/components/PolicyBanner";
import { GoogleAnalytics } from "@next/third-parties/google";
import BackToTop from "@/components/BackToTop";

// import { LanguageProvider } from "@/providers/LanguageContext";
const roboto = Noticia_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = async ({ params: { locale }, children }) => {
  const { t, resources } = await initTranslations(locale);
  // console.log(locale);
  const { menus: menu, customizer: customizer } = await getDataGQL(
    menuDataGQL(),
    locale
  );

  console.log(customizer);
  // prepare the social media object
  const socialmedia = {
    facebook: customizer.facebookLink,
    xTwitter: customizer.xTwitterLink,
    youtube: customizer.youtubeLink,
    instagram: customizer.instagramLink,
    linkedin: customizer.linkedinLink,
    whatsapp: customizer.whatsappLink,
    telegram: customizer.telegramLink,
    tiktok: customizer.tiktokLink,
  };

  const menusByName = {};
  menu.nodes.forEach((menu) => {
    menusByName[menu.locations] = menu;
  });
  // prepare the header object
  const header = {
    displayDate: customizer.displayDate,
    headerLogo: customizer.headerLogo,
    siteTitle: customizer.siteTitle,
    siteDescription: customizer.siteDescription,
    siteUrl: customizer.siteUrl,
  };

  // prepare the footer object
  const footer = {
    favIcon: customizer.favIcon,
    copyright: customizer.copyright,
    email: customizer.email,
    footerLogo: customizer.footerLogo,
    phone: customizer.phone,
    slogun: customizer.slogun,
    description: customizer.description,
    techsharks: customizer.techsharks,
    siteTitle: customizer.siteTitle,
    siteUrl: customizer.siteUrl,
    footerDescription: customizer.footerDescription,
  };
  const {
    PRIMARY: primaryMenu,
    TOP_HEADER: topMenu,
    FOOTER_1: footerMenu1,
    FOOTER_2: footerMenu2,
    FOOTER_3: footerMenu3,
  } = menusByName;
  // console.log(primaryMenu.menuItems.nodes);
  return (
    <html dir={`${locale === "en" ? "ltr" : "rtl"}`} lang={locale}>
      <head>
        <link rel="icon" href={footer.favIcon} sizes="32x32" />
        {/* Google tag (gtag.js)  */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8ZDGPECBYC"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-8ZDGPECBYC');
        </script> */}
      </head>
      <body
        className={` 
      ${locale === "en" ? " ltr en " + roboto.className : " rtl fa qalam "}  
  `}
      >
        <GoogleAnalytics gaId="G-8ZDGPECBYC" />

        <TranslationsProvider
          namespaces={["default"]}
          locale={locale}
          resources={resources}
        >
          <CprogressBar locale={locale} />
          <Header
            header={header}
            primaryMenu={primaryMenu}
            topMenu={topMenu}
            social1={socialmedia}
            locale={locale}
          />
          {children}
          <Footer
            socialmedia={socialmedia}
            footer={footer}
            footerMenu1={footerMenu1}
            footerMenu2={footerMenu2}
            footerMenu3={footerMenu3}
          />
          <PolicyBanner locale={locale} url={customizer.policyPageID} />
          <BackToTop />
        </TranslationsProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
