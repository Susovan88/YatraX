import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationInput = ({ label, value, onFocus, onChange, isActive }) => (
	<div
		className={`flex items-center gap-3 bg-gray-50 rounded-xl shadow-sm px-4 py-3 border ${
			isActive ? "border-[#907EFF]" : "border-gray-200"
		}`}
	>
		<span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#907EFF] text-white text-xl">
			<FaMapMarkerAlt />
		</span>
		<div className="flex-1 flex flex-col">
			<label className="text-xs font-semibold text-[#907EFF] mb-1">
				{label}
			</label>
			<input
				className="w-full border-none bg-transparent px-0 py-1 text-gray-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#907EFF] rounded"
				value={value}
				onFocus={onFocus}
				onChange={onChange}
				placeholder={`Enter ${label} location`}
				autoComplete="off"
			/>
		</div>
	</div>
);

export default LocationInput;
