import React from 'react'
import { assets } from '../../assets/assets'

const HomeContact = () => {
  return (
    <div>
           <div className="w-full md:w-auto flex flex-col items-center px-2">
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

export default HomeContact