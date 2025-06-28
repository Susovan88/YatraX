import React from 'react';
import { NavLink } from 'react-router-dom';
import { TiHomeOutline } from "react-icons/ti";
import { BsTicketPerforated } from 'react-icons/bs';
import { FaRegUserCircle } from "react-icons/fa";
import { TbRoute } from "react-icons/tb";

const Navbar = () => {
  const navItems = [
    { to: '/home', label: 'Home', icon: <TiHomeOutline size={24} /> },
    { to: '/ticket', label: 'Ticket', icon: <BsTicketPerforated size={24} /> },
    { to: '/user-route', label: 'Route', icon: <TbRoute size={24} /> }, // ⬅️ Changed icon
    { to: '/profile', label: 'Profile', icon: <FaRegUserCircle size={24} /> },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 bg-[#030318] rounded-[18px] px-2 py-2 flex items-center gap-5 shadow-lg">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive
              ? 'flex items-center gap-1.5 bg-gray-300 text-[#030318] px-3 py-1.5 rounded-xl font-semibold'
              : 'flex items-center justify-center text-white'
          }
        >
          {({ isActive }) => (
            <>
              {item.icon}
              {isActive && <span className="ml-1 text-sm">{item.label}</span>}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
