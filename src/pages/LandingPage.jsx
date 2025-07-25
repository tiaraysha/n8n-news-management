import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-black font-sans">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-300">
        <div className="leading-tight">
          <h3 className="text-sm font-medium tracking-wide">NEWS STARCORE</h3>
          <h3 className="text-sm font-bold">Management</h3>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <button className="text-gray-500 hover:text-black">News</button>
          <button onClick={() => setLoginModal(true)} className="text-gray-500 hover:text-black">
            Sign in
          </button>
          <button
            onClick={() => setLoginModal(true)}
            className="bg-black text-white px-4 py-2 rounded-full font-medium hover:opacity-90"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-start justify-center h-screen">
        <h1 className="text-4xl md:text-5xl font-light">
          <span className="font-serif text-5xl font-semibold">T</span>
          he Modern Ways to <br />
          Manage <span className="italic">&</span> <span className="font-bold">Share News</span>
        </h1>
        <p className="mt-6 text-sm text-gray-700 max-w-md">
          Trusted by growing digital media teams and newsrooms around the world.
        </p>
      </div>

      {/* Login Modal */}
      {loginModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-black"
              onClick={() => setLoginModal(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-6 text-center">Welcome Back</h2>

            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-3 bg-[#D9D9D9] px-4 py-2 rounded-full justify-center hover:bg-gray-300">
                <img
                  src="src/assets/images/google.png"
                  alt="Google icon"
                  className="w-5 h-5"
                />
                Sign in with Google
              </button>

              <button className="flex items-center gap-3 bg-[#D9D9D9] px-4 py-2 rounded-full justify-center hover:bg-gray-300">
                <img
                  src="src/assets/images/email.png"
                  alt="Email icon"
                  className="w-5 h-5"
                />
                Sign in with Email
              </button>

              <button className="flex items-center gap-3 bg-[#D9D9D9] px-4 py-2 rounded-full justify-center hover:bg-gray-300">
                <img
                  src="src/assets/images/facebook.png"
                  alt="Facebook icon"
                  className="w-5 h-5"
                />
                Sign in with Facebook
              </button>
              <p className="text-sm text-center">
                Don’t have an account?{" "}
                <span className="text-blue-600 font-medium hover:underline">
                  <Link to="/register">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
