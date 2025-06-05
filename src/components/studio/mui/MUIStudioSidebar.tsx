import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { MUI_COMPONENTS } from "../../../data";
import ComponentItem from "./ComponentItem";
import SidebarHeader from "./SidebarHeader";

const MUIStudioSidebar: React.FC = () => {
  return (
    <Box
      component="aside"
      className="h-[calc(100vh-65px)] w-[240px] flex flex-row items-stretch bg-background"
    >
      <Box
        className="w-full h-full"
        sx={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <SidebarHeader />
        <Box className="w-full h-[calc(100vh-120px)] overflow-y-auto hide-scrollbar pt-3">
          {MUI_COMPONENTS.map((group, groupIndex) => (
            <Box key={groupIndex} className="mb-4 px-3">
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
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ height: "100%", alignSelf: "stretch" }}
      />
    </Box>
  );
};

export default MUIStudioSidebar;
