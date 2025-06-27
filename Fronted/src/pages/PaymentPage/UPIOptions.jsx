import React from "react";

const UPIOptions = ({ upiOptions, selectedPayment, setSelectedPayment, setSelectedCard, selectedCard }) => (
  <div className="flex flex-col gap-2">
    <div className="text-lg font-semibold text-gray-700 mb-1">
      Pay by any UPI App
    </div>
    <div className="flex flex-col gap-3">
      {upiOptions.map((option) => (
        <div
          key={option.key}
          onClick={() => {
            setSelectedPayment(option.key);
            setSelectedCard(false);
          }}
          className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all duration-150 ${
            selectedPayment === option.key && !selectedCard
              ? "bg-[#907EFF] text-white border-[#907EFF]"
              : "bg-[#F1F1F1] text-gray-800 border-[#907EFF]"
          }`}
        >
          <img
            src={option.img}
            alt={option.label}
            className="w-8 h-8 rounded-full object-contain"
          />
          <div className="font-medium flex items-center gap-2">
            {option.label}
            {option.tag && (
              <span className="ml-2 px-2 py-0.5 text-xs rounded bg-green-100 text-green-700 font-semibold">
                {option.tag}
              </span>
            )}
          </div>
          <div className="ml-auto">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                selectedPayment === option.key && !selectedCard
                  ? "bg-white border-white"
                  : "border-[#907EFF] bg-[#F1F1F1]"
              }`}
            >
              {selectedPayment === option.key && !selectedCard && (
                <div className="w-3 h-3 rounded-full bg-[#907EFF]" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UPIOptions;
