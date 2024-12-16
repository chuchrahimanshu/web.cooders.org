import { AiOutlineCluster } from "react-icons/ai";
import { BiSolidChalkboard } from "react-icons/bi";
import { FaGlobe, FaHandsHelping, FaLaptopCode } from "react-icons/fa";
import { FaAngleDown, FaAngleUp, FaSignalMessenger } from "react-icons/fa6";
import { LuComputer } from "react-icons/lu";
import { TbReplaceFilled } from "react-icons/tb";

export const SidebarHeaderStructure = {
  title: "cooders.org",
  version: "v0.1.0",
  link: "/",
  icon: LuComputer,
};

export const SidebarFooterStructure = {
  fullName: "Himanshu Chuchra",
  username: "@himanshuchuchra",
  link: "",
  image: "https://github.com/shadcn.png",
};

export const SidebarBodyStructure = [
  {
    id: "1",
    title: "Community",
    icon: FaHandsHelping,
    open: FaAngleDown,
    close: FaAngleUp,
    iconSize: 24,
    items: [
      {
        id: "1.1",
        title: "Interactions",
        link: "/community/interactions",
        icon: FaGlobe,
        iconSize: 23,
      },
      {
        id: "1.2",
        title: "Messaging",
        link: "/community/messaging",
        icon: FaSignalMessenger,
        iconSize: 23,
      },
      {
        id: "1.3",
        title: "Codestream",
        link: "/community/codestream",
        icon: FaLaptopCode,
        iconSize: 24,
      },
      {
        id: "1.4",
        title: "Canvas",
        link: "/community/canvas",
        icon: BiSolidChalkboard,
        iconSize: 26,
      },
    ],
  },
  {
    id: "2",
    title: "Converters",
    icon: TbReplaceFilled,
    open: FaAngleDown,
    close: FaAngleUp,
    iconSize: 24,
    items: [
      {
        id: "2.1",
        title: "ER Diagram",
        link: "/converters/er-diagram",
        icon: AiOutlineCluster,
        iconSize: 27,
      },
    ],
  },
];
