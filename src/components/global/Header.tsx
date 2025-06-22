import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../elements";
import AVATAR from "../../assets/images/AVATAR.jpeg";

// Define routes with path and label
const navItems = [
  { label: "DASHBOARD", to: "/dashboard" },
  { label: "STUDIO", to: "/studio" },
  { label: "COMMUNITY", to: "/community" },
  { label: "SOLVEX", to: "/solvex" },
  { label: "MARKETPLACE", to: "/marketplace" },
];

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-[72px] bg-primary-overlay rounded-[10px] px-[15px]">
      <Logo />
      <nav className="flex items-center gap-4">
        {navItems.map(({ label, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `text-[16px] font-semibold transition duration-300 ease-in-out cursor-pointer ${
                isActive
                  ? "text-palette-sky"
                  : "text-white/60 hover:text-palette-sky"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <img
        src={AVATAR}
        alt="User Avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
    </header>
  );
};

export default Header;
