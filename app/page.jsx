"use client"

import Image from "next/image";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex flex-col justify-center items-center text-3xl">
        
        <Image src='/hero.jpg' width={200} height={200} className="rounded-full"/>
        <h1 className="text-xl">Machine Learning</h1>
        <Typewriter
          className=''
          options={{
            strings: ['Andrew Valdivia'],
            autoStart: true,
            loop: true,
          }}
        /> 
      </div>
    </div>
  );
}
