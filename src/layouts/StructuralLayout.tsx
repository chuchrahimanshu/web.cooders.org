import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, SidebarTransition } from "../components";

const StructuralLayout: React.FC = () => {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

  const handleSidebarToggle = () => {
    setSidebarToggle((prev) => !prev);
  };
  return (
    <main className="h-screen overflow-hidden w-full bg-base-background text-base-text scrollbar-none flex">
      <SidebarTransition sidebarToggle={sidebarToggle} />
      <section className="w-full">
        <Header handleSidebarToggle={handleSidebarToggle} />
        <Outlet />
      </section>
    </main>
  );
};

export default StructuralLayout;
