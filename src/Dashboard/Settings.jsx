import React, { useState, useEffect } from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSideBar from '../components/DashboardSideBar';

const Settings = () => {
  // State for user details and form input values
  const [userData, setUserData] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
  });

  // State for error handling
  const [error, setError] = useState('');

  // Fetch user data from Express API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');  // Adjust the API endpoint accordingly
        const data = await response.json();
        setUserData({
          fullName: data.fullName,
          password: '', // Don't prefill password fields
          confirmPassword: '',
        });
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };

    fetchUserData();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle form submit (save settings)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('/api/user/update', {  // Adjust the API endpoint accordingly
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: userData.fullName,
          password: userData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      // Optionally, reset or notify success here
      alert('Settings updated successfully');
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to update settings');
    }
  };

  // Handle form cancel (reset fields or navigate away)
  const handleCancel = () => {
    // Optionally reset form to original state or handle cancel action
    setUserData({
      fullName: '',
      password: '',
      confirmPassword: '',
    });
    setError('');
  };

  return (
    <div className='bg-white h-full w-full'>
      <DashboardNavbar />
      <DashboardSideBar />
      <main className='p-6'>
        <div className='max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg border-2'>
          <h2 className='text-2xl font-semibold text-blue-950 mb-4'>Edit Settings</h2>

          {/* Error Message */}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          {/* Editable Form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor='fullName'>
                Full Name
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={userData.fullName}
                onChange={handleChange}
                required
                className='mt-1 p-3 w-full border border-gray-300 rounded-lg'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={userData.password}
                onChange={handleChange}
                required
                className='mt-1 p-3 w-full border border-gray-300 rounded-lg'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor='confirmPassword'>
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={userData.confirmPassword}
                onChange={handleChange}
                required
                className='mt-1 p-3 w-full border border-gray-300 rounded-lg'
              />
            </div>

            <div className='flex justify-between items-center'>
              <button
                type='button'
                onClick={handleCancel}
                className='bg-gray-300 text-black py-2 px-6 rounded-lg hover:bg-gray-400'
              >
                Cancel
              </button>

              <button
                type='submit'
                className='bg-blue-950 text-white py-2 px-6 rounded-lg hover:bg-blue-800'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Settings;
