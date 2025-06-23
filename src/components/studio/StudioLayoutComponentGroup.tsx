import React from "react";
import StudioLayoutComponentItem from "./StudioLayoutComponentItem";

interface StudioLayoutComponentGroupPropsInterface {
  groupIndex: string | number;
  groupItem: StudioComponentDataInterface;
}

const StudioLayoutComponentGroup: React.FC<
  StudioLayoutComponentGroupPropsInterface
> = ({ groupIndex, groupItem }) => {
  return (
    <div key={groupIndex}>
      <p className="font-bold text-white/60 text-sm pt-2 mb-1">
        {groupItem.header?.toUpperCase()}
      </p>
      {groupItem?.contents?.map((componentItem, index) => (
        <StudioLayoutComponentItem
          index={index}
          componentItem={componentItem}
        />
      ))}
    </div>
  );
};

export default StudioLayoutComponentGroup;
