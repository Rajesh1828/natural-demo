import React from "react";

const Experiment2 = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row w-full h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://nrichwater.com/wp-content/uploads/2025/01/23.png')",
      }}
    >
      {/* Glass Overlay Section (Right Side) */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-white/40 backdrop-blur-md flex items-center justify-center p-8 md:p-12 shadow-[0_-60px_80px_-40px_rgba(255,255,255,0.9)]">
        <p className="text-[#0059ad] text-lg leading-relaxed max-w-md">
          Nrich is more than just a bottled water brand—it’s a promise of trust and care.
          Our water is crafted to deliver unmatched purity and freshness, ensuring you stay
          hydrated wherever life takes you. Whether you’re working hard, pushing limits at
          the gym, or simply unwinding, Nrich is your perfect companion. Every sip
          revitalizes your body and mind, helping you embrace a healthier, more vibrant
          lifestyle. With Nrich, you’re not just drinking water; you’re making a choice for
          wellness and vitality.
        </p>
      </div>
    </div>
  );
};

export default Experiment2;
