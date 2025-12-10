import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CATEGORIES: Category[] = [
  'All News', 'India', 'Business', 'Politics', 'Sports', 'Technology', 
  'Startups', 'Entertainment', 'Science', 'Automobile'
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, selectedCategory, onSelectCategory }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity" 
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[230px] bg-[#303036] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } text-white custom-scrollbar overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
           <span className="text-gray-400 text-sm">Categories</span>
           <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <div className="py-2">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat}
              onClick={() => {
                onSelectCategory(cat);
                onClose();
              }}
              className={`px-5 py-3 cursor-pointer hover:bg-[#42424a] transition-colors text-sm font-light ${
                selectedCategory === cat ? 'bg-[#42424a] text-white' : 'text-gray-300'
              }`}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;