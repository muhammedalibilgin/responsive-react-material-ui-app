import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../theme";

import { Cancel, Search } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const logoLg = {
      display: "none",
      [theme.breakpoints.up("sm")]: {
            display: "block",
      },
};
const logoSm = {
      display: "block",
      [theme.breakpoints.up("sm")]: {
            display: "none",
      },
};
const toolbar = {
      display: "flex",
      justifyContent: "space-between",
};
const search = {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
};
const input = {
      color: "white",
      marginLeft: theme.spacing(2),
};
const icons = {
      alignItems: "center",
};
const badge = {
      marginRight: theme.spacing(2),
};
const searchButton = {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
            display: "none",
      },
};

const cancel = {
      [theme.breakpoints.up("sm")]: {
            display: "none",
      },
};

function Navbar() {
      const [open, setOpen] = useState(false);

      return (
            <AppBar sx={{ position: "fixed" }}>
                  <Toolbar sx={{ ...toolbar }}>
                        <Typography variant="h6" sx={{ ...logoLg }}>
                              mali blgn
                        </Typography>
                        <Typography variant="h6" sx={{ ...logoSm }}>
                              MAB
                        </Typography>
                        <Box
                              sx={{
                                    ...search,
                                    [theme.breakpoints.down("sm")]: {
                                          display: open ? "flex" : "none",
                                          width: "70%",
                                    },
                              }}
                        >
                              <Search />
                              <InputBase placeholder="...search" sx={{ ...input }} />
                              <Cancel sx={{ ...cancel }} onClick={() => setOpen(false)} />
                        </Box>

                        <Box
                              sx={{
                                    ...icons,
                                    display: open ? "none" : "flex",
                              }}
                        >
                              <Search sx={{ ...searchButton }} onClick={() => setOpen(true)} />

                              <Badge badgeContent={14} color="error" sx={{ ...badge }}>
                                    <MailIcon />
                              </Badge>
                              <Badge badgeContent={2} color="error" sx={{ ...badge }}>
                                    <NotificationsIcon />
                              </Badge>
                              <Avatar
                                    alt="Mali Bilgin"
                                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                              />
                        </Box>
                  </Toolbar>
            </AppBar>
      );
}

export default Navbar;
