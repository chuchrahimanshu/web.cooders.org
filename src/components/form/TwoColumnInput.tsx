import React, { ReactNode } from "react";

const TwoColumnInput: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <section className="md:flex md:gap-5">{children}</section>;
};

export default TwoColumnInput;
