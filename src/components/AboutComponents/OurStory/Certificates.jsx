import React from 'react'
import { assets } from '../../../assets/assets'
import CertificatesList from './CertificatesList'

const Certificates = () => {
  return (
    <>
    <div className=' flex flex-col justify-center items-center mt-10'>
        <img src={assets.drop} alt="drop" className='w-20 ' />
        <h2 className='text-3xl font-bold text-[#145cab]'>Certificates</h2>
    </div>
    <div>

    </div>
<CertificatesList/>
    </>

  )
}

export default Certificates