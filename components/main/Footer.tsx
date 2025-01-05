import React from 'react';
import {
    FaYoutube,
    FaGithub,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-neon-text shadow-lg p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-neon-purple p-1 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-neon rounded-neon">Community</div>
                    <p className="z-50 flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaYoutube className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <a target='_blank' href='https://youtube.com' rel="noopener noreferrer" className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>YouTube</a>
                    </p>
                    <p className="z-50 flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaGithub className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <a target='_blank' href='https://github.com/avi-in' rel="noopener noreferrer" className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Github</a>
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-neon-purple shadow-neon rounded-neon p-1 bg-gradient-to-r from-purple-500 to-cyan-500">Social Media</div>
                    <p className="z-50 flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaInstagram className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <a target='_blank' href='https://instagram.com' rel="noopener noreferrer" className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Instagram</a>
                    </p>
                    <p className="z-50 flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaLinkedin className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <a target='_blank' href='https://linkedin.com/in/vk-mishra' rel="noopener noreferrer" className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>LinkedIn</a>
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-neon-purplep-1 p-1 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-neon rounded-neon">Contact</div>
                    <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>vikashconnecting@gmail.com</span>
                    </p>
                    <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Mob:+91-XXXXXXXXXX</span>
                    </p>
                </div>

            </div>

            <div className=" mt-1 mb-[20px] text-[15px] text-center">
                © AVI.in {new Date().getFullYear()}. All rights reserved
            </div>
        </div>
    </div>
  );
}

export default Footer;
