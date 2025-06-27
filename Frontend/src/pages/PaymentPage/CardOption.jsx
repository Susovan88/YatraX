import React from "react";
import { FaCreditCard } from "react-icons/fa";

const CardOption = ({ selectedCard, setSelectedCard, setSelectedPayment }) => (
  <div className="flex flex-col gap-2">
    <div className="text-lg font-semibold text-gray-700 mb-1">
      Or pay with Card
    </div>
    <div
      onClick={() => {
        setSelectedPayment("");
        setSelectedCard(true);
      }}
      className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all duration-150 ${
        selectedCard
          ? "bg-[#907EFF] text-white border-[#907EFF]"
          : "bg-[#F1F1F1] text-gray-800 border-[#907EFF]"
      }`}
    >
      <FaCreditCard className="text-2xl" />
      <div className="font-medium">Credit/Debit Card</div>
      <div className="ml-auto">
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
            selectedCard ? "bg-white border-white" : "border-[#907EFF] bg-[#F1F1F1]"
          }`}
        >
          {selectedCard && <div className="w-3 h-3 rounded-full bg-[#907EFF]" />}
        </div>
      </div>
    </div>
  </div>
);

export default CardOption;
