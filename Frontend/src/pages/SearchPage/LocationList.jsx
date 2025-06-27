import React from "react";

const LocationList = ({ locations, fromLocation, toLocation, handleLocationSelect }) => (
	<div className="flex flex-col gap-3">
		{locations.map((loc) => (
			<button
				key={loc.city}
				className={
					`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition ` +
					((fromLocation === loc.city || toLocation === loc.city)
						? "border-[#907EFF] bg-[#f5f3ff] text-[#907EFF]"
						: "border-gray-200 bg-white hover:bg-gray-50 text-gray-800")
				}
				onClick={() => handleLocationSelect(loc)}
				type="button"
			>
				<div className="flex items-center gap-3">
					<span className={
						`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold ` +
						((fromLocation === loc.city || toLocation === loc.city)
							? "bg-[#907EFF] text-white"
							: "bg-gray-200 text-[#907EFF]")
					}>
					{loc.city.charAt(0)}
					</span>
					<div className="text-left">
						<div className="font-semibold text-base">{loc.city}</div>
						<div className="text-xs text-gray-500">{loc.desc}</div>
					</div>
				</div>
			</button>
		))}
	</div>
);

export default LocationList;
