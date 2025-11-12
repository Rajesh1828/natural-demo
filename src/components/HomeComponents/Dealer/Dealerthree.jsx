import React from 'react'
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
                {/* <div className='md:w-1/2 w-full flex justify-center md:justify-start'>
                    <img
                        src=""
                        className='w-[300px] md:w-[400px] md:ml-40 md:mb-[-100px] object-contain'
                        alt=""
                    />
                </div> */}

                <div className='md:w-1/2 w-full flex flex-col justify-center items-center gap-6'>
                    <h2 className='text-3xl md:text-4xl leading-snug text-white font-bold'>
                        Stay Hydrated, Stay Nrich
                        <br />
                        Pure Water for a Pure You!
                    </h2>

                    <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                        <button className='px-8 py-3 rounded-2xl bg-white text-[#155da9] font-semibold hover:bg-[#e0e0e0] transition'>
                            Join Now
                        </button>

                        <div className='flex gap-3'>
                            {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-white p-3 rounded-full hover:scale-110 transition transform bg-black/30"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dealerthree
