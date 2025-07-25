import React from "react";

export default function Register() {
    return (
        <>
        <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative flex flex-col justify-between">
            <div>
            <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
            <p>Get news for a specific period of time as you wish</p>
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            </div>
            <div>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="mb-1 flex justify-start">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="flex justify-start mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="flex justify-start mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </form>
            </div>
            <p className="m-3">Already have an account? <span className="text-blue-500"><a href="/">Login</a></span></p>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Register
              </button>
            </div>
            </div>
          </>
    );
}