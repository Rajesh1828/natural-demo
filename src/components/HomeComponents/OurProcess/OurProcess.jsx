import React from 'react'
import { assets } from '../../../assets/assets'
import ProcessList from './ProcessList'

const OurProcess = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center' >
                <img src={assets.drop} className='w-10 ' alt="" />
                <h2 className='text-4xl font-bold text-[#155da9] uppercase'>Our Process</h2>
            </div>
            <ProcessList/>
            
        </div>
    )
}

export default OurProcess