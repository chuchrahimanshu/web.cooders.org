import React from "react";
import {
  MdDashboard,
  MdPeopleAlt,
  MdSettings,
  MdCode,
  MdStore,
  MdShoppingCart,
  MdTipsAndUpdates,
} from "react-icons/md";

const Dashboard: React.FC = () => {
  return (
    <section className="h-screen bg-primary-background text-white w-screen p-[12px]">
      <header className="h-[72px] bg-primary-overlay rounded-[10px]"></header>
      <div className="flex h-[calc(100vh-86px)]">
        <section className="w-[250px] bg-primary-overlay my-3 rounded-[10px] p-[6px]">
          <div className="flex items-center h-10 w-full rounded-[10px] hover:bg-secondary-overlay duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            <MdDashboard size={20} className="w-[20%]" />
            <p className="text-[16px] font-medium">Dashboard</p>
          </div>
          <div className="flex items-center h-10 w-full rounded-[10px] hover:bg-secondary-overlay duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            <MdStore size={20} className="w-[20%]" />
            <p className="text-[16px] font-medium">Studio</p>
          </div>
          <div className="flex items-center h-10 w-full rounded-[10px] hover:bg-secondary-overlay duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            <MdPeopleAlt size={20} className="w-[20%]" />
            <p className="text-[16px] font-medium">Community</p>
          </div>
          <div className="flex items-center h-10 w-full rounded-[10px] hover:bg-secondary-overlay duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            <MdTipsAndUpdates size={20} className="w-[20%]" />
            <p className="text-[16px] font-medium">SolveX</p>
          </div>
          <div className="flex items-center h-10 w-full rounded-[10px] hover:bg-secondary-overlay duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            <MdCode size={20} className="w-[20%]" />
            <p className="text-[16px] font-medium">Snippets</p>
          </div>
          <div className="flex items-center h-10 w-full rounded-[10px] hover:bg-secondary-overlay duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            <MdShoppingCart size={20} className="w-[20%]" />
            <p className="text-[16px] font-medium">Marketplace</p>
          </div>
          <div className="flex items-center h-10 w-full rounded-[10px] hover:bg-secondary-overlay duration-300 ease-in-out cursor-pointer text-white/60 hover:text-palette-sky">
            <MdSettings size={20} className="w-[20%]" />
            <p className="text-[16px] font-medium">Settings</p>
          </div>
        </section>
        <section className="w-[calc(100vw-250px)] p-3"></section>
      </div>
    </section>
  );
};

export default Dashboard;
