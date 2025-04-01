import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Google Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>

      <header className="bg-gray-800 shadow-md fixed w-full top-0 z-50 font-['Roboto']">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">Tradehub</Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-300">Home</Link>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300">About Us</a>
            <a href="#plan" className="text-white hover:text-blue-400 transition-colors duration-300">Plan</a>
            <a href='#faqs' className="text-white hover:text-blue-400 transition-colors duration-300">FAQs</a>
            <Link className="text-white hover:text-blue-400 transition-colors duration-300">Contact</Link>
            <Link to="/login" className="text-white hover:text-blue-400 transition-colors duration-300">
              <button className="flex items-center space-x-1 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Log In</span>
              </button>
            </Link>
            <Link to="/signup" className="ml-2">
              <button className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                <span>Sign Up</span>
              </button>
            </Link>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} 
            />
            <span 
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} 
            />
            <span 
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} 
            />
          </button>

          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
              isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleMenu}
          />

          {/* Mobile Menu */}
          <div 
            className={`fixed top-0 right-0 w-64 h-full bg-gray-900 z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-700">
              <Link to="/" className="text-xl font-bold text-white">Tradehub</Link>
              <button 
                className="text-2xl text-white focus:outline-none" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <ul className="p-4 flex flex-col space-y-4">
              <Link to="/" className="py-2 border-b border-gray-700 text-white hover:text-blue-400 transition-colors duration-300">Home</Link>
              <a href='#about' className="py-2 border-b border-gray-700 text-white hover:text-blue-400 transition-colors duration-300">About Us</a>
              <a href="#plan" className="py-2 border-b border-gray-700 text-white hover:text-blue-400 transition-colors duration-300">Plan</a>
              <a href="#faqs" className="py-2 border-b border-gray-700 text-white hover:text-blue-400 transition-colors duration-300">FAQs</a>
              <li className="py-2 border-b border-gray-700 text-white hover:text-blue-400 transition-colors duration-300">Contact</li>
              <Link to="/login" className="py-2 border-b border-gray-700 text-white hover:text-blue-400 transition-colors duration-300">
                <button className="flex items-center space-x-2 w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>Log In</span>
                </button>
              </Link>
              <Link to="/signup" className="mt-4">
                <button className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  <span>Sign Up</span>
                </button>
              </Link>
            </ul>
          </div>
        </nav>
        <Outlet/>
      </header>
      
      {/* Add spacing to prevent content from being hidden behind fixed navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;