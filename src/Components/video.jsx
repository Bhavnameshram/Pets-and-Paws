import React from 'react'
import video from '../assets/WhatsApp Video 2025-12-15 at 3.20.22 PM (1).mp4'

function Video() {
  return (
    <div className='bg-amber-200'>
    <div className="w-full " >
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-{650} h-{350px} ml-95 justify-center items-center rounded-lg mb-10" />
        </div>
        </div>

  )
}

export default Video