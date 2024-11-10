"use client"
import Image from 'next/image'
import React from 'react'

interface Props{
    id:number
    src:string,
    title:string,
    description:string
}

const ProjectCards = ({id,src,title,description}:Props) => {
  return (
    <div key={id} className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
               <Image 
                src={src}
                alt={title}
                width={1000}
                height={1000}
                key={description}
                className='w-full object-contain' />
                <div className="relative p-4">
                 <h1 className="text-xl sm:text-2xl font-semibold text-white">{title}</h1>
                 <p className="mt-2 text-gray-300">{description}</p>
                </div>
    </div>

  )
}

export default ProjectCards