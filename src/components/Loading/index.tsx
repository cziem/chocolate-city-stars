import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import { grey } from "@mui/material/colors"

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "81.25vh",
      }}
    >
      <CircularProgress sx={{ color: grey.A700 }} />
    </Box>
  )
}

export default Loading
