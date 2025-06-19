import React from 'react'
import { FcGoogle } from "react-icons/fc";
import GITHUB_LOGO from "../../assets/images/GITHUB.png";
import LINKEDIN_LOGO from "../../assets/images/LINKEDIN.png";

const SocialAuth: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full gap-2">
      <div className="flex items-center gap-1 justify-center bg-secondary-overlay h-[45px] cursor-pointer w-full border-2 border-secondary-overlay hover:border-palette-yellow ease-in-out duration-300">
        <FcGoogle size={26} />
      </div>
      <div className="flex items-center gap-1 justify-center bg-secondary-overlay h-[45px] cursor-pointer w-full border-2 border-secondary-overlay hover:border-palette-yellow ease-in-out duration-300">
        <img src={GITHUB_LOGO} alt="GitHub Logo" className="h-[28px]" />
      </div>
      <div className="flex items-center gap-1 justify-center bg-secondary-overlay h-[45px] cursor-pointer w-full border-2 border-secondary-overlay hover:border-palette-yellow ease-in-out duration-300">
        <img src={LINKEDIN_LOGO} alt="LinkedIn Logo" className="h-[22px]" />
      </div>
    </div>
  )
}

export default SocialAuth