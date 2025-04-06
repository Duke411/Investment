import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';

const Recieve = () => {
  // Dummy Account ID
  const accountId = "TRADEHUB1234567890";

  return (
    <div className='bg-white h-full w-full'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className='p-6'>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border-2">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">Receive Money from TradeHub Users</h2>

          <p className="text-gray-700 mb-4">
            Use the following Account ID to receive money from other TradeHub users. Please ensure the following rules are followed when transferring money:
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Account ID</h3>
            <p className="text-lg text-blue-950 font-bold">{accountId}</p>

            <h3 className="text-xl font-semibold">Transfer Rules</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Only use the Account ID provided above for receiving transfers.</li>
              <li>Ensure the sender enters the correct Account ID to avoid delays or issues.</li>
              <li>Transfers made to the wrong Account ID cannot be recovered.</li>
              <li>Transactions are processed instantly, but depending on the sender's platform, there may be small delays.</li>
              <li>If you encounter any issues, contact our support team immediately.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recieve;
