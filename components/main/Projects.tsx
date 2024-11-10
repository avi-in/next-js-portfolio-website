"use client"
import React from 'react'
import ProjectCards from '../sub/ProjectCards'
import { projectDetails } from '@/constant'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12" id="projects">
      <h1 className="pb-4 text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Personal Projects </h1>
      <div className="w-full mt-1 h-full flex flex-col md:flex-row gap-10 px-6 sm:px-10">
        {
          projectDetails.map((pDetails) => (
            <ProjectCards
              key={pDetails.imageId}
              id={pDetails.imageId}
              src={pDetails.imageSrc}
              title={pDetails.imageTitle}
              description={pDetails.imageDescription} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects