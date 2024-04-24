"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { GithubIcon, LinkedInIcon } from './Icons'

const Navbar = () => {

    const[open, setOpen] = useState(false)
    const pathname = usePathname()

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
    <div className='w-full h-full md:px-32 flex items-center justify-evenly'>
      <nav className='flex gap-6 w-1/3'>
        {links.map(({id,title, path}) => (
            <Link className='relative group' key={id} href={path}>
                {title}
                <span className={`absolute left-0 bottom-0.5 inline-block bg-black h-[2px] ${pathname === path ? 'w-full' : 'w-0'} group-hover:w-full duration-300`}>&nbsp;</span>
            </Link> 
        ))}
      </nav>

      <div className='w-1/3 flex items-center justify-center'>
        <Link href="/" className='w-16 h-16 text-white bg-black rounded-full flex items-center justify-center font-bold text-xl border-2 border-white'>AV</Link>
      </div>

      <div className='w-1/3 flex justify-center items-center gap-6'>
        <GithubIcon className='w-8 h-8'/>
        {/* <LinkedInIcon className='w-8 h-8'/> */}
      </div>
    </div>
  )
}

export default Navbar