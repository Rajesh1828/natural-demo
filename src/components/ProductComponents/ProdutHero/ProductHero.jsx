import React from 'react'
import { assets } from '../../../assets/assets'
import { motion } from 'framer-motion'

const ProductHero = () => {
   return (
        <div className='w-full relative '>
        <motion.div initial={{opacity:0 , y:100}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:true,amount:0.5}} className="content">
          <h2>PRODUCTS</h2>
        <h2>PRODUCTS</h2>
        <p className="text-md  text-white capitalize md:text-left md:w-2xl">Backed by advanced purification technology and strict quality standards</p>
        </motion.div>

<picture>
  <source srcSet={assets.aboutm} media="(max-width: 640px)" />

  <img src={assets.about} alt="about" className='w-full object-cover  h-[600px]' />
</picture>
    </div>
   )
}

export default ProductHero