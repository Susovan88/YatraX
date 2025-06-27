import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [locationUpdates, setLocationUpdates] = useState(false);

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
            "radial-gradient(circle at 50% 50%, #c0ec4e 0%, rgba(216,216,216,0) 100%)",
          borderRadius: "50%",
        }}
      />
      {/* Back Button absolutely positioned at the top over the background */}
      <button
        onClick={() => navigate(-1)}
        className="bg-[#907EFF] text-white rounded-lg p-2 font-semibold hover:bg-[#7a6ad6] transition flex items-center justify-center absolute left-4 top-4 z-20"
        aria-label="Back"
        style={{ boxShadow: "0 2px 8px #907EFF33" }}
      >
        <FaArrowLeft className="text-lg" />
      </button>
      <div className="relative z-10 flex flex-col items-center px-2 py-4 max-w-xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 w-full">
          <h1 className="text-3xl font-bold text-purple-700 drop-shadow text-left ml-2">
            YatraX
          </h1>
        </div>

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
        <motion.div
          className="w-full max-w-md bg-white/90 rounded-2xl shadow p-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <div className="flex flex-col items-center mr-4">
              <span className="w-5 h-5 bg-purple-400 rounded-full mb-1"></span>
              <span className="w-1 h-8 bg-purple-300"></span>
              <span className="w-4 h-4 bg-white border-2 border-purple-400 rounded"></span>
            </div>
            <div className="flex-1">
              <div className="mb-2">
                <label className="block text-gray-500 text-sm">From</label>
                <motion.input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-purple-400 text-gray-800 bg-transparent"
                  defaultValue="Garia Station Road, Chhoto..."
                  aria-label="From"
                  whileFocus={{
                    scale: 1.04,
                    boxShadow: "0 0 0 2px #c0ec4e",
                  }}
                  whileHover={{ scale: 1.02 }}
                  as={motion.input}
                />
              </div>
              <div className="mb-2 flex items-center">
                <div className="flex-1 h-px bg-gray-200"></div>
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 12 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-2 bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-purple-500 transition"
                >
                  +
                </motion.button>
              </div>
              <div>
                <label className="block text-gray-500 text-sm">To</label>
                <motion.input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-purple-400 text-gray-800 bg-transparent"
                  defaultValue="Howrah Railway Station, M..."
                  aria-label="To"
                  whileFocus={{
                    scale: 1.04,
                    boxShadow: "0 0 0 2px #c0ec4e",
                  }}
                  whileHover={{ scale: 1.02 }}
                  as={motion.input}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 8px 24px rgba(192,236,78,0.2)",
              }}
              whileTap={{ scale: 0.96 }}
              className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition shadow"
              onClick={() => navigate("/search")}
            >
              Search Ride
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="w-16 h-10 bg-lime-100 text-purple-700 rounded-lg hover:bg-lime-200 transition shadow"
            >
              Later
            </motion.button>
          </div>
        </motion.div>

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