import "@/assets/css/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
// import initTranslations from "@/i18n";
import CprogressBar from "@/components/CprogressBar";
import { menuDataGQL } from "@/lib/wpGraphQL";
import { getDataGQL } from "@/lib/functions";

const RootLayout = async ({ params: { locale }, children }) => {
  const { menus: menu, customizer: customizer } = await getDataGQL(
    menuDataGQL()
  );

  // if social media exist only
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
  // console.log(customizer);
  const menusByName = {};
  menu.nodes.forEach((menu) => {
    menusByName[menu.locations] = menu;
  });

  const header = {
    displayDate: customizer.displayDate,
    headerLogo: customizer.headerLogo,
    siteTitle: customizer.siteTitle,
    siteDescription: customizer.siteDescription,
    siteUrl: customizer.siteUrl,
  };
  // console.log("from layout" + header);
  const footer = {
    copyright: customizer.copyright,
    email: customizer.email,
    footerLogo: customizer.footerLogo,
    phone: customizer.phone,
    description: customizer.description,
    techsharks: customizer.techsharks,
  };

  // const socialmedia = {
  //   ...(customizer.facebookLink && customizer.facebookLink.length > 0
  //     ? { facebook: customizer.facebookLink }
  //     : {}),
  //   ...(customizer.linkedinLink && customizer.linkedinLink.length > 0
  //     ? { linkedin: customizer.linkedinLink }
  //     : {}),
  //   ...(customizer.instagramLink && customizer.instagramLink.length > 0
  //     ? { instagram: customizer.instagramLink }
  //     : {}),
  //   ...(customizer.telegramLink && customizer.telegramLink.length > 0
  //     ? { telegram: customizer.telegramLink }
  //     : {}),
  //   ...(customizer.tiktokLink && customizer.tiktokLink.length > 0
  //     ? { tiktok: customizer.tiktokLink }
  //     : {}),
  //   ...(customizer.whatsappLink && customizer.whatsappLink.length > 0
  //     ? { whatsapp: customizer.whatsappLink }
  //     : {}),
  //   ...(customizer.xTwitterLink && customizer.xTwitterLink.length > 0
  //     ? { xTwitter: customizer.xTwitterLink }
  //     : {}),
  //   ...(customizer.youtubeLink && customizer.youtubeLink.length > 0
  //     ? { youtube: customizer.youtubeLink }
  //     : {}),
  // };
  const {
    PRIMARY: primaryMenu,
    TOP_HEADER: topMenu,
    FOOTER_1: footerMenu1,
    FOOTER_2: footerMenu2,
    FOOTER_3: footerMenu3,
  } = menusByName;

  return (
    <html>
      <body>
        <CprogressBar />
        <Header
          header={header}
          primaryMenu={primaryMenu}
          topMenu={topMenu}
          social1={socialmedia}
        />
        {/* {React.cloneElement(children, customizer)} */}
        {children}
        <Footer
          socialmedia={socialmedia}
          footer={footer}
          footerMenu1={footerMenu1}
          footerMenu2={footerMenu2}
          footerMenu3={footerMenu3}
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
