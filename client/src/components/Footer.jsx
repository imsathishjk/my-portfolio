import React, { useState } from 'react';
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiLinksLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const myGmail = 'sksathish0715@gmail.com';

  const handleCopyGmail = async () => {
    try {
      await navigator.clipboard.writeText(myGmail);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='mt-28 flex flex-wrap max-md:flex-col max-md:gap-2 justify-between items-center md:text-lg'>

      <ul className='flex items-center gap-8 justify-baseline font-medium relative'>
        {copied ? <p className='absolute bottom-12 max-sm:left-0 md:left-32 text-green-300'>Email Copied! 📋 </p> : ''}
        <p className='hidden md:flex gap-1 items-center'><span><RiLinksLine className='text-green-400' /></span> Links:</p>
        <li className='flex items-center gap-2 cursor-pointer' onClick={handleCopyGmail}><IoMail className='text-green-400' /> Gmail</li>
        <li><a className='flex items-center gap-2'><FaGithub className='text-green-400' /> Github</a></li>
        <li><a className='flex items-center gap-2'  href="https://www.linkedin.com/in/sathish-jk" target='_blank'><FaLinkedin className='text-green-400' /> LinkedIn</a></li>
      </ul>
      <div className='flex flex-col items-start md:flex-row gap-5 mt-5'>
        <p className='select-none flex items-center gap-2'><ImLocation2 className='text-green-400' /> Location: Chennai </p>
      </div>
    </div>
  )
}

export default Footer
