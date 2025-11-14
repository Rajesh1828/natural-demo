import React from 'react'
import { assets } from '../../../assets/assets'

const Dealer = () => {
  return (
    <div className='bg-white flex flex-col sm:flex-row '>
        <div className='flex  items-center justify-center '>
        <img src={assets.dealership} className='w-full' alt="man" />
        </div>
        <div className='flex flex-col gap-4 items-center justify-center'>
            <h2 className='text-3xl font-bold uppercase text-[#145cab]'>Become a Dealer</h2>
            <p className='capitalize  text-center'>Your opportunity to lead the market partner with us  today  and lets create success together</p>

        </div>

    </div>
  )
}

export default Dealer