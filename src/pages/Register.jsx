import React from "react";

export default function Register() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-[#f4f6fa] flex items-center justify-center">
        <img src="src/assets/images/starcore logo.png" alt="logo starcore" className="w-1/2" />
      </div>
      
      <div className="w-1/2 bg-white flex items-center justify-center px-8">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">Create Account</h2>
          <p className="text-sm text-gray-500 mb-6">Sign up to get started</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a href="/" className="text-teal-500 hover:underline font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
