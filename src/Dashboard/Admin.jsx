// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import DashboardNavbar from '../components/DashboardNavbar';
// import DashboardSideBar from '../components/DashboardSideBar';
// import {
//   useGetAllUsersQuery,
//   useUpdateUserProfileMutation,
//   useDeleteUserMutation
// } from '../slices/userApiSlice';

// const Admin = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const isAdmin = userInfo?.data?.user?.role === 'admin';

//   const { data, isLoading, error, refetch } = useGetAllUsersQuery();
//   console.log('API data:', data); // Debug data structure
//   const users = data?.data?.users || []; // Access nested users array
//   const [updateUserProfile, { isLoading: isUpdating }] = useUpdateUserProfileMutation();
//   const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     accountBalance: 0,
//     totalProfit: 0,
//     totalLoss: 0
//   });

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setFormData({
//       fullName: user.fullName,
//       email: user.email,
//       accountBalance: user.accountBalance,
//       totalProfit: user.totalProfit,
//       totalLoss: user.totalLoss
//     });
//     setIsEditing(true);
//   };

//   const handleDeleteClick = async (userId) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       try {
//         await deleteUser(userId).unwrap();
//         toast.success('User deleted successfully');
//         refetch();
//       } catch (err) {
//         toast.error(err?.data?.message || 'Failed to delete user');
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: name === 'fullName' || name === 'email' ? value : Number(value)
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile({
//         userId: selectedUser._id,
//         ...formData
//       }).unwrap();
//       toast.success('User profile updated successfully');
//       setIsEditing(false);
//       setSelectedUser(null);
//       refetch();
//     } catch (err) {
//       toast.error(err?.data?.message || 'Failed to update user profile');
//     }
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setSelectedUser(null);
//   };

//   if (!isAdmin) {
//     return (
//       <div className="bg-white min-h-screen flex flex-col">
//         <DashboardNavbar />
//         <DashboardSideBar />
//         <main className="flex-1 p-4 sm:p-6">
//           <h1 className="text-2xl font-semibold text-red-600">Access Denied</h1>
//           <p className="text-gray-600">You do not have permission to view this page.</p>
//         </main>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div className="bg-white min-h-screen flex flex-col">
//         <DashboardNavbar />
//         <DashboardSideBar />
//         <main className="flex-1 p-4 sm:p-6">
//           <p>Loading users...</p>
//         </main>
//       </div>
//     );
//   }

//   if (error) {
//     console.error('Frontend error details:', error);
//     return (
//       <div className="bg-white min-h-screen flex flex-col">
//         <DashboardNavbar />
//         <DashboardSideBar />
//         <main className="flex-1 p-4 sm:p-6">
//           <div className="text-red-600">
//             <p>Error loading users: {error?.data?.message || error?.error || 'Unknown error'}</p>
//             <p>Status: {error?.status}</p>
//             <button
//               onClick={refetch}
//               className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
//             >
//               Retry
//             </button>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       <DashboardNavbar />
//       <div className="flex flex-1 flex-col md:flex-row">
//         <DashboardSideBar />
//         <main className="flex-1 p-4 sm:p-6 overflow-auto">
//           <div className="mb-6">
//             <h1 className="text-2xl font-semibold">Welcome, Admin</h1>
//             <p className="text-gray-600 text-sm">Manage your users and their accounts</p>
//           </div>

//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
//               <h2 className="text-lg font-semibold text-gray-800">Users List</h2>
//             </div>
//             <div className="w-full overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200 text-sm">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Full Name</th>
//                     <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Email</th>
//                     <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Account Balance</th>
//                     <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Profit</th>
//                     <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Loss</th>
//                     <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {users.length === 0 ? (
//                     <tr>
//                       <td colSpan="6" className="px-4 py-3 text-center text-gray-600">
//                         No users found.
//                       </td>
//                     </tr>
//                   ) : (
//                     users.map((user) => (
//                       <tr key={user._id} className={selectedUser?._id === user._id ? 'bg-blue-50' : 'hover:bg-gray-50'}>
//                         <td className="px-4 py-3 whitespace-nowrap">{user.fullName}</td>
//                         <td className="px-4 py-3 whitespace-nowrap text-gray-600">{user.email}</td>
//                         <td className="px-4 py-3 whitespace-nowrap">${user.accountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
//                         <td className="px-4 py-3 whitespace-nowrap text-green-600">${user.totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
//                         <td className="px-4 py-3 whitespace-nowrap text-red-600">${user.totalLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
//                         <td className="px-4 py-3 whitespace-nowrap space-x-2">
//                           <button
//                             onClick={() => handleEditClick(user)}
//                             className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
//                             disabled={isUpdating || isDeleting}
//                           >
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleDeleteClick(user._id)}
//                             className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
//                             disabled={isUpdating || isDeleting}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {isEditing && selectedUser && (
//             <div className="mt-6 bg-white rounded-lg shadow p-4 sm:p-6">
//               <h3 className="text-lg font-semibold mb-4">Edit User: {selectedUser.fullName}</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Account Balance</label>
//                     <input
//                       type="number"
//                       name="accountBalance"
//                       value={formData.accountBalance}
//                       onChange={handleInputChange}
//                       className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                       step="0.01"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Profit</label>
//                     <input
//                       type="number"
//                       name="totalProfit"
//                       value={formData.totalProfit}
//                       onChange={handleInputChange}
//                       className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                       step="0.01"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Loss</label>
//                     <input
//                       type="number"
//                       name="totalLoss"
//                       value={formData.totalLoss}
//                       onChange={handleInputChange}
//                       className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                       step="0.01"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-6 flex flex-wrap gap-3">
//                   <button
//                     type="submit"
//                     className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
//                     disabled={isUpdating}
//                   >
//                     {isUpdating ? 'Saving...' : 'Save Changes'}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
//                     disabled={isUpdating}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Admin;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';
import {
  useGetAllUsersQuery,
  useUpdateUserProfileMutation,
  useDeleteUserMutation,
  useCreditReferrerMutation
} from '../slices/userApiSlice';

const Admin = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const isAdmin = userInfo?.data?.user?.role === 'admin';

  const { data, isLoading, error, refetch } = useGetAllUsersQuery();
  const users = data?.data?.users || [];
  const [updateUserProfile, { isLoading: isUpdating }] = useUpdateUserProfileMutation();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();
  const [creditReferrer, { isLoading: isCrediting }] = useCreditReferrerMutation();

  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    accountBalance: 0,
    totalProfit: 0,
    totalLoss: 0
  });
  const [fundingAmount, setFundingAmount] = useState('');

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({
      fullName: user.fullName,
      email: user.email,
      accountBalance: user.accountBalance,
      totalProfit: user.totalProfit,
      totalLoss: user.totalLoss
    });
    setIsEditing(true);
  };

  const handleDeleteClick = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId).unwrap();
        toast.success('User deleted successfully');
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || 'Failed to delete user');
      }
    }
  };

  const handleCreditReferrer = async (user) => {
    if (!user.referredBy) {
      toast.error('This user was not referred');
      return;
    }
    if (!fundingAmount || fundingAmount <= 0) {
      toast.error('Please enter a valid funding amount');
      return;
    }
    try {
      await creditReferrer({
        userId: user._id,
        fundingAmount: Number(fundingAmount)
      }).unwrap();
      toast.success('Referrer credited successfully');
      setFundingAmount('');
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to credit referrer');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'fullName' || name === 'email' ? value : Number(value)
    });
  };

  const handleFundingChange = (e) => {
    setFundingAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({
        userId: selectedUser._id,
        ...formData
      }).unwrap();
      toast.success('User profile updated successfully');
      setIsEditing(false);
      setSelectedUser(null);
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to update user profile');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedUser(null);
  };

  if (!isAdmin) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <DashboardNavbar />
        <DashboardSideBar />
        <main className="flex-1 p-4 sm:p-6">
          <h1 className="text-2xl font-semibold text-red-600">Access Denied</h1>
          <p className="text-gray-600">You do not have permission to view this page.</p>
        </main>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <DashboardNavbar />
        <DashboardSideBar />
        <main className="flex-1 p-4 sm:p-6">
          <p>Loading users...</p>
        </main>
      </div>
    );
  }

  if (error) {
    console.error('Frontend error details:', error);
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <DashboardNavbar />
        <DashboardSideBar />
        <main className="flex-1 p-4 sm:p-6">
          <div className="text-red-600">
            <p>Error loading users: {error?.data?.message || error?.error || 'Unknown error'}</p>
            <p>Status: {error?.status}</p>
            <button
              onClick={refetch}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
            >
              Retry
            </button>
          </div>
        </main>
      </div>
    );
  }

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
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Referral Code</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Referred By</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="px-4 py-3 text-center text-gray-600">
                        No users found.
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user._id} className={selectedUser?._id === user._id ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                        <td className="px-4 py-3 whitespace-nowrap">{user.fullName}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-gray-600">{user.email}</td>
                        <td className="px-4 py-3 whitespace-nowrap">${user.accountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-green-600">${user.totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-red-600">${user.totalLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{user.referralCode || '-'}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{user.referredBy || '-'}</td>
                        <td className="px-4 py-3 whitespace-nowrap space-x-2">
                          <button
                            onClick={() => handleEditClick(user)}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                            disabled={isUpdating || isDeleting || isCrediting}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(user._id)}
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                            disabled={isUpdating || isDeleting || isCrediting}
                          >
                            Delete
                          </button>
                          {user.referredBy && (
                            <button
                              onClick={() => handleCreditReferrer(user)}
                              className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                              disabled={isUpdating || isDeleting || isCrediting}
                            >
                              Credit Referrer
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {isEditing && selectedUser && (
            <div className="mt-6 bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-4">Edit User: {selectedUser.fullName}</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus

:ring-2 focus:ring-blue-500"
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
                      step="0.01"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profit</label>
                    <input
                      type="number"
                      name="totalProfit"
                      value={formData.totalProfit}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      step="0.01"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loss</label>
                    <input
                      type="number"
                      name="totalLoss"
                      value={formData.totalLoss}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    disabled={isUpdating}
                  >
                    {isUpdating ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                    disabled={isUpdating}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {selectedUser?.referredBy && (
            <div className="mt-6 bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-4">Credit Referrer for {selectedUser.fullName}</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Funding Amount</label>
                <input
                  type="number"
                  value={fundingAmount}
                  onChange={handleFundingChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter funding amount"
                  step="0.01"
                />
              </div>
              <button
                onClick={() => handleCreditReferrer(selectedUser)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                disabled={isCrediting}
              >
                {isCrediting ? 'Processing...' : 'Credit Referrer'}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;