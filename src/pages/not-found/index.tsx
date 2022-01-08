import { Box, Link, Typography } from "@mui/material"
import React from "react"
import "./notfound.styles.scss"

const NotFound = () => {
  return (
    <Box className="notfound-main">
      <Typography variant="h5">You seem to have missed you way</Typography>
      <div>
        <Link href="/">Go back home</Link>
      </div>
    </Box>
  )
}

export default NotFound
