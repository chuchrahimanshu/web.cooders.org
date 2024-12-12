import React from "react";
import { SidebarBodyStructure } from "./SidebarStructure";
import SidebarHeaderIcon from "./SidebarHeaderIcon";
import SidebarFooterAvatar from "./SidebarFooterAvatar";
import { NavigateFunction, useNavigate } from "react-router-dom";

const SidebarIcons: React.FC<SidebarIconProps> = ({
  sidebarGroupToggle,
  handleSidebarGroupClick,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleBodyItemClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="h-screen min-w-16 w-16 max-w-16 border-r-2 bg-overlay-background border-r-base-border flex flex-col justify-between py-3 items-center transition-effect">
      <section className="flex flex-col items-center gap-5">
        <SidebarHeaderIcon />
        <div className="flex flex-col gap-3">
          {SidebarBodyStructure.map((group, index) => (
            <React.Fragment key={index}>
              <group.icon
                size={group.iconSize}
                key={index}
                className="cursor-pointer"
                onClick={handleSidebarGroupClick.bind(this, group.id)}
              />
              {sidebarGroupToggle === group.id &&
                group.items &&
                group.items.map((item, index) => (
                  <item.icon
                    size={item.iconSize}
                    key={index}
                    className="cursor-pointer"
                    onClick={handleBodyItemClick.bind(this, item.link)}
                  />
                ))}
            </React.Fragment>
          ))}
        </div>
      </section>
      <SidebarFooterAvatar />
    </section>
  );
};

export default SidebarIcons;
