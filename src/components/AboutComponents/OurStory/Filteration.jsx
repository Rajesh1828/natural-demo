import React from 'react';
import { motion } from 'framer-motion';
import Certificates from './Certificates';

const filters = [
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/1.png", label: "Sand Filtration" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/2.png", label: "Activated Carbon Filtration" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/3.png", label: "UV Treatment" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/koko.png", label: "Reverse Osmosis" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/ico01-1.png", label: "Ozonation" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/5.png", label: "Treated Water with Added Minerals" },
];

const Filteration = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 md:px-20 py-8">
        {filters.map((filter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <img 
              src={filter.img} 
              alt={filter.label} 
              className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2" 
            />
            <p className="text-sm md:text-base text-[#145cab] font-semibold">{filter.label}</p>
          </motion.div>
        ))}
      </div>
      <Certificates />
    </>
  );
};

export default Filteration;
