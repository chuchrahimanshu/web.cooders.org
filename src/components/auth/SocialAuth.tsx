import React from "react";
import { FcGoogle } from "react-icons/fc";
import GITHUB_LOGO from "../../assets/images/GITHUB.png";
import LINKEDIN_LOGO from "../../assets/images/LINKEDIN.png";

const socialButtons = [
  {
    id: "google",
    icon: <FcGoogle size={26} />,
    alt: "Sign in with Google",
  },
  {
    id: "github",
    icon: (
      <img src={GITHUB_LOGO} alt="Sign in with GitHub" className="h-[28px]" />
    ),
  },
  {
    id: "linkedin",
    icon: (
      <img
        src={LINKEDIN_LOGO}
        alt="Sign in with LinkedIn"
        className="h-[22px]"
      />
    ),
  },
];

const SocialAuth: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full gap-10">
      {socialButtons.map(({ id, icon, alt }) => (
        <div
          key={id}
          title={alt}
          className="cursor-pointer transition duration-200 ease-in-out"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default SocialAuth;
