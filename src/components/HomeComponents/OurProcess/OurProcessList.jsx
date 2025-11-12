import React from "react";

const OurProcessList = () => {
  return (
    <div className="flex justify-center w-full mt-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#155da9]  ">

        {/* Natural Process */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-white shadow-md flex items-center justify-center">
            <img
              src="https://img.icons8.com/?size=100&id=mt7n5rI8STz8&format=png&color=000000"
              alt="leaf"
              className="w-12 h-12"
            />
          </div>
          <p className="text-white text-base">Natural process</p>
        </div>

        {/* Organic System */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-white shadow-md flex items-center justify-center">
            <img
              src="https://img.icons8.com/?size=100&id=bXNBbiaypAOI&format=png&color=000000"
              alt="organic"
              className="w-12 h-12"
            />
          </div>
          <p className="text-white text-base">Organic system</p>
        </div>

        {/* Fresh Water */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-white shadow-md flex items-center justify-center">
            <img
              src="https://img.icons8.com/?size=100&id=MhkU1HOeZffe&format=png&color=000000"
              alt="drop"
              className="w-12 h-12"
            />
          </div>
          <p className="text-white text-base">Fresh water</p>
        </div>

        {/* Naturally Occurring */}
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-white shadow-md flex items-center justify-center">
            <img
              src="https://img.icons8.com/?size=100&id=1i1OucArxwqF&format=png&color=000000"
              alt="mountain"
              className="w-12 h-12"
            />
          </div>
          <p className="text-white text-base">Naturally occurring</p>
        </div>

      </div>
    </div>
  );
};

export default OurProcessList;
