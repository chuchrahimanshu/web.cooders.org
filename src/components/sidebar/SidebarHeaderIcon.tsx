import React from "react";
import { SidebarHeaderStructure } from "./SidebarStructure";
import { NavigateFunction, useNavigate } from "react-router-dom";

const SidebarHeaderIcon = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleSidebarHeaderClick = () => {
    navigate(SidebarHeaderStructure.link);
  };

  let timeout: number;

  const handleMouseEnter = (e: React.MouseEvent<SVGElement>) => {
    (e.target as SVGElement).style.transform = 'scale(1.1)';
    (e.target as SVGElement).style.filter = 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.2))';
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      (e.target as SVGElement).style.transform = 'scale(1)';
      (e.target as SVGElement).style.filter = 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))';
    }, 300);
  };

  return (
    <svg version="1.1" width="46px" height="46px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" 
      y="0px" viewBox="0 0 46 46" enableBackground="new 0 0 46 46" xmlSpace="preserve" onClick={handleSidebarHeaderClick}
      style={{
        filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
        transition: 'transform 0.3s ease-in-out, filter 0.3s ease',
        transformOrigin: 'center center',
        cursor: "pointer"
      }}
      onMouseEnter={handleMouseEnter}
    >
      <polygon opacity="0.7" points="45,11 36,11 35.5,1" fill="#2787F5" />
      <polygon points="35.5,1 25.4,14.1 39,21" fill="#2787F5" />
      <polygon opacity="0.4" points="17,9.8 39,21 17,26" fill="#2787F5" />
      <polygon opacity="0.7" points="2,12 17,26 17,9.8" fill="#2787F5" />
      <polygon opacity="0.7" points="17,26 39,21 28,36" fill="#2787F5" />
      <polygon points="28,36 4.5,44 17,26" fill="#2787F5" />
      <polygon points="17,26 1,26 10.8,20.1" fill="#2787F5" />
    </svg>
  );
};

export default SidebarHeaderIcon;
