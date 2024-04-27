"use client"

import Image from "next/image";
import Typewriter from 'typewriter-effect';
import TransitionEffect from "./_components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect/>
      <div className="w-full h-full ">
        <div className="w-full h-full flex flex-col justify-center items-center text-3xl">
          
          <Image src='/hero.jpg' width={70} height={70} className="rounded-full"/>
          <h1 className="text-xl mt-6">Machine Learning</h1>
          <Typewriter
            className='mt-2'
            options={{
              strings: ['Andrew Valdivia'],
              autoStart: true,
              loop: true,
            }}
          /> 
        </div>
      </div>
    </>
  );
}
