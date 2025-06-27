import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function generateTicketNumber() {
  // Generate a random 9-digit ticket number
  return Math.floor(100000000 + Math.random() * 900000000);
}

const PaymentConfirmationPage = ({
  price = 30,
  bookingTime = "07:50 AM",
  passengerCount = 2,
  fromLocation = "Naktala",
  toLocation = "Howrah",
  busName = "S-112",
  busNumber = "WB 05 2922",
  date
}) => {
  const navigate = useNavigate();
  const ticketNumber = React.useMemo(() => generateTicketNumber(), []);
  const todayDate = date || new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-center justify-center py-8 px-2 relative overflow-hidden">
      {/* Background Splash with shadow */}
      <div
        className="pointer-events-none select-none absolute z-0"
        style={{
          top: -266,
          left: -8,
          width: 609,
          height: 602,
          background:
            "radial-gradient(circle at 50% 50%, #eaffc0 0%, #c0ec4e 40%, #b6e13a 70%, rgba(216,216,216,0) 100%)",
          borderRadius: "50%",
          boxShadow: "40px 0 120px 40px #b6e13a55, -40px 0 120px 40px #b6e13a33, 0 0 0 0 #fff0"
        }}
      />
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 flex flex-col gap-6 z-10 relative">
        {/* Confirmation Tick and Message */}
        <div className="flex flex-col items-center gap-4">
          <FaCheckCircle className="text-green-500 text-[120px] mb-2" aria-label="Success" />
          <div className="text-3xl font-extrabold text-[#907EFF] text-center">Thank You</div>
          <div className="text-lg font-semibold text-gray-700 text-center">Payment Done Successfully</div>
        </div>
        {/* Ticket Summary */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-500">Ticket No:</div>
              <div className="text-lg font-semibold">#{ticketNumber}</div>
            </div>
            <div className="text-lg font-bold text-purple-600">Rs. {price.toFixed(2)}</div>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div className="text-base">{todayDate}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Booking Time</div>
              <div className="text-base">{bookingTime}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Passenger</div>
              <div className="text-base">{passengerCount} Person(s)</div>
            </div>
          </div>
        </div>
        {/* Ride Info */}
        <div className="bg-white rounded-xl shadow p-4 mt-2">
          <div className="text-lg font-semibold">{busName} ({fromLocation} - {toLocation})</div>
          <div className="text-sm text-gray-600">{busNumber}</div>
        </div>
        {/* Home Button */}
        <button
          onClick={() => navigate("/home")}
          className="mt-6 w-full bg-[#907EFF] text-white rounded-xl py-3 text-center font-semibold hover:bg-[#7a6ad6] transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmationPage;