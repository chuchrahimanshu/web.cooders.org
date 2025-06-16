import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const ComponentItem: React.FC<ComponentItemPropsInterface> = ({
  compIndex,
  compItem,
  index,
}) => {
  const [focusedComponent, setFocusedComponent] =
    useState<ComponentInFocusStateInterface>({ parentID: "", componentID: "" });

  const isFocused =
    focusedComponent.parentID === index &&
    focusedComponent.componentID === compIndex;

  const handleMouseOver = () =>
    setFocusedComponent({ parentID: index, componentID: compIndex });

  const handleMouseOut = () =>
    setFocusedComponent({ parentID: "", componentID: "" });

  const opacity = isFocused ? 0.8 : 0.5;
  const backgroundColor = isFocused ? "#202020" : "#101010";

  return (
    <Box
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="flex w-full items-center py-1 px-3 rounded-[4px] cursor-pointer mb-[10px] ease-in-out duration-150"
      sx={{ backgroundColor }}
    >
      {compItem.icon && (
        <Box sx={{ width: "18%", textAlign: "left" }}>
          <compItem.icon sx={{ fontSize: 18, fontWeight: 600, opacity }} />
        </Box>
      )}
      <Typography sx={{ fontSize: 14, fontWeight: 500, opacity }}>
        {compItem.title}
      </Typography>
    </Box>
  );
};

export default ComponentItem;
