import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import React from "react"

interface NDProps {
  message: string;
}

const NoData: React.FC<NDProps> = ({ message }: NDProps) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Box>
  )
}

export default NoData
