import React, { useState } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";

const BarHeader: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleCloseIconClick = () => {
    setContent("");
  };

  return (
    <div className="h-[75px] flex items-center justify-center border-b border-b-base-border">
      <div className="flex items-center justify-center gap-2 bg-base-border py-[7px] px-3 rounded-full">
        <IoSearchSharp size={20} className="opacity-50" />
        <input
          type="text"
          name="search"
          className="bg-transparent outline-none"
          onChange={handleInputChange}
          value={content}
        />
        <IoClose
          size={23}
          className="opacity-50 hover:opacity-90 cursor-pointer transition-all ease-in-out duration-200"
          onClick={handleCloseIconClick}
        />
      </div>
    </div>
  );
};

export default BarHeader;
