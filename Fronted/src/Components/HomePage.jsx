import React, { useState } from "react";

const HomePage = () => {
  const [locationUpdates, setLocationUpdates] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-200 via-white to-purple-100 relative overflow-hidden">
      {/* Background Splash - improved color and gradient */}
      <div className="absolute top-[-180px] left-0 w-full h-[350px] blur-2xl bg-gradient-to-r from-lime-300 via-purple-200 to-transparent opacity-70 z-0"></div>

      <div className="relative z-10 flex flex-col items-center px-2 py-4 max-w-xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-purple-700 mb-4 drop-shadow">
          YatraX
        </h1>

        {/* Location Toggle */}
        <div className="flex items-center justify-between w-full max-w-md bg-white/80 rounded-xl p-4 mb-4 shadow">
          <span className="text-gray-700 font-semibold">
            Keep Updating your Current Location
          </span>
          <button
            aria-pressed={locationUpdates}
            onClick={() => setLocationUpdates((v) => !v)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 border-2 border-purple-300 shadow-inner ${
              locationUpdates ? "bg-lime-400" : "bg-gray-200"
            }`}
          >
            <span
              className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                locationUpdates ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-md bg-white/90 rounded-2xl shadow p-4 mb-4">
          <div className="flex items-center mb-4">
            <div className="flex flex-col items-center mr-4">
              <span className="w-5 h-5 bg-purple-400 rounded-full mb-1"></span>
              <span className="w-1 h-8 bg-purple-300"></span>
              <span className="w-4 h-4 bg-white border-2 border-purple-400 rounded"></span>
            </div>
            <div className="flex-1">
              <div className="mb-2">
                <label className="block text-gray-500 text-sm">From</label>
                <input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-purple-400 text-gray-800 bg-transparent"
                  defaultValue="Garia Station Road, Chhoto..."
                  aria-label="From"
                />
              </div>
              <div className="mb-2 flex items-center">
                <div className="flex-1 h-px bg-gray-200"></div>
                <button className="ml-2 bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-purple-500 transition">
                  +
                </button>
              </div>
              <div>
                <label className="block text-gray-500 text-sm">To</label>
                <input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-purple-400 text-gray-800 bg-transparent"
                  defaultValue="Howrah Railway Station, M..."
                  aria-label="To"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition shadow">
              Search Ride
            </button>
            <button className="w-16 h-10 bg-lime-100 text-purple-700 rounded-lg hover:bg-lime-200 transition shadow">
              Later
            </button>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="w-full max-w-md bg-gradient-to-r from-purple-100 via-white to-lime-100 rounded-2xl p-4 mb-4 shadow">
          <div className="flex items-center mb-2">
            <span className="w-5 h-5 bg-gray-400 rounded-full mr-2"></span>
            <div>
              <div className="font-semibold text-gray-700">South City Mall</div>
              <div className="text-xs text-gray-500">
                375, Prince Anwar Shah Road, South Cit...
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 my-2"></div>
          <div className="flex items-center">
            <span className="w-5 h-5 bg-yellow-400 rounded-full mr-2"></span>
            <div>
              <div className="font-semibold text-gray-700">TCS Kolkata</div>
              <div className="text-xs text-gray-500">
                Victoria Park Building, Plot No. 37/2, GN...
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="w-full max-w-md">
          <div className="text-lg font-bold text-purple-500 mb-2">Suggestions</div>
          <div className="flex gap-4">
            <div className="flex-1 bg-purple-400 rounded-xl p-4 flex flex-col items-center text-white shadow">
              <span className="text-xl font-bold mb-1">Bus</span>
              <span className="text-xs mb-2">Easy & Economic</span>
              <img
                src="https://image-resource.creatie.ai/157237976852160/157237976852162/282f15b4d8058628a0e4c1c8d5d48499.png"
                alt="Bus"
                className="w-20 h-16 object-contain"
              />
            </div>
            <div className="flex-1 bg-gray-200 rounded-xl p-4 flex flex-col items-center text-purple-700 shadow">
              <span className="text-xl font-bold mb-1">Taxi</span>
              <span className="text-xs mb-2">Comfortable</span>
              <img
                src="https://image-resource.creatie.ai/157237976852160/157237976852162/590692f3885c81bf562c9f65e6fde969.png"
                alt="Taxi"
                className="w-20 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;