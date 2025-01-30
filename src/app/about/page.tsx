import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

 function page() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl  lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
      Upgrade Your Skills
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          
          <div className="relative bg-clip-text text-green-500 py-4">
            <span>Transform Your Future!</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}


export default page