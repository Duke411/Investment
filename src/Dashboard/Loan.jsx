import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';

const Loan = () => {
  return (
    <div className='bg-white h-full w-full'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className='p-6'>
        {/* Loan Information Section */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border-2">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">Loan Terms & Conditions</h2>

          <p className="text-lg text-gray-700 mb-6">
            We provide flexible loan options to help you achieve your financial goals. Please carefully read the terms and conditions below:
          </p>

          {/* Terms and Conditions List */}
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Loan Amount: $5,000 - $50,000</li>
            <li>Interest Rate: 5% annually</li>
            <li>Repayment Period: 12 months to 36 months</li>
            <li>Minimum Credit Score: 650</li>
            <li>Approval Time: 2-3 business days</li>
            <li>Late Payment Fee: $50 per missed payment</li>
            <li>Required Documentation: Proof of income, Government ID, Proof of address</li>
            <li>Early Repayment Fee: No fee for early repayment</li>
          </ul>

          <p className="mt-6 text-lg text-gray-700">
            By applying for a loan, you agree to the above terms. If you have any questions, feel free to contact our support team.
          </p>

          {/* Apply for Loan Button */}
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-950 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-800 transition duration-300">
              Apply for Loan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Loan;
