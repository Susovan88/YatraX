import React from "react";
import { FaPlus } from "react-icons/fa";

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

export default AddLocationModal;
