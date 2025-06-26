import React, { useState } from "react";
import { FaPlus, FaMapMarkerAlt } from "react-icons/fa";
import { MdSwapVert } from "react-icons/md";

const DEFAULT_LOCATIONS = [
	{
		city: "Central Park",
		desc: "A large park located in the center of the city for recreation and relaxation.",
	},
	{
		city: "Empire State Building",
		desc: "A historic skyscraper and prominent landmark in the city.",
	},
	{
		city: "Howrah Station",
		desc: "Major railway station in Kolkata.",
	},
	{
		city: "Garia Station",
		desc: "A busy suburban railway station.",
	},
];

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

const AddLocationModal = ({
	isOpen,
	onClose,
	onSubmit,
	city,
	setCity,
	desc,
	setDesc,
}) =>
	isOpen ? (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
			<div className="bg-white p-6 rounded-lg w-80 relative">
				<button
					className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
					onClick={onClose}
					title="Close"
				>
					×
				</button>
				<h2 className="text-xl font-semibold mb-4 text-[#907EFF] text-center">
					Add New Location
				</h2>
				<input
					type="text"
					placeholder="City Name"
					className="w-full mb-2 p-2 border rounded"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Description"
					className="w-full mb-4 p-2 border rounded"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>
				<button
					onClick={onSubmit}
					className="bg-[#907EFF] text-white px-4 py-2 rounded w-full font-semibold flex items-center justify-center gap-2"
				>
					<FaPlus /> Submit
				</button>
			</div>
		</div>
	) : null;

const SearchPage = () => {
	const [fromLocation, setFromLocation] = useState("Garia Station");
	const [toLocation, setToLocation] = useState("Howrah Station");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [locations, setLocations] = useState(DEFAULT_LOCATIONS);
	const [city, setCity] = useState("");
	const [desc, setDesc] = useState("");
	const [focused, setFocused] = useState("from");

	const handleSwap = () => {
		setFromLocation(toLocation);
		setToLocation(fromLocation);
	};

	const handleAddLocation = () => {
		if (!city.trim()) return;
		setLocations((prev) => [...prev, { city: city.trim(), desc: desc.trim() }]);
		setCity("");
		setDesc("");
		setIsModalOpen(false);
	};

	const handleLocationSelect = (loc) => {
		if (focused === "from") setFromLocation(loc.city);
		else setToLocation(loc.city);
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
					<LocationInput
						label="From"
						value={fromLocation}
						onFocus={() => setFocused("from")}
						onChange={(e) => setFromLocation(e.target.value)}
						isActive={focused === "from"}
					/>
					<div className="flex justify-center -my-2">
						<button
							className="flex items-center justify-center w-10 h-10 bg-[#907EFF] text-white rounded-full shadow hover:bg-[#7a6ad6] transition"
							onClick={handleSwap}
							title="Swap From and To"
							type="button"
						>
							<MdSwapVert className="text-2xl" />
						</button>
					</div>
					<LocationInput
						label="To"
						value={toLocation}
						onFocus={() => setFocused("to")}
						onChange={(e) => setToLocation(e.target.value)}
						isActive={focused === "to"}
					/>
					<button
						className="flex items-center gap-2 justify-center w-full py-3 mt-2 bg-[#907EFF] text-white rounded-xl font-semibold text-lg shadow hover:bg-[#7a6ad6] transition"
						onClick={() => setIsModalOpen(true)}
						type="button"
					>
						<FaPlus className="text-base" /> Add Location
					</button>
				</div>
				{/* All Locations as selectable options */}
				<div className="mt-6">
					<h2 className="text-lg font-semibold text-gray-700 mb-2">
						All Locations
					</h2>
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
				</div>
				<AddLocationModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					onSubmit={handleAddLocation}
					city={city}
					setCity={setCity}
					desc={desc}
					setDesc={setDesc}
				/>
			</div>
		</div>
	);
};

export default SearchPage;