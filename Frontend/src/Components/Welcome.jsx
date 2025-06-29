import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-end bg-white relative overflow-hidden">
      {/* Background Splash - improved color, matches previous radial gradient */}
      <div className="absolute top-0 left-0 w-full h-1/3 z-0" style={{minHeight:'180px', background: 'radial-gradient(circle at 50% 50%, #c0ec4e 0%, rgba(216,216,216,0) 100%)'}}></div>
      {/* Top Image */}
      <img
        src="https://image-resource.creatie.ai/157237976852160/157237976852162/a2f82a0bdf274f7f2006e1f7594309ae.png"
        alt="Welcome Banner"
        className="absolute top-0 right-0 w-100% h-90% object-cover sm:w-full sm:h-[55vh] sm:rounded-none sm:static sm:object-cover z-10"
      />
      {/* Bottom Card */}
      <div className="absolute bottom-0 left-0 w-full h-[260px] rounded-t-[32px] flex flex-col justify-start items-start p-[32px] bg-[#030318] sm:relative sm:w-full sm:rounded-t-[20px] sm:p-[16px_4vw] sm:h-auto z-20 transition-all duration-300">
        <div className="flex flex-row flex-wrap gap-x-[180px] gap-y-[32px] w-full h-auto justify-start items-center sm:flex-col sm:w-full sm:gap-x-0 sm:gap-y-6">
          {/* Tagline */}
          <div className="flex flex-col justify-start items-start gap-2 w-full h-auto sm:w-full sm:items-center sm:text-center">
            <div className="text-white font-bold text-2xl leading-[33px] w-[280px] h-[33px] sm:w-full sm:text-[20px] sm:leading-7">
              Select your Destination
            </div>
            <div className="text-[#9E9E9E] text-sm leading-[23px] font-normal w-full h-[46px] sm:w-full sm:text-[13px] sm:leading-5">
              Your journey begins here - book faster, travel smarter, explore beyond limits
            </div>
          </div>
          {/* Nav Dots */}
          <div className="flex flex-row justify-between items-center h-2 w-[54px] sm:w-[60px] sm:h-[15px] mx-1">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-[#5B5B5B] border border-white"></div>
          </div>
          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0px 8px 24px rgba(192,236,78,0.3)' }}
            transition={{ type: 'spring', stiffness: 100 }}
            whileTap={{ scale: 0.95 }}
            className="w-[56px] h-[40px] rounded-[16px] bg-[#C0EC4E] flex flex-row justify-center items-center p-[5px_12px] shadow transition-transform duration-200"
            onClick={() => navigate('/signup')}
          >
            <motion.img
              src="/public/ic-sharp-call-made.svg"
              alt="Next"
              className="w-6 h-6 object-contain font-bold"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 100 }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;