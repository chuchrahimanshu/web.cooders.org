import React from "react";
import { MdHome, MdPerson, MdSettings, MdWeb } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { SidebarFooter, SidebarItem } from "../components";
import MATERIAL_UI from "../assets/images/MATERIAL_UI.svg";
import SHADCN from "../assets/images/SHADCN.png";
import PRIME_REACT from "../assets/images/PRIME_REACT.png";
import ANT_DESIGN from "../assets/images/ANT_DESIGN.png";
import CHAKRA_UI from "../assets/images/CHAKRA_UI.png";
import RADIX_UI from "../assets/images/RADIX_UI.png";
import HEADLESS_UI from "../assets/images/HEADLESS_UI.jpg";
import HERO_UI from "../assets/images/HERO_UI.png";

const sidebarItems = [
  { icon: <MdHome size={25} />, label: "Home", path: "/studio" },
  { icon: <MdWeb size={25} />, label: "Builder", path: "/studio/builder" },
  {
    icon: <img src={MATERIAL_UI} alt="Material UI Logo" className="h-[17px]" />,
    label: "Material UI",
    path: "/studio/material-ui",
  },
  {
    icon: <img src={SHADCN} alt="ShadCN Logo" className="h-[21px]" />,
    label: "ShadCN",
    path: "/studio/shadcn",
  },
  {
    icon: <img src={PRIME_REACT} alt="Prime React Logo" className="h-[21px]" />,
    label: "Prime React",
    path: "/studio/prime-react",
  },
  {
    icon: <img src={ANT_DESIGN} alt="Ant Design Logo" className="h-[21px]" />,
    label: "Ant Design",
    path: "/studio/ant-design",
  },
  {
    icon: <img src={CHAKRA_UI} alt="Chakra UI Logo" className="h-[21px]" />,
    label: "Chakra UI",
    path: "/studio/chakra-ui",
  },
  {
    icon: <img src={RADIX_UI} alt="Radix UI Logo" className="h-[21px]" />,
    label: "Radix UI",
    path: "/studio/radix-ui",
  },
  {
    icon: <img src={HEADLESS_UI} alt="Headless UI Logo" className="h-[21px]" />,
    label: "Headless UI",
    path: "/studio/headless-ui",
  },
  {
    icon: <img src={HERO_UI} alt="Hero UI Logo" className="h-[21px]" />,
    label: "Hero UI",
    path: "/studio/hero-ui",
  },
  { icon: <MdPerson size={25} />, label: "Profile", path: "/studio/profile" },
  {
    icon: <MdSettings size={25} />,
    label: "Settings",
    path: "/studio/settings",
  },
];

const StudioLayout: React.FC = () => {
  return (
    <section className="flex w-full justify-between">
      <section className="w-[240px]">
        <aside className="w-full bg-primary-overlay mt-3 rounded-[10px] px-2 pt-2 pb-[4px] h-fit">
          {sidebarItems &&
            sidebarItems.length > 0 &&
            sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
        </aside>
        <SidebarFooter />
      </section>
      <section className="my-3 ml-3 flex-1">
        <Outlet />
      </section>
    </section>
  );
};

export default StudioLayout;
