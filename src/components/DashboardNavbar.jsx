import React, { useState, useRef, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import DashboardSideBar from './DashboardSideBar';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Added state to control sidebar visibility
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav className='flex justify-between items-center bg-blue-950 text-white p-5 relative'>
        {/* Hamburger menu */}
        <label className='p-2 cursor-pointer' onClick={() => setSidebarOpen(!sidebarOpen)}>
          <RxHamburgerMenu />
        </label>

        <div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        <div className='relative userIcon' ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='p-2 hover:bg-blue-800 rounded-full transition-all duration-200'
          >
            <CiUser size={25} />
          </button>

          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50'>
              <ul className='py-2'>
                <Link to="/Profile" className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Profile</Link>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Pass the sidebar state down to the DashboardSideBar component */}
      <DashboardSideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </div>
  );
};

export default DashboardNavbar;
