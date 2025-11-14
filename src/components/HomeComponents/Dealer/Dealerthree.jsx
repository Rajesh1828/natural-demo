import React from 'react'
import { motion } from 'framer-motion'
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import { assets } from '../../../assets/assets';

const Dealerthree = () => {

    const [bgImage,setBgImage] = React.useState(assets.lasthome)
    React.useEffect(() => {
        const UpdatebgImage = () => {
            if(window.innerWidth>=640){
                setBgImage(assets.lasthome)
            }else{
                setBgImage(assets.lasthomem)
            }
        }
        UpdatebgImage()
        window.addEventListener('resize',UpdatebgImage);
        return()=>{
            window.removeEventListener('resize',UpdatebgImage);
        }        
    },[])
    return (
        <div
            className='w-[90%] min-h-[500px] bg-center bg-cover bg-no-repeat mx-auto flex items-center'
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className='flex flex-col md:flex-row w-full items-center justify-end '>
            

                <div className='md:w-1/2 w-full flex flex-col justify-center items-center gap-6'>
                    <motion.h2 initial ={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration:1}} className='text-3xl md:text-4xl leading-snug text-[#112A46] font-bold'>
                        Stay Hydrated, Stay Nrich
                        <br />
                        Pure Water for a Pure You!
                    </motion.h2>

                    <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                        <button className='px-8 py-3 rounded-2xl border text-[#0C3458] font-semibold hover:text-[#112A46] cursor-pointer transition'>
                            Join Now
                        </button>

                        <div className='flex gap-3'>
                            {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, index) => (
                                <motion.a
                                initial ={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration:1, delay: index * 0.1,  ease: "easeIn" }} viewport={{ once: true, amount: 0.3 }}
                                    key={index}
                                    href="#"
                                    className="text-[#FFFFFF] p-3 rounded-full hover:scale-110 transition transform bg-black/30"
                                >
                                    <Icon size={20}  />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dealerthree
