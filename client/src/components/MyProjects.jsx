import React from 'react';
import data from '../assets/data.js';
import Project from './Project.jsx';

const MyProjects = () => {

    return (
        <div id='project' className='py-20'>
            <h1 className='select-none max-md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center my-3
            bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-green-600
            '>Things I’ve Built So Far</h1>
            <p className='select-none text-sm  md:text-md lg:text-lg font-medium text-center text-wrap max-w-3xl mx-auto tracking-wide'>Each reflects my passion for creating clean, efficient, and scalable web experiences using the MERN Stack.</p>


            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-16 place-items-center'>
                {
                    data.map((item, index) => {
                        return (
                            <Project key={index}  title={item.title} skills={item.skills} image={item.image} liveLink={item.liveLink} githubLink={item.githubLink} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default MyProjects
