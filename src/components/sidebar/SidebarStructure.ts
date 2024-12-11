import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FcAdvertising, FcGlobe, FcSynchronize, FcWorkflow } from "react-icons/fc";
import { LuComputer } from "react-icons/lu";

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
    title: "Converters",
    icon: FcSynchronize,
    open: FaAngleDown,
    close: FaAngleUp,
    iconSize: 22,
    items: [
      {
        id: "1.1",
        title: "ER Diagram",
        link: "/converters/er-diagram",
        icon: FcWorkflow,
        iconSize: 21,
      },
    ],
  },
  {
    id: "2",
    title: "Community",
    icon: FcGlobe,
    open: FaAngleDown,
    close: FaAngleUp,
    iconSize: 22,
    items: [
      {
        id: "2.1",
        title: "Interactions",
        link: "/community/interactions",
        icon: FcAdvertising,
        iconSize: 21,
      }
    ]
  }
];
