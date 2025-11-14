import React from 'react';
import { assets } from '../../../assets/assets';
import { motion } from 'framer-motion';

const Experiment = () => {
  return (
    <div className='px-4 md:px-20 lg:px-36 py-10 flex flex-col items-start gap-6'>

      {/* Drop Icon with motion */}
      <motion.img
        src={assets.drop}
        alt="Drop Icon"
        className='w-20'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />

      {/* Heading with motion */}
      <motion.h2
        className='text-4xl md:text-5xl font-bold text-[#155da9] leading-relaxed'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Experience Purity,<br /> Embrace Richness<br /> Bring Freshness with Nrich
      </motion.h2>

    </div>
  );
};

export default Experiment;
