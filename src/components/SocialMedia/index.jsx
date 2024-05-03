import React from 'react'
import PostTitle from '../PostTitle'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";


export default function SocialMedia() {
  return (
    <div className='py-5'>
        <PostTitle title={"Social media"}  />
        <div className='socialMedia flex p-3 space-x-3'>
            <Link href="#"><FaFacebook size={21} className='facebook text-xlg' /></Link>
            <Link href="#"><FaXTwitter size={21} className='twitterx' /></Link>
            <Link href="#"><RiYoutubeLine size={21} className='youtube' /></Link>
        </div>
    </div>
  )
}
