"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { GithubIcon, LinkedInIcon } from './Icons'
import { motion } from "framer-motion"
import { ModeToggle } from './mode-toggle'

const Navbar = () => {

    const[open, setOpen] = useState(false)
    const pathname = usePathname()

    const handleClick = () => {
      setOpen(!open)
    }
    const links = [
        {
            id: 1,
            title: 'Home',
            path: '/'
        },
        {
            id: 2,
            title: 'About',
            path: '/about'
        },
        {
            id: 3,
            title: 'Projects',
            path: '/project'
        }
    ]
  return (
    <div className='w-full h-full md:px-32 px-8 flex justify-center items-center relative'>
      <button onClick={() => handleClick()} className='flex md:hidden flex-col gap-1 justify-center items-center'>
        <span className={`w-6 h-0.5 bg-black dark:bg-light ease-in duration-200 ${open ? 'rotate-45 translate-y-0.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black dark:bg-light ease-in duration-200 ${open ? 'hidden' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black dark:bg-light ease-in duration-200 ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
      </button>
      <div className='w-full h-full flex items-center justify-evenly'>
        <nav className='md:flex hidden gap-6 w-1/3'>
          {links.map(({id,title, path}) => (
              <Link className='relative group' key={id} href={path}>
                  {title}
                  <span className={`absolute left-0 bottom-0.5 inline-block bg-black dark:bg-light h-[2px] ${pathname === path ? 'w-full' : 'w-0'} group-hover:w-full duration-300`}>&nbsp;</span>
              </Link> 
          ))}
        </nav>
        <div className='w-1/3 flex items-center justify-center'>
          <Link href="/" className='w-16 h-16 bg-black dark:text-light text-light rounded-full flex items-center justify-center font-bold text-xl border-2 border-white'>AV</Link>
        </div>

        <nav className='w-1/3 md:flex hidden justify-center items-center gap-6'>
          <Link className='w-8 h-8' href="/">
            <GithubIcon/>
          </Link>
          {/* <Link className='w-8 h-8' href="/">
            <LinkedInIcon/>
          </Link> */}
          <ModeToggle/>
        </nav>
      </div>

      {open && 
        <motion.div initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}} className='w-[70vw] dark:bg-light/80 z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-black/90 opacity-80 h-3/4 rounded-lg backdrop-blur-xl'>
          <nav className=' h-full flex flex-col items-center justify-center gap-4'>
            {links.map(({id, title, path}) => (
              <Link onClick={() => handleClick()} className='text-light dark:text-black group relative' key={id} href={path}>
                {title}
                <span className={`absolute h-[2px] group-hover:w-full ease-in duration-200 bg-light dark:bg-black top-5 left-0 ${pathname === path ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}
            <nav className='w-22 gap-4 flex'>
              <Link className='w-10 h-10' href="/">
                <GithubIcon className={`bg-light dark:bg-black`}/>
              </Link>
              <Link className='w-10 h-10' href="/">
                <LinkedInIcon/>
              </Link>
              <ModeToggle/>
            </nav>
          </nav>

          
        </motion.div>
      }
      
      
      
    </div>
  )
}

export default Navbar
