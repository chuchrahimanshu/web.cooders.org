import React from "react";
import StudioLayoutComponentItem from "./StudioLayoutComponentItem";

interface StudioLayoutOnlyItemsPropsInterface {
  data: StudioComponentItemInterface[];
}

const StudioLayoutOnlyItems: React.FC<StudioLayoutOnlyItemsPropsInterface> = ({
  data,
}) => {
  return (
    <section className="flex-1 min-h-0 overflow-y-auto px-1 hide-scrollbar pt-2">
      {data?.map((componentItem, index) => (
        <StudioLayoutComponentItem
          index={index}
          componentItem={componentItem}
        />
      ))}
    </section>
  );
};

export default StudioLayoutOnlyItems;
