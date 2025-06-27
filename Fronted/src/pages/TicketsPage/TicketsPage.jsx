import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import TicketCard from "./TicketCard";

const TicketsPage = () => {
  const navigate = useNavigate();
  // Dummy ticket data (to be replaced with dynamic data from PaymentConfirmationPage)
  const [tickets] = useState([
    {
      id: 1,
      type: "BUS TICKET",
      ticketTypeIcon: "Background-2.svg",
      vehicleIcon: "Bus.png",
      route: "Naktala-Howrah",
      busName: "S-112",
      busNumber: "WB 05 2922",
      fromLocation: "Garia St.",
      toLocation: "Howrah St.",
      date: "30 June",
      time: "07:50 AM",
      passengers: 2,
      qrCode: "ic-outline-qr-code-scanner-2.svg",
      price: 30,
    },
    {
      id: 2,
      type: "BUS TICKET",
      ticketTypeIcon: "Background-2.svg",
      vehicleIcon: "Bus.png",
      route: "Naktala-Howrah",
      busName: "S-113",
      busNumber: "WB 05 2923",
      fromLocation: "Garia St.",
      toLocation: "Howrah St.",
      date: "30 June",
      time: "08:10 AM",
      passengers: 1,
      qrCode: "ic-outline-qr-code-scanner-2.svg",
      price: 30,
    },
    {
      id: 3,
      type: "BUS TICKET",
      ticketTypeIcon: "Background-2.svg",
      vehicleIcon: "Bus.png",
      route: "Naktala-Howrah",
      busName: "S-114",
      busNumber: "WB 05 2924",
      fromLocation: "Garia St.",
      toLocation: "Howrah St.",
      date: "30 June",
      time: "09:00 AM",
      passengers: 3,
      qrCode: "ic-outline-qr-code-scanner-2.svg",
      price: 45,
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
      {/* Header and Back Button container for mobile/desktop */}
      <div className="absolute left-4 top-4 z-20 flex flex-col items-start sm:static sm:flex-row sm:items-center sm:gap-3 w-auto">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#907EFF] text-white rounded-lg p-2 font-semibold hover:bg-[#7a6ad6] transition flex items-center justify-center mb-2 sm:mb-0"
          aria-label="Back"
          style={{ boxShadow: "0 2px 8px #907EFF33" }}
        >
          <FaArrowLeft className="text-lg" />
        </button>
        <h1 className="text-3xl font-bold text-purple-700 drop-shadow text-left ml-0 sm:ml-2">
          YatraX
        </h1>
      </div>
      <div className="w-full max-w-screen-md mx-auto z-10 relative pt-20 sm:pt-0">
        {/* pt-20 ensures content is pushed below header/back on mobile */}
        <h2 className="text-3xl font-extrabold text-[#4C4C57] mb-8 text-center">
          Your Tickets
        </h2>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
          {tickets.length === 0 ? (
            <div className="text-center text-gray-500 col-span-2">
              No tickets found.
            </div>
          ) : (
            tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;