import React from 'react';
import { Search } from 'lucide-react'; 

const Header = () => (
  <header className="flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-4 bg-white shadow gap-4">
    <h1 className="text-orange-500 font-bold text-xl whitespace-nowrap">⚡ TechSphere</h1>

    {/* Search Bar */}
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full max-w-md shadow-sm flex-grow md:mx-6">
      <Search className="text-gray-400 w-4 h-4 mr-2" />
      <input
        type="text"
        placeholder="search..."
        className="bg-transparent outline-none text-sm flex-grow text-gray-700 placeholder-gray-400"
      />
    </div>

    {/* Buttons */}
    <div className="flex space-x-4">
      <button className="w-28 bg-gray-100 hover:bg-gray-200 text-black px-4 py-1 rounded text-sm font-semibold focus:outline-none">
        Login
      </button>
      <button className="w-28 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded text-sm font-semibold focus:outline-none">
        Register
      </button>
    </div>
  </header>
);

export default Header;
