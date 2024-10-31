"use client"
import { useState } from 'react';
import { social } from '@/constant';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState('#');

  const handleMenuClickActiveStatus = (activePath:string) => {
    setIsActive(activePath);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[20px]">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <Image 
            src="/logo.png"
            alt="Logo Image"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            AVI
          </span>
        </a>
        <div className="hidden md:flex w-[600px] h-full flex-row items-center justify-between md:mr-20"> 
          <div className="flex items-center text-white justify-between w-full h-auto border border-[#6929ea] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full">
            <a href="#home" onClick={() => handleMenuClickActiveStatus('#home')} className={`${isActive==='#home' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' : ''} cursor-pointer`}>.home( )</a> 
            <a href="#about-me" onClick={() => handleMenuClickActiveStatus('#about-me')} className={`${isActive==='#about-me' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' : ''} cursor-pointer`}>.aboutMe( )</a>
            <a href="#skills"  onClick={() => handleMenuClickActiveStatus('#skills')} className={`${isActive==='#skills' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' : ''} cursor-pointer`}>.skills( )</a> 
            <a href="#projects"  onClick={() => handleMenuClickActiveStatus('#projects')} className={`${isActive==='#projects' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' : ''} cursor-pointer`}>.projects( )</a>
            <a href="#achievements"  onClick={() => handleMenuClickActiveStatus('#achievements')} className={`${isActive==='#achievements' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' : ''} cursor-pointer`}>.achievements( )</a>
            <a href="#testimonial"  onClick={() => handleMenuClickActiveStatus('#testimonial')} className={`${isActive==='#testimonial' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' : ''} cursor-pointer`}>.voice( )</a>
           
          </div>
        </div>
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            Menu
          </button>
        </div>
        <div className="flex flex-row gap-5">
          {social.map((smedia) => (
            <Image
              key={smedia.name}
              alt={smedia.name}
              src={smedia.src}
              width={24}
              height={24}
              className='cursor-pointer rounded-full bg-transparent shadow-neon-hover'
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#2A0E61] p-4 absolute top-[65px] left-0 w-full">
          <a href="#home" className="cursor-pointer py-2 text-gray-300" onClick={handleMenuClick}>home( )</a> 
          <a href="#about-me" className="cursor-pointer py-2 text-gray-300" onClick={handleMenuClick}>aboutMe( )</a> 
          <a href="#skills" className="cursor-pointer py-2 text-gray-300" onClick={handleMenuClick}>skills( )</a> 
          <a href="#projects" className="cursor-pointer py-2 text-gray-300" onClick={handleMenuClick}>projects( )</a>
          <a href="#achievements" className="cursor-pointer py-2 text-gray-300" onClick={handleMenuClick}>achievements( )</a>
          <a href="#testimonial" className="cursor-pointer py-2 text-gray-300" onClick={handleMenuClick}>testimonial( )</a> 
        </div>
      )}
    </div>
  );
};

export default Navbar;