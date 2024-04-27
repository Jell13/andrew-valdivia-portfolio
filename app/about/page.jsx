"use client"

import TransitionEffect from '@app/_components/TransitionEffect'
import React from 'react'

const About = () => {
  return (
    <>
      <TransitionEffect/>
      <div className='w-full h-full px-20 flex items-center'>
        <div className='flex flex-col'>
          <h1 className='text-6xl mb-4'>Quote Goes Here</h1>
          <div>
            <p>About Page</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aspernatur placeat voluptate inventore animi commodi sequi ipsam sunt, recusandae eum dolor? Nihil distinctio earum placeat quidem debitis incidunt fugiat et.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
