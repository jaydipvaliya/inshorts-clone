import React from 'react';

const DownloadBanner: React.FC = () => {
  return (
    <div className="bg-[#f44336] text-white py-3 px-4 flex flex-col md:flex-row justify-between items-center shadow-md mb-8 max-w-[900px] mx-auto mt-8 rounded-sm">
      <div className="text-sm md:text-base mb-3 md:mb-0 font-light text-center md:text-left w-full md:w-auto">
        For the best experience use <span className="font-bold">inshorts</span> app on your smartphone
      </div>
      <div className="flex space-x-3">
        {/* App Store Badge Simulation */}
        <div className="bg-black rounded-md px-2 py-1 flex items-center cursor-pointer border border-white/20">
            <div className="text-xs text-right">
                <div className="text-[8px] leading-tight">Download on the</div>
                <div className="font-bold leading-tight">App Store</div>
            </div>
        </div>
        {/* Play Store Badge Simulation */}
        <div className="bg-black rounded-md px-2 py-1 flex items-center cursor-pointer border border-white/20">
            <div className="text-xs text-left">
                <div className="text-[8px] leading-tight text-gray-300">ANDROID APP ON</div>
                <div className="font-bold leading-tight">Google Play</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;