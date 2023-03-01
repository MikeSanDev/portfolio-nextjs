import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {useRouter} from 'next/router'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#d4d1cf');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  // changes nav button color on individual project pages
  useEffect(() => { 
    if (
      router.asPath === '/kinetic' ||
      router.asPath === '/chamber' ||
      router.asPath === '/whiteElephant' ||
      router.asPath === '/spotify' 
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#d4d1cf');
      setLinkColor('#1f2937');
    }
  },[router])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  },[])

  return (
    <div 
    style={{backgroundColor: `${navBg}`}}
    className={
      shadow 
      ? 'fixed w-full h-20 shadow-xl z-[100]' 
      : 'fixed w-full h-20 z-[100]'
      }>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'> 
            <Link href='/'>
            <Image 
            src="/../public/assets/navLogo.png" 
            alt="/" 
            width='100' 
            height='40'/>
            </Link>
            <div>
            <ul style={{color: `${linkColor}`}} className='hidden md:flex nav-items'>
              <Link href='/#home'>
                <li className='ml-10 text-sm uppercase'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li className='ml-10 text-sm uppercase'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li className='ml-10 text-sm uppercase'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li className='ml-10 text-sm uppercase'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li className='ml-10 text-sm uppercase'>
                  Contact
                </li>
              </Link>
            </ul>
              <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25}/>
              </div>
            </div>
        </div>


        {/* popup nav */}
        {/* Nav open/close logic */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''    }>
          <div className={
            nav ?  'fixed left-0 top 0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e7e7e7] p-10 ease-in duration-500' 
            : 'fixed left-[-120%] top 0  p-10 ease-in duration-500'}>
              <div>
                <div className='flex w-full items-center justify-between'>
                  <Image src='/../public/assets/navLogo.png' alt='/' width='87' height='35'/>
                  <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose />
                  </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                  <p className='w-[85%] md:w-[90%] py-4 text-[#100b0e]'>Let's create something that will change the world.</p>
                </div>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                <Link href='/#home'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm nav-items2'>
                    Home
                  </li>
                </Link>
                <Link href='/#about'>
                  <li onClick={() => setNav(false)}  className='py-4 text-sm nav-items2'>
                    About
                  </li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm nav-items2'>
                    Skills 
                  </li>
                </Link>
                <Link href='/#projects'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm nav-items2'>
                    Projects
                  </li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm nav-items2'>
                    Contact
                  </li>
                </Link>
                </ul>
                <div className='pt-40'>
                  <p className='uppercase tracking-widest text-[#015055]'>Let's Connect</p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                    hover:scale-110 ease-in duration-300 text-[#3a6c62]'>
                      <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                    hover:scale-110 ease-in duration-300 text-[#3a6c62]'>
                      <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                    hover:scale-110 ease-in duration-300 text-[#3a6c62]'>
                      <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                    hover:scale-110 ease-in duration-300 text-[#3a6c62]'>
                      <BsFillPersonLinesFill />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar