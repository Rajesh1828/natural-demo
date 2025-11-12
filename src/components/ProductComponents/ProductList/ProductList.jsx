import React from 'react'
import { assets } from '../../../assets/assets'

const ProductList = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-2'>
    <img src={assets.drop} alt="drop" className='w-10' />
    <h2 className=' text-2xl md:text-3xl font-bold text-[#145cab]'>ProductList</h2>
    
    </div>
  )
}

export default ProductList