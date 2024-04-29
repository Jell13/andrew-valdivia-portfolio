"use client"

import TransitionEffect from '@app/_components/TransitionEffect'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <TransitionEffect/>
      <div className='w-full h-full px-20 flex flex-col items-center justify-center'>
         <h1 className='md:text-6xl mt-24 md:mt-8 text-3xl md:mb-28 font-semibold'>Quote Goes Here</h1>
        <div className='flex w-full flex-col h-full justify-center items-center gap-6'>
          <div className='md:w-1/4 w-1/2 border-2 border-black dark:border-light rounded-2xl relative'>
            <Image className='w-full h-auto rounded-2xl' src="/about.jpg" width={100} height={100}/>
          </div>
         
          <div className=''>
            <div className='w-full'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste libero molestiae cum dignissimos modi, fugit, tenetur qui non corporis repellat reiciendis quas debitis, sapiente expedita ullam. Vitae, adipisci nulla! Saepe.</p>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default About
