import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-{1240px} w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#3a6c62]'>Michael</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Full-Stack Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am a skilled full-stack developer with a passion for building visually stunning and user-friendly websites. 
                While my primary expertise is in front-end development, I am constantly expanding my knowledge of back-end technologies to deliver seamless and efficient user experiences. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#015055]'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#015055]'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#015055]'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#015055]'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main