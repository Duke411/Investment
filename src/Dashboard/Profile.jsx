import React, { useState, useEffect } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';

const Profile = () => {
  // Dummy data
  const [userData, setUserData] = useState({
    fullName: 'Emmanuel Johnson',
    accountBalance: '12,345.67 USD',
    totalInvestment: '150,000.00 USD',
    totalWithdraw: '45,000.00 USD',
    accountId: 'AB1234567890XYZ'
  });

  // Simulate data fetching
  useEffect(() => {
    // You can remove this useEffect block if you're fetching data from an API
    const fetchUserData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setUserData({
            fullName: 'Emmanuel Johnson',
            accountBalance: '12,345.67 USD',
            totalInvestment: '150,000.00 USD',
            totalWithdraw: '45,000.00 USD',
            accountId: 'AB1234567890XYZ'
          });
        }, 1000);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className='p-6'>
        <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300'>
          <h2 className='text-3xl font-semibold text-blue-950 mb-8 text-center'>
            Profile Information
          </h2>

          {/* User Information Display */}
          <div className='space-y-6'>
            <div className='flex justify-between bg-gray-50 p-4 rounded-lg'>
              <span className='font-medium text-gray-700 text-lg'>Full Name:</span>
              <span className='text-gray-900 text-lg'>{userData.fullName}</span>
            </div>

            <div className='flex justify-between bg-gray-50 p-4 rounded-lg'>
              <span className='font-medium text-gray-700 text-lg'>Account Balance:</span>
              <span className='text-gray-900 text-lg'>{userData.accountBalance}</span>
            </div>

            <div className='flex justify-between bg-gray-50 p-4 rounded-lg'>
              <span className='font-medium text-gray-700 text-lg'>Total Investment:</span>
              <span className='text-gray-900 text-lg'>{userData.totalInvestment}</span>
            </div>

            <div className='flex justify-between bg-gray-50 p-4 rounded-lg'>
              <span className='font-medium text-gray-700 text-lg'>Total Withdraw:</span>
              <span className='text-gray-900 text-lg'>{userData.totalWithdraw}</span>
            </div>

            <div className='flex justify-between bg-gray-50 p-4 rounded-lg'>
              <span className='font-medium text-gray-700 text-lg'>Account ID:</span>
              <span className='text-gray-900 text-lg'>{userData.accountId}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
