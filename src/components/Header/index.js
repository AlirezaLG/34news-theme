import React from "react";
import TopHeader from "../TopHeader";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../NavigationMenu";

export default function Header() {
  return (
    <header>
      <TopHeader />
      <div className="container flex py-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Sample image"
            width={90}
            height={90}
            // style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>
      <NavigationMenu />
    </header>
  );
}
