import React from 'react'
import video from '../assets/WhatsApp Video 2025-12-15 at 3.20.22 PM (1).mp4'

function Video() {
  return (
    <div className='bg-[#f5cf7b] '>
    <div className="w-full flex " >
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-{650} h-{350px} ml-106 flex rounded-lg " />
        </div>
        </div>

  )
}

export default Video