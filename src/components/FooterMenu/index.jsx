import React from 'react'
import Link from 'next/link'

export default function FooterMenu() {
  return (
    <div>
        <div className=''>
                <h4 className='font-bold text-lg pb-4'>Menu title</h4>
                <ul className='space-y-2'>
                  <li><Link href="#">menu1</Link></li>
                  <li><Link href="#">menu1</Link></li>
                  <li><Link href="#">menu1</Link></li>
                </ul>
              </div>
    </div>
  )
}
