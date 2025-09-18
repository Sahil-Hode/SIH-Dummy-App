import React from 'react';
import { FiMenu, FiBell, FiUser, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = ({ role, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Mobile menu button and Role Title for mobile */}
        <div className="flex items-center">
          <button
            className="lg:hidden text-gray-500 hover:text-gray-600 focus:outline-none mr-4"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <FiMenu className="h-6 w-6" />
          </button>
          <h1 className="lg:hidden text-lg font-semibold text-text-primary">{role}</h1>
        </div>


        {/* Role Title for Desktop */}
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold text-text-primary">{role} Dashboard</h1>
        </div>
        
        {/* Header Icons/Profile */}
        <div className="flex items-center space-x-4">
            <button className="relative text-gray-500 hover:text-gray-700 focus:outline-none" aria-label="Notifications">
                <FiBell className="h-6 w-6"/>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
                </span>
            </button>
            <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <FiUser className="h-8 w-8 text-white bg-primary rounded-full p-1"/>
                  <span className="hidden md:inline text-sm font-medium text-text-primary">Demo User</span>
                  <FiChevronDown className="hidden md:inline h-4 w-4 text-gray-500"/>
                </button>
                {/* Dropdown can be added here */}
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
