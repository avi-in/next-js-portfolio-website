"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import Image from 'next/image';
import { achievements } from "@/constant";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Achievements = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-br from-[#110126] to-[rgba(34,4,73,0.01)] backdrop-blur-[12px] text-gray-300" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative w-full flex justify-center mb-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromTop}
            className="text-[40px] font-medium text-center text-gray-200"
            aria-label="Performance and Security"
          >
            {/* Certifications
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              &{" "}
            </span>
            Achievements */}
             <h1 className=" text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
             Certifications & Achievements</h1> 
          </motion.div>
        </div>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          centerMode={true}
          centerSlidePercentage={33.33} // Increase width to show 3.33 cards at a time
          className="carousel-container"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-transparent p-2 rounded-lg border border-[#2A0E61] mx-1 flex flex-col shadow-neon hover:shadow-neon-hover"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              aria-label={`Achievement ${index + 1}`}
              style={{ width: '90%' }} // Adjust width to fit 3.33 cards
            >
              <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {achievement.title}
              </h3>
              <p className="text-xs mb-2 text-gray-400">{achievement.date}</p>
              <p className="text-sm text-gray-200 flex-grow">{achievement.description}</p>
              <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <Image 
                  src={achievement.image} 
                  alt={`Image for ${achievement.title}`} 
                  layout="fill" 
                  objectFit="cover" 
                  loading="lazy" // Lazy loading for performance
                />
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default React.memo(Achievements);