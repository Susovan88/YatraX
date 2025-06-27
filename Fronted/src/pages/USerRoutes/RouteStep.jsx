import React from "react";
import { FaCheck } from "react-icons/fa";

export default function RouteStep({ step, index }) {
  return (
    <div className="flex items-start gap-4 mb-2 relative">
      <div className="flex flex-col items-center">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-base font-bold
          ${step.completed ? 'bg-[#907EFF] text-white' : 'border-2 border-[#907EFF] text-[#907EFF] bg-white'}`}>
          {step.completed ? <FaCheck className="text-xs" /> : <span className="w-2 h-2 rounded-full bg-[#907EFF] inline-block"></span>}
        </div>
      </div>
      <div>
        <div className="text-xs text-gray-500 font-semibold mb-0.5">step {index + 1}</div>
        <p className="text-sm text-gray-800 font-medium">{step.description}</p>
      </div>
    </div>
  );
}
