import React from 'react';
import { assets } from '../../../assets/assets';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto md:px-20 py-10 relative overflow-hidden gap-10">
      
      {/* Left Section with Background */}
      <motion.div
        className="relative md:w-1/2 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://nrichwater.com/wp-content/uploads/2025/01/23.png")',
          }}
        ></div>

        {/* Blur & Light Overlay */}
        <div className="absolute inset-0 backdrop-blur-lg bg-white/40 shadow-[0_-40px_70px_20px_rgba(255,255,255,0.9)]"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-12 py-10 gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={assets.drop}
            alt="drop"
            className="w-20 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.h2
            className="text-3xl font-bold text-[#0059ad] mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-lg text-[#0059ad] leading-relaxed max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            At Nrich, we believe that water is the foundation of life and should
            embody the highest standards of purity and freshness. Our journey
            began with a simple mission: to deliver clean, refreshing, and
            high-quality water that supports your health and enriches your
            everyday life. Every drop of Nrich water is filtered with precision
            and care, ensuring unparalleled purity in every sip.
          </motion.p>
          <motion.img
            src={assets.bottle}
            alt="water"
            className="mt-6 w-2/5 md:w-2/6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-1/2 flex items-center justify-center py-10 px-4 md:px-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p
          className="text-lg text-[#0059ad] leading-relaxed max-w-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We are passionate about sustainability and innovation. Our advanced
          purification process not only guarantees crystal-clear water but also
          upholds our commitment to protecting the environment. From sourcing to
          bottling, we prioritize eco-friendly practices, ensuring that
          hydration today doesn’t compromise the resources of tomorrow.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OurStory;
