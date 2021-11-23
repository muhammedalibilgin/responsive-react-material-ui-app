import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { theme } from "../theme";

const item = {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(-0.7),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(4),
            cursor: "pointer",
      },
};
const icon = {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
      },
};
const text = {
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
            display: "none",
      },
};

function Leftbar() {
      return (
            <Container
                  sx={{
                        height: "100vh",
                        paddingTop: 7,
                        // marginTop: theme.spacing(10),
                        [theme.breakpoints.down("sm")]: {
                              //      marginTop: theme.spacing(6),
                        },
                        backgroundColor: theme.palette.primary.main,
                        position: "sticky",
                        top: 10,
                        color: "white",
                        [theme.breakpoints.up("sm")]: {
                              backgroundColor: "white",
                              color: "#555",
                              border: "1px solid #ece7e7",
                        },
                  }}
            >
                  <Box sx={{ ...item }}>
                        <Home sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>HomePage</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <Person sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>Friends</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <List sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>Lists</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <PhotoCamera sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>Camera</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <PlayCircleOutline sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>Videos</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <TabletMac sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>Apps</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <Bookmark sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>Bookmark</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <Storefront sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>Market Place</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <Settings sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>Setting</Typography>
                  </Box>
                  <Box sx={{ ...item }}>
                        <ExitToApp sx={{ ...icon }} />
                        <Typography sx={{ ...text }}>LogOut</Typography>
                  </Box>
            </Container>
      );
}

export default Leftbar;
