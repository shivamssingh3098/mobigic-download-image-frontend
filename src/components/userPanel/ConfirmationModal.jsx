import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const ConfirmationModal = (props) => {
  const matches = useMediaQuery("(min-width:1100px)");
  const matchesDown = useMediaQuery("(min-width:646px)");

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "550px",
    width: matches ? "40%" : matchesDown ? "60%" : "90%",
    bgcolor: "background.paper",
    borderRadius: "16px",
    boxShadow: 24,
    p: 2,
    overflow: "auto",
  };
  const addressTxt = {
    width: { xs: "100%", sm: "80%" },

    borderRadius: "10px",
    // background: "rgba(255, 255, 255, 0.31)",
    color: "rgba(255, 255, 255, 0.96)",
    border: "1px solid black",
    "& fieldset": {
      border: "none",
      color: "rgba(255, 255, 255, 0.96);",
    },
  };
  console.log("props.restaurantData props.restaurantData");
  return (
    <>
      <Modal
        open={props.openModal}
        onClose={props.handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
            gap={1}
            sx={{ position: "relative" }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "27px",
                color: "rgba(13, 30, 55, 0.67)",
                justifySelf: "start",
              }}
            >
              Enter this {props.imageCode} Code to download image this file
            </Typography>

            <IconButton onClick={props.handleCloseModal} aria-label="delete">
              <CancelIcon />
            </IconButton>
          </Stack>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              <TextField
                fullWidth
                name="fullName"
                value={props.code}
                //  defaultValue={restaurantDetails.bankDetail.bankName}

                onChange={(e) => props.setCode(e.target.value)}
                size="small"
                required
                sx={addressTxt}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => props.downloadImage()}
                sx={{
                  mt: 4,
                  background: `linear-gradient(180deg, #FF9B25 0%, rgba(189, 50, 20, 0.76) 100%)`,
                  boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.25)",
                  color: "white.main",
                  me: 5,
                  width: "max-content",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
