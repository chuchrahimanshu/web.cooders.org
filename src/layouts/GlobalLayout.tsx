import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const GlobalLayout: React.FC = () => {
  return (
    <section className="w-screen h-screen bg-primary-background text-white p-[12px]">
      <Header />
      <main className="flex h-[calc(100vh-86px)]">
        <Outlet />
      </main>
    </section>
  );
};

export default GlobalLayout;
