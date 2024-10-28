// src/App.js
import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="bg-white border-2  border-black rounded-lg p-8 max-w-md w-full bg-gradient-to-r from-sky-600 to-blue-800 shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        <form className="space-y-4 ">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-white ">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-white">Confirm Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="********"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-sky-600 to-blue-800 border-2 border-white font-bold text-xl  text-white rounded-lg transition duration-300"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-sm mt-6 text-center text-white font-medium">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={toggleForm} className="text-white font-bold hover:underline">
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
