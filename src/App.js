import { Grid } from "@mui/material";
import * as React from "react";

import Leftbar from "./components/leftbar";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import Rightbar from "./components/rightbar";
import { theme } from "./theme";
import Add from "./components/add";

const right = {
      [theme.breakpoints.down("sm")]: {
            display: "none",
      },
};

function App() {
      return (
            <div>
                  <Navbar />
                  <Grid container>
                        <Grid item sm={2} xs={2}>
                              <Leftbar />
                        </Grid>
                        <Grid item sm={7} xs={10}>
                              <Feed />
                        </Grid>
                        <Grid item sm={3} sx={{ ...right }}>
                              <Rightbar />
                        </Grid>
                  </Grid>
                  <Add />
            </div>
      );
}

export default App;
