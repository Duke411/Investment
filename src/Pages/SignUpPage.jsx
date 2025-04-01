import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';

const SignUpPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-up form submitted');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')` }}>
        
        <motion.div 
          className="bg-white shadow-xl rounded-lg w-full max-w-md p-8" 
          ref={ref} 
          initial="hidden" 
          animate={controls} 
          variants={variants}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-700 text-sm mb-2">Full Name</label>
              <input 
                type="text" 
                id="fullname" 
                placeholder="Enter your full name" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
                required 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
                required 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
                required 
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm mb-2">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirm your password" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
                required 
              />
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Sign Up
            </button>
            <p>Already have account ? Login</p>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SignUpPage;
