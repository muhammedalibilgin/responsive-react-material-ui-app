import React from "react";

import { Avatar, AvatarGroup, Container, ImageList, ImageListItem, Link, Typography } from "@mui/material";
import { theme } from "../theme";

const title = {
      fontSize: 16,
      fontWeight: 500,
      color: "#555",
};
const link = {
      marginRight: theme.spacing(3),
      fontWeight: 500,
      color: "#554",
};

function Rightbar() {
      return (
            <Container
                  sx={{
                        // height: "100vh",
                        paddingTop: 7,
                        // marginTop: theme.spacing(10),
                        backgroundColor: "orange",
                        position: "sticky",
                        top: 10,
                  }}
            >
                  <Typography sx={{ ...title }} gutterBottom>
                        {" "}
                        Online Friends
                  </Typography>
                  <AvatarGroup max={8} sx={{ marginBottom: 10 }}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                        <Avatar alt="Agnes Walker" />
                        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/6.jpg" />
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/7.jpg" />
                        <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/8.jpg" />
                        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/9.jpg" />
                  </AvatarGroup>
                  <Typography sx={{ ...title }} gutterBottom>
                        {" "}
                        Images List
                  </Typography>
                  <ImageList variant="quilted" cols={3} rowHeight={150} sx={{ marginBottom: 10 }}>
                        <ImageListItem>
                              <img
                                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format&dpr=2"
                                    alt="some images here"
                                    loading="lazy"
                              />
                        </ImageListItem>
                        <ImageListItem>
                              <img
                                    src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format&dpr=2"
                                    alt="some images here"
                                    loading="lazy"
                              />
                        </ImageListItem>{" "}
                        <ImageListItem>
                              <img
                                    src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format&dpr=2"
                                    alt="some images here"
                                    loading="lazy"
                              />
                        </ImageListItem>{" "}
                        <ImageListItem>
                              <img
                                    src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format&dpr=2"
                                    alt="some images here"
                                    loading="lazy"
                              />
                        </ImageListItem>{" "}
                        <ImageListItem>
                              <img
                                    src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format&dpr=2"
                                    alt="some images here"
                                    loading="lazy"
                              />
                        </ImageListItem>{" "}
                        <ImageListItem>
                              <img
                                    src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format&dpr=2"
                                    alt="some images here"
                                    loading="lazy"
                              />
                        </ImageListItem>
                  </ImageList>
                  <Typography sx={{ ...title }} gutterBottom>
                        {" "}
                        Categories
                  </Typography>
                  <Link href="#" sx={{ ...link }} variant="body2">
                        Sport
                  </Link>
                  <Link href="#" sx={{ ...link }} variant="body2">
                        Food
                  </Link>
                  <Link href="#" sx={{ ...link }} variant="body2">
                        Movies
                  </Link>
                  <Link href="#" sx={{ ...link }} variant="body2">
                        Science
                  </Link>
                  <Link href="#" sx={{ ...link }} variant="body2">
                        Art
                  </Link>
            </Container>
      );
}

export default Rightbar;
