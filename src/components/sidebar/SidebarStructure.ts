import { AiOutlineCluster } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
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
    title: "ER Diagram",
    icon: AiOutlineCluster,
    open: FaAngleDown,
    close: FaAngleUp,
    iconSize: 28,
  },
  {
    id: "2",
    title: "Codestream",
    icon: FaLaptopCode,
    open: FaAngleDown,
    close: FaAngleUp,
    iconSize: 26,
  },
];
