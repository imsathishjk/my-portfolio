import React from 'react';
import { ReactTyped } from 'react-typed';
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { RiMedal2Fill } from "react-icons/ri";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import { motion } from 'motion/react';


const Hero = () => {

    const mobileNum = '+91 7558110634'

    const handleCopyPhoneNumber = () => {
        navigator.clipboard.writeText(mobileNum)
    }


    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={1}
            className='flex flex-col gap-8 py-20 max-w-3xl mx-auto' id='hero' >
            {/* Text Div */}
            <div className='my-3 md:my-8'>
                <h1 className='select-none text-center max-lg:text-2xl font-bold  xl:text-3xl 2xl:text-4xl text-nowrap'>Hi, I'm <ReactTyped className='bg-clip-text text-transparent bg-gradient-to-br from-green-500 via-green-400 to-white' strings={['Sathish', 'FullStack Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /></h1>
                <p className='select-none text-md sm:text-lg md:text-xl text-center font-medium mt-3 tracking-wider'>I love building dynamic, responsive, and user-focused web applications
                    using MongoDB, Express, React, and Node.js.</p>
            </div>
            {/* Image div */}
            <div className='flex justify-between items-center'>
                <div className='octagon flex justify-center items-center bg-white text-green-600'>
                    <SiMongodb className='text-3xl md:text-4xl lg:text-5xl ' />
                </div>
                <div className='octagon flex justify-center items-center bg-white text-green-600'>
                    <SiExpress className='text-3xl md:text-4xl lg:text-5xl font-extrabold ' />
                </div>
                <div className='octagon flex justify-center items-center bg-white text-green-600'>
                    <RiReactjsLine className='text-3xl md:text-4xl lg:text-5xl ' />
                </div>
                <div className='octagon flex justify-center items-center bg-white text-green-600'>
                    <RiNodejsLine className='text-3xl md:text-4xl lg:text-5xl ' />
                </div>
            </div>
            <div className='flex items-center gap-12 justify-center mt-12'>
                <button className='hidden md:flex bg-green-400 text-black font-medium text-lg rounded-md cursor-pointer p-2 px-4 items-center gap-2'>Explore Projects <RiMedal2Fill /> </button>
                <a onClick={handleCopyPhoneNumber} href={`tel:${mobileNum}`} className='decoration-none text-white font-medium text-md md:text-lg border-2 border-green-600 rounded-md cursor-pointer p-2 px-4 flex items-center gap-2'>Hire Now <MdOutlineCallMissedOutgoing /> </a>
            </div>
        </motion.div>
    )
}

export default Hero
