// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import DashboardNavbar from '../components/DashboardNavbar';
// import DashboardSideBar from '../components/DashboardSideBar';
// import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaMoneyCheckAlt, FaHome } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const DashboardLayout = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const fullName = userInfo?.data?.user?.fullName || 'User';
//   const accountBalance = userInfo?.data?.user?.accountBalance || 0;
//   const totalProfit = userInfo?.data?.user?.totalProfit || 0;
//   const totalLoss = userInfo?.data?.user?.totalLoss || 0;

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/tv.js';
//     script.async = true;
//     script.onload = () => {
//       new window.TradingView.widget({
//         "autosize": true,
//         "symbol": "NASDAQ:AAPL",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "light",
//         "style": "1",
//         "locale": "en",
//         "toolbar_bg": "#f1f3f6",
//         "enable_publishing": false,
//         "withdateranges": true,
//         "hide_side_toolbar": false,
//         "allow_symbol_change": true,
//         "details": true,
//         "container_id": "tradingview_widget_container"
//       });
//     };
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className='bg-white h-full w-full'>
//       <DashboardNavbar />
//       <DashboardSideBar />
//       <main className="p-4 flex flex-col lg:flex-row gap-6">
//         <h1 className='font-semibold'>Welcome, {fullName}</h1>
        
//         <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
//           <h2 className="text-xl font-semibold text-blue-950">Account Balance</h2>
//           <p className="mt-3 text-grey-700 font-semibold text-2xl">${accountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

//           <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
//             <Link to="/dashboard/transfer" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
//               <FaRegArrowAltCircleRight size={20} className="mr-2" />
//               Transfer
//             </Link>

//             <Link to="/dashboard/receive" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
//               <FaRegArrowAltCircleLeft size={20} className="mr-2" />
//               Receive
//             </Link>

//             <Link to="/dashboard/fundaccount" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
//               <FaMoneyCheckAlt size={20} className="mr-2" />
//               Fund Account
//             </Link>

//             <Link to="/dashboard/loan" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
//               <FaHome size={20} className="mr-2" />
//               Loan
//             </Link>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
//           <h2 className="text-xl font-semibold text-blue-950">Estimated Profit</h2>
//           <p className="mt-3 text-green-700 font-semibold text-2xl">${totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
//           <h2 className="text-xl font-semibold text-blue-950">Estimated Loss</h2>
//           <p className="mt-3 text-red-700 font-semibold text-2xl">${totalLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
//         </div>
       
//       </main>

//       <div className="p-4 mt-6">
//         <h2 className="text-2xl font-semibold text-blue-950">Trading View</h2>
//         <div className="mt-4" id="tradingview_widget_container"></div>
//       </div>
      
//     </div>
    
//   );
// };

// export default DashboardLayout;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaMoneyCheckAlt, FaHome, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const DashboardLayout = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const fullName = userInfo?.data?.user?.fullName || 'User';
  const accountBalance = userInfo?.data?.user?.accountBalance || 0;
  const totalProfit = userInfo?.data?.user?.totalProfit || 0;
  const totalLoss = userInfo?.data?.user?.totalLoss || 0;
  const referralCode = userInfo?.data?.user?.referralCode || '';

  const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;

  const copyReferralLink = () => {
    navigator.clipboard.write(referralLink);
    toast.success('Referral link copied to clipboard!');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "container_id": "tradingview_widget_container"
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='bg-white h-full w-full'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className="p-4 flex flex-col lg:flex-row gap-6">
        <h1 className='font-semibold'>Welcome, {fullName}</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
          <h2 className="text-xl font-semibold text-blue-950">Account Balance</h2>
          <p className="mt-3 text-grey-700 font-semibold text-2xl">${accountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Link to="/dashboard/transfer" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
              <FaRegArrowAltCircleRight size={20} className="mr-2" />
              Transfer
            </Link>

            <Link to="/dashboard/receive" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
              <FaRegArrowAltCircleLeft size={20} className="mr-2" />
              Receive
            </Link>

            <Link to="/dashboard/fundaccount" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
              <FaMoneyCheckAlt size={20} className="mr-2" />
              Fund Account
            </Link>

            <Link to="/dashboard/loan" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
              <FaHome size={20} className="mr-2" />
              Loan
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
          <h2 className="text-xl font-semibold text-blue-950">Estimated Profit</h2>
          <p className="mt-3 text-green-700 font-semibold text-2xl">${totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
          <h2 className="text-xl font-semibold text-blue-950">Estimated Loss</h2>
          <p className="mt-3 text-red-700 font-semibold text-2xl">${totalLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
          <h2 className="text-xl font-semibold text-blue-950">Invite Friends</h2>
          <p className="mt-3 text-gray-700">Share your referral link and earn 10% of your friend's funding!</p>
          <div className="mt-4">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
            <button
              onClick={copyReferralLink}
              className="mt-2 flex items-center justify-center bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition"
            >
              <FaLink size={20} className="mr-2" />
              Copy Referral Link
            </button>
          </div>
        </div>
      </main>

      <div className="p-4 mt-6">
        <h2 className="text-2xl font-semibold text-blue-950">Trading View</h2>
        <div className="mt-4" id="tradingview_widget_container"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;