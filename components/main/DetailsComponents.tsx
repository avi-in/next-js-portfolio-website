"use client"
import React from 'react';
import DetailsSection from '../sub/DetailsSection';
import { jsonObject } from '@/constant';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';

const DetailsComponents = () => {
  const myObject = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    },
    hobbies: ["reading", "traveling", "coding"]
  };

  {/*py-20 */}

  return (
    <motion.div
    initial="hidden"
    animate="visible" className="py-10 min-h-screen md:px-16 bg-gradient-to-br from-[#110126] to-[rgba(34,4,73,0.01)] backdrop-blur-[12px] dark: text-white flex flex-col md:flex-row" id="about-me">
      <motion.div className="flex-1 md:mt-24 p-4" variants={slideInFromLeft(0.8)}>
        <h1 className="text-3xl font-bold mb-4 text-purple-600">Welcome to My Portfolio</h1>
        <p className="mb-4">
          Hi, I am a web developer with experience in creating visually appealing and responsive websites. I specialize in Java, JavaScript, and full-stack development.
        </p>
        <p>
          Here you can find my projects, skills, and contact information. Feel free to explore and reach out if you have any questions or opportunities.
        </p>
      </motion.div>
      <motion.div className="flex-1 p-6 mt-1"  variants={slideInFromTop}>
        <DetailsSection data={jsonObject} />
      </motion.div>
    </motion.div>
  );
};


export default DetailsComponents;
