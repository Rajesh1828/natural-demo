import React from 'react';
import Certificates from './Certificates';

const filters = [
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/1.png", label: "Sand Filtration" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/2.png", label: "Activated Carbon Filtration" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/3.png", label: "UV Treatment" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/koko.png", label: "Reverse Osmosis" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/ico01-1.png", label: "Ozonation" },
  { img: "https://nrichwater.com/wp-content/uploads/2025/01/5.png", label: "Treated Water with Added Minerals" },
];

const Filteration = () => {
  return (
    <>
    <div className="md:flex grid grid-cols-2 md:flex-row md:flex-wrap md:justify-between gap-6 md:px-25">
      {filters.map((filter, index) => (
          <div key={index} className="flex flex-col items-center text-center hover:scale-105 transition-transform">
          <img src={filter.img} alt={filter.label} className="w-20 h-20 object-contain mb-2"/>
          <p className="text-sm text-[#145cab] font-semibold md:text-base">{filter.label}</p>
        </div>
      ))}
    </div>
    <Certificates/>
      </>
  );
};

export default Filteration;
