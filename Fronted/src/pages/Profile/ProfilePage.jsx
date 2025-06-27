import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { use } from 'react';

const users = {
  johndoe: {
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    mobile: '1234567890',
    bio: 'Traveler | Blogger | Photographer',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  janedoe: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    username: 'janedoe',
    mobile: '9876543210',
    bio: 'Adventure Seeker 🌍',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  subhadip: {
    name: 'Subhadip',
    email: 'subhadip@example.com',
    username: 'subhadip',
    mobile: '9998887777',
    bio: 'YatraX Enthusiast',
    photo: 'https://image-resource.creatie.ai/157237976852160/157237976852162/0e8a74107ef1ce437b1e18a0d0b75a4f.jpg',
  },
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const user = users[username] || users['johndoe'];

  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-center py-8 px-2 relative overflow-hidden">
      {/* Background Splash */}
      <div
        className="pointer-events-none select-none absolute z-0"
        style={{
          top: -266,
          left: -8,
          width: 609,
          height: 602,
          background:
            'radial-gradient(circle at 50% 50%, #c0ec4e 0%, rgba(216,216,216,0) 100%)',
          borderRadius: '50%',
        }}
      />
      {/* Header and Back Button */}
      <div className="absolute left-4 top-4 z-20 flex flex-col items-start sm:static sm:flex-row sm:items-center sm:gap-3 w-auto">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#907EFF] text-white rounded-lg p-2 font-semibold hover:bg-[#7a6ad6] transition flex items-center justify-center mb-2 sm:mb-0"
          aria-label="Back"
          style={{ boxShadow: '0 2px 8px #907EFF33' }}
        >
          <FaArrowLeft className="text-lg" />
        </button>
        <h1 className="text-3xl font-bold text-purple-700 drop-shadow text-left ml-0 sm:ml-2">
          YatraX
        </h1>
      </div>
      <div className="w-full max-w-md mx-auto px-4 py-8 bg-white rounded-2xl shadow-lg z-10 relative mt-6 pt-20 sm:pt-0">
        {/* Profile Photo and Name */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <img
            src={user.photo}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-purple-400 object-cover shadow"
          />
          <div className="text-2xl font-bold text-gray-800">{user.name}</div>
          <div className="text-base text-gray-500 text-center">@{user.username}</div>
          <div className="text-base text-gray-500 text-center">{user.bio}</div>
        </div>
        {/* Info List */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
            <span className="font-semibold text-gray-700 w-24">Email:</span>
            <span className="truncate text-gray-600">{user.email}</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
            <span className="font-semibold text-gray-700 w-24">Mobile:</span>
            <span className="truncate text-gray-600">{user.mobile}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;