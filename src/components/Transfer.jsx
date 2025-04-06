import React, { useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';

const Transfer = () => {
  // State to manage form inputs
  const [bankTransfer, setBankTransfer] = useState({
    bankName: '',
    bankNumber: '',
    amount: '',
  });
  
  const [tradeHubTransfer, setTradeHubTransfer] = useState({
    accountId: '',
    amount: '',
  });

  const [accountBalance, setAccountBalance] = useState(5000); // Dummy account balance for example

  // Handle form input change
  const handleBankChange = (e) => {
    const { name, value } = e.target;
    setBankTransfer({
      ...bankTransfer,
      [name]: value,
    });
  };

  const handleTradeHubChange = (e) => {
    const { name, value } = e.target;
    setTradeHubTransfer({
      ...tradeHubTransfer,
      [name]: value,
    });
  };

  // Handle bank transfer form submission
  const handleBankSubmit = (e) => {
    e.preventDefault();
    // Handle logic for sending money via bank transfer
    alert(`Transferred ${bankTransfer.amount} via Bank Transfer to ${bankTransfer.bankName}`);
  };

  // Handle TradeHub transfer form submission
  const handleTradeHubSubmit = (e) => {
    e.preventDefault();
    // Handle logic for sending money to TradeHub user
    alert(`Transferred ${tradeHubTransfer.amount} to TradeHub user: ${tradeHubTransfer.accountId}`);
  };

  return (
    <div className='bg-white h-full w-full'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className='p-6'>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-blue-950">Transfer Money</h1>
          {/* Displaying Account Balance */}
          <div className="text-lg font-semibold text-blue-950">Balance: ${accountBalance}</div>
        </div>

        {/* Normal Bank Transfer Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 mb-6">
          <h2 className="text-xl font-semibold text-blue-950 mb-4">Bank Transfer</h2>
          <form onSubmit={handleBankSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="bankName" className="text-sm font-medium text-gray-700">Bank Name</label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={bankTransfer.bankName}
                  onChange={handleBankChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="bankNumber" className="text-sm font-medium text-gray-700">Bank Number</label>
                <input
                  type="text"
                  id="bankNumber"
                  name="bankNumber"
                  value={bankTransfer.bankNumber}
                  onChange={handleBankChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="amount" className="text-sm font-medium text-gray-700">Amount</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={bankTransfer.amount}
                  onChange={handleBankChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <button type="submit" className="mt-4 bg-blue-950 text-white py-2 px-6 rounded-lg hover:bg-blue-800">
                Transfer via Bank
              </button>
            </div>
          </form>
        </div>

        {/* Send to TradeHub User Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-2">
          <h2 className="text-xl font-semibold text-blue-950 mb-4">Send to TradeHub User</h2>
          <form onSubmit={handleTradeHubSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="accountId" className="text-sm font-medium text-gray-700">TradeHub Account ID</label>
                <input
                  type="text"
                  id="accountId"
                  name="accountId"
                  value={tradeHubTransfer.accountId}
                  onChange={handleTradeHubChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="amount" className="text-sm font-medium text-gray-700">Amount</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={tradeHubTransfer.amount}
                  onChange={handleTradeHubChange}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <button type="submit" className="mt-4 bg-blue-950 text-white py-2 px-6 rounded-lg hover:bg-blue-800">
                Transfer to TradeHub User
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Transfer;
