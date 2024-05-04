import React from 'react'
import Single from './single'

export default function ListNews() {
  return (
    <div>
      <div className="w-full text-gray-900 bg-white  rounded-lg py-4">
        <Single />
        <Single />
        <Single />
        <Single />
      </div>
    </div>
  )
}
