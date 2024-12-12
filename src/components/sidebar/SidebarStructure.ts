import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import {
  FcAdvertising,
  FcCollaboration,
  FcGlobe,
  FcSynchronize,
  FcWorkflow,
} from "react-icons/fc";
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
      },
      {
        id: "2.2",
        title: "Messaging",
        link: "/community/messaging",
        icon: FcCollaboration,
        iconSize: 21,
      },
    ],
  },
  {
    id: "3",
    title: "Accounts",
    icon: FcAdvertising,
    open: FaAngleDown,
    close: FaAngleUp,
    iconSize: 22,
    items: [
      {
        id: "3.1",
        title: "Authenticate",
        link: "/accounts",
        icon: FcAdvertising,
        iconSize: 21,
      },
      {
        id: "3.2",
        title: "Sign Up",
        link: "/accounts/signup",
        icon: FcAdvertising,
        iconSize: 21,
      },
      {
        id: "3.3",
        title: "Sign In",
        link: "/accounts/signin",
        icon: FcAdvertising,
        iconSize: 21,
      },
      {
        id: "3.4",
        title: "Email Verification",
        link: "/accounts/validates/email",
        icon: FcAdvertising,
        iconSize: 21,
      },
      {
        id: "3.5",
        title: "Change Password",
        link: "/accounts/updates/password",
        icon: FcAdvertising,
        iconSize: 21,
      },
      {
        id: "3.6",
        title: "Forget Password",
        link: "/accounts/validates/password",
        icon: FcAdvertising,
        iconSize: 21,
      },
      {
        id: "3.7",
        title: "TFA",
        link: "/accounts/validates/otp",
        icon: FcAdvertising,
        iconSize: 21,
      },
    ],
  },
];
