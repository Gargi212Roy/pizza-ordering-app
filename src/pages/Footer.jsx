import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            This is the Footer
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Copyright @ 2023. All rights reserved
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            Contact us at : xxxxx-xxxxxx
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <BsInstagram style={{ padding: "2px" }} size="30px" />
            <AiFillFacebook style={{ padding: "2px" }} size="30px" />
            <AiFillTwitterSquare style={{ padding: "2px" }} size="30px" />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
