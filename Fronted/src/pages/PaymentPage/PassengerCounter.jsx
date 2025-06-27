import React from "react";
import { FaUser } from "react-icons/fa";

const PassengerCounter = ({ passengerCount, increment, decrement }) => (
  <div className="flex items-center gap-4">
    <FaUser className="text-lg text-[#907EFF]" />
    <span className="font-medium">Passengers</span>
    <div className="flex items-center gap-4 ml-4">
      <button
        onClick={decrement}
        className="rounded-full bg-[#907EFF] text-white px-3 py-1 text-lg font-bold disabled:opacity-50"
        disabled={passengerCount === 1}
      >
        -
      </button>
      <span className="text-lg font-semibold">{passengerCount}</span>
      <button
        onClick={increment}
        className="rounded-full bg-[#907EFF] text-white px-3 py-1 text-lg font-bold disabled:opacity-50"
        disabled={passengerCount === 10}
      >
        +
      </button>
    </div>
  </div>
);

export default PassengerCounter;
