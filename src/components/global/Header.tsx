import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../elements";
import { MdPerson } from "react-icons/md";

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
              `text-[16px] font-semibold transition duration-200 ease-in-out cursor-pointer ${
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
      <div className="h-10 min-w-10 flex items-center justify-center rounded-full cursor-pointer bg-palette-sky/70 hover:bg-palette-sky ease-in-out transition duration-200">
        <MdPerson size={26} className="-mt-[2px]" />
      </div>
    </header>
  );
};

export default Header;
