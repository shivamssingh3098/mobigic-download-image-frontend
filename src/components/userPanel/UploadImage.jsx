import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState("");
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState(false);
  const uploadImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const currentUsersId = localStorage.getItem("currentUser");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("currentUsersId", currentUsersId);
      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        `/api/v1/users/upload-file/${currentUsersId}`,
        formData
      );
      console.log(res);
      setMsg(res.data.message);
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, [1000]);
    } catch (error) {
      console.log(error);
    }
  };

  const inputDocuments = {
    borderRadius: "10px",
    // background: "rgba(255, 255, 255, 0.31)",
    color: "rgba(255, 255, 255, 0.96)",
    border: " 1px solid rgba(103, 103, 103, 0.75)",
    "& fieldset": {
      border: "none",
      color: "rgba(255, 255, 255, 0.96);",
    },
  };

  return (
    <div>
      {" "}
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit}>
            <Typography sx={{ color: "grey.main" }}> File Upload</Typography>

            <TextField
              fullWidth
              variant="outlined"
              required
              inputProps={{ accept: "image/*,.pdf" }}
              type="file"
              size="small"
              onChange={(e) => uploadImage(e)}
              sx={inputDocuments}
            />

            <br />
            <Typography color={"red"}>{open ? msg : ""}</Typography>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                background: `linear-gradient(180deg, #FF9B25 0%, rgba(189, 50, 20, 0.76) 100%)`,
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.25)",
                color: "white.main",
                mt: 2,
              }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default UploadImage;
