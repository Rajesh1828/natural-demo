import React from 'react';

const OurVision = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-10 px-4 md:px-20 lg:px-36 py-10 bg-white">
      {/* Vision Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-[#155da9]">Our Vision</h2>
        <p className="text-lg text-[#155da9]/90 leading-relaxed">
          To make <span className="font-semibold">NRICH Water</span> the most trusted and loved packaged drinking
          water brand in Telangana and Andhra Pradesh. Our vision is to be a leading brand, delivering purity in
          every sip while staying firmly committed to our community and environmental responsibilities.
        </p>
      </div>

      {/* Mission Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-[#155da9]">Our Mission</h2>
        <p className="text-lg text-[#155da9]/90 leading-relaxed">
          At <span className="font-semibold">NRICH Water</span>, we stand for purity, trust, and sustainable
          innovation — delivering safe and refreshing water that supports a healthier tomorrow.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
