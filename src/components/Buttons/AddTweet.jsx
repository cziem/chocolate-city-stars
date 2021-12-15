import { Box, Fab } from "@mui/material"
import React from "react"
import { MdAdd } from "react-icons/md"

const AddTweet = ({ handleClick }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "2%",
        right: "2%",
        width: "max-content",
      }}
    >
      <Fab
        color="primary"
        variant="extended"
        aria-label="add"
        onClick={handleClick}
      >
        <MdAdd /> Tweet
      </Fab>
    </Box>
  )
}

export default AddTweet
