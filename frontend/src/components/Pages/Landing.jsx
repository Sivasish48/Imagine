


import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams.jsx";
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react";
import Cards from "@/components/component/Cards.jsx";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards.jsx";
import { useNavigate } from "react-router-dom";
export default  function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="min-h-[50rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        <header>
          <div className="absolute top-4 left-4 z-20">
            <Zap className="text-white h-8 w-8" />
          </div>
        </header>
        <div className="max-w-2xl mx-auto p-4 text-center">
          <h1 className="relative z-5 h-20 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 font-sans font-bold">
            Try Imagine
          </h1>
          <p className="text-neutral-400 max-w-lg mx-auto my-4 text-lg md:text-xl relative z-10">
            Generate AI-powered images based on user prompts. Leverage state-of-the-art AI models to create unique and stunning visuals with just a few clicks.
          </p>
          <Button
           onClick={() => navigate('/generate')}
          className="relative z-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-md mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Get Started
          </Button>
        </div>
        <BackgroundBeams />
      </div>
 
      <h2 className="text-4xl md:text-5xl text-center font-bold bg-clip-text bg-gradient-to-r from-purple-700 via-blue-500 to-purple-500 mb-8">
  Get Started Today
</h2>


  <div className=" bg-black flex items-center justify-center py-20 px-4">
    <Cards />
  </div>


<h2 className="text-4xl md:text-5xl text-center mt-10 md:mt-20 font-bold bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-8">
  What Users Are Saying
</h2>

<div className="h-auto md:h-[30rem] rounded-md flex flex-col antialiased bg-black dark:bg-black items-center justify-center relative overflow-hidden">
  <InfiniteMovingCards
    items={testimonials}
    direction="right"
    speed="slow"
  />
</div>
    </div>
  );
}
    
   

const testimonials = [
  {
    quote:
      "This AI image generator is a game-changer! It brought my abstract ideas to life with stunning visuals in just minutes. I can't imagine working on my projects without it.",
    name: "Alex Johnson",
    title: "Digital Artist",
  },
  {
    quote:
      "The quality and creativity of the images generated are simply mind-blowing. It’s like having a professional designer on call 24/7.",
    name: "Samantha Lee",
    title: "Creative Director",
  },
  {
    quote:
      "I was skeptical at first, but this AI image generator exceeded my expectations. It’s fast, intuitive, and the results are always impressive.",
    name: "David Brown",
    title: "Content Creator",
  },
  {
    quote:
      "This tool has saved me so much time! The AI understands my prompts perfectly and delivers high-quality images that I can use immediately.",
    name: "Emma Green",
    title: "Marketing Specialist",
  },
  {
    quote:
      "As someone who isn’t a designer, this AI image generator has been a lifesaver. It makes it so easy to create professional-looking images without any hassle.",
    name: "Michael Carter",
    title: "Entrepreneur",
  },
];
