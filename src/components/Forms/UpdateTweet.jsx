import { Button, FormGroup, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import * as React from "react"
import CustomModal from "../Modal"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

const formStyles = {
  display: "flex",
  flexDirection: "column",
  marginTop: "1em",
}

const UpdateTweet = ({ open, handleClose }) => {
  // const [open, setOpen] = React.useState(false)

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Box sx={style}>
        <Typography
          sx={{ textAlign: "center" }}
          id="transition-modal-title"
          variant="h6"
          component="h2"
        >
          Update Tweet
        </Typography>

        <form style={formStyles}>
          <FormGroup sx={{ mb: 2 }}>
            <TextField placeholder="Title" />
          </FormGroup>
          <FormGroup sx={{ mb: 2 }}>
            <TextField
              placeholder="What is on your mind?"
              multiline
              minRows={4}
            />
          </FormGroup>

          <FormGroup sx={{ mt: 2 }}>
            <Button>Update</Button>
          </FormGroup>
        </form>
      </Box>
    </CustomModal>
  )
}

export default UpdateTweet
