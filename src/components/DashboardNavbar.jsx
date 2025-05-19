import React, { useState, useRef, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import DashboardSideBar from './DashboardSideBar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';

const DashboardNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Setup for logout functionality
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // Logout handler function - client-side only since there's no logout API
  const handleLogout = () => {
    // Clear the JWT cookie
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Dispatch Redux logout action to clear state
    dispatch(logout());
    
    // Show success message
    toast.success('Logged out successfully');
    
    // Redirect to login page
    navigate('/login');
  };

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
                <li>
                  <Link to="/dashboard/profile" className='block px-4 py-2 hover:bg-gray-100 cursor-pointer'>Profile</Link>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className='w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer'
                  >
                    Logout
                  </button>
                </li>
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