import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";

import { MUIStudioHeader, MUIStudioSidebar } from "../../components";
import { MUI_THEME } from "../../data";

const MUIStudio: React.FC = () => {
  return (
    <ThemeProvider theme={MUI_THEME}>
      <CssBaseline />
      <MUIStudioHeader />
      <Box component="section" className="flex">
        <MUIStudioSidebar />
      </Box>
    </ThemeProvider>
  );
};

export default MUIStudio;
