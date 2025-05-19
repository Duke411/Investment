// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRegisterMutation } from '../slices/userApiSlice';
// import { setCredentials } from '../slices/authSlice';
// import Navbar from '../components/Navbar';

// const SignUpPage = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [register, { isLoading }] = useRegisterMutation();
//   const { userInfo } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   useEffect(() => {
//     if (userInfo) {
//       navigate('/dashboard');
//     }
//   }, [userInfo, navigate]);

//   useEffect(() => {
//     if (inView) controls.start({ opacity: 1, y: 0 });
//   }, [inView, controls]);

//   const variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     if (formData.password.length < 6) {
//       toast.error('Password must be at least 6 characters');
//       return;
//     }

//     try {
//       const res = await register({
//         name: formData.fullName,
//         email: formData.email,
//         password: formData.password
//       }).unwrap();

//       dispatch(setCredentials({...res}));
//       toast.success('Signup successful! Redirecting to dashboard...');

//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 2000);
//     } catch (err) {
//       const errorMessage = err?.data?.message || err.error || 'Signup failed';
//       toast.error(errorMessage);
//       console.error('Signup error:', errorMessage);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
//       <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
//         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')` }}>

//         <motion.div
//           className="bg-white shadow-xl rounded-lg w-full max-w-md p-8"
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={variants}
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="fullName" className="block text-gray-700 text-sm mb-2">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 placeholder="Enter your full name"
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 required
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="confirmPassword" className="block text-gray-700 text-sm mb-2">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 placeholder="Confirm your password"
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 required
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex justify-center items-center"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Processing...
//                 </>
//               ) : 'Sign Up'}
//             </button>

//             <p className="mt-4 text-center text-gray-600">
//               Already have an account? {' '}
//               <span
//                 className="text-blue-600 cursor-pointer hover:underline"
//                 onClick={() => navigate('/login')}
//               >
//                 Login
//               </span>
//             </p>
//           </form>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default SignUpPage;

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import Navbar from "../components/Navbar";

const SignUpPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  // Extract referral code from URL query
  const query = new URLSearchParams(location.search);
  const initialReferralCode = query.get("ref") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: initialReferralCode,
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      // Send the data with the correct field names expected by the backend
      const res = await register({
        fullName: formData.fullName, // Changed from 'name' to 'fullName'
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword, // Added this field
        referralCode: formData.referralCode,
      }).unwrap();

      dispatch(setCredentials({ ...res }));
      toast.success("Signup successful! Redirecting to dashboard...");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.log("Error details:", err); // More detailed error logging
      const errorMessage = err?.data?.message || err.error || "Signup failed";
      toast.error(errorMessage);
      console.error("Signup error:", errorMessage);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <motion.div
          className="bg-white shadow-xl rounded-lg w-full max-w-md p-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="referralCode"
                className="block text-gray-700 text-sm mb-2"
              >
                Referral Code (Optional)
              </label>
              <input
                type="text"
                id="referralCode"
                placeholder="Enter referral code"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.referralCode}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Sign Up"
              )}
            </button>

            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SignUpPage;
