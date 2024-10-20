"use client"
import React from 'react'
import ProjectCards from '../sub/ProjectCards'

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12" id="projects">
       <h1 className="pb-4 text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Projects </h1> 
        <div className="w-full mt-1 h-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCards
            src="/NextWebsite.png"
            title="Modern Next js portfolio"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et aliquam impedit aut tenetur mollitia pariatur fugit. Quo perferendis magni"/>
           
           <ProjectCards
            src="/CardImage.png"
            title="Interactive Website Card"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et aliquam impedit aut tenetur mollitia pariatur fugit. Quo perferendis magni"/>
           
           <ProjectCards
            src="/SpaceWebsite.png"
            title="Space themed Website"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et aliquam impedit aut tenetur mollitia pariatur fugit. Quo perferendis magni"/>
           
        </div>
    </div>
  )
}

export default Projects