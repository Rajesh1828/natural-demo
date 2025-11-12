import React from 'react';
import { assets } from '../../../assets/assets';

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto md:px-20 py-10 relative overflow-hidden">
      {/* Left Section with Background */}
      <div className="relative md:w-1/2 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://nrichwater.com/wp-content/uploads/2025/01/23.png")',
          }}
        ></div>

        {/* Blur & Light Overlay */}
        <div className="absolute inset-0 backdrop-blur-lg bg-white/40 shadow-[0_-40px_70px_20px_rgba(255,255,255,0.9)]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-12 py-10">
          <img src={assets.drop} alt="drop" className="w-20 mb-4" />
          <h2 className="text-3xl font-bold text-[#0059ad] mb-4">Our Story</h2>

          <p className="text-lg text-[#0059ad] leading-relaxed max-w-md">
            At Nrich, we believe that water is the foundation of life and should
            embody the highest standards of purity and freshness. Our journey
            began with a simple mission: to deliver clean, refreshing, and
            high-quality water that supports your health and enriches your
            everyday life. Every drop of Nrich water is filtered with precision
            and care, ensuring unparalleled purity in every sip.
          </p>

          <img src={assets.water} alt="water" className="mt-6 w-1/5 md:w-1/6" />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex items-center justify-center py-10 px-4 md:px-16">
        <p className="text-lg text-[#0059ad] leading-relaxed max-w-lg">
          We are passionate about sustainability and innovation. Our advanced
          purification process not only guarantees crystal-clear water but also
          upholds our commitment to protecting the environment. From sourcing to
          bottling, we prioritize eco-friendly practices, ensuring that
          hydration today doesn’t compromise the resources of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
