import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-xl tracking-widest text-[#3a6c62] uppercase'>About</p>
                <h2 className='py-4'>Who I Am </h2>
                <p className='py-2 text-gray-600'>// I am a full stack developer with a passion for creating fully functional websites and applications and a background in Dentistry.</p>
                <p className='py-2 text-gray-600'>
                I pursued a career in software development to tap into my creativity and continuously grow my skills. To further my knowledge, I completed a coding bootcamp at Coding Dojo and have since worked on a number of full-stack projects. 
                </p>
                <p className='py-2 text-gray-600'>In my free time, I enjoy staying active through various physical activities such as lifting weights, running, and dancing. I am a Hip Hop freestyle dancer and regularly train with my crew, competing in dance battles across Chicago.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="/assets/about.png" alt="Breakdance Picture" />
            </div>
        </div>
    </div>
  )
}

export default About