import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Box, Divider } from "@mui/material";

const SidebarHeader: React.FC = () => {
  return (
    <React.Fragment>
      <Box component="section" className="flex py-[10px] px-3">
        <DashboardIcon
          sx={{
            backgroundColor: "#202020",
            padding: "3px",
            fontSize: "28px",
          }}
          className="opacity-50 hover:opacity-80 cursor-pointer ease-in-out duration-200 rounded-[3px]"
        />
      </Box>
      <Divider />
    </React.Fragment>
  );
};

export default SidebarHeader;
