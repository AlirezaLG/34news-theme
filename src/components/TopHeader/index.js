"use client";

import Link from "next/link";
import SocialMedia2 from "../SocialMedia2";

export default function TopHeader() {
  return (
    <div className="topHeader bg-primary">
      <div className="container flex py-1">
        <ul className="me-auto flex  ">
          <li className="px-3 ">
            <Link className="pt-1" href="#">
              14 April 2024
            </Link>
          </li>
          <li className="px-3 ">
            <Link className="pt-1" href="#">
              پشتو
            </Link>
          </li>
          <li className="px-3 ">
            <Link className="pt-1" href="#">
              فارسی
            </Link>
          </li>
        </ul>

        <div className="md:ms-auto">
          <SocialMedia2 />

        </div>
      </div>
    </div>
  );
}
