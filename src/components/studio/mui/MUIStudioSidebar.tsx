import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { MUI_COMPONENTS } from "../../../data";
import ComponentItem from "./ComponentItem";

const MUIStudioSidebar: React.FC = () => {
  return (
    <Box
      component="aside"
      className="h-[calc(100vh-65px)] w-[240px] flex flex-row items-stretch bg-background"
    >
      <Box
        className="w-full h-full overflow-y-auto p-3 hide-scrollbar"
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {MUI_COMPONENTS.map((group, groupIndex) => (
          <Box key={groupIndex} className="mb-4">
            <Typography
              sx={{
                fontSize: 13.5,
                fontWeight: 600,
                opacity: 0.5,
                mb: 1.5,
              }}
            >
              {group.header.toUpperCase()}
            </Typography>
            {group.contents.map((compItem, compIndex) => (
              <ComponentItem
                key={`${groupIndex}-${compIndex}`}
                compIndex={compIndex}
                compItem={compItem}
                index={groupIndex}
              />
            ))}
          </Box>
        ))}
      </Box>
      <Divider orientation="vertical" flexItem />
    </Box>
  );
};

export default MUIStudioSidebar;
