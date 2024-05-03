import React from 'react'
import PostTitleBlack from '../PostTitleBlack'
import Card1Black from '../Card1Black'
import Hcard from '../Hcards/hcard'

export default function Video() {
  return (
    <div className='grid md:grid-cols-3 xs:grid-cols-1 md:gap-5 xs:gap-0 py-14'>
        <div >
            <PostTitleBlack title="Video 01" href={'#'}  />
            <Card1Black />
            <div className='space-y-5'>
                <Hcard themeBlack={true} />
                <Hcard themeBlack={true} />
            </div>
        </div>

        <div>
            <PostTitleBlack title="Video 02" href={'#'}  />
            <Card1Black />
            <div className='space-y-5'>
                <Hcard themeBlack={true} />
                <Hcard themeBlack={true} />
            </div>
        </div>

        <div>
            <PostTitleBlack title="Video 03" href={'#'}  />
            <Card1Black />
            <div className='space-y-5'>
                <Hcard themeBlack={true} />
                <Hcard themeBlack={true} />
            </div>
        </div>
        
    </div>

  )
}
