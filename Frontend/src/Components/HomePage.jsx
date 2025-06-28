import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { TiArrowRepeat } from "react-icons/ti";
import { MdFavoriteBorder } from "react-icons/md";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [locationUpdates, setLocationUpdates] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-start pt-2 pb-8 px-2 relative overflow-hidden">
      {/* Background Splash */}
      <div
        className="pointer-events-none select-none absolute z-0"
        style={{
          top: -266,
          left: -8,
          width: 609,
          height: 602,
          background:
            "radial-gradient(circle at 50% 50%, #c0ec4e 0%, #f1f1f1 80%, #ffffff 100%)",
          borderRadius: "50%",
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center px-2 max-w-xl mx-auto w-full">
        {/* Header */}
        <div className="header flex items-center gap-3 mb-4 w-full">
          <h1 className="text-3xl font-['SonsieOne'] text-[#2c2c2c] drop-shadow text-left ml-2">
            YatraX
          </h1>
        </div>

        {/* Location Toggle */}
        <div className="location flex items-center justify-between bg-white/10 w-full max-w-md bg-ffffff rounded-xl px-4 py-2 mb-4 border-[0.5px] border-[#907EFF]">
          <span className="text-[#7e7e7e] font-semibold text-[16px]">
            Keep Updating your Current Location
          </span>
          <button
            aria-pressed={locationUpdates}
            onClick={() => setLocationUpdates((v) => !v)}
            className={`w-12 h-[30px] flex items-center rounded-full px-[2px] transition-colors duration-300 border-1 border-[#907EFF] shadow-inner ${
              locationUpdates ? "bg-gray-200" : "bg-gray-200"
            }`}
          >
            <span
              className={`h-6 w-6 bg-[#907EFF] rounded-full  shadow-md transform transition-transform duration-300 ${
                locationUpdates ? "translate-x-4" : ""
              }`}
            />
          </button>
        </div>

        {/* Input Section */}
        <motion.div
          className="w-full max-w-md bg-[f1f1f1]/20 rounded-2xl shadow p-4 mb-4 border-[1px] border-[#907EFF]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <div className="flex flex-col items-center mr-4">
              <span className="w-5 h-5 bg-white/20 border-4 border-[#907EFF] rounded-full "></span>
              <span className="w-1 h-10 bg-[#907eff]"></span>
              <span className="w-[19px] h-[19px] bg-white/20 border-4 border-[#907EFF] rounded"></span>

            </div>
            <div className="flex-1">
              <div className="mb-2">
                <label className="block text-gray-500 text-sm">From</label>
                <motion.input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-purple-400 font-semibold text-[#5b5b5b] bg-transparent"
                  defaultValue="Garia Station Road, Chhoto..."
                  aria-label="From"
                  whileFocus={{
                    scale: 1.04,
                    boxShadow: "0 0 0 2px transparent",
                  }}
                  whileHover={{ scale: 1.02 }}
                  as={motion.input}
                />
              </div>
              {/* <div className="mb-2 flex items-center">
                <div className="flex-1 h-px bg-gray-200"></div>
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 12 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-2 bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-purple-500 transition"
                >
                  +
                </motion.button>
              </div> */}
              <div>
                <label className="block text-gray-500 text-sm">To</label>
                <motion.input
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-purple-400 font-semibold text-[#5b5b5b] bg-transparent"
                  defaultValue="Howrah Railway Station, M..."
                  aria-label="To"
                  whileFocus={{
                    scale: 1.04,
                    boxShadow: "0 0 0 2px transparent",
                  }}
                  whileHover={{ scale: 1.02 }}
                  as={motion.input}
                />
              </div>
            </div>
          </div>
        </motion.div>


        {/* Search Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 w-full max-w-md px-1 mb-4"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 24px rgba(192,236,78,0.2)",
            }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 bg-[#2c2c2c] text-white py-2 rounded-xl font-bold hover:bg-[#484747] transition shadow"
            onClick={() => navigate("/search")}
          >
            Search Ride
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="w-16 h-10 flex items-center justify-center text-2xl bg-[#d8d8d8] border-[0.5px] text-[#907EFF] rounded-xl hover:bg-[#c9c9c9] transition shadow"
          >
            <MdOutlineWatchLater />
          </motion.button>
        </motion.div>

        {/* Shortcuts */}
        <div className="w-full max-w-md bg-[#d8d8d8] rounded-2xl p-4 mb-4 shadow">
          <div className="flex items-center mb-2">
            <span className="text-2xl text-[#907EFF] mr-4"><TiArrowRepeat /></span>

            <div>
              <div className="font-semibold text-gray-700">South City Mall</div>
              <div className="text-xs text-gray-500">
                375, Prince Anwar Shah Road, South Cit...
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 my-2"></div>
          <div className="flex items-center">
            <span className="text-2xl text-[#907EFF] mr-4"><MdFavoriteBorder /></span>
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
          <div className="text-2xl font-bold text-[#9e9e9e] mb-2">
            Suggestions
          </div>
          <div className="flex gap-4 mb-10">
            <div className="flex-1 bg-[#907eff] rounded-xl p-4 flex flex-col items-start text-[#C0EC4E] shadow">
              <span className="text-xl font-bold">Bus</span>
              <span className="text-[14px] mb-2">Easy & Economic</span>
              <img
                src="https://image-resource.creatie.ai/157237976852160/157237976852162/282f15b4d8058628a0e4c1c8d5d48499.png"
                alt="Bus"
                className="w-18 h-16 object-cover"
              />
            </div>
            <div className="flex-1 bg-[#d8d8d8] rounded-xl p-4 flex flex-col items-start text-[#907eff] shadow">
              <span className="text-xl font-bold">Taxi</span>
              <span className="text-[14px] mb-2">Comfortable</span>
              <img
                src="https://image-resource.creatie.ai/157237976852160/157237976852162/590692f3885c81bf562c9f65e6fde969.png"
                alt="Taxi"
                className="w-18 h-16 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
