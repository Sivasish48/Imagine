// import  GlareCard  from "@/components/ui/glare-card.jsx";
// import { Zap } from "lucide-react";
// import { BackgroundGradient } from "../ui/background-gradient";

// export default function Cards() {
//   return (
//     <div className="flex justify-center items-center space-x-4 py-10"> 
//       {/* Flex container to keep the cards in a row and centered */}
//       <BackgroundGradient className="  dark:bg-zinc-900">
//         <GlareCard className="flex flex-col items-center justify-center p-2 sm:p-2">
//           <Zap className="text-white h-8 w-8"/>
//           <p className="text-white font-bold text-xl mt-4">Aceternity</p>
//         </GlareCard>
//       </BackgroundGradient>
//       </div>
//   )
// }


"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";



export default function Cards() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
      
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
