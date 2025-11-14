import React from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { toast } from 'react-toastify'

const HomeContact = () => {
      const[contactForm,setContactForm]=useState({
        name:"",
        email:"",
        number:"",
        message:""
        })
        const[loading,setLoading]=useState(false);
  const contactFormHandler = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    try {
      const res = await fetch("https://nw-1-34i9.onrender.com/api/contact/email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactForm)
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message);
        setContactForm({
          name: "",
          email: "",
          number: "",
          message: ""
        });
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // stop loading
    }
  }


    
  return (
    <div>
           <div className="w-full md:w-auto flex flex-col items-center px-2">
                        {/* Header */}
                        <div className="flex flex-col items-center text-center mb-8">
                            <img src={assets.drop} alt="drop" className="w-10 md:w-12 mb-3" />
                            <h2 className="text-2xl md:text-4xl font-bold text-[#155da9]">
                                Get In Touch
                            </h2>
                        </div>
        
                        {/* Form */}
                         <form onSubmit={submitHandler} className="flex flex-col space-y-5 mb-3 w-full md:w-[500px]">
                    <div>
                        <label className="block text-[#145cab] font-medium mb-1">Name</label>
                        <input
                            type="text"
 className="w-full border border-[#145cab] rounded-xl p-2  focus:ring-none outline-none text-[#145cab] placeholder-gray-400"                            placeholder="Enter your name"
                            name='name'
                            value={contactForm.name}
                            onChange={contactFormHandler}
                        />
                    </div>

                    <div>
                        <label className="block text-[#145cab] font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-[#145cab] rounded-xl p-2  focus:ring-none outline-none text-[#145cab] placeholder-gray-400"
                            placeholder="Enter your email"
                            name='email'
                            value={contactForm.email}
                            onChange={contactFormHandler}
                        />
                    </div>

                    <div>
                        <label className="block text-[#145cab] font-medium mb-1">Phone Number</label>
                        <input
                            type="number"
 className="w-full border border-[#145cab] rounded-xl p-2  focus:ring-none outline-none text-[#145cab] placeholder-gray-400"                            placeholder="Enter your phone number"
                            name='number'
                            value={contactForm.number}
                            onChange={contactFormHandler}
                        />
                    </div>

                    <div>
                        <label className="block text-[#145cab] font-medium mb-1">Message</label>
                        <textarea
                            rows="4"
 className="w-full border border-[#145cab] rounded-xl p-2  focus:ring-none outline-none text-[#145cab] placeholder-gray-400"                            placeholder="Type your message"
                            name='message'
                            value={contactForm.message}
                            onChange={contactFormHandler}
                        ></textarea>
                    </div>

                      <button
            type="submit"
            disabled={loading} // disable during loading
            className={`border w-50 py-2 px-6 rounded-lg transition-all duration-300 ${loading ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'border-[#145cab] hover:bg-[#145cab] hover:text-white text-[#021D34]'}`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
                </form>
                    </div>
    </div>
  )
}

export default HomeContact
