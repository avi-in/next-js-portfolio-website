import React from 'react';
import {
    FaYoutube,
    FaDiscord,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-neon-text shadow-lg p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-neon-purple p-1 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-neon rounded-neon">Community</div>
                    <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaYoutube className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>YouTube</span>
                    </p>
                    {/* <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaDiscord className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Discord</span>
                    </p> */}
                    <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaGithub className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Github</span>
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-neon-purple shadow-neon rounded-neon p-1 bg-gradient-to-r from-purple-500 to-cyan-500">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaInstagram className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Instagram</span>
                    </p>
                    {/* <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaTwitter className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Twitter</span>
                    </p> */}
                    <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <FaLinkedin className="cursor-pointer" style={{ cursor: 'pointer' }} />
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>LinkedIn</span>
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] text-neon-purplep-1 p-1 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-neon rounded-neon">Contact</div>
                    <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>thh@gmail.com</span>
                    </p>
                    <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Ph:06757-2456777</span>
                    </p>
                    {/* <p className="flex flex-row items-center my-[15px] hover:text-purple-500">
                        <span className="text-[15px] ml-[6px] cursor-pointer" style={{ cursor: 'pointer' }}>Instagram</span>
                    </p> */}
                </div>

            </div>

            <div className=" mt-1 mb-[20px] text-[15px] text-center">
                © AVI.in 2024. All rights reserved
            </div>
        </div>
    </div>
  );
}

export default Footer;
