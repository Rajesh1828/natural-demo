import React from 'react'
import { Mail, PhoneCall } from 'lucide-react'
import { assets } from '../../../assets/assets'

const Contactsection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-5 md:px-10 py-10">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-5 md:px-20 py-10 bg-[#d5e2f0] text-gray-800 w-full md:w-auto rounded-xl">
                <h2 className="text-2xl md:text-4xl font-bold rotation text-center md:text-start md:relative md:left-10 md:top-10">
                    PRODUCTION <br /> FACILITY
                </h2>

                <div className="flex flex-col gap-5 rounded-2xl p-5 md:p-8 w-full md:w-[300px]">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#145cab] text-white p-3 rounded-full flex justify-center items-center">
                            <PhoneCall size={30} />
                        </div>
                        <div>
                            <p className="text-lg md:text-xl font-semibold">Phone</p>
                            <p className="text-base md:text-lg text-gray-600 break-all">
                                +91-9999999999
                            </p>
                        </div>
                    </div>

                    <hr className="border-[#c2ccd7] w-full" />

                    <div className="flex items-center gap-5">
                        <div className="bg-[#145cab] text-white p-3 rounded-full flex justify-center items-center">
                            <Mail size={30} />
                        </div>
                        <div className=''>
                            <p className="text-lg md:text-xl font-semibold">Mail</p>
                            <p className="text-lg md:text-base text-gray-600 ">
                                naturalwater@gmail.com
                            </p>
                        </div>
                    </div>

                    <hr className="border-[#c2ccd7] w-full" />
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-auto flex flex-col items-center">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                    <img src={assets.drop} alt="drop" className="w-10 md:w-12 mb-3" />
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Get In Touch
                    </h2>
                </div>

                {/* Form */}
                <form className="flex flex-col space-y-5 mb-3 w-full md:w-[500px]">
                    <div>
                        <label className="block text-[#145cab] font-medium mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-full bg-[#145cab] p-2 focus:ring-2 focus:ring-blue-400 outline-none text-white placeholder-white"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-[#145cab] font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-full bg-[#145cab] p-2 focus:ring-2 focus:ring-blue-400 outline-none text-white placeholder-white"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-[#145cab] font-medium mb-1">Phone Number</label>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-full bg-[#145cab] p-2 focus:ring-2 focus:ring-blue-400 outline-none text-white placeholder-white"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <label className="block text-[#145cab] font-medium mb-1">Message</label>
                        <textarea
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg bg-[#145cab] p-2 focus:ring-2 focus:ring-blue-400 outline-none text-white placeholder-white"
                            placeholder="Type your message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#145cab] text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contactsection
