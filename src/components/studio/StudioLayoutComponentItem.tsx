import React from "react";

interface StudioLayoutComponentItemPropsInterface {
  index: string | number;
  componentItem: StudioComponentItemInterface;
}

const StudioLayoutComponentItem: React.FC<
  StudioLayoutComponentItemPropsInterface
> = ({ index, componentItem }) => {
  return (
    <div
      key={index}
      className="flex w-full items-center gap-2 text-white/60 hover:text-palette-sky ease-in-out transition duration-200 cursor-pointer h-8 hover:bg-secondary-overlay rounded-[10px]"
    >
      {componentItem.icon && (
        <componentItem.icon
          size={18}
          className="w-[15%] mr-1 pl-[10px] -ml-1"
        />
      )}
      <p className="text-[15px]">{componentItem.title}</p>
    </div>
  );
};

export default StudioLayoutComponentItem;
