import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex flex-col justify-center items-center">
        
        <Image src='/hero.jpg' width={200} height={200} className="rounded-full"/>
        <h1 className="text-xl">Andrew Valdivia</h1>
        
      </div>
    </div>
  );
}
