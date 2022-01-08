import { Box, Fab } from "@mui/material"
import React from "react"
import { MdAdd } from "react-icons/md"
import "./addTweet.styles.scss"

const AddTweet = ({ handleClick }: {handleClick: React.MouseEventHandler<HTMLButtonElement>}) => {
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
        <MdAdd className="add-icon" /> Tweet
      </Fab>
    </Box>
  )
}

export default AddTweet
