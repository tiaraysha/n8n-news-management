import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full bg-[#f5f6fa] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* profile */}
          <div className="flex flex-col items-center w-full lg:w-1/3">
            <img
              src="src/assets/images/profile.jpg"
              alt="profile"
              className="rounded-xl w-48 h-48 object-cover border-4 border-gray-300"
            />
            <div className="text-center mt-4">
              <h2 className="font-bold text-xl text-gray-800">The Coldest Sunset</h2>
              <p className="text-gray-500">elarmandio@gmail.com</p>
            </div>
          </div>

          {/* field input input nya */}
          <div className="w-full lg:w-2/3">
            <div className="text-xl font-semibold text-gray-700 mb-4">Details</div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-500 text-sm mb-1">Name</p>
                <input
                  type="text"
                  value="El Armandio"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <input
                  type="text"
                  value="elarmandio@gmail.com"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Password</p>
                <input
                  type="text"
                  value="******"
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
