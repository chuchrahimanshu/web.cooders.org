import React from "react";
import HeaderIcon from "./HeaderIcon";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Header: React.FC<HeaderProps> = ({
  handleSidebarToggle,
  sidebarToggle,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleUserAvatarClick = () => {
    navigate("/accounts");
  };

  return (
    <header className="h-[70px] bg-overlay-background w-full border-b-2 border-base-border flex items-center px-4 justify-between">
      <section className="flex items-center">
        <HeaderIcon
          Icon={sidebarToggle ? AiOutlineMenuFold : AiOutlineMenuUnfold}
          size="text-4xl"
          handleIconClick={handleSidebarToggle}
        />
      </section>
      <section className="flex items-center gap-5">
        <HeaderIcon Icon={FaBell} size="text-4xl" />
        <img
          src="https://github.com/shadcn.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full cursor-pointer object-cover"
          onClick={handleUserAvatarClick}
        />
      </section>
    </header>
  );
};

export default Header;
