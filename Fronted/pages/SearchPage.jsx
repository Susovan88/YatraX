import React, { useState, useRef } from "react";
import { FaPlus, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { MdArrowDownward, MdSwapVert } from "react-icons/md";

const LOCATIONS = [
	{
		name: "Central Park",
		description:
			"A large park located in the center of the city for recreation and relaxation.",
	},
	{
		name: "Empire State Building",
		description: "A historic skyscraper and prominent landmark in the city.",
	},
	{
		name: "Howrah Station",
		description: "Major railway station in Kolkata.",
	},
	{
		name: "Garia Station",
		description: "A busy suburban railway station.",
	},
];

const getStopLabel = (idx) => `Stop ${idx + 1}`;

const SearchPage = () => {
	const [fields, setFields] = useState([
		{ label: "From", value: "Garia Station" },
		{ label: "To", value: "Howrah Station" },
	]);
	const [focusedIdx, setFocusedIdx] = useState(0); // 0: From, 1: To, ...
	const [selected, setSelected] = useState(null); // For highlighting location card

	// Focus refs for input fields
	const inputRefs = useRef([]);

	const handleLocationClick = (loc) => {
		setFields((prev) =>
			prev.map((f, idx) =>
				idx === focusedIdx ? { ...f, value: loc.name } : f
			)
		);
		setSelected(loc.name);
		// Focus back to the input
		if (inputRefs.current[focusedIdx]) {
			inputRefs.current[focusedIdx].focus();
		}
	};

	const handleSwap = () => {
		if (fields.length >= 2) {
			setFields((prev) => {
				const newFields = [...prev];
				[newFields[0].value, newFields[1].value] = [
					newFields[1].value,
					newFields[0].value,
				];
				return newFields;
			});
		}
	};

	const handleAdd = () => {
		setFields((prev) => [
			...prev.slice(0, 2),
			{ label: getStopLabel(prev.length - 2), value: "" },
			...prev.slice(2),
		]);
		setTimeout(() => {
			if (inputRefs.current[2]) inputRefs.current[2].focus();
		}, 100);
	};

	const handleInputChange = (idx, val) => {
		setFields((prev) =>
			prev.map((f, i) => (i === idx ? { ...f, value: val } : f))
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-lime-200 via-white to-white flex flex-col items-center py-8 px-2">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
				<header>
					<h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
						Select Your Destination
					</h1>
				</header>
				<div className="flex flex-col gap-4">
					{fields.map((field, idx) => (
						<div
							key={idx}
							className="relative flex items-center gap-3 bg-gray-50 rounded-xl shadow-sm px-4 py-3 border border-gray-200"
						>
							<span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#907EFF] text-white text-xl">
								<FaMapMarkerAlt />
							</span>
							<div className="flex-1 flex flex-col">
								<label className="text-xs font-semibold text-[#907EFF] mb-1">
									{field.label}
								</label>
								<input
									ref={(el) => (inputRefs.current[idx] = el)}
									className="w-full border-none bg-transparent px-0 py-1 text-gray-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#907EFF] rounded"
									value={field.value}
									onFocus={() => setFocusedIdx(idx)}
									onChange={(e) => handleInputChange(idx, e.target.value)}
									placeholder={`Enter ${field.label} location`}
									autoComplete="off"
								/>
							</div>
							{selected === field.value && (
								<FaCheck className="text-xl bg-[#907EFF] text-white rounded-full p-1 ml-2" />
							)}
						</div>
					))}
					{/* Downward arrow between From and To */}
					<div className="flex flex-col items-center -mt-2">
						<MdArrowDownward className="text-3xl bg-[#907EFF] text-white rounded-full p-1 shadow mb-2" />
						{/* Swap icon */}
						<button
							className="flex items-center justify-center w-10 h-10 bg-[#907EFF] text-white rounded-full shadow hover:bg-[#7a6ad6] transition mb-2"
							onClick={handleSwap}
							title="Swap From and To"
							type="button"
						>
							<MdSwapVert className="text-2xl" />
						</button>
					</div>
					{/* Add Location Button */}
					<button
						className="flex items-center gap-2 justify-center w-full py-3 mt-2 bg-[#907EFF] text-white rounded-xl font-semibold text-lg shadow hover:bg-[#7a6ad6] transition"
						onClick={handleAdd}
						type="button"
					>
						<FaPlus className="text-base" /> Add Location
					</button>
				</div>
				{/* Location List */}
				<div className="mt-6">
					<h2 className="text-lg font-semibold text-gray-700 mb-2">
						Popular Locations
					</h2>
					<div className="flex flex-col gap-3">
						{LOCATIONS.map((loc) => (
							<button
								key={loc.name}
								className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition
                  ${
											selected === loc.name
												? "border-[#907EFF] bg-[#f5f3ff]"
												: "border-gray-200 bg-white hover:bg-gray-50"
										}`}
								onClick={() => handleLocationClick(loc)}
								type="button"
							>
								<div className="flex items-center gap-3">
									<span
										className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold
                    ${
											selected === loc.name
												? "bg-[#907EFF] text-white"
												: "bg-gray-200 text-[#907EFF]"
										}`}
									>
										{loc.name.charAt(0)}
									</span>
									<div className="text-left">
										<div
											className={`font-semibold text-base ${
												selected === loc.name
													? "text-[#907EFF]"
													: "text-gray-800"
											}`}
										>
											{loc.name}
										</div>
										<div
											className={`text-xs ${
												selected === loc.name
													? "text-[#907EFF]"
													: "text-gray-500"
											}`}
										>
											{loc.description}
										</div>
									</div>
								</div>
								{selected === loc.name && (
									<FaCheck className="text-2xl text-white bg-[#907EFF] rounded-full p-1" />
								)}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchPage;