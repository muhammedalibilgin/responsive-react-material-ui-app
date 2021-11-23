import React from "react";

import { Container } from "@mui/material";
import { theme } from "../theme";
import Post from "./post";

function Feed() {
      return (
            <Container sx={{ marginTop: theme.spacing(10) }}>
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
            </Container>
      );
}

export default Feed;
