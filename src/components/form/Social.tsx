import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Social: React.FC = () => {
  return (
    <section className="flex gap-5 justify-center mt-5 md:mt-0">
      <FcGoogle size="27px" className="cursor-pointer" />
      <FaGithub size="27px" className="cursor-pointer" color="#2B3137" />
      <FaLinkedin color="#0077B5" size="26px" className="cursor-pointer" />
    </section>
  );
};

export default Social;
