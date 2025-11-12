import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";

const bottles = [
  { img: assets.mogili_1, name: "Mogili Bottle 1" },
  { img: assets.mogili_2, name: "Mogili Bottle 2" },
  { img: assets.mogili_3, name: "Mogili Bottle 3" },
  { img: assets.mogili_4, name: "Mogili Bottle 4" },
  { img: assets.mogili_5, name: "Mogili Bottle 5" },
];

const ProductDisplay = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 md:px-20 px-2 relative mt-10">
      {/* Column 1 */}
      <div className="flex flex-col space-y-10">
        {bottles.slice(0, 2).map((bottle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center"
          >
            <img src={bottle.img} alt={bottle.name} className="bg-white shadow-md" />
            <span className="mt-2 text-center text-sm font-medium text-gray-700">{bottle.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Column 2 */}
      <div className="flex flex-col space-y-10">
        {bottles.slice(2, 4).map((bottle, i) => (
          <motion.div
            key={i + 2}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center"
          >
            <img src={bottle.img} alt={bottle.name} className="bg-white shadow-md" />
            <span className="mt-2 text-center text-sm font-medium text-gray-700">{bottle.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Column 3 */}
      <div className="flex flex-col space-y-10">
        {[bottles[4], bottles[4]].map((bottle, i) => (
          <motion.div
            key={i + 4}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center"
          >
            <img src={bottle.img} alt={bottle.name} className="bg-white shadow-md" />
            <span className="mt-2 text-center text-sm font-medium text-gray-700">{bottle.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Column 4 */}
      <div className="flex flex-col space-y-10">
        {[bottles[4], bottles[3]].map((bottle, i) => (
          <motion.div
            key={i + 6}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center"
          >
            <img src={bottle.img} alt={bottle.name} className="bg-white shadow-md" />
            <span className="mt-2 text-center text-sm font-medium text-gray-700">{bottle.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
