
import { FaFilter} from "react-icons/fa";
import OurProcesstwo from './OurProcesstwo';
import { assets } from "../../../assets/assets";

const ProcessList = () => {
    return (
        <>
        <div className='md:flex grid grid-cols-2 sm:grid-cols-4 text-center gap-20 md:px-10 md:py-10 px-4 py-4'>
            <div className='flex flex-col  items-center gap-5'>
                <img src={assets.sandfilter} className="w-20" alt="sandfilteration" />
                <p className='text-base capitalize text-sky-400'>sand filteration</p>
            </div>
             <div className='flex flex-col  items-center gap-5'>
                <img src={assets.activated} className="w-20" alt="activated" />
                <p className='text-base capitalize text-sky-400'>Activated carbon filteration</p>
            </div>
             <div className='flex flex-col  items-center gap-5'>
                <img src={assets.uv} alt="" className="w-20" />
                <p className='text-base capitalize text-sky-400'>UV treatement</p>
            </div>
             <div className='flex flex-col  items-center gap-5'>
                <img src={assets.ro} alt="" className="w-20" />
                <p className='text-base capitalize text-sky-400'>reverse osmosis</p>
            </div>
             <div className='flex flex-col  items-center gap-5'>
                                <img src={assets.ozone} className="w-20" alt="sandfilteration" />
                <p className='text-base capitalize text-sky-400'>Ozonation</p>
            </div>
             <div className='flex flex-col  items-center gap-5'>
                <img src={assets.mineral} className="w-20" alt="sandfilteration" />
                <p className='text-base capitalize text-sky-400'>Treated Water with Added minerals
                </p>
            </div>
        </div>
        
      <OurProcesstwo/>
        </>
    )
}

export default ProcessList