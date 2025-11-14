import React from 'react'
import { assets } from '../../../assets/assets'
import { motion } from 'framer-motion'
import { FaMehRollingEyes } from 'react-icons/fa'

const Dealertwo = () => {
  const data = [
    { img: assets.m_1, name: "Bottle 1" },
    { img: assets.m_2, name: "Bottle 2" },
    { img: assets.m_3, name: "Bottle 3" },
    { img: assets.m_4, name: "Bottle 4" },
    { img: assets.m_2, name: "Bottle 5" },
  ]

  return (
    <div className='flex flex-row gap-8 overflow-x-auto scroll-bar md:justify-center justify-start items-center md:px-20 mb-10'>
      {data.map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="relative flex-shrink-0 w-60 h-60 rounded-md overflow-hidden  group cursor-pointer"
        >
          {/* Image */}
          <img
            src={d.img}
            alt={d.name}
            className="w-full h-full object-cover"
          />

          {/* Overlay for hover */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <FaMehRollingEyes className="text-white text-4xl" />
          </div>

          {/* Bottom text */}
          <div className="absolute bottom-0 left-0 w-full bg-black/20 px-2 py-1 text-white text-center">
            {d.name}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Dealertwo
