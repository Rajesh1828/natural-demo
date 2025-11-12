import React from 'react'

const Map = () => {
  return (
    <div className='flex justify-center items-center mt-10 mb-2 mx-auto'>

        <iframe         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086210147412!2d-122.41941508468108!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3d21d92d%3A0x8e0b0d4e1b9b9c0b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1698082412345!5m2!1sen!2sus"
 frameborder="0"
  width="90%"
        height="450"
          style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
 >

 </iframe>
    </div>
  )
}

export default Map