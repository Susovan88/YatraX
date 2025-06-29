import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import RouteStep from "./RouteStep";
import StepConnector from "./StepConnector";

const UserRoutesPage = () => {
  const navigate = useNavigate();
  const [routeSteps] = useState([
    {
      id: 1,
      description: "Start your journey",
      completed: true,
    },
    {
      id: 2,
      description: "Turn left and follow main road for 100m",
      completed: true,
    },
    {
      id: 3,
      description: "On Board RT-S-112 Bus at 6B Bus Stopage",
      completed: true,
    },
    {
      id: 4,
      description: "Turn left at Howrah Bridge",
      completed: false,
    },
    {
      id: 5,
      description: "Arrive at your destination",
      completed: false,
    },
  ]);

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
      {/* <button
        onClick={() => navigate(-1)}
        className="bg-[#907EFF] text-white rounded-lg p-2 font-semibold hover:bg-[#7a6ad6] transition flex items-center justify-center absolute left-4 top-4 z-20"
        aria-label="Back"
        style={{ boxShadow: "0 2px 8px #907EFF33" }}
      >
        <FaArrowLeft className="text-lg" />
      </button> */}
      <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-md mt-6 z-10 relative">
        {/* YatraX Header Row */}
        <h2 className="text-4xl font-bold text-[#4c4c57] mb-8 text-center">
          Your Route
        </h2>
        <div className="relative flex flex-col gap-y-8 pl-2 pb-24 mb-12">
          {routeSteps.map((step, idx) => (
            <div key={step.id} className="relative">
              <RouteStep step={step} index={idx} />
              {idx < routeSteps.length - 1 && (
                <StepConnector completed={routeSteps[idx + 1].completed} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRoutesPage;