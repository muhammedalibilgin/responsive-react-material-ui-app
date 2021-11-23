import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";

const media = {
      height: 350,
      [theme.breakpoints.down("sm")]: {
            height: 200,
      },
};
const card = {
      marginBottom: theme.spacing(5),
};

function Post() {
      return (
            <Card sx={{ ...card }}>
                  <CardActionArea>
                        <CardMedia sx={{ ...media }} title="my post" image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
                        <CardContent>
                              <Typography gutterBottom variant="h5">
                                    My First Post
                              </Typography>
                              <Typography variant="body2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                              </Typography>
                        </CardContent>
                  </CardActionArea>
                  <CardActions>
                        <Button size="small" variant="contained">
                              Share
                        </Button>
                        <Button size="small" variant="contained">
                              Learn More
                        </Button>
                  </CardActions>
            </Card>
      );
}

export default Post;
