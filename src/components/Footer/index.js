import React from 'react'
import Image from 'next/image'
import SocialMedia2 from '../SocialMedia2'
import Link from 'next/link'
import FooterMenu from '../FooterMenu'

export default function 
() {
  return (
    <div className='bg-primary pt-5' >
        <div className='container py-10 text-white grid md:grid-cols-2 gap-5 xs:grid-cols-1'>
            <div className='grid md:grid-cols-3 xs:grid-cols-1'>
              <div className='col-span-2 	'>
                <div className='flex items-center'>
                <Image width={70} height={70}  src="/logo.png" />
                <h3 className='ms-3 text-xl font-bold'>34 News Website</h3>
                </div>
                <p className='py-5'>
                  Pellentesque posuere. Praesent congue erat at massa. In ut quam vitae odio lacinia tincidunt.
                </p>
                <SocialMedia2 />
              </div>
              
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1'>
              <FooterMenu />
              <FooterMenu />
              <FooterMenu />
            </div>
        </div>
        <div className='container border-t border-[#5882CD]  text-center py-5 text-white'>
          <p> Copyright @ 2024 34news.com | All right reserved | Design and Developted by <Link href="#">Techsharks</Link></p>
        </div>
    </div>
  )
}
