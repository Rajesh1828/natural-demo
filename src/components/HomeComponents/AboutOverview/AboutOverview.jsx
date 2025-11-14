import React from 'react';
import { assets } from '../../../assets/assets';
import { motion } from 'framer-motion';

const AboutOverview = () => {
    return (
        <div className="flex items-center bg-white justify-between w-full md:h-[670px] md:flex-row flex-col">
            {/* Left Image */}
            <motion.div  initial={{opacity:0 , x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:true,amount:0.5}} className="md:w-1/2 w-full flex justify-center items-center">
                <img src={assets.man} alt="ab" className="w-[70%] " />
            </motion.div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full flex flex-col md:items-start items-center md:pl-10 px-5 py-10 gap-7">
                {/* Drop Image */}
                <motion.div initial={{opacity:0 , y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:true,amount:0.}}  className="flex justify-center md:justify-start items-center  w-full">
                    <img src={assets.drop} className="w-30 md:w-40 mb-[-45px] md:ml-[-60px]" alt="drop" />
                </motion.div>

                {/* Text Content */}
                <div className="flex flex-col gap-6 justify-start  w-full">
                    <motion.h2  initial={{opacity:0 , y:10}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.5}} viewport={{once:true,amount:0.5}} className="text-3xl md:text-4xl leading-tight  uppercase font-bold text-[#2f3f8f]  text-center md:text-left">
                        A sip of refreshment,
                        <br />
                        a taste of richness.
                    </motion.h2>
                    <motion.p initial={{opacity:0 , y:10}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:true,amount:0.5}} className="text-md  text-[#2f3f8f] capitalize md:text-left">
                        At N Rich, we believe that pure, clean, and refreshing water is the foundation of a healthy life. Our packaged drinking water is carefully processed and purified to deliver unmatched freshness and quality with every sip.
                    </motion.p>
                    <motion.p initial={{opacity:0 , y:10}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:true,amount:0.5}} className="text-md  text-[#2f3f8f]  md:text-left">
                        Backed by advanced purification technology and strict quality standards, N Rich ensures that every bottle meets the highest levels of hygiene and safety. Whether you are at home, at work, or on the go, our water keeps you hydrated, energized, and refreshed.
                    </motion.p>
                    <motion.h3 initial={{opacity:0 , x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:true,amount:0.5}} className="md:text-medium font-bold text-[#2f3f8f] prata capitalize text-start md:text-left">
                        N Rich – Taste the Richness, Live the Freshness.
                    </motion.h3>
                </div>
            </div>
        </div>
    );
};

export default AboutOverview;
