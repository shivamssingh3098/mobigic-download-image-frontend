import * as React from "react";

import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";

import ImgCard from "../reusableComponent/Card";

export default function UserHomePage() {
  const [data, setData] = React.useState([]);
  const currentUsersId = localStorage.getItem("currentUser");
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState(false);
  console.log("currentUser", currentUsersId);
  const [id, setId] = React.useState(currentUsersId);

  const getImages = async () => {
    const res = await axios.get(`/api/v1/users/get-uploaded-file/${id}`);
    setData(res.data.data);

    console.log(res);

    try {
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getImages();
  }, []);
  console.log(data);
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {data?.map((item) => (
          <Grid item xs={12} sm={5} md={3} mt={5}>
            <ImgCard
              item={item}
              getImages={getImages}
              setOpen={setOpen}
              setMsg={setMsg}
              id={id}
            />
          </Grid>
        ))}

        <br />
        <Typography color={"red"}>{open ? msg : ""}</Typography>
      </Grid>
    </>
  );
}
