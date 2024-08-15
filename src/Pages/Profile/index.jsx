import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
const navigate = useNavigate()

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-yellow-500 text-2xl font-bold">TripGiraffe</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">FIND A TRAVEL COMPANION</a>
            <a href="#" className="hover:underline">INVITE TRAVELERS</a>
            <a href="#" className="hover:underline">ONLINE NOW</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-500 text-gray-900 py-2 px-4 rounded hover:bg-yellow-600">Free Trial</button>
          <button className="md:hidden text-white">☰</button> {/* Menu button for mobile */}
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 md:p-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center">
          {/* Profile Section */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <div className="bg-yellow-500 h-48 w-48 mx-auto md:mx-0 rounded-lg flex items-center justify-center text-white text-2xl">
              <span>Add profile picture</span>
            </div>
            <h2 className="mt-4 text-xl font-bold">MISS JAY, 25</h2>
            <p className="text-gray-600">I'm Miss Jay from Ghana</p>
          </div>

          {/* Action Buttons */}
          <div className="w-full md:w-3/4 mt-4 md:mt-0 flex flex-col items-center md:items-start md:ml-8 space-y-4">
            <button onClick={() => navigate("/create-trip")} className="bg-yellow-500 text-gray-900 py-2 px-4 rounded w-full md:w-auto text-center hover:bg-yellow-600">
              Create a new trip
            </button>
          
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold">About Me</h3>
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 mb-4">
                <p className="font-bold">Country: <span className="font-normal">Ghana</span></p>
                <p className="font-bold">City: <span className="font-normal">Accra</span></p>
              </div>
              <div className="w-full md:w-1/2 mb-4">
                <p className="font-bold">Relationship status: <span className="font-normal">Single</span></p>
                <p className="font-bold">Languages: <span className="font-normal">Cambodian, English</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;