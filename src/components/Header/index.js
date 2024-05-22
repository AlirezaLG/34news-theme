import React from "react";
import TopHeader from "../TopHeader";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../NavigationMenu";
import { routeMenu } from "@/lib/helpers";

export default function Header({ primaryMenu, topMenu, header, social1 }) {
  return (
    <React.Fragment>
      {/* <TopHeader menu={topMenu} social2={social1} header={header} /> */}
      <div className=" bg-gray-200">
        <di className="container flex py-2">
          <Link href={header.siteUrl ? header.siteUrl : "/"}>
            <Image
              unoptimized
              // {header.headerLogo ? header.headerLogo : "/logo.png"}
              src="/logo.jpg"
              alt={header.siteTitle}
              width={90}
              height={90}
              className="rounded-sm"
              // style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <ul className="ms-auto me-5 flex pt-6">
            {topMenu.menuItems.nodes.map((menuItem) => {
              return (
                <li key={menuItem.id} className="px-3   ">
                  <Link
                    href={routeMenu(menuItem)}
                    target={menuItem.target ? menuItem.target : ""}
                    className="pt-1 text-xs hover:text-primary text-gray-800"
                  >
                    {menuItem.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </di>
      </div>
      <NavigationMenu menu={primaryMenu} header={header} />
    </React.Fragment>
  );
}
