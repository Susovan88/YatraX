import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdSwapVert } from "react-icons/md";
import LocationInput from "./LocationInput";
import AddLocationModal from "./AddLocationModal";
import LocationList from "./LocationList";
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
					<LocationList
						locations={locations}
						fromLocation={fromLocation}
						toLocation={toLocation}
						handleLocationSelect={handleLocationSelect}
					/>
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