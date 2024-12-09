import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SidebarBodyStructure } from "./SidebarStructure";

const SidebarBody: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleSidebarBodyItemClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="my-2 transition-effect">
      {SidebarBodyStructure.map((group, index) => (
        <React.Fragment key={index}>
          <p className="px-4 text-[13.5px] font-medium opacity-70">
            {group.heading}
          </p>
          {group.items.map((item, index) => (
            <div
              className="flex items-center gap-3 px-4 pt-[14px] pb-[15px] mt-1 hover:bg-base-border transition-effect cursor-pointer"
              key={index}
              onClick={handleSidebarBodyItemClick.bind(this, item.link)}>
              <item.icon size={20} />
              <p>{item.title}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};

export default SidebarBody;
