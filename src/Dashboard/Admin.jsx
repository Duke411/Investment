import React, { useState } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';

const Admin = () => {
  const [users, setUsers] = useState([
    { id: 1, fullname: 'John Doe', email: 'john@example.com', accountBalance: 5000, profit: 1200, loss: 300 },
    { id: 2, fullname: 'Jane Smith', email: 'jane@example.com', accountBalance: 8500, profit: 2100, loss: 450 },
    { id: 3, fullname: 'Robert Johnson', email: 'robert@example.com', accountBalance: 12000, profit: 3600, loss: 900 },
    { id: 4, fullname: 'Sarah Williams', email: 'sarah@example.com', accountBalance: 3700, profit: 820, loss: 150 },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    accountBalance: 0,
    profit: 0,
    loss: 0
  });

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({
      fullname: user.fullname,
      email: user.email,
      accountBalance: user.accountBalance,
      profit: user.profit,
      loss: user.loss
    });
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'fullname' || name === 'email' ? value : Number(value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user =>
      user.id === selectedUser.id ? { ...user, ...formData } : user
    );
    setUsers(updatedUsers);
    setIsEditing(false);
    setSelectedUser(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedUser(null);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <DashboardNavbar />
      <div className="flex flex-1 flex-col md:flex-row">
        <DashboardSideBar />
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Welcome, Admin</h1>
            <p className="text-gray-600 text-sm">Manage your users and their accounts</p>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Users List</h2>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Full Name</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Email</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Account Balance</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Profit</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Loss</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className={selectedUser?.id === user.id ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                      <td className="px-4 py-3 whitespace-nowrap">{user.fullname}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-gray-600">{user.email}</td>
                      <td className="px-4 py-3 whitespace-nowrap">${user.accountBalance.toLocaleString()}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-green-600">${user.profit.toLocaleString()}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-red-600">${user.loss.toLocaleString()}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <button
                          onClick={() => handleEditClick(user)}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edit Form */}
          {isEditing && selectedUser && (
            <div className="mt-6 bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-4">Edit User: {selectedUser.fullname}</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Balance</label>
                    <input
                      type="number"
                      name="accountBalance"
                      value={formData.accountBalance}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profit</label>
                    <input
                      type="number"
                      name="profit"
                      value={formData.profit}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loss</label>
                    <input
                      type="number"
                      name="loss"
                      value={formData.loss}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
