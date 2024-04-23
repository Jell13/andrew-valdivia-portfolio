"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

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
    <div className='w-full h-full md:px-32 flex items-center'>
      <nav className='flex gap-6 w-1/3'>
        {links.map(({id,title, path}) => (
            <Link className='relative group' key={id} href={path}>
                {title}
                <span className={`absolute left-0 bottom-0.5 inline-block bg-black h-[2px] ${pathname === path ? 'w-full' : 'w-0'} group-hover:w-full duration-300`}>&nbsp;</span>
            </Link> 
        ))}
      </nav>
    </div>
  )
}

export default Navbar
