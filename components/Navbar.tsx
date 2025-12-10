import React from 'react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <div className="h-[72px] shadow-[0_4px_12px_0_rgba(0,0,0,0.05)] bg-white sticky top-0 z-40 flex items-center px-4 md:px-6">
      <div className="flex items-center cursor-pointer" onClick={onMenuClick}>
        <svg
          viewBox="0 0 30 30"
          width="30"
          height="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-800"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span className="ml-2 text-sm font-light text-gray-800 hidden md:inline">Menu</span>
      </div>
      
      <div className="flex-1 flex justify-center">
        {/* Logo Simulation */}
        <div className="flex items-center">
            <div className="bg-orange-600 w-8 h-8 rounded-md grid grid-cols-2 gap-[2px] p-[5px] mr-1">
                <div className="bg-white rounded-[1px]"></div>
                <div className="bg-white rounded-[1px]"></div>
                <div className="bg-white rounded-[1px]"></div>
                <div className="bg-white rounded-[1px] opacity-0"></div> 
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-800">inshorts</span>
        </div>
      </div>
      
      {/* Spacer to balance menu icon */}
      <div className="w-[30px] hidden md:block"></div>
    </div>
  );
};

export default Navbar;