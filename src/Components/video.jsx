import React from 'react'
import video from '../assets/WhatsApp Video 2025-12-15 at 3.20.22 PM (1).mp4'

function Video() {
  return (
    <div className="w-full">
      <video
        src={video}
        autoPlay
        muted
        loop
        controls
        className="w-full h-full object-cover rounded-lg shadow"
      />
        </div>

  )
}

export default Video