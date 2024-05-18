import "@/assets/css/globals.css";
import "@/assets/css/style.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import initTranslations from "../../i18n";
import CprogressBar from "@/components/CprogressBar";
import { menuDataGQL } from "@/lib/wpGraphQL";
import { getDataGQL } from "@/lib/functions";
import TranslationsProvider from "@/providers/TranslationsProvider";

const RootLayout = async ({ params: { locale }, children }) => {
  const { t, resources } = await initTranslations(locale);
  const { menus: menu, customizer: customizer } = await getDataGQL(
    menuDataGQL()
  );

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
    copyright: customizer.copyright,
    email: customizer.email,
    footerLogo: customizer.footerLogo,
    phone: customizer.phone,
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
  console.log(primaryMenu.menuItems.nodes);
  return (
    <html>
      <body>
        <TranslationsProvider
          namespaces={["default"]}
          locale={locale}
          resources={resources}
        >
          <CprogressBar />
          <Header
            header={header}
            primaryMenu={primaryMenu}
            topMenu={topMenu}
            social1={socialmedia}
          />
          {/* {t("home")} */}
          {/* {React.cloneElement(children, customizer)} */}
          {children}
          <Footer
            socialmedia={socialmedia}
            footer={footer}
            footerMenu1={footerMenu1}
            footerMenu2={footerMenu2}
            footerMenu3={footerMenu3}
          />
        </TranslationsProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
