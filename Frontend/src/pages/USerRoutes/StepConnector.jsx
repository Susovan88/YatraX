import React from "react";

export default function StepConnector({ completed }) {
  return (
    <div className="absolute left-3 top-7 flex flex-col items-center">
      <div className={`h-8 border-l-2 ${completed ? 'border-[#907EFF]' : 'border-dotted border-[#907EFF]'}`}></div>
      <span className="text-[#907EFF] text-lg -mt-2">↓</span>
    </div>
  );
}
