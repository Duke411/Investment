import React, { useEffect } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaMoneyCheckAlt, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboardLayout = () => {
  // Load TradingView widget script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        "autosize": true,
        "symbol": "NASDAQ:AAPL", // You can change this symbol
        "interval": "D", // Daily interval
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
      document.body.removeChild(script); // Clean up the script when the component unmounts
    };
  }, []);

  return (
    <div className='bg-white h-full w-full'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className="p-4 flex flex-col lg:flex-row gap-6">
        <h1 className='font-semibold'>Welcome, Emmanuel</h1>
        
        {/* Box 1 - Account Balance */}
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
          <h2 className="text-xl font-semibold text-blue-950">Account Balance</h2>
          <p className="mt-3 text-grey-700 font-semibold text-2xl">$1200</p>

          {/* Buttons below Account Balance */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* Transfer Button */}
            <Link to="/Transfer" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
              <FaRegArrowAltCircleRight size={20} className="mr-2" />
              Transfer
            </Link>

            {/* Receive Button */}
            <Link to="/Recieve" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
              <FaRegArrowAltCircleLeft size={20} className="mr-2" />
              Receive
            </Link>

            {/* Fund Account Button */}
            <Link to="/Fundaccount" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
              <FaMoneyCheckAlt size={20} className="mr-2" />
              Fund Account
            </Link>

            {/* Loan Button */}
            <Link to="/Loan" className="flex items-center justify-center bg-blue-950 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition">
              <FaHome size={20} className="mr-2" />
              Loan
            </Link>
          </div>
        </div>

        {/* Box 2 - Estimated Profit */}
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
          <h2 className="text-xl font-semibold text-blue-950">Estimated Profit</h2>
          <p className="mt-3 text-green-700 font-semibold text-2xl">$1200</p>
        </div>

        {/* Box 3 - Estimated Loss */}
        <div className="bg-white p-6 rounded-lg shadow-xl border-2 flex-1">
          <h2 className="text-xl font-semibold text-blue-950">Estimated Loss</h2>
          <p className="mt-3 text-red-700 font-semibold text-2xl">$1200</p>
        </div>
      </main>

      {/* Trading View Section */}
      <div className="p-4 mt-6">
        <h2 className="text-2xl font-semibold text-blue-950">Trading View</h2>
        <div className="mt-4" id="tradingview_widget_container"></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
