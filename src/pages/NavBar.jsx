import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"> Food Menu</Link>
          </Typography>
          <Button className="cart-btn">
            <Link to="/cart"> Cart</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
