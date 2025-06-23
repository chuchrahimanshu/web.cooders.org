import React from "react";
import StudioLayoutComponentGroup from "./StudioLayoutComponentGroup";

interface StudioLayoutPropsInterface {
  data: StudioComponentDataInterface[];
}

const StudioLayout: React.FC<StudioLayoutPropsInterface> = ({ data }) => {
  return (
    <section className="flex-1 min-h-0 overflow-y-auto px-1 hide-scrollbar">
      {data?.map((groupItem, groupIndex) => (
        <StudioLayoutComponentGroup
          groupIndex={groupIndex}
          groupItem={groupItem}
        />
      ))}
    </section>
  );
};

export default StudioLayout;
