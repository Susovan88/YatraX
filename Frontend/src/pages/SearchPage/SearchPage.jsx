import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdSwapVert } from "react-icons/md";
import { motion } from "framer-motion";
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
	const navigate = useNavigate();
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

	const handleBookRide = () => {
		navigate("/payments", { state: { fromLocation, toLocation } });
	};

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
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 z-10 relative mt-6">
				<div className="flex items-center gap-3 mb-4">
					<h1 className="text-3xl font-bold text-purple-700 drop-shadow text-left ml-2">
						YatraX
					</h1>
				</div>
				<header>
					<h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
						Select Your Destination
					</h1>
				</header>
				<div className="flex flex-col gap-4">
					<motion.div whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }} whileHover={{ scale: 1.02 }}>
						<LocationInput
							label="From"
							value={fromLocation}
							onFocus={() => setFocused("from")}
							onChange={(e) => setFromLocation(e.target.value)}
							isActive={focused === "from"}
						/>
					</motion.div>
					<div className="flex justify-center -my-2">
						<motion.button
							whileHover={{ scale: 1.15, rotate: 12 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center justify-center w-10 h-10 bg-[#907EFF] text-white rounded-full shadow hover:bg-[#7a6ad6] transition"
							onClick={handleSwap}
							title="Swap From and To"
							type="button"
						>
							<MdSwapVert className="text-2xl" />
						</motion.button>
					</div>
					<motion.div whileFocus={{ scale: 1.04, boxShadow: '0 0 0 2px #c0ec4e' }} whileHover={{ scale: 1.02 }}>
						<LocationInput
							label="To"
							value={toLocation}
							onFocus={() => setFocused("to")}
							onChange={(e) => setToLocation(e.target.value)}
							isActive={focused === "to"}
						/>
					</motion.div>
					<motion.button
						whileHover={{ scale: 1.07, boxShadow: '0px 8px 24px rgba(192,236,78,0.2)' }}
						whileTap={{ scale: 0.96 }}
						className="w-full py-3 bg-[#907EFF] text-white rounded-xl font-semibold text-lg shadow hover:bg-[#7a6ad6] transition"
						onClick={handleBookRide}
						type="button"
					>
						Book Your Ride
					</motion.button>
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