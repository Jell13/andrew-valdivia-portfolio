"use client"

import TransitionEffect from '@app/_components/TransitionEffect'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <TransitionEffect/>
      <div className='w-full h-full px-20 flex flex-col items-center justify-center'>
         <h1 className='text-6xl mb-28 font-semibold'>Quote Goes Here</h1>
        <div className='flex justify-center items-center gap-6'>
          <div className='w-1/4 border-2 border-black dark:border-light rounded-2xl relative'>
            <Image className='w-full h-auto rounded-2xl' src="/about.jpg" width={100} height={100}/>
          </div>
         
          <div className='flex flex-col w-1/2'>
            <div>
              <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aspernatur placeat voluptate inventore animi commodi sequi ipsam sunt, recusandae eum dolor? Nihil distinctio earum placeat quidem debitis incidunt fugiat et.</p>
              <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque architecto perferendis enim dolorum minus quos minima laboriosam odio impedit accusamus, suscipit temporibus! Temporibus eveniet ipsam non corporis inventore. Modi.</p>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default About
