import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SidebarBodyStructure } from "./SidebarStructure";

const SidebarBody: React.FC<SidebarBodyProps> = ({ sidebarGroupToggle, handleSidebarGroupClick }) => {
  const navigate: NavigateFunction = useNavigate();

  const handleSidebarBodyItemClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="my-2 transition-effect">
      {SidebarBodyStructure.map((group, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center justify-between px-4 pt-[14px] pb-[15px] hover:bg-base-border transition-effect cursor-pointer" onClick={handleSidebarGroupClick.bind(this, group.id)}>
            <div className="flex items-center gap-2">
              <group.icon size={group.iconSize} />
              <p className="text-[17px] -mt-[0.5px]">{group.title}</p>
            </div>
            {group.items && group.items.length > 0 && ((sidebarGroupToggle === group.id) ? <group.close size={15} /> : <group.open size={15} />) }
          </div>
          {sidebarGroupToggle === group.id && group.items && group.items.map((item, index) => (
            <div
              className="pl-6 flex items-center gap-3 pr-4 pt-[14px] pb-[15px] hover:bg-base-border transition-effect cursor-pointer"
              key={index}
              onClick={handleSidebarBodyItemClick.bind(this, item.link)}>
              <item.icon size={item.iconSize} />
              <p className="text-base">{item.title}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};

export default SidebarBody;
