import React from 'react'
import Dealertwo from './Dealertwo'

const Dealer = () => {
    return (
        <>
        <div className='flex md:flex-row flex-col mt-20 mb-10 items-center justify-center gap-10'>

            <div className='border p-2'>

                <img src="https://nrichwater.com/wp-content/uploads/2025/01/9-1.png" className='w-[500px]' alt="" />
            </div>
            <div className=''>

                <img src="https://nrichwater.com/wp-content/uploads/2025/01/10.png" className='w-[500px]' alt="" />
            </div>
        </div>
        <Dealertwo/>
        </>
    )
}

export default Dealer