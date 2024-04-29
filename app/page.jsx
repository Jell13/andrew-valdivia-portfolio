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
          
          <div className=" w-24 h-24 flex justify-center items-center relative rounded-full">
            <div className="inset-0 opacity-100 absolute w-[100%] h-[105%] bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 from-orange-500 to-yellow-300 rounded-full blur"></div>
            <Image src='/hero.jpg' width={70} height={70} className="rounded-full w-full relative hover:opacity-75 duration-200"/>
          </div>
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
