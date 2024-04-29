"use client"

import TransitionEffect from '@app/_components/TransitionEffect'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <TransitionEffect/>
      <div className='w-full h-full px-20 flex flex-col items-center justify-center'>
        <h1 className='md:text-6xl mt-8 md:mt-20 text-3xl md:mb-2 font-semibold'>Quote Goes Here</h1>
        <div className='flex w-full flex-col md:flex-row h-full justify-center items-center gap-6'>
          <div className='md:w-1/4 w-1/2 mt-4 border-2 border-black dark:border-light rounded-2xl relative'>
            <Image className='w-full h-auto rounded-2xl' src="/about.jpg" width={100} height={100}/>
          </div>
         
          
          <div className='md:w-1/2'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste libero molestiae cum dignissimos modi, fugit, tenetur qui non corporis repellat reiciendis quas debitis, sapiente expedita ullam. Vitae, adipisci nulla! Saepe.</p>
            <p className='mt-3 md:mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum recusandae similique quia necessitatibus reiciendis tenetur cupiditate repellendus, sint assumenda hic, quibusdam odio quis asperiores accusantium. Repellendus doloribus temporibus culpa.</p>
          </div>
          
        </div>  
      </div>
    </>
  )
}

export default About
