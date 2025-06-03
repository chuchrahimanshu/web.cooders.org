import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { MUI_COMPONENTS } from "../../../data";

const MUIStudioSidebar: React.FC = () => {
  return (
    <Box
      component="section"
      className="h-[calc(100vh-65px)] w-[240px] flex flex-row items-stretch bg-background"
    >
      <Box component="div" className="w-[240px] h-full overflow-y-auto">
        <List dense>
          {MUI_COMPONENTS.map((item, index) =>
            item.header ? (
              <ListItem key={index} disablePadding>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">{item.header}</Typography>
                  }
                />
              </ListItem>
            ) : (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon && <item.icon fontSize="small" />}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
      <Divider orientation="vertical" flexItem />
    </Box>
  );
};

export default MUIStudioSidebar;
