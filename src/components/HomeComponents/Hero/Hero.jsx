import React from "react";
import { easeIn, motion } from "framer-motion";
import { assets } from "../../../assets/assets";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden hero-image flex flex-col items-center  ">
      {/* Overlay */}

      {/* Centered Heading */}
      <div className="relative z-20 flex flex-col top-[20%] px-1  ">
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="prata text-[#14538f] font-extrabold uppercase text-2xl leading-relaxed tracking-widest">Natural : Taste The</motion.p>
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{duration:2,delay:1, ease:"easeIn"}} className="text-5xl sm:text-6xl md:text-[150px] flex font-bold uppercase leading-snug -tracking-wide text-[#15398f] sm:gap-20 ">
         BEST <h1>
          ness
          </h1> 
        </motion.h1>
      </div>

      {/* Bottle Image (Animated from bottom to top) */}
      <motion.img
        src={assets.bottle}
        alt="Bottle"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 h-[610px] sm:h-[600px] md:h-[650px]  object-contain"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />
    </section>
  );
};

export default Hero;
