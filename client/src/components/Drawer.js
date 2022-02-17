import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "white",
            width: "130px",
          },
        }}
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        sx={{}}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/login">LogIn</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/register">Register</Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ color: "white" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
