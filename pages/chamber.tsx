import Image from 'next/legacy/image'
import React from 'react'
import chamberImg from '../public/assets/projects/chamber.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const chamber = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
          <Image className='absolute z-1' layout='fill'  objectFit='cover' src={chamberImg} alt='/' />
          <div className='absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2'>
            <h2 className='py=2 pl-3'>Chamber</h2>
            <p className='pb-3 pl-3'>React JS  </p>
          </div>
        </div>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <h3 className='text-[#3a6c62]'>Project</h3>
            <h2>Overview</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo a error vero? Necessitatibus nam culpa esse ab autem! Dolorum tenetur atque eos beatae perferendis expedita ex quaerat maiores minus quam!</p>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>
        <Link href='/#projects'><p className='underline cursor-pointer text-[#3a6c62] py-10'>Back To Projects</p></Link>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies Used</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> React JS</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Framer Motion</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Axios</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Netlify</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> HTML</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> CSS</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Javascript</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Git</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Github</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default chamber