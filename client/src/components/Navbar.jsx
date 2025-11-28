import React, { useState } from 'react';
import { RiCloseFill, RiHomeSmile2Fill } from "react-icons/ri";
import { RiMedal2Fill } from "react-icons/ri";
import { FaInfo } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { GiBrokenHeartZone } from "react-icons/gi";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className='flex justify-between items-center fixed top-0 left-0 bg-gradient-to-br from-black to-green-950
        right-0 p-4 md:px-12 lg:px-16 xl:px-20 2xl:px-24 z-10 transition-all duration-700 ease-in-out'>
            <h1 className='font-bold text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-green-600 '><a href="#hero" className='inline-flex'>Sathish <GiBrokenHeartZone className='text-green-500 text-[18px]' /></a></h1>
            <ul className='hidden md:inline-flex gap-12 lg:gap-20'>
                <li className='text-md lg:text-xl font-medium cursor-pointer'><a className='flex items-center gap-2' href="#hero"><RiHomeSmile2Fill className='text-green-400' />Home</a> </li>
                <li className='text-md lg:text-xl font-medium cursor-pointer'><a className='flex items-center gap-2' href="#project"><RiMedal2Fill className='text-green-400' />Projects</a> </li>
                <li className='text-md lg:text-xl font-medium cursor-pointer'><a className='flex items-center gap-2' href="#about"><FaInfo className='text-green-400' />About</a></li>
                <li className='text-md lg:text-xl font-medium cursor-pointer'><a className='flex items-center gap-2' href="#contact"><IoIosPaperPlane className='text-green-400' />Contact</a> </li>
            </ul>
            <ul className={`transition-all duration-300 ease-in-out ${showSidebar ? 'w-3/4' : 'w-0'} flex flex-col items-start gap-12 md:hidden h-screen fixed top-0 -right-20 pt-12 z-20 bg-gradient-to-br from-black to-green-950 px-3`}>
                <li className='max-sm:text-lg font-medium cursor-pointer flex items-center gap-3'><RiHomeSmile2Fill className='text-green-400' /> <a onClick={() => setShowSidebar(false)} href="#hero">Home</a> </li>
                <li className='max-sm:text-lg font-medium cursor-pointer flex items-center gap-3'><RiMedal2Fill className='text-green-400' /> <a onClick={() => setShowSidebar(false)} href="#project">Projects</a> </li>
                <li className='max-sm:text-lg font-medium cursor-pointer flex items-center gap-3'><FaInfo className='text-green-400' /> <a onClick={() => setShowSidebar(false)} href="#about">About</a></li>
                <li className='max-sm:text-lg font-medium cursor-pointer flex items-center gap-3'><IoIosPaperPlane className='text-green-400' /> <a onClick={() => setShowSidebar(false)} href="#contact">Contact</a> </li>
            </ul> 
        
            {showSidebar ? <RiCloseFill onClick={() => setShowSidebar(false)} className='block md:hidden text-2xl font-medium text-green-400 z-30 cursor-pointer' /> : <RiMenu3Fill onClick={() => setShowSidebar(true)} className='block md:hidden text-2xl font-medium text-green-400 cursor-pointer' />}
        </div>
    )
}

export default Navbar;
