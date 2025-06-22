import React from "react";
import { Logo } from "../../elements";
import AVATAR from "../../assets/images/AVATAR.jpeg";

const Dashboard: React.FC = () => {
  return (
    <section className="h-screen bg-primary-background text-white w-screen p-[12px]">
      <header className="h-[72px] bg-primary-overlay rounded-[10px] flex items-center justify-between px-[15px]">
        <Logo />
        <section className="flex items-center gap-4">
          <p className="text-[16px] font-semibold duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            DASHBOARD
          </p>
          <p className="text-[16px] font-semibold duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            STUDIO
          </p>
          <p className="text-[16px] font-semibold duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            COMMUNITY
          </p>
          <p className="text-[16px] font-semibold duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            SOLVEX
          </p>
          <p className="text-[16px] font-semibold duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            MARKETPLACE
          </p>
        </section>
        <img src={AVATAR} alt="User Avatar" className="h-10 rounded-full" />
      </header>
      <div className="flex h-[calc(100vh-86px)]"></div>
    </section>
  );
};

export default Dashboard;
