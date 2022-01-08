import { Box, Typography } from "@mui/material"
import "./footer.styles.scss"

const Footer = () => {
  return (
    <Box
      sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
      className="footer-main"
    >
      <Typography>
        <b>Chocity</b>Stars 2021 &copy;
      </Typography>
    </Box>
  )
}

export default Footer
