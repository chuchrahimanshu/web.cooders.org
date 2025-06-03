import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { MUIStudioHeader } from "../../components";
import { MUI_THEME } from "../../data";

const MUIStudio: React.FC = () => {
  return (
    <ThemeProvider theme={MUI_THEME}>
      <CssBaseline />
      <MUIStudioHeader />
    </ThemeProvider>
  );
};

export default MUIStudio;
