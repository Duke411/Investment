import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardLayout from './Dashboard/DashboardLayout';
import Loan from './Dashboard/Loan';
import Settings from './Dashboard/Settings';
import Profile from './Dashboard/Profile';
import Transfer from './components/Transfer';
import Fundaccount from './components/Fundaccount';
import Receive from './components/Recieve';
import Admin from './Dashboard/Admin';

// The absolute simplest protection wrapper
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  
  // Force console log the entire auth state
  const authState = useSelector(state => state);
  console.log('ENTIRE REDUX STATE:', authState);
  console.log('AUTH STATE:', authState.auth);
  console.log('USER INFO:', userInfo);
  
  // Check localStorage directly as a fallback
  useEffect(() => {
    const localStorageUser = localStorage.getItem('userInfo');
    console.log('localStorage userInfo:', localStorageUser);
    
    // If no userInfo in Redux or localStorage, redirect
    if (!userInfo && !localStorageUser) {
      console.log('No authentication found, redirecting to login');
      navigate('/login');
    }
  }, [userInfo, navigate]);
  
  // Super simple check - if no userInfo, redirect to login
  if (!userInfo) {
    console.log('No userInfo in Redux state, showing loading');
    return <div>Loading...</div>; // Show loading while useEffect triggers navigation
  }
  
  return children;
};

// Admin Route - very simple version
const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const isAdmin = userInfo?.data?.user?.role === 'admin';

  useEffect(() => {
    if (!isAdmin) {
      console.log('Not admin, redirecting');
      navigate('/dashboard');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) {
    return <div>Checking permissions...</div>;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><HomePage /></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Dashboard Routes - Using the simplest possible protection */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} />
        <Route path="/dashboard/loan" element={<ProtectedRoute><Loan /></ProtectedRoute>} />
        <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/dashboard/transfer" element={<ProtectedRoute><Transfer /></ProtectedRoute>} />
        <Route path="/dashboard/fundaccount" element={<ProtectedRoute><Fundaccount /></ProtectedRoute>} />
        <Route path="/dashboard/receive" element={<ProtectedRoute><Receive /></ProtectedRoute>} />

        {/* Admin Route */}
        <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />

        {/* Catch-all route */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;