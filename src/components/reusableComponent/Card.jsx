import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import axios from "axios";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ConfirmationModal from "../userPanel/ConfirmationModal";
var FileSaver = require("file-saver");

export default function ImgCard(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const [code, setCode] = React.useState(null);

  const downloadImage = () => {
    if (props.item.code == code) {
      FileSaver.saveAs(props.item.fileName);
      setOpenModal(false);
    } else {
      alert("Invalid code: " + code);
      console.log("props.item.code", props.item.code);
      setCode(null);
      setOpenModal(false);
    }
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const deleteImage = async (id) => {
    try {
      const res = await axios.delete(
        `/api/v1/users/delete-uploaded-files/${id}`
      );
      props.setMsg(res.data.message);
      props.setOpen(true);

      props.getImages(props.id);
    } catch (error) {
      alert("Invalid request");
      console.log(error);
    }
  };

  const downloadFile = (code) => {
    console.log(code);
    handleOpenModal();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={`${props.item.fileName}`}
            alt="green iguana"
          />
          <CardContent>
            <Button onClick={() => deleteImage(props.item._id)}>Delete</Button>

            <CloudDownloadIcon
              onClick={() => downloadFile(props.item.fileName, props.item.code)}
            />
          </CardContent>
        </CardActionArea>
      </Card>

      <ConfirmationModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        downloadImage={downloadImage}
        setCode={setCode}
        code={code}
      />
    </>
  );
}
