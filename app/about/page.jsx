"use client"

import TransitionEffect from '@app/_components/TransitionEffect'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <TransitionEffect/>
      <div className='w-full h-full px-20 flex flex-col items-center justify-center'>
         <h1 className='text-6xl mb-4 font-semibold'>Quote Goes Here</h1>
        <div className='flex justify-center items-center'>
          <Image className='w-1/5' src="/about.jpg" width={100} height={100}/>
          <div className='flex flex-col w-1/2'>
            <div>
  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aspernatur placeat voluptate inventore animi commodi sequi ipsam sunt, recusandae eum dolor? Nihil distinctio earum placeat quidem debitis incidunt fugiat et.</p>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default About
