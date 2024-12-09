import { FaDiagramNext } from "react-icons/fa6";
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
    heading: "Tools",
    items: [
      {
        title: "ER Diagram",
        link: "/tools/er-diagram",
        icon: FaDiagramNext,
      },
    ],
  },
];
