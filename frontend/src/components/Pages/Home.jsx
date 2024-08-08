
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="bg-dark text-white min-h-screen">
//       <header className="flex justify-between items-center p-5">
//         <div className="text-lg font-bold">Shorts.lol</div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Get Started
//         </button>
//       </header>

//       <main className="flex flex-col items-center">
//         <section className="text-center my-20">
//           <h1 className="text-5xl font-bold">Create short videos</h1>
//           <p className="text-2xl mt-2">In Seconds</p>
//           <p className="mt-4">Your videos created in seconds. Perfect for TikTok, YouTube Shorts, and Reels.</p>
//         </section>

//         <section className="my-10">
//           <div className="grid grid-cols-3 gap-4">
//             {/* Replace with actual images */}
//             {Array(9).fill(0).map((_, index) => (
//               <div key={index} className="bg-gray-700 w-32 h-48"></div>
//             ))}
//           </div>
//         </section>

//         <section className="text-center my-20">
//           <h2 className="text-4xl font-bold text-red-500">Unlimited Content</h2>
//           <div className="flex justify-center mt-4">
//             <div className="bg-gray-800 p-5 m-2 rounded">
//               <p className="font-bold">Create Video</p>
//               <p>Quickly create videos and edit them to match your style.</p>
//             </div>
//             <div className="bg-gray-800 p-5 m-2 rounded">
//               <p className="font-bold">Download Instantly</p>
//               <p>High-quality videos ready for your content needs in seconds.</p>
//             </div>
//           </div>
//         </section>

//         <section className="text-center my-20">
//           <h2 className="text-4xl font-bold text-purple-500">What Users Are Saying</h2>
//           <div className="grid grid-cols-3 gap-4 mt-4">
//             {/* Replace with actual reviews */}
//             {Array(6).fill(0).map((_, index) => (
//               <div key={index} className="bg-gray-800 p-5 rounded">
//                 <p className="font-bold">User {index + 1}</p>
//                 <p className="mt-2">This platform is amazing! It saves me so much time.</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="text-center my-20">
//           <h2 className="text-4xl font-bold text-green-500">Frequently Asked Questions</h2>
//           <div className="mt-4">
//             {/* Replace with actual FAQs */}
//             {Array(5).fill(0).map((_, index) => (
//               <div key={index} className="bg-gray-800 p-5 my-2 rounded">
//                 <p className="font-bold">FAQ {index + 1}</p>
//                 <p className="mt-2">This is the answer to FAQ {index + 1}.</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <footer className="text-center p-5 bg-gray-900">
//         <p>© Shorts.lol</p>
//         <p>Creating short videos in seconds.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams.jsx";
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react";
export default function HomePage() {
  return (
<div className="min-h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
  <header>
  <div className="absolute top-4 left-4 z-20">
        <Zap className="text-white h-8 w-8" />
        
      </div>
  </header>
  <div className="max-w-2xl mx-auto p-4 text-center">
    <h1 className="relative z-5 h-20 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 font-sans font-bold">
      Try Imagine
    </h1>
    <p className="text-neutral-500 max-w-lg mx-auto my-4 text-lg md:text-xl relative z-10">
      Generate AI-powered images based on user prompts. Leverage state-of-the-art AI models to create unique and stunning visuals with just a few clicks.
    </p>
    <Button className="relative z-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-md mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      Get Started
    </Button>
  </div>
  <BackgroundBeams />
</div>

   
    )
    
    }
    
   
