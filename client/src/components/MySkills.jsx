import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAxios } from "react-icons/si";

const MySkills = () => {


    return (
        <div className="py-20">
            <div className='my-12'>
                <h1 className='select-none text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center my-3
            bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-green-600
            '>Skills That Shape My Code</h1>
                <p className='select-none text-sm  md:text-md lg:text-lg font-medium text-center text-wrap max-w-3xl mx-auto tracking-wide'>These are the skills that help me build complete web solutions.</p>
            </div>
            <div className='overflow-hidden max-w-2xl mx-auto rounded-2xl'>
                <div className='flex gap-3 md:gap-16 justify-center infinite-scroll whitespace-nowrap'>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><ImHtmlFive className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><SiCss3 className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><RiTailwindCssFill className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><FaSquareJs className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><FaReact className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><SiExpress className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><FaNode className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><SiMongodb className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><IoLogoFirebase className='text-2xl md:text-4xl lg:text-7xl' /></div>
                    <div className='octagon flex items-center justify-center bg-white text-green-700 p-4 font-extrabold'><SiAxios className='text-2xl md:text-4xl lg:text-7xl' /></div>

                </div>
            </div>
        </div>
    )
}

export default MySkills
