import React from "react";
import { AnimatedButton, SplashCursor } from "../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const Home: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleButtonClick = () => {
    navigate("/signup");
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <SplashCursor />
      </div>
      <div
        className="absolute inset-0 z-[1]
        [background-size:23px_23px]
        [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] 
        dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      />
      <div className="absolute bottom-[25px] right-[25px] z-[3]">
        <AnimatedButton
          content="GET STARTED"
          handleButtonClick={handleButtonClick}
        />
      </div>
    </section>
  );
};

export default Home;
