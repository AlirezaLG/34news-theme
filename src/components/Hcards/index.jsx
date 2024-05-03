import React from 'react'
import Hcard from './hcard'
export default function Hcards({content}) {
  return (
    <div className='space-y-5 py-5'>
        <Hcard content={content} />
        <Hcard content={content} />
        <Hcard content={content} />
        <Hcard content={content} />
    </div>
  )
}
