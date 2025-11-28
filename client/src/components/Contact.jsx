import React, { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const handleSendingEmail = (e) => {
        e.preventDefault();
        if (!name || !email || !text) {
            return setSuccessMsg('Invalid input !')
        } else {
            setSuccessMsg(`Thanks for sharing ❤️`);
            setName('');
            setEmail('');
            setText('');
            setTimeout(() => {
                setSuccessMsg('');
            }, 2000);
        }
    }

    return (
        <div className='py-20' id='contact'>
            <div className='mb-8'>
                <h1 className='select-none text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center my-3
            bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-green-600
            '>Let’s Build Something Great Together</h1>
                <p className='select-none text-sm  md:text-md lg:text-lg font-medium text-center text-wrap max-w-3xl mx-auto tracking-wide'>I’m always excited to collaborate and learn.</p>
            </div>
            <form onSubmit={handleSendingEmail} className='max-w-xl mx-auto flex flex-col gap-12'>
                <div className='flex flex-col gap-3'> 
                    <label className='text-md md:text-lg font-medium select-none'>Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder='Enter your name' className='px-2 py-4 rounded-md outline-none border border-green-400' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-md md:text-lg font-medium select-none'>Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required type="text" placeholder='Enter your email' className='px-2 py-4 rounded-md outline-none border border-green-400' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-md md:text-lg font-medium select-none'>Enter your thoughts:</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} required type="textarea" placeholder='Enter your text' className='px-2 py-4 rounded-md outline-none border border-green-400' />
                </div>
                {successMsg ? <span className={`bg-black/35 text-green-500 w-fit my-0 mx-auto py-1.5 px-4 rounded-md font-medium text-[16px]
                    ${successMsg ? 'opacity-100' : 'opacity-0'}
                    `}>{successMsg}</span> : ''}
                <button className='cursor-pointer p-2 px-4 rounded-md bg-green-400 text-black font-medium text-md md:text-lg' type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Contact;
