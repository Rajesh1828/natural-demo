import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";

const bottles = [
  { img: assets.mogili_1, name: "Bottle 1" },
  { img: assets.mogili_2, name: "Bottle 2" },
  { img: assets.mogili_3, name: "Bottle 3" },
  { img: assets.mogili_1, name: "Bottle 4" },
  { img: assets.mogili_5, name: "Bottle 5" },
  { img: assets.mogili_5, name: "Bottle 5" },
  { img: assets.mogili_5, name: "Bottle 5" },
  { img: assets.mogili_5, name: "Bottle 5" },


];

const ProductDisplay = () => {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-6 md:px-20 md:max-h-[450px] md:overflow-y-auto 
                    flex flex-row gap-4 px-4 mt-10 overflow-x-auto scroll-bar">
      {bottles.map((bottle, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="flex-shrink-0 md:flex md:flex-col items-center w-64"
        >
          <img
            src={bottle.img}
            alt={bottle.name}
            className="bg-white shadow-md w-full object-cover rounded-md"
          />
          <span className="mt-2 text-center text-sm font-medium text-gray-700">
            {bottle.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductDisplay;
