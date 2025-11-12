import React, { useState,use,useEffect, useRef } from "react";
import { assets } from "../../../assets/assets";
import OurProcessList from "./OurProcessList";


const OurProcesstwo = () => {
 const [count, setCount] = useState(0);
 const ref = useRef(null)

    useEffect(()=>{
      const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            let start = 0;
            let end = 99;
            let duration = 1000;
            const increment = end/(duration/20 );
            const interval = setInterval(()=>{
              start +=increment;
              if(start>=end){
                start=end;
                clearInterval(interval);
              }
              setCount(Math.ceil(start));
            },20);
            observer.unobserve(ref.current);
          }
        })
      },{threshold:0.5});
if(ref.current){
      observer.observe(ref.current);
}      
return ()=>{
  if(ref.current){
    observer.unobserve(ref.current);
  }
}
  
    },[])
 
  return (
    <div className="relative bg-[#155da9] sm:w-[90%] w-full h-auto rounded-lg overflow-hidden p-6 flex flex-col items-center gap-6">

      {/* Top Section: Water Image + Process + Text/Video */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">

        {/* Left Image */}
        <img
          src={assets.bottle1}
          alt="water"
          className="w-[180px] md:w-[250px] md:mr-20 sm:mr-10"
        />

        {/* Background Process Image */}
        <img
          src={assets.process}
          alt="process"
          className="w-[90%] md:w-[70%] hidden md:flex rounded-lg shadow-lg blur-sm md:absolute md:top-5 md:right-5"
        />

        {/* Right Content */}
        <div className="z-30 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6 w-full md:w-auto">

          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <h2 ref={ref} className="md:text-[#155da9] text-white text-5xl md:text-7xl font-bold">{count}%</h2>
            <p className="text-white text-base">
              Estate grown used organic process
            </p>
            <a href="">
              <button className="md:bg-[#155da9] bg-white text-[#155da9] uppercase md:text-white py-2 px-4 rounded-md mt-4">
                Read More
              </button>
            </a>
          </div>

          {/* Video Thumbnail Section */}
          <div
            className="relative w-full max-w-[500px] md:max-w-[500px] cursor-pointer mt-4 md:mt-[-80px] shadow-lg rounded-lg overflow-hidden"
            onClick={() => window.open("https://www.youtube.com/watch?v=aep7K_7Urtg", "_blank")}
          >
            <img
              src={assets.hero2}
              alt="Video Thumbnail"
              className="rounded-lg w-full h-auto object-cover"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="w-16 h-16 border-2 border-white bg-white/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 2v20l18-10L4 2z" />
                </svg>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Our Process List Section */}
<div className="w-full relative md:absolute md:top-[75%] md:left-[10%] lg:top-[80%] lg:left-[13%] mt-10 md:mt-0 z-30">
  <OurProcessList />
</div>


    </div>
  );
};

export default OurProcesstwo;
