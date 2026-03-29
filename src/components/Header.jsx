import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-12 bg-secondary text-white flex items-center justify-between px-5 shrink-0 rounded-lg z-50 overflow-hidden">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
            <span className="font-bold text-base">W</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">Worcspace</span>
        </div>

        {/* Workspace Selector */}
        <div className="bg-white/10 hover:bg-white/20 transition-colors px-2.5 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer text-[12px]">
          <span>Worcspace 1</span>
          <ChevronDown size={12} />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8 h-8 bg-white/10 rounded-lg flex items-center px-3 gap-2 border border-white/10 group focus-within:border-white/30 transition-all">
        <Search size={16} className="text-gray-400 group-focus-within:text-white" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent border-none outline-none flex-1 text-[13px] placeholder:text-gray-400"
        />
        <div className="flex items-center gap-1 bg-white/10 px-1 py-0.5 rounded text-[9px] font-mono text-gray-400 border border-white/10">
          <span>⌘</span>
          <span>K</span>
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3">
        <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-gray-300 hover:text-white">
          <Bell size={18} />
        </button>
        <div className="flex items-center gap-2 bg-white/10 px-1.5 py-1 rounded-lg cursor-pointer hover:bg-white/20 transition-all">
          <div className="w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-[11px]">
            GK
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
