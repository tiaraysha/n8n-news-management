import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

export default function LandingPage() {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between">
        <div className="flex flex-col items-start">
          <h3 className="font-bold">NEWS STARCORE</h3>
          <h3>Management</h3>
        </div>
        <div className="flex flex-row gap-6">
          <button onClick={() => setLoginModal(true)} className="px-4 py-2">
            News
          </button>
          <button onClick={() => setLoginModal(true)} className="px-4 py-2">
            Sign in
          </button>
          <button
            onClick={() => setLoginModal(true)}
            className="bg-black text-white text-center px-4 py-2 rounded-3xl"
          >
            Get Started
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-start justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-blue-600">T</span>he Modern ways to <br />{" "}
          Manage & Share News
        </h1>
        <p className="text-lg text-center mt-4">
          Trusted by growing digital media teams and newsrooms around the world.
        </p>
      </div>

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
              <p>Don't have an account? <span className="text-blue-600"><Link to="/register">Sign Up</Link></span></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
