import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

const QRCodePopup = ({ url, onClose }) => {
  const [qrUrl, setQrUrl] = useState("");
  const popupRef = useRef();

  useEffect(() => {
    QRCode.toDataURL(url).then(setQrUrl);
  }, [url]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={popupRef} className="bg-white p-6 rounded-xl shadow-lg">
        <img src={qrUrl} alt="QR Code" className="w-48 h-48" />
      </div>
    </div>
  );
};

export default QRCodePopup;
