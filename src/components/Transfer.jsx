import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';

const Transfer = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const accountBalance = userInfo?.data?.user?.accountBalance || 0;

  const [bankTransfer, setBankTransfer] = useState({
    bankName: '',
    bankNumber: '',
    amount: '',
  });
  
  const [tradeHubTransfer, setTradeHubTransfer] = useState({
    accountId: '',
    amount: '',
  });

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

  const handleBankSubmit = (e) => {
    e.preventDefault();
    alert(`Transferred ${bankTransfer.amount} via Bank Transfer to ${bankTransfer.bankName}`);
  };

  const handleTradeHubSubmit = (e) => {
    e.preventDefault();
    alert(`Transferred ${tradeHubTransfer.amount} to TradeHub user: ${tradeHubTransfer.accountId}`);
  };

  return (
    <div className='bg-white h-full w-full'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className='p-6'>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-blue-950">Transfer Money</h1>
          <div className="text-lg font-semibold text-blue-950">
            Balance: ${accountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

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

        {/* <div className="bg-white p-6 rounded-lg shadow-lg border-2">
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
        </div> */}
      </main>
    </div>
  );
};

export default Transfer;