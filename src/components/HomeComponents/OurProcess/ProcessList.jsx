import { motion } from "framer-motion";
import OurProcesstwo from './OurProcesstwo';
import { assets } from "../../../assets/assets";

const processData = [
  { img: assets.sandfilter, title: "sand filteration" },
  { img: assets.activated, title: "activated carbon filteration" },
  { img: assets.uv, title: "UV treatement" },
  { img: "https://www.water-doctor.com/wp-content/uploads/2024/01/Water-Doctor-Reverse-Osmosis-Infographic-Screenshot.png", title: "reverse osmosis" },
  { img: assets.ozone, title: "ozonation" },
  { img: assets.mineral, title: "treated water with added minerals" },
];

const ProcessList = () => {
  return (
    <>
      <div className='grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 text-center gap-10 md:px-10 md:py-10 px-4 py-4'>
        {processData.map((item, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center gap-5'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={item.img} alt={item.title} className="w-20" />
            <p className='text-sm capitalize text-[#155da9]'>{item.title}</p>
          </motion.div>
        ))}
      </div>

      <OurProcesstwo />
    </>
  )
}

export default ProcessList;
