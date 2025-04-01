import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';

const LoginPage = () => {
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
    console.log('Form submitted');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')` }}>
        
        <motion.div 
          className="bg-white shadow-xl rounded-lg w-full max-w-md p-8" 
          ref={ref} 
          initial="hidden" 
          animate={controls} 
          variants={variants}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
          
          <form onSubmit={handleSubmit}>
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
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" 
                required 
              />
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Login
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-blue-600 hover:underline text-sm">Forgot Password?</a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;