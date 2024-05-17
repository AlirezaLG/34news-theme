import React from "react";
import TopHeader from "../TopHeader";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../NavigationMenu";

export default function Header({ primaryMenu, topMenu, header, social1 }) {
  return (
    <header>
      <TopHeader menu={topMenu} social2={social1} header={header} />
      <div className="container flex py-2">
        <Link href={header.siteUrl ? header.siteUrl : "/"}>
          <Image
            unoptimized
            // {header.headerLogo ? header.headerLogo : "/logo.png"}
            src="/logo.png"
            alt={header.siteTitle}
            width={90}
            height={90}
            // style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>
      <NavigationMenu menu={primaryMenu} />
    </header>
  );
}
