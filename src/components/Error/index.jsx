import { Alert, Box } from "@mui/material"
import React from "react"
import { PropTypes } from "prop-types"

const ErrorMessage = ({ severity, message }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Alert variant="outlined" severity={severity}>
        {message}
      </Alert>
    </Box>
  )
}

ErrorMessage.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default ErrorMessage
