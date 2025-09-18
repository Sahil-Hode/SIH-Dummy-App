import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks } from '../../constants/navigation';
import { FiX } from 'react-icons/fi';
// Assuming you have a logo in your assets folder
import logo from '../../assets/logo.jpg'; 

const Sidebar = ({ role, sidebarOpen, setSidebarOpen }) => {
  const links = navLinks[role] || [];

  return (
    <>
      {/* Overlay for mobile view */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64 bg-primary text-white flex flex-col z-40 transition-transform duration-300 ease-in-out shadow-lg`}
      >
        {/* Logo and App Name */}
        <div className="flex items-center justify-between p-4 border-b border-green-700">
           <Link to="/" className="flex items-center space-x-2" title="Back to Home">
              <img src={logo} alt="VanSakshya Logo" className="h-10 w-10 bg-white rounded-full p-1" />
              <span className="text-xl font-bold">VanSakshya</span>
           </Link>
           <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-2xl p-1 rounded-md hover:bg-green-700">
              <FiX />
           </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium ${
                  isActive
                    ? 'bg-secondary text-white shadow-inner'
                    : 'hover:bg-green-700 hover:text-white'
                }`
              }
              onClick={() => sidebarOpen && setSidebarOpen(false)} // Close sidebar on mobile click
            >
              <link.icon className="w-5 h-5 mr-3" />
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* User Profile / Logout */}
        <div className="p-4 border-t border-green-700">
           <Link to="/login" className="flex items-center w-full px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            Logout
           </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
