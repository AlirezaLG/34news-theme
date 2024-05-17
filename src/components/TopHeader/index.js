"use client";

import Link from "next/link";
import SocialMedia2 from "../SocialMedia2";
import { routeMenu } from "@/lib/helpers";
import { getMonthAbbreviation } from "@/lib/helpers";
export default function TopHeader({ menu, social2, header }) {
  // console.log("topheader" + social2);

  return (
    <div className="topHeader bg-primary">
      <div className="container flex py-1">
        <ul className="me-auto flex ">
          <li className="px-3 text-white">
            {header.displayDate ? getMonthAbbreviation() : ""}
          </li>
          {menu.menuItems.nodes.map((menuItem) => {
            return (
              <li key={menuItem.id} className="px-3   ">
                <Link
                  href={routeMenu(menuItem)}
                  target={menuItem.target ? menuItem.target : ""}
                  className="pt-1 text-xs hover:text-gray-200"
                >
                  {menuItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="md:ms-auto">
          <SocialMedia2 socialMedia={social2} />
        </div>
      </div>
    </div>
  );
}
