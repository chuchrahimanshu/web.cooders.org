import React, { useState } from "react";
import {
  MdDashboard,
  MdDesignServices,
  MdDisplaySettings,
  MdMenu,
  MdSave,
} from "react-icons/md";
import { STUDIO_DATA } from "../../data";
import { StudioLayout } from "../../components";

const icons = [
  { icon: MdDashboard, label: "Dashboard" },
  { icon: MdMenu, label: "Menu" },
  { icon: MdDesignServices, label: "Design Services" },
  { icon: MdSave, label: "Save" },
  { icon: MdDisplaySettings, label: "Display Settings" },
];

const StudioMaterialUI: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="flex justify-between">
      <p>StudioMaterialUI</p>

      <div className="bg-primary-overlay w-[240px] h-[calc(100vh-110px)] rounded-[10px] px-2 pb-2 pt-[6px] flex flex-col">
        <div className="flex items-center justify-between">
          {icons.map(({ icon: Icon, label }, index) => (
            <Icon
              key={index}
              size={36}
              onClick={() => setSelectedTab(index)}
              className={`w-full border-b-2 pt-[6px] pb-2 cursor-pointer transition duration-200 ${
                selectedTab === index
                  ? "text-palette-sky border-b-palette-sky"
                  : "text-white/60 border-b-primary-divider"
              }`}
              aria-label={label}
            />
          ))}
        </div>
        {selectedTab === 0 && (
          <StudioLayout data={STUDIO_DATA?.STUDIO_COMPONENTS?.MUI_COMPONENTS} />
        )}
      </div>
    </section>
  );
};

export default StudioMaterialUI;
