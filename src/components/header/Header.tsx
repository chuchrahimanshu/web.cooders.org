import React from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import HeaderIcon from "./HeaderIcon";
import { FaWandMagicSparkles } from "react-icons/fa6";

interface HeaderProps {
  handleSidebarToggle: () => void;
  sidebarToggle: boolean;
}

const Header: React.FC<HeaderProps> = ({
  handleSidebarToggle,
  sidebarToggle,
}) => {
  return (
    <header className="h-[70px] bg-overlay-background w-full border-b-2 border-base-border flex items-center px-4 justify-between">
      <section className="flex items-center">
        <HeaderIcon
          Icon={sidebarToggle ? AiOutlineMenuFold : AiOutlineMenuUnfold}
          size="text-4xl"
          handleIconClick={handleSidebarToggle}
        />
      </section>
      <section className="flex items-center">
        <HeaderIcon Icon={FaWandMagicSparkles} size="text-[33px]" />
      </section>
    </header>
  );
};

export default Header;
