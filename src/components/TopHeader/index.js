"use client";

import Link from "next/link";
import SocialMedia2 from "../SocialMedia2";
import { routeMenu } from "@/lib/helpers";

export default function TopHeader({ menu, social2 }) {
  // console.log("topheader" + social2);
  return (
    <div className="topHeader bg-primary">
      <div className="container flex py-1">
        <ul className="me-auto flex  ">
          {/* <li className="px-3 ">
            <Link className="pt-1" href="#">
              14 April 2024
            </Link>
          </li> */}
          {menu.menuItems.nodes.map((menuItem) => {
            if (!menuItem.parentId) {
            }
            return (
              <li key={menuItem.id} className="px-3 ">
                <Link
                  href={routeMenu(menuItem)}
                  target={menuItem.target ? menuItem.target : ""}
                  className="pt-1"
                >
                  {menuItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="md:ms-auto">
          <SocialMedia2 social3={social2} />
        </div>
      </div>
    </div>
  );
}
