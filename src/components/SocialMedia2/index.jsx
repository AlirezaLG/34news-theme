import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import Link from 'next/link';

export default function SocialMedia2() {
  return (
    <div>
        <ul className=" flex  text-white">
          <li className="px-1 ">
            <Link href="" className="pt-1 px-1 block">
              <FaXTwitter />
            </Link>
          </li>
          <li className="px-1 ">
            <Link href="" className="pt-1 px-1 block">
              <RiYoutubeLine />
            </Link>
          </li>
          <li className="px-1 ">
            <Link
              className="pt-1 px-1 block"
              href="https://www.facebook.com/afemafg"
            >
              <FaFacebook />
            </Link>
          </li>
        </ul>

    </div>
  )
}
