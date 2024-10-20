"use client"
import React from 'react'
import {motion, px} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props{
    src:string;
    width:number;
    height:number;
    index:number;
    competency:number
}

const SkillDataProvider = ({src,width,height,index,competency}:Props) => {
    const {ref, inView} =useInView({
        triggerOnce:true
    })
    const imageVariants={
        hidden:{opacity:0},
        visible:{opacity:1}
    }
    const animationDelay=0.3
    const strokeDashoffset =100-(106.76-(106.76*competency)/100);
    console.log(strokeDashoffset+"  "+competency)

  return (
    // <motion.div
    // ref={ref}
    // initial="hidden"
    // variants={imageVariants}
    // animate={inView ? "visible" : "hidden"}
    // custom={index}
    // transition={{delay:index*animationDelay}}
    // className='rounded-full border-2 p-5 overflow-hidden w-fit h-fit border-[purple]'
    // >
    //     <Image 
    //     src={src}
    //     width={width+15}
    //     height={height+15}
    //     alt='Skill Images'
    //     />

    // </motion.div>

    <motion.div 
    ref={ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView ? "visible" : "hidden"}
    custom={index}
    transition={{delay:index*animationDelay}}
    className="relative p-5 overflow-hidden w-fit h-fit">
      <Image
        src={src}
        width={width+15}
        height={height+15}
        alt="Skill Icon"
        className="rounded-full"
      />
      {/* Circular progress bar */}
      <svg
        viewBox="0 0 36 36"
        className="absolute top-0 left-0 w-full h-full"
      >
        <circle
          cx="18"
          cy="18"
          r="17"
          fill="transparent"
          stroke="purple"
          strokeWidth="2"
        />
        <circle
        className='progress-ring__circle'
          cx="18"
          cy="18"
          r="17"
          fill="transparent"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="106.76"//"94.25" // Full circumference
          strokeDashoffset={`${strokeDashoffset}px`}// Adjust based on competency
        />
      </svg>
      {/* Percentage value */}
      {/* <p className="text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[black] font-semibold">
        {competency}%
      </p> */}
    </motion.div>
  );
};

export default SkillDataProvider