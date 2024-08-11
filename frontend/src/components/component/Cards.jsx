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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4 ">
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
  <h2 className="text-5xl font-bold text-white dark:text-neutral-200 text-center mb-4">
    Generate Images
  </h2>
  <p className="text-3xl text-white dark:text-neutral-200 text-center leading-relaxed">
    From Concept to Canvas:<br />
    <span className="block mt-2">Watch AI Bring</span>
    <span className="block">Your Ideas to Life!</span>
  </p>
</BackgroundGradient>
<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
  <h2 className="text-5xl font-bold text-white dark:text-neutral-200 text-center mb-4">
    Download Instanly
  </h2>
  <p className="text-3xl text-white dark:text-neutral-200 text-center leading-relaxed">
    In just 1 Minute Recieve  <br />
    <span className="block mt-2">Your Content</span>
    <span className="block">Ready To Use!</span>
  </p>
</BackgroundGradient>

<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
  <h2 className="text-5xl font-bold text-white dark:text-neutral-200 text-center mb-4">
  One-Click Sharing:
  </h2>
  <p className="text-3xl text-white dark:text-neutral-200 text-center leading-relaxed">
  Instantly Publish to Your<br />
    <span className="block mt-2">Favorite Platforms and</span>
    <span className="block">Expand Your Reach!</span>
  </p>
</BackgroundGradient>
    </div>
  );
}
