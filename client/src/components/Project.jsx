import React from 'react';
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";



const Project = ({ title, skills, image, liveLink, githubLink }) => {
    return (
        <div className='max-w-lg rounded-lg bg-gradient-to-br from-black to-green-950 transition-all ease-in-out duration-300 hover:transform hover:scale-105 cursor-pointer'>
            <div>
                <img src={image} alt={title} className='rounded-lg w-full h-full' />
            </div>
            <div className='flex justify-center items-center text-2xl gap-5 mt-3'>
                {
                    skills.map((item, i) => {
                        return <div key={i} className='w-8 h-8 bg-white flex justify-center items-center rounded-md'>
                            {item.includes('HTML') ? <FaHtml5 className='text-orange-600' /> : item.includes('CSS') ? <FaCss3 className='text-blue-400' /> :
                                item.includes('Reactjs') ? <FaReact className='text-sky-400' /> : item.includes('Javascript') ? <FaJs className='text-yellow-500' />
                                    : item.includes('Tailwind') ? <SiTailwindcss className='text-sky-400' /> : item.includes('Expressjs') ? <SiExpress className='text-green-600' /> : item.includes('MongoDB') ? <SiMongodb className='text-green-500' /> : item.includes('API') ? <SiAxios className='text-violet-500' /> : item.includes('Postgresql') ? < BiLogoPostgresql className='text-[#336691]' /> : <FaNodeJs className='text-green-500' />}
                        </div>
                    })
                }
            </div>
            <div className='flex item-center justify-between p-4'>
                <button className='flex items-center gap-1 font-normal text-sm sm:text-[14px] md:text-[16px] cursor-pointer p-2 px-4 bg-green-950 text-white transition-all duration-500 ease-in-out hover:shadow hover:shadow-green-700 rounded-lg'><a href={liveLink} target='_blank'>Live Demo </a> <BiLinkExternal className='text-green-400 max-sm:text-md md:text-xl' /> </button>
                <button className='flex items-center gap-1 font-normal text-sm sm:text-[14px] md:text-[16px] cursor-pointer p-2 px-4 bg-green-950 text-white transition-all duration-500 ease-in-out hover:shadow hover:shadow-green-700 rounded-lg'><a href={githubLink} target='_blank'>Github</a>  <BsGithub className='text-green-400 max-sm:text-md md:text-xl' /> </button>
            </div>
        </div>
    )
}

export default Project
