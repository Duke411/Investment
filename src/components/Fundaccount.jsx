import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';
import { MdContactMail } from 'react-icons/md'; // Importing the contact icon

const Fundaccount = () => {
  return (
    <div className="bg-white h-full w-full">
      <DashboardNavbar />
      <DashboardSideBar />
      <main className="p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 mb-6">
          <h1 className="text-2xl font-semibold text-blue-950 mb-4">Fund Your Account</h1>

          <p className="text-lg text-gray-700 mb-4">
            To fully unlock the potential of your trading account, it’s essential to ensure that your account is properly funded. A well-funded account gives you the flexibility to execute trades, take advantage of market opportunities, and manage your investments efficiently. 
            By reaching out to your account manager, you can get personalized assistance to fund your account through the most convenient and secure methods.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Your account manager is your primary point of contact for all funding-related queries. They are experts in guiding you through the funding process, ensuring that the transaction is seamless and that your funds are deposited safely into your trading account. 
            Whether you are looking to fund through a bank transfer, credit card, or other payment methods, your account manager is here to assist you every step of the way.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Taking the next step towards funding your account will open doors to greater trading possibilities and give you full access to all the features our platform offers. 
            Don’t hesitate to contact your account manager today for a smooth and hassle-free funding experience.
          </p>

          {/* Contact Account Manager Button */}
          <div className="mt-4">
            <a
              href="mailto:accountmanager@example.com" // Replace with actual contact email or link
              className="flex items-center justify-center bg-blue-950 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition"
            >
              <MdContactMail size={20} className="mr-2" />
              Contact Account Manager
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fundaccount;
