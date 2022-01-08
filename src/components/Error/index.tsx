import { Alert, Box } from "@mui/material"

interface IEMProps {
  severity: "error" | "info" | "success" | "warning";
  message: string;
}

const ErrorMessage = ({ severity, message }: IEMProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Alert variant="outlined" severity={severity}>
        {message}
      </Alert>
    </Box>
  )
}

export default ErrorMessage
