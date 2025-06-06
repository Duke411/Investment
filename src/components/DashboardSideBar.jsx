import React from 'react';
import { CiUser } from 'react-icons/ci';
import { MdHome, MdLogout, MdSettings, MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';

const DashboardSideBar = ({ isOpen, setIsOpen }) => {
  // Setup for logout functionality
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <>
      {/* Dark overlay behind sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)} // Close sidebar on overlay click
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-blue-950 text-white shadow-2xl z-50 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0 overflow-hidden'
        }`}
      >
        {/* Sidebar content */}
        <div className="h-full flex flex-col justify-between relative">
          {/* Top: User Icon and nav */}
          <div>
            <div className="flex flex-col items-center py-6">
              <div className="bg-white rounded-full p-3">
                <CiUser className="text-blue-950" size={30} />
              </div>
              <h2 className="mt-2 text-sm font-semibold">Welcome</h2>
            </div>
            
            <nav className="mt-6">
              <ul className="flex flex-col gap-2 px-4">
                <li className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-800 cursor-pointer transition">
                  <MdHome size={20} />
                  <Link to='/dashboard'>Home</Link>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-800 cursor-pointer transition">
                  <FaMoneyCheckAlt size={20} />
                  <Link to='/dashboard/loan'>Loan</Link>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-800 cursor-pointer transition">
                  <MdSettings size={20} />
                  <Link to="/dashboard/settings">Settings</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Bottom: Logout and Toggle */}
          <div className="px-4 py-6 flex flex-col gap-4 relative bottom-20">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 rounded-md hover:bg-red-700 bg-red-600 cursor-pointer transition w-full text-left"
            >
              <MdLogout size={20} />
              <span>Logout</span>
            </button>
            
            {/* Toggle Button (on sidebar edge) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-950 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
            >
              {isOpen ? <MdOutlineArrowBackIosNew /> : <MdOutlineArrowForwardIos />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSideBar;