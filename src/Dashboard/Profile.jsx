import React from 'react';
import { useSelector } from 'react-redux';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const fullName = userInfo?.data?.user?.fullName || 'User';
  const accountBalance = userInfo?.data?.user?.accountBalance || 0;
  const totalInvestment = userInfo?.data?.user?.totalInvestment || 0;
  const totalProfit = userInfo?.data?.user?.totalProfit || 0;
  const totalLoss = userInfo?.data?.user?.totalLoss || 0;
  const accountId = userInfo?.data?.user?.accountId || 'N/A';

  const userData = {
    fullName,
    accountBalance: `$${accountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`,
    totalInvestment: `$${totalInvestment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`,
    totalProfit: `$${totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`,
    totalLoss: `$${totalLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`,
    accountId
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className='p-6'>
        <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300'>
          <h2 className='text-3xl font-semibold text-blue-950 mb-8 text-center'>
            Profile Information
          </h2>

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
              <span className='font-medium text-gray-700 text-lg'>Total Profit:</span>
              <span className='text-gray-900 text-lg'>{userData.totalProfit}</span>
            </div>

            <div className='flex justify-between bg-gray-50 p-4 rounded-lg'>
              <span className='font-medium text-gray-700 text-lg'>Total Loss:</span>
              <span className='text-gray-900 text-lg'>{userData.totalLoss}</span>
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