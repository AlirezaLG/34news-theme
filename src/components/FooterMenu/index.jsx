import React from "react";
import Link from "next/link";
import { routeMenu } from "@/lib/helpers";
export default function FooterMenu({ menu }) {
  return (
    <div>
      <div className="">
        <h4 className="font-bold text-lg pb-4">{menu.name}</h4>
        <ul className="space-y-2">
          {menu.menuItems.nodes.map((menuItem) => {
            if (!menuItem.parentId) {
            }
            return (
              <li key={menuItem.id}>
                <Link
                  href={routeMenu(menuItem)}
                  target={menuItem.target ? menuItem.target : ""}
                >
                  {menuItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
