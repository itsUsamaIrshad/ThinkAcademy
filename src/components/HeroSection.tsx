import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem]   w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-center" >
    <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-white"
            >The Best <span className=" text-green-500"> Program</span> to <br />   <span className=" text-green-500">Enroll  </span>for Exchange</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Explore our expert-led online courses and elevate your skills in web development, design, and more. Start learning today and build your future!</p>
            <div className="mt-4">
                <Link href={"/courses"}  className="dark">
                    <Button
                    borderRadius="1.75rem"
                    className=" bg-gray-950 text-white text-sm border-green-500"
                    >
                    Explore courses
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection