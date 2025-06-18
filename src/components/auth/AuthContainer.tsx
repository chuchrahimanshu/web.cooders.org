import React from "react";
import { DotGrid } from "../../elements";

const AuthContainer: React.FC<AuthContainerPropsInterface> = ({
  children,
  heading,
}) => {
  return (
    <section className="h-screen bg-primary-background text-primary-text relative">
      <DotGrid
        dotSize={7}
        gap={18}
        baseColor="#2A2A2A"
        activeColor="#ffd230"
        proximity={120}
        shockRadius={150}
        shockStrength={25}
        resistance={1200}
        returnDuration={1.2}
      />
      <form
        onClick={(e) => e.stopPropagation()}
        className="p-8 bg-primary-overlay flex flex-col gap-[8px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]"
      >
        <p className="text-3xl font-bold mb-[12px] hover:text-palatte-yellow duration-300 ease-in-out inline-block">
          {heading}
        </p>
        {children}
      </form>
    </section>
  );
};

export default AuthContainer;
