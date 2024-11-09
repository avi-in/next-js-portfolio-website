import React from 'react'
import HeroContent from '../sub/HeroContent';

const  Hero=()=> {
  return (
    <div className='relative flex flex-col h-full w-full' id="home">
        <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video 
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
            />
        </div>

      </div>
        <HeroContent/>
    </div>
  )
}

export default Hero;