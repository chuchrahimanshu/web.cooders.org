import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SidebarBodyStructure } from "./SidebarStructure";

const SidebarBody: React.FC<SidebarBodyProps> = ({
  sidebarGroupToggle,
  handleSidebarGroupClick,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const handleSidebarBodyItemClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="transition-effect">
      {SidebarBodyStructure.map((group, index) => (
        <React.Fragment key={index}>
          <div
            className="flex w-full opacity-75 hover:opacity-95 items-center px-4 pt-[14px] pb-[15px] hover:bg-base-border transition-effect cursor-pointer"
            onClick={handleSidebarGroupClick.bind(this, group.id)}> 
            <div className="w-[20%] flex items-center justify-start">
              <group.icon size={group.iconSize} />
            </div>
            <p className="text-[17px] -mt-[2px] w-[70%]">{group.title}</p>
            {group.items &&
              group.items.length > 0 &&
              (sidebarGroupToggle === group.id ? (
                <group.close size={15} className="w-[10%]" />
              ) : (
                <group.open size={15} className="w-[10%]" />
              ))}
          </div>
          {sidebarGroupToggle === group.id &&
            group.items &&
            group.items.map((item, index) => (
              <div
                className="flex items-center opacity-75 hover:opacity-95 gap-3 px-4 pt-[14px] pb-[15px] hover:bg-base-border transition-effect cursor-pointer"
                key={index}
                onClick={handleSidebarBodyItemClick.bind(this, item.link)}>
                <div className="w-[16%] flex items-center justify-start">
                  <item.icon size={item.iconSize} />
                </div>
                <p className="text-[17px] w-[84%] -mt-[2px]">{item.title}</p>
              </div>
            ))}
        </React.Fragment>
      ))}
    </section>
  );
};

export default SidebarBody;
