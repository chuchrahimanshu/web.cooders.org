import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import MUI_LOGO from "../../../assets/images/MUI_LOGO.svg";
import USER_LOGO from "../../../assets/images/USER_LOGO.jpg";

const MUIStudioHeader: React.FC = () => {
  return (
    <Box component="header">
      <Box
        component="div"
        className="h-16 flex items-center px-[50px] justify-between"
      >
        <Box component="div" className="flex items-center">
          <img src={MUI_LOGO} className="h-[26px]" />
          <Typography
            sx={{
              fontSize: "25.5px",
              paddingLeft: "4px",
              fontWeight: 600,
              marginTop: "-0.5px",
              cursor: "pointer",
            }}
            className="text-[#909090] hover:text-[#007FFF] ease-in-out duration-500"
          >
            Studio
          </Typography>
        </Box>
        <img
          src={USER_LOGO}
          className="h-[40px] rounded-full border-2 border-dashed p-[2px] border-[#909090] hover:border-[#007FFF] cursor-pointer ease-in-out duration-300 user-logo"
        />
      </Box>
      <Divider />
    </Box>
  );
};

export default MUIStudioHeader;
