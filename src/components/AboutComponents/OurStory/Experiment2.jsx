import React from "react";
import { motion } from "framer-motion";

const Experiment2 = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row w-full h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://nrichwater.com/wp-content/uploads/2025/01/23.png')",
      }}
    >
      {/* Glass Overlay Section (Right Side) */}
      <motion.div
        className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-white/40 backdrop-blur-md flex items-center justify-center p-8 md:p-12 shadow-[0_-60px_80px_-40px_rgba(255,255,255,0.9)]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-[#0059ad] text-lg md:text-xl leading-relaxed max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Natural is more than just a bottled water brand—it’s a promise of trust and care.
          Our water is crafted to deliver unmatched purity and freshness, ensuring you stay
          hydrated wherever life takes you. Whether you’re working hard, pushing limits at
          the gym, or simply unwinding, Nrich is your perfect companion. Every sip
          revitalizes your body and mind, helping you embrace a healthier, more vibrant
          lifestyle. With Nrich, you’re not just drinking water; you’re making a choice for
          wellness and vitality.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Experiment2;
