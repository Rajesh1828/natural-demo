import React from "react";
import { assets } from "../../../assets/assets";
import ProductDisplay from "./ProductDisplay";
import "./product.css"; // keep your CSS here
import { motion } from "framer-motion";

const Product = () => {

  return (
    <>
     
      <div className="relative w-full">
        <picture>
          <source srcSet={assets.productM} media="(max-width: 640px)" />
          <img
            src={assets.product}
            alt="Product"
            className="w-full h-[700px] sm:h-[800px] object-cover"
          />
        </picture>

        <motion.div initial={{opacity:0 , y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:true,amount:0.5}} className="content">
          <h2>Best Taste The Richness</h2>
          <h2>Best Taste The Richness</h2>
        <p className="text-md  text-white capitalize md:text-left md:w-2xl">Backed by advanced purification technology and strict quality standards, N Rich ensures that every bottle meets the highest levels of hygiene and safety. Whether you are at home, at work, or on the go, our water keeps you hydrated, energized, and refreshed.</p>
        </motion.div>
      </div>
            <div className='flex flex-col justify-center items-center mt-2' >
                <img src={assets.drop} className='w-10 ' alt="" />
                <h2 className='text-4xl font-bold text-[#155da9] uppercase'>Our Products</h2>
            </div>
      {/* Product Display Section */}
      <ProductDisplay />
    </>
  );
};

export default Product;
