import React, { useState } from "react";
import QRCodePopup from "./QRCodePopup";

const TicketCard = ({ ticket }) => {
  const [showQR, setShowQR] = useState(false);
  const ticketUrl = `https://your-website.com/ticket/${ticket.id}`;

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 w-full max-w-md mx-auto">
        {/* Ticket Header */}
        <div className="relative">
          <img
            src={`${ticket.ticketTypeIcon}`}
            alt="ticket type"
            className="w-full h-20 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-2xl drop-shadow-md">
              {ticket.type}
            </span>
          </div>
        </div>
        {/* Ticket Body */}
        <div className="p-4 space-y-2">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={`${ticket.vehicleIcon}`}
                alt="bus"
                className="w-14 h-14"
              />
              <div>
                <div className="font-semibold">{ticket.route}</div>
                <div className="text-xs text-gray-500">({ticket.busName})</div>
              </div>
            </div>
            <div className="text-sm text-gray-700 font-medium">
              {ticket.busNumber}
            </div>
          </div>
          <hr />
          {/* From - To */}
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-[#656565]">{ticket.fromLocation}</div>
            <img
              src="Line 80.svg"
              alt="line"
              className="w-24 h-5"
            />
            <div className="text-lg font-semibold text-[#656565]">{ticket.toLocation}</div>
          </div>
          <hr />
          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            <div className="space-y-1 text-sm">
              <div className="text-gray-500">Date: {ticket.date}</div>
              <div className="text-gray-500">Time: {ticket.time}</div>
              <div className="text-gray-500">Persons: {ticket.passengers}</div>
            </div>
            <img
              src={`ic-outline-qr-code-scanner-2.svg`}
              alt="QR code"
              className="w-12 h-12 cursor-pointer"
              onClick={() => setShowQR(true)}
            />
          </div>
        </div>
      </div>
      {showQR && (
        <QRCodePopup url={ticketUrl} onClose={() => setShowQR(false)} />
      )}
    </>
  );
};

export default TicketCard;
