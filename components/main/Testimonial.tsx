"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '@/constant';

const Testimonial = () => {
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };
      return (
        <div className="bg-black py-16" id="testimonial">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">Testimonials</h2>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center p-6 rounded-lg border border-[#6929ea] z-[1000]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    className="h-16 w-16 rounded-full mx-auto"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={200}
                    height={200}
                  />
                  <h3 className="mt-4 text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">{testimonial.name}</h3>
                  <p className="mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">{testimonial.role}</p>
                  <p className="mx-auto max-w-lg mt-4 text-center text-gray-300 shadow-purple-500/50">{testimonial.content}</p>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      );
    };
    
    export default Testimonial;