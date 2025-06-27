import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import LocationInput from "../SearchPage/LocationInput";
import PassengerCounter from "./PassengerCounter";
import UPIOptions from "./UPIOptions";
import CardOption from "./CardOption";

const upiOptions = [
  {
    key: "gpay",
    label: "Google Pay",
    img: "https://image-resource.creatie.ai/157237976852160/157237976852162/8c7375a1d63e44734fb2466880cd96a5.png",
    tag: "Best Value",
  },
  {
    key: "phonepe",
    label: "PhonePe",
    img: "https://image-resource.creatie.ai/157237976852160/157237976852162/704652f99e7f24ed17782bd795c0be05.png",
  },
  {
    key: "bhim",
    label: "BHIM",
    img: "https://image-resource.creatie.ai/157237976852160/157237976852162/2ea4b73c7124e12199c3c7eb5744f553.png",
  },
  // Add more UPI options here if needed
];

const PaymentsPage = () => {
  const navigate = useNavigate();

  // Location state
  const [fromLocation, setFromLocation] = useState("Garia Station");
  const [toLocation, setToLocation] = useState("Howrah Station");
  const [focused, setFocused] = useState("from");

  // Passenger counter
  const [passengerCount, setPassengerCount] = useState(1);
  const increment = () => setPassengerCount((c) => Math.min(10, c + 1));
  const decrement = () => setPassengerCount((c) => Math.max(1, c - 1));

  // Payment method selection
  const [selectedPayment, setSelectedPayment] = useState("gpay");
  const [selectedCard, setSelectedCard] = useState(false);

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
      <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-md mt-6 z-10 relative">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-purple-700 drop-shadow text-left ml-2">
            YatraX
          </h1>
        </div>
        <h2 className="text-xl font-bold text-gray-800 flex-1 text-center mb-6">
          Payment Options
        </h2>
        {/* Locations */}
        <div className="flex flex-col md:flex-row md:gap-8 gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <LocationInput
              label="From"
              value={fromLocation}
              onFocus={() => setFocused("from")}
              onChange={(e) => setFromLocation(e.target.value)}
              isActive={focused === "from"}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <LocationInput
              label="To"
              value={toLocation}
              onFocus={() => setFocused("to")}
              onChange={(e) => setToLocation(e.target.value)}
              isActive={focused === "to"}
            />
          </div>
        </div>
        {/* Divider */}
        <hr className="my-2 border-t" />
        {/* Passenger Counter */}
        <PassengerCounter
          passengerCount={passengerCount}
          increment={increment}
          decrement={decrement}
        />
        {/* Divider */}
        <hr className="my-2 border-t" />
        {/* UPI Payment Methods */}
        <UPIOptions
          upiOptions={upiOptions}
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
        />
        {/* Divider */}
        <hr className="my-4 border-t" />
        {/* Card Payment Option */}
        <CardOption
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          setSelectedPayment={setSelectedPayment}
        />
        {/* Divider */}
        <hr className="my-4 border-t" />
        {/* Pay Button */}
        <button className="w-full py-3 bg-[#907EFF] text-white rounded-xl font-semibold text-lg shadow hover:bg-[#7a6ad6] transition">
          Tap to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentsPage;