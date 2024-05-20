import React from "react";
import Link from "next/link";
import { routeMenu } from "@/lib/helpers";
export default function FooterMenu({ menu }) {
  return (
    <React.Fragment>
      <div className="footerMenu">
        <h4 className="font-bold text-lg pb-4">{menu.name}</h4>
        <ul className="space-y-2">
          {menu.menuItems.nodes.map((menuItem) => {
            if (!menuItem.parentId) {
            }
            return (
              <li key={menuItem.id}>
                <Link
                  className="hover:ms-2 mitem ms-0"
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
    </React.Fragment>
  );
}
