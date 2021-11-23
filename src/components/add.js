import { AddBox } from "@mui/icons-material";
import {
      Alert,
      Button,
      Container,
      Fab,
      FormControl,
      FormControlLabel,
      FormLabel,
      MenuItem,
      Modal,
      Radio,
      RadioGroup,
      Snackbar,
      TextField,
      Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { theme } from "../theme";
// import MuiAlert from "@mui/material/Alert";

const fab = {
      position: "fixed",
      bottom: 30,
      right: 30,
};
const container = {
      width: 500,
      height: 570,
      backgroundColor: "white",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: "absolute",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
      },
};
const form = {
      padding: theme.spacing(2),
};
const item = {
      marginBottom: theme.spacing(3),
};

// const Alert = React.forwardRef(function Alert(props, ref) {
//       return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

function Add() {
      const [open, setOpen] = useState(false);
      const [openAlert, setOpenAlert] = useState(false);

      const handleClose = (event, reason) => {
            if (reason === "clickaway") {
                  return;
            }

            setOpenAlert(false);
      };

      return (
            <div>
                  <Tooltip aria-label="add" title="add" onClick={() => setOpen(true)}>
                        <Fab color="secondary" sx={{ ...fab }}>
                              <AddBox />
                        </Fab>
                  </Tooltip>
                  <Modal open={open}>
                        <Container sx={{ ...container }}>
                              <FormControl sx={{ ...form }} autoComplete="off">
                                    <Box sx={{ ...item }}>
                                          <TextField variant="standard" id="standard-basic" label="title" size="small " sx={{ width: "100%" }} />
                                    </Box>
                                    <Box sx={{ ...item }}>
                                          <TextField
                                                id="outlined-multiline-static"
                                                multiline
                                                rows={4}
                                                defaultValue="Tell your story..."
                                                variant="outlined"
                                                label="description"
                                                size="small "
                                                sx={{ width: "100%" }}
                                          />
                                    </Box>
                                    <Box sx={{ ...item }}>
                                          <TextField select label="Visibility" value="Public">
                                                <MenuItem value="Public">Public</MenuItem>
                                                <MenuItem value="Private">Private</MenuItem>
                                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                                          </TextField>
                                    </Box>
                                    <Box sx={{ ...item }}>
                                          <FormLabel component="legend">Who can comment?</FormLabel>
                                          <RadioGroup>
                                                <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                                                <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends" />
                                                <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" />
                                                <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="Custom (Premium)" />
                                          </RadioGroup>
                                    </Box>
                                    <Box sx={{ ...item }}>
                                          <Button variant="outlined" sx={{ marginRight: 10 }} onClick={() => setOpenAlert(true)}>
                                                Created
                                          </Button>
                                          <Button variant="outlined" color="warning" onClick={() => setOpen(false)}>
                                                Cancel
                                          </Button>
                                    </Box>
                              </FormControl>
                        </Container>
                  </Modal>
                  <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                              This is a success message!
                        </Alert>
                  </Snackbar>
            </div>
      );
}

export default Add;
